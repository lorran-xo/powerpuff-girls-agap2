import styled from 'styled-components';

export interface ItemProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.h2`
  color: var(${({ theme }) => theme.colors.white});

  font-size: ${({ theme }) => theme.fontSize.xll};
  max-width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export const SubtitleWrapper = styled.h3`
  color: var(${({ theme }) => theme.colors.white});

  font-size: ${({ theme }) => theme.fontSize.sm};
  max-width: 60%;
  margin-top: 20px;
  font-weight: normal;
  text-align: center;
`;
