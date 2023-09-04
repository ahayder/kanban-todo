import { flex, hstack } from '@/styled-system/patterns';
import { css } from '../../styled-system/css';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav
      className={flex({
        alignItems: 'center',
        px: '2rem',
        maxH: '200px',
        bgColor: 'gumboYellow900',
        color: 'gumboYellow500',
      })}
    >
      <Image
        src="/logo-full.svg"
        width={170}
        height={170}
        alt="Picture of the author"
      />
      <h2
        className={css({
          pt: '.5rem',
          fontSize: '4xl',
          fontWeight: 'bold',
          display: 'block',
        })}
      >
        Kanban Board
      </h2>
    </nav>
  );
}
