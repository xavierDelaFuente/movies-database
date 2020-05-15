import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.jsx';

test('renders a Header and a Footer by default', () => {
  const { getByTestId } = render(<Layout />);
  
  const headerComponent = getByTestId(/header/i);
  const footerComponent = getByTestId(/footer/i);

  expect(headerComponent).toBeInTheDocument();
  expect(footerComponent).toBeInTheDocument();
});

test('can receive haeaderElements to render inside the Header', () => {
  const { getByText } = render(<Layout haeaderElements="Test Title" />);
  const stringElement = getByText(/Test Title/i);

  expect(stringElement).toBeInTheDocument();
});

test('renders a String as child', () => {
  const { getByText } = render(<Layout>Test String</Layout>);
  const stringElement = getByText(/Test String/i);

  expect(stringElement).toBeInTheDocument();
});


test('renders any children component', () => {
  const TestComponent = () => <div data-testid="test-component">Test Component</div>

  const { getByText, getByTestId } = render(<Layout><TestComponent/></Layout>);
  const stringElement = getByText(/Test Component/i);
  const testComponent = getByTestId(/test-component/i);

  expect(stringElement).toBeInTheDocument();
  expect(testComponent).toBeInTheDocument();
});
