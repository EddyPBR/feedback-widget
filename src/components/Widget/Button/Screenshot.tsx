import { FC, useState } from "react";

import html2canvas from "html2canvas";
import { Camera, CircleNotch, Trash } from "phosphor-react";

export type ScreenshotProps = {
  screenshot: string | null;
  onScreenshot: (screenshot: string | null) => void;
};

const Screenshot: FC<ScreenshotProps> = ({ screenshot, onScreenshot }) => {
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

export default Screenshot;
