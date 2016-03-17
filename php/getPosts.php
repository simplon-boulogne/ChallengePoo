<?php
require_once ('class/db_class.php');

$db = new Database;
$db->query("SELECT * FROM " .$db->TABLE. "");
$rows = $db->fetchAll();

foreach ($rows as $row) {
echo '  <div class="container">';
echo '    <div class="row post">';
echo '      <div class="col-md-12" >';
echo '        <h2> '.$row["titlePost"].' <span class="glyphicon glyphicon-remove pull-right" id="'.$row["idPost"].'"></span> </h2>';
echo '        <p>'.$row["Post"].'</p>';
echo '      </div>';
echo '    </div> <!-- .row -->';
echo '  </div> <!-- .post container -->';
}

$db->closeCursor();

?>
