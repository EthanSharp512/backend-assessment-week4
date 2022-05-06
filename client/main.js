const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const newFortuneBtn = document.getElementById("new-fortune-button")
const newFortuneInput = document.getElementById("new-fortune-input")
const deleteBtn = document.getElementById("delete-button")
const deleteInput = document.getElementById("delete-input")

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

const addFortune = () => {
    const newFortune = newFortuneInput.value
    axios.post("http://localhost:4000/api/fortune/", {newFortune})
    .then(res => {
        alert(res.data)
        newFortuneInput.value = ""
    })
};

const deleteFortune = () => {
    console.log(deleteInput.value)
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
newFortuneBtn.addEventListener('click', addFortune)
deleteBtn.addEventListener('click', deleteFortune)