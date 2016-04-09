$(document).ready(function(){
	$("#file-input").change(
 
    function(e){
		console.log($(this)[0].files[0]);
        var file = $(this)[0].files[0];
		$('.type').html(file.type);
		$('.name').html(file.name);
		$('.size').html(file.size);
            console.log(file.name + file.type + ' (' + file.size + ').');       
        return false;
    });
});