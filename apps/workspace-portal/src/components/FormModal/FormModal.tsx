import { Modal } from "@mui/material";
import React from "react";
import  WorkSpaceModal  from "@workspace/Modal";
import { FormModalProps } from "./types";
import CheckoutForm from "src/components/CheckoutForm/CheckoutForm";
import Button from "@workspace/button";
import styles from './FormModal.module.scss'

export const FormModal = ({isOpen, onClose} : FormModalProps) => {
    return(
        <div className={styles.formModal}>
            <WorkSpaceModal open={isOpen} handleClose={onClose}>
                <CheckoutForm/>
                <div className={styles.buttonRow}>
                    <Button variant="primary" label="Proceed to Payment" />
                </div>
            </WorkSpaceModal>

        </div>
    )
}