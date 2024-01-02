import { html } from './lib.js';

export const accessoriesPage = (ctx) => {
    ctx.render(accessoriesPageTemplate());
};

const accessoriesPageTemplate = () => html`
    <div class="container">
        <section>
            <ul class="accessories bikesWrapper">
                <a href="/accessories/helmets">
                    <li class="acc acc__1">Helmets</li>
                </a>

                <a href="/accessories/jackets">
                    <li class="acc acc__2">Jackets</li>
                </a>
                <li class="acc acc__3"><a href="#">Cameras & Mounts</a></li>
                <li class="acc acc__4"><a href="#">Lightning</a></li>
                <li class="acc acc__5"><a href="#">Backpacks & Bags</a></li>
                <li class="acc acc__6"><a href="#">Transport & Travel</a></li>
                <li class="acc acc__7"><a href="#">Locks</a></li>
                <li class="acc acc__8"><a href="#">GPS & Gadgets</a></li>
                <li class="acc acc__9"><a href="#">Bottles & Cages</a></li>
                <li class="acc acc__10"><a href="#">Practical Addons</a></li>
                <li class="acc acc__11"><a href="#">Phone Holders</a></li>
            </ul>
        </section>
    </div>
`;
