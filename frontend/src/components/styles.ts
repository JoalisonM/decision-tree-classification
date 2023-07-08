import { styled } from "../styles";

export const FormContainer = styled('form', {
  maxWidth: "30rem",
  borderRadius: 6,
  margin: "4rem auto 0",
  padding: "2.5rem 3rem",
  backgroundColor: '$gray700',

  display: "flex",
  flexDirection: "column",
  gap: "3rem",

  h1: {
    fontSize: "$xxl",
  },

  h2: {
    fontSize: "$xl",

    span: {
      color: "$blue400",
    },
  },

  div: {
    display: "flex",
    flexDirection: "column",

    input: {
      borderRadius: "6px",
      border: "0",
      background: "$gray900",
      color: "$gray300",
      padding: "1rem",

      "&::placeholder": {
        color: "$gray500",
      }
    },

    label: {
      fontSize: '$sm',
      fontWeight: 600,
      padding: "0 0 0.6rem",
    },

    select: {
      fontSize: '$sm',
      padding: "1rem",
      borderRadius: 6,
      border: 0,
      cursor: 'pointer',
      background: "$gray900",
      color: "$gray400",
    },

    option: {
      backgroundColor: '$gray800 !important',
    },
  }
});

export const Button = styled("button", {
  border: 0,
  fontWeight: 700,
  borderRadius: '6px',
  cursor: 'pointer',
  height: '2.5rem',
  background: '$blue500',
  color: '$gray100',
  padding: '0 1.25rem',

  gap: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.9)',
  },
});