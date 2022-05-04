const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: "/assets/bug.svg",
      alt: "Imagem de um inseto",
    },
  },
  IDEIA: {
    title: "Ideia",
    image: {
      source: "/assets/idea.svg",
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Problema",
    image: {
      source: "/assets/thought.svg",
      alt: "Imagem de um balão de pensamento",
    },
  },
};

type FeedbackType = keyof typeof feedbackTypes;

export { feedbackTypes };
export type { FeedbackType };
