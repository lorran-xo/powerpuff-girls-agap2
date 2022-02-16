import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 93%;
  margin-left: 4%;
  background-color: #3d525a;
  border-radius: 1%;
`;

export const MainWrapper = styled.section`
  margin: 7%;
`;

export const LoadingWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding: 200px;
  text-align: center;
`;

export const CoverImageWrapper = styled.div`
  max-width: 30%;
  padding-left: 7%;

  margin: 2%;

  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 1px 6px rgb(255, 155, 157));
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TableContainer = styled.div`
  height: 400px;
  width: 750px;
`;

export const TableWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const DescriptionContainer = styled.span`
  padding: 15px;
`;
