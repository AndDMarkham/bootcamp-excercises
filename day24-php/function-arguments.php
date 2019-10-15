<?php

function assess_number($a) 
{
    return $a > 10;
}

$number = 6;

$result = assess_number($number); //false

//this is called passing a variable by value, $a receieves the value of $number (6), and is used in the function.. after the function is executed, $number remains 6 and $result contains the value of 'false'

function is_number_small(&$b) 
{
    $b++;
    
    return $b < 10;
}

$next_result = is_number_small($number); //true

// this is called passing a variable by reference (which is indicated by the ampersand '&' before the variable).. after execution of the function, the result is saved, but also the variable, in this case $number, that was passed through the function is modified according to the function, i.e. here, after passing the variable $number by reference, the variable now equals 7

function is_odd ($number, &$is_big = false) 
{
    $is_big = $number > 100;

    return $number % 2 == 1;
}

$number_is_odd = is_odd(123);


//creating a reference without a function:
$number = 6;
echo $number; //6

$copy = &$number;
$copy++;

echo $number; //7


function headline($text, $level = 1) 
{
    return "<h{$level}>{$text}</h{$level}>";
}

echo headline('Main headline');

echo headline('Secondary headline', 2);

echo headline('Tertiary headline', 3);