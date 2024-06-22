// forEach.test.jsn
const { forEach } = require('../src/forEach');

test('forEach calls the callback', () => {
  const mockCallback = jest.fn();
  forEach([0, 1], mockCallback);

  // Assert that the mock function was called
  expect(mockCallback.mock.calls.length).toBe(2);
});