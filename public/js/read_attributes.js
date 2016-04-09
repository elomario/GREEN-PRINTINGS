$("#btStartUpload").on("click", function(evt) {        

    var filesSelected = document.getElementById('btInput').files; // FileList object
    // var filesSelected = $('#btInput')[0].files; // with jQuery, any jQuery object have it's DOM element accessed using [0]
    // var filesSelected = $('input[type=file]')[0].files;
    console.log(filesSelected);
});