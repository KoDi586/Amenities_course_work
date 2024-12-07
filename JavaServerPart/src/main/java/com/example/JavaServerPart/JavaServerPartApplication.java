package com.example.JavaServerPart;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class JavaServerPartApplication {

	@Value("${trust.port}")
	private String trustPort;

	public static void main(String[] args) {
		SpringApplication.run(JavaServerPartApplication.class, args);
	}

}
