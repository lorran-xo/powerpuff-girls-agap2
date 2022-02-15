import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TitleContainer } from '../../components/TitleContainer';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Button } from '../../components/Button';
import { SummaryContainer } from '../../components/SummaryContainer';

import PpgCoverImage from '../../assets/ppg-cover-image.jpg';

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

export default function Home() {
  const [episodeData, setEpisodeData] = useState<any>([]);

  const navigate = useNavigate();

  useEffect(() => {
    setEpisodeData([1]);
    console.log(episodeData);
  }, []);

  return (
    <Container>
      {episodeData ? (
        <MainWrapper>
          <ContentWrapper>
            <TitleWrapper>
              <TitleContainer title="Total Eclipse Of The Kart, Parts 1 and 2" />
            </TitleWrapper>

            <CoverImageWrapper>
              <img
                alt="Logo"
                width={280}
                height={350}
                src={PpgCoverImage}
                style={{ borderRadius: '5%' }}
              />
            </CoverImageWrapper>
            <DescriptionWrapper>
              <SummaryContainer episodeSummary="When Buttercup loses the Professor's latest invention, she'll have to beat The Gangreen Gang at their own game to get it back." />

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
