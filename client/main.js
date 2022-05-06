const complimentsContainer = document.querySelector('#compliments-container')
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const form = document.querySelector('form')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
    };
    
    const getFortune = () => {
        
        axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
    };
    


baseURL = "http://localhost:4000/api/compliments"


const complimentsCallback = ({ data: compliments }) => displayCompliments(compliments)
const errCallback = err => console.log(err)

const getCompliments = () => {
    axios.get(baseURL)
        .then(complimentsCallback)
        .catch(errCallback)
        };

const createCompliment = body => axios.post(baseURL, body).then(complimentsCallback).catch(errCallback)
// const deleteCompliment = id => axios.delete(`${baseURL}/${id}`).then(complimentsCallback).catch(errCallback)
// const updateCompliment = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(complimentsCallback).catch(errCallback)
    
    
function submitHandler(e) {
    e.preventDefault()
    
    let compliment = document.querySelector('#compliment')
    let type = document.querySelector('#type')
    
    let bodyObj = {
        compliment: compliment.value,
        type: type.value
    }
    
    createCompliment(bodyObj)
    
    compliment.value = ''
    type.value = ''
}



function createComplimentCard(yourCompliment) {
    const complimentCard = document.createElement('div')
    complimentCard.classList.add('compliment-card')

    complimentCard.innerHTML = `<p class="compliment">${yourCompliment.compliment}</p>`

    complimentsContainer.appendChild(complimentCard)
}

    

function displayCompliments(arr) {
    complimentsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createComplimentCard(arr[i])
    }
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', submitHandler)

getCompliments()





