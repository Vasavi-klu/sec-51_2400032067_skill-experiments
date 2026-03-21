-- Create Database
CREATE DATABASE IF NOT EXISTS student_db;

USE student_db;

-- Create Students Table
CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Create Courses Table
CREATE TABLE IF NOT EXISTS courses (
    id INT PRIMARY KEY,
    course VARCHAR(100) NOT NULL,
    date_of_completion VARCHAR(20) NOT NULL
);

-- Insert Sample Data
INSERT INTO courses (id, course, date_of_completion) VALUES 
(301, 'Spring Core', '25-Jan-2026'),
(302, 'Spring Boot', '15-Feb-2026'),
(303, 'Spring MVC', '10-Mar-2026');

INSERT INTO students (id, name, gender, course_id) VALUES 
(10, 'Divya', 'Female', 301),
(11, 'Raj', 'Male', 302),
(12, 'Priya', 'Female', 303);

-- Verify Data
SELECT * FROM courses;
SELECT * FROM students;
