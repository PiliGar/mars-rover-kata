// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]]
} 

var travelLogArray = rover.travelLog;
console.log("This is the initial direction " + rover.direction);
console.log("This is the initial position " + rover.x + "," + rover.y);
console.log("\n* * * * * * \n* * * * * *");

// ======================
function turnLeft(rover){
  //console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:
      rover.direction = "W";
      break;

  }
  //console.log(rover.direction);
}

function turnRight(rover){
  //console.log("turnRigth was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:
      rover.direction = "E";
      break;
  }
  //console.log(rover.direction);
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
        if (rover.y > 0){
          rover.y--;
        }
        else{
          console.log("You can't go outside!");
        }
        console.log( "x " + rover.x);
        console.log( "y " + rover.y);
      break;
    case "W":
      if (rover.x > 0 ){
        rover.x--;
      }
      else{
        console.log("You can't go outside!");
      }
      console.log( "x " + rover.x);
      console.log( "y " + rover.y);
     
      break;
    case "S":
        if (rover.y < 9){
          rover.y++;
        }
        else{
          console.log("You can't go outside!");
        }
        console.log( "x " + rover.x);
        console.log( "y " + rover.y);
      break;
    case "E":
        if (rover.x < 9){
          rover.x++;
        }
        else{
          console.log("You can't go outside!");
        }
        console.log( "x " + rover.x);
        console.log( "y " + rover.y);
       
      break;
    }
  }

  function moveBackward(rover){
    switch (rover.direction) {
      case "N":
          if (rover.y < 9){
            rover.y++;
          }
          else{
            console.log("You can't go outside!");
          }
          console.log( "x " + rover.x);
          console.log( "y " + rover.y);
        break;
      case "W":
        if (rover.x < 9 ){
          rover.x++;
        }
        else{
          console.log("You can't go outside!");
        }
        console.log( "x " + rover.x);
        console.log( "y " + rover.y);
       
        break;
      case "S":
          if (rover.y > 0){
            rover.y--;
          }
          else{
            console.log("You can't go outside!");
          }
          console.log( "x " + rover.x);
          console.log( "y " + rover.y);
        break;
      case "E":
          if (rover.x > 0){
            rover.x--;
          }
          else{
            console.log("You can't go outside!");
          }
          console.log( "x " + rover.x);
          console.log( "y " + rover.y);
         
        break;
      }
    }



  function commandList(str){
    console.log("This is the command to execute: " + str);
    for (var i = 0; i < str.length; i++){
      //console.log(str[i]);
      if(str[i] === "f"){
        //console.log(i);
        //console.log(str[i]);
        console.log("Move forward"); 
        moveForward(rover);
        travelLogArray.push([rover.x,rover.y]); 
      }
      else if(str[i] === "b"){
        console.log("Move backward");
        moveBackward(rover);
        travelLogArray.push([rover.x,rover.y]);
      }
      else if(str[i] === "r"){
        console.log("Turn right");
        turnRight(rover);
      }
      else if (str[i] === "l"){
        console.log("Turn left");
        turnLeft(rover);
      }
      else{
        console.log("Not a valid command");
      }
    ;
    }

    console.log("\n* * * * * * \n* * * * * *");
    console.log("This is the final direction " + rover.direction);
    console.log("This is the final position " + rover.x +  "," + rover.y);
    console.log("This is the path:");
    console.log(travelLogArray);
    }
    

function testMarsRover(str){
  commandList(str);
}
/*1st test: moving the rover*/
//testMarsRover("rffrfflfrff");

/*2nd test: moving inside the 10x10 grid*/
//testMarsRover("rffffffffffrffffffffffrffffffffffrffffffffff");

/*3rd test: moving inside the 10x10 grid and moving backward*/
testMarsRover("rffffffffffrbfffrfffffffffflbbb");