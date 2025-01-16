import { render, screen, waitFor } from '@testing-library/react';
import Aboutus from './Aboutus';
import { BrowserRouter } from 'react-router-dom';

describe('Aboutus', () => {
  test('renders Aboutus component with the expected elements', async () => {
    render(
      <BrowserRouter>
        <Aboutus />
      </BrowserRouter>
    );

    const quote = screen.getByText(/Thanks to Graffiti, there is no reason to buy Product on Amazon anymore./i);
    expect(quote).toBeInTheDocument();

    const paragraph = screen.getByText(/Welcome to our online store of personalized products!/i);
    expect(paragraph).toBeInTheDocument();
  });
});
