import React from 'react';
import { render } from '@testing-library/react';
import GridExample from './GridExample';

describe("the tests", () => {

  describe("headers", () => {
    test('renders all the headers', async () => {
      const { getByText } = render(<GridExample />);
      expect(getByText("Make")).toBeInTheDocument();
      expect(getByText("Model")).toBeInTheDocument();
      expect(getByText("Price")).toBeInTheDocument();
      expect(getByText("Color")).toBeInTheDocument();
    });
  });

  describe("data", () => {
    test('renders field for make', async () => {
      const { getByText } = render(<GridExample />);
      expect(getByText("Toyota")).toBeInTheDocument();
    });

    test('renders field for model', async () => {
      const { getByText } = render(<GridExample />);
      expect(getByText("Celica")).toBeInTheDocument();
    });

    test('renders field for price', async () => {
      const { getByText } = render(<GridExample />);
      expect(getByText("35000")).toBeInTheDocument();
    });

    test('renders field for color', () => {
      const { getByText } = render(<GridExample />);
      expect(getByText("blue")).toBeInTheDocument();
    });
  });

})