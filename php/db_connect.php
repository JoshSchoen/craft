<?php

/*
//---- remote ---
        $db_name  = 'lancetds_gift_shop_test';
        $hostname = '192.232.203.201';
        $username = 'lancetds_josh';
        $password = 'Lsipass12!';

//---- local ---
        */
        $db_name  = 'craft';
        $hostname = 'localhost';
        $username = 'root';
        $password = 'root';
        // connect to the database

        $con=mysql_connect($hostname, $username, $password) or die("Database connection failed");
        if ($con)
        {
                mysql_selectdb($db_name, $con);
        }
        if (!$con)
        {
               die('Could not connect: ' . mysql_error());
               
        }
        /*
$con = mysql_connect('graphicd.dotstermysql.com', 'joshschoen', 'Skuzzy4171'); 
if (!$con) { 
    die('Could not connect: ' . mysql_error()); 
} 
//echo 'Connected successfully'; 
mysql_select_db(craft2); 
?> 
?>
*/