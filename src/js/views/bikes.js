import { html } from 'lit-html';

export const bikesPage = (ctx) => {
  ctx.render(bikesPageTemplate());
};

const bikesPageTemplate = () => html`
  <div class="container">
    <section>
      <div class="bikesWrapper">
        <!-- Card Example -->
        <a href="/details">
          <div class="bikes bike__1">
            <div class="bikes__header">
              <img src="./images/showcase.jpg" alt="bikePic" srcset="" />
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
