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
	$('.menuitem').click(function(){
		var itemID = $(this).attr('id');

		console.log(itemID);

		switch (itemID){
			case "home":
				window.location.href = "./main.html";
				break;
			default:
				console.log("Shit went wrong");
				break;
		}
	});
}

$(document).ready(linker);