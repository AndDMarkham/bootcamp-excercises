<?php
var_dump($_GET);
var_dump($_POST);
var_dump($_FILES);

$target_dir = 'uploads/images';
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}

move_uploaded_file(
    $_FILES['uploaded_file']['tmp_name'],
    $target_dir.'/'.'image.jpg'
);


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>File Uploads</title>
</head>
<body>

    <form action="" method="post" enctype="multipart/form-data">

        <input type="file" name="uploaded_file">

        <input type="submit" value="Upload">
    
    </form>
    
</body>
</html>