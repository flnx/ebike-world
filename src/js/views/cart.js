import { html, nothing } from './lib.js';
import { BIKE_IMAGES as images } from '../utils/images.js';
import { getCartItems, removeCartItem } from '../api/data.js';

const state = {
  price: 0,
  orderStatus: 'pending',
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

    ctx.render(cartPageTemplate(cartData, onRemove, onFinishOrder));
    await removeCartItem(id);
  };

  const onFinishOrder = async (e) => {
    e.preventDefault();

    const message = confirm('Do you want to finish your order?');

    if (!message) {
      return;
    }

    const promises = [];

    for (const item of cartData.results) {
      promises.push(removeCartItem(item.objectId));
    }

    await Promise.all(promises);
    state.orderStatus = 'finished';
    ctx.render(cartPageTemplate(cartData, onRemove, onFinishOrder));
  };
  state.orderStatus = 'pending';

  const cartData = await getCartItems();
  ctx.render(cartPageTemplate(cartData, onRemove, onFinishOrder));
};

const cartPageTemplate = (data, onRemove, onFinishOrder) => {
  state.price = 0;

  return html`
    <div class="container">
      <section class="cart-page-wrapper">
        ${state.orderStatus == 'pending'
          ? html` <h1>Your items</h1>
              ${data.results.map((i) => cartItemTemplate(i, onRemove))}
              <footer class="cart-page-wrapper__footer">
                <p>Total Price: <span>$${state.price}</span></p>
                ${data.results.length > 0
                  ? html`<a class="btn-finish" @click=${onFinishOrder}>Finish Order</a>`
                  : nothing}
              </footer>`
          : html`
              <div class="cart-page-wrapper__finished">
                <h1>Thank You!</h1>
                <h2>Your order has been placed!</h2>
                <p>Order Number: JS1SAw3s0me</p>
                <a href="/bikes">Continue shopping</a>
                <hr />
                <span>You will not receive a confirmation email :(</span>
              </div>
            `}
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
