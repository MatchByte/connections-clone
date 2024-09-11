export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // swap positions
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getWordColor = (category: 1 | 2 | 3 | 4): string => {
  switch (category) {
    case 1:
      return 'bg-yellow-300';
    case 2:
      return 'bg-lime-500';
    case 3:
      return 'bg-blue-300';
    case 4:
      return 'bg-purple-400';
    default:
      return 'bg-black';
  }
};

export const getPerfection = (mistakesRemaining: number) => {
  switch (mistakesRemaining) {
    case 4: {
      return 'Perfect!';
    }
    case 3: {
      return 'Nice!';
    }
    case 2: {
      return 'Good!';
    }
    default: {
      return 'Phew!';
    }
  }
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
