import { useNavigate } from 'react-router-dom';

// import { MdExpandLess } from 'react-icons/md';

import { TitleContainer } from '../../components/TitleContainer';
import { Button } from '../../components/Button';

import PpgCoverImage from '../../assets/ppg-cover-image.jpg';

import {
  Container,
  TitleWrapper,
  CoverImageWrapper,
  ButtonWrapper,
  // TableWrapper,
} from './styles';

export default function Home() {
  const navigate = useNavigate();

  // const ppgEpisodes = [
  //   {
  //     id: '3',
  //     number: '53',
  //     date: '02/01/2005',
  //     name: 'Sideline Dad',
  //   },
  //   {
  //     id: '2',
  //     number: '54',
  //     date: '11/02/2005',
  //     name: 'The Oct-father',
  //   },
  //   {
  //     id: '2',
  //     number: '55',
  //     date: '16/31/2005',
  //     name: 'Drama Bomb',
  //   },
  // ];

  // function renderTable() {
  //   return (
  //     <div>
  //       <table>
  //         <caption>List of episodes</caption>
  //         <thead>
  //           <tr>
  //             <th>Number</th>
  //             <th>Date</th>
  //             <th>Name</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {ppgEpisodes.map((episodes) => (
  //             <tr key={episodes.id}>
  //               <td>{episodes.number}</td>
  //               <td>{episodes.date}</td>
  //               <td>{episodes.name}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // }

  return (
    <Container>
      <TitleWrapper>
        <CoverImageWrapper>
          <img
            alt="Logo"
            width={240}
            height={350}
            src={PpgCoverImage}
            style={{ borderRadius: '5%' }}
          />
        </CoverImageWrapper>

        <TitleContainer
          title="Powerpuff Girls"
          subtitle="The Powerpuff Girls is an American superhero animated television series created by animator Craig McCracky."
        />
      </TitleWrapper>

      <ButtonWrapper>
        <Button
          label="Episodes"
          color="secondary"
          onClick={() => navigate('/details')}
        />
      </ButtonWrapper>

      {/*
        <MdExpandLess />
        <TableWrapper>{renderTable()}</TableWrapper>
      */}
    </Container>
  );
}
