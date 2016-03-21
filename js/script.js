$(document).ready(function() {

 // submit addPost modal ( trim remove begin whitespace)
 $('#subPost').click(function( event  ) {
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

 // updatePost modal
 $('body').on( "click", ".glyphicon-pencil", function() {
   $('#modal').modal('show');
   var titleToUplate = $(this).parents('.container').find('h2');
   var postToUpdate = $(this).parents('.container').find('p');
   var idPost = $(this).next(".glyphicon-remove").attr("id");

   $("#titre").val( titleToUplate.text() );
   $("#postArea").val( postToUpdate.text() );
   $("#updatePost").show();
   $("#subPost").hide();

   $('body').on( "click", "#updatePost", function(event) {
     event.preventDefault();
     var titlePost = $.trim($("#titre").val());
     var postArea = $.trim($("#postArea").val());
     if ( titlePost == "") {
       $("#titre").css("border" , "2px solid red");
     }
     if ( postArea == "") {
       $("#postArea").css("border" , "2px solid red");
     }
     else {
       $.ajax({
        url: 'php/updatePost.php',
        type: "POST",
        dataType: "html",
        data: { titlePost: titlePost, postArea: postArea, idPost: idPost },
        success: function(data) {
          $('#modal').modal('hide');
          titleToUplate.html(titlePost);
          postToUpdate.html(postArea);
        }
       });
     }
   });
 });

 // ajax addPost
 function updatePost(param1,param2) {
   $.ajax({
    url: 'php/updatePost.php',
    type: "POST",
    dataType: "html",
    data: { titlePost: param1, postArea: param2 },
    success: function(data) {
      $('#modal').modal('hide');
    }
   });
 }

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
