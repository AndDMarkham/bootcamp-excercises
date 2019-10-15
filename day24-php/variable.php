<?php

$foo = 123; //defines a variable that can be changed, akin to 'let' in JS

function bar() 
{
    echo $foo; //undefined: variables don't 
}

$my_greeting = "Hello, world!";

echo $my_greeting;

unset($my_greeting);

define("FOO", 123); //defines constant that has a complete global scope, e.g. for settings, best practice uses CAPITAL letters and snake_case

define("ROOT_DIR", "/Users/andrewmarkham/web/something"); //this would be a typical use of a constant in php

echo FOO; //echoes value of constant, uses no dollar sign

echo ROOT_DIR;
