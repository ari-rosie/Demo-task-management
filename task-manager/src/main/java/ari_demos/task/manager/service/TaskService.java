package ari_demos.task.manager.service;

import ari_demos.task.manager.model.Task;
import ari_demos.task.manager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repository;

    public List<Task> getAllTasks() {
        return (List<Task>) repository.findAll();
    }

    public Task addTask(Task task) {
        return repository.save(task);
    }

    public Task deleteTask(Long id) {
        Task task = repository.findById(id).orElse(null);
        if (task != null) {
            repository.delete(task);
        }
        return task;
    }

}
