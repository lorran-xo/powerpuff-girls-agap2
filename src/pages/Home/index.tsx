import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { TitleContainer } from '../../components/TitleContainer';
import LoadingSpinner from '../../components/LoadingSpinner';
import { TableCustomStyles } from './TableOverrideStyles';
import PpgCoverImage from '../../assets/ppg-cover-image.jpg';

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
  const [tableData, setTableData] = useState<any>([]);
  const [tvShowData, setTvShowData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<any>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!tableData.length && !tvShowData.length) {
      getTvShowData();
    }
  }, [tableData]);

  async function getTvShowData() {
    setIsLoading(true);

    try {
      const [tvShowResponse, episodeResponse] = await axios.all([
        axios.get('https://api.tvmaze.com/shows/6771'),
        axios.get('https://api.tvmaze.com/shows/6771/episodes'),
      ]);

      const reducedEpisodesData = episodeResponse.data.map(
        (item: EpisodeProp) => {
          return {
            id: item.id,
            // image: item.image,
            name: item.name,
            season: item.season,
            number: item.number,
            airdate: item.airdate,
            // summary: item.summary,
          };
        },
      );

      setTvShowData(tvShowResponse.data);
      setTableData(reducedEpisodesData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function renderTable() {
    return (
      <TableContainer>
        <DataGrid
          rows={tableData}
          columns={columns}
          onRowClick={(params) => {
            navigate('/details');
            console.log(`id:: ${params.row.id}`);
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
                src={PpgCoverImage}
                style={{ borderRadius: '5%' }}
              />
            </CoverImageWrapper>
            <DescriptionContainer>
              <TitleContainer
                title={tvShowData.name}
                subtitle={tvShowData.summary}
              />
            </DescriptionContainer>
          </ContentWrapper>
          <TableWrapper>{renderTable()}</TableWrapper>
        </MainWrapper>
      )}
    </Container>
  );
}
