import { html } from './lib.js';
import { getArticle } from '../api/data.js';
import { AUTHOR_IMAGES as authorImages, BLOG_IMAGES as images } from '../utils/images.js';

export const articleDetailsPage = async (ctx) => {
  const data = await getArticle(ctx.params.id);

  console.log(data);

  ctx.render(articleDetailsTemplate(data));
};

const articleDetailsTemplate = (article) => html`
  <div class="container article-wrapper">
    <article class="flex__blog__1">
      <div class="rm__wrapper flow">
        <h1>${article.title}</h1>
        <img src="${images[article.imageUrl]}" alt="showcase image" srcset="" />
        <div class="ar__footer">
          <span>
            <time>${article.createdAt}</time>
            <p>${article.readTime} min read</p>
          </span>

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
