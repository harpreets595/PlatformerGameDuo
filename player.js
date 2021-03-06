class Player extends Engine {
  constructor(GAME_WIDTH, GAME_HEIGHT, gravity) {
    super();
    (this.width = 50),
      (this.height = 50),
      (this.position = {
        x: (GAME_WIDTH - 50) / 2,
        y: GAME_HEIGHT / 2,
      });
    this.velocity = 0;
    this.playerImage = document.getElementById("player");
    this.gravity = gravity;
    this.fly = 2;
  }

  draw(ctx) {
    console.log(gameEngine.scoreCounter);
    //this will make our player.
    ctx.drawImage(
      this.playerImage,
      0,
      0,
      this.width,
      25,
      this.position.x,
      this.position.y,
      100,
      this.height
    );
  }

  updateGravity(deltaTime, gravity) {
    // boundary for x.
    if (this.position.y < GAME_HEIGHT - 50 && this.position.y > 0) {
      this.velocity += gravity / 5;
      (this.position.y += this.velocity) / deltaTime;
    } else {
      // end the game once player crosses the borders
      gameEngine.endGame();
    }
    //add error for when he passes the point.
  }

  moveUp() {
    this.velocity -= this.fly * 0.5;
  }
}
