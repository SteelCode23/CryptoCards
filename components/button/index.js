import classNames from "classnames";
import { Button } from "react-bootstrap";
import styles from "./button.module.scss";

export function AppButton({ 
    backgroundColor,
    fontSize,
    title,
    margin,
    padding,
    className,
    onclick, 
    width,
    height
}) {
    return (
        <Button
            onClick={onclick}
            style={{
                margin,
                fontSize,
                backgroundColor,
                padding,
                width,
                height
            }}
            className={classNames(styles.app_bttn, className)}
        >
            {title}
        </Button>
    );
};


export function ConnectButton({ 
    backgroundColor,
    fontSize,
    title,
    margin,
    padding,
    className,
    width,
    height
}) {
    return (
        <Button
            className={classNames(styles.app_bttn, className)}
            id = 'wallet-address'
        >
            {title}
        </Button>
    );
};

export function MintButton({ 
    backgroundColor,
    fontSize,
    title,
    margin,
    padding,
    className,
    width,
    height
}) {
    return (
        <Button
            className={classNames(styles.app_bttn, className)}
            id = 'mint'
        >
            {title}
        </Button>
    );
};


export function MintButton2({ 
    backgroundColor,
    fontSize,
    title,
    margin,
    padding,
    className,
    width,
    height
}) {
    return (
        <Button
            className={classNames(styles.app_bttn, className)}
            id = 'mint_quantity'
        >
            {title}
        </Button>
    );
};

