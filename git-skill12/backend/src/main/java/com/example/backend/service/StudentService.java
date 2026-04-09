package com.example.backend.service;

import java.util.List;
import com.example.backend.model.Student;

public interface StudentService {
    Student save(Student s);
    List<Student> getAll();
    Student update(Long id, Student s);
    void delete(Long id);
}