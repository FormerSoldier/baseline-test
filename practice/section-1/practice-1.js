'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
  var index = 0;
  for(let i = 0; i < collectionA.length; i++){
     for(let j = 0; j < collectionB.length; j++){
         if(collectionA[i] == collectionB[j])
           result[index++] = collectionA[i];
     }
  }
  return result;
}
