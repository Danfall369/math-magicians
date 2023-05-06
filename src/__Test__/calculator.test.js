import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  test('renders correctly', () => {
    const { container } = render(<Calculator />);
    expect(container.querySelector('.calc-title')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
