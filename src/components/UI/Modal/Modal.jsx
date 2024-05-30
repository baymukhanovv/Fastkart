import React, { useContext } from 'react'
import cl from './Modal.module.scss'
import AppContext from '../../../context'

const Modal = ({children}) => {
    const {modalActive, setModalActive} = useContext(AppContext)

    return (
        <div className={modalActive ? `${cl.modal} ${cl.active}` : cl.modal} onClick={() => setModalActive(false)}>
            <div className={cl.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal