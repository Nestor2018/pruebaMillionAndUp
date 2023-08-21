import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import ListCoins from '../src/components/listCoins/ListCoins';
import * as coinsApi from '../src/api/coins';

const mockCoins = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price_usd: '50000',
    percent_change_1h: 5,
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price_usd: '3000',
    percent_change_1h: -2,
  },
];

// Mock del navigation props
const mockNavigation = { navigate: jest.fn() };

describe('ListCoins Component', () => {
  beforeEach(() => {
    jest.spyOn(coinsApi, 'get').mockResolvedValue({ data: mockCoins });
  });

  it('should filter coins correctly', async () => {
    const { getByTestId, queryByText } = render(
      <ListCoins navigation={mockNavigation} />
    );

    // Espera a que los datos se carguen y el componente se actualice
    await act(async () => {
      await Promise.resolve();
    });

    // Filtra las monedas por nombre
    const coinSearchInput = getByTestId('input');
    act(() => {
      fireEvent.changeText(coinSearchInput, 'Bitcoin');
    });

    // Solo Bitcoin debería ser visible
    expect(queryByText('Bitcoin')).toBeTruthy();
    expect(queryByText('Ethereum')).toBeNull();
  });
});

