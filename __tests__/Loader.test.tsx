import React from 'react';
import { render } from '@testing-library/react-native';
import Loader from '../src/components/loader/Loader';

describe('Loader Component', () => {
  it('should render the Loader component', () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId('loader');
    
    expect(loader).toBeTruthy();
  });
});
