SELECT * from employee;

SELECT * from employee LIMIT 5;

SELECT * from employee LIMIT 5 OFFSET 1; --OFFSET忽略前面N条数据

SELECT e_no, e_name, e_salary FROM employee WHERE e_salary is NULL;

SELECT e_no, e_name, e_salary, e_hiredate FROM employee ORDER BY e_salary ASC, e_hiredate DESC;

SELECT e_no, e_name, e_salary, e_hiredate FROM employee ORDER BY e_salary DESC nulls LAST;

SELECT e_no, e_name, e_gender, dept_no FROM employee WHERE e_gender = 'f' AND dept_no = 10;

SELECT e_no, e_name, e_gender, dept_no FROM employee WHERE e_gender = 'f' AND dept_no IN (10, 20);

SELECT e_no, e_name, e_gender, dept_no FROM employee WHERE dept_no = 10 OR dept_no = 20;