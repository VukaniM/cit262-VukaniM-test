const helloworld = require('../src/helloworld');

it('Says Hello Vukani', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  helloworld();
  expect(consoleSpy).toHaveBeenCalledWith('Hello Vukani');
});