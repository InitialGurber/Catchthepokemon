let a = 0
let b = 0
let c = 0
let d = 0
let e = 0
let f = 0
let g = 0
let h = 0
let i = 0
let j = 0
let k = 0
let l = 0
let m = 0
let n = 0
let o = 0
let p = 0
let q = 0
let r = 0
let s = 0
let t = 0
let u = 0
let v = 0
let w = 0
let x = 0
let y = 0
let z
let A = 0
let B = 0
let C = 0
let D = 0
let E = 0
let F = 0
let G = 0
let H = 0
let I = 0
let J = 0
let K = 0
let L = 0
let M = 0
let N = 250
let O = 15
let P = 250
let Q = 15
let R = 0
let S = 0

let Ab = 0
let Bc = 0
let Cd = 0
let De = 0
let Ef = 0
let Fg = 0
let Gh = 0
let Hi = 0
let Ij = 0
let Jk = 0
let Lm = 600
let Mn = 0

let word = 0
let word2 = 0
let button
let button2 
let button3
let key = counter++
let mclovin
let ow = 220
let angle = 0.0
let neutral
let happy
let nervous
let angry
let rage
let livid
let pokeball

function preload() {

  z = loadImage("just in case yk.png")
  mclovin = loadImage("mclovin.png")
  neutral = loadImage("neutral.png")
  happy = loadImage("happy.png")
  nervous = loadImage("nervous.png")
  angry = loadImage("angry.png")
  rage = loadImage("rage.png")
  livid = loadImage("livid.png")
  pokeball = loadImage("pokeball.png")
}



function setup() {

  createCanvas(500, 500);

  angleMode(DEGREES);

  video = createCapture(VIDEO);
  video.size(400, 300)

  button = createButton('Continue')
  button.position(750, 546)
  button.size(100, 50)
  button.mousePressed(gamecont)
  button2 = createButton('Attack')
  button2.mousePressed(pain)
  button2.size(50,30)
  button3 = createButton('Catch it')
  button3.mousePressed(yay)
  button3.size(70,30)

  input = createInput()
  input2 = createInput()



}


function gamecont() {
  let val = counter++
}


function keyPressed() {
  if (keyCode === ENTER)
    counter++
}
  function pain(){
    //if you actually clicked this function, you're a psycho.
  ow = ow-220
    counter = 50
}

function yay(){
  counter++
}

let counter = 0

