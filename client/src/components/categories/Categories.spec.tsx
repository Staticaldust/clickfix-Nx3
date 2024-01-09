import { render } from '@testing-library/react';

import Ccategories from './Categories';

describe('Ccategories', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ccategories />);
    expect(baseElement).toBeTruthy();
  });
});
