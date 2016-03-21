<?php

class post
{
  public function writePost($arg)
  {
    echo '  <div class="container">';
    echo '    <div class="row post">';
    echo '      <div class="col-md-12" >';
    echo '        <h2> '.$arg["titlePost"].'</h2>';
    echo '         <i class="pull-right"> <span class="glyphicon glyphicon-pencil"></span> <span class="glyphicon glyphicon-remove" id="'.$arg["idPost"].'"></span> </i>';
    echo '        <p>'.$arg["Post"].'</p>';
    echo '      </div>';
    echo '    </div> <!-- .row -->';
    echo '  </div> <!-- .post container -->';
  }
}












 ?>
