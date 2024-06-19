import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedNumber = ({ value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: value },
    config: { duration: 5000 }, // Adjust duration as needed
  });

  return <animated.span>{number.interpolate((val) => Math.floor(val))}</animated.span>;
};

export default AnimatedNumber;