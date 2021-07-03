class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play")
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = createButton("Reset")
        this.subtitle = createElement("h3")

        }
        hide(){
            this.input.hide()
            this.button.hide()
            this.greeting.hide()
        }
            display(){
                this.title.html("Hunger Chase");
                this.title.position(displayWidth/2 - 200, 0);
                this.title.style("color","dark green")
                this.title.style("font-size","70px")
                this.input.position(displayWidth/2-100 , displayHeight/2 - 160);
                this.input.style("width","200px")
                this.input.style("height","30px")
                this.button.position(displayWidth/2-35, displayHeight/2-100);
                this.button.style("background","lightBlue")
                this.button.style("border-radius","10px")
                this.button.style("width","70px")
                this.button.style("height","30px")
                this.subtitle.html("Press right arrow to chase the deer!")
                this.subtitle.position(displayWidth/2 - 100, displayHeight/5);

                
                this.reset.position(50,50)
                this.reset.mousePressed(()=>{
                    game.update(0)
                    player.updateCount(0)
                    player.deletePlayers()
                })
                this.button.mousePressed(()=>{
                    this.input.hide();
                    this.button.hide();
                    player.name = this.input.value();
                    playerCount+=1;
                    player.index = playerCount;
                    player.update();
                    player.updateCount(playerCount);
                    this.greeting.html("Hello " + player.name)
                    this.greeting.position(displayWidth/2 - 70, displayHeight/4);
                  });
        }
        
    }
