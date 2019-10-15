<?php

$first_name = 'Andrew';

$surname = 'Markham';

echo    "First name: {$first_name} <br>
         Last name: {$surname} <br>";

$birth_year = 1992;

$height = 189;

echo    "Year of birth: {$birth_year} <br>
         Height: {$height} cm <br> ";

define('SERVER_SOFTWARE', 'Apache');
define('MY_OS', 'MacOS Mojave');

echo "This server is running on " . SERVER_SOFTWARE . ".<br>";

echo "This computer is running " . MY_OS . ".<br>";

function greet($whom)
{
    return "Hello, {$whom}. <br>";
}

echo greet($first_name);

function truncate_string(&$string, $size) 
{
    return $string = mb_substr($string, 0, $size);
}

$sentence = 'Quick brown fox jumps over the lazy dog.';

truncate_string($sentence, 10);

var_dump($sentence);