package com.skill3.loader;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.skill3.entity.Product;

public final class ProductDataLoader {

    private ProductDataLoader() {
    }

    public static void loadSampleProducts(Session session) {
        Transaction transaction = session.beginTransaction();
        try {
            session.save(new Product("Laptop", 899.99, 15, "Electronics"));
            session.save(new Product("Mouse", 25.50, 50, "Electronics"));
            session.save(new Product("Keyboard", 45.00, 30, "Electronics"));
            session.save(new Product("Monitor", 299.99, 20, "Electronics"));
            session.save(new Product("Desk Chair", 150.00, 0, "Furniture"));
            session.save(new Product("Desk Lamp", 35.75, 25, "Furniture"));
            session.save(new Product("Notebook", 5.99, 100, "Stationery"));
            session.save(new Product("Pen Set", 12.50, 75, "Stationery"));

            transaction.commit();
            System.out.println("Sample products added successfully!");
        } catch (Exception e) {
            transaction.rollback();
            throw e;
        }
    }
}
