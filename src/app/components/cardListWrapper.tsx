import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

const CardListWrapper = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <div className="w-full block p-6 border border-neutral-800 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
          {title}
        </h5>
      </div>
      <div className="basis-1/2 p-4 rounded-lg border border-neutral-800 min-h-[44rem] ">
        {children}
      </div>
    </div>
  );
};

export default CardListWrapper;
