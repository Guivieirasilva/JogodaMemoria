const FRONT = "card_front"
const BACK = "card_back"

let techs = ['bootstrap','firebase','typescript','visual','react', 'github', 'css','html','mongo','javascript']

let cards = null; 

startGame();

function startGame(){

    cards = createCardFromTechs(techs);
    shuffleCards(cards);
    console.log(cards);

}

function shuffleCards(cards){

    // let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }
}

function createCardFromTechs(techs) {
    
    let cards = [];

        for(let tech of techs){
        cards.push(createPairfromTech(tech));   
    }

   return console.log(cards.flatMap(pair => pair));

}

function createPairfromTech(tech){

    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    },{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }]
}
function createIdWithTech(tech){
    return tech + parseInt(Math.random() + 1000)
}