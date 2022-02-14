import { render, screen } from '../test-utils';

import { TitleContainer } from '../../components/TitleContainer';

describe('Component NavBar', () => {
  it('should render properly a title container component on screen', () => {
    render(
      <TitleContainer
        title="Powerpuff Girls - a super hero TV show"
        subtitle="The Powerpuff Girls is an American superhero animated television series created by animator Craig McCracken"
      />,
    );

    const navBar = screen.getByTestId('title-container-comp');

    expect(navBar).toBeInTheDocument();
  });
});
