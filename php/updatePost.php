<?php

require_once ('../class/db_class.php');

if (isset($_POST['titlePost'],$_POST['postArea'])) {

  $db = new Database;

    $db->query("UPDATE " .$db->table(). " SET titlePost = :titlePost, Post = :Post WHERE idPost = :idPost ");
    $db->bindParam(':titlePost' , htmlspecialchars(strip_tags($_POST['titlePost'])) );
    $db->bindParam(':Post', htmlspecialchars(strip_tags($_POST['postArea'])) );
    $db->bindParam(':idPost', $_POST['idPost'] );
    $db->execute();

    $db->closeCursor();

}

 ?>
