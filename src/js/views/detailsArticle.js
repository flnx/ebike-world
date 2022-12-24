import { html } from './lib.js';
import { getArticle, getArticleLikes, getArticleUserLike, removeLike, sendLike } from '../api/data.js';
import { BLOG_IMAGES as blogImages } from '../utils/images.js';

let isAnimating = false;

export const articleDetailsPage = async (ctx) => {
  const articleId = ctx.params.id;
  const userSession = ctx.user;

  let isLiked = null;
  let totalLikes = null;

  const onLike = async (e) => {
    e.preventDefault();

    if (isAnimating) {
      return;
    }

    isAnimating = true;
    // prevents spam clicks
    setTimeout(() => {
      isAnimating = false;
    }, 750);

    instantLike(articleData, totalLikes, isLiked, onLike, ctx);

    const user_like = await getArticleUserLike(articleId);

    isLiked = user_like.results.length > 0 ? true : false;

    if (isLiked) {
      isLiked = false;
      totalLikes--;
      await removeLike(user_like.results[0].objectId);
    } else {
      isLiked = true;
      totalLikes++;
      await sendLike(articleId);
    }
  };

  const data = [
    getArticle(articleId),
    getArticleLikes(articleId),
  ]

  
  if (userSession) {
    data.push(getArticleUserLike(articleId));
  }
  
  const [articleData, likesData, userLike] = await Promise.all(data);

  totalLikes = likesData.results.length;
  isLiked = userLike?.results.length > 0 ? true : false || null;

  ctx.render(articleDetailsTemplate(articleData, totalLikes, isLiked, onLike, userSession));
};

const instantLike = (articleData, totalLikes, isLiked, onLike, ctx) => {
  if (isLiked) {
    isLiked = false;
    totalLikes--;
  } else {
    isLiked = true;
    totalLikes++;
  }

  ctx.render(articleDetailsTemplate(articleData, totalLikes, isLiked, onLike, ctx.user));
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
