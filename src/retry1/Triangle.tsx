import React from 'react';
import orange from "../images/апельсин.svg";
import lemon from "../images/лимон.svg";
import raspberry from "../images/малина.svg";
import {Element} from "./Element";
import './App.css'

const Triangle = () => {
    return (
        <div className={'container'}>
            <div className={"fruitContainer"}>
                <img src={orange} alt={'orange'} className={"orange"}/>
                <img src={lemon} alt={'lemon'} className={"lemon"}/>
                <img src={raspberry} alt={'raspberry'} className={"raspberry"}/>
                <div className={"linesContainer"}>
                    <div className={"circles"}>
                        {[...Array(10)].map((_, index) => (
                            <Element key={index} speed={Math.random() * 4 + 1} className={'circle'}/>
                        ))}

                    </div>

                    <div className={"squares"}>

                        {[...Array(10)].map((_, index) => (
                            <Element key={index} speed={Math.random() * 4 + 1} className={'square'}/>
                        ))}
                    </div>

                    <div className={"lines"}>
                        <div className={"smallLine"}>
                            {[...Array(10)].map((_, index) => (
                                <Element key={index} speed={Math.random() * 4 + 1} className={'lineElement'}/>
                            ))}
                        </div>
                        <div className={"smallLine"}>
                            {[...Array(10)].map((_, index) => (
                                <Element key={index} speed={Math.random() * 4 + 1} reverse
                                         className={'lineElementWhite'}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Triangle;