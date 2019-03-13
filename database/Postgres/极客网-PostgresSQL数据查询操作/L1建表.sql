CREATE EXTENSION IF NOT EXISTS ltree;
-- 创建dept表
CREATE TABLE dept (
	d_no INT PRIMARY KEY, --部门编号
	d_name VARCHAR(30),   --部门名称
	d_location VARCHAR(300) --部门所在地址
);

INSERT INTO dept VALUES (10, '开发部', '北京市海定区');
INSERT INTO dept VALUES (20, '测试部', '北京市东城区');
INSERT INTO dept VALUES (30, '销售部', '上海市');
INSERT INTO dept VALUES (40, '财务部', '武汉市');
INSERT INTO dept VALUES (50, '运维部', '广州市');
INSERT INTO dept VALUES (60, '集成部', '南京市');

CREATE TABLE employee (
	e_no INT PRIMARY KEY,
	e_name VARCHAR(30) NOT NULL,
	e_gender CHAR(2) NOT NULL,
	dept_no INT,
	e_job VARCHAR(50) NOT NULL,                    --所在部门编号
	e_salary NUMERIC(90, 2),
	e_hireDate DATE,
	CONSTRAINT fk_emp_deptno FOREIGN KEY (dept_no) REFERENCES dept(d_no)
);

--初始化employee表
INSERT INTO employee VALUES (100, '赵志军', 'f', 10, '开发工程师', 5000, '2010-01-01');
INSERT INTO employee VALUES (101, '张明渝', 'f', 10, '开发工程师', 6000, '2012-04-01');
INSERT INTO employee VALUES (102, '许峰', 'f', 10, '开发经理', 8000, '2008-08-01');
INSERT INTO employee VALUES (103, '王嘉琪', 'm', 20, '测试工程师', 4500, '2013-02-11');
INSERT INTO employee VALUES (113, '李阳', 'f', 10, '实习工程师', NULL, '2015-05-11');
INSERT INTO employee VALUES (114, '李刚', 'f', 10, '实习工程师', NULL, '2015-05-11');
INSERT INTO employee VALUES (115, '王林', 'm', 10, '实习工程师', NULL, '2015-05-11');

SELECT * FROM employee;

SELECT e_name FROM employee;

SELECT e.e_name, e,e_no FROM employee e;

SELECT e.e_name a, e,e_no b FROM employee e;