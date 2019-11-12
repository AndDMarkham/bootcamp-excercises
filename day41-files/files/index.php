<?php 

// var_dump(__FILE__);

// var_dump(__DIR__);

// var_dump(
//     pathinfo(__FILE__)
// );

// var_dump(
//     pathinfo(__FILE__, PATHINFO_EXTENSION)
// );

// $contents = scandir(__DIR__);

// var_dump($contents);

// $dir_handle = opendir(__DIR__);

// var_dump($dir_handle);

// while(false !== ($file = readdir($dir_handle))) {
//     var_dump($file);
// }

// closedir($dir_handle);

// mkdir('new_folder');

// rmdir('new_folder');

// var_dump(
//     is_dir('new_folder')
// );

// var_dump(
//     file_exists('photos.txt')
// );

// $file_handle = fopen('photos.txt', 'r');

// var_dump($file_handle);

// $line = fgets($file_handle);

// while(false !== ($line = fgets($file_handle))) {
//     var_dump($line);
// }

// fclose($file_handle);

// $file_handle = fopen('2019/info.txt', 'a');

// fwrite($file_handle, "photos from our 2019 vacation"."\r\n");

// fclose($file_handle);

// $data = [
//     'name' => 'bruce',
//     'surname' => 'wayne',
//     'job' =>'Billionaire',
//     'yob' => 1939,
//     'bio' => 'Once upon a time, there was a boy. His parents were murdered, so he became Batman'
// ];

// $fh = fopen('data.csv', 'w');

// fputcsv($fh, $data);

// fclose($fh);

// $fh = fopen('data.csv', 'r');

// while(false !== ($line = fgetcsv($fh))) {
//     var_dump($line);
// }

// fclose($fh);

// var_dump(
//     file('photos.txt')
// );

// var_dump(
//     file_get_contents('photos.txt')
// );

// file_put_contents(
//     'data.json',
//     json_encode($data)
// );

// var_dump(
//     json_encode(file_get_contents('data.json'))
// );

// var_dump(
//     json_encode(file_get_contents('data.json'), true)
// );

// unlink('data.json');