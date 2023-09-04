'use client';
import { flex } from '@/styled-system/patterns';
import KanbanColumn from './components/KanbanColumn';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useState } from 'react';

export default function Home() {
  const [todoTasks, setTodoTasks] = useState<string[]>([]);
  const [doingTasks, setDoingTasks] = useState<string[]>([]);
  const [doneTasks, setDoneTasks] = useState<string[]>([]);

  const onAddTask = (taskContent: string) => {
    if (taskContent.trim() !== '') {
      setTodoTasks([...todoTasks, taskContent]);
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    // Create copies of the tasks from all columns
    const updatedTodoTasks = [...todoTasks];
    const updatedDoingTasks = [...doingTasks];
    const updatedDoneTasks = [...doneTasks];

    // Get the task to move
    const taskToMove = draggableId;

    if (source.droppableId === 'Todo') {
      updatedTodoTasks.splice(source.index, 1);
    } else if (source.droppableId === 'Doing') {
      updatedDoingTasks.splice(source.index, 1);
    } else if (source.droppableId === 'Done') {
      updatedDoneTasks.splice(source.index, 1);
    }

    if (destination.droppableId === 'Todo') {
      updatedTodoTasks.splice(destination.index, 0, taskToMove);
    } else if (destination.droppableId === 'Doing') {
      updatedDoingTasks.splice(destination.index, 0, taskToMove);
    } else if (destination.droppableId === 'Done') {
      updatedDoneTasks.splice(destination.index, 0, taskToMove);
    }

    // Update the state with the new task order in all columns
    setTodoTasks(updatedTodoTasks);
    setDoingTasks(updatedDoingTasks);
    setDoneTasks(updatedDoneTasks);
  };

  return (
    <main className={flex({ gap: '10', px: '10', py: '5', width: '100vw' })}>
      <DragDropContext onDragEnd={onDragEnd}>
        <KanbanColumn
          title="Todo"
          tasks={todoTasks}
          onAddTask={onAddTask}
          onDragEnd={onDragEnd}
        />
        <KanbanColumn title="Doing" tasks={doingTasks} onDragEnd={onDragEnd} />
        <KanbanColumn title="Done" tasks={doneTasks} onDragEnd={onDragEnd} />
      </DragDropContext>
    </main>
  );
}
