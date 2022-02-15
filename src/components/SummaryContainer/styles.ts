import styled from 'styled-components';

export interface ItemProps {
  selected: boolean;
}

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const SummaryText = styled.h3`
  color: var(${({ theme }) => theme.colors.white});

  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: normal;
  text-align: flex-start;
  font-style: oblique;
`;
