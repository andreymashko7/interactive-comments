import React from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({ active, setModal, children }) => {
	const modal = (
		<div
			className={active ? "modal active" : "modal"}
			onClick={() => setModal(false)}
		>
			<div
				className={active ? "modal__content active" : "modal__content"}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
	return createPortal(modal, modalRoot);
};
