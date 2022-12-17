import { html } from './lib.js';

export const paginatorTemplate = (pages) => html`
  <div class="pages">
    <ul class="pagination">
      ${pages.map(page => html`<li>${page}</li>`)}
    </ul>
  </div>
`;

