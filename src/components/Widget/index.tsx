import type { FC } from "react";

import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

import Form from "./Form";

const Widget: FC = () => {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <Form />
      </Popover.Panel>

      <Popover.Button
        type="button"
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};

export default Widget;
