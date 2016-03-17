<?php
require_once ('../class/db_class.php');

if (isset($_POST['titlePost'],$_POST['postArea'])) {

  $db = new Database;
  $db->query("INSERT INTO " .$db->TABLE. " ( titlePost, Post ) VALUES ( :titlePost, :Post ) ");
  $db->bindParam(':titlePost' , htmlspecialchars(strip_tags($_POST['titlePost'])) );
  $db->bindParam(':Post', htmlspecialchars(strip_tags($_POST['postArea'])) );
  $db->execute();

  $db->query("SELECT * FROM " .$db->TABLE. " WHERE idPost = " .$db->lastInsertId(). " LIMIT 1 ");
  $resp = $db->fetch();

  echo '  <div class="container">';
  echo '    <div class="row post">';
  echo '      <div class="col-md-12" >';
  echo '        <h2> '.$resp["titlePost"].' <span class="glyphicon glyphicon-remove pull-right" id="'.$resp["idPost"].'"></span> </h2>';
  echo '        <p>'.$resp["Post"].'</p>';
  echo '      </div>';
  echo '    </div> <!-- .row -->';
  echo '  </div> <!-- .post container -->';

  $db->closeCursor();
}

?>
