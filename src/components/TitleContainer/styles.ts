import styled from 'styled-components';

export interface ItemProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 80%;

  align-items: center;
`;

export const TitleWrapper = styled.span`
  color: var(${({ theme }) => theme.colors.white});
  font-size: ${({ theme }) => theme.fontSize.xll};
  font-weight: bold;
  font-family: Domine;

  max-width: 70%;

  margin: 20px;
`;

export const SubtitleWrapper = styled.span`
  color: var(${({ theme }) => theme.colors.white});
  font-size: ${({ theme }) => theme.fontSize.sm};

  max-width: 70%;
  margin-top: 20px;
  font-weight: normal;
  text-align: center;
  font-style: oblique;
  line-height: 1.6;

  display: flex;
  flex-direction: column;
`;
