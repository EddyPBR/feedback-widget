import type { FC } from "react";

export type FailedProps = {
  onFeedbackRestartRequest: () => void;
};

import Button from "../Button";

const Failed: FC<FailedProps> = ({ onFeedbackRestartRequest }) => {
  return (
    <>
      <header>
        <Button.Close />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36 32C36 34.209 34.209 36 32 36H4C1.791 36 0 34.209 0 32V4C0 1.791 1.791 0 4 0H32C34.209 0 36 1.791 36 4V32Z"
            fill="#EE3939"
          />
          <path
            d="M21.529 18.006L29.767 9.76799C30.744 8.79199 30.744 7.20899 29.767 6.23299C28.79 5.25599 27.208 5.25599 26.232 6.23299L17.994 14.471L9.75601 6.23299C8.78001 5.25599 7.19601 5.25599 6.22101 6.23299C5.24401 7.20899 5.24401 8.79199 6.22101 9.76799L14.459 18.006L6.20101 26.264C5.22401 27.241 5.22401 28.823 6.20101 29.799C6.68901 30.287 7.32901 30.531 7.96901 30.531C8.60901 30.531 9.24901 30.287 9.73701 29.799L17.995 21.54L26.233 29.778C26.721 30.266 27.361 30.51 28.001 30.51C28.641 30.51 29.28 30.266 29.769 29.778C30.746 28.801 30.746 27.219 29.769 26.243L21.529 18.006V18.006Z"
            fill="white"
          />
        </svg>

        <span className="text-xl mt-2">Falha ao enviar feedback :(</span>

        <button
          type="button"
          onClick={onFeedbackRestartRequest}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed"
        >
          Tentarei novamente
        </button>
      </div>
    </>
  );
};

export default Failed;
