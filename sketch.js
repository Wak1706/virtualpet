var database;
var dog,dogImg,dogImg1;
var foodstock;
var food;

function preload()
{
dogImg = loadImage("images/dogImg.png");
dogImg1 = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(800, 800);
  database = firebase.database();
  console.log(database);
  dog = createSprite(400,400,50,50);
  dog.addImage(dogImg);
  var foodstock = database.ref('food');
  foodstock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
  drawSprites();
  //add styles here
fill("black");
textSize(25);
  text("Press the up arrow key to feed the dog" ,250,100);
  text("Score ="+food,400,50);

if(keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage(dogImg1);  
  
}

}

function writeStock(x){
  if(x<0){
    x = 0
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    food:x
  })
}


function readStock(data){
  food = data.val();
  console.log(food);
}



