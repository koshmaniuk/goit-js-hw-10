import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select')
const loader = document.querySelector('.loader')
const errorText = document.querySelector('.error')
const list = document.querySelector('.cat-info')

errorText.style.display = "none";

fetchBreeds() 
    .then(data => {
        if(data.status === 200) {
            loader.style.display = "none";
            errorText.style.display = "none";
            select.insertAdjacentHTML("beforeend", createMarkup(data.data));
        }
       })
    .catch(error => {
        errorText.style.display = "block";
        console.log("Error:", error)
    })

function createMarkup(arr) {
    return arr.map(({ id, name }) => `
    <option value="${id}">${name}</option>
    `).join("")
}

function createCatMarkup(event) {
    event.preventDefault()
    fetchCatByBreed(event)
        .then(resp => {
            errorText.style.display = "none";
            loader.style.display = "none";
            const catInfo = resp.data[0].breeds[0];
            list.style.display = 'flex';
            list.style.gap = '20px';
            list.style.padding = '20px 0';
            list.innerHTML = `<img src="${resp.data[0].url}" alt="${catInfo.name}" width='500' >
                <div>
                <h1>${catInfo.name}</h1>
                <p>${catInfo.description}</p>
                <p><span style="font-weight: bold;">Temperament:</span> ${catInfo.temperament}</p>
                </div>`
        })
        .catch(error => {
        errorText.style.display = "block";
        console.log("Error:", error)
        })
}

select.addEventListener('change', createCatMarkup)
