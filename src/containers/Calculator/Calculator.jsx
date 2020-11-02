import React from "react"
import LayoutIos from "../../components/LayoutIos/LayoutIos";
import "./Calculator.css"

const Calculator = () => {
    return <LayoutIos>
        <div className="Calculator">
            <p className="Calculator__result">
                2
            </p>
            <div className="Calculator__btns">
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--gray">C</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--gray">+/-</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--gray">%</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--orange">&#247;</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--dark">7</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--dark">8</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--dark">9</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--orange">&times;</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--dark">4</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--dark">5</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--dark">6</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--orange">-</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--dark">1</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--dark">2</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--dark">3</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--orange">+</button>
                </div>
                <div className="Calculator__btn-wrap Calculator__btn--large">
                    <button className="Calculator__btn Calculator__btn--dark">0</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--dark">,</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--orange">=</button>
                </div>
            </div>
        </div>
    </LayoutIos>
}
export default Calculator