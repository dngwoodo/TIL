import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders Profile', () => {
    const { getByText } = render(<App />);

    expect(getByText('Profile')).toBeInTheDocument();
  });
});
