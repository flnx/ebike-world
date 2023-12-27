import { getHelmets } from '../api/accessories.js';
import { html } from './lib.js';

export const helmetsPage = async (ctx) => {
    const { results } = await getHelmets();

    ctx.render(helmetsPageTemplate(results));
};

const helmetsPageTemplate = (data) => {
    console.log(data);

    return html`
        <section>
            <h1>Helmets</h1>

            <div>
                ${data.map(
                    (helmet) => html` <div>
                        <div>
                            <img src=${helmet.imageUrl.url} alt=${helmet.name} />
                        </div>
                        <p>${helmet.name}</p>
                        <p>${helmet.price}</p>
                    </div>`
                )}
            </div>
        </section>
    `;
};
