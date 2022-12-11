import { html } from './lib.js';
import showcaseImg from '/src/assets/images/showcase/3.png';
import authorPic from '/src/assets/images/authors/Maria.jpg';
import authorPic2 from '/src/assets/images/authors/Elena.jpg';
import bikePic from '/src/assets/images/bikes/5.jpg';
import bikePic2 from '/src/assets/images/bikes/6.webp';

export const homePage = (ctx) => {
  ctx.render(homePageTemplate());
};

const homePageTemplate = () => html`
  <!-- SHOWCASE -->
  <main class="main--image mb1">
    <div class="container">
      <section class="showcase">
        <section class="showcase__intro">
          <h1>The Ultimate <span>e-Bike</span> portal of 2022 that covers all of your questions</h1>
          <p>We love what we do and we'd love to share it with the world. <br> Check out <span>our blog</span> if you're
            interested in learning and exploring a whole new world of eBiking!</p>
          <div class="showcase__buttons">
            <button class="btn showcase-btn">EXPLORE</button>
            <button class="btn showcase-btn2">ACTION</button>
          </div>
        </section>
        <section class="showcase__img">
          <img src="${showcaseImg}" alt="" srcset="">
        </section>
        <section class="social--links">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-telegram"></i>
        </section>

      </section>
    </div>
  </main>
  <div class="container">
    <!-- PRODUCTS INFO -->
    <section class="mb">
      <ul class="navcat">
        <li class="navcat__1"><a href="/bikes">e-Bikes</a></li>
        <li class="navcat__2"><a href="/bikes">Clothing</a></li>
        <li class="navcat__3"><a href="/bikes">Accessories</a></li>
        <li class="navcat__4"><a href="/bikes">Tips & Tricks</a></li>
        <li class="navcat__5"><a href="/bikes">Why e-Cycling</a></li>
        <li class="navcat__6"><a href="/bikes">Our Blog</a></li>
      </ul>
    </section>

    <!-- LATEST ARTICLE BLOG-->
    <section>
      <div class="ar-flex-wrap mb">
        <section class="flex__1 mb">
          <h3 class="mb1">Latest Articles</h3>
          <section class="categories mb1">
            <span>Workouts</span>
            <span>Bikes</span>
            <span>News</span>
            <span>Advice</span>
            <span>Parts</span>
            <span>Teach Me</span>
          </section>

          <article>
            <a href="/readmore">
              <div class="latest bs">
                <!-- image -->
                <section class="latest__img">
                  <img src="${bikePic}" alt="bike picture">
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
                        <img src="${authorPic2}" class="author__img" alt="Author Picutre" srcset="">
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
                  <img src="${bikePic}" alt="bike picture">
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

        <!-- aside -->
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
            <h4>How to imrpove your stamina and why cycling is one of the best ways</h4>
            <time>November 3, 2021</time>
          </section>
          <!-- form -->
          <form action="" method="post" class="sub__menu bs">
            <p>Our weekly letters</p>
            <input aria-label="first name" type="text" id="fname" placeholder="First Name" required>
            <input aria-label="email" type="email" id="email" placeholder="Email Adress" required>
            <button class="btn" type="submit">Lets go!</button>
          </form>
        </aside>

      </div>
    </section>
    <section>
      <!-- PRODUCTS WRAPPER-->
      <h2>Top Choices</h2>

      <div class="products mb">

        <!-- PRODUCT 1 -->
        <div class="product-1">
          <div class="bike__img"><img src="${bikePic2}" alt="bikeImg" srcset=""></div>
          <div class="product-1__info">
            <div class="flow front"><span>CUBE Hybrid One</span>
              <pre>$1499</pre>
            </div>
            <a href="#"><i class="fas fa-cart-plus"></i></a>
          </div>
        </div>

        <div class="product-1">
          <div class="bike__img"><img src="${bikePic2}" alt="bikeImg" srcset=""></div>
          <div class="product-1__info">
            <div class="flow front"><span>CUBE Hybrid One</span>
              <pre>$1499</pre>
            </div>
            <a href="#"><i class="fas fa-cart-plus"></i></a>
          </div>
        </div>

        <div class="product-1">
          <div class="bike__img"><img src="${bikePic2}" alt="bikeImg" srcset=""></div>
          <div class="product-1__info">
            <div class="flow front"><span>CUBE Hybrid One</span>
              <pre>$1499</pre>
            </div>
            <a href="#"><i class="fas fa-cart-plus"></i></a>
          </div>
        </div>

        <div class="product-1">
          <div class="bike__img"><img src="${bikePic2}" alt="bikeImg" srcset=""></div>
          <div class="product-1__info">
            <div class="flow front"><span>CUBE Hybrid One</span>
              <pre>$1499</pre>
            </div>
            <a href="#"><i class="fas fa-cart-plus"></i></a>
          </div>
        </div>

        <div class="product-1">
          <div class="bike__img"><img src="${bikePic2}" alt="bikeImg" srcset=""></div>
          <div class="product-1__info">
            <div class="flow front"><span>CUBE Hybrid One</span>
              <pre>$1499</pre>
            </div>
            <a href="#"><i class="fas fa-cart-plus"></i></a>
          </div>
        </div>


      </div>
    </section>
  </div>





`;
