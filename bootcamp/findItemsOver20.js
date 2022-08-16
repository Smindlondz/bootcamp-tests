function findItemsOver20(itemList) {
 
    // DECLARING OF EMPTY OUTPUT ARRAY OF OBJECTS:
	var results = [];
  
  // LOOP OVER THE LIST OF OBJECTS:
  for (var i = 0; i < itemList.length; i++) {
    
  // GET ACCESS TO ALL THE OBJECTS i.e (name's & qty's)
   var listItem = itemList[i];
    //console.log(listItem)
    
    // CHECK IF THE QUANTINTY IS GREATER THAN 20:
    if ( listItem.qty > 20) {
      
      //IF YES PUSH THEM TO THE EMPTY OUTPUT CREATED ARRAY: 
    	results.push(listItem)
    }
  
  }
  // AND THERE AFTER RETURN ALL THE RECORDED OBJECTS TO MY RESULTS:
  return results
  
  
}