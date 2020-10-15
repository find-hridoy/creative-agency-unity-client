import React from 'react';
import './ServicesCard.css';
import { useSpring, animated } from 'react-spring';


const ServicesCard = ({ service, handleClick }) => {
    const { title, description, icons, _id } = service;
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    return (
        <>
            <animated.div
                className="col-10 col-sm-10 col-md-6 col-lg-4 mx-auto"
                onClick={() => handleClick(_id)}
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <div className="card service_card">
                    <div className="card-body">
                        <img className="service_card_img" src={`data:image/jpeg;base64,${icons.icon}`} alt="Icon" />
                        <h5 className="service_card_title">{title}</h5>
                        <p className="service_card_description">{description}</p>
                    </div>
                </div>
            </animated.div>
        </>
    );
};

export default ServicesCard;