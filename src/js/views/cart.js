import { html, repeat } from './lib.js';
import { BIKE_IMAGES as images } from '../utils/images.js';
import { getCartItems } from '../api/data.js';

const state = {
  price: 0,
};

export const cartPage = async (ctx) => {
  const onRemove = async (e, id) => {
    e.preventDefault();

    const cart = cartData.results;

    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];

      if (product.objectId == id) {
        cartData.results.splice(i, 1);
        break;
      }
    }

    ctx.render(cartPageTemplate(cartData, onRemove));
    // await removeCartItem(id)
  };

  const cartData = await getCartItems();
  ctx.render(cartPageTemplate(cartData, onRemove));
};

const cartPageTemplate = (data, onRemove) => {
  state.price = 0;

  return html`
    <div class="container">
      <section class="cart-page-wrapper">
        <h1>Your items</h1>
        ${data.results.map((i) => cartItemTemplate(i, onRemove))}
        <footer class="cart-page-wrapper__footer">
          <p>Total Price: <span>$${state.price}</span></p>
          <a class="btn-finish">Finish Order</a>
        </footer>
      </section>
    </div>
  `;
};

const cartItemTemplate = (item, onRemove) => {
  state.price += item.price;

  return html`
    <section class="cart-page-wrapper__item">
      <div class="cart-page-wrapper__item__image">
        <img
          src="${item.imgUrl.includes('.') ? item.imgUrl : images[item.imgUrl]}"
          alt="product image"
          srcset=""
        />
      </div>
      <div class="cart-page-wrapper__item__body">
        <h4>${item.title}</h4>
        <p>Price: <span>$${item.price}</span></p>
        <i
          class="fa-solid fa-xmark"
          href=${item.objectId}
          @click=${(e) => onRemove(e, item.objectId)}
        ></i>
      </div>
    </section>
  `;
};
