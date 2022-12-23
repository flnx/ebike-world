import { html, nothing } from './lib.js';
import { BIKE_IMAGES as images } from '../utils/images.js';
import { buyItem, getBike, getCartItems } from '../api/data.js';

const state = {
  mouseover: true,
}

const test = {
  posterUrls: {
    imgName1: "https://cdn.accentuate.io/6564306976864/1651112509613/Rover6HS_charcoal_angle.png?v=0"
  },
  brand: 'Yee-Claw',
  model: 'Model X',
  price: 1999,
}

export const bikeDetailsPage = async (ctx) => {
  const onBasket = async (e) => {
    e.preventDefault();

    const basketData = {
      title: bikeDetailsData.brand + ' ' + bikeDetailsData.model,
      price: bikeDetailsData.price,
      imgUrl: bikeDetailsData.posterUrls.imgName1,
    }

    const boughtItemData = await buyItem(basketData);

    basketData.objectId = boughtItemData.objectId;
    userCartItems.results.push(basketData)
    
    
    // [x] POST request
    // [x] Cache data
    // [] Render (add the cached data)
    // [] Show bag
  };

  const onBuy = (e) => {
    e.preventDefault();
    // 1. POST request
    // 2. Redirect to cart page
  } 
  
  const onShoppingBag = (e, boolean) => {
    e.preventDefault();
    state.mouseover = boolean;
    ctx.render(detailsPageTemplate(bikeDetailsData, onBasket, onBuy, onShoppingBag));
    // [x] attach mouseover event
    // [x] render the cart template
  }
  
  // [x] GET request with all items in the cart
  const bikeDetailsData = await getBike(ctx.params.id);
  const userCartItems = await getCartItems();


  ctx.render(detailsPageTemplate(bikeDetailsData, onBasket, onBuy, onShoppingBag));
};



const detailsPageTemplate = (data, onBasket, onBuy, onShoppingBag) => html`
  <div class="container">
    ${state.mouseover ? cartOverlay(onShoppingBag) : nothing}
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
            <i class="fa-solid fa-bag-shopping" @mouseover=${(e) => onShoppingBag(e, true)}></i>
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
            <button type="button" class="btn" @click=${onBuy}>Buy</button>
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

const cartOverlay = (onShoppingBag) => html`
  <div class="cart-absolute"}>
    <section class="cart-overlay" @mouseleave=${(e) => onShoppingBag(e, false)}>
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
