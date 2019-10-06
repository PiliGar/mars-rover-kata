// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  position: [0,0],
  travelLog: [[0,0]]
} 

console.log("This is the initial direction " + rover.direction);
console.log("This is the initial position " + rover.position);

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
        //console.log("Lets move forward the rover!");
        moveForward(rover);
        rover.travelLog.push([rover.position]);
      }
      else if(str[i] === "r"){
        //console.log("Lets turn right the rover!");
        turnRight(rover);
      }
      else if (str[i] === "l"){
        //console.log("Lets turn left the rover!");
        turnLeft(rover);
      }
      else{
        console.log("Not a valid command");
      }
      
    }
   
  for (var key in rover.travelLog){
    // recordName is a **key** in the object
    console.log("travelLog: " + rover.travelLog[key]);
  }

    console.log("This is the final direction " + rover.direction);
    console.log( "This is the final position " + rover.position);
    console.log( "This is travelLog " + rover.travelLog);
    console.log(rover["travelLog"].length);
    console.log(rover);
    }
    
commandList("rffrfflfrff");