function draw() {



  if (counter > 0) {

    image(video, 1000, 60, 160, 180)
    input.position(-1000, 510)
    input2.position(-1000, 510)
    button2.position(-1000, 510)
    button3.position(-1000, 510)
    background(0, 255, 255)
  
    push()
    strokeWeight(1)
    fill(1, 255, 100)
    rect(0, 300, 500, 500)
    pop()

    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(250)
    //clouds
    ellipse(0, 0, 200, 200)
    ellipse(50, 80, 100, 50)
    ellipse(0, 80, 100, 80)
    ellipse(80, 40, 100, 80)
    ellipse(200, 40, 100, 80)
    ellipse(250, 50, 100, 80)
    ellipse(260, 40, 150, 80)
    ellipse(450, 90, 80 , 40)
    ellipse(400, 130, 80, 40)
    ellipse(475, 110, 80, 40)
    ellipse(420, 110, 80, 40)
    ellipse(475,140,80,40)
    }


  
  if (counter == 1) {

    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("Oh!", 5, 400)
    a = a + 10
    strokeWeight(0)
    rect(a, 375, 500, 100)
  }



  if (counter == 2) {

    image(happy, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("Hello young trainer!", 5, 400)
    b = b + 10
    strokeWeight(0)
    rect(b, 375, 500, 100)
  }


  if (counter == 3) {
    image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("Welcome to the world of Pokemon!", 5, 400)
    c = c + 10
    strokeWeight(0)
    rect(c, 375, 500, 100)
  }

  if (counter == 4) {
    image(nervous, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(15)
    text("(Or wherever this 500 by 500 canvas is...)", 5, 390)
    d = d + 10
    strokeWeight(0)
    rect(d, 375, 500, 100)
  }

  if (counter == 5) {
    button.position(-1000,510)
    image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text("Please enter your name so that I can get my grade--", 5, 400)
    text("--Um...I mean--er--so I can get to know you better!", 5, 430)
    f = f + 10
    strokeWeight(0)
    rect(word, 405, 500, 35)
    rect(f, 375, 500, 40)
    if (f > 900) {
      word = word + 6
    }
    if (word > 400){
      button.position(750, 546)
    }
  }

  if (counter == 6) {
    image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    input.position(350, 390, 500)
    stroke(0)
    strokeWeight(1)
    textSize(23)
    text("ENTER YOUR NAME:", 5, 400)
    textSize(15)
    text("Press continue when finished!", 0, 490)
  }



  if (counter == 7) {
    image(happy, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    input.position(-1000, 510)
    stroke(0)
    strokeWeight(1)
    textSize(27)
    text("Nice to meet you! Ya good ol so-and-so! ", 5, 400)
    g = g + 10
    strokeWeight(0)
    rect(g, 375, 500, 100)
  }

  if (counter == 8) {
    image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("...", 5, 400)
    h = h + 10
    strokeWeight(0)
    rect(h, 375, 260, 100)
  }


  if (counter == 9) {
    image(nervous, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("I'm not good with names...", 5, 400)
    i = i + 10
    strokeWeight(0)
    rect(i, 375, 500, 100)
  }

  if (counter == 10) {
    image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    image(mclovin, 10, 50, 480, 300)
    text('But this is you right ' + input.value() + '?', 5, 400)
    j = j + 10
    strokeWeight(0)
    rect(j, 375, 500, 100)
    rotate(0.3)
    image(video, 22, 60, 160, 180)
  }
  if (counter == 11) {
    image(happy, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("Wonderful!", 5, 400)
    k = k + 10
    strokeWeight(0)
    rect(k, 375, 500, 100)
  }
  if (counter == 12) {
    image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("Now lets see that pokemon of yours!", 5, 400)
    l = l + 10
    strokeWeight(0)
    rect(l, 375, 500, 100)
  }

  if (counter == 13) {
    image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("...", 5, 400)
    m = m + 10
    strokeWeight(0)
    rect(m, 375, 500, 100)
  }
  if (counter == 14) {
    image(nervous, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text("Oh right, I have to give you one...", 5, 400)
    n = n + 10
    strokeWeight(0)
    rect(n, 375, 500, 100)
  }

  if (counter == 15) {
    image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text("It's too bad there aren't any pokemon around.", 5, 400)
    o = o + 10
    strokeWeight(0)
    rect(o, 375, 500, 100)
  }

  if (counter == 16) {
    image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("...", 5, 400)
    p = p + 10
    strokeWeight(0)
    rect(p, 375, 500, 100)
  }

  if (counter == 17) {
    image(angry, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(17)
    text("I SAID, TOO BAD THERE AREN'T ANY POKEMON AROUND!", 5, 400)
    q = q + 10
    strokeWeight(0)
    rect(q, 375, 500, 100)
  }

  if (counter >= 18) {
    button.position(-1000, 546)
    image(nervous, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(25)
    text("Weird that usually works--", 5, 400)
    r = r + 10
    strokeWeight(0)
    rect(r, 375, 500, 100)
    if (r > 525) {
      rect(0, 375, 500, 100)

      clear()

      image(z, 0, 0, 500, 500)

      stroke(161, 34, 34)
      strokeWeight(6)
      rect(-10, 370, 530, 125)
      stroke(1)
      strokeWeight(1)
      rect(0, 0, 250, 50, 10)
      push()
      fill(0, 255, 0)
      rect(10, 25, ow, 15)
      pop()
      textSize(20)
      text("Bulbasaur", 10, 20)
      button.position(750, 546)

    }
  }

  if (counter == 19) {

    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(25)
    text("How convenient!", 5, 400)
    s = s + 10
    strokeWeight(0)
    rect(s, 375, 500, 100)
  }

  if (counter == 20) {

    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text('This is a perfect opportunity for you ' + input.value() + '!', 5, 400)
    t = t + 10
    strokeWeight(0)
    rect(t, 375, 500, 100)
  }
  if (counter == 21) {
    button.position(-1000, 510)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text("Will you               or            ?", 5, 400)
    strokeWeight(0)
    button2.position(490, 450)
    button3.position(390, 450)
  }

if (counter == 22){
button.position(750, 546)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text("Yes that's the spirit!", 5, 400)
    u = u + 10
    strokeWeight(0)
    rect(u, 375, 500, 100)
  }
  

  
  if (counter == 23){
    
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text("Here's a pokeball!", 5, 400)
    v = v + 10
    strokeWeight(0)
    rect(v, 375, 500, 100)
    
}
  
  
  if (counter == 24) {

    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text("If you hover your pokeball over Bulbasaur's head.", 5, 400)
    text("He might willingly go inside!",5,430) 
    w = w + 10
    strokeWeight(0)
    rect(w, 375, 500, 100)
    rect(L, 405, 500, 35)
    if (w > 640) {
      L = L + 6
    }
  }
  
  if (counter == 25) {
    button.position(-1000,570)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text("Try it out " + input.value() + "!", 5, 400)
    A = A + 10
    strokeWeight(0)
    rect(A, 375, 500, 100)
  if(mouseX > 120 && mouseX < 255 && mouseY > 140 && mouseY < 265){
    counter++
  }
  }
  if (counter > 22){
      image(pokeball,mouseX - 250, mouseY - 250)
      }
  if (counter > 25) {
    clear()
    background(0, 255, 255)

    push()
    strokeWeight(1)
    fill(1, 255, 100)
    rect(0, 300, 500, 500)
    pop()

    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(250)
    //clouds
    ellipse(0, 0, 200, 200)
    ellipse(50, 80, 100, 50)
    ellipse(0, 80, 100, 80)
    ellipse(80, 40, 100, 80)
    ellipse(200, 40, 100, 80)
    ellipse(250, 50, 100, 80)
    ellipse(260, 40, 150, 80)
    ellipse(450, 90, 80 , 40)
    ellipse(400, 130, 80, 40)
    ellipse(475, 110, 80, 40)
    ellipse(420, 110, 80, 40)
    ellipse(475,140,80,40)
  }
  
    if (counter == 26){
      M=M+1
    image(pokeball, 0,M)
      if(M == 65){
        counter ++
      }
    }
    if(counter == 27){
      push()
      image(pokeball, 0 , 65)
      noStroke()
        N=N-5
      fill(255,255,N)
      circle(249.9,315,13)
  if (N==40){
    counter++
  }
      pop()
    }
  if(counter == 28){
    push()
    image(pokeball, 0 , 65)
    noStroke()
      O=O+5
      fill(255,255,O)
      circle(249.9,315,13)
  if (O==255){
    counter++
  }
    pop()
  }
  
  if(counter == 29){
      push()
      image(pokeball, 0 , 65)
      noStroke()
        P=P-5
      fill(255,255,P)
      circle(249.9,315,13)
  if (P==40){
    counter++
  }
      pop()
    }
  
    if(counter == 30){
    push()
    image(pokeball, 0 , 65)
    noStroke()
      Q=Q+5
      fill(255,255,Q)
      circle(249.9,315,13)
  if (Q==255){
    counter++
  }
    pop()
  }
  
  if(counter == 31){
    button.position(750,546)
    image(pokeball, 0 , 65)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("YEAH! YOU CAUGHT HIM!", 5, 400)
    B = B + 10
    strokeWeight(0)
    rect(B, 375, 500, 100)
  }
  
  if(counter == 32){  
  image(happy, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("This is amazing!", 5, 400)
    C = C + 10
    strokeWeight(0)
    rect(C, 375, 500, 100)
  }
  if(counter == 33){
  image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text("You know what would REALLY seal the deal?", 5, 400)
    D = D + 10
    strokeWeight(0)
    rect(D, 375, 500, 100)
  }
  
  if(counter==34){
image(happy, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("Name your Bulbasaur!", 5, 400)
    E = E + 10
    strokeWeight(0)
    rect(E, 375, 500, 100)
    input2.position(350, 390, 500)
  }
  
  if(counter == 35){
    image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text(input2.value() + " and " + input.value() + ".", 5, 400)
    F = F + 10
    strokeWeight(0)
    rect(F, 375, 500, 100)
    
  }
    
  if(counter == 36){
    image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text("This looks like the start of a beautiful friendship!", 5, 400)
    G = G + 10
    strokeWeight(0)
    rect(G, 375, 500, 100)
  }
  
  if(counter == 37){
    image(neutral, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("Look at both of you!", 5, 400)
    H = H + 10
    strokeWeight(0)
    rect(H, 375, 500, 100)
  }
  if(counter == 38){
    strokeWeight(0)
    image(z, 75, 0, 500, 500)
    image(video, 22, 60, 160, 180)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(25)
    text("Future Pokemon Masters in the making!", 5, 400)
    I = I + 10
    noStroke()
    rect(I, 375, 500, 100)
  }
  if (counter == 39) {
    textSize(50)
    push()
    fill(0, 250, 250)
    text("GOOD ENDING", 80, 250)
    pop()
    push()
    fill(0)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text("You get the GOOD ENDING!", 5, 400)
    J = J + 10
    fill(255)
    strokeWeight(0)
    rect(J, 375, 500, 100)
    pop()
  }
  
  if(counter == 40){
    button.position(-1000,510)
    image(happy, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(25)
    text("Thank you for playing " + input.value() + " :)", 5, 400)
    text("I hope you and " + input2.value() + " have a",5, 430)
    text("future adventure soon!",5,460)
    K = K + 10
    strokeWeight(0)
    rect(S, 405, 500, 75)
    rect(K, 375, 500, 40)
    if (K > 640) {
      S = S + 6
    }
    
  }
  
  if (counter == 50) {
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text(input.value() + ', what did you do?!', 5, 400)
    Ab = Ab + 10
    strokeWeight(0)
    rect(Ab, 375, 500, 100)
  }

  if (Ab > 1000) {
    counter = 51
  }

  if (counter > 50) {

    clear()
      push()
    strokeWeight(1)
    fill(1, 255, 100)
    rect(0, 300, 500, 500)
    pop()

    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(250)
    //clouds
    ellipse(0, 0, 200, 200)
    ellipse(50, 80, 100, 50)
    ellipse(0, 80, 100, 80)
    ellipse(80, 40, 100, 80)
    ellipse(200, 40, 100, 80)
    ellipse(250, 50, 100, 80)
    ellipse(260, 40, 150, 80)
    ellipse(450, 90, 80 , 40)
    ellipse(400, 130, 80, 40)
    ellipse(475, 110, 80, 40)
    ellipse(420, 110, 80, 40)
    ellipse(475,140,80,40)    
  }

  if (counter == 51) {
    image(angry, 0, 0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    button.position(-1000, 600)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text('No no, you do not get the continue button ' + input.value() + '!', 5, 400)
    Jk = Jk + 10
    strokeWeight(0)
    rect(Jk, 375, 500, 100)
  }
  if (Jk > 1000) {

    counter = 52
  }
  if (counter == 52) {
    
image(angry,0,0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    text("He was going to be your friend!", 5, 400)
    Bc = Bc + 10
    strokeWeight(0)
    rect(Bc, 375, 500, 100)
  }
  if (Bc > 1500) {
    counter = 53
  }
  if (counter == 53) {
    image(rage,0,0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(22)
    text("You were going to catch him and name him!", 5, 400)
  text("Both of you would've become Pokemon Masters!", 5, 430)
    Cd = Cd + 10
    strokeWeight(0)
    rect(word2, 405, 500, 35)
    rect(Cd, 375, 500, 40)
    if (Cd > 640) {
      word2 = word2 + 6
    }  
    if (word2 > 1500) {
      counter = 54
    }
  }
  if (counter == 54) {
    image(rage,0,0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(25)
    text("But no! You hurt him!", 5, 400)
    De = De + 10
    strokeWeight(0)
    rect(De, 375, 500, 100)
  }
  if (De > 1500) {
    counter = 55
  }
  if (counter == 55) {
    image(livid,0,0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(25)
    text("That button was a test, and you failed!", 5, 400)
    Ef = Ef + 10
    strokeWeight(0)
    rect(Ef, 375, 500, 100)
  }
  if (Ef > 1500) {
    counter = 56
  }
  if (counter == 56) {
    image(livid,0,0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(30)
    text("You know what--", 5, 400)
    Gh = Gh + 10
    strokeWeight(0)
    rect(Gh, 375, 500, 100)
  }
  if (Gh > 1500) {
    counter = 57
  }
  if (counter == 57) {
  
    background(0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    textSize(50)
    push()
    fill(255, 0, 0)
    text("BAD ENDING", 80, 250)
    pop()
    push()
    fill(0)
    stroke(0)
    strokeWeight(1)
    textSize(25)
    text("You get the BAD ENDING!", 5, 400)
    Lm = Lm + 10
    strokeWeight(0)
    rect(Lm, 375, 500, 100)
    pop()
  }
  if (Lm > 3000) {
    counter = 58
  }

  if (counter == 58) {
    image(livid,0,0)
    background(0)
    stroke(161, 34, 34)
    strokeWeight(6)
    rect(-10, 370, 530, 125)
    stroke(0)
    strokeWeight(1)
    textSize(20)
    fill(255)
    push()
    fill(0)
    text("You can restart if you want to...", 5, 400)
    pop()
    push()
    textFont('Castellar')
    textSize(15)
    fill(255, 0, 0)
    text("BUT THAT WON'T REMOVE THE GUILT " + input.value() + ".", 5, 460)
    pop()
    Hi = Hi + 10
    noStroke()
    rect(Mn, 430, 500, 40)
    rect(Hi, 375, 500, 40)
    if (Hi > 800) {
      Mn = Mn + 6
    }
  }
}
