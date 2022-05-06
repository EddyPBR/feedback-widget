import { FC } from "react";

import { CircleNotch } from "phosphor-react";

const Loading: FC = () => {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
    </div>
  );
};

export default Loading;
