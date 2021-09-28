import { createContext, useState, ReactNode, VoidFunctionComponent, useEffect } from 'react';
import { ModalUva } from '../components/Consultas/tanques/ModalUva';

interface ModalUvaContextData{
    modalOpen: () => void;
    modalClose: () => void;
}

interface ModalProviderProps{
    children: ReactNode;
    
}

export const ModalUvaContext = createContext({} as ModalUvaContextData);

export function ModalProvider({children}: ModalProviderProps){

    const [isModalOpen, setisModalOpen]= useState(false)
    const [isModalClose, setisModalClose]= useState(false)

    function modalOpen(){
        setisModalOpen(true)
    }

    function modalClose (){
        setisModalClose(true)
    }


    return(
        <ModalUvaContext.Provider 
        value={{
            modalOpen,
            modalClose,

        }}
        >
            {children}

            { isModalOpen && isModalClose && <ModalUva />}
        </ModalUvaContext.Provider>
    )
}