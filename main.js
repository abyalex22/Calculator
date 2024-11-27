// display content
function displaycontent(content){
    display.value +=content
}
// clear input
function clearDisplay(){
    display.value=""
}
// evaluating expresions
 function calculate(){
    display.value = eval(display.value)
 }
//  backspace
 function remove(){
    display.value = display.value.slice(0,-1)
 }