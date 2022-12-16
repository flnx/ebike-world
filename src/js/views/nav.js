import { html, nothing } from './lib.js';
import { getUserData } from '../utils/userData.js';

import arrowDown from '/src/assets/svg/arrow-down.svg';
import logoImg from '/src/assets/images/logo/2.png';

export const state = {
  toggle: false,
};

let context = null;

const onClick = (e) => {
  if (e.target.classList.contains('on-toggle')) {
    if (!e.target.classList.contains('toggle-item')) {
      state.toggle = state.toggle ? false : true;
      context.renderNav(context);
    }
  } else {
    state.toggle = false;
    context.renderNav(context);
  }
};

document.querySelector('body').addEventListener('click', onClick);



export const nav = (ctx) => {
  context = ctx;
  return navTemplate(ctx);
};

const navTemplate = () => html`
  <div class="container-nav nav-wrapper" }>
    <div class="logo">
      <a href="/" class="logo-t"><img src="${logoImg}" /></a>
    </div>
    <nav class="main-nav mobile-hide mobile-show">
      <ul class="navbar">
        <li class="navbar__item"><a href="/blog">Blog</a></li>
        <li class="navbar__item"><a href="/bikes">Bikes</a></li>
        <li class="navbar__item"><a href="/accessories">accessories</a></li>
        <li class="navbar__item"><a href="/about">About</a></li>
        ${getUserData()
          ? html`
              <div class="navbar__dropdown on-toggle">
                <div class="navbar__dropdown__toggle on-toggle">
                  <img
                    src="https://i.pravatar.cc/150?img=48"
                    class="navbar__user-image on-toggle"
                    alt="avatar"
                    srcset=""
                    width="40px"
                    height="40px"
                  />
                  <img src="${arrowDown}" class="navbar__dropdown__arrow on-toggle" />
                </div>

                <ul
                  class="navbar__dropdown__menu ${state.toggle
                    ? ''
                    : 'nav-toggle-hidden'}"
                >
                  <li class="navbar__item on-toggle toggle-item">
                    <a href="/create">Add Bike</a>
                  </li>
                  <li class="navbar__item on-toggle toggle-item">
                    <a href="/add-post">Create Post</a>
                  </li>
                  <li class="navbar__item on-toggle toggle-item">
                    <a href="/logout">Logout</a>
                  </li>
                </ul>
              </div>
            `
          : html` <li class="navbar__guest"><a href="/login">Log In</a></li>
              <li class="navbar__guest"><a href="/register">Sign Up</a></li>`}
      </ul>
    </nav>
    <div class="menu-wrapper">
      <div class="hamburger-menu"></div>
    </div>
  </div>
`;
