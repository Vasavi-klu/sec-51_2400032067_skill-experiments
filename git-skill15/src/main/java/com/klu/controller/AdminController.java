package com.klu.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @PostMapping("/add")
    public String add() {
        return "Employee added by ADMIN";
    }

    @DeleteMapping("/delete")
    public String delete() {
        return "Employee deleted by ADMIN";
    }
}