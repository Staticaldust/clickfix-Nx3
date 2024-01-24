import { render } from '@testing-library/react';

import TpDetails from './TpDetails';

describe('TpDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TpDetails />);
    expect(baseElement).toBeTruthy();
  });
});
