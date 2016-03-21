<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Challenge_Poo</title>
    <script src="https://code.jquery.com/jquery-2.2.1.min.js" integrity="sha256-gvQgAFzTH6trSrAWoH1iPo9Xc96QxSZ3feW6kem+O00=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
   <div class="container">
     <div class="row">
       <div class="col-md-12" id="header">
         <h1 class="text-center"> Challenge Poo </h1>
         <button type="button" name="addPost" id="addPost" data-toggle="modal" data-target="#modal"> Ajouter un Post </button>
       </div>
     </div> <!-- .row -->
   </div> <!-- .container header -->

   <!-- Modal -->
    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <form id="addPostForm" method="post">
              <div class="form-group">
                <div class="row">
                  <div class="col-md-12">
                    <label for="titre"> Titre :</label>
                    <input class="form-control" rows="5" id="titre"> </input>
                    <label for="info"> L'info du siècle :</label>
                    <textarea class="form-control" rows="5" id="postArea" style="resize:none"> </textarea>
                  </div>
                </div><!-- .row form -->
              </div> <!-- .form-group -->
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary pull-left" id="updatePost"> Update </button>
            <button type="submit" class="btn btn-primary pull-left" id="subPost"> Ajouter </button>
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal"> Fermer </button>
          </div>
        </div>
      </div>
    </div> <!-- .modal -->

   <?php
    include('php/getPosts.php')
   ?>

   <div class="resp"> </div>

    <script src="js/script.js" charset="utf-8"></script>
  </body>
</html>
