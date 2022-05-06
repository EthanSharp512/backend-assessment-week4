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
    }
}