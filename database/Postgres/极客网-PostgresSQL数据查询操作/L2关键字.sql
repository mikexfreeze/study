--关键字 in， between and， like

SELECT * from employee;

SELECT e_no, e_name, e_hiredate FROM employee WHERE e_no IN (10, 20);

SELECT e_no, e_name, e_hiredate FROM employee WHERE e_hiredate BETWEEN '2010-01-01' and '2015-01-01';

SELECT 'abc' like 'a%';

SELECT 'ab' like 'a_';

SELECT e_no, e_name, e_hiredate FROM employee WHERE e_name like '王%';