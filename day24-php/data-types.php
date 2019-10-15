<?php

$value = '123';

var_dump($value);

$number = 0;
$number++;
var_dump($number);


$number = 0;
var_dump($number++);

$number = 0;
var_dump(++$number);

$owns_a_car = true;

echo "He goes to work by " . ($owns_a_car ? 'car.' : 'bicycle.');

$username = null;

echo 'Hello ' . ($username ?: 'stranger.');

