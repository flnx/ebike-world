import { html } from './lib.js';
import { getArticlesByPage, getTrendingBikes } from '../api/data.js';
import { BIKE_IMAGES as bikeImages, BLOG_IMAGES as blogImages } from '../utils/images.js';

import showcaseImg from '/src/assets/images/showcase/3.png';

const ARTICLES_CAP = 2;
const BIKES_CAP = 4;

export const homePage = async (ctx) => {
  const [bikesData, articlesData] = await Promise.all([
    getTrendingBikes(BIKES_CAP),
    getArticlesByPage(ARTICLES_CAP, 1),
  ]);

  ctx.render(homePageTemplate(bikesData, articlesData));
};

const homePageTemplate = (bikesData, articlesData) => html`
  <!-- Showcase -->
  <main class="main--image mb1">
    <div class="container">${showCaseTemplate()}</div>
  </main>
  <div class="container">
    <!-- Second Navigation -->
    <section class="mb">
      <ul class="navcat">
        <li class="navcat__1"><a href="/bikes">e-Bikes</a></li>
        <li class="navcat__2"><a href="/bikes">Clothing</a></li>
        <li class="navcat__3"><a href="/bikes">Accessories</a></li>
        <li class="navcat__4"><a href="/bikes">Tips & Tricks</a></li>
        <li class="navcat__5"><a href="/bikes">Why e-Cycling</a></li>
        <li class="navcat__6"><a href="/bikes">Our Blog</a></li>
      </ul>
    </section>

    <!-- Top Choices-->
    <section>
      <h2>Top Choices</h2>
      <div class="products mb">${bikesData.results.map(bikeIntroTemplate)}</div>
    </section>

    <!-- Latest Articles -->
    <section>
      <div class="ar-flex-wrap mb">
        <!-- Articles -->
        <section class="flex__1 mb">
          <h3 class="mb1">Latest Articles</h3>
          ${articlesData.results.map(latestArticlesTemplate)}
        </section>
        <!-- Aside -->
        <aside class="flex__2">
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
            <h4>How to imrpove your stamina and why cycling is one of the best ways</h4>
            <time>November 3, 2021</time>
          </section>
        </aside>
      </div>
    </section>

  </div>
`;

const bikeIntroTemplate = (bike) => html`
  <div class="product-1">
    <a href="/bike-details/${bike.objectId}">
      <div class="bike__img">
        <img
          src="${bike.posterUrls.imgName1.includes('.')
            ? bike.posterUrls.imgName1
            : bikeImages[bike.posterUrls.imgName1]}"
          alt="ebike image"
          srcset=""
        />
      </div>
    </a>
    <div class="product-1__info">
      <div class="product-1__title">
        <span class="i-brand">${bike.brand}</span>
        <span class="i-model">${bike.model}</span>
      </div>
      <pre>$${bike.price}</pre>
      <!-- <a href="#"><i class="fas fa-cart-plus"></i></a> -->
    </div>
  </div>
`;

const showCaseTemplate = () => html`
  <section class="showcase">
    <section class="showcase__intro">
      <h1>
        The Ultimate <span>e-Bike</span> portal of 2022 that covers all of your needs
      </h1>
      <p>
        We love what we do and we'd love to share it with the world. <br />
        Check out <span><a href="/blog">our blog</a></span> if you're interested in learning and exploring a
        whole new world of eBiking!
      </p>
      <div class="showcase__buttons">
        <a class="btn showcase-btn" href="/bikes">OUR BIKES</a>
        <a class="btn showcase-btn2" href="/">SHOPS</a>
      </div>
    </section>
    <section class="showcase__img">
      <img src="${showcaseImg}" alt="" srcset="" />
    </section>
    <section class="social--links">
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-telegram"></i>
    </section>
  </section>
`;

const latestArticlesTemplate = (article) => html`
  <article>
    <a href="/article/${article.objectId}">
      <div class="latest bs">
        <section class="latest__img">
          <img
            src="${article.imageUrl.includes('.')
              ? article.imageUrl
              : blogImages[article.imageUrl]}"
            alt=""
            srcset=""
          />
        </section>
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
                  src="${article.authorImg}"
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
  </article>
`;
