import React from "react"

const CalcButtons = ({btns}) => (
    <div className="Calculator__btns">
        {btns.map(({handler, value, cls, action}) => <button data-action={action}
                                                             data-value={value}
                                                             onClick={handler}
                                                             className={`Calculator__btn ${cls}`}>
            {value}
        </button>)}
    </div>
)
export default CalcButtons