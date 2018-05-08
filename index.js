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
function testNowServingWithNoPeopleOnLine() {
  katzDeli = [];
  var response = nowServing(katzDeli);
  var expectedResponse = "There is nobody waiting to be served!";
  return response === expectedResponse;
}