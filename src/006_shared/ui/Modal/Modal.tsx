import {FC, ReactNode} from 'react';
import s from './Modal.module.scss'
import {Portal} from '006_shared/ui/Portal';
import {classNames} from '006_shared/lib/styles';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {

    const {
        className = '',
        children,
        isOpen = false,
        onClose
    } = props;

    const closeHandler = () => {
        if (onClose) {
            onClose()
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen
    }

    return (
        //<Portal>
        <div className={classNames(s.Modal, mods, [className])}>
            <div
                className={s.overlay}
                onClick={closeHandler}
            >
                <div
                    className={s.content}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </div>
        //</Portal>
    )
}
