import * as api from '../api/api.js';
import { html, nothing } from './lib.js';

export const createPage = (ctx) => {
  const onSubmit = async(e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    const fieldsData = validateData(formData);

    if (!fieldsData) {
      return;
    }

    if (Array.isArray(fieldsData)) {
      return ctx.render(createPageTemplate(onSubmit, fieldsData[0]));
    }

    const data = await api.post('Bike', fieldsData);
    console.log(data);

  };

  ctx.render(createPageTemplate(onSubmit));
};

const createPageTemplate = (onSubmit, errors) => html`
  <div class="container">
    <form action="" class="add-form" @submit=${onSubmit}>
      <div class="add-form__intro">
        <h1>Add an e-Bike</h1>
        ${errors ? html`<p class="error">Fields must not be empty!</p>` : nothing}
      </div>
      <div class="form-control">
        <div class="form-left">
          <input
            type="text"
            class="${errors?.brand ? 'border-error' : ''}"
            name="brand"
            id="c-bike-brand"
            placeholder="Brand"
          />
          <input
            type="text"
            class="${errors?.model ? 'border-error' : ''}"
            name="model"
            id="c-bike-model"
            placeholder="Model"
          />
          <input
            type="number"
            class="${errors?.weightLimit ? 'border-error' : ''}"
            name="weightLimit"
            id="c-bike-weight-limit"
            placeholder="Weight Limit"
          />
          <input
            type="number"
            class="${errors?.enginePower ? 'border-error' : ''}"
            name="enginePower"
            id="c-bike-engine-power"
            placeholder="Engine Power"
          />
          <input
            type="number"
            class="${errors?.batteryWeight ? 'border-error' : ''}"
            name="batteryWeight"
            id="c-bike-battery-weight"
            placeholder="Battery Weight"
          />
          <input
            type="number"
            class="${errors?.weight ? 'border-error' : ''}"
            name="weight"
            id="c-bike-weight"
            placeholder="Bike Total Weight"
          />
          <input
            type="text"
            class="${errors?.frame ? 'border-error' : ''}"
            name="frame"
            id="c-bike-frame"
            placeholder="Frame"
          />
          <input
            type="text"
            class="${errors?.fork ? 'border-error' : ''}"
            name="fork"
            id="c-bike-fork"
            placeholder="Fork"
          />
          <input
            type="text"
            class="${errors?.driveUnit ? 'border-error' : ''}"
            name="driveUnit"
            id="c-bike-drive-unit"
            placeholder="Drive Unit"
          />
          <input
            type="text"
            class="${errors?.battery ? 'border-error' : ''}"
            name="battery"
            id="c-bike-battery"
            placeholder="Battery"
          />
          <input
            type="text"
            class="${errors?.chain ? 'border-error' : ''}"
            name="chain"
            id="c-bike-chain"
            placeholder="Chain"
          />
        </div>
        <div class="form-right">
          <input
            type="text"
            class="${errors?.displayUnit ? 'border-error' : ''}"
            name="displayUnit"
            id="c-bike-display"
            placeholder="Display Unit"
          />
          <input
            type="text"
            class="${errors?.brakes ? 'border-error' : ''}"
            name="brakes"
            id="c-bike-brakes"
            placeholder="Brakes"
          />
          <input
            type="text"
            class="${errors?.rims ? 'border-error' : ''}"
            name="rims"
            id="c-bike-rims"
            placeholder="Rims"
          />
          <input
            type="text"
            class="${errors?.tires ? 'border-error' : ''}"
            name="tires"
            id="c-bike-tires"
            placeholder="Tires"
          />
          <input
            type="text"
            class="${errors?.imgName1 ? 'border-error' : ''}"
            name="imgName1"
            id="c-bike-img1"
            placeholder="Image url"
          />
          <input
            type="text"
            class="${errors?.imgName2 ? 'border-error' : ''}"
            name="imgName2"
            id="c-bike-img2"
            placeholder="Image url"
          />
          <input
            type="text"
            class="${errors?.imgName3 ? 'border-error' : ''}"
            name="imgName3"
            id="c-bike-img3"
            placeholder="Image url"
          />
          <input
            type="text"
            class="${errors?.imgName4 ? 'border-error' : ''}"
            name="imgName4"
            id="c-bike-img4"
            placeholder="Image url"
          />
          <input
            class="${errors?.imgName5 ? 'border-error' : ''}"
            type="text"
            name="imgName5"
            id="c-bike-img5"
            placeholder="Image url"
          />
          <input
            type="text"
            class="${errors?.imgName6 ? 'border-error' : ''}"
            name="imgName6"
            id="c-bike-img6"
            placeholder="Image url"
          />
        </div>
      </div>
      <button class="btn create-btn" type="submit">Add the Bike</button>
    </form>
  </div>
`;

const validateData = (data) => {
  const validateFields = Object.values(data);

  if (validateFields.length != 21) {
    return false;
  }

  const emptyFields = Object.keys(data).filter((x) => data[x] == '');

  if (emptyFields.length > 0) {
    const obj = emptyFields.reduce((a, v) => ({ ...a, [v]: v }), {});
    return [obj];
  }

  let posterUrls = Object.keys(data).reduce((obj, key) => {
    if (key.includes('imgName')) {
      obj[key] = data[key];
    }

    return obj;
  }, {});

  let bikeData = Object.keys(data).reduce((obj, key) => {
    if (!key.includes('imgName')) {
      obj[key] = data[key];
    }

    return obj;
  }, {});

  bikeData.weightLimit = Number(bikeData.weightLimit);
  bikeData.enginePower = Number(bikeData.enginePower);
  bikeData.batteryWeight = Number(bikeData.batteryWeight);
  bikeData.weight = Number(bikeData.weight);

  return Object.assign({ posterUrls }, bikeData);
};
