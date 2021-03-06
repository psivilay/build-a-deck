$(document).ready(function() {
  $("button#show-deck").click(function(event){
    event.preventDefault();

    var deckCards = [];

    //suits.forEach(function(suit) {
      //ranks.forEach(function(rank) {
        //deckCards.push(rank + " " + suit)
      //});
    //});

    //for loop replacement
    for (var s = 0; s < suits.length; s += 1) {
      for (var r = 0; r < ranks.length; r += 1) {
        deckCards.push(ranks[r] + " " + suits[s]);
      }
    }

    deckCards.map(function(card) {
      $("#output ul").append("<li>" + card + "</li>");
    });

  });
});

//4 suits
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"]

//13 ranks
var ranks = ["Ace of", "2 of", "3 of", "4 of", "5 of", "6 of", "7 of",
            "8 of", "9 of", "Jack of", "King of", "Queen of"]
