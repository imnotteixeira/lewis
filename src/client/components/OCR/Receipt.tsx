import React, { createContext, useState } from 'react'
import useReceiptProcessor from './useReceiptProcessor';

interface ReceiptData {
    imageFileURL?: string;
    setImageFileURL: (_?: string) => void;
    processReceipt: () => void;
    rawTextData?: string;
}

const defaultValue = {
    setImageFileURL: () => {},
    processReceipt: () => {}
}

export const ReceiptDataContext = createContext<ReceiptData>(defaultValue)

export const ReceiptDataProvider = ({children}) => {
    const [imageFileURL, setImageFileURL] = useState(undefined);
    const [rawTextData, setRawTextData] = useState(undefined);

    const { processReceipt } = useReceiptProcessor(imageFileURL, setRawTextData)
    
    return (
        <ReceiptDataContext.Provider value={{imageFileURL, setImageFileURL, processReceipt, rawTextData}}>
            {children}
        </ReceiptDataContext.Provider>
    )
}