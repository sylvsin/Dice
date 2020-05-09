var diceSound = new Audio("dice4.mp3");
var imageMove = 0;
var imgArr = ["dice_1.png","dice_2.png","dice_3.png","dice_4.png","dice_5.png","dice_6.png"];
function displayImg(){
  imageMove = 500;
  var num = Math.floor(Math.random() * (imgArr.length));
  document.dice.src="dice_images/"+imgArr[num];
  document.getElementById("movingImage").style.left = imageMove + "px";
  diceSound.play();
  // var x = document.getElementById("movingImage").style.left = imageMove;
  // do{
  //   if(x == 0){
  //     document.getElementById("movingImage").style.left = 500 + "px";
  //   }
  //   else{ 
  //     document.getElementById("movingImage").style.left = 0 + "px"; 
  //   }
  //   diceSound.play();
  // }
  // while(x = 0); 
}


///////////////////// Enklare varianten /////////////////////////////
console.log("Enklare varianted")
for(var i=0;i<11;i++){
  var str = ""
  for(var j=0;j<i;j++){
    str += '*'
  }
  console.log(str)
}
for(var i=11;i>0;i--){
  var str = ""
  for(var j=1; j<i;j++){
    str += '*'
  }
  console.log(str)
}

///////////////////// Svårare varianten /////////////////////////////
console.log("Svårare varianted")
function printStars(maxStarPosition,total=10){
  var str = ""
  for(var j=0; j<total;j++){
    if(j<maxStarPosition){
      str +=" "
    }else{
      str +="*"
    }
  }
  return str
}

function printStarsInReverseOrder(maxStarPosition,total=9){
  var str = ""
  for(var j=total; j>0;j--){
    if(maxStarPosition<j){
      str += "*"
    }else{
      str += " "
    }
  }
  return str
}

for(var i=0;i<10;i++){
  var str = ""
  str += printStarsInReverseOrder(9-i,9)
  str += printStarsInReverseOrder(i,9)
  str += printStars(i,9)
  str += printStars(9-i,9)
  console.log(str)
}
