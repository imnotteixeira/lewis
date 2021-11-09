import TesseractOCR from "../../controller/tesseract-ocr"

const OCRHAndler = new TesseractOCR();

export default (imageFileUrl, setRawTextData: (_: string) => void) => {
    const processReceipt = async () => { 
        const data = await OCRHAndler.parseImage(imageFileUrl);
        console.log("DATA!!", data)
        setRawTextData(data)
    };

    return {
        processReceipt
    }
    
}