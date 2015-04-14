/*
	Resizer: Loopar igenom alla .slide img och sätter bilden
	till att skalas efter höjd istället för bredd om bilden 
	är större i höjd än längd.
	Den andra delen centrerar varje bild inuti deras respektive
	div-taggar
*/


function main(){
	var windows = $('.slide img');
	windows.each(function(){
		if(this.height > this.width){
			$(this).width("initial")
			$(this).height("100%");
		}
	});
	windows.each(function(){
		var height = $(this).parent().height();

		$(this).css("top", height / 2 - $(this).height() / 2)
	});

	//Denna del gör samma som den översta fast bara när fönstret skalas om
	$(window).resize(function(){
		var windows = $('.slide img');
			windows.each(function(){
				if(this.height > this.width){
					$(this).width("initial")
					$(this).height("100%");
				}
			});
			windows.each(function(){
				var height = $(this).parent().height();

				$(this).css("top", height / 2 - $(this).height() / 2)
			});
	});
	$('#icondiv').fitText();
}

$(document).ready(main);