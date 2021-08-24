import React from "react";
import styles from "./Button.module.scss";
import { useHistory } from 'react-router-dom'

interface ButtonProps {
    content: string;
    link?: string
}

export const MainButton: React.FC<ButtonProps> = ({ content, link }) => {
    const history = useHistory()
    return (
        <div onClick={() => history.push(`${link}`)} className={styles['main-button']}  > {content}</div>
    );
}

export const SecondaryButton: React.FC<ButtonProps> = ({ content, link }) => {
    const history = useHistory()
    return (
        <button onClick={() => history.push(`${link}`)} className={'white-button'} >{content}</button>
    );
}
