import styled from 'styled-components';

export interface ButtonContainerProps {
  color: 'primary' | 'secondary';
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  min-width: 5.75rem;
  min-height: 2.2rem;
  padding: 0.5rem 1rem;
  border: 1px solid;
  filter: unset;
  border-radius: 4px;
  background: 'grey';

  border-color: 'black';
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.7;
    filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.15));
  }
`;
