<?php

require_once ('../class/db_class.php');

if (isset($_POST['titlePostUpdate'],$_POST['postAreaUpdate'])) {

  $db = new Database;

    $db->query("UPDATE " .$db->table(). " SET titlePost = :titlePost, Post = :Post WHERE idPost = :idPost ");
    $db->bindParam(':titlePost' , htmlspecialchars(strip_tags($_POST['titlePostUpdate'])) );
    $db->bindParam(':Post', htmlspecialchars(strip_tags($_POST['postAreaUpdate'])) );
    $db->bindParam(':idPost', $_POST['idPostUpdate'] );
    $db->execute();

    $db->closeCursor();

}

 ?>
