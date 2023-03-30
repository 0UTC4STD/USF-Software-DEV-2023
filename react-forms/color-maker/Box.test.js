import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('renders Box component without crashing', () => {
  const boxProps = {
    id: 1,
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
  };
  render(<Box {...boxProps} />);
});

test('Box component matches snapshot', () => {
  const boxProps = {
    id: 1,
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
  };
  const { container } = render(<Box {...boxProps} />);
  expect(container).toMatchSnapshot();
});