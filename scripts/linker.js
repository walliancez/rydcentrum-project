/*
	Linker: Länkar till den html sida som  heter samma som bildfilen 
	som blir klickad på.
*/
function linker(){
	$('img').click(function(){

		
		var filepath = $(this).attr('src');	//hämtar filsökvägen

		var filename = filepath.split('/').pop();	//väljer bara filnamnet
		filename = filename.split('.')[0] + ".html";	//tar bort filtypen och skriver dit '.html'
		window.location.href = /*"pages//" +*/ filename;	//länkar användaren till rätt fil


		console.log(filepath);
		console.log(filename);
	});

	//Länkar knapparna i sidebaren till respektive sida
	$('.menuitem').click(function(){
		var itemID = $(this).attr('id');

		console.log(itemID);

		switch (itemID){
			case "home":
				window.location.href = "./main.html";
				break;
			case "apoteket":
				window.location.href = "./pages/apoteket.html";
				break;
			case "barbis":
				window.location.href = "./pages/barb.html";
				break;
			case "blooming":
				window.location.href = "./pages/blooming-design-(1).html";
				break;
			case "hemkop":
				window.location.href = "./pages/hemk.html";
				break;
			case "ilpizza":
				window.location.href = "./pages/ilpizza.html";
				break;
			case "lagpris":
				window.location.href = "./pages/lagpris.html";
				break;
			case "linds":
				window.location.href = "./pages/linds.html";
				break;
			case "sko":
				window.location.href = "./pages/sko.html";
				break;
			case "stangastaden":
				window.location.href = "./pages/stangastaden.html";
				break;
			case "thai":
				window.location.href = "./pages/thai.html";
				break;
			case "tobak":
				window.location.href = "./pages/tobak.html";
				break;
			default:
				console.log("Shit went wrong");
				break;
		}
	});
}

$(document).ready(linker);