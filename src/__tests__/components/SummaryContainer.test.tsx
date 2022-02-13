import { render, screen } from '../test-utils';

import { SummaryContainer } from '../../components/SummaryContainer';

describe('Component NavBar', () => {
  it('render properly a summary container component on screen', () => {
    render(
      <SummaryContainer episodeSummary="When Buttercup loses the Professor's latest invention, she'll have to beat The Gangreen Gang at their own game to get it back." />,
    );

    const navBar = screen.getByTestId('summary-container-comp');

    expect(navBar).toBeInTheDocument();
  });
});
