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
  max-width: 60%;
  font-weight: bold;
  font-family: Domine;
`;

export const SubtitleWrapper = styled.h3`
  color: var(${({ theme }) => theme.colors.white});

  font-size: ${({ theme }) => theme.fontSize.md};
  max-width: 60%;
  margin-top: 20px;
  font-weight: normal;
  text-align: center;
`;
