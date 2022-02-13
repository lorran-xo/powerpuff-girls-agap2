import styled from 'styled-components';

export interface ItemProps {
  selected: boolean;
}

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  color: #4d4f50;
  font-size: 16px;
  width: 35%;
  padding: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubtitleWrapper = styled.div`
  color: #98959a;
  font-size: 12px;
  width: 25%;
  padding: 5px;
`;
