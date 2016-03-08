<?php
$hostname = getenv('HTTP_HOST');
?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php include 'components/styles.php'; ?>
    </head>
    <body>

      <section id="starter">
        <h1>Lets Build the Internet! Yo Mom!</h1>
        <p>This is only the begining.</p>
        <div id="gulp-trans-wrapper">
          <img src="images/gulp-trans.png">
        </div>
        <br>
        <i class="fa fa-spinner fa-pulse"></i>
        <i class="fa fa-facebook"></i>
        <i class="fa fa-instagram"></i>
      </section>

      <!-- img placeholder
         <img src="http://placehold.it/350x150">
      -->


    <?php include 'components/scripts.php'; ?>
    </body>
</html>
