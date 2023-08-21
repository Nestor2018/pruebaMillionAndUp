import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CoinItem from '../src/components/listCoins/CoinItem';

describe('CoinItem Component', () => {
  const mockCoin = {
    symbol: 'BTC',
    name: 'Bitcoin',
    price_usd: '50000',
    percent_change_1h: 5,
  };

  it('should call onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(
      <CoinItem coin={mockCoin} onPress={mockOnPress} />,
    );

    const coinItem = getByTestId('coinItem');
    fireEvent.press(coinItem);

    expect(mockOnPress).toHaveBeenCalled();
  });

  it('should display the correct coin details', () => {
    const {getByText, getByTestId} = render(
      <CoinItem coin={mockCoin} onPress={() => {}} />,
    );

    expect(getByText('BTC')).toBeTruthy();
    expect(getByText('Bitcoin')).toBeTruthy();
    expect(getByText('$50000')).toBeTruthy();
    expect(getByText('5')).toBeTruthy();
  });
});
