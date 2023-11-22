'use client';

import { useContext, useEffect } from 'react';
import { SportsCard } from '../types';
import { CardSelectionContext } from '../context/cardSelectionContext';
import AvailableCards from './availableCards';
import SelectedCards from './selectedCards';

interface Props {
  sportsEventList: SportsCard[];
}

const MainContent = ({ sportsEventList }: Props) => {
  const { setAvailableCards } = useContext(CardSelectionContext);

  useEffect(() => {
    setAvailableCards(sportsEventList);
  }, [sportsEventList, setAvailableCards]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-[44rem] w-full gap-4">
        <AvailableCards />
        <SelectedCards />
      </div>
    </main>
  );
};

export default MainContent;
