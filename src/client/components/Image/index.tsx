import React, { useContext, useEffect } from 'react'
import { ReceiptDataContext } from '../OCR/Receipt';

const ImageUploader = () => {

    const {imageFileURL, setImageFileURL} = useContext(ReceiptDataContext)

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const objectUrl = URL.createObjectURL(e.target.files[0]);
        setImageFileURL(objectUrl);
    }

    // Cleanup
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(imageFileURL)
        }
    }, [])

    return (
        <form>
            <label>
                Image
                <input type="file" name="image" onChange={handleFileInput}/>
            </label>
        </form>
    )
}

export default ImageUploader
