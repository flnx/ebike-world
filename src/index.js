import page from 'page';
import { ctxDecorator } from './js/layout';
import { aboutPage } from './js/views/about';
import { accessoriesPage } from './js/views/accessories';
import { bikesPage } from './js/views/bikes';
import { blogPage } from './js/views/blog';
import { detailsPage } from './js/views/details';
import { homePage } from './js/views/home';
import { readmorePage } from './js/views/readmore';

import './styles/main.scss';



page(ctxDecorator);
page('/', homePage);
page('/index.html', '/');
page('/blog', blogPage);
page('/bikes', bikesPage);
page('/accessories', accessoriesPage);
page('/about', aboutPage);
page('/details', detailsPage);
page('details/:id', detailsPage);
page('readmore', readmorePage);
page('readmore/:id', readmorePage);
page.start();