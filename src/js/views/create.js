import { html, nothing } from './lib.js';
import { createBike } from '../api/data.js';
import { generateRandomBike } from '../utils/generateBike.js';

export const createPage = (ctx) => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));
        const fieldsData = validateData(formData);

        if (!fieldsData) {
            return;
        }

        if (Array.isArray(fieldsData)) {
            return ctx.render(
                createPageTemplate(onSubmit, fieldsData[0], onTextGenerate)
            );
        }

        e.target.reset();
        const data = await createBike(fieldsData);
        ctx.page.redirect(`/bike-details/${data.objectId}`);
    };

    const onTextGenerate = (e) => {
        e.preventDefault();

        const randomBike = generateRandomBike();

        ctx.render(
            createPageTemplate(onSubmit, '', onTextGenerate, randomBike)
        );
    };

    ctx.render(createPageTemplate(onSubmit, '', onTextGenerate));
};

// Validate data before processing
const validateData = (dataObj) => {
    // Extracting values of the object properties
    const fieldsArr = Object.values(dataObj);

    // Check if there are exactly 25 fields in the data
    if (fieldsArr.length != 25) {
        return false;
    }

    // Extract the empty fields
    const emptyFieldsArr = Object.keys(dataObj).filter((x) => dataObj[x] == '');

    if (emptyFieldsArr.length > 0) {
        // Create an object with their names
        const obj = emptyFieldsArr.reduce((acc, value) => ({ ...acc, [value]: value }), {});
        return [obj];
    }

    // Extracting poster image URLs
    let posterUrls = Object.keys(dataObj).reduce((obj, key) => {
        if (key.includes('imgName')) {
            obj[key] = dataObj[key];
        }

        return obj;
    }, {});

    // Extracting bike data excluding image names
    let bikeData = Object.keys(dataObj).reduce((obj, key) => {
        if (!key.includes('imgName')) {
            obj[key] = dataObj[key];
        }

        return obj;
    }, {});

    // Combining poster URLs and bike data into a single object
    bikeData.weightLimit = Number(bikeData.weightLimit);
    bikeData.batteryWeight = Number(bikeData.batteryWeight);
    bikeData.weight = Number(bikeData.weight);
    bikeData.range = Number(bikeData.range);
    bikeData.price = Number(bikeData.price);

    return Object.assign({ posterUrls }, bikeData);
};

