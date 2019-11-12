<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ruler</title>
    <style>

        .ruler {
            display:flex;
        }

        .cm,
        .mm {
            border-left: 1px solid #555;
            height: 0.4rem;
            width: 0;
        }
        
        .mm.longer{
            height: 0.8rem;
        }

        .cm {
            height: 1.4rem;
        }

        .cm > span,
        .mm > span {
            display: block; 
            margin-top:2rem;
            margin-left: -.25rem;
        }

    </style>
</head>
<body>
<div class='ruler'>

    <?php for ($j = 0; $j < 5; $j++) : ?>
        <?php for ($i = 0; $i < 10; $i++) : ?>
            <div style="margin: 0 10px"<?php if ($i == 0) : ?> class="cm" <?php elseif ($i == 5) : ?> class="mm longer" <?php else : ?> class="mm" <?php endif ?>><?php if ($i == 0) : ?><span> <?= $j ?> </span><?php endif ?></div>
        <?php endfor ?>
    <?php endfor ?>

    <div style="margin: 0 10px" class='cm'><span><?= $j ?></span></div>

    <!-- <div style="margin: 0 10px" class='cm'><span>0</span></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm longer'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
 
    <div style="margin: 0 10px" class='cm'><span>1</span></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm longer'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
  -->
    <!-- <div style="margin: 0 10px" class='cm'><span>3</span></div> -->
</div> 


</body>
</html>