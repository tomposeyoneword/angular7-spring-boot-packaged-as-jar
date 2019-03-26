package com.payfone.service.provider.controller;

import java.time.LocalDateTime;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController extends PayfoneApiController {

    @GetMapping("/hello")
    public String hello() {
	LocalDateTime now = LocalDateTime.now();
	return "Hello from the other side!!!  It is " + now.getHour() + ":" + now.getMinute() + ":" + now.getSecond();
    }
}
