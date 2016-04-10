/// <reference path="js/PDFPageCount.js" />
document.write('<script type="text/javascript" language="javascript" src="js/pdf.js"></script>')
$(document).ready(function(){
	$("#file-input").change(
 
    function(e){
		console.log($(this)[0].files[0]);
        var file = $(this)[0].files[0];
		$('.file').html(file);
		$('.type').html(file.type);
		$('.name').html(file.name);
		$('.size').html(file.size);
            console.log(file.name + file.type + ' (' + file.size + ').');
		
		PDFJS.getDocument('http://localhost:8002/public/static/gm.pdf').then(function (doc) {
			var numPages = doc.numPages;
			console.log('# Document Loaded');
			console.log('Number of Pages: ' + numPages);
			$('.pages').html(numPages);
		})
		
        return false;
    });
});