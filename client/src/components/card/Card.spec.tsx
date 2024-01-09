import { render } from '@testing-library/react';

import Card from './Card';

describe('Categories', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();
  });
});
