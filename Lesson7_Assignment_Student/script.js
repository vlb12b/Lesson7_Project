/**
* Created with LIS2360_Lesson7_jQuery.
* User: vlb12b
* Date: 2015-07-21
* Time: 03:17 PM
* To change this template use Tools | Templates.
Program Name: Recipe Display Application 

Author: Victoria Brosilow

Date: 7/21/15

Filename: script.js
*/

function display(event){
$(event.currentTarget).next().fadeIn("slow")

}//end of display()
/*
$("h3").click(display);
*/
function display2(event) {

   $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");

}
/*
$("h3").click(display2);
*/
$("h3").hover(display2);
$("h3").hover(function(){
       $(this).css("background-color", "yellow");
       }, function(){
       $(this).css("background-color", "pink");
});