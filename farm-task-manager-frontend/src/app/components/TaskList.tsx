import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Task } from '../types/task';
import CancelIcon from '@mui/icons-material/Cancel';
import { TaskService } from '../services/TaskService';

interface TaskListProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export default function TaskList({ tasks, setTasks }: TaskListProps) {
  const handleDeleteEachTask = (id: number) => {
    console.log('Delete task');
    TaskService.deleteTask(id);
    TaskService.getAllTasks().then((tasks: any[]) => setTasks(tasks));
  };
  return (
    <FormGroup>
      {tasks.map(task => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FormControlLabel control={<Checkbox color='success' />} label={task.name} key={task.id} />
          <CancelIcon color='success' onClick={() => handleDeleteEachTask(task.id)} sx={{ fontSize: '12px'}}/>
        </Box>
      ))}
    </FormGroup>
  );
}
