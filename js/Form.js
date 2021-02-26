class Form{
    constructor(){

    }
    display(){
      var title = createElement("h2");
      title.html("CAR RACING GAME");
      title.position(550,100)

      var input = createInput("Name");
      var button = createButton("PLAY");
      var greeting = createElement("h3");

      input.position(600,300);
      button.position(650,350);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello  " + name);
            greeting.position(600,300);


        })
    }   
}