import React, { useState } from "react";

const Accordion = ({ title, content }) => {
    const [show, setShow] = useState(false);

    const handleOnChange = () => {
        setShow(!show);
    };

    return (
        <section className="accordion">
            <div className="accordion__header" onClick={handleOnChange}>
                <h2>{title}</h2>
                <span className={`chevron ${show ? "up" : "down"}`}></span>
            </div>
            {show && (
                <div className="accordion__body">
                    <p>{content}</p>
                </div>
            )}
        </section>
    );
};

export default Accordion;
