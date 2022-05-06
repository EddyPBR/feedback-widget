import { FC, useState } from "react";

import { FeedbackType } from "~utils/feedbackTypes";

import Feedback from "./Feedback";

export type FeedbackStatus = "SUCCESS" | "FAILED";

const Form: FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<FeedbackStatus | null>(null);

  const handleRestartFeedback = () => {
    setFeedbackSent(null);
    setFeedbackType(null);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent !== null ? (
        feedbackSent === "SUCCESS" ? (
          <Feedback.Success onFeedbackRestartRequest={handleRestartFeedback} />
        ) : (
          <Feedback.Failed onFeedbackRestartRequest={handleRestartFeedback} />
        )
      ) : (
        <>
          {feedbackType ? (
            <Feedback.Content
              feedbackType={feedbackType}
              onFeedbackRestart={handleRestartFeedback}
              onFeedbackSent={(status: FeedbackStatus) =>
                setFeedbackSent(status)
              }
            />
          ) : (
            <Feedback.Option onFeedbackTypeChange={setFeedbackType} />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ❤ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};

export default Form;
