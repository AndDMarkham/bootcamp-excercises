<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="chess.css">
    <title>Chess Board</title>
</head>
<body>

        <div class="board">
            <?php for ($i = 0; $i < 8; $i++) : ?>
                <div class="row">
                    <?php for ($j = 0; $j < 8; $j++) : ?>
                            <div class=<?php echo ($i + $j) % 2 == 0 ? 'white' : 'black' ?>></div>
                    <?php endfor;  ?> 
                </div>
            <?php endfor;  ?>    
        </div>
    

</body>
</html>