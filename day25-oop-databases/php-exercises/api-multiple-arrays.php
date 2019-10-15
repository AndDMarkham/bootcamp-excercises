<?php

$movie_names = [
  'tt0468569' => 'Dark Knight', 
  'tt0050083' => '12 angry men', 
  'tt0108052' => 'Schindler\'s list',
  'tt0110912' => 'Pulp fiction',
  'tt0167260' => 'Lord of the Rings: Return of the King',
  'tt0111161' => 'The Shawshank redemption',
  'tt0071562' => 'The Godfather II',
  'tt0060196' => 'The good, the bad and the ugly',
  'tt0137523' => 'Fight club',
  'tt0068646' => 'The Godfather',
];

$movie_ratings = [
  'tt0111161' => 9.2,
  'tt0068646' => 9.2,
  'tt0071562' => 9.0,
  'tt0468569' => 8.9, 
  'tt0050083' => 8.9, 
  'tt0108052' => 8.9,
  'tt0110912' => 8.9,
  'tt0167260' => 8.9,
  'tt0060196' => 8.9,
  'tt0137523' => 8.8
];

ksort($movie_ratings);
ksort($movie_names);

$movies = array_combine($movie_names, $movie_ratings);

// var_dump($movies);

$orderby = isset($_GET['orderby']) ? $_GET['orderby'] : 'name';

$orderway = isset($_GET['orderway']) ? $_GET['orderway'] : 'asc';

if ($orderby == 'name') {

    if ($orderway == 'asc') {
        return ksort($movies);
    } elseif ($orderway == 'dsc') {
        return krsort($movies);
    }
}

if ($orderby == 'rating') {

  if ($orderway == 'asc') {
      return asort($movies);
  } elseif ($orderway == 'dsc') {
      return arsort($movies);
  }
}

// ksort($movies);
// var_dump($movies);
// krsort($movies);
// var_dump($movies);
// asort($movies);
// var_dump($movies);
// arsort($movies);
// var_dump($movies);

$movies_final = [];

foreach($movies as $name => $rating) {
  $movie_info = [
    'name' => $name,
    'rating' => $rating
  ];
  $movies_final[] = $movie_info;
}

// var_dump($movies_final);

header('Content-type: application/json');

echo json_encode($movies_final);


