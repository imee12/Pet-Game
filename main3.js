$(document).ready(function () {
  game.init();
});



function Player (name) {
  this.name = name;
  this.talk = function (sound) {
    console.log(sound)
  }

  this.foodsupply= 0;
  this.love = 0;
  this.pets= 0;
  this.dogs=0;
   //this.love = this.love + purrs;
  this.feed = function (food) {
    console.log(food)
  }
  this.catch = function (cat) {
    var pets = Math.floor(Math.random() * 10);
  //  console.log("Gotcha!")
  //  cat.caught(pets);
  ///  dog.caught(pets);


  }
}




function Cat (name) {
  this.name = name;
  this.energy = 100;
  this.purrs = 10;
  this.talk = function (sound) {
   console.log(sound)
  }
  this.run = function (sound) {
    console.log(sound)
  }
  this.caught = function (pets) {
    if(this.energy >= 0){
    //  this.energy = this.energy - pets;
      console.log("Keep running" + this.name);

    } else if (this.energy < 0){
      console.log(this.name + "is caught!");
    }


  }
}

function Dog (type) {
  this.type = type;
  this.energy = 100;
  this.talk = function (sound) {
    console.log(sound)
  }
  this.run = function (sound) {
    console.log(sound)
  }

  this.caught= function (sound) {
    console.log(sound)
  }

}



function Food (type) {
  this.type = type;

}




cat1 = new Cat ("Felix")
cat1.talk ("meeeooow")
cat1.caught("cryyyyy")
console.log(cat1.talk)

cat2 = new Cat ("Ginger")
cat2.talk("purrrr")
console.log(cat2.talk)


dog1 = new Dog ("Yorkiepoo")
dog1.run ("ahahahahah")

dogbone = new Food ("dogbone")
console.log (dogbone.type)


fish = new Food ('fish')
console.log (fish.type)

imee = new Player('imee')
console.log(imee.name)
imee.talk ("Feeding Time!")
console.log(imee.talk)
imee.feed (dogbone)
console.log(imee.feed)


imee.catch (cat1)
console.log(imee.catch)
console.log(cat1)

var game = {
  init: function (){
    game.initEvents();
  },

  initStyling: function () {

  },

  initEvents: function () {

    //// click start starts game///
    game.character = new Player;
    game.cat = new Cat;
    game.dog = new Dog;


// different buttons for feed cat and feed dog
  ///click feed button/// animals are fed increasing energy


  //click catch button - animals run if else energy

  ///if caught increases love

$(".catch").on("click", function (event){
  event.preventDefault();
  console.log("catch button works");
  if (game.cat.energy > 100){
    console.log("Not this time!");
    $(".catmsg").html('<h1> Not this time! <h1>')
  //  $(".catenergy").html('<h1> Cat energy: ' + game.cat.energy + '<h1>')
  }else {
    console.log("Gotcha!")
    game.character.pets = game.character.pets + 1;

    var purrs = Math.floor(Math.random() * 15);
    game.character.love= game.character.love + purrs;
    console.log(game.character.love);
    console.log(purrs);
    $(".love").html('<h1> Love: ' + game.character.love + '<h1>')
    $(".catmsg").html('<h1> Gotcha! <h1>')
    $(".pets").html('<h1> Cats: ' + game.character.pets + '<h1>')
    $(".meow").trigger('play');
    /// remove randomly from cat array
  }

});

$(".feed").on('click', function (event){
  event.preventDefault();
  console.log("feed button works");
  var energy = Math.floor(Math.random() * 12);

  game.cat.energy= game.cat.energy + energy;
  $(".catenergy").html('<h1> Cat energy: ' + game.cat.energy + '<h1>')
  console.log(game.cat.energy)
});

$(".run").on('click', function (event){
  event.preventDefault();
  console.log("run button works");

  var energy = Math.floor(Math.random() * 20);
  game.cat.energy = game.cat.energy - energy;
  $(".catenergy").html('<h1> Cat energy: ' + game.cat.energy + '<h1>')
  console.log(game.cat.energy)
});

$(".play").on('click', function (event){
  event.preventDefault();
  console.log("playbutton works");

  var energy = Math.floor(Math.random() * 20);
  game.dog.energy = game.dog.energy - energy;
  console.log(game.dog.energy)
  $(".dogenergy").html('<h1> Dog energy: ' + game.dog.energy + '<h1>')
  var licks = Math.floor(Math.random() * 30);
  game.character.love = game.character.love + licks;
  console.log(game.character.love)
  $(".love").html('<h1> Love: ' + game.character.love + '<h1>')
});

$(".dogfood").on('click', function (event){
  event.preventDefault();
  console.log("feed button works");
  var energy = Math.floor(Math.random() * 12);

  game.dog.energy= game.dog.energy + energy;
  $(".dogenergy").html('<h1> Dog energy: ' + game.dog.energy + '<h1>')
  console.log(game.cat.energy)
});


$(".chewtoy").on("click", function (event){
  event.preventDefault();
  console.log("catch button works");
  if (game.dog.energy > 100){
    console.log("Not this time!");
    $(".catmsg").html('<h1> Not this time! <h1>')
  //  $(".catenergy").html('<h1> Cat energy: ' + game.cat.energy + '<h1>')
  }else {
    console.log("Gotcha!")
    game.character.dogs = game.character.dogs + 1;

    var purrs = Math.floor(Math.random() * 15);
    game.character.love= game.character.love + purrs;
    console.log(game.character.love);
    console.log(purrs);
    $(".love").html('<h1> Love: ' + game.character.love + '<h1>')
    $(".catmsg").html('<h1> Gotcha! <h1>')
    $(".dogs").html('<h1> Dogs: ' + game.character.dogs + '<h1>')
  //  $(".meow").trigger('play');
    /// remove randomly from cat array
  }

});









  }




}
