package com.klu;

import org.springframework.stereotype.Component;

@Component
public class Course {

    private int id = 24;
    private String course = "FSAD	";
    private String dateOfCompletion = "25-April-2026";

    // Constructors
    public Course() {
    }

    public Course(int id, String course, String dateOfCompletion) {
        this.id = id;
        this.course = course;
        this.dateOfCompletion = dateOfCompletion;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getDateOfCompletion() {
        return dateOfCompletion;
    }

    public void setDateOfCompletion(String dateOfCompletion) {
        this.dateOfCompletion = dateOfCompletion;
    }

    @Override
    public String toString() {
        return "Course [id=" + id +
               ", course=" + course +
               ", dateOfCompletion=" + dateOfCompletion + "]";
    }
}
