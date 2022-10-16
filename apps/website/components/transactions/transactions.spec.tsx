import { render } from '@testing-library/react';

import Transactions from './transactions';

describe('Transactions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Transactions />);
    expect(baseElement).toBeTruthy();
  });
});
