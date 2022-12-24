//Variable to get screen width
screenWidth = window.innerWidth;
//Variable to get screen height
screenHeight = window.innerHeight;

//Function to calculate font size based on screen size, with parameters for min and max font size, min and max screen size, and the screen size to calculate the font size for
function calcFontSize(
  minFontSize,
  maxFontSize,
  minScreenSize,
  maxScreenSize,
  screenSize
) {
  let fontSize =
    ((screenSize - minScreenSize) * (maxFontSize - minFontSize)) /
      (maxScreenSize - minScreenSize) +
    minFontSize;
  return fontSize;
}

//Function to generate a random horizontal position on the screen
function generateRandomHorizontalPosition() {
  let randomHorizontalPosition = Math.floor(Math.random() * screenWidth);
  return randomHorizontalPosition;
}

function generateSnowFlakes() {
  //Calculate font size with min font size of 10px, max font size of 20px, min screen size of 320px, max screen size of 1200px, and screen size of current screen width
  let fontSize = calcFontSize(10, 20, 320, 1500, screenWidth);
  console.log(fontSize);
  //Generate 10 random horizontal positions
  let randomHorizontalPositions = [];
  for (let i = 0; i < 10; i++) {
    randomHorizontalPositions.push(
      generateRandomHorizontalPosition() + fontSize
    );
  }
  snowflakes = {};
  //Generate 10 snowflakes at random horizontal positions
  for (let i = 0; i < 10; i++) {
    let snowflake = document.createElement("i");
    snowflake.classList.add("fa-solid", "fa-snowflake");
    snowflake.style.left = randomHorizontalPositions[i] + "px";
    //Put snowflake in snowflakes object
    snowflakes[i] = snowflake;
    let background = document.querySelector("#background");
    // document.body.appendChild(snowflake);
    background.appendChild(snowflake);
  }
  // Let the snowflakes fall down the screen until they reach the bottom, then remove
  for (let i = 0; i < 10; i++) {
    let snowflake = snowflakes[i];
    let snowflakeTop = snowflake.getBoundingClientRect().top;
    let snowflakeBottom = snowflake.getBoundingClientRect().bottom;
    let snowflakeHeight = snowflakeBottom - snowflakeTop;
    let snowflakeMiddle = snowflakeTop + snowflakeHeight / 2;
    let snowflakeMiddlePercent = snowflakeMiddle / screenHeight;
    //Generate a random millisecond interval between 5 and 30
    let randomInterval = Math.floor(Math.random() * 1) + 40;
    //Generate random snowflake fall speed between 0.005 and 0.01
    let randomSnowflakeFallSpeed = Math.random() * 0.002 + 0.006;
    let snowflakeFall = setInterval(function () {
      snowflakeMiddlePercent += randomSnowflakeFallSpeed;
      snowflake.style.top = snowflakeMiddlePercent * 100 + "%";
      if (snowflakeMiddlePercent >= 1) {
        snowflake.remove();
        clearInterval(snowflakeFall);
      }
    }, randomInterval);
  }
}

generateSnowFlakes();
//Generate in snowflakes in an irregular interval between 5 and 10 seconds
setInterval(() => {
  generateSnowFlakes();
}, Math.floor(Math.random() * 2000) + 4000);

layers = document.querySelectorAll(".layer");

for (const i in layers) {
  layers[i].style.top = i * 2 + "rem";
  //Generate a random number named 'displacement' between 2 and 30
  let displacement = Math.floor(Math.random() * 28) + 2;
  //Generate a random boolean value
  let randomBoolean = Math.random() >= 0.5;
  //If random boolean is true, add displacement to the left, else subtract displacement from the left
  if (randomBoolean) {
    layers[i].style.left = displacement + "rem";
  } else {
    layers[i].style.left = -displacement + "rem";
  }

  console.log(i);
}
