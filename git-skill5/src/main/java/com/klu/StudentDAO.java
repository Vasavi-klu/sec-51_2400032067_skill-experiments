package com.klu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class StudentDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private CourseDAO courseDAO;

    // RowMapper to map ResultSet to Student object
    private static class StudentRowMapper implements RowMapper<Student> {
        private CourseDAO courseDAO;

        public StudentRowMapper(CourseDAO courseDAO) {
            this.courseDAO = courseDAO;
        }

        @Override
        public Student mapRow(ResultSet rs, int rowNum) throws SQLException {
            Student student = new Student();
            student.setId(rs.getInt("id"));
            student.setName(rs.getString("name"));
            student.setGender(rs.getString("gender"));
            
            int courseId = rs.getInt("course_id");
            if (courseId > 0) {
                Course course = courseDAO.getCourseById(courseId);
                student.setCourse(course);
            }
            
            return student;
        }
    }

    // Get all students
    public List<Student> getAllStudents() {
        String sql = "SELECT * FROM students";
        return jdbcTemplate.query(sql, new StudentRowMapper(courseDAO));
    }

    // Get student by ID
    public Student getStudentById(int id) {
        String sql = "SELECT * FROM students WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, new StudentRowMapper(courseDAO), id);
    }

    // Insert new student
    public int insertStudent(Student student) {
        String sql = "INSERT INTO students (id, name, gender, course_id) VALUES (?, ?, ?, ?)";
        return jdbcTemplate.update(sql, 
            student.getId(), 
            student.getName(), 
            student.getGender(),
            student.getCourse() != null ? student.getCourse().getId() : null);
    }

    // Update student
    public int updateStudent(Student student) {
        String sql = "UPDATE students SET name = ?, gender = ?, course_id = ? WHERE id = ?";
        return jdbcTemplate.update(sql, 
            student.getName(), 
            student.getGender(),
            student.getCourse() != null ? student.getCourse().getId() : null,
            student.getId());
    }

    // Delete student
    public int deleteStudent(int id) {
        String sql = "DELETE FROM students WHERE id = ?";
        return jdbcTemplate.update(sql, id);
    }
}
