import { getHelmets } from '../api/accessories.js';
import { html } from './lib.js';

export const helmetsPage = async (ctx) => {
    const { results } = await getHelmets();

    ctx.render(helmetsPageTemplate(results));
};

const helmetsPageTemplate = (data) => {
    return html`
        <section>
            <div class="container">
                <h1 class="mb1">Helmets</h1>
                <div class="product-container">
                    ${data.map(
                        (helmet) => html` <div class="product-card">
                            <img
                                src=${helmet.imageUrl.url}
                                alt=${helmet.name}
                                class="product-image"
                            />
                            <div class="product-info">
                                <h4 class="product-name">${helmet.name}</h3>
                                <div class="product-price">
                                    $${helmet.price.toLocaleString()}
                                </div>
                            </div>
                        </div>`
                    )}
                </div>
            </div>
        </section>
    `;
};
