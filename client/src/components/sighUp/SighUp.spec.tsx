import { render } from '@testing-library/react';

import SighUp from './SighUp';

describe('SighUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SighUp />);
    expect(baseElement).toBeTruthy();
  });
});
