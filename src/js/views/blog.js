import { html, repeat } from './lib.js';
import { AUTHOR_IMAGES as authorImages, BLOG_IMAGES as images } from '../utils/images.js';
import { getArticles, getArticlesByPage, countAllArticles, getTrendingArticles } from '../api/data.js';
import { paginator } from '../utils/paginator.js';
import { hasOneHourPassed } from '../utils/utils.js';

const blog = {
  ARTICLES_CAP: 3,
  mainArticle: null,
  pages: [],
  totalPages: 0,
  currentPage: 1,
  setNewArticleEveryHour(hourHasPassed, articlesData) {
    if (hourHasPassed && articlesData) {
      const randomIndex = Math.round(Math.random() * count);
       this.mainArticle = allArticles.results[randomIndex];
    }
  },
  resetArticleOnRefresh(articles) {
    // this is not for production. Only for dev mode when browser refreshes
    if (!this.mainArticle) {
      this.mainArticle = articles.results[0];
    }
  },
  setPages(count) {
    this.pages = paginator(this.currentPage, count);
    this.totalPages = Math.ceil(count / this.ARTICLES_CAP)
  }
}

export const blogPage = async (ctx) => {
  const query = new URLSearchParams(ctx.querystring);
  blog.currentPage = +query?.get('page') || 1;

  const hourHasPassed = hasOneHourPassed();

  const data = [
    countAllArticles(),
    getArticlesByPage(blog.ARTICLES_CAP, blog.currentPage),
    getTrendingArticles(),
  ];

  if (hourHasPassed) {
    data.push(getArticles());
  }

  const [{ count }, articlesByCap, trending, all] = await Promise.all(data);

  blog.setNewArticleEveryHour(hourHasPassed, all);
  blog.resetArticleOnRefresh(trending);
  blog.setPages(count);

  ctx.render(blogTemplate(articlesByCap, trending));
};

const blogTemplate = (articles, trendingArticles) => html`
<div class="container">
  <!-- Main Article -->
    <main>
       ${mainArticleTemplate(blog.mainArticle)} 
    </main>
    <hr class="linebreak">

    <!-- Trending -->
    <section class="trending">
      <h2>Trending</h2>
      <div class="articles__wrapper">
        ${trendingArticles.results.map(trendingArticlesTemplate)}
      </div>
    </section>

    <!-- Latest -->
    <section class="ar-flex-wrap mb">
        <section class="flex__1 mb">
          <h3 class="mb1">Latest Articles</h3>
          ${articles.results.map(latestArticlesTemplate)}
          ${paginatorTemplate()}
        </section>

        <!-- Aside -->
        <aside class=flex__2>
          <h3 class="mb1">Most Viewed</h3>

          <div class="categories mb1">
            <span>This Week</span>
            <span>This Month</span>
          </div>

          <section class="box bs">
            <h4>How to imrpove your stamina and why cycling is one of the best ways</h4>
            <time>November 3, 2021</time>
          </section>
          <section class="box bs">
            <h4>How to protect yourself from heat (reccommendations)</h4>
            <time>November 3, 2021</time>
          </section>
          <section class="box bs">
            <h4>How to protect yourself from heat (reccommendations)</h4>
            <time>November 3, 2021</time>
          </section>
          <section class="box bs">
            <h4>How to protect yourself from heat (reccommendations)</h4>
            <time>November 3, 2021</time>
          </section>
          <section class="box bs">
            <h4>How to protect yourself from heat (reccommendations)</h4>
            <time>November 3, 2021</time>
          </section>
        </aside>
    </section>
</div>
`;

const mainArticleTemplate = (mainArticle) => html`
  <article>
    <div class="article__wrapper">
      <div class="article__img">
        <a href="/article/${mainArticle.objectId}">
          <img
            src="${mainArticle.imageUrl.includes('.')
              ? mainArticle.imageUrl
              : images[mainArticle.imageUrl]}"
            alt=""
            srcset=""
        /></a>
      </div>
      <div class="article__content">
        <section class="article__text flow">
          <h1>${mainArticle.title}</h1>
          <p>${mainArticle.content.substring(0, 500) + '...'}</p>
          <a href="/article/${mainArticle.objectId}">
            <button class="btn btn__rm">Read More</button>
          </a>
        </section>
        <footer>
          <div class="ar__footer">
            <span>
              <time>${mainArticle.createdAt.substring(0, 10)}</time>
              <p class="readtime">5 min read</p>
            </span>
            <div class="ar__author">
              <img
                src="${authorImages[mainArticle.author]}"
                class="author__img"
                alt="Author Picutre"
                srcset=""
              />
              <div class="author__info">
                <span>${mainArticle.author}</span>
                <hr />
                <span>Author</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    <!-- WRAPPER-->
  </article>
`;

const trendingArticlesTemplate = (article) => html`
  <article>
    <a href="/article/${article.objectId}">
      <div class="trending-article bs">
        <div class="trending-article__image">
          <img
            src="${article.imageUrl.includes('.')
              ? article.imageUrl
              : images[article.imageUrl]}"
            alt=""
            srcset=""
          />
        </div>
        <div class="trending-article__title">
          <h3>${article.title}</h3>
        </div>
        <div class="trending-article__body">
          <span>Cycling</span>
          <span>${article.readTime} min read</span>
        </div>
      </div>
    </a>
  </article>
`;

const latestArticlesTemplate = (article) => html` 
<article>
  <a href="/article/${article.objectId}">
    <div class="latest bs">
      <!-- image -->
      <section class="latest__img">
        <img
          src="${article.imageUrl.includes('.')
            ? article.imageUrl
            : images[article.imageUrl]}"
          alt="article image"
          srcset=""
        />
      </section>
      <!-- wrapper -->
      <section class="article__wrap">
        <header>
          <h2>${article.title}</h2>
          <p>${article.content.substring(0, 200) + '...'}</p>
        </header>

        <footer>
          <div class="ar__footer">
            <span>
              <time>${article.createdAt.substring(0, 10)}</time>
              <p>${article.readTime} min read</p>
            </span>
            <section class="ar__author">
              <img
                src="${authorImages[article.author]}"
                class="author__img"
                alt="Author Picutre"
                srcset=""
              />
              <header class="author__info">
                <span>${article.author}</span>
                <hr />
                <span class="author__info__name">Author</span>
              </header>
            </section>
          </div>
        </footer>
      </section>
    </div>
  </a>
</article>`;

const paginatorTemplate = () => html`
  <div class="pages">
    <ul class="pages__nav">
    <li class="pages__page">
        <a href="/blog?page=${blog.currentPage - 1}" class="${blog.currentPage == 1 ? "disabled" : ""}">Prev</a>
    </li>
      ${repeat(blog.pages, (page) =>
        html`
        <li class="pages__page ${page == blog.currentPage ? "current-page" : null}">
            <a href="/blog?page=${page}">${page}</a>
        </li>`)}
    <li class="pages__page">
      <a href="/blog?page=${blog.currentPage + 1}" class="${blog.currentPage >= blog.totalPages ? "disabled" : ""}">Prev</a>
    </li>
    </ul>
  </div>
`;