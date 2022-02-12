import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App', () => {
    const { getByText } = render(<App />);

    expect(getByText('App')).toBeInTheDocument();
  });
});
