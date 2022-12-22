import { html, nothing } from './lib.js';
import { getUserData } from '../utils/userData.js';

import arrowDown from '/src/assets/svg/arrow-down.svg';
import logoImg from '/src/assets/images/logo/2.png';

export const state = {
  toggle: false,
  hamburger: false,
};

export const nav = (ctx) => {
  const onHamburgerClick = (e) => {
    e.stopPropagation();
    state.hamburger = state.hamburger ? false : true;
    ctx.renderNav(ctx, onHamburgerClick);
  };

  return navTemplate(ctx, onHamburgerClick);
};

const navTemplate = (ctx, onClick) => html`
  <div  class="container-nav nav-wrapper">
    <div class="logo">
      <a href="/" class="logo-t"><img src="${logoImg}" /></a>
    </div>
    <nav class="main-nav ${ctx.isDesktop.matches ? "" : "on-toggle"} ${state.hamburger ? 'mobile-show' : 'mobile-hide'}">
      <ul class="navbar ${ctx.isDesktop.matches ? "" : "on-toggle"}">
        <li class="navbar__item ${ctx.isDesktop.matches ? "" : "on-toggle"}"><a href="/blog">Blog</a></li>
        <li class="navbar__item ${ctx.isDesktop.matches ? "" : "on-toggle"}"><a href="/bikes">Bikes</a></li>
        <li class="navbar__item ${ctx.isDesktop.matches ? "" : "on-toggle"}"><a href="/accessories">accessories</a></li>
        <li class="navbar__item ${ctx.isDesktop.matches ? "" : "on-toggle"}"><a href="/about">About</a></li>
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
                ${ctx.isDesktop.matches ? desktopDropdown() : mobileDropdown()}
              </div>
            `
          : html` <li class="navbar__guest"><a href="/login">Log In</a></li>
              <li class="navbar__guest"><a href="/register">Sign Up</a></li>`}
      </ul>
    </nav>
    <div class="menu-wrapper" @click=${onClick}>
      <div class="hamburger-menu ${state.hamburger ? 'animate' : null}"></div>
    </div>
  </div>
`;

const mobileDropdown = () => html` <ul class="navbar__dropdown__menu">
  <li class="navbar__item on-toggle toggle-item">
    <a href="/create">Add Bike</a>
  </li>
  <li class="navbar__item on-toggle toggle-item">
    <a href="/add-post">Create Post</a>
  </li>
  <li class="navbar__item on-toggle toggle-item">
    <a href="/cart">My Cart</a>
  </li>
  <li class="navbar__item on-toggle toggle-item">
    <a href="/logout">Logout</a>
  </li>
</ul>`;

const desktopDropdown = () => html` 
<div class="navbar__dropdown__menu ${state.toggle ? '' : 'nav-toggle-hidden'}">
  <li class="navbar__item on-toggle toggle-item">
    <a href="/create">Add Bike</a>
  </li>
  <li class="navbar__item on-toggle toggle-item">
    <a href="/add-post">Create Post</a>
  </li>
  <li class="navbar__item on-toggle toggle-item">
    <a href="/cart">My Cart</a>
  </li>
  <li class="navbar__item on-toggle toggle-item">
    <a href="/logout">Logout</a>
  </li>
</div>`;

const onFalse = (e) => {
  e.preventDefault();
}