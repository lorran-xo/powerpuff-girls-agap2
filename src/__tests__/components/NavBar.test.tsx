import { render, screen } from '../test-utils';

import { NavBar } from '../../components/NavBar';

describe('Component NavBar', () => {
  it('render properly a nav bar component on screen', () => {
    render(
      <NavBar
        titleOptionOne="Home"
        titleOptionTwo="About"
        clickOptOne={() => ({})}
        clickOptTwo={() => ({})}
      />,
    );

    const navBar = screen.getByTestId('navbar-comp');

    expect(navBar).toBeInTheDocument();
  });
});
