import { FC, FormEvent, FormEventHandler, useState } from "react";

import { Popover } from "@headlessui/react";
import { feedbackTypes, FeedbackType } from "~utils/feedbackTypes";
import html2canvas from "html2canvas";
import Image from "next/image";
import {
  ArrowLeft,
  Camera,
  ChatTeardropDots,
  CircleNotch,
  Trash,
  X,
} from "phosphor-react";

const { Panel, Button } = Popover;

type FeedbackTypeProps = {
  onFeedbackTypeChange: (type: FeedbackType) => void;
};

type FeedbackContentProps = {
  feedbackType: FeedbackType;
  onFeedbackRestart: () => void;
  onFeedbackSent: () => void;
};

type BackButtonProps = {
  onBack: () => void;
};

type FeedbackSuccessProps = {
  onFeedbackRestartRequest: () => void;
};

type ScreenshotButtonProps = {
  screenshot: string | null;
  onScreenshot: (screenshot: string | null) => void;
};

type FormComponent = FC;
type CloseButtonComponent = FC;
type FeedbackTypeComponent = FC<FeedbackTypeProps>;
type FeedbackContentComponent = FC<FeedbackContentProps>;
type BackButtonComponent = FC<BackButtonProps>;
type ScreenshotButtonComponent = FC<ScreenshotButtonProps>;
type FeedbackSuccessComponent = FC<FeedbackSuccessProps>;
type WidgetComponent = FC & {
  Form: FormComponent;
  CloseButton: CloseButtonComponent;
  FeedbackType: FeedbackTypeComponent;
  FeedbackContent: FeedbackContentComponent;
  FeedbackSuccess: FeedbackSuccessComponent;
  BackButton: BackButtonComponent;
  ScreenshotButton: ScreenshotButtonComponent;
};

const Widget: WidgetComponent = () => {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Panel>
        <Form />
      </Panel>

      <Button
        type="button"
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2" />
          Feedback
        </span>
      </Button>
    </Popover>
  );
};

const Form: FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccess onFeedbackRestartRequest={handleRestartFeedback} />
      ) : (
        <>
          {feedbackType ? (
            <FeedbackContent
              feedbackType={feedbackType}
              onFeedbackRestart={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          ) : (
            <FeedbackType onFeedbackTypeChange={setFeedbackType} />
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
Widget.Form = Form;

const CloseButton: FC = () => {
  return (
    <Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Fechar formulário de feedback"
    >
      <X weight="bold" className="w-4 h-4" />
    </Button>
  );
};
Widget.CloseButton = CloseButton;

const BackButton: BackButtonComponent = ({ onBack }) => {
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
Widget.BackButton = BackButton;

const FeedbackType: FeedbackTypeComponent = ({ onFeedbackTypeChange }) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
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
Widget.FeedbackType = FeedbackType;

const FeedbackSuccess: FeedbackSuccessComponent = ({
  onFeedbackRestartRequest,
}) => {
  return (
    <>
      <header>
        <CloseButton />
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
            d="M38.5 34C38.5 36.209 36.709 38 34.5 38H6.5C4.291 38 2.5 36.209 2.5 34V6C2.5 3.791 4.291 2 6.5 2H34.5C36.709 2 38.5 3.791 38.5 6V34Z"
            fill="#77B255"
          />
          <path
            d="M31.78 8.36202C30.624 7.61102 29.076 7.94002 28.322 9.09802L17.436 25.877L12.407 21.227C11.393 20.289 9.811 20.352 8.874 21.365C7.937 22.379 7.999 23.961 9.013 24.898L16.222 31.564C16.702 32.009 17.312 32.229 17.918 32.229C18.591 32.229 19.452 31.947 20.017 31.09C20.349 30.584 32.517 11.82 32.517 11.82C33.268 10.661 32.938 9.11302 31.78 8.36202Z"
            fill="white"
          />
        </svg>

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={onFeedbackRestartRequest}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};
Widget.FeedbackSuccess = FeedbackSuccess;

const FeedbackContent: FeedbackContentComponent = ({
  feedbackType,
  onFeedbackRestart,
  onFeedbackSent,
}) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleSubmitFeedback = async (event: FormEvent) => {
    event.preventDefault();

    console.log({
      screenshot,
      comment,
    });

    onFeedbackSent();
  };

  return (
    <>
      <header>
        <BackButton onBack={onFeedbackRestart} />

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

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que esta acontecendo..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshot={(screenshot) => setScreenshot(screenshot)}
          />

          <button
            type="submit"
            disabled={comment.length === 0}
            className="p-2 bg-brand-500 rounded border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
};
Widget.FeedbackContent = FeedbackContent;

const ScreenshotButton: ScreenshotButtonComponent = ({
  screenshot,
  onScreenshot,
}) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false);

  const handleTakeScreenshot = async () => {
    const htmlElement = document.querySelector("html");

    if (!htmlElement) {
      return;
    }

    setIsTakingScreenshot(true);

    const canvas = await html2canvas(htmlElement);
    const base64image = canvas.toDataURL("image/png");

    onScreenshot(base64image);
    setIsTakingScreenshot(false);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshot(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="w-10 h-10 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 flex items-center justify-center"
    >
      {isTakingScreenshot ? (
        <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100 opacity-50" />
      )}
    </button>
  );
};
Widget.ScreenshotButton = ScreenshotButton;

export { Widget };
