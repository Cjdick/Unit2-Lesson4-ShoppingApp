$(document).ready(function() {
  $(document).on('click','.box', function() {
  	//alert("Clicked");
  	$(this).toggleClass('boxRemoved');
  	$(this).closest('.ListItem').find('.ItemText').toggleClass('ItemTextRemoved');
  	$(this).closest('.ListItem').find('.ItemRemove').toggleClass('ItemRemoved');
    //if( $('.boxRemoved').css('background-image') == 'url("images/delete.png")') {
   // 	alert("true");
    //}
    })
     $(document).on('click','.ItemRemove, ItemRemoved', function() {
  		$(this).closest('.ListItem').remove();
  		//Having difficulty selecting the intersection of ItemRemove and ItemRemoved
    })
    $("#add").click(function() {
  		$(this).closest('.main').find('.ListContainer').prepend("<div class='ListItem'><div class='box'></div><div class='ItemText'><p>"+$("#entry").val()+"</p></div><div class='ItemRemove'></div></div>");
    })
    $(".RemoveAll").click(function () {
  		$(this).closest('.main').find('.ListContainer').empty();
    })
})
/*
function fnOpenNormalDialog() {
	//var $ =jQuery.noConflict();
    $("#dialog-confirm").html("Confirm Dialog Box");
    // Define the Dialog and its properties.
    $("#dialog-confirm").dialog({
        resizable: false,
        modal: true,
        title: "Modal",
        height: 250,
        width: 400,
        buttons: {
            "Yes": function () {
                $(this).dialog('close');
                callback(true);
            },
                "No": function () {
                $(this).dialog('close');
                callback(false);
            }
        }
    })
}

function callback(value) {
    if (value) {
        alert("Confirmed");
    } else {
        alert("Rejected");
    }
}*/