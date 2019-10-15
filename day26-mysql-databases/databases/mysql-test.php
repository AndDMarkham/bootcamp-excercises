<?php

require_once 'DB/DB.php';
require_once 'DB/DB_functions.php';

require_once 'Country.php';
require_once 'Region.php';

//connect to a database
connect('localhost', 'world', 'root', 'rootroot');

//prepare the structure of a query
$query = '  SELECT *
            FROM `country`
            WHERE `Population` > ?
';

//run the query
$results = select($query, [200000000], 'Country');

// var_dump($results);

$queryCzech = " SELECT *
                FROM `country`
                WHERE `Code` = ?    
";

$czech_rep = select_one($queryCzech, ['CZE'], 'Country');

// var_dump($czech_rep);
// var_dump($results);

$region = new Region;
$region->name = 'Central Africa';
$region->insert();

// echo 'A new region was added with id '.$region->id.'<br />';

$queryCentralAfrica = ' SELECT *
                        FROM `region`
                        WHERE `name` = ?
';

$central_africa = select_one($queryCentralAfrica, ['Central Africa'], 'Region');

$central_africa->slug = 'central-africa';

$central_africa->update();

var_dump($central_africa);