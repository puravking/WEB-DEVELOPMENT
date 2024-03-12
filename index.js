
$(document).ready(function(){
    $("h1").css("color","red");
})

document.querySelector("h1");
$("h1").css("color","green")
$("h1").addClass("big-title margin");
$("h1").removeClass("big-title");
$("h1")
document.querySelectorAll("button")

$( "button" )  
$("button").text("Dont do");
$("button").html("<em>Dont</em>")
$("a").attr("href","https://www.yahoo.com")
$("h1").click(()=>
{
    // $("h1").css("color","purple");
});
for(var i = 0;i<document.querySelector("button").clientHeight;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",()=>
    {
        document.querySelector("h1").style.color ="purple" ;
    })
}
$("button").click(()=>{
    $("h1").css("color","purple");
});
 $("input").keypress(function(event)
 {
    console.log(event.key);
 })
 $("input"). ((e)=>{
    $("h1").text(e.key); 
 })
