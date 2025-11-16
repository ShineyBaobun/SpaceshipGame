/* VARIABLES */
let spaceship, A1, A2, A3, A4, A5, A6, A7, A8, A9, screen, start, instruction, replay, speed, score, highscore, S1, S2, bgimg, aimg, rockimg, starimg, pause, unpause, pauseimg, playimg, stars, shop, rocket50, rocket100, rocket500, BG1, BG2, BG3, poor, img50, img100, img500, back1img, back2img, back3img;

/* PRELOAD LOADS FILES */
function preload(){
  bgimg = loadImage('assets/Noob.png')
  aimg = loadImage('assets/Asteroid.png')
  rockimg = loadImage('assets/Rocket.png')
  starimg = loadImage('assets/Star.png')
  pauseimg = loadImage('assets/Pause.png')
  playimg = loadImage('assets/Play.png')
  img50 = loadImage('assets/50.png')
  img100 = loadImage('assets/100.png')
  img500 = loadImage('assets/500.png')
  back1img = loadImage('assets/BG.png')
  back2img = loadImage('assets/Back2.png')
  back3img = loadImage('assets/Back3.png')
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  background(224,224,224);
  
  //Create spaceships 
  spaceship = new Sprite(rockimg,1000,380,50,20);
  spaceship.collider = 'k'
  rockimg.resize(80,0)

  //resize backgrounds
  back1img.resize(400,0)
  back2img.resize(400,0)
  back3img.resize(400,0)

  
  //Create asteroids and stars
  A1 = new Sprite(aimg,100,-1250,100);
  A1.friction = 0
  A1.direction = 'down'
  A1.drag = 0
  A1.layer = 1
  A2 = new Sprite(aimg,100,-1000,100);
  A2.friction = 0
  A2.direction = 'down'
  A2.drag = 0
  A2.layer = 1
  A3 = new Sprite(aimg,100,-750,100);
  A3.friction = 0
  A3.direction = 'down'
  A3.drag = 0
  A3.layer = 1
  A4 = new Sprite(aimg,100,-500,100);
  A4.friction = 0
  A4.direction = 'down'
  A4.drag = 0
  A4.layer = 1
  A5 = new Sprite(aimg,100,-250,100);
  A5.friction = 0
  A5.direction = 'down'
  A5.drag = 0
  A5.layer = 1
  aimg.resize(100,0)
  S1 = new Sprite(starimg,100,-1125,20)
  S1.friction = 0
  S1.direction = 'down'
  S1.drag = 0
  S1.layer = 1
  S1.overlaps(A1)
  S1.overlaps(A2)
  S1.overlaps(A3)
  S1.overlaps(A4)
  S1.overlaps(A5)
  S2 = new Sprite(starimg,100,-375,20)
  S2.friction = 0
  S2.direction = 'down'
  S2.drag = 0
  S2.layer = 1
  S2.overlaps(A1)
  S2.overlaps(A2)
  S2.overlaps(A3)
  S2.overlaps(A4)
  S2.overlaps(A5)
  starimg.resize(20,0)
  
//buttons
  start = new Sprite(width/2,1000,200,50)
  start.text = 'Start'
  start.color = '#945bfc'
  instructions = new Sprite(width/2,1000,200,50)
  instructions.text = 'Instructions'
  instructions.color = 'pink'
  replay = new Sprite(width/2,1000,200,50)
  replay.text = 'Replay'
  pause = new Sprite(playimg,width-40,1000,30)
  playimg.resize(40,0)
  pause.color = 'grey'
  pause.layer = 2
  pause.overlaps(A1)
  pause.overlaps(A2)
  pause.overlaps(A3)
  pause.overlaps(A4)
  pause.overlaps(A5)
  pause.overlaps(S1)
  pause.overlaps(S2)
  unpause = new Sprite(pauseimg,width/2,1000,100)
  pauseimg.resize(100,0)
  unpause.color = 'grey'
  unpause.layer = 2
  unpause.overlaps(A1)
  unpause.overlaps(A2)
  unpause.overlaps(A3)
  unpause.overlaps(A4)
  unpause.overlaps(A5)
  unpause.overlaps(S1)
  unpause.overlaps(S2)
  shop = new Sprite(width/2,1000,200,50)
  shop.text = 'Shop'
  shop.color = '#1f5cfe'
  poor = new Sprite(width/2,1000,200,50)
  poor.text = 'Not enough stars.'
  poor.color = 'white'
  
//shop buttons
  rocket50 = new Sprite(1000,1000,60,50)
  rocket50.text = '50⭐️'
  rocket50.color = '#f23365'
  rocket100 = new Sprite(1000,1000,60,50)
  rocket100.text = '100⭐️'
  rocket100.color = '#ffa1df'
  rocket500 = new Sprite(1000,1000,60,50)
  rocket500.text = '500⭐️'
  rocket500.color = '#94de98'
  BG1 = new Sprite(1000,1000,60,50)
  BG1.text = '10⭐️'
  BG1.color = '#876ae4'
  BG2 = new Sprite(1000,1000,60,50)
  BG2.text = '10⭐️'
  BG2.color = '#a83b68'
  BG3 = new Sprite(1000,1000,60,50)
  BG3.text = '10⭐️'
  BG3.color = '#2c6e7f'
    
  screen = 0
  speed = 4
  score = 0
  highscore = 0
  stars = 0
  

}

