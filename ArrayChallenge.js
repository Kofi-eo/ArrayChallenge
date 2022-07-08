function ArrayChallenge(strArr) {
  let index1 = strArr[0];
  let index2 = strArr[1].split(",");
  let waiting = "";
  let finalArray = [];
  let None = "not possible";

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

  if (finalArray.length == 0) {
    return None;
  } else {
    return finalArray.join(",");
  }
}

//Examples of input
let yeas = ["yellowapplebat", "apple,bat,cat,goodbye,hello,yellow,why"];
console.log(ArrayChallenge(yeas)); // Result ---->> yellow,apple,bat

let notpos1 = ["whitecream", "apple,bat,cat,goodbye,hello,yellow,why"];
console.log(ArrayChallenge(notpos1)); // Result ---->> not possible
