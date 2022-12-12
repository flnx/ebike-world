const imgRegex = /\.\/|\b\.png|.jpe?g|.svg|.webp/g

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace(imgRegex, '')] = r(item);
  });
  return images;
};

export const images = importAll(
  require.context('/src/assets/images/bikes', false, /\.(png|jpe?g|svg|webp)$/)
);