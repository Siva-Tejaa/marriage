import React from 'react';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const Blessings = () => {

    const { width, height } = useWindowSize();
    
    const confettiConfig = {
        numberOfPieces: 100,
        gravity:0.05,
        opacity:0.8,
      };

  return (
        <Confetti
            width={width-4}
            height={height}
            numberOfPieces={confettiConfig.numberOfPieces}
            gravity={confettiConfig.gravity}
            opacity={confettiConfig.opacity}
        />
  )
}

export default Blessings