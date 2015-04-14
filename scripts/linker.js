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
}

$(document).ready(linker);