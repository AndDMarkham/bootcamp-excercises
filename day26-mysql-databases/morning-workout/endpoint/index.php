<?php

include '../data.php';

require_once './Celebrity.php';


$celebrities = [];

foreach ($data as $value) {
    $new_celeb = new Celebrity();
    $new_celeb->from_array($value);

    $celebrities[] = $new_celeb;
}

header('Content-type: application/json');

echo json_encode($celebrities);