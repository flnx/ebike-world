import { getBikesByPage } from '../api/data.js';
import { html } from './lib.js'

import { BIKE_IMAGES as images } from '../utils/images.js';

const bikes = {
  PAGE_SIZE: 9,
  currentPage: 1,
}

export const bikesPage = async(ctx) => {
  const query = new URLSearchParams(ctx.querystring);
  bikes.currentPage = +query?.get('page') || 1;

  const data = await getBikesByPage(bikes.PAGE_SIZE, bikes.currentPage);



  ctx.render(bikesPageTemplate(data));
};

const bikesPageTemplate = (data) => html`
  <div class="container">
    <section>
      <div class="bikesWrapper">
        ${data.results.map(bikeCardTemplate)}
      </div>
    </section>
  </div>
`;

const bikeCardTemplate = (bike) => html`
  <a href="/bike-details/${bike.objectId}">
    <div class="bikes">
      <div class="bikes__header">
      <img
          src="${bike.posterUrls.imgName1.includes('.')
            ? bike.posterUrls.imgName1
            : images[bike.posterUrls.imgName1]}"
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