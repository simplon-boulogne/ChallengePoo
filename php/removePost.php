<?php
require_once ('../class/db_class.php');

$db = new Database;
$db->query("DELETE FROM " .$db->TABLE. " WHERE idPost = :idPost LIMIT 1");
$db->bindParam(':idPost', $_POST['idPost']);
$db->execute();

$db->closeCursor();
?>
