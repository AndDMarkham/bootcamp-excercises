<?php

require_once 'DB.php';
require_once 'DB_functions.php';

require_once 'Game.php';

connect('localhost', 'games', 'root', 'rootroot');

// $query = '  SELECT *
//             FROM `games`
//             WHERE 1
// ';

// $object = select($query, [], 'Game');

$orderby = isset($_GET['orderby']) && $_GET['orderby'] == 'rating' ? 'rating' : 'name';

$orderway = isset($_GET['way']) && $_GET['way'] == 'desc' ? 'DESC ': 'ASC';

$query = "  SELECT *
            FROM `games`
            WHERE 1
            ORDER BY {$orderby} {$orderway}
";



// if ($orderby == 'name') {
    
//     if ($orderway == 'asc') {

//         usort($object, function($a, $b) {

//             if ($a->name > $b->name) {
//                 return -1;
//             } elseif ($a->name < $b->name) {
//                 return 1;
//             } else {
//                 return 0;
//             }
                
//         });
//     }

//     if ($orderway == 'desc') {

//         usort($object, function($a, $b) {

//             if ($a->name > $b->name) {
//                 return 1;
//             } elseif ($a->name < $b->name) {
//                 return -1;
//             } else {
//                 return 0;
//             }
                
//         });
//     }
// }

// if ($orderby == 'rating') {
    
//     if ($orderway == 'asc') {

//         usort($object, function($a, $b) {

//             if ($a->rating > $b->rating) {
//                 return -1;
//             } elseif ($a->rating < $b->rating) {
//                 return 1;
//             } else {
//                 return 0;
//             }
                
//         });
//     }

//     if ($orderway == 'desc') {

//         usort($object, function($a, $b) {

//             if ($a->rating > $b->rating) {
//                 return 1;
//             } elseif ($a->rating < $b->rating) {
//                 return -1;
//             } else {
//                 return 0;
//             }
                
//         });
//     }
// }



// usort($array, function($a, $b) {

//     if ($a->rating > $b->rating) {
//         return -1;
//     } elseif ($a['rating'] < $b['rating']) {
//         return 1;
//     } else {
//         return 0;
//     }
    
// });


$object = select($query, [], 'Game');

header('Content-type: application/json');

echo json_encode($object);