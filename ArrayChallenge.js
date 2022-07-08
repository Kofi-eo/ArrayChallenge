function ArrayChallenge(strArr) {
  let index1 = strArr[0];
  let index2 = strArr[1].split(",");
  let waiting = "";
  let finalArray = [];

  for (i = 0; i <= index1.length; i++) {
    for (x = 0; x < index2.length; x++) {
      if (index1[i] == index2[x]) {
        finalArray.push(index1[i]);
      } else if (waiting == index2[x]) {
        finalArray.push(waiting);
        waiting = "";
      }
    }
    waiting = waiting.concat(index1[i]);
  }

  return finalArray.join(",");
}

//Example of input
let yeas = ["yellowapplebat", "apple,bat,cat,goodbye,hello,yellow,why"];
console.log(ArrayChallenge(yeas)); // Result ---->> yellow,apple,bat
