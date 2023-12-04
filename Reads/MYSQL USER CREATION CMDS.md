MYSQL 




pager less -SFX - format 

mysql -urootroot -hmysql-business-events -prootroot


CREATE USER 'be_schema_seeder'@'localhost' IDENTIFIED BY 'Qp7RGLYi5Jx8g0vo';
After creating user , granting  permissions like below ..thats it right ?
 GRANT SELECT, INSERT, UPDATE, DELETE ON *.* TO 'be_schema_seeder'@'%';


SHOW GRANTS FOR   'be_schema_seeder'@'%'; 



SHOW GRANTS FOR   'be_dashboard’@‘%’;



