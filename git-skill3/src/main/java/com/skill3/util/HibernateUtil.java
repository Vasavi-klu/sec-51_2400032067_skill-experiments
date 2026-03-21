package com.skill3.util;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.skill3.entity.Product;

public final class HibernateUtil {

    private static final SessionFactory SESSION_FACTORY = buildSessionFactory();

    private HibernateUtil() {
    }

    private static SessionFactory buildSessionFactory() {
        try {
            return new Configuration()
                    .configure("hibernate.cfg.xml")
                    .addAnnotatedClass(Product.class)
                    .buildSessionFactory();
        } catch (Exception ex) {
            throw new ExceptionInInitializerError("Failed to initialize SessionFactory: " + ex.getMessage());
        }
    }

    public static SessionFactory getSessionFactory() {
        return SESSION_FACTORY;
    }
}
