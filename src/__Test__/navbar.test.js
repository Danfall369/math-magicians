import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    const navTitle = screen.getByText('Math Magician');
    expect(navTitle).toBeInTheDocument();

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const calculatorLink = screen.getByText('Calculator');
    expect(calculatorLink).toBeInTheDocument();

    const quotesLink = screen.getByText('Quotes');
    expect(quotesLink).toBeInTheDocument();
  });
});
