import { html } from './lib.js';
import { getArticle, getArticleLikes, getArticleUserLike, removeLike, sendLike } from '../api/data.js';
import { BLOG_IMAGES as blogImages } from '../utils/images.js';

let isAnimating = false;

const cache = {
  ctx: null,
  articleData: null,
  likesData: null,
  userLikeId: null,
  totalLikes: null,
  isLiked: null,
}

export const articleDetailsPage = async (ctx) => {
  const articleId = ctx.params.id;
  const userSession = ctx.user;
  
  cache.ctx = ctx;

  const data = [
    getArticle(articleId),
    getArticleLikes(articleId),
  ]

  
  if (userSession) {
    data.push(getArticleUserLike(articleId));
  }
  
  const [articleData, likesData, userLike] = await Promise.all(data);

  cache.totalLikes = likesData.results.length;
  cache.userLikeId = userLike?.results[0]?.objectId;
  cache.isLiked = userLike?.results.length != 0 ? true : false || null;
  cache.articleData = articleData;
  cache.likesData = likesData;

  ctx.render(articleDetailsTemplate(articleData, cache.totalLikes, cache.isLiked, onLike, userSession));
};

const onLike = async (e) => {
  e.preventDefault();

  const ctx = cache.ctx;
  const articleId = ctx.params.id;

  if (isAnimating) {
    return;
  }

  isAnimating = true;
  // prevents spam clicks
  setTimeout(() => {
    isAnimating = false;
  }, 750);


  if (cache.isLiked) {
    cache.isLiked = false;
    cache.totalLikes--;
    ctx.render(articleDetailsTemplate(cache.articleData, cache.totalLikes, cache.isLiked, onLike, ctx.user));
    await removeLike(cache.userLikeId);
  } else {
    cache.isLiked = true;
    cache.totalLikes++;
    ctx.render(articleDetailsTemplate(cache.articleData, cache.totalLikes, cache.isLiked, onLike, ctx.user));
    const userLike = await sendLike(articleId);
    cache.userLikeId = userLike.objectId;
  }

};

const articleDetailsTemplate = (article, likes, isLiked, onLike, userSession) => html`
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
            ${userSession 
              ? html`
              <a href="" @click=${onLike}>
                 <i class="fa-heart ${isLiked ? 'fa-sharp fa-solid rotate' : 'fa-regular'}"></i>
              </a>
              ` 
              : html`
              <a href="/login">
                 <i class="fa-heart fa-regular"></i>
              </a>`}
            
            <span>Likes: ${likes}</span>
          </div>
          <div class="ar__author">
            <img
              src="${article.authorImg}"
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
