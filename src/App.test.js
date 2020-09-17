import React from 'react';
import { render } from '@testing-library/react';
import GridExample from './GridExample';

const gridReady = (queryByTestId) => {
  return new Promise((resolve, reject) => {
    (function waitForGrid() {
      if (queryByTestId("grid-is-ready") !== null) {
        resolve();
      } else {
        console.log("waiting");
      }
      setTimeout(waitForGrid, 100)
    })();
  });
}

describe("the tests", () => {

  describe("headers", () => {
    test('renders all the headers', async () => {
      const { getByText, queryByTestId } = render(<GridExample />);
      await gridReady(queryByTestId);
      expect(getByText("Make")).toBeInTheDocument();  // PASS
      expect(getByText("Model")).toBeInTheDocument(); // PASS
      expect(getByText("Price")).toBeInTheDocument(); // FAIL
      expect(getByText("Color")).toBeInTheDocument(); // FAIL
    });
  });


  describe("data", () => {
    test('renders field for make', async () => {
      const { getByText, queryByTestId } = render(<GridExample />);
      await gridReady(queryByTestId);
      expect(getByText("Toyota")).toBeInTheDocument();
    });

    test('renders field for model', async () => {
      const { getByText, queryByTestId } = render(<GridExample />);
      await gridReady(queryByTestId);
      expect(getByText("Celica")).toBeInTheDocument();
    });

    test('renders field for price', async () => {
      const { getByText, queryByTestId } = render(<GridExample />);
      await gridReady(queryByTestId);
      expect(getByText("35000")).toBeInTheDocument();
    });

    test('renders field for color', () => {
      const { getByText, queryByTestId } = render(<GridExample />);
      await gridReady(queryByTestId);
      expect(getByText("blue")).toBeInTheDocument();
    });
  });

})
