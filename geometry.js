//this function provides easier access to DOM elements using their html element id
var $ = function (id) {
  return document.getElementById(id);
};

rectArea = (floatRectWidth, floatRectHeight) =>
  floatRectWidth * floatRectHeight;
rectPerim = (floatRectWidth, floatRectHeight) =>
  2 * floatRectWidth + 2 * floatRectHeight;
triArea = (floatTriSide1, floatTriSide2, floatTriSide3) => {
  let floatS = (floatTriSide2 + floatTriSide2 + floatTriSide3) / 2;
  return Math.sqrt(
    floatS *
      (floatS - floatTriSide1) *
      (floatS - floatTriSide2) *
      (floatS - floatTriSide3)
  );
};
triPerim = (floatTriSide1, floatTriSide2, floatTriSide3) =>
  floatTriSide1 + floatTriSide2 + floatTriSide3;
circleArea = (floatRadius) => Math.PI * Math.pow(floatRadius, 2);
circleCircum = (floatRadius) => 2 * Math.PI * floatRadius;

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () {
  //lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
  var floatRectWidth = parseFloat($("rect_width").value);
  var floatRectHeight = parseFloat($("rect_height").value);
  var floatTriSide1 = parseFloat($("tri_side1").value);
  var floatTriSide2 = parseFloat($("tri_side2").value);
  var floatTriSide3 = parseFloat($("tri_side3").value);
  var floatRadius = parseFloat($("radius").value);

  alert(
    "The Rectangle area is " +
      rectArea(floatRectWidth, floatRectHeight) +
      " and the perimeter is " +
      rectPerim(floatRectWidth, floatRectHeight) +
      "\n\n" +
      "The Triangle area is " +
      triArea(floatTriSide1, floatTriSide2, floatTriSide3) +
      " and the perimeter is " +
      triPerim(floatTriSide1, floatTriSide2, floatTriSide3) +
      "\n\n" +
      "The Circle area is " +
      circleArea(floatRadius) +
      " and the circumference is " +
      circleCircum(floatRadius)
  );
};

let calcCircleCircum = () =>
  alert(
    "The Circle circumference is " + circleCircum(parseFloat($("radius").value))
  );

let calcCircleArea = () =>
  alert("The Circle area is " + circleArea(parseFloat($("radius").value)));

let calcRectArea = () =>
  alert(
    `The Rectangle Area is ${rectArea(
      parseFloat($("rect_width").value),
      parseFloat($("rect_height").value)
    )}`
  );

let calcRectPerim = () =>
  alert(
    `The rectangle perimeter is ${rectPerim(
      parseFloat($("rect_width").value),
      parseFloat($("rect_height").value)
    )}`
  );

let calcTriArea = () =>
  alert(
    `The triangle area is ${triArea(
      parseFloat($("tri_side1").value),
      parseFloat($("tri_side2").value),
      parseFloat($("tri_side3").value)
    )}`
  );

let calcTriPerim = () =>
  alert(
    `The triangle perimeter is ${triPerim(
      parseFloat($("tri_side1").value),
      parseFloat($("tri_side2").value),
      parseFloat($("tri_side3").value)
    )}`
  );

window.onload = function () {
  //lines 51-56 clear the DOM values..
  //  $("rect_width").value = "";
  //  $("rect_height").value = "";
  //  $("tri_side1").value = "";
  //  $("tri_side2").value = "";
  //  $("tri_side3").value = "";
  //  $("radius").value = "";
  $("rect_width").focus(); // places the cursor in the first input box
  $("calc_all").onclick = do_it; // runs the do_it function when clicked
  $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
  $("calc_circle_area").onclick = calcCircleArea;
  $("calc_rect_area").onclick = calcRectArea;
  $("calc_rect_perim").onclick = calcRectPerim;
  $("calc_tri_area").onclick = calcTriArea;
  $("calc_tri_perim").onclick = calcTriPerim;
};
