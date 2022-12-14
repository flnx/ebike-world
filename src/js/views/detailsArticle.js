import { html } from './lib.js';

export const articleDetailsPage = async (ctx) => {
  // const data = await getBike(ctx.params.id);

  ctx.render(articleDetailsTemplate());
};

const articleDetailsTemplate = () => html`
  <div class="container ar-flex-wrap">
    <article class="flex__blog__1">
      <div class="rm__wrapper flow">
        <h1>What is an e-Bike</h1>
        <img src="" alt="showcase image" srcset="" />
        <div class="ar__footer">
          <span>
            <time>July 24, 2021</time>
            <p>2 min read</p>
          </span>

          <div class="ar__author">
            <img
              src=""
              class="author__img"
              alt="Author Picutre"
              srcset=""
            />
            <div class="author__info">
              <span>Elena Malinova</span>
              <hr />
              <span class="author__info__name">Author</span>
            </div>
          </div>
        </div>
        <div class="rm__text flow">
          <p>
            <span class="bold">e-Bikes</span> have a motor with a rechargeable battery
            attached to them which makes propulsion easier. <br />
            There’s two types of e-Bikes:
            <span class="bold redC">Pedal Assist (Pedalec)</span> and
            <span class="bold yellowC">Throttle (Twist and Go).</span> <br />
          </p>
          <p>
            <span class="bold redC">The Pedal Assist</span> one is more common. It
            basically activates a small motor that gives you a boost when pushing on the
            pedal. The motor assists you up to 25 km/h - 32 km/h, depending on the country
            you live in and the law.
          </p>
          <p>
            You can go faster than that but without the electric motor support. That means
            once you hit 25 km/h the motor will stop supporting you, so at this point
            you’re on your own steam, buddy. How hard the push is depends on the type of
            motor you have and what mode you use. The most common are 250w, 500w, 750w.
            Normally there's 4 modes that the engine supports - ECO, Tour, Sport and
            Turbo.
          </p>
          <p>
            The higher you go, the more assist you’ll get. And twisting a **throttle**
            does the same thing but without pedaling. That means the battery powered
            assist comes through when you throttle and also when you use the pedals.
          </p>
          <p>
            In Europe you don’t have to pay road tax and you don’t need any license of any
            kind if the motor does not exceed 250w and the motor runs only up to 25 km/h.
            If they exceed 250w and can go more than 25 km/h, they will be categorized as
            a moped or motorcycle. Some countries like the United States or Canada have
            different federal regulations governing the safety requirements and standards
            of manufacture. In Canada and the U.S. the motor cannot exceed 500w and the
            motor assists you up to 32 km/h
          </p>
        </div>
      </div>
    </article>

    <section class="flex__blog__2">
      <h3 class="mb1">Most Viewed</h3>
      <div class="categories mb1">
        <span>This Week</span>
        <span>This Month</span>
      </div>

      <div class="box bs">
        <h4>How to imrpove your stamina and why cycling is one of the best ways</h4>
        <time>November 3, 2021</time>
      </div>

      <div class="box bs">
        <h4>How to protect yourself from heat (reccommendations)</h4>
        <time>November 3, 2021</time>
      </div>

      <div class="box bs">
        <h4>The best bikes in 2021 and which one to pick</h4>
        <time>November 3, 2021</time>
      </div>

      <div class="box bs">
        <h4>Mountain bikes are awesome and this is why</h4>
        <time>November 3, 2021</time>
      </div>

      <div class="box bs">
        <h4>How to protect yourself from the wet and stay warm</h4>
        <time>November 3, 2021</time>
      </div>

      <div class="box bs">
        <h4>How to protect yourself from the wet and stay warm</h4>
        <time>November 3, 2021</time>
      </div>

      <form action="" method="post" class="sub__menu bs">
        <p>Our weekly letters</p>
        <input aria-label="first name" type="text" id="fname" placeholder="First Name" required/>
        <input aria-label="email" type="email" id="email" placeholder="Email Adress" required/>
        <button class="btn" type="submit">Lets go!</button>
      </form>
    </section>
  </div>
`;
