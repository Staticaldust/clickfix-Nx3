import { render } from '@testing-library/react';

import Cardprofile from './cardprofile';

describe('Cardprofile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cardprofile />);
    expect(baseElement).toBeTruthy();
  });
});
