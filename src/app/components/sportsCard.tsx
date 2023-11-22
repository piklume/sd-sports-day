'use client';

import { getTimeHourFromDateTime } from '../utils';
import Button from './button';

interface SportsCard {
  name: string;
  category: string;
  startTime: string;
  endTime: string;
}

const SportsCard = ({ name, category, startTime, endTime }: SportsCard) => {
  const start = getTimeHourFromDateTime(startTime);
  const end = getTimeHourFromDateTime(endTime);

  return (
    <div className="flex flex-col gap-2 group rounded-lg border border-neutral-800 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <h2 className={`mb-1 text-md font-semibold`}>
        {name}
        {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span> */}
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{category}</p>
      <span
        className={`m-0 max-w-[30ch] text-sm opacity-50`}
      >{`${start} - ${end}`}</span>
      <Button text="select" onClick={() => {}} />
    </div>
  );
};

export default SportsCard;
