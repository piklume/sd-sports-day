"use client";

import { MouseEventHandler } from "react";

import Button from "./button";
import { SportsCard as SportsCardType } from "../types";
import { getTimeHourFromDateTime } from "../utils";

interface Props {
  card: SportsCardType;
  onClick: Function;
  ctaText: string;
  isDisabled?: boolean;
}

const SportsCard = ({ card, onClick, ctaText, isDisabled = false }: Props) => {
  const { id, name, category, startTime, endTime } = card;

  const start = getTimeHourFromDateTime(startTime);
  const end = getTimeHourFromDateTime(endTime);

  const onButtonClick = () => {
    onClick(card);
  };

  return (
    <div
      id={`${id}`}
      className={`flex flex-col justify-between gap-2 group rounded-lg border border-neutral-800 px-5 py-4 transition-colors
      ${isDisabled ? "" : "hover:border-gray-300 hover:bg-gray-100"}`}
    >
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
      <Button
        text={ctaText}
        onClick={
          onButtonClick as MouseEventHandler<HTMLButtonElement> | undefined
        }
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default SportsCard;
