import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { useNavigate } from 'react-router-dom';

import { TitleContainer } from '../../components/TitleContainer';
import { TableCustomStyles } from './TableOverrideStyles';
import LoadingSpinner from '../../components/LoadingSpinner';
// import { Button } from '../../components/Button';
import PpgCoverImage from '../../assets/ppg-cover-image.jpg';

import {
  Container,
  TableContainer,
  MainWrapper,
  CoverImageWrapper,
  ContentWrapper,
  TableWrapper,
  TitleWrapper,
} from './styles';

const columns = [
  {
    field: 'id',
    headerName: 'Number',
    width: 100,
    // headerAlign: 'center',
    sortable: false,
  },
  { field: 'episode', headerName: 'Episode', width: 100, sortable: false },
  {
    field: 'date',
    headerName: 'Date',
    width: 200,
    sortable: false,
  },
  { field: 'name', headerName: 'Name', width: 200, sortable: false },
];

const ppgEpisodes = [
  {
    id: '5',
    numero: '53',
    data: '02/01/2005',
    nome: 'Sideline Dad',
  },
  {
    id: '4',
    numero: '53',
    data: '02/01/2005',
    nome: 'Sideline Dad',
  },
  {
    id: '3',
    numero: '53',
    data: '02/01/2005',
    nome: 'Sideline Dad',
  },
  {
    id: '2',
    numero: '54',
    data: '11/02/2005',
    nome: 'The Oct-father',
  },
  {
    id: '1',
    numero: '55',
    data: '16/31/2003',
    nome: 'Drama Bomb',
  },
];

// type EpisodeProp = {
//   id: string;
//   episode: string;
//   date: string;
//   name: string;
// };

export default function Home() {
  const [tableData, setTableData] = useState<any>([]);

  // const navigate = useNavigate();

  useEffect(() => {
    const teste = ppgEpisodes.map((item) => {
      return {
        id: item.id,
        episode: item.numero,
        date: item.data,
        name: item.nome,
      };
    });

    setTableData(teste);
  }, []);

  function renderTable() {
    return (
      <TableContainer>
        <DataGrid
          rows={tableData}
          columns={columns}
          onRowClick={(params) => {
            // navigate('/details');
            console.log(`id:: ${params.row.id}`);
          }}
          pageSize={5}
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
      <MainWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <TitleContainer
              title="Powerpuff Girls"
              subtitle="The Powerpuff Girls is an American superhero animated television series created by animator Craig McCracky."
            />
          </TitleWrapper>

          <CoverImageWrapper>
            <img
              alt="Logo"
              width={260}
              height={370}
              src={PpgCoverImage}
              style={{ borderRadius: '5%' }}
            />
          </CoverImageWrapper>
        </ContentWrapper>

        <TableWrapper>
          {tableData ? renderTable() : <LoadingSpinner />}
        </TableWrapper>
      </MainWrapper>
    </Container>
  );
}
