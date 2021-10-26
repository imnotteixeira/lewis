import { createWorker, Worker } from "tesseract.js";
import OCR from "./ocr";

export default class TesseractOCR implements OCR {
    useWorker = async (worker: Worker, imgPath: string): Promise<string> => {
        await worker.load();
        await worker.loadLanguage("es");
        await worker.initialize("es");
        const { data: { text } } = await worker.recognize(imgPath);
        await worker.terminate();
        return text;
    };

    parseImage(imgPath: string): Promise<string> {
        const worker = createWorker({
            logger: (m) => console.log(m),
        });
        return this.useWorker(worker, imgPath);
    }   
}
