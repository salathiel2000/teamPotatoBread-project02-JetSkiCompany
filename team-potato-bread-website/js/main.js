$(".dropdown-title").click(function(){
	$(this).toggleClass('open'); 
}); 

$(".options li").click(function(){
	var selecion= $(this).text();
	var dataValue = $(this).attr('data-value'); 
	$(".selected-option span").text(selection); 
	$(".dropdown-title").attr("data-selected-value", dataValue); 
}); 