<?php

// Generally, there would be be input first

// Data is prepared here

$movies = [
    'The Shawshank redemption',
    'The Godfather',
    'The Godfather II',
    'Dark Knight', 
    '12 angry men', 
    'Schindler\'s list',
    'Pulp fiction',
    'Lord of the Rings: Return of the King',
    'The good, the bad and the ugly',
    'Fight club'
];

// Output:

header('Content-type: application/json');

//first headers, then the rest of the output!!!

echo json_encode($movies);
