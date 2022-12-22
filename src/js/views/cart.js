import { html, repeat } from './lib.js';
import { BIKE_IMAGES as images } from '../utils/images.js';


export const cartPage = async (ctx) => {
  ctx.render(cartPageTemplate());
};

const cartPageTemplate = () => html`
  <div class="container">
      <section class="cart-wrapper">
          <h3>Your items</h3>
      </section>
  </div>
`;

const cartItems = (item) => html`

`;
