let arr = "one asd two dd aaa ddd dd dd dd ddd two ddd ff ggg two fff asd dff dfg one";

function WordDistance(string, word1, word2) {
    let minDistance = null,
        maxDistance = null,
        tempMinDistance = null,
        tempMaxDistance = null,
        length1 = null,
        length2 = null,
        arrWord1Indexes = [],
        arrWord2Indexes = [],
        arrWord1LastIndex = null,
        arrWord2LastIndex = null,
        arrWord1MinIndex = null,
        arrWord2MinIndex = null,
        convertedString = string.split(" ");

  for (let i = 0; i < convertedString.length; ++i) {
    let stringIndex = convertedString[i];
  	if (stringIndex === word1) { 
        arrWord1Indexes.push(i);
    } 
    if (stringIndex === word2) {
        arrWord2Indexes.push(i);
    } // keep indexes of each word in the arrays
    length1 = arrWord1Indexes.length;
    length2 = arrWord2Indexes.length;

    arrWord1LastIndex = arrWord1Indexes[length1 - 1];
    arrWord2LastIndex = arrWord2Indexes[length2 - 1];
    arrWord1MinIndex = arrWord1Indexes[0];
    arrWord2MinIndex = arrWord2Indexes[0]; // get max and min indexes of each array

    if (arrWord1Indexes.length !== 0 && arrWord2Indexes.length !== 0) { 
        tempMinDistance = Math.abs(arrWord1LastIndex - arrWord2LastIndex);
      if ((arrWord2LastIndex - arrWord1MinIndex) > (arrWord1LastIndex - arrWord2MinIndex)) { // checking the max distances between words in two arrays
          tempMaxDistance = Math.abs(arrWord2LastIndex - arrWord1MinIndex);
        } else { tempMaxDistance = Math.abs(arrWord1LastIndex - arrWord2MinIndex); }
      if (minDistance === null || minDistance > tempMinDistance)  {
          minDistance = tempMinDistance - 1;
      }
      if (maxDistance === null || maxDistance < tempMaxDistance) {
          maxDistance = tempMaxDistance - 1;
      }
    }
  }
  return minDistance + " " + maxDistance;
}

WordDistance(arr, "one", "two");