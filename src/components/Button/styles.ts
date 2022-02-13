import styled, { css } from 'styled-components';

export interface ButtonContainerProps {
  color: 'primary' | 'secondary';
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  min-width: 5.75rem;
  min-height: 2.2rem;
  padding: 0.5rem 1rem;

  border: 1px solid;
  border-width: 1px;
  border-style: solid;
  border-color: #4d4f50;
  border-radius: 4px;

  filter: unset;

  font-weight: bold;
  transition: all 0.2s ease;

  ${(props) =>
    props.color === 'primary' &&
    css`
      background-color: 'grey';
    `}

  ${(props) =>
    props.color === 'secondary' &&
    css`
      background-color: #add8e6;
    `}

  &:hover {
    opacity: 0.7;
    filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.15));
  }

  &:active {
    background-color: ${(props) =>
      props.color === 'primary' ? '#98959a' : '#247ed8'};
  }
`;
