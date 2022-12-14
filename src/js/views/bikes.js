import { html } from './lib.js'

import showcaseImg from '/src/assets/images/showcase/1.jpg';

export const bikesPage = (ctx) => {
  ctx.render(bikesPageTemplate());
};

const bikesPageTemplate = () => html`
  <div class="container">
    <section>
      <div class="bikesWrapper">
        <!-- Card Example -->
        <a href="/bike-details">
          <div class="bikes bike__1">
            <div class="bikes__header">
              <img src="${showcaseImg}" alt="bikePic" srcset="" />
            </div>
            <div class="bikes__body">
              <h2>Cube Hybrid One</h2>
              <p>E-Bike with 500W Engine</p>
              <span class="type">Mountain Bike</span>
              <div class="bikes__pricetag">
                <span>$1999</span>
                <i class="fa-solid fa-cart-arrow-down"></i>
              </div>
            </div>
          </div>
        </a>
        <!-- Card Example End -->
      </div>
    </section>
  </div>
  <!-- CONTAINER ENDS -->
`;
