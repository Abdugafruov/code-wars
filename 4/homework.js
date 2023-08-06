// function tidyNumber(n) {
//     let isTidy = true;
//     const array = `${n}`.split("");
//     const newArray = array.map((v) => +v);
//     let sortedArray = [...newArray];
//     sortedArray = sortedArray.sort((a, b) => a - b);
//     for (let i = 0; i < newArray.length; i++) {
//       if (newArray[i] !== sortedArray[i]) isTidy = false;
//     }
//     return isTidy;
//   }