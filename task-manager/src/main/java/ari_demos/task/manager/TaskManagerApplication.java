package ari_demos.task.manager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import java.util.logging.Logger;

@SpringBootApplication
@ComponentScan(basePackages = "ari_demos.task.manager")
public class TaskManagerApplication {
    private static final Logger logger = Logger.getLogger(TaskManagerApplication.class.getName());

    public static void main(String[] args) {
        SpringApplication.run(TaskManagerApplication.class, args);
        logger.info("TaskManagerApplication started");
    }
}
