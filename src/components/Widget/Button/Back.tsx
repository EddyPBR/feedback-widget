import type { FC } from "react";

import { ArrowLeft } from "phosphor-react";

export type BackProps = {
  onBack: () => void;
};

const Back: FC<BackProps> = ({ onBack }) => {
  return (
    <button
      type="button"
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      onClick={onBack}
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  );
};

export default Back;
