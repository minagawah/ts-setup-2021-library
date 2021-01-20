import { upperFirst, dude } from './index';

test('if "upperFirst" makes the first letter in upper case', () => {
  expect(upperFirst('joe')).toBe('Joe');
});

test('if "dude" greets', () => {
  expect(dude({ name: 'joe' })).toBe('Zup, Joe!');
});
