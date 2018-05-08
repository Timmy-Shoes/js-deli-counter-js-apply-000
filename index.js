var katzDeli = ["Ada", "Grace", "Kent"];
function takeANumber(katzDeliLine, name) {
  return ("Welcome, " + name + ". You are number " + katzDeliLine.push(name) + " in line.")
}
function testTakeANumber() {
  katzDeli = ["Ada", "Grace", "Kent"]
var response = takeANumber(katzDeli, "Matz")
var expectedResponse = "Welcome, Matz. You are number 3 in line."
return expectedResponse === response && katzDeli.length === 3;
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + "."
  }
}
function testNowServingWithPeopleOnLine() {
  katzDeli = ["Ada", "Grace", "Kent"];
  var response = nowServing(katzDeli);
  var expectedResponse = "Currently Serving Ada"
  return response === expectedResponse;
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var currentLineStrings = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      currentLineStrings.push(i + 1 + ". " + katzDeliLine[i]);
    }
    return "The line is currently: " + currentLineStrings.join(", ");
  }
}