import { html, nothing } from './lib.js';
import { BIKE_IMAGES as images } from '../utils/images.js';
import { buyItem, getBike, getCartItems, removeCartItem } from '../api/data.js';

const state = {
  ctx: null,
  mouseover: false,
  bought: false,
  price: 0,
  isRendering: true,
  isClicked: false,
};

const cache = {
  bikeDetails: null,
  cartItems: null,
};

export async function bikeDetailsPage(ctx) {
  state.mouseover = false;
  state.bought = false;
  state.isClicked = false;
  state.ctx = ctx;

  const promises = [getBike(ctx.params.id)];

  if (ctx.user) {
    promises.push(getCartItems());
  }

  const [bikeDetails, cartItems] = await Promise.all(promises);

  cache.bikeDetails = bikeDetails;
  cache.cartItems = cartItems;

  ctx.render(
    detailsPageTemplate(bikeDetails, onBasket, onBuy, onBag, cartItems, onRemove, onFinishOrder)
  );
}


async function onBasket(e) {
  e.preventDefault();

  const ctx = state.ctx;

  if (!ctx.user) {
    return ctx.page.redirect('/login');
  }

  if (state.isClicked) {
    return;
  }

  state.bought = true;
  state.isRendering = true;
  state.isClicked = true;

  const basketData = {
    title: cache.bikeDetails.brand + ' ' + cache.bikeDetails.model,
    price: cache.bikeDetails.price,
    imgUrl: cache.bikeDetails.posterUrls.imgName1,
  };

  const boughtItemData = await buyItem(basketData);

  basketData.objectId = boughtItemData.objectId;

  cache.cartItems.results.push(basketData);

  ctx.render(detailsPageTemplate(cache.bikeDetails, onBasket, onBuy, onBag, cache.cartItems, onRemove, onFinishOrder));

  setTimeout(() => {
    ctx.render(detailsPageTemplate(cache.bikeDetails, onBasket, onBuy, onBag, cache.cartItems, onRemove, onFinishOrder));

    state.bought = false;
    state.isClicked = false;
    state.isRendering = false;
  }, 1000);
}

const onFinishOrder = (e) => {
  e.preventDefault();

  if (state.isClicked) {
    return;
  }

  state.isClicked = true;

  state.ctx.redirect(state);
}

async function onBuy(e) {
  e.preventDefault();

  const ctx = state.ctx;

  if (!ctx.user) {
    return ctx.page.redirect('/login');
  }

  if (state.isClicked) {
    return;
  }

  state.isClicked = true;

  const basketData = {
    title: cache.bikeDetails.brand + ' ' + cache.bikeDetails.model,
    price: cache.bikeDetails.price,
    imgUrl: cache.bikeDetails.posterUrls.imgName1,
  };

  await buyItem(basketData);
  ctx.redirect(state);
}

function onBag(e, boolean) {
  e.preventDefault();

  const ctx = state.ctx;

  if (!ctx.user) {
    return;
  }

  state.mouseover = boolean;

  ctx.render(
    detailsPageTemplate(cache.bikeDetails, onBasket, onBuy, onBag, cache.cartItems, onRemove, onFinishOrder)
  );
}

const onRemove = async (e, id) => {
  e.preventDefault();

  const cart = cache.cartItems.results;

  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];

    if (product.objectId == id) {
      cache.cartItems.results.splice(i, 1);
      break;
    }
  }

  state.ctx.render(
    detailsPageTemplate(cache.bikeDetails, onBasket, onBuy, onBag, cache.cartItems, onRemove, onFinishOrder)
    );

    await removeCartItem(id);
}

const detailsPageTemplate = (data, onBasket, onBuy, onBag, cartItems, onRemove, onFinishOrder) => {
  return html`
  <div class="container">
  <div class="shopping-bag">
    <i class="fa-solid fa-bag-shopping" @mouseover=${(e) => onBag(e, true)} @click=${(e) => onBag(e, true)}>
    </i>
    <span>Your Basket</span>
  </div>
    ${state.bought ? addedItemTemplate() : nothing}
    ${state.mouseover ? cartOverlay(onBag, cartItems, onRemove, onFinishOrder) : nothing}
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
};

const cartOverlay = (onBag, items, onRemove, onFinishOrder) => {
  state.price = 0;

  return html`
    <div class="cart-absolute">
      <section class="cart-overlay" @mouseleave=${(e) => onBag(e, false)}>
        <h3>Cart Items:</h3>
        <i class="fa-solid fa-xmark close" @click=${(e) => onBag(e, false)}></i>
        <div class="cart-wrapper">
          <!-- Item Example -->
          ${items.results.map((x) => cartItemTemplate(x, (e) => onRemove(e, x.objectId)))}
        </div>
        <div class="cart-overlay__footer">
          <a href="" @click=${onFinishOrder} class="btn-finish">Finish Order</a>
          <span>Total Price: $${state.price}</span>
        </div>
      </section>
    </div>
  `;
};

const cartItemTemplate = (item, onRemove) => {
  state.price += item.price;

  return html`
    <section class="cart-wrapper__item">
      <div class="cart-wrapper__image">
        <img
          src="${item.imgUrl.includes('.') ? item.imgUrl : images[item.imgUrl]}"
          alt="product image"
          srcset=""
          width="200px"
          height="100px"
        />
      </div>
      <h4 class="cart-wrapper__title">${item.title}</h4>
      <span class="cart-wrapper__price">Price: $${item.price}</span>
      <i class="fa-solid fa-xmark" href=${item.objectId} @click=${onRemove}></i>
    </section>
  `;
};

const addedItemTemplate = () => html`
  <div class="popup-message">
    <span>The product has been added to your cart!</span>
  </div>
`;
