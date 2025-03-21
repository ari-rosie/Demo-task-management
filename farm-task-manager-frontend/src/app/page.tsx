'use client';

import { useEffect, useState } from 'react';
import TaskList from '../app/components/TaskList';
import TaskForm from '../app/components/TaskForm';
import { Task } from '../app/types/task';
import en from '../locales/en';
import { Box, Container, Typography } from '@mui/material';
import { TaskService } from './services/TaskService';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    TaskService.getAllTasks().then((tasks: any[]) => setTasks(tasks));
  }, []);

  const addTask = async (name: string) => {
    if (!name.trim()) return;
    const newTask = await TaskService.createTask(name);
    setTasks([...tasks, newTask]);
  };

  return (
    <Container maxWidth="sm" sx={{ width: '75%' }}>
      <Typography color='#0A5945' variant="h4" component="h1" fontWeight="bold">
        {en.title}
      </Typography>
      <Box sx={{ backgroundColor: '#F8F2E8', p: 2}}>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </Box>
    </Container>
  );
}
