import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login Component', () => {
  test('renders the login form and submits', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText('Enter Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Password')).toBeInTheDocument();

    const signInButton = screen.getByRole('button', { name: /Sign In/i });
    expect(signInButton).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Enter Email Address'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(signInButton);
  });
});
