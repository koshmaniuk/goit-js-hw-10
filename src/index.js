import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_sqb8Cv5y2YS9Hf2WEqoZ7KDBAEFJ7Xw9Xi8579d7Bims2AvGILCcxRFdBYsTGXic";
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select')
const loader = document.querySelector('.loader')
const errorText = document.querySelector('.error')

errorText.style.display = "none";

fetchBreeds() 
    .then(data => {
        if(data.status === 200) {
            loader.style.display = "none";
            select.insertAdjacentHTML("beforeend", createMarkup(data.data));
        }
       })
    .catch(error => console.log("Error!!!!", error))

function createMarkup(arr) {
    return arr.map(({ id, name }) => `
    <option value="${id}">${name}</option>
    `).join("")
}

select.addEventListener('change', fetchCatByBreed); 
