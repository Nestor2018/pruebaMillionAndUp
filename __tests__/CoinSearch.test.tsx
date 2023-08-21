import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CoinSearch from '../src/components/coinSearch/CoinSearch';

describe('CoinSearch Component', () => {
  it('should call onChange when text is entered', () => {
    const mockOnChange = jest.fn();
    const {getByTestId} = render(<CoinSearch onChange={mockOnChange} />);
    const mockText = 'bitcoin';

    const input = getByTestId('input');
    fireEvent.changeText(input, mockText);

    expect(mockOnChange).toHaveBeenCalledWith(mockText);
  });
});
