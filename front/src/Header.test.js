import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import Header from './Header';

test('renders the logo and navigation links correctly', () => {
  render(
    <BrowserRouter> 
      <Header />
    </BrowserRouter>
  );

  // Test if logo is displayed
  const logo = screen.getByText(/Home/i);
  expect(logo).toBeInTheDocument();

  // Test if "Home" link is rendered
  const homeLink = screen.getByText(/About Us/i);
  expect(homeLink).toBeInTheDocument();

  // Test if "About Us" link is rendered
  const aboutUsLink = screen.getByText(/Contact Us/i);
  expect(aboutUsLink).toBeInTheDocument();

  // Test if "Contact us" link is rendered
  const contactLink = screen.getByText(/Shop/i);
  expect(contactLink).toBeInTheDocument();

  // Test if "shop" dropdown is rendered
  const shopDropdown = screen.getByText(/Account/i);
  expect(shopDropdown).toBeInTheDocument();

});
