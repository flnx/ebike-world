import { html, nothing } from './lib.js';
import { buyItem, getBike, getCartItems, removeCartItem } from '../api/data.js';

const state = {
    ctx: null,
    mouseover: false,
    bought: false,
    price: 0,
    isRendering: false,
    isClicked: false,
};

const cache = {
    mainImage: null,
    bikeDetails: null,
    cartItems: null,
};

export const bikeDetailsPage = async (ctx) => {
    state.mouseover = false;
    state.bought = false;
    state.isClicked = false;
    state.ctx = ctx;

    const promises = [getBike(ctx.params.id)];

    if (ctx.user) {
        promises.push(getCartItems());
    }

    const [bikeDetails, cartItems] = await Promise.all(promises);

    cache.mainImage = bikeDetails.posterUrls.imgName1;
    cache.bikeDetails = bikeDetails;
    cache.cartItems = cartItems;

    ctx.render(detailsPageTemplate(bikeDetails, cartItems));
};

const onBasket = async (e) => {
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

    ctx.render(detailsPageTemplate(cache.bikeDetails, cache.cartItems));

    const boughtItemData = await buyItem(basketData);

    basketData.objectId = boughtItemData.objectId;
    cache.cartItems.results.push(basketData);

    state.isClicked = false;

    setTimeout(() => {
        state.bought = false;

        ctx.render(detailsPageTemplate(cache.bikeDetails, cache.cartItems));

        state.isRendering = false;
    }, 1000);
};

const onFinishOrder = (e) => {
    e.preventDefault();

    if (state.isClicked) {
        return;
    }

    state.isClicked = true;

    state.ctx.redirect(state);
};

const onBuy = async (e) => {
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
};

const onBag = (e, boolean) => {
    e.preventDefault();

    const ctx = state.ctx;

    if (!ctx.user) {
        return;
    }

    state.mouseover = boolean;

    ctx.render(detailsPageTemplate(cache.bikeDetails, cache.cartItems));
};

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

    state.ctx.render(detailsPageTemplate(cache.bikeDetails, cache.cartItems));
    await removeCartItem(id);
};

const onImage = (e) => {
    e.preventDefault();

    if (e.target.tagName != 'IMG') {
        return;
    }

    cache.mainImage = e.target.src;
    state.ctx.render(detailsPageTemplate(cache.bikeDetails, cache.cartItems));
};

const detailsPageTemplate = (data, cartItems) => {
    const imgUrls = Object.values(data.posterUrls);

    return html`
  <div class="container">

    <!-- Shopping BAG -->
     <div class="shopping-bag">
        <i class="fa-solid fa-bag-shopping" @mouseover=${(e) =>
            onBag(e, true)} @click=${(e) => onBag(e, true)}></i>
          <span>Your Basket</span>
     </div>
    ${state.bought ? addedItemTemplate() : nothing}
    ${state.mouseover ? cartOverlay(cartItems) : nothing}

    <section class="mb">
    <!-- Gallery -->
      <div class="flex">
        <!-- Main Image -->
        <div class="left__content">
          <div class="main-img-wrapper">
            <img src=${cache.mainImage}  class="main-img" alt="ebike image" />
          </div>
          
          <!-- Secondary Images -->
          <div class="left__content__wrapper" @click=${onImage}>
            ${imgUrls.map(
                (imageUrl) => html`<div class="left__content__images">
                    <img src=${imageUrl} alt="ebike image" />
                </div>`
            )}
          </div>
        </div>

    <!-- Right Side -->
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

    <!-- Specifications -->

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

const cartOverlay = (items) => {
    state.price = 0;

    return html`
        <div class="cart-absolute">
            <section class="cart-overlay" @mouseleave=${(e) => onBag(e, false)}>
                <h3>Cart Items:</h3>
                <i
                    class="fa-solid fa-xmark close"
                    @click=${(e) => onBag(e, false)}
                ></i>
                <div class="cart-wrapper">
                    <!-- Item Example -->
                    ${items.results.map(cartItemTemplate)}
                </div>
                <div class="cart-overlay__footer">
                    <a href="" @click=${onFinishOrder} class="btn-finish"
                        >Finish Order</a
                    >
                    <span>Total Price: $${state.price}</span>
                </div>
            </section>
        </div>
    `;
};

const cartItemTemplate = (item) => {
    state.price += item.price;

    return html`
        <section class="cart-wrapper__item">
            <div class="cart-wrapper__image">
                <img
                    src=${item.imgUrl}
                    alt="product image"
                    srcset=""
                    width="200px"
                    height="100px"
                />
            </div>
            <h4 class="cart-wrapper__title">${item.title}</h4>
            <span class="cart-wrapper__price">Price: $${item.price}</span>
            <i
                class="fa-solid fa-xmark"
                href=${item.objectId}
                @click=${(e) => onRemove(e, item.objectId)}
            ></i>
        </section>
    `;
};

const addedItemTemplate = () => html`
    <div class="popup-message">
        <span>The product has been added to your cart!</span>
    </div>
`;
