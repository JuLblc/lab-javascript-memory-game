const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // Ajout carte dans tableau pickedcard en fonction de sa longeur (2 cartes max)
      if (memoryGame.pickedCards.length <= 1){
        memoryGame.pickedCards.push(card);
        card.classList.toggle("turned");
        //Si 2 cartes
        if (memoryGame.pickedCards.length === 2){          
          let pickedCardName1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
          let pickedCardName2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
          //Vérif si identitique
          if (memoryGame.checkIfPair(pickedCardName1,pickedCardName2)){
              document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;// incrémentation du nbr de tentatives
              document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed; // incrémentation du score
              //Verif si jeu terminé
              if(memoryGame.isFinished()){
                console.log("gagné");
              }             
          }
          else {
            document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;// incrémentation du nbr de tentatives
            //function timeOut pour laisser le tps au joueur de mémoriser
            let myArr = memoryGame.pickedCards;
            setTimeout(()=>{
              myArr.forEach(pickedCard => {
              //Cartes se retournent de nouveau
              pickedCard.classList.toggle("turned");
              })
            },1000)
          }
          memoryGame.pickedCards = [];
        }
      }      
      console.log(`Card clicked: ${card}`);
    });
  });
});
