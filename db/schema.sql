CREATE DATABASE burgers_db;
-- // tells sql to use the burgers_db database
USE burgers_db;
 -- NOT NULL MEANS CANNOT BE EMPTY
CREATE TABLE burgers (
id int NOT NULL  AUTO_INCREMENT,
-- varchar(255) is the structure for the burger name the max characters allowed is 255
burger_name varchar(255) NOT NULL,
devoured BOOLEAN default false,
date TIMESTAMP,
PRIMARY KEY (id)
);
