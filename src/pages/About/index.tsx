import { TitleContainer } from '../../components/TitleContainer';
import { Button } from '../../components/Button';
import { SummaryContainer } from '../../components/SummaryContainer';
import Logo from '../../assets/logo192.png';

import {
  Container,
  MainWrapper,
  CoverImageWrapper,
  ContentWrapper,
  DescriptionWrapper,
  TitleWrapper,
  ButtonWrapper,
} from './styles';

export default function About() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore

  return (
    <Container>
      <MainWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <TitleContainer title="About" />
          </TitleWrapper>

          <CoverImageWrapper>
            <img
              className="App-logo"
              alt="Logo"
              width={280}
              height={350}
              src={Logo}
              style={{ borderRadius: '5%' }}
            />
          </CoverImageWrapper>
          <DescriptionWrapper>
            <SummaryContainer episodeSummary="This application was developed by Lorran Oliveira and its repository with all the information and read-me documentation can be found on GitHub." />

            <ButtonWrapper>
              <Button
                label="Go to repository"
                color="primary"
                onClick={() =>
                  window.open(
                    'https://github.com/lorran-xo/powerpuff-girls-agap2',
                  )
                }
              />
            </ButtonWrapper>
          </DescriptionWrapper>
        </ContentWrapper>
      </MainWrapper>
    </Container>
  );
}
