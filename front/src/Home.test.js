import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';  
import Home from './Home';  
import Header from './Header';

test('renders the navigation links correctly', () => {
  render(
    <BrowserRouter> 
      <Home />
    </BrowserRouter>
  );

  const hommeLink = screen.getByText(/shop now/i);
  expect(hommeLink).toBeInTheDocument();
});


test('renders the Shop Now link correctly', () => {
  render(
    <BrowserRouter> 
      <Header />
    </BrowserRouter>
  );

 
});

