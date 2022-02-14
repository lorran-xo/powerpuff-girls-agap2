import styled, { css } from 'styled-components';

export interface ButtonContainerProps {
  color: 'primary' | 'secondary';
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  min-width: 5.75rem;
  min-height: 2.2rem;
  padding: 0.5rem 1rem;

  border-width: 1px;
  border-style: solid;
  border-color: #4d4f50;
  border-radius: 4px;

  font-weight: bold;

  ${(props) =>
    props.color === 'primary' &&
    css`
      color: 'black';
      background-color: ${({ theme }) => `var(${theme.colors.primary})`};
    `}

  ${(props) =>
    props.color === 'secondary' &&
    css`
      color: var(--neutral-0);
      background-color: ${({ theme }) => `var(${theme.colors.secondary})`};
    `}

  &:hover {
    opacity: 0.7;
    filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.15));
  }

  &:active {
    background-color: ${(props) =>
      props.color === 'primary' ? 'var(--neutral-700)' : 'var(--pink-300)'};
  }
`;
