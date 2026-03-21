package com.klu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Student {

    private int id = 12;
    private String name = "Vasavi";
    private String gender = "Female";

    @Autowired
    private Course course;

    // Constructors
    public Student() {
    }

    public Student(int id, String name, String gender, Course course) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.course = course;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public void display() {
        System.out.println("Student ID   : " + id);
        System.out.println("Student Name : " + name);
        System.out.println("Gender       : " + gender);
        System.out.println("Course       : " + course);
    }
}
