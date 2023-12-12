import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_sqb8Cv5y2YS9Hf2WEqoZ7KDBAEFJ7Xw9Xi8579d7Bims2AvGILCcxRFdBYsTGXic";

const list = document.querySelector('.cat-info')
const loader = document.querySelector('.loader')
const errorText = document.querySelector('.error')

function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds')
        .then(resp => {
            return resp
        })
        .catch(error => {
            throw new Error(error)
        })
}

function fetchCatByBreed(event) {
    event.preventDefault()
    const breedId = event.target.value;
    loader.style.display = "block";
    list.innerHTML = '';
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(resp => {
            loader.style.display = "none";
            const catInfo = resp.data[0].breeds[0];
            list.style.display = 'flex';
            list.style.gap = '20px';
            list.style.padding = '20px 0';
            list.innerHTML = `<img src="${resp.data[0].url}" alt="${catInfo.name}" width='500' >
                <div>
                <h1>${catInfo.name}</h1>
                <p>${catInfo.description}</p>
                <p>Temperament: ${catInfo.temperament}</p>
                </div>`
            })
            .catch(error => {
                errorText.style.display = "block";
            })
}
    
export { fetchBreeds, fetchCatByBreed };
