package com.klu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class CourseDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // RowMapper to map ResultSet to Course object
    private static class CourseRowMapper implements RowMapper<Course> {
        @Override
        public Course mapRow(ResultSet rs, int rowNum) throws SQLException {
            Course course = new Course();
            course.setId(rs.getInt("id"));
            course.setCourse(rs.getString("course"));
            course.setDateOfCompletion(rs.getString("date_of_completion"));
            return course;
        }
    }

    // Get all courses
    public List<Course> getAllCourses() {
        String sql = "SELECT * FROM courses";
        return jdbcTemplate.query(sql, new CourseRowMapper());
    }

    // Get course by ID
    public Course getCourseById(int id) {
        String sql = "SELECT * FROM courses WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, new CourseRowMapper(), id);
    }

    // Insert new course
    public int insertCourse(Course course) {
        String sql = "INSERT INTO courses (id, course, date_of_completion) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql, 
            course.getId(), 
            course.getCourse(), 
            course.getDateOfCompletion());
    }

    // Update course
    public int updateCourse(Course course) {
        String sql = "UPDATE courses SET course = ?, date_of_completion = ? WHERE id = ?";
        return jdbcTemplate.update(sql, 
            course.getCourse(), 
            course.getDateOfCompletion(),
            course.getId());
    }

    // Delete course
    public int deleteCourse(int id) {
        String sql = "DELETE FROM courses WHERE id = ?";
        return jdbcTemplate.update(sql, id);
    }
}
