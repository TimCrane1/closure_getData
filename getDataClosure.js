function getData() {
  var data = "You got the data";
  return function () {
    return data;
  }
}

getData()();