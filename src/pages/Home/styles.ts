import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 85vh;
  width: 93%;
  margin-left: 3.5%;
  background-color: #5d7d88;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10%;
`;

export const CoverImageWrapper = styled.div`
  align-items: flex-end;

  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 1px 6px rgb(255, 155, 157));
  }
`;

export const ButtonWrapper = styled.div`
  /* background: yellow; */
  /* padding: 20px; */
`;

export const TableWrapper = styled.div``;
