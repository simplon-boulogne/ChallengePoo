$(document).ready(function() {

 // submit addPost modal ( trim remove begin whitespace)
 $('#subPost').click(function(event) {
  event.preventDefault();
  $("#titre,#postArea").css("border", "1px solid #ccc");
  var titlePost = $.trim ( $("#titre").val() );
  var postArea = $.trim ( $("#postArea").val() );

  // red border if input are empty
  if ( titlePost == "") {
    $("#titre").css("border" , "2px solid red");
  }
  if ( postArea == "") {
    $("#postArea").css("border" , "2px solid red");
  }
  else {
    $.ajax({
     url: 'php/addPost.php',
     type: "POST",
     dataType: "html",
     data: { titlePost: titlePost, postArea: postArea },
     success: function(data) {
       $('#modal').modal('hide');
       $(".resp").append(data);
      }
     });
    }
 });

 // Reset modal inputs on hide
 $('.modal').on('hidden.bs.modal', function(){
  $(this).find('form')[0].reset();
  $("#titre,#postArea").css("border", "1px solid #ccc");
 });

 // Remove this post on click ( DOM PROBLEM !!!!!!!!!!!!!! )
 $('body').on( "click" , ".glyphicon-remove" ,function(event) {
  event.preventDefault();
  var idPost = $(this).attr("id") ;
    $.ajax({
      url: 'php/removePost.php',
      type: "POST",
      dataType: "html",
      data: { idPost: idPost },
      success: function() {
        $("#"+idPost+"").closest(".container").fadeOut( 300, function() {
          $(this).remove();
        });
        console.log('Post ' +idPost+ ' supprimé avec succès');
      }
    });
  });
});
