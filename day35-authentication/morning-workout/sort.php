<?php 
 
    function createRandomArray($length){
        $data = [];
        for($i = 0; $i < $length; $i++){
            $data[] = rand(1, 99);
        }
        return $data;
    }
 
    function echoArray($array){
        echo '<pre>' . implode('; ', $array) . '</pre>';    
    }
 
    // generate random array with length 5
    $data = createRandomArray(5);
 
    echoArray($data);
 
    // function sorter($a, $b)
    // {
    //     if ($a == $b) {
    //         return 0;
    //     }
    //     return ($a < $b) ? -1 : 1;
    // }

    // usort($data, "sorter");


    for ($j = 0; $j < (count($data) - 1); $j++) {
        for ($i = 0; $i < (count($data) - 1 - $j); $i++) {
            if ($data[$i] > $data[($i + 1)]) {
                $swap = $data[$i];
                $data[$i] = $data[($i + 1)];
                $data[($i + 1)] = $swap;
            }
        } 
    }       



    echoArray($data);
?>