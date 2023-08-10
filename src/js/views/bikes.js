import { getBikesByPage, countAllBikes } from '../api/data.js';
import { html, repeat } from './lib.js';
import { paginator } from '../utils/paginator.js';

const bikes = {
  PAGE_SIZE: 9,
  pages: [],
  totalPages: 0,
  currentPage: 1,
  setPages(count) {
    this.pages = paginator(this.currentPage, count, this.PAGE_SIZE);
    this.totalPages = Math.ceil(count / this.PAGE_SIZE);
  },
};

export const bikesPage = async (ctx) => {
  const query = new URLSearchParams(ctx.querystring);
  bikes.currentPage = +query?.get('page') || 1;

  const [bikesData, { count }] = await Promise.all([
    getBikesByPage(bikes.PAGE_SIZE, bikes.currentPage),
    countAllBikes(),
  ]);

  bikes.setPages(count);

  ctx.render(bikesPageTemplate(bikesData));
};

const bikesPageTemplate = (data) => html`
  <div class="container">
      <section class="bikesWrapper">
      ${data.results.map(bikeCardTemplate)}
      ${paginatorTemplate()}
    </section>
  </div>
`;

const bikeCardTemplate = (bike) => html`
  <a href="/bike-details/${bike.objectId}">
    <div class="bikes">
      <div class="bikes__header">
        <img
          src=${bike.posterUrls.imgName1}
          alt="ebike image"
          srcset=""
        />
      </div>
      <div class="bikes__body">
        <h2>${bike.brand} ${bike.model}</h2>
        <p>${bike.enginePower}</p>
        <span class="type">Mountain Bike</span>
        <div class="bikes__pricetag">
          <span>$${bike.price}</span>
          <i class="fa-solid fa-cart-arrow-down"></i>
        </div>
      </div>
    </div>
  </a>
`;

const paginatorTemplate = () => html`
  <div class="pages" style="bottom: -3.75rem">
    <ul class="pages__nav">
      <li class="pages__page">
        <a href="/bikes?page=${bikes.currentPage - 1}" class="${bikes.currentPage == 1 ? 'disabled' : ''}" >Prev</a>
      </li>
      ${repeat(bikes.pages, (page) =>
          html` <li class="pages__page ${page == bikes.currentPage ? 'current-page' : null}">
            <a href="/bikes?page=${page}">${page}</a>
          </li>`)}
      <li class="pages__page">
        <a href="/bikes?page=${bikes.currentPage + 1}" class="${bikes.currentPage >= bikes.totalPages ? 'disabled' : ''}" >Prev</a>
      </li>
    </ul>
  </div>
`;
