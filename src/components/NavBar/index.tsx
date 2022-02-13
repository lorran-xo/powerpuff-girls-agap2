import { useState } from 'react';
// import { MdHome } from 'react-icons/md';
// import { BsInfoCircleFill } from 'react-icons/bs';

import { Container, ItemWrapper, OptionText } from './styles';
// IconWrapper

interface NavProps {
  titleOptionOne: string;
  titleOptionTwo: string;
  clickOptOne: () => void;
  clickOptTwo: () => void;
}

export function NavBar({
  titleOptionOne,
  titleOptionTwo,
  clickOptOne,
  clickOptTwo,
}: NavProps) {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  function handleOptionOne() {
    // when clicking on the first nav-bar option, call its function and change selection style.
    clickOptOne();
    setSelectedOption(1);
  }

  function handleOptionTwo() {
    // when clicking on the second nav-bar option, call its function and change selection style.
    clickOptTwo();
    setSelectedOption(2);
  }

  return (
    <Container data-testid="navbar-comp">
      <ItemWrapper onClick={() => handleOptionOne()}>
        {/* <IconWrapper>
          <MdHome />
        </IconWrapper> */}
        <OptionText selected={selectedOption === 1}>
          {titleOptionOne}
        </OptionText>
      </ItemWrapper>

      <ItemWrapper onClick={() => handleOptionTwo()}>
        {/* <IconWrapper>
          <BsInfoCircleFill />
        </IconWrapper> */}

        <OptionText selected={selectedOption === 2}>
          {titleOptionTwo}
        </OptionText>
      </ItemWrapper>
    </Container>
  );
}
