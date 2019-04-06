create database hot_restaurant;

use hot_restaurant;

CREATE TABLE hot_restaurant (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
    phone_number VARCHAR(30) NOT NULL,
    email VARCHAR(25),
    customor_id VARCHAR(10)
);

