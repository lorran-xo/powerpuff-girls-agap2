import styled from 'styled-components';

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

  &:hover {
    filter: drop-shadow(0px 1px 1px rgb(255, 155, 157));
  }
`;

export const OptionText = styled.span<ItemProps>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.sm};

  color: ${(props) =>
    props.selected ? 'var(--pink-100)' : 'var(--neutral-0)'};

  // double clicking on the navbar was selecting the options and making them weird so those below are to disable selections:

  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed, currently supported by Chrome, Edge, Opera and Firefox */
`;
