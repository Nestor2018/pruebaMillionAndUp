import React from 'react';
import {render} from '@testing-library/react-native';
import CoinMarketItem from '../src/components/coinMarketItem/CoinMarketItem';

describe('CoinMarketItem component', () => {
  const mockMarket = {
    name: 'Market Name',
    price_usd: '100',
  };

  it('renders correctly', () => {
    const {getByText} = render(<CoinMarketItem market={mockMarket} />);
    const nameElement = getByText(mockMarket.name);
    const priceElement = getByText(mockMarket.price_usd);
    expect(nameElement).toBeTruthy();
    expect(priceElement).toBeTruthy();
  });
});
