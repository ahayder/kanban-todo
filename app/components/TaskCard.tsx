import { css } from '@/styled-system/css';

interface TaskCardProps {
  task: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div
      className={css({
        bgColor: 'gumboGray100',
        border: '1px solid gumboGray500',
        borderRadius: '2',
        p: '2',
        margin: '2',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      })}
    >
      <div className={css({ fontSize: '16px', color: 'gumboGray600' })}>
        {task}
      </div>
    </div>
  );
};

export default TaskCard;
