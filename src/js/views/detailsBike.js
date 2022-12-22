import { html } from './lib.js';
import { BIKE_IMAGES as images } from '../utils/images.js';
import { getBike } from '../api/data.js';

const test = {
  posterUrls: {
    imgName1: "https://cdn.accentuate.io/6564306976864/1651112509613/Rover6HS_charcoal_angle.png?v=0"
  },
  brand: 'Yee-Claw',
  model: 'Model X',
  price: 1999,
}

export const bikeDetailsPage = async (ctx) => {
  let cache = {
    number: 0,
  };

  // post request
  const onBasket = async (e) => {
    e.preventDefault();
    cache.number++;
    console.log(cache);
    // cache data
    // open cart template
    // pop up (added to basket) and close it after 3 sec
  };

  // get request with all items in the cart
  const showCart = () => {
    // show all the items stored in cache
  };

  // request with all the items in the cart
  const data = await getBike(ctx.params.id);
  ctx.render(detailsPageTemplate(data, onBasket));
};

const detailsPageTemplate = (data, onBasket) => html`
  <div class="container">
    <!-- ${cartOverlay()} -->
    <section class="mb">
      <div class="flex">
        <div class="left__img">
          <div>
            <img src="${
              data.posterUrls.imgName1.includes('.')
                ? data.posterUrls.imgName1
                : images[data.posterUrls.imgName1]
            }" class="main-img" alt="ebike image" srcset="" />
          </div>
          <div class="left__img__wrapper">
            <div class="left__img__images">
              <img src="${
                data.posterUrls.imgName1.includes('.')
                  ? data.posterUrls.imgName2
                  : images[data.posterUrls.imgName2]
              }" class="main-img" alt="ebike image" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="${
                data.posterUrls.imgName1.includes('.')
                  ? data.posterUrls.imgName3
                  : images[data.posterUrls.imgName3]
              }" class="main-img" alt="ebike image" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="${
                data.posterUrls.imgName1.includes('.')
                  ? data.posterUrls.imgName4
                  : images[data.posterUrls.imgName4]
              }" class="main-img" alt="ebike image" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="${
                data.posterUrls.imgName1.includes('.')
                  ? data.posterUrls.imgName5
                  : images[data.posterUrls.imgName5]
              }" class="main-img" alt="ebike image" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="${
                data.posterUrls.imgName1.includes('.')
                  ? data.posterUrls.imgName6
                  : images[data.posterUrls.imgName6]
              }" class="main-img" alt="ebike image" srcset="" />
            </div>
          </div>
        </div>
        <div class="right__content">
          <span class="right__content__intro redC">${data.brand}</span>
          <div class="shopping-bag">
            <i class="fa-solid fa-bag-shopping"></i>
            <span>Your basket</span>
          </div>
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
            <button type="button" class="btn">Buy</button>
            <i class="fa-solid fa-cart-arrow-down" @click=${onBasket}></i>
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

const cartOverlay = () => html`
  <div class="cart-absolute">
    <section class="cart-overlay">
      <h3>Cart Items:</h3>
      <div class="cart-wrapper">
        <!-- Item Example -->
        <section class="cart-wrapper__item">
          <div class="cart-wrapper__image">
            <img
              src="https://cdn.accentuate.io/6564306976864/1651112509613/Rover6HS_charcoal_angle.png?v=0"
              alt="product image"
              srcset=""
              width="200px"
              height="100px"
            />
          </div>
          <h4 class="cart-wrapper__title">Yee-Claw Model X</h4>
          <span class="cart-wrapper__price">Price: $1999</span>
        </section>
      </div>
      <div class="cart-overlay__footer">
        <a href="">Finish Order</a>
        <span>Total Price: $5000</span>
      </div>
    </section>
  </div>
`;
