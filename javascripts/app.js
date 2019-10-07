// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  position: [0,0],
  travelLog: [[0,0]]
} 

console.log("This is the initial direction " + rover.direction);
console.log("This is the initial position " + rover.position);

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
  }
  //console.log(rover.direction);
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
      rover.position[1] = rover.position[1]- 1;
      break;
    case "W":
      rover.position[0] = rover.position[0]- 1;
      break;
    case "S":
      rover.position[1] = rover.position[1]+ 1;
      break;
    case "E":
      rover.position[0] = rover.position[0]+ 1;
      break;
    }
    //console.log(rover.position);
  }


  function commandList(str){
    console.log("This is the command to execute " + str);
    for (var i = 0; i < str.length; i++){
      //console.log(str[i]);
      if(str[i] === "f"){
        console.log(i);
        console.log(str[i]);
        console.log("Move forward");
        moveForward(rover);
        console.log( "P " + rover.position);
        ostias.push(rover.position);
        console.log( ostias);
        
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
      
    }
   
  /*for (var travelLog in rover){
    // recordName is a **key** in the object
    console.log("Ey " + roverTravelLog);
  }*/

    console.log("This is the final direction " + rover.direction);
    console.log( "This is the final position " + rover.position);
    console.log( "This is travelLog " + rover.travelLog);
    console.log(rover["travelLog"].length);
    console.log(rover);
    }
    
commandList("rffrfflfrff");