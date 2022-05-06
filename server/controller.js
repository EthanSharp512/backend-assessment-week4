const compliments = require("./db.json");

let globalId = 4;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Dont leave the house today...", "Your bike is in the basement of the Alamo...", "Life is sometimes like trying to unravel a giant cable-knit sweater that someone keeps knitting and knitting...", "Let the world know your name, but do not let them wear it out...", "Take a picture, it will last longer...", "I know you are but what am I?"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getCompliments: (req, res) => {
        res.status(200).send(compliments);
    },

    createCompliment: (req, res) => {
        
        let { compliment, type } = req.body;

        let newComp = {
            id: globalId,
            compliment,
            type
        }

        compliments.push(newComp);
        res.status(200).send(compliments);
        globalId++;
    },
    updateCompliment: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;

        let index = houses.findIndex((house) => {
            return house.id === +id;
        })
        if(type === "plus") {
            houses[index].price += 10000;
            res.status(200).send(houses);
        } else if(type === "minus") {
            houses[index].price -= 10000;
            res.status(200).send(houses);
        }
    }
}