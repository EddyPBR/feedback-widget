import { FC } from "react";

import Back, { BackProps } from "./Back";
import Close from "./Close";
import Screenshot, { ScreenshotProps } from "./Screenshot";

type FeedbackComponent = {
  Back: FC<BackProps>;
  Close: FC;
  Screenshot: FC<ScreenshotProps>;
};

const Button: FeedbackComponent = {
  Back: Back,
  Close: Close,
  Screenshot: Screenshot,
};

export default Button;
