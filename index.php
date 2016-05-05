<?php
$hostname = getenv('HTTP_HOST');
?>
<!doctype html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php include 'components/styles.php'; ?>
    </head>
    <body>
      <!-- img placeholder
         <img src="http://placehold.it/350x150">
      -->
      <h1>HELLO WORLD</h1>
      <p>Paragraph tag</p>
     <?php include 'components/scripts.php'; ?>
    </body>
</html>
