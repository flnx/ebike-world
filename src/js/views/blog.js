import { html } from './lib.js';
import { AUTHOR_IMAGES as authorImages, BLOG_IMAGES as images } from '../utils/images.js';
import { getArticles } from '../api/data.js';

export const blogPage = async (ctx) => {
  const articlesData = await getArticles();

  const mainArticle = articlesData.results[0];
  const articles = articlesData.results.slice(1);

  console.log(mainArticle);
  console.log(articles);

  ctx.render(blogTemplate(mainArticle, articles));
};

const blogTemplate = (mainArticle, articles) => html`

<div class="container">
    <main>
      ${mainArticleTemplate(mainArticle)}
    </main>

    <hr class="linebreak">

    <section class="trending">
      <h2>Trending</h2>
      <div class="articles__wrapper">
        ${articles.slice(0, 3).map(trendingArticlesTemplate)}
      </div>
    </section>

    <!-- LATEST -->

    <section>
      <section class="ar-flex-wrap mb">
        <section class="flex__1 mb">
          <h3 class="mb1">Latest Articles</h3>
          <div class="categories mb1">
            <span>Workouts</span>
            <span>Bikes</span>
            <span>News</span>
            <span>Advice</span>
            <span>Parts</span>
            <span>Teach Me</span>
          </div>
        ${articles.map(latestArticlesTemplate)}
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
  </div>
  </section>


  </div>
`;

const mainArticleTemplate = (mainArticle) => html`
  <article>
    <div class="article__wrapper">
      <div class="article__img">
        <img
          src="${mainArticle.imageUrl.includes('.')
            ? mainArticle.imageUrl
            : images[mainArticle.imageUrl]}"
          alt=""
          srcset=""
        />
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
              <time>July 24, 2021</time>
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
                <span>Elena Malinova</span>
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
  </article>
`;

const latestArticlesTemplate = (article) => html` <article>
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
              <time>${article.createdAt}</time>
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
