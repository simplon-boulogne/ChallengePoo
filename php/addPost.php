<?php
require_once ('../class/db_class.php');
require_once ('../class/post_class.php');

if (isset($_POST['titlePost'],$_POST['postArea'])) {

  $db = new Database;
  $post = new post;

  $db->query("INSERT INTO " .$db->table(). " ( titlePost, Post ) VALUES ( :titlePost, :Post ) ");
  $db->bindParam(':titlePost' , htmlspecialchars(strip_tags($_POST['titlePost'])) );
  $db->bindParam(':Post', htmlspecialchars(strip_tags($_POST['postArea'])) );
  $db->execute();

  $db->query("SELECT * FROM " .$db->table(). " WHERE idPost = " .$db->lastInsertId(). " LIMIT 1 ");
  $resp = $db->fetch();

  $post->writePost($resp);
  $db->closeCursor();
}

?>
