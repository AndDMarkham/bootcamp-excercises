<?php

$cars_i_want = [];

var_dump($cars_i_want);

$cars_i_want[] = 'Aston Martin';
$cars_i_want[] = 'Bugatti';
$cars_i_want[] = 'Ferrari';
$cars_i_want[] = 'Maserati';
$cars_i_want[] = 'Mercedes';
$cars_i_want[] = 'Porsche';
$cars_i_want[] = 'Landrover';
$cars_i_want[] = 'Lamborghini';

var_dump($cars_i_want);

echo "For myself, I'd buy a {$cars_i_want[0]}.</br>";

echo "For my future wife, I'd buy a {$cars_i_want[6]}.</br>";

$cars_i_want[4] = 'Smartcar';

echo "Each of my kids is gonna get a {$cars_i_want[4]}, though. Lol.</br>";


echo "<h4>My future cars:</h4>  <ul>";

foreach($cars_i_want as $car_name) {
    echo "<li>{$car_name}</li>";
}

echo "</ul>";

$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];

echo "You can have a Porsche for just {$car_prices['Porsche 911']} CZK!</br></br>";

foreach($car_prices as $car => $price) {
    echo "The price of a {$car} is {$price} Kč.</br>";
}
