import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 93%;
  margin-left: 4%;
  background-color: #3d525a;
  border-radius: 2%;
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10%;
`;

export const TitleWrapper = styled.div`
  margin-top: -10%;
`;

export const CoverImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2%;

  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 1px 6px rgb(255, 155, 157));
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const TableContainer = styled.div`
  height: 400px;
  width: 615px;
`;

export const TableWrapper = styled.div`
  margin: 2%;
`;
