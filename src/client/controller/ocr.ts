export default interface OCR {
    parseImage(_: string): Promise<string>;
}
