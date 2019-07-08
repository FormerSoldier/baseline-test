'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
  var index = 0;
  var collectionB = objectB.value;
  for(let i = 0; i < collectionA.length; i++){
     for(let j = 0; j < collectionB.length; j++){
         if(collectionA[i]['key'] == collectionB[j])
           result[index++] = collectionA[i]['key'];
     }
  }
  return result;
}
