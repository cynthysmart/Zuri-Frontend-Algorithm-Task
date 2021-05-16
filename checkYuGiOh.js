const checkYuGiOh = (n) => {
  let parsedn;
  let arr = [];

  if (!Array.isArray(n)) {
    parsedn = parseInt(n);
    for (var i = 1; i <= n; i++) {
      arr.push(i);
    }
  }

  if (isNaN(parsedn)) {
    return `invalid parameter: ${JSON.stringify(n)}`;
  }

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      arr[i] = "yu-gi-oh";
    } else if (arr[i] % 2 == 0 && arr[i] % 3 == 0) {
      arr[i] = "yu-gi";
    } else if (arr[i] % 2 == 0 && arr[i] % 5 == 0) {
      arr[i] = "yu-oh";
    } else if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      arr[i] == "gi-oh";
    } else if (arr[i] % 2 == 0) {
      arr[i] = "yu";
    } else if (arr[i] % 3 == 0) {
      arr[i] = "gi";
    } else if (arr[i] % 5 == 0) {
      arr[i] = "oh";
    }
  }

  console.log(arr);
  return arr;
};
