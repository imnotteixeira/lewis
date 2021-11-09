import { createWorker, OEM, Worker } from "tesseract.js";
import OCR from "./ocr";

export default class TesseractOCR implements OCR {
    private useWorker = async (worker: Worker, imgPath: string): Promise<string> => {
        await worker.load();
        await worker.loadLanguage("spa");
        await worker.initialize("spa");
        await worker.setParameters({
            preserve_interword_spaces: "1",
            // tessedit_char_whitelist: " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,.€()/áéíóúýÁÉÍÓÚÝàèìòùÀÈÌÒÙãñõÃÑÕâêîôûÂÊÎÔÛäëïöüÿÄËÏÖÜŸ"
        })
        const { data } = await worker.recognize(imgPath);
        console.log("OCR RESULT", data)
        await worker.terminate();
        return data.text;
    };

    parseImage(imgPath: string): Promise<string> {
        const worker = createWorker({
            logger: (m) => console.log(m),
        });
        return this.useWorker(worker, imgPath);
    }   
}
