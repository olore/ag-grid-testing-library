# Help me fix this problem

```
npm install
npm run test
```

There is 1 passing and 2 failing tests in [App.test.js](./src/App.test.js).

I can't figure out why one column of data (Model) is rendered, but Make and Price are not.

## Other info
* `npm run start` will show you what the table looks like.

* Here is more info on masterDetail option in ag-grid https://www.ag-grid.com/javascript-grid-master-detail/

* What I thought at first was a loading/timing thing is clearly not, because the test can always find data for the first 2 columns

* Branch `onGridReady` tries to wait until the grid is ready similar to how it is described here https://www.ag-grid.com/javascript-grid-testing-react/