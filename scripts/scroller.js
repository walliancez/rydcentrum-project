/*
	Scroller: Animerar sidmenyn.

	TODO: Ta bort fittext om den inte används
*/

function main(){


	var toggled = false;

	$('.slide-container').css('left',
			$('.menubar').width()
		);
	$('.menubar p').click(function(){
		if(!toggled){
				$('.menulist').animate({
		      left: "0px"
		    	}, 200);
		    	$('.menubar').animate({
		      left: "100px"
		    	}, 200);
		    	toggled = true;
		    	
    	} else {
	    		$('.menulist').animate({
		      left: "-100px"
		    	}, 200);
		    	$('.menubar').animate({
		      left: "0px"
	    	},200);
		    	
		    	toggled = false;
		}
	});
	//TODO: Ta bort denna och ersätt med
	//a taggar i html filerna
	
}

$(document).ready(main);