import styled, { css } from 'styled-components';

export interface ItemProps {
  selected: boolean;
}

export const Container = styled.div`
  margin: 1%;

  flex-direction: row;
  align-items: center;
`;

export const ItemWrapper = styled.span`
  cursor: pointer;

  padding: 3px;
  margin-left: 10px;
  margin-top: 5px;

  font-size: 10px;
`;

export const OptionText = styled.span<ItemProps>`
  font-weight: 700;
  font-size: 15px;

  color: ${(props) => (props.selected ? '#ff9b9d' : '#ffff')};

  // double clicking on the navbar was selecting the options and making them weird so those below are to disable selections:

  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed, currently supported by Chrome, Edge, Opera and Firefox */
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
