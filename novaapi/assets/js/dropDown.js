const dropdown = document.getElementById("accordion-button-1")

dropdown.addEventListener("click", function(e){
  const listdiv = document.createElement("div")
  //now do the same thing but wiht buttons and what ou want to add
  if(dropdown.hasChildNodes(listdiv)){
//checks if you already clicked the button so it doesn't create multiple lists
  return 0;
}
  else{
    dropdowm.appendChild(listdiv)
    //append other element you made
}
})