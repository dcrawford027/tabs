import React, { useState } from 'react';

const Tabs = props => {
    const {allTexts} = props;
    const [text, setText] = useState("");

    const clickHandler = (e, index) => {
        let currentText = allTexts[index];
        setText(currentText);
    }

    return (
        <>
            <div className="row mt-2">
                <div className="col-sm-4 offset-2">
                    {
                        allTexts.map((text, i) =>
                            <button className="btn btn-light mr-1"
                                key={i}
                                onClick={ e => clickHandler(e, i) }
                                >
                                Tab {i + 1}
                            </button>
                        )
                    }
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-10 offset-1 border border-dark">
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default Tabs;