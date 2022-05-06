import { FC, FormEvent, useState } from "react";

import Loading from "~components/Loading";
import api from "~services/api";
import { feedbackTypes, FeedbackType } from "~utils/feedbackTypes";
import Image from "next/image";

import Button from "../Button";

export type ContentProps = {
  feedbackType: FeedbackType;
  onFeedbackRestart: () => void;
  onFeedbackSent: () => void;
};

const Content: FC<ContentProps> = ({
  feedbackType,
  onFeedbackRestart,
  onFeedbackSent,
}) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleSubmitFeedback = async (event: FormEvent) => {
    event.preventDefault();

    setIsSendingFeedback(true);

    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        comment,
        screenshot,
      });
    } catch (error: any) {
      console.log(error?.data?.message);
    } finally {
      setIsSendingFeedback(false);
    }

    onFeedbackSent();
  };

  return (
    <>
      <header>
        <Button.Back onBack={onFeedbackRestart} />

        <span className="text-xl leading-6 flex items-center gap-2">
          <Image
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6 flex items-center gap-2"
            width={24}
            height={24}
            priority
          />
          {feedbackTypeInfo.title}
        </span>

        <Button.Close />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que esta acontecendo..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <Button.Screenshot
            screenshot={screenshot}
            onScreenshot={(screenshot) => setScreenshot(screenshot)}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className="p-2 bg-brand-500 rounded border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed"
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
};

export default Content;
