let game = {

    techs: ['bootstrap','firebase','typescript','visual','react', 'github', 'css','html','mongodb','javascript'],

    cards: null,

    createCardFromTechs: function (techs) {
    
        this.cards = [];
    
            this.techs.forEach((tech) => {
                this.cards.push(this.createPairfromTech(tech));   
        })
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
    
    },
    
    createPairfromTech: function (tech){
    
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        },{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }]
    },
    createIdWithTech: function (tech){
        return tech + parseInt(Math.random() * 1000)
    },

    shuffleCards: function (cards){

        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while(currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }





}