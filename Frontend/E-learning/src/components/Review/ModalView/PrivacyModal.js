import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
        Providing the right eLearning solution to your learners can make the big difference. New approaches and tools allow you reach your learners where and when required. The times of plain and poorly design eLearning courses are long over.
        Today’s learners expect responsive eLearning courses with animations, videos, games, simulations and custom designed illustrations, accessible anywhere and at any time. They demand learning solutions that transform passive learning consumption into active learning experiences.
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
            E-learning services
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>E-learning services</h2>
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;
