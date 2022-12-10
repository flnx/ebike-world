import { html } from 'lit-html';

export const detailsPage = (ctx) => {
  ctx.render(detailsPageTemplate());
};

const detailsPageTemplate = () => html`
  <div class="container">
    <section class="mb">
      <div class="flex">
        <div class="left__img">
          <div>
            <img src="images/thomas.jpg" class="main-img" alt="" srcset="" />
          </div>
          <div class="left__img__wrapper">
            <div class="left__img__images">
              <img src="images/test1.jpg" alt="" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="images/test2.jpg" alt="" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="images/audibike.jpg" alt="" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="images/test1.jpg" alt="" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="images/test3.webp" alt="" srcset="" />
            </div>
            <div class="left__img__images">
              <img src="images/bike2.jpg" alt="" srcset="" />
            </div>
          </div>
        </div>
        <div class="right__content">
          <span class="right__content__intro redC">Electric Bike</span>
          <h1>Cube</h1>
          <span class="bikes__pricetag ar__pricetag">$2399</span>
          <p>
            The RadRunner made waves as the first moped-style electric bike designed to
            ride like a utility, cargo, or a traditional bike with just a quick adjustment
            of the seat. We’ve updated this fan-favourite ride with enhanced handling, a
            cushier saddle, and protective fenders. Plus, you can customize your ride with
            more than 330 accessory combinations.
          </p>
          <table>
            <thead>
              <tr>
                <th>Weight</th>
                <th>Max Weight</th>
                <th>Engine Power</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total: 24 kg</td>
                <td>150 kg</td>
                <td>250W</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Battery: 4kg</td>
                <td>75 lbs</td>
                <td>Folded</td>
              </tr>
            </tfoot>
          </table>
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
              <th>Frame</th>
              <td>
                Aluminium Superlite, Gravity Casting Technology, Efficient Comfort
                Geometry, Tapered Headtube, Full Integrated Battery, Semi-Integrated
                Carrier | Men: S (50cm), M (54cm), L (58cm), XL (62cm); Trapeze: XS
                (46cm), S (50cm), M (54cm); Easy Entry: XS (46cm), S (50cm), M (54cm), L
                (58cm)
              </td>
            </tr>
            <tr>
              <th>Fork</th>
              <td>SR Suntour NVX30 Coil, 100mm</td>
            </tr>
            <tr>
              <th>Drive Unit</th>
              <td>Bosch Drive Unit Performance Generation 3 (65Nm) Cruise (250Watt)</td>
            </tr>
            <tr>
              <th>Battery</th>
              <td>Bosch PowerTube 625</td>
            </tr>
            <tr>
              <th>Chain</th>
              <td>KMC X9</td>
            </tr>
            <tr>
              <th>Display Unit</th>
              <td>Bosch Purion</td>
            </tr>
            <tr>
              <th>Brake System</th>
              <td>Shimano BR-MT200, Hydr. Disc Brake (180/180)</td>
            </tr>
            <tr>
              <th>Rims</th>
              <td>CUBE EX23, 36H, Disc, Tubeless Ready</td>
            </tr>
            <tr>
              <th>Tyres</th>
              <td>Schwalbe Big Ben, Active, K-Guard, 55-622</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>25,7 kg</td>
            </tr>
            <tr>
              <th>Weight Limit</th>
              <td>140 kg</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
`;
