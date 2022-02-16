import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { TitleContainer } from '../../components/TitleContainer';
import LoadingSpinner from '../../components/LoadingSpinner';
import { TableCustomStyles } from './TableOverrideStyles';
import PpgCoverImage from '../../assets/ppg-cover-image.jpg';
import { getContext } from '../../context';

import {
  Container,
  TableContainer,
  MainWrapper,
  LoadingWrapper,
  CoverImageWrapper,
  ContentWrapper,
  DescriptionContainer,
  TableWrapper,
} from './styles';

const columns = [
  {
    field: 'number',
    headerName: 'Episode',
    width: 100,
  },

  { field: 'season', headerName: 'Season', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    sortable: false,
  },

  {
    field: 'airdate',
    headerName: 'Air date',
    width: 200,
  },
];

type EpisodeProp = {
  id: number;
  image: { medium: string };
  name: string;
  season: number;
  number: number;
  airdate: string;
  summary: string;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { appContext, setAppContext } = getContext();

  useEffect(() => {
    if (!appContext?.tableData || !appContext?.headerData) {
      // Once the data are loaded and persistent on LocalStorage and Context,
      // it will only call the breakpoints again if the user loses it by cleaning localStorage / Context
      setIsLoading(true);
      getTvShowData();
    }
  }, []);

  async function getTvShowData() {
    try {
      const [tvShowResponse, episodeResponse] = await axios.all([
        axios.get('https://api.tvmaze.com/shows/6771'),
        axios.get('https://api.tvmaze.com/shows/6771/episodes'),
      ]);

      const reducedEpisodesData = episodeResponse.data.map(
        (item: EpisodeProp, index: number) => {
          return {
            id: index,
            idEpisode: item.id,
            image: item.image ? item.image.medium : null,
            name: item.name,
            season: item.season,
            number: item.number,
            airdate: item.airdate,
            summary: item.summary,
          };
        },
      );

      setAppContext({
        headerData: {
          ...tvShowResponse.data,
        },
        tableData: {
          reducedEpisodesData,
        },
      });
    } catch (error) {
      console.log('An error ocurred', error);
    } finally {
      setIsLoading(false);
    }
  }

  function renderTable() {
    return (
      <TableContainer>
        <DataGrid
          rows={appContext?.tableData?.reducedEpisodesData || []}
          columns={columns}
          onRowClick={(param) => {
            setAppContext({
              ...appContext,
              clickedEpisodeData: {
                ...appContext.tableData.reducedEpisodesData[param.row.id],
              },
            });
            navigate('/details');
          }}
          pageSize={5}
          rowsPerPageOptions={[5]}
          sx={TableCustomStyles}
          density="comfortable"
          disableSelectionOnClick
          disableColumnSelector
          disableColumnFilter
          disableColumnMenu
        />
      </TableContainer>
    );
  }

  return (
    <Container>
      {isLoading ? (
        <LoadingWrapper>
          <LoadingSpinner />
        </LoadingWrapper>
      ) : (
        <MainWrapper>
          <ContentWrapper>
            <CoverImageWrapper>
              <img
                alt="Logo"
                width={280}
                height={350}
                src={
                  appContext?.headerData?.image
                    ? appContext.headerData.image.medium
                    : PpgCoverImage
                }
                style={{ borderRadius: '5%' }}
              />
            </CoverImageWrapper>
            <DescriptionContainer>
              <TitleContainer
                title={appContext?.headerData?.name}
                subtitle={appContext?.headerData?.summary}
              />
            </DescriptionContainer>
          </ContentWrapper>
          <TableWrapper>{renderTable()}</TableWrapper>
        </MainWrapper>
      )}
    </Container>
  );
}
