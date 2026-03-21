# Hibernate HQL Skill 3 - Sorting, Pagination & Aggregates

## Overview
This project demonstrates advanced HQL operations using a `Product` entity:
- Sorting (`ASC` / `DESC`)
- Pagination with `setFirstResult()` and `setMaxResults()`
- Aggregate functions (`COUNT`, `MIN`, `MAX`, `AVG`, `SUM`)
- `GROUP BY` queries
- Filtering using `BETWEEN`
- Pattern matching with `LIKE`

## Technologies
- Java 11+
- Hibernate 5.6
- MySQL 8
- Maven

## Project Structure
- `src/main/java/com/skill3/entity/Product.java`
- `src/main/java/com/skill3/util/HibernateUtil.java`
- `src/main/java/com/skill3/loader/ProductDataLoader.java`
- `src/main/java/com/skill3/demo/HQLDemo.java`
- `src/main/resources/hibernate.cfg.xml`

## Setup
1. Ensure MySQL is running.
2. Update DB credentials in `src/main/resources/hibernate.cfg.xml`.
3. Build project:
   ```bash
   mvn clean compile
   ```

## Run
- Load sample data once:
  ```bash
  mvn exec:java -Dexec.args="load"
  ```
- Run demo queries:
  ```bash
  mvn exec:java
  ```

## Tasks Covered
- Product entity setup
- Sample data insertion (8 records)
- Sorting by price and quantity
- Pagination examples
- Aggregate operations
- Grouping by description
- Price-range filtering
- LIKE pattern queries
