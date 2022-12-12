import { html } from './lib.js';
import { images } from '../utils/images.js';

import authorPic from '/src/assets/images/authors/Elena.jpg';
import bikePic from '/src/assets/images/authors/Maria.jpg';
import bikePic2 from '/src/assets/images/authors/Maria.jpg';

export const blogPage = (ctx) => {
  ctx.render(blogTemplate());
};

const blogTemplate = () => html`

<div class="container">
    <main>
      <article>
        <div class="article__wrapper">
          <div class="article__img"><img src="${images['aventure5']}" alt="" srcset=""></div>
          <div class="article__content">
            <section class="article__text flow">
              <h1>What is an e-Bike</h1>
              <p><span class="bold">e-Bikes</span> have a motor with a rechargeable battery attached to them which makes
                propulsion easier. <br>
                There’s two types of e-Bikes: <span class="bold redC">Pedal Assist (Pedalec)</span> and <span
                  class="bold yellowC">Throttle (Twist and Go).</span> <br>
              </p>
              <p><span class="bold redC">The Pedal Assist</span> one is more common. It basically activates a small
                motor that gives you a boost when pushing on the pedal. The motor assists you up to 25 km/h - 32 km/h,
                depending on the country you live in and the law...</p>
              <a href="/readmore">
                <button class="btn btn__rm">Read More</button>
              </a>
            </section>
            <footer>
              <div class="ar__footer">
                <span>
                  <time>July 24, 2021</time>
                  <p class="readtime">5 min read</p>
                </span>
                <div class="ar__author">
                  <img src="${authorPic}" class="author__img" alt="Author Picutre" srcset="">
                  <div class="author__info">
                    <span>Elena Malinova</span>
                    <hr>
                    <span>Author</span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div> <!-- WRAPPER-->
      </article>

    </main>

    <hr class="linebreak">

    <section class="trending">
      <h2>Trending</h2>
      <div class="ar__wrapper">
        <!-- 1 -->
        <article>
          <div class="ar ar__1 bs">
            <img src="${images['aventure6']}" alt="" srcset="">
            <div class="ar__title">
              <h3>Best Mountain E-Bikes 2021</h3>
            </div>
            <div class="ar__info">
              <span>Cycling</span>
              <span>3min read</span>
            </div>
          </div>
        </article>
        <!-- 2 -->
        <article>
          <div class="ar ar__1 bs">
            <img src="${images['aventure5']}" alt="" srcset="">
            <div class="ar__title">
              <h3>Best Mountain E-Bikes 2021</h3>
            </div>
            <div class="ar__info">
              <span>Cycling</span>
              <span>3min read</span>
            </div>         
          </div>
        </article>
        <!-- 3 -->
        <article>
          <div class="ar ar__1 bs">
            <img src="${images['sinch6']}" alt="" srcset="">
            <div class="ar__title">
              <h3>Best Mountain E-Bikes 2021</h3>
            </div>
            <div class="ar__info">
              <span>Cycling</span>
              <span>3min read</span>
            </div>
          </div>
        </article>

      </div>
    </section>

    <!-- LATEST -->

    <section>
      <section class="ar-flex-wrap mb">
        <section class="flex__1 mb">
          <h3 class="mb1">Latest Articles</h3>
          <div class="categories mb1">

            <span>Workouts</span>
            <span>Bikes</span>
            <span>News</span>
            <span>Advice</span>
            <span>Parts</span>
            <span>Teach Me</span>
          </div>

          <article>
            <a href="/readmore">
              <div class="latest bs">
                <!-- image -->
                <section class="latest__img">
                  <img src="${images['sinch6']}" alt="bike picture">
                </section>
                <!-- wrapper -->
                <section class="article__wrap">
                  <header>
                    <h2>What is an e-Bike</h2>
                    <p><span class="bold">e-Bikes</span> have a motor with a rechargeable battery attached to them which
                      makes
                      propulsion easier. <br>
                      There’s two types of e-Bikes: <span class="bold redC">Pedal Assist (Pedalec)</span> and <span
                        class="bold yellowC">Throttle (Twist and Go)...</span></span> <br>
                    </p>
                  </header>

                  <footer>
                    <div class="ar__footer">
                      <span>
                        <time>July 24, 2021</time>
                        <p>2 min read</p>
                      </span>
                      <section class="ar__author">
                        <img src="${authorPic}" class="author__img" alt="Author Picutre" srcset="">
                        <header class="author__info">
                          <span>Elena Malinova</span>
                          <hr>
                          <span class="author__info__name">Author</span>
                        </header>
                      </section>
                    </div>
                  </footer>

                </section>
              </div>
            </a>
          </article>

          <article>
            <a href="/readmore">
              <div class="latest bs">
                <!-- image -->
                <section class="latest__img">
                  <img src="${images['rover5']}" alt="bike picture">
                </section>
                <!-- wrapper -->
                <section class="article__wrap">
                  <header>
                    <h2>What is an e-Bike</h2>
                    <p><span class="bold">e-Bikes</span> have a motor with a rechargeable battery attached to them which
                      makes
                      propulsion easier. <br>
                      There’s two types of e-Bikes: <span class="bold redC">Pedal Assist (Pedalec)</span> and <span
                        class="bold yellowC">Throttle (Twist and Go)...</span></span> <br>
                    </p>
                  </header>

                  <footer>
                    <div class="ar__footer">
                      <span>
                        <time>July 24, 2021</time>
                        <p>2 min read</p>
                      </span>
                      <section class="ar__author">
                        <img src="${authorPic}" class="author__img" alt="Author Picutre" srcset="">
                        <header class="author__info">
                          <span>Elena Malinova</span>
                          <hr>
                          <span class="author__info__name">Author</span>
                        </header>
                      </section>
                    </div>
                  </footer>

                </section>
              </div>
            </a>
          </article>

          <article>
            <a href="/readmore">
              <div class="latest bs">
                <!-- image -->
                <section class="latest__img">
                  <img src="${images['aventure6']}" alt="bike picture">
                </section>
                <!-- wrapper -->
                <section class="article__wrap">
                  <header>
                    <h2>What is an e-Bike</h2>
                    <p><span class="bold">e-Bikes</span> have a motor with a rechargeable battery attached to them which
                      makes
                      propulsion easier. <br>
                      There’s two types of e-Bikes: <span class="bold redC">Pedal Assist (Pedalec)</span> and <span
                        class="bold yellowC">Throttle (Twist and Go)...</span></span> <br>
                    </p>
                  </header>

                  <footer>
                    <div class="ar__footer">
                      <span>
                        <time>July 24, 2021</time>
                        <p>2 min read</p>
                      </span>
                      <section class="ar__author">
                        <img src="${authorPic}" class="author__img" alt="Author Picutre" srcset="">
                        <header class="author__info">
                          <span>Elena Malinova</span>
                          <hr>
                          <span class="author__info__name">Author</span>
                        </header>
                      </section>
                    </div>
                  </footer>

                </section>
              </div>
            </a>
          </article>
        </section>

        <!-- Aside -->
        <aside class=flex__2>
          <h3 class="mb1">Most Viewed</h3>

          <div class="categories mb1">
            <span>This Week</span>
            <span>This Month</span>
          </div>

          <section class="box bs">
            <h4>How to imrpove your stamina and why cycling is one of the best ways</h4>
            <time>November 3, 2021</time>
          </section>
          <section class="box bs">
            <h4>How to protect yourself from heat (reccommendations)</h4>
            <time>November 3, 2021</time>
          </section>
          <section class="box bs">
            <h4>How to protect yourself from heat (reccommendations)</h4>
            <time>November 3, 2021</time>
          </section>
          <section class="box bs">
            <h4>How to protect yourself from heat (reccommendations)</h4>
            <time>November 3, 2021</time>
          </section>
          <section class="box bs">
            <h4>How to protect yourself from heat (reccommendations)</h4>
            <time>November 3, 2021</time>
          </section>

          <form action="" method="post" class="sub__menu bs">
            <p>Our weekly letters</p>
            <input aria-label="first name" type="text" id="fname" placeholder="First Name" required>
            <input aria-label="email" type="email" id="email" placeholder="Email Adress" required>
            <button class="btn" type="submit">Lets go!</button>
          </form>
        </aside>
  </div>
  </section>


  </div>


`;
