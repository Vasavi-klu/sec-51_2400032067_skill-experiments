package klu.courseapi;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {

    @Autowired
    private CourseRepository repo;

    public Course addCourse(Course course) {
        return repo.save(course);
    }

    public List<Course> getAllCourses() {
        return repo.findAll();
    }

    public Course getCourseById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new CourseNotFoundException("Course not found with id: " + id));
    }

    public Course updateCourse(Long id, Course course) {
        Course existing = getCourseById(id);
        existing.setTitle(course.getTitle());
        existing.setDuration(course.getDuration());
        existing.setFee(course.getFee());
        return repo.save(existing);
    }

    public void deleteCourse(Long id) {
        Course existing = getCourseById(id);
        repo.delete(existing);
    }

    public List<Course> searchCoursesByTitle(String title) {
        return repo.findByTitleContaining(title);
    }
}
