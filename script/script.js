const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

let techs = ['bootstrap','firebase','typescript','visual','react', 'github', 'css','html','mongodb','javascript']

let cards = null; 

startGame();

function startGame(){

    cards = createCardFromTechs(techs);
    shuffleCards(cards);

    initializeCards(cards)

}
function initializeCards(cards){
    let gameBoard = document.getElementById("gameBoard")
    
    cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipcard)
         gameBoard.appendChild(cardElement);
    });
}

function createCardContent(card, cardElement){

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);

}

function createCardFace(face, card, element){

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
        if(face === FRONT){
            let iconElement = document.createElement('img')
            iconElement.classList.add(ICON);
            iconElement.src = "./style/imagens/" + card.icon + ".png";
            cardElementFace.appendChild(iconElement)
        }else{
            cardElementFace.innerHTML = "&lt;/&gt";
        }
    element.appendChild(cardElementFace);
}

function shuffleCards(cards){

    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }
}

function createCardFromTechs(techs) {
    
    let cards = [];

        techs.forEach((tech) => {
            cards.push(createPairfromTech(tech));   
    })
    return cards.flatMap(pair => pair);

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
    return tech + parseInt(Math.random() * 1000)
}
function flipcard(){
 this.classList.add("flip")
}