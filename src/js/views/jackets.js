import { html } from 'lit-html';
import { getAccessories } from '../api/accessories';

export const jacketsPage = async (ctx) => {
    const { results } = await getAccessories('Jacket');

    ctx.render(jacketsPageTemplate(results));
};

const jacketsPageTemplate = (data) => {
    return html`
        <section>
            <div class="container">
                <h1 class="mb1">Jackets</h1>
                <div class="product-container">
                    ${data.map(
                        (helmet) => html` <div class="product-card">
                            <img
                                src=${helmet.imgUrl.url}
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
