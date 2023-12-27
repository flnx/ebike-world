import { html } from './lib.js';

export const notFoundPage = (ctx) => {
    ctx.render(notFoundPageTemplate());
};

const notFoundPageTemplate = () => html`
    <section>
        <h1 class="not-found">404 Not Found</h1>
    </section>
`;
