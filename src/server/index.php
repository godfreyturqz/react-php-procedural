<?php
// CREATE DATABASE react-php-procedural-db; 
// CREATE TABLE register(
// 	   id int not null PRIMARY KEY AUTO_INCREMENT,
//     username varchar(256) not null,
//     password varchar(256) not null
// );

$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "react-php-procedural-db";

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

if ($conn) { 
    echo "Connected to database succesfully."; 
}

if($_POST['username']){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = "INSERT INTO register (username, password) VALUES ('$username','$password');";
    mysqli_query($conn, $sql);
    echo "Insert success.";
}