package com.example.backend.service;

import org.springframework.stereotype.Service;
import java.util.List;
import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repo;

    public StudentServiceImpl(StudentRepository repo) {
        this.repo = repo;
    }

    public Student save(Student s) {
        return repo.save(s);
    }

    public List<Student> getAll() {
        return repo.findAll();
    }

    public Student update(Long id, Student s) {
        Student st = repo.findById(id).orElseThrow();
        st.setName(s.getName());
        st.setEmail(s.getEmail());
        st.setCourse(s.getCourse());
        return repo.save(st);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}