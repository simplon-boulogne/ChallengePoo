$(document).ready(function() {

 // submit addPost modal ( trim remove begin whitespace)
 $('body').on("click", "#subPost" , function(event) {
   event.preventDefault();
   $("#titre,#postArea").css("border", "1px solid #ccc");
   var titlePost = $.trim($("#titre").val());
   var postArea = $.trim($("#postArea").val());

   if ( titlePost == "") {
     $("#titre").css("border" , "2px solid red");
   }
   if ( postArea == "") {
     $("#postArea").css("border" , "2px solid red");
   }
   if (titlePost != "" && postArea != "") {
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

 // updatePost modal (FIX JQUERY CACHE PROBLEM)
 $('body').on( "click", ".glyphicon-pencil", function() {
   $('#modal').modal('show');
   var titleToUpdate = $(this).parent().parent().find('h2');
   var postToUpdate = $(this).parent().parent() .find('p');
   var idPostUpdate = $(this).parent().find(".glyphicon-remove").attr("id");

   $("#titre").val( titleToUpdate.text() );
   $("#postArea").val( postToUpdate.text() );
   $("#updatePost").show();
   $("#subPost").hide();

   $("#updatePost").click( function(event) {
     if ( idPostUpdate == null) { console.log("BUG FIX");}
     else {
       event.preventDefault();
       var titlePostUpdate = $.trim($("#titre").val());
       var postAreaUpdate = $.trim($("#postArea").val());
       if ( titlePostUpdate == "") {
         $("#titre").css("border" , "2px solid red");
       }
       if ( postAreaUpdate == "") {
         $("#postArea").css("border" , "2px solid red");
       }
       if (titlePostUpdate != "" && postAreaUpdate != "") {
         $("#updatePost").remove();
         $.ajax({
          url: 'php/updatePost.php',
          type: "POST",
          dataType: "html",
          data: { titlePostUpdate: titlePostUpdate, postAreaUpdate: postAreaUpdate, idPostUpdate: idPostUpdate },
          success: function(data) {
            $('#modal').modal('hide');
            titleToUpdate.html(titlePostUpdate);
            postToUpdate.html(postAreaUpdate);
            $('.modal-footer').prepend('<button type="submit" class="btn btn-primary pull-left" id="updatePost"> Update </button>');
          }
         });
       }
     }
    });
 });

 // Reset modal inputs on hide
 $('.modal').on('hidden.bs.modal', function(){
   $(this).find('form')[0].reset();
   $("#updatePost").hide();
   $("#subPost").show();
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