/* DRAW LOOP REPEATS */
function draw() {
  //if start is pressed
  if (start.mouse.presses()){
    screen = 2
    A1.speed = 4
    A2.speed = 4
    A3.speed = 4
    A4.speed = 4
    A5.speed = 4
    S1.speed = 4
    S2.speed = 4
    A1.x = random(100,width-100)
    A2.x = random(100,width-100)
    A3.x = random(100,width-100)
    A4.x = random(100,width-100)
    A5.x = random(100,width-100)
    S1.x = random(20,width-20)
    S2.x = random(20,width-20)
    spaceship.x = width/2
    spaceship.y = 300
    pause.y = 40
  }
  //instructions
  if (instructions.mouse.presses()){
    screen = 1
  }
  //replay
  if (replay.mouse.presses()){
    screen = 0
  }
  //shop
  if (shop.mouse.presses()){
    screen = 4
  }
  //buying from shop
  if (rocket50.mouse.presses() && stars >= 50){
    spaceship.image = 'assets/50.png'
    stars -= 50
    rocket50.text = 'Purchased'
    rocket50.collider = 'n'
  }
  else if (rocket50.mouse.presses() && stars<50){
    poor.x = width/2
    poor.y = height/2
    poor.rotation = 0
  }
  if (rocket100.mouse.presses() && stars >= 100){
    spaceship.image = 'assets/100.png'
    stars -= 100
    rocket100.text = 'Purchased'
    rocket100.collider = 'n'
  }
  else if (rocket100.mouse.presses() && stars<100){
    poor.x = width/2
    poor.y = height/2
    poor.rotation = 0
  }
  if (rocket500.mouse.presses() && stars >= 500){
    spaceship.image = 'assets/500.png'
    stars -= 500
    rocket500.text = 'Purchased'
    rocket500.collider = 'n'
  }
  else if (rocket500.mouse.presses() && stars<500){
    poor.x = width/2
    poor.y = height/2
    poor.rotation = 0
  }
  if (BG1.mouse.presses() && stars >= 10){
    bgimg = back1img
    stars -= 10
    BG1.text = 'Purchased'
    BG1.collider = 'n'
  }
  else if (BG1.mouse.presses() && stars<10){
    poor.x = width/2
    poor.y = height/2
    poor.rotation = 0
  }
  if (BG2.mouse.presses() && stars >= 10){
    bgimg = back2img
    stars -= 10
    BG2.text = 'Purchased'
    BG2.collider = 'n'
  }
  else if (BG2.mouse.presses() && stars<10){
    poor.x = width/2
    poor.y = height/2
    poor.rotation = 0
  }
  if (BG3.mouse.presses() && stars >= 10){
    bgimg = back3img
    stars -= 10
    BG3.text = 'Purchased'
    BG3.collider = 'n'
  }
  else if (BG3.mouse.presses() && stars<10){
    poor.x = width/2
    poor.y = height/2
    poor.rotation = 0
  }
  if (poor.mouse.presses()){
    poor.x = 1000
  }
  
  //home screen
  if (screen == 0){
    background('#25fe25')
    start.y = height/2 -75
    start.x = width/2
    start.rotation = 0
    instructions.y = height/2
    instructions.x = width/2
    instructions.rotation = 0
    shop.y = height/2 +75
    shop.x = width/2
    shop.rotation = 0
    replay.y = height + 100
    spaceship.y = height + 100
    rocket50.y = 1000
    rocket100.y = 1000
    rocket500.y = 1000
    BG1.y = 1000
    BG2.y = 1000
    BG3.y = 1000
    
  }
  //instructions screen
  if (screen == 1){
    background('pink')
    instructions.y = height + 100
    start.y = height + 100
    shop.y = 1000
    replay.color = '#25fe25'
    replay.y = height/2 +50
    replay.rotation = 0
    replay.text = 'Return'
    text('Move the spaceship horizantally along the \nscreen to avoid asteroids and \nto collect stars. Try to achieve the \nhighest possible score',100,height/2-50) 
  }
  //game screen
  if (screen == 2){
    background('purple')
    image(bgimg,0,0)
    bgimg.resize(400,400)
    start.y = 1000
    pause.y = 40
    shop.x = 1000
    instructions.y = 1000
    if (kb.pressing('left')){
      spaceship.vel.x = 0-speed-1
    }
    else if (kb.pressing('right')){
      spaceship.vel.x = speed+1
    }
    else {
      spaceship.vel.x = 0
    }
    if (spaceship.x < 25){
      spaceship.x = 25
    }
    if (spaceship.x > width-25){
      spaceship.x = width-25
    }
    if (pause.mouse.presses()){
      S1.speed = 0
      S2.speed = 0
      A1.speed = 0
      A2.speed = 0
      A3.speed = 0
      A4.speed = 0
      A5.speed = 0
      pause.y = 1000
      unpause.y = height/2
    }
    if (unpause.mouse.presses()){
      S1.speed = speed
      S2.speed = speed
      A1.speed = speed
      A2.speed = speed
      A3.speed = speed
      A4.speed = speed
      A5.speed = speed
      unpause.y = 1000
    }
    
    if (A1.y>=height){
      A1.y = -1025
      A1.direction = 'down'
      A1.x = random(75,width-75)
      speed += 0.25
      A1.speed = speed
      S1.speed = speed
      A2.speed = speed
      A3.speed = speed
      A4.speed = speed
      S2.speed = speed
      A5.speed = speed
      score += 1
      while (A1.x>A2.x-50 && A1.x<A2.x+50){
        A1.x = random(50,width-50)
      }
    }
    if (A2.y>=height){
      A2.y = -1000
      A2.direction = 'down'
      A2.x = random(75,width-75)
      score += 1
      while (A2.x>A3.x-50 && A2.x<A3.x+50){
        A2.x = random(50,width-50)
      }
    }
    if (A3.y>=height){
      A3.y = -1000
      A3.direction = 'down'
      A3.x = random(75,width-75)
      score += 1
      while (A3.x>A4.x-50 && A3.x<A4.x+50){
        A3.x = random(50,width-50)
      }
    }
    if (A4.y>=height){
      A4.y = -1000
      A4.direction = 'down'
      A4.x = random(75,width-75)
      score += 1
      while (A4.x>A5.x-50 && A4.x<A5.x+50){
        A4.x = random(50,width-50)
      }
    }
    if (A5.y>=height){
      A5.y = -1000
      A5.direction = 'down'
      A5.x = random(75,width-75)
      score += 1
      while (A5.x>A1.x-50 && A5.x<A1.x+50){
        A5.x = random(50,width-50)
      }
    }
    if (S1.collides(spaceship)){
      S1.y = -150
      S1.direction = 'down'
      S1.x = random(20,width-20)
      score += 5
      stars += 1
      while (S1.x>A2.x-50 && S1.x<A2.x+50){
        S1.x = random(20,width-20)
      }
    }
    if (S2.collides(spaceship)){
      S2.y = -150
      S2.direction = 'down'
      S2.x = random(20,width-20)
      score += 5
      stars += 1
      while (S2.x>A5.x-50 && S2.x<A5.x+50){
        S2.x = random(20,width-20)
      }
    }
    if (S1.y >= height){
      S1.y = -1000
      S1.direction = 'down'
      S1.x = random(20,width-20)
      while (S1.x>A2.x-50 && S2.x<A2.x+50){
        S1.x = random(20,width-20)
      }
    }
    if (S2.y >= height){
      S2.y = -1000
      S2.direction = 'down'
      S2.x = random(20,width-20)
      while (S2.x>A5.x-50 && S2.x<A5.x+50){
        S2.x = random(20,width-20)
      }
    }
    //score and highscore
    fill('white')
    text('score: '+score, 20,40)
    if (score>highscore){
      highscore = score
    }
    text('highscore: '+highscore,20,20)
    text('Stars: '+stars, 20, 60)
    fill('back')
    if (A1.collides(spaceship)){
      screen = 3
    }
    if (A2.collides(spaceship)){
      screen = 3
    }
    if (A3.collides(spaceship)){
      screen = 3
    }
    if (A4.collides(spaceship)){
      screen = 3
    }
    if (A5.collides(spaceship)){
      screen = 3
    }
  }
  //replay screen
  if (screen == 3){
    background('red')
    score = 0
    spaceship.x = 1000
    pause.y = 1000
    A1.y = -1250
    A1.speed = 0
    A2.y = -1000
    A2.speed = 0
    A3.y = -750
    A3.speed = 0
    A4.y = -500
    A4.speed = 0
    A5.y = -250
    A5.speed = 0
    S1.y = -1125
    S1.speed = 0
    S2.y = -375
    S2.speed = 0
    speed = 4
    replay.text = 'REPLAY'
    replay.color = 'green'
    replay.x = width/2
    replay.y = height/2
    replay.rotation = 0
  }
  //shop screen
  if (screen == 4){
    background('#1f5cfe')
    start.y = 1000
    instructions.y = 1000
    shop.y = 1000
    rocket50.x = width/3 -50
    rocket50.y = height/2 - 50
    rocket50.rotation = 0
    rocket100.x = width/2
    rocket100.y = height/2 - 50
    rocket100.rotation = 0
    rocket500.x = width - width/3 + 50
    rocket500.y = height/2 - 50
    rocket500.rotation = 0
    BG1.x = width/3 - 50
    BG1.y = height - 100
    BG1.rotation = 0
    BG2.x = width/2
    BG2.y = height - 100
    BG2.rotation = 0
    BG3.x = width - width/3 + 50
    BG3.y = height - 100
    BG3.rotation = 0
    replay.y = height-40
    replay.text = 'Return'
    replay.color = '#2ef605'
    image(img50, 33,15)
    img50.resize(100,0)
    image(img100, 150,15)
    img100.resize(100,0)
    image(img500, 267, 15)
    img500.resize(100,0)
    image(back1img, 33, 200)
    back1img.resize(100,0)
    image(back2img, 150,200)
    back2img.resize(100,0)
    image(back3img,267,200)
    back3img.resize(100,0)
  }

  
}
