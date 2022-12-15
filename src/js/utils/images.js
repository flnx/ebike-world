const imgRegex = /\.\/|\b\.png|.jpe?g|.svg|.webp/g

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace(imgRegex, '')] = r(item);
  });
  return images;
};

export const BIKE_IMAGES = importAll(
  require.context('/src/assets/images/bikes', false, /\.(png|jpe?g|svg|webp)$/)
);

export const BLOG_IMAGES = importAll(
  require.context('/src/assets/images/blog', false, /\.(png|jpe?g|svg|webp)$/)
);

export const AUTHOR_IMAGES = importAll(
  require.context('/src/assets/images/authors', false, /\.(png|jpe?g|svg|webp)$/)
);