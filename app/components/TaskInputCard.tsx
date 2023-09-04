'use client';
import { flex } from '@/styled-system/patterns';
import { css } from '../../styled-system/css';
import { useState } from 'react';
import button from '../pandaRecipes/button';

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

const TaskInputCard: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTask();
    }
  };

  return (
    <div
      className={flex({
        padding: '1',
        bgColor: 'gumboGray100',
        direction: 'column',
        margin: '2',
      })}
    >
      <input
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
        className={css({
          bgColor: 'gumboGray100',
          border: 'none',
          borderBottom: '1px solid gumboGray500',
          padding: '2',
          fontSize: '16px',
          color: 'gumboGray600',
          '&:focus': { outline: 'none' },
        })}
      />
      <button
        className={button({ size: 'sm', visual: 'primary' })}
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
};

export default TaskInputCard;
