import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders a Home text and an icon', () => {
  const { getByText, getByTestId } = render(<Header />);
  const linkElement = getByText(/Home/i);
  const appIcon = getByTestId(/app-logo/i);

  expect(linkElement).toBeInTheDocument();
  expect(appIcon).toBeInTheDocument();
});

test('renders a String as child', () => {
  const { getByText } = render(<Header>Test String</Header>);
  const stringElement = getByText(/Test String/i);

  expect(stringElement).toBeInTheDocument();
});


test('renders any children component', () => {
  const TestComponent = () => <div data-testid="test-component">Test Component</div>

  const { getByText, getByTestId } = render(<Header><TestComponent/></Header>);
  const stringElement = getByText(/Test Component/i);
  const testComponent = getByTestId(/test-component/i);

  expect(stringElement).toBeInTheDocument();
  expect(testComponent).toBeInTheDocument();
});

