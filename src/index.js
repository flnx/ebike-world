import page from 'page';
import { ctxDecorator } from './js/layout.js';
import { aboutPage } from './js/views/about.js';
import { accessoriesPage } from './js/views/accessories.js';
import { bikesPage } from './js/views/bikes.js';
import { blogPage } from './js/views/blog.js';
import { createPage } from './js/views/create.js';
import { detailsPage } from './js/views/details.js';
import { homePage } from './js/views/home.js';
import { readmorePage } from './js/views/readmore.js';

import './styles/main.scss';

page(ctxDecorator);
page('/', homePage);
page('/index.html', '/');
page('/blog', blogPage);
page('/bikes', bikesPage);
page('/accessories', accessoriesPage);
page('/about', aboutPage);
page('/details', detailsPage);
page('/details/:id', detailsPage);
page('/readmore', readmorePage);
page('/readmore/:id', readmorePage);
page('/create', createPage);
page.start();
