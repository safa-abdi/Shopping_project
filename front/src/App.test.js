import { render, screen } from '@testing-library/react';
import App from './App';


test('renders the home page', () => {
  render(<App />);
  
  const homeElement = screen.getByText(/Home/i); 
  expect(homeElement).toBeInTheDocument();
});