import { fireEvent, render, screen } from '../test-utils';

import { Button } from '../../components/Button';

describe('Component Button', () => {
  it('should render properly a button component on screen', () => {
    render(<Button label="Button" onClick={() => ({})} />);

    const button = screen.getByTestId('button-comp');

    expect(button).toBeInTheDocument();
  });

  it('should call onClick function on click', () => {
    const mockedOnClick = jest.fn();

    render(<Button label="Button" onClick={mockedOnClick} />);

    fireEvent.click(screen.getByTestId('button-comp'));

    expect(mockedOnClick).toHaveBeenCalled();
  });
});
