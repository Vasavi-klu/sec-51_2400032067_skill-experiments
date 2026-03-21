package com.klu;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AppWithDatabase {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get DAO beans
        StudentDAO studentDAO = context.getBean(StudentDAO.class);
        CourseDAO courseDAO = context.getBean(CourseDAO.class);

        System.out.println("========================================");
        System.out.println("   DATABASE OPERATIONS DEMONSTRATION");
        System.out.println("========================================\n");

        try {
            // 1. Fetch all courses from database
            System.out.println("1. ALL COURSES:");
            System.out.println("------------------");
            List<Course> courses = courseDAO.getAllCourses();
            for (Course course : courses) {
                System.out.println(course);
            }

            // 2. Fetch all students from database
            System.out.println("\n2. ALL STUDENTS:");
            System.out.println("------------------");
            List<Student> students = studentDAO.getAllStudents();
            for (Student student : students) {
                student.display();
                System.out.println();
            }

            // 3. Fetch specific student by ID
            System.out.println("\n3. FETCH STUDENT BY ID (10):");
            System.out.println("------------------");
            Student student = studentDAO.getStudentById(10);
            student.display();

            // 4. Fetch specific course by ID
            System.out.println("\n\n4. FETCH COURSE BY ID (301):");
            System.out.println("------------------");
            Course course = courseDAO.getCourseById(301);
            System.out.println(course);

            System.out.println("\n========================================");
            System.out.println("   DATABASE OPERATIONS COMPLETED");
            System.out.println("========================================");

        } catch (Exception e) {
            System.err.println("ERROR: " + e.getMessage());
            System.err.println("\nPlease ensure:");
            System.err.println("1. MySQL server is running");
            System.err.println("2. Database 'student_db' is created");
            System.err.println("3. Run the database-setup.sql script");
            System.err.println("4. Update database.properties with correct credentials");
        }
    }
}
