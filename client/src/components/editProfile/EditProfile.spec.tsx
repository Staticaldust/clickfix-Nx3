import { render } from '@testing-library/react';

import EditProfile from './EditProfile';

describe('EditProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditProfile />);
    expect(baseElement).toBeTruthy();
  });
});
