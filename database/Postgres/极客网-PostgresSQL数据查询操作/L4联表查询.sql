-- 联表查询

SELECT * from employee;

SELECT * from dept;

SELECT e_no, e_name, e_job, d_no, d_name, d_location FROM employee, dept WHERE dept_no = d_no;

SELECT e_no, e_name, e_job, d_no, d_name, d_location FROM employee INNER JOIN dept ON dept_no = d_no;

SELECT e_no, e_name, e_job, d_no, d_name, d_location FROM employee LEFT JOIN dept ON dept_no = d_no; -- LEFT JOIN返回左表当中所有的内容

SELECT e_no, e_name, e_job, d_no, d_name, d_location FROM employee RIGHT OUTER JOIN dept ON dept_no = d_no;