const createPageTemplate = (onSubmit, errors, onTextGenerate, rBike) => html`
    <div class="container">
        <form action="" class="add-form" @submit=${onSubmit}>
            <div class="add-form__intro">
                <h1>Add an e-Bike</h1>
                ${errors
                    ? html`<p class="error">Fields must not be empty!</p>`
                    : nothing}
            </div>
            <div class="form-control">
                <div class="form-left">
                    <input
                        type="text"
                        class="${errors?.description ? 'border-error' : ''}"
                        name="description"
                        placeholder="Description"
                        .value=${rBike?.description || null}
                    />
                    <input
                        type="text"
                        class="${errors?.brand ? 'border-error' : ''}"
                        name="brand"
                        placeholder="Brand"
                        .value=${rBike?.brand || null}
                    />
                    <input
                        type="text"
                        class="${errors?.model ? 'border-error' : ''}"
                        name="model"
                        placeholder="Model"
                        .value=${rBike?.model || null}
                    />
                    <input
                        type="number"
                        class="${errors?.weightLimit ? 'border-error' : ''}"
                        name="weightLimit"
                        placeholder="Weight Limit"
                        .value=${rBike?.weightLimit || null}
                    />
                    <input
                        type="text"
                        class="${errors?.enginePower ? 'border-error' : ''}"
                        name="enginePower"
                        placeholder="Engine"
                        .value=${rBike?.enginePower || null}
                    />
                    <input
                        type="number"
                        class="${errors?.batteryWeight ? 'border-error' : ''}"
                        name="batteryWeight"
                        placeholder="Battery Weight"
                        .value=${rBike?.batteryWeight || null}
                    />
                    <input
                        type="number"
                        class="${errors?.weight ? 'border-error' : ''}"
                        name="weight"
                        placeholder="Bike Total Weight"
                        .value=${rBike?.weight || null}
                    />
                    <input
                        type="text"
                        class="${errors?.frame ? 'border-error' : ''}"
                        name="frame"
                        placeholder="Frame"
                        .value=${rBike?.frame || null}
                    />
                    <input
                        type="text"
                        class="${errors?.fork ? 'border-error' : ''}"
                        name="fork"
                        placeholder="Fork"
                        .value=${rBike?.fork || null}
                    />
                    <input
                        type="text"
                        class="${errors?.charger ? 'border-error' : ''}"
                        name="charger"
                        placeholder="Charger"
                        .value=${rBike?.charger || null}
                    />
                    <input
                        type="text"
                        class="${errors?.battery ? 'border-error' : ''}"
                        name="battery"
                        placeholder="Battery"
                        .value=${rBike?.battery || null}
                    />
                    <input
                        type="text"
                        class="${errors?.chain ? 'border-error' : ''}"
                        name="chain"
                        placeholder="Chain"
                        .value=${rBike?.chain || null}
                    />

                    <input
                        type="number"
                        class="${errors?.price ? 'border-error' : ''}"
                        name="price"
                        placeholder="Price"
                        .value=${rBike?.price || null}
                    />
                </div>
                <div class="form-right">
                    <input
                        type="text"
                        class="${errors?.speed ? 'border-error' : ''}"
                        name="speed"
                        placeholder="Speed"
                        .value=${rBike?.speed || null}
                    />
                    <input
                        type="number"
                        class="${errors?.range ? 'border-error' : ''}"
                        name="range"
                        placeholder="Range"
                        .value=${rBike?.range || null}
                    />
                    <input
                        type="text"
                        class="${errors?.displayUnit ? 'border-error' : ''}"
                        name="displayUnit"
                        placeholder="Display Unit"
                        .value=${rBike?.displayUnit || null}
                    />
                    <input
                        type="text"
                        class="${errors?.brakes ? 'border-error' : ''}"
                        name="brakes"
                        placeholder="Brakes"
                        .value=${rBike?.brakes || null}
                    />
                    <input
                        type="text"
                        class="${errors?.rims ? 'border-error' : ''}"
                        name="rims"
                        placeholder="Rims"
                        .value=${rBike?.rims || null}
                    />
                    <input
                        type="text"
                        class="${errors?.tires ? 'border-error' : ''}"
                        name="tires"
                        placeholder="Tires"
                        .value=${rBike?.tires || null}
                    />
                    <input
                        type="text"
                        class="${errors?.imgName1 ? 'border-error' : ''}"
                        name="imgName1"
                        placeholder="Image url"
                        .value=${rBike?.posterUrls.imgName1 || null}
                    />
                    <input
                        type="text"
                        class="${errors?.imgName2 ? 'border-error' : ''}"
                        name="imgName2"
                        placeholder="Image url"
                        .value=${rBike?.posterUrls.imgName2 || null}
                    />
                    <input
                        type="text"
                        class="${errors?.imgName3 ? 'border-error' : ''}"
                        name="imgName3"
                        placeholder="Image url"
                        .value=${rBike?.posterUrls.imgName3 || null}
                    />
                    <input
                        type="text"
                        class="${errors?.imgName4 ? 'border-error' : ''}"
                        name="imgName4"
                        placeholder="Image url"
                        .value=${rBike?.posterUrls.imgName4 || null}
                    />
                    <input
                        class="${errors?.imgName5 ? 'border-error' : ''}"
                        type="text"
                        name="imgName5"
                        placeholder="Image url"
                        .value=${rBike?.posterUrls.imgName5 || null}
                    />
                    <input
                        type="text"
                        class="${errors?.imgName6 ? 'border-error' : ''}"
                        name="imgName6"
                        placeholder="Image url"
                        .value=${rBike?.posterUrls.imgName6 || null}
                    />
                </div>
            </div>
            <div class="add-form__buttons">
                <button class="btn" @click=${onTextGenerate}>
                    Auto Generate Bike Text
                </button>
                <button class="btn create-btn" type="submit">
                    Add the Bike
                </button>
            </div>
        </form>
    </div>
`;
