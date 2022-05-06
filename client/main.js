const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const postFortunesBtn = document.getElementById("postFortunesButton")










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
    

    const createCompliment = body => 
        axios.post("/api/createCompliment", body)
        .then(res = > {
            const data = res.data;
            alert(data);
        };
    
    
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

    
    complimentBtn.addEventListener('click', getCompliment)
    fortuneBtn.addEventListener('click', getFortune)
    postFortunesBtn.addEventListener('click', postFortunes)
