
SELECT * from employee;

SELECT * from dept;

SELECT * from employee WHERE EXISTS (SELECT d_no FROM dept WHERE d_name = '开发部' AND d_no = dept_no);

SELECT * from employee WHERE dept_no IN (SELECT d_no FROM dept WHERE d_name = '开发部');

-- 标量子查询
SELECT e_no, e_name, (SELECT d_name || ' ' || d_location FROM dept WHERE dept_no = d_no) AS address FROM employee;