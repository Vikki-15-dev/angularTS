import { TypecastingPipe } from './typecasting.pipe';

describe('TypecastingPipe', () => {
  it('create an instance', () => {
    const pipe = new TypecastingPipe();
    expect(pipe).toBeTruthy();
  });
});
