<?php
require_once ('class/db_class.php');
require_once ('class/post_class.php');

$db = new Database;
$post = new post;

$db->query("SELECT * FROM " .$db->table(). "");
$rows = $db->fetchAll();

foreach ($rows as $row) {
$post->writePost($row);
}

$db->closeCursor();

?>
