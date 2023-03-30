import React from 'react';
import { render } from '@testing-library/react';
import BoxList from './BoxList';

test('renders BoxList component without crashing', () => {
  render(<BoxList />);
});