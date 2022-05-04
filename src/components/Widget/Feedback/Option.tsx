import type { FC } from "react";

import { feedbackTypes, FeedbackType } from "~utils/feedbackTypes";
import Image from "next/image";

import Button from "../Button";

export type OptionProps = {
  onFeedbackTypeChange: (type: FeedbackType) => void;
};

const Option: FC<OptionProps> = ({ onFeedbackTypeChange }) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <Button.Close />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              type="button"
              onClick={() => onFeedbackTypeChange(key as FeedbackType)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            >
              <Image
                src={value.image.source}
                alt={value.image.alt}
                width={40}
                height={40}
                priority
              />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Option;
