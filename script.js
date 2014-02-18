
$(document).ready(execute);

//main function, calls all helper function to initialize functionality
function execute() 
{
	$(".sentence").mouseover(styleRowOver);
	$(".sentence").mouseout(styleRowOut);
	$(".sentence").click(moveRow);

	$("#swappic").click(function(){

		$(".sentence").each(randomize);

	});

}

//changes background color of sentence on hover, sets mouse to pointer
function styleRowOver() 
{
	$(this).css('background-color', "#1DB8B0");
	$(this).css('color', "white");
	$(this).css('cursor', 'pointer');
}

//changes sentence back to previous state on hover out
function styleRowOut() 
{
	$(this).css('background-color', "#660507");
	$(this).css('color', "white");
}

//swaps sentences from right to left, stores last clicked
//in lastUsed div
function moveRow() 
{
	// alert("in moveRow");

	if ($(this).parent().attr('id') == "col2") 
	{
		$("#col1").prepend($(this));
		$(this).css('background-color',"#FFFFFF");
	} 

	else 
	{
		// alert("inelse");
		$("#col2").prepend($(this));
		$(this).css('background-color',"#FFFFFF");
	}

	$("#lastUsed").text($(this).text());
}

//randomizes sentence placement
function randomize()
{
	var num = Math.floor((Math.random()*2)+1);
	$("#col"+num).prepend($(this));


}
