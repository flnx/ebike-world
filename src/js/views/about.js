import { html } from 'lit-html';

export const aboutPage = (ctx) => {
  ctx.render(aboutPageTemplate());
};

const aboutPageTemplate = () => html`
  <div class="container">
    <section class="about">
      <h1>The e-Bike's Team</h1>
      <p class="about__paragraphIntro">
        We are a small group of people who loves to talk about e-Cycling
      </p>
      <div class="about__img">
        <img src="images/showcase.jpg" alt="" srcset="" />
      </div>
      <div class="about__description">
        <div>
          <h2>A few words about us</h2>
          <p>
            If you're visiting this page, you're likely here because you're searching for
            a random sentence. Sometimes a random word just isn't enough, and that is
            where the random sentence generator comes into play. By inputting the desired
            number, you can make a list of as many random sentences as you want or need.
            Producing random sentences can be helpful in a number of different ways.
          </p>
        </div>
        <div class="about__description__icons">
          <h3>Follow us</h3>
          <i class="fa-brands fa-facebook"> </i>
          <i class="fa-brands fa-twitter-square"> </i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </section>
  </div>
`;
