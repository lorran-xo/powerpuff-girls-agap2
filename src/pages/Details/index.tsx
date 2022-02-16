import { useNavigate } from 'react-router-dom';

import { TitleContainer } from '../../components/TitleContainer';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Button } from '../../components/Button';
import { SummaryContainer } from '../../components/SummaryContainer';
import PpgCoverImage from '../../assets/ppg-cover-image.jpg';
import { getContext } from '../../context';

import {
  Container,
  MainWrapper,
  CoverImageWrapper,
  ContentWrapper,
  DescriptionWrapper,
  TitleWrapper,
  LoadingWrapper,
  ButtonWrapper,
} from './styles';

export default function Details() {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { appContext } = getContext();

  return (
    <Container>
      {appContext.clickedEpisodeData ? (
        <MainWrapper>
          <ContentWrapper>
            <TitleWrapper>
              <TitleContainer title={appContext?.clickedEpisodeData?.name} />
            </TitleWrapper>

            <CoverImageWrapper>
              <img
                alt="Logo"
                width={280}
                height={350}
                src={
                  appContext?.clickedEpisodeData?.image
                    ? appContext?.clickedEpisodeData?.image
                    : PpgCoverImage
                }
                style={{ borderRadius: '5%' }}
              />
            </CoverImageWrapper>
            <DescriptionWrapper>
              <SummaryContainer
                episodeSummary={appContext?.clickedEpisodeData?.summary}
              />

              <ButtonWrapper>
                <Button
                  label="Episode list"
                  color="secondary"
                  onClick={() => navigate('/')}
                />
              </ButtonWrapper>
            </DescriptionWrapper>
          </ContentWrapper>
        </MainWrapper>
      ) : (
        <LoadingWrapper>
          <LoadingSpinner />
        </LoadingWrapper>
      )}
    </Container>
  );
}
