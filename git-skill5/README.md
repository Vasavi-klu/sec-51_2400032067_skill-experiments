# Spring Autowiring with MySQL Database

## Project Structure
```
Spring-Autowiring/
├── pom.xml
└── src/
    └── main/
        ├── java/
        │   └── com/
        │       └── klu/
        │           ├── App.java (Original demo)
        │           ├── AppWithDatabase.java (Database demo)
        │           ├── Course.java
        │           ├── Student.java
        │           ├── CourseDAO.java
        │           └── StudentDAO.java
        └── resources/
            ├── applicationContext.xml
            ├── database.properties
            └── database-setup.sql
```

## Prerequisites

### 1. Install MySQL
Download and install MySQL from: https://dev.mysql.com/downloads/installer/

### 2. Install Maven
Download and install Maven from: https://maven.apache.org/download.cgi

## Setup Instructions

### Step 1: Configure Database
1. Update `src/main/resources/database.properties` with your MySQL credentials:
   ```properties
   jdbc.username=root
   jdbc.password=your_password
   ```

### Step 2: Create Database and Tables
Run the SQL script to set up the database:
```sql
mysql -u root -p < src/main/resources/database-setup.sql
```

Or manually execute the SQL commands in MySQL Workbench or command line.

### Step 3: Build the Project
```powershell
mvn clean install
```

## Running the Application

### Option 1: Original Demo (Without Database)
```powershell
mvn exec:java -Dexec.mainClass="com.klu.App"
```

### Option 2: Database Demo
```powershell
mvn exec:java -Dexec.mainClass="com.klu.AppWithDatabase"
```

## Technologies Used

- **Spring Framework 5.3.30** - IoC Container and Dependency Injection
- **Spring JDBC** - Database operations
- **MySQL 8.0.33** - Database
- **Apache Commons DBCP2** - Connection pooling
- **Maven** - Build and dependency management

## Key Features

1. **@Autowired Annotation** - Automatic dependency injection
2. **@Component** - Bean registration with component scanning
3. **@Repository** - DAO layer beans
4. **JdbcTemplate** - Simplified database operations
5. **DataSource Configuration** - Connection pooling

## Database Schema

### courses table
- id (INT, PRIMARY KEY)
- course (VARCHAR)
- date_of_completion (VARCHAR)

### students table
- id (INT, PRIMARY KEY)
- name (VARCHAR)
- gender (VARCHAR)
- course_id (INT, FOREIGN KEY)

## Expected Output (Database Demo)

```
========================================
   DATABASE OPERATIONS DEMONSTRATION
========================================

1. ALL COURSES:
------------------
Course [id=301, course=Spring Core, dateOfCompletion=25-Jan-2026]
Course [id=302, course=Spring Boot, dateOfCompletion=15-Feb-2026]
Course [id=303, course=Spring MVC, dateOfCompletion=10-Mar-2026]

2. ALL STUDENTS:
------------------
Student ID   : 10
Student Name : Divya
Gender       : Female
Course       : Course [id=301, course=Spring Core, dateOfCompletion=25-Jan-2026]

Student ID   : 11
Student Name : Raj
Gender       : Male
Course       : Course [id=302, course=Spring Boot, dateOfCompletion=15-Feb-2026]

Student ID   : 12
Student Name : Priya
Gender       : Female
Course       : Course [id=303, course=Spring MVC, dateOfCompletion=10-Mar-2026]
```

## Troubleshooting

**Error: Access denied for user 'root'@'localhost'**
- Update database.properties with correct MySQL credentials

**Error: Unknown database 'student_db'**
- Run the database-setup.sql script first

**Error: Communications link failure**
- Ensure MySQL server is running
- Check if MySQL is running on port 3306

**Error: mvn command not found**
- Install Maven and add it to PATH
- Or use an IDE like IntelliJ IDEA or Eclipse
