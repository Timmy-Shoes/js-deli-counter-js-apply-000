var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  return ("Welcome," + $name + ". You are number" + katzDeliLine.length + " in line.")
}
function testTakeANumber() {
  katzDeli = ["Ada", "Grace", "Kent"]
}
var response = takeANumber(katzDeli, "Matz")
var expectedResponse = "Welcome, Matz. You are number 3 in line."
return expectedResponse === response && katzDeli.length === 3;
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served";
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + "."
  }
  }
}