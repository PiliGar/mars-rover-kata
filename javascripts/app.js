// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]]
}


var grid = [
  [null, "O", null, "R", null, null, null, null, null, null],
  [null, null, null, "O", null, null, null, null, null, null],
  [null, "R", null, null, null, null, null, "O", null, null],
  [null, null, null, null, null, "O", null, null, null, null],
  [null, null, "O", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  ["O", null, "O", null, null, null, null, null, null, null],
];


console.log( grid[rover.y][rover.x]);
/*console.log( grid[2][1]);
console.log( grid[1][3]);
console.log( grid[2][1]);
console.log( grid[2][7]);
console.log( grid[3][5]);
console.log( grid[4][2]);
console.log( grid[9][0]);
console.log( grid[9][2]);*/

var travelLogArray = rover.travelLog;
//console.log("This is the initial direction " + rover.direction);
//console.log("This is the initial position " + rover.x + "," + rover.y);
//console.log("\n* * * * * * \n* * * * * *");

// ======================
function turnLeft(rover){
//console.log("Turn left!");
/* turns to the left in base of the current direction of the rover*/
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
console.log( "(" + rover.x + " , " + rover.y + ")" );
}

function turnRight(rover){
//console.log("Turn right!");
/* turns to the rigth in base of the current direction of the rover*/
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
console.log( "(" + rover.x + " , " + rover.y + ")" );
}

function moveForward(rover){
/* says how to move in base of the current direction of the rover and the 10x10 grid*/
switch (rover.direction) {
  case "N":
      if (rover.y > 0 && grid[rover.y-1][rover.x] === null ){
        rover.y--;
      }
      else{
          if (rover.y < 0) {
              console.log("STOP! You can't go outside!");
              return;
          } 
          else if ( rover.y > 0 && grid[rover.y-1][rover.x] === "O")  {
              console.log("There is an obstacle!");
              console.log("in next position called " + "\'" + grid[rover.y-1][rover.x] + "\'");
              //console.log("in current position" + grid[rover.y][rover.x]);
              return;
          }
          else if (rover.y > 0 && grid[rover.y-1][rover.x] === "R")  {
              console.log("There is Rover!");
              console.log("in next position called " + "\'" +  grid[rover.y-1][rover.x] + "\'");
              //console.log("in current position" + grid[rover.y][rover.x]);
              return;
          }
      }
      console.log( "(" + rover.x + " , " + rover.y + ")" );
    break;
  case "W":
    if (rover.x > 0 && grid[rover.y][rover.x-1] === null ){
        rover.x--;
    }
    else{
      if (rover.x < 0) {
          console.log("STOP! You can't go outside!");
          return;
      } 
      else if ( rover.x > 0 && grid[rover.y][rover.x-1] === "O")  {
          console.log("There is an obstacle!");
          console.log("in next position called " + "\'" + grid[rover.y][rover.x-1] + "\'" );
          //console.log("in current position " + grid[rover.y][rover.x]);
          return;
      }
      else if (rover.x > 0 && grid[rover.y][rover.x-1] === "R")  {
          console.log("There is Rover!");
          console.log("in next position called " + "\'" + grid[rover.y][rover.x-1] + "\'");
          //console.log("in current position " + grid[rover.y][rover.x]);
          return;
      }
    }
    console.log( "(" + rover.x + " , " + rover.y + ")" );
   
    break;
  case "S":
      if (rover.y < 9 && grid[rover.y+1][rover.x] === null){
        rover.y++;
      }
      else{
          if (rover.y > 9) {
            console.log("STOP! You can't go outside!");
              return;
          } 
          else if ( rover.y < 9 && grid[rover.y+1][rover.x] === "O")  {
              console.log("There is an obstacle!");
              console.log("in next position called " + "\'" + grid[rover.y+1][rover.x] + "\'");
              //console.log("in current position " + grid[rover.y][rover.x]);
              return;
          }
          else if (rover.y < 9 && grid[rover.y+1][rover.x] === "R")  {
              console.log("There is Rover!");
              console.log("in next position called " + "\'" + grid[rover.y+1][rover.x] + "\'");
              //console.log("in current position " + grid[rover.y][rover.x]);
              return;
          }
      }
      console.log( "(" + rover.x + " , " + rover.y + ")" );
    break;
  case "E":
      if (rover.x < 9 && grid[rover.y][rover.x+1] === null){
          console.log("SI");
        rover.x++;
      }
      else{
          if (rover.x > 9) {
            console.log("STOP! You can't go outside!");
              return;
          } 
          else if ( rover.x < 9 && grid[rover.y][rover.x+1] === "O")  {
              console.log("There is an obstacle!");
              console.log("in next position called " + "\'" + grid[rover.y][rover.x+1] + "\'");
              //onsole.log("in current position " + grid[rover.y][rover.x]);
              return;
          }
          else if (rover.x < 9 && grid[rover.y][rover.x+1] === "R")  {
              console.log("There is Rover!");
              console.log("in next position called " + "\'" + grid[rover.y][rover.x+1] + "\'");
              //console.log("in current position " + grid[rover.y][rover.x]);
              return;
          }
          else{
              console.log("what");
              console.log( "esto" + grid[rover.y][rover.x+1]);
          }
      }
      console.log( "(" + rover.x + " , " + rover.y + ")" );
     
    break;
  }
}

function moveBackward(rover){
  /* says how to move in base of the current direction of the rover and the 10x10 grid*/
  switch (rover.direction) {
    case "N":
        if (rover.y < 9 && grid[rover.y+1][rover.x] === null){
          rover.y++;
        }
        else{
          if (rover.y > 9) {
              console.log("STOP! You can't go outside!");
              return;
          } 
          else if ( rover.y < 9 && grid[rover.y+1][rover.x] === "O")  {
              console.log("There is an obstacle!");
              console.log("in next position called " + grid[rover.y+1][rover.x] + "\'");
              //console.log("in current position " + grid[rover.y][rover.x]);
              return;
          }
          else if (rover.y < 9 && grid[rover.y+1][rover.x] === "R")  {
              console.log("There is Rover!");
              console.log("in next position called " + grid[rover.y+1][rover.x] + "\'");
              //console.log("in current position " + grid[rover.y][rover.x]);
              return;
          }
        }
        console.log( "(" + rover.x + " , " + rover.y + ")" );
      break;
    case "W":
      if (rover.x < 9 && grid[rover.y][rover.x+1] === null){
        rover.x++;
      }
      else{
          if (rover.x > 9) {
              console.log("STOP! You can't go outside!");
              return;
          } 
          else if ( rover.x < 9 && grid[rover.y][rover.x+1] === "O")  {
              console.log("There is an obstacle!");
              console.log("in next position called " + grid[rover.y][rover.x+1] + "\'");
              //console.log("in current position " + grid[rover.y][rover.x]);
              return;
          }
          else if (rover.x < 9 && grid[rover.y][rover.x+1] === "R")  {
              console.log("There is Rover!");
              console.log("in next position called " + grid[rover.y][rover.x+1] + "\'");
              //console.log("in current position " + grid[rover.y][rover.x]);
              return;
          }
      }
      console.log( "(" + rover.x + " , " + rover.y + ")" );
     
      break;
    case "S":
        if (rover.y > 0 && grid[rover.y-1][rover.x] === null){
          rover.y--;
        }
        else{
          if (rover.y < 0) {
              console.log("STOP! You can't go outside!");
              return;
          } 
          else if ( rover.y > 0 && grid[rover.y-1][rover.x] === "O")  {
              console.log("There is an obstacle!");
              console.log("in next position called " + grid[rover.y-1][rover.x] + "\'");
              //console.log("in current position " + grid[rover.y][rover.x]);
              return;
          }
          else if (rover.y > 0 && grid[rover.y-1][rover.x] === "R")  {
              console.log("There is Rover!");
              console.log("in next position called " + grid[rover.y-1][rover.x] + "\'");
              //console.log("in current position " + grid[rover.y][rover.x]);
              return;
          }
        }
        console.log( "(" + rover.x + " , " + rover.y + ")" );
      break;
    case "E":
        if (rover.x > 0 && grid[rover.y][rover.x-1] === null){
          rover.x--;
        }
        else{
          if (rover.x < 0) {
              console.log("STOP! You can't go outside!");
              return;
          } 
          else if (rover.x > 0 && grid[rover.y][rover.x-1] === "O")  {
              console.log("There is an obstacle!");
              console.log("in next position called " + grid[rover.y][rover.x-1] + "\'");
              //console.log("in current position " + grid[rover.y][rover.x]);
              return;
          }
          else if (rover.x > 0 && grid[rover.y][rover.x-1] === "R")  {
              console.log("There is Rover!");
              console.log("in next position called " + grid[rover.y][rover.x-1] + "\'");
              //console.log("in current position " + grid[rover.y][rover.x]);
              return;
          }
        }
        console.log( "(" + rover.x + " , " + rover.y + ")" );
       
      break;
    }
  }

function commandList(str){
  /* says when and what kind of movement execute in base of the commandList str and push the resultant position to the travelLog*/
  for (var i = 0; i < str.length; i++){
    //console.log(str[i]);
      console.log("\n * * * \n" + i + "\n * * *\n");
    if(str[i] === "f"){
      //console.log(i);
      //console.log(str[i]);
      console.log("Move forward"); 
      //console.log("antes " + grid[rover.y][rover.x]);
      moveForward(rover);
      travelLogArray.push([rover.x,rover.y]); 
      //console.log("despues " +grid[rover.y][rover.x]);
        
    }
    else if(str[i] === "b"){
      console.log("Move backward");
      console.log("antes " +grid[rover.y][rover.x]);
      moveBackward(rover);
      travelLogArray.push([rover.x,rover.y]);
        console.log("despues " + grid[rover.y][rover.x]);
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

  console.log("\n* * * * * * \n* * * * * * \n\n");
  console.log("This is the final direction " + rover.direction);
  console.log("This is the final position " + rover.x +  "," + rover.y);
  console.log("This is the path:");
  console.log(travelLogArray);
  }
  

var validCommands = ["f", "b", "l", "r"];
function validateStr (str){
    /* puts every character of the str inside str [i] and looks for the index of this character inside the valid Commands array, if indexOf  is -1 It means the character doesn't exist in the array*/
    for( let i = 0; i < str.length; i++){
      //console.log("index del caracter " + str[i]);
      //console.log("indexOf " + validCommands.indexOf(str[i]));
      //console.log("comandos " + validCommands);
    if (validCommands.indexOf(str[i]) == -1){
        return false;
        console.log("not valid str");
    }
  };
  return true;
  console.log("valid str");
};

function testMarsRover(str){
/* if the str validation is true, execute the commandList */
if(validateStr( str, validCommands)){
    console.log('EXECUTE: ' + str);
    commandList(str);
} else {
    console.log('Invalid command list');
}
}
/*1st test: moving the rover*/
//testMarsRover("rffrfflfrff");

/*2nd test: moving inside the 10x10 grid*/
//testMarsRover("rffffffffffrffffffffffrffffffffffrffffffffff");

/*3rd test: moving inside the 10x10 grid and moving backward*/
//testMarsRover("rffffffffffrbfffrfffffffffflbbb");

/*4th test: validate str*/
//testMarsRover("rlbf");
//testMarsRover("rlbfmn");

/*5rd test: moving with obstacles and rovers*/
testMarsRover("rrfffflfflfflff");