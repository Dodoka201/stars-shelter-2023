import { User } from './user';

describe('user', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
