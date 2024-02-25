function randNumForArr(arr) {
  return Math.random() * arr.length;
}

function getRandString(arr) {
  console.log(arr[Math.floor(randNumForArr(arr))]);
}

module.exports = getRandString;
