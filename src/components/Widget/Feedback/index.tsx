import { FC } from "react";

import Content, { ContentProps } from "./Content";
import Option, { OptionProps } from "./Option";
import Success, { SuccessProps } from "./Success";

type FeedbackComponent = {
  Content: FC<ContentProps>;
  Option: FC<OptionProps>;
  Success: FC<SuccessProps>;
};

const Feedback: FeedbackComponent = {
  Content: Content,
  Option: Option,
  Success: Success,
};

export default Feedback;
