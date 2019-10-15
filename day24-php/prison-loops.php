<?php

$time_served = 0;

do {

    echo "The prisoner has served {$time_served} years. </br>";

    $time_served++;

} while ($time_served <= 10);


for ($i = 10; $i >= 0; $i--) {

        echo "The prisoner has {$i} year(s) left. </br>";
   
        if ($i > 5) {
            continue;
        } else {
            echo "Going to a parole hearing... </br>";
        }

        if ($i == 2) {
            echo 'Paroled! </br>';
            break;
        }  
}