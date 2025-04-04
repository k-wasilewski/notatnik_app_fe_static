import React, { JSX } from 'react';
import ReactModal from 'react-modal';

const Modal = ({ content, isOpen, closeModal, styles, label }: { content: JSX.Element, isOpen: boolean, closeModal: () => void, styles: { content: any }, label: string  }) => (
    <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={styles}
        contentLabel={label}
    >
        {content}
    </ReactModal>
);

export default Modal;