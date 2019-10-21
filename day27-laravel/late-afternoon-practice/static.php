<?php

class Dog
{
    public static $total_number = 0;
    public static function get_number()
    {
        return self::$total_number;
        //or
        //return static::$total_number;
    }

    public $name = null;
    public $breed = null;

}

$ben = new Dog;
$jerry = new Dog;

Dog::$total_number = 2;