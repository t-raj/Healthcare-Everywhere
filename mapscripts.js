
$(document).ready(function()
{
    //change the color when mouseenter 
  $("#menu12 a").mouseenter(function ()
	{
        $(this).switchClass("style1", "style2", 700);
    });
  // change the color when mouseleave
  $("#menu12 a").mouseleave(function () 
	{
        $(this).switchClass("style2", "style1", 700);
    });
});


//diagnostic code

$(document).ready(function() 
{
	$('.diagnostic-system').delegate('input[type=checkbox]', 'change', function() 
	{
		var $lis = $('.Symptoms > div'),
			$checked = $('input:checked');	
		if ($checked.length)
		{							
			var selector = '';
            $($checked).each(function(index, element)
			{                            
				selector += "[data-category~='" + element.id + "']";                            
            });                        
				$lis.hide();                        
				$('.Symptoms > div').filter(selector).show();			   
			}
			else
			{
				$lis.show();
			}
	});
});


// treatment and information popup box 
$(document).ready(function(){
  $("#Malaria").click(function(){
    $("#d1").fadeIn();
});

  $("#d1").click(function(){
    $("#d1").fadeOut();
});

  $("#Typhoid").click(function(){
    $("#d2").fadeIn();
});

   
  $("#d2").click(function(){
    $("#d2").fadeOut();
});

 $("#Hepatitis").click(function(){
    $("#d3").fadeIn();
});

 $("#d3").click(function(){
    $("#d3").fadeOut();
});

  $("#Dengue").click(function(){
    $("#d4").fadeIn();
});

  $("#d4").click(function(){
    $("#d4").fadeOut();
});

  $("#Rabies").click(function(){
    $("#d5").fadeIn();
});

    $("#d5").click(function(){
    $("#d5").fadeOut();
});

});

