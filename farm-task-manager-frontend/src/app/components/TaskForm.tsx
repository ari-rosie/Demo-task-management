import en from '@/locales/en';
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

interface TaskFormProps {
  addTask: (name: string) => void;
}

export default function TaskForm({ addTask }: TaskFormProps) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder={en.addTaskPlaceholder}
      />
      <Button 
        type="submit"   
        variant="contained"
        sx={{ mt: 2, backgroundColor: '#603E50' }}
      >{en.addTaskButton}</Button>
    </Box>
  );
}
