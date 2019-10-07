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

var ostias = rover.travelLog;
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
      rover.y--;
      console.log( "x " + rover.x);
      console.log( "y " + rover.y);
      break;
    case "W":
      rover.x--;
      console.log( "x " + rover.x);
      console.log( "y " + rover.y);
      break;
    case "S":
        rover.y++;
        console.log( "x " + rover.x);
         console.log( "y " + rover.y);
      break;
    case "E":
        rover.x++;
        console.log( "x " + rover.x);
        console.log( "y " + rover.y);
      break;
    }
    //console.log(rover.position);
  }


  function commandList(str){
    console.log("This is the command to execute " + str);
    for (var i = 0; i < str.length; i++){
      //console.log(str[i]);
      if(str[i] === "f"){
        //console.log(i);
        //console.log(str[i]);
        console.log("Move forward");
        moveForward(rover);
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

  
    console.log("This is the final direction " + rover.direction);
  
    console.log( "This is the final x " + rover.x);
    console.log( "This is the final y " + rover.y);
    console.log(rover.travelLog)
    }
    
commandList("rffrfflfrff");