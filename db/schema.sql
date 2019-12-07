CREATE database yan1frdtykju1xwt;
USE yan1frdtykju1xwt;

CREATE TABLE burgers 
(
   id INT NOT NULL AUTO_INCREMENT,
   burger_name VARCHAR(255) NOT NULL,
   devoured BOOLEAN NOT NULL DEFAULT 0,
   date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAP,
   PRIMARY KEY (id)
);