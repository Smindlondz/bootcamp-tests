var resOfOver20 = findItemsOver20(itemList)
console.log(resOfOver20)

//=================================================================//

// THRESHOLD FUNCTION------->

//FUNCTION DECLERATION (defining a function)

function findItemsOver(itemList, threshold) {
 
 // DECLARING OF EMPTY OUTPUT ARRAY OF OBJECTS:
   var results2 = [];
  
  // LOOP OVER THE LIST OF OBJECTS:
   for (var i = 0; i < itemList.length; i++) {
    
  // GET ACCESS TO ALL THE OBJECTS i.e (name's & qty's)
   var listItem = itemList[i];
    
  // CHECK IF THE QUANTITY EACH QUANTINTY IS GREATER THAN THE THRESHOLD:
   if ( listItem.qty > threshold) {
      
  //IF YES PUSH THEM TO THE EMPTY OUTPUT CREATED ARRAY:
    	results2.push(listItem)
    }
  
  }
  // AND THERE AFTER RETURN ALL THE RECORDED OBJECTS TO MY RESULTS:
   return results2

}
