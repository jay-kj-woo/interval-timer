import { useState } from 'react';
import bellSound from '../assets/boxingBellFX.mp3';

export const useAudio = () => {
  const [audio] = useState(new Audio(bellSound));

  return audio;
};
