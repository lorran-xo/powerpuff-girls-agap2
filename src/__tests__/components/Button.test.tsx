import { fireEvent, render, screen } from '../test-utils';

import { Button } from '../../components/Button';

describe('Component Button', () => {
  it('calls correct function on click', () => {
    const mockedOnClick = jest.fn();

    render(<Button label="Button" onClick={mockedOnClick} />);

    fireEvent.click(screen.getByTestId('button-comp'));

    expect(mockedOnClick).toHaveBeenCalled();
  });
});
