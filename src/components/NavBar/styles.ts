import styled, { css } from 'styled-components';

export interface ItemProps {
  selected: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin: 10px;

  flex-direction: row;
  align-items: center;
`;

export const ItemWrapper = styled.button<ItemProps>`
  cursor: pointer;

  padding: 3px;
  border-width: 1px;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 5px;

  background-color: ${(props) => (props.selected ? '#add8e6' : '#e5e4e2')};

  font-size: 10px;
  color: #4d4f50;
`;

export const OptionText = styled.span`
  font-weight: 700;
`;

export const IconWrapper = styled.div`
  padding: 2px;
`;

export const ContainerWrapper = styled.div`
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
