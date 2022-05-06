import { FC } from "react";

import Content, { ContentProps } from "./Content";
import Failed, { FailedProps } from "./Failed";
import Option, { OptionProps } from "./Option";
import Success, { SuccessProps } from "./Success";

type FeedbackComponent = {
  Content: FC<ContentProps>;
  Option: FC<OptionProps>;
  Success: FC<SuccessProps>;
  Failed: FC<FailedProps>;
};

const Feedback: FeedbackComponent = {
  Content: Content,
  Option: Option,
  Success: Success,
  Failed: Failed,
};

export default Feedback;
