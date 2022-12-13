import page from 'page';
import { ctxDecorator } from './layout.js';
import { aboutPage } from './views/about.js';
import { accessoriesPage } from './views/accessories.js';
import { bikesPage } from './views/bikes.js';
import { blogPage } from './views/blog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { homePage } from './views/home.js';
import { readmorePage } from './views/readmore.js';

import '../styles/main.scss';

page(ctxDecorator);
page('/', homePage);
page('/index.html', '/');
page('/blog', blogPage);
page('/bikes', bikesPage);
page('/accessories', accessoriesPage);
page('/about', aboutPage);
page('/details/:id', detailsPage);
page('/readmore', readmorePage);
page('/readmore/:id', readmorePage);
page('/create', createPage);
page.start();