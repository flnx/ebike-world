import { html } from './lib.js';
import { getArticle, getArticleLikes } from '../api/data.js';
import {
  AUTHOR_IMAGES as authorImages,
  BLOG_IMAGES as blogImages,
} from '../utils/images.js';

export const articleDetailsPage = async (ctx) => {
  const onLike = (e) => {
    e.preventDefault();
    e.stopPropagation();


  }

  const [articleData, likesData] = await Promise.all([
    getArticle(ctx.params.id),
    getArticleLikes(ctx.params.id),
  ]);

  ctx.render(articleDetailsTemplate(articleData, likesData, onLike));
};

const articleDetailsTemplate = (article, likes, onLike) => html`
  <div class="container article-wrapper">
    <article class="flex__blog__1">
      <div class="rm__wrapper flow">
        <h1>${article.title}</h1>
        <img
          src="${article.imageUrl.includes('.')
            ? article.imageUrl
            : blogImages[article.imageUrl]}"
          alt=""
          srcset=""
        />
        <div class="ar__footer">
          <span>
            <time>${article.createdAt.substring(0, 10)}</time>
            <p>${article.readTime} min read</p>
          </span>
          <div class="like">
            <a href="" @click=${onLike}>
              <!-- <i class="fa-sharp fa-solid fa-heart"></i> -->
              <i class="fa-regular fa-heart"></i>
            </a>
            <span>Likes: ${likes.results.length}</span>
          </div>
          <div class="ar__author">
            <img
              src="${authorImages[article.author]}"
              class="author__img"
              alt="Author Picutre"
              srcset=""
            />
            <div class="author__info">
              <span>${article.author}</span>
              <hr />
              <span class="author__info__name">Author</span>
            </div>
          </div>
        </div>
        <div class="rm__text flow">
          <p>${article.content}</p>
        </div>
      </div>
    </article>

    <section class="flex__blog__2">
      <h3 class="mb1">Most Viewed</h3>
      <div class="categories mb1">
        <span>This Week</span>
        <span>This Month</span>
      </div>

      <div class="box bs">
        <h4>How to imrpove your stamina and why cycling is one of the best ways</h4>
        <time>November 3, 2021</time>
      </div>

      <div class="box bs">
        <h4>How to protect yourself from heat (reccommendations)</h4>
        <time>November 3, 2021</time>
      </div>

      <div class="box bs">
        <h4>The best bikes in 2021 and which one to pick</h4>
        <time>November 3, 2021</time>
      </div>

      <div class="box bs">
        <h4>Mountain bikes are awesome and this is why</h4>
        <time>November 3, 2021</time>
      </div>

      <div class="box bs">
        <h4>How to protect yourself from the wet and stay warm</h4>
        <time>November 3, 2021</time>
      </div>

      <div class="box bs">
        <h4>How to protect yourself from the wet and stay warm</h4>
        <time>November 3, 2021</time>
      </div>
    </section>
  </div>
`;
