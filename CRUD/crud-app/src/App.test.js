import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hii/);
  console.log(linkElement.innerHTML);
  expect(linkElement.innerHTML).toBe('hii');
});
