import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_sqb8Cv5y2YS9Hf2WEqoZ7KDBAEFJ7Xw9Xi8579d7Bims2AvGILCcxRFdBYsTGXic";

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
    const breedId = event.target.value;
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(resp => {
                return resp;
            })
            .catch(error => {
                throw new Error(error)
            })
}

export { fetchBreeds, fetchCatByBreed };
