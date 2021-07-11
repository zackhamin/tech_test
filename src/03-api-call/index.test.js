const fetchLukeSkywalker = require('.');
const axios = require("axios");

describe('fetchLukeSkywalker', () => {
  it('returns correct information about Luke Skywalker', async () => {
    const actualResult = await fetchLukeSkywalker();

    expect(actualResult).toMatchSnapshot();
  });
});
