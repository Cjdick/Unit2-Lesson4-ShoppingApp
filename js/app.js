$(document).ready(function() {
  $('.box').mousedown(function() {
  	//alert("Clicked");
  	$(this).toggleClass('boxRemoved');
  	$(this).closest('.ListItem').find('.ItemText').toggleClass('ItemTextRemoved');
  	$(this).closest('.ListItem').find('.ItemRemove').toggleClass('ItemRemoved');
    //if( $('.boxRemoved').css('background-image') == 'url("images/delete.png")') {
   // 	alert("true");
    //}
    })
   $(".ItemRemove, ItemRemoved").mousedown(function() {
  		$(this).closest('.ListItem').remove();
  		//Having difficulty selecting the intersection of ItemRemove and ItemRemoved
    })
    $("#add").click(function() {
  		$(this).closest('.main').find('.ListContainer').prepend("<div class='ListItem'><div class='box'></div><div class='ItemText'><p>Item 1</p></div><div class='ItemRemove'></div></div>");
    })
  })