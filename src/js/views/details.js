import { html } from './lib.js';
import { images } from '../utils/images.js';
import { getBike } from '../api/data.js';

export const detailsPage = async (ctx) => {
  const data = await getBike(ctx.params.id);

  console.log(data);

  ctx.render(detailsPageTemplate(data));
};

const detailsPageTemplate = (data) => html`
  <div class="container">
    <section class="mb">
      <div class="flex">
        <div class="left__img">
          <div>
            <img
              src="${images[data.posterUrls.imgName1 + 'intro']}"
              class="main-img"
              alt="ebike image"
              srcset=""
            />
          </div>
          <div class="left__img__wrapper">
            <div class="left__img__images">
              <img src="${images[data.posterUrls.imgName2]}" alt="" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="${images[data.posterUrls.imgName3]}" alt="" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="${images[data.posterUrls.imgName4]}" alt="" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="${images[data.posterUrls.imgName5]}" alt="" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="${images[data.posterUrls.imgName6]}" alt="" srcset="" />
            </div>
          </div>
        </div>
        <div class="right__content">
        <span class="right__content__intro redC">${data.brand}</span>
          <h1>${data.model}</h1>
          <span class="bikes__pricetag ar__pricetag">$${data.price}</span>
          <p class="right__content__description">${data.description}</p>

          <div class="right__content__specs">
            <p><span>Engine:  </span>${data.enginePower}</p>
            <p><span>Max Speed:  </span>${data.speed}</p>
            <p><span>Average Range:  </span>${data.range}</p>
            <p><span>Weight:  </span> ${data.weight}</p>
            <p><span>Weight Limit:  </span>${data.weightLimit}</p>
          </div>
          <div class="right__content__buttons">
            <button class="btn">Buy</button>
            <div class="article__icons">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h2>Bike Specifications</h2>
        <table class="spec">
          <tbody>
            <tr>
              <th>Engine</th>
              <td>${data.enginePower}</td>
            </tr>
            <th>Max Speed</th>
              <td>${data.speed}</td>
            </tr>
            <tr>
              <th>Average Range</th>
              <td>${data.range} km</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>${data.weight} kg</td>
            </tr>
            <tr>
              <th>Weight Limit</th>
              <td>${data.weightLimit} kg</td>
            </tr>
            <tr>
              <th>Frame</th>
              <td>${data.frame}</td>
            </tr>
            <tr>
              <th>Fork</th>
              <td>${data.fork}</td>
            </tr>
            <tr>
            <tr>
              <th>Battery</th>
              <td>${data.battery}</td>
            </tr>
            <tr>
              <th>Battery Weight</th>
              <td>${data.batteryWeight} kg</td>
            </tr>
            <tr>
              <th>Charger</th>
              <td>${data.charger}</td>
            </tr>
            <tr>
              <th>Chain</th>
              <td>${data.chain}</td>
            </tr>
            <tr>
              <th>Display Unit</th>
              <td>${data.displayUnit}</td>
            </tr>
            <tr>
              <th>Brake System</th>
              <td>${data.brakes}</td>
            </tr>
            <tr>
              <th>Rims</th>
              <td>${data.rims}</td>
            </tr>
            <tr>
              <th>Tires</th>
              <td>${data.tires}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
`;
