import { cva } from '../../styled-system/css';

const button = cva({
  base: {
    display: 'inline-block',
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
    textDecoration: 'none',
    transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
  },
  variants: {
    size: {
      sm: {
        padding: '4px 8px',
        fontSize: '14px',
      },
      md: {
        padding: '8px 16px',
        fontSize: '16px',
      },
      lg: {
        padding: '12px 24px',
        fontSize: '18px',
      },
    },
    visual: {
      primary: {
        backgroundColor: 'gumboPrimary',
        color: 'gumboGray700',
        border: '2px solid gumboPrimary',
      },
      secondary: {
        backgroundColor: 'gumboSecondary',
        color: 'black',
        border: '2px solid gumboSecondary',
      },
      outlined: {
        backgroundColor: 'transparent',
        color: 'gumboPrimary',
        border: '2px solid gumboPrimary',
      },
    },
  },
  compoundVariants: [
    // Apply small size variant when both small size and primary color are selected
    {
      size: 'sm',
      visual: 'primary',
      css: {
        border: '2px solid gumboPrimary',
      },
    },
    // Apply large size variant when both large size and secondary color are selected
    {
      size: 'lg',
      visual: 'secondary',
      css: {
        backgroundColor: 'gumboGray50',
        color: 'gumboGray700',
        border: 'none',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    visual: 'primary',
  },
});

export default button;
