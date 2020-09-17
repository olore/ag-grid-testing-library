import React from 'react';
import { render } from '@testing-library/react';
import GridExample from './GridExample';

// THIS FAILS
// Unable to find an element with the text: Ford
test('renders field for make', () => {
  const { getByText } = render(<GridExample />);
  expect(getByText("Ford")).toBeInTheDocument();
});

// THIS FAILS
// Unable to find an element with the text: 72000
test('renders field for price', () => {
  const { getByText } = render(<GridExample />);
  expect(getByText("72000")).toBeInTheDocument();
});


// THIS PASSES 
test('renders field for model', () => {
  const { getByText } = render(<GridExample />);
  expect(getByText("Boxter")).toBeInTheDocument();
});