import { flex } from '@/styled-system/patterns';
import { css } from '../../styled-system/css';
import TaskInputCard from './TaskInputCard';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

interface KanbanColumnProps {
  title: string;
  tasks: string[];
  onAddTask?: (task: string) => void;
  onDragEnd: (result: any) => void;
}

export default function KanbanColumn({
  title,
  tasks,
  onAddTask,
  onDragEnd,
}: KanbanColumnProps) {
  return (
    <section
      className={flex({
        flexDirection: 'column',
        gap: '4',
        width: '33%',
        height: '90vh',
      })}
    >
      <div
        className={css({
          bgColor: 'gumboGray300',
          color: 'gumboYellow900',
          borderRadius: 'md',
          height: '90%',
        })}
      >
        <div
          className={`kanban-column ${title === 'Todo' ? 'add-border' : ''}`}
        >
          <div
            className={css({
              bgColor: 'gumboYellow500',
              color: 'gumboYellow900',
              borderRadius: 'md',
              p: '4',
            })}
          >
            <h1 className={css({ fontSize: '4xl', fontWeight: 'bold' })}>
              {title}
            </h1>
          </div>
          <div className={flex({ flexDirection: 'column', gap: '4', p: '4' })}>
            <Droppable droppableId={title} type="TASK">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="column-contents"
                >
                  {tasks.map((task, index) => (
                    <Draggable key={task} draggableId={task} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="task"
                        >
                          <TaskCard task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            {title === 'Todo' && onAddTask && (
              <TaskInputCard onAddTask={onAddTask} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
