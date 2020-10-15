import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Button.css';

const Button = ({ buttonName, className, type, handleClick }) => {
    const [state, toggle] = useState(true);
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } });


    return (
        <button className="button_common" onClick={() => toggle(!state)}>
            <animated.div
                className={className}
                onClick={handleClick}
                type={type}
                style={{
                    opacity: x.interpolate({ range: [0, 1], output: [1, 1] }),
                    transform: x
                        .interpolate({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                        })
                        .interpolate(x => `scale(${x})`)
                }}>
                {buttonName}
            </animated.div>
        </button>
    );
};

export default Button;