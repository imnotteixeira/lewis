import React from "react";
import ReactDOM from "react-dom";
import ImageUploader from "./Image";
import { ReceiptDataContext, ReceiptDataProvider } from "./OCR/Receipt";

const App: React.FC<{ compiler: string, framework: string }> = (props) => (
    <>
        <ReceiptDataProvider>
            <ImageUploader />
            <ReceiptDataContext.Consumer>
                {({processReceipt}) => (
                    <button onClick={processReceipt}>Do stuff</button>
                )}     
            </ReceiptDataContext.Consumer>
        </ReceiptDataProvider>
    </>
);

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("root"),
);
