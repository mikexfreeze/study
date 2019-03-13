
SELECT * from employee;

SELECT * from dept;

SELECT e_no, e_name, dept_no, e_salary FROM employee WHERE dept_no in (10, 20);
UNION
SELECT e_no, e_name, dept_no, e_salary FROM employee WHERE e_salary > 5000;