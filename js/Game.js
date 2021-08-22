class Game {
    constructor() {
      this.resetTitle = createElement("h2");
      this.resetButton = createButton("");
  
      this.leadeboardTitle = createElement("h2");
  
      this.leader1 = createElement("h2");
      this.leader2 = createElement("h2");
      this.playerMoving = false;

    }
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();

    }
  
    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");
  
      this.resetTitle.html("Reset Game");
      this.resetTitle.class("resetText");
      this.resetTitle.position(width / 2 + 200, 40);
  
      this.resetButton.class("resetButton");
      this.resetButton.position(width / 2 + 230, 100);
  
      this.leadeboardTitle.html("Leaderboard");
      this.leadeboardTitle.class("resetText");
      this.leadeboardTitle.position(width / 3 - 60, 40);
  
      this.leader1.class("leadersText");
      this.leader1.position(width / 3 - 50, 80);
  
      this.leader2.class("leadersText");
      this.leader2.position(width / 3 - 50, 130);
    }
  
  
  
  
    play() {
      this.handleElements();
      this.handleResetButton();
      

      if (allPlayers !== undefined) {
        background(backgroundImage);
        image(track, 0, -height * 5, width, height * 6);
        }
  
            // Changing camera position in y direction
            camera.position.y = cars[index - 1].position.y;
            
            this.handlePlayerControls();
            drawSprites();
            this.showLeaderboard();
          }
    
}