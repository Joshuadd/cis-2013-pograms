var $ = function (id) {
  return document.getElementById(id);
};

var fixPrinter = function () {
  var stringOutput = ""; //declares stringOutput inital value to be blank

  //define the individual troubleshooting tips per the chart
  var stringMessage1 = "Check the power cable.";
  var stringMessage2 = "Check the printer-computer cable.";
  var stringMessage3 = "Ensure printer software is installed.";
  var stringMessage4 = "Check / replace ink.";
  var stringMessage5 = "Check for paper jam.";
  var stringMessage6 = "Looks like everything is working fine!";

  /* Need to be careful here when defining our boolean variables for use in the troubleshooting chart
   * and what you define as true or false.  For example, in the chart used in this problem,
   * a combination of Y-Y-Y results in messages 2, 3, & 4 being provided
   * to the user.  In this case, Y-Y-Y means
   * "the printer does NOT print"  AND "a red light is flashing" AND "the printer is unrecognized"
   */
  var boolPrinting = $("not_printing").selected; //returns a value of true only when the not_printing html id is selected from the dropdown menu
  var boolRedLight = $("yes_redlight").selected; //returns a value of true only when the yes_redlight html id is selected from the dropdown menu
  var boolRecognised = $("not_recognised").selected; ////returns a value of true only when the not_recognized html id is selected from the dropdown menu

  //enter your code here and don't forget to send the output to the DOM
  switch ((boolPrinting, boolRecognised, boolRedLight)) {
    case (true, true, true):
      stringOutput = stringMessage3 + stringMessage3 + stringMessage4;
      break;
    case (true, true, false):
      stringOutput = stringMessage4 + stringMessage5;
      break;
    case (true, false, true):
      stringOutput = stringMessage1 + stringMessage2 + stringMessage3;
      break;
    case (true, false, false):
      stringOutput = stringMessage5;
      break;
    case (false, true, true):
      stringOutput = stringMessage3 + stringMessage4;
      break;
    case (false, true, false):
      stringOutput = stringMessage4;
      break;
    case (false, false, true):
      stringOutput = stringMessage3;
      break;
    case (false, false, false):
      stringOutput = stringMessage6;
      break;
    default:
      break;
  }

  $("output").textContent = stringOutput;
};

window.onload = function () {
  $("troubleshoot").onclick = fixPrinter;
};
