import React from 'react';
import { render } from '@testing-library/react';
import GridExample from './GridExample';

describe('the tests', () => {

  test('renders field for make', async () => {
    const { getByText } = render(<GridExample />);
    expect(getByText("Ford")).toBeInTheDocument();
  });

  test('renders field for price', async () => {
    const { getByText } = render(<GridExample />);
    expect(getByText("72000")).toBeInTheDocument();
  });

  test('renders field for model', async () => {
    const { getByText } = render(<GridExample />);
    expect(getByText("Boxter")).toBeInTheDocument();
  });

  // test('renders field for color', () => {
  //   const { getByText } = render(<GridExample />);
  //   expect(getByText("blue")).toBeInTheDocument();
  // });

})