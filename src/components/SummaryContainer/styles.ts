import styled from 'styled-components';

export interface ItemProps {
  selected: boolean;
}

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const SummaryText = styled.div`
  color: var(${({ theme }) => theme.colors.primaryHover});
  font-size: ${({ theme }) => theme.fontSize.xs};
  width: 25%;
  padding: 5px;

  overflow: hidden;
  text-overflow: ellipsis;
`;
