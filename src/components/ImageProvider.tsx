import React, { useState } from 'react'
import { IImageAttributes } from '../models/IImageAttributes';
import { IImageProviderValue } from '../models/IImageProviderValue';

export const ImageContext = React.createContext<IImageProviderValue>({} as IImageProviderValue);

const ImageProvider: React.FC = (props) => {

    const [images, setImages] = useState<IImageAttributes[]>([]);
    const { children } = props;

    const fetchAllImageData = async () => {
        const res = await fetch("/api/all");
        const data = await res.json();
        setImages(data);
    }

    return (
        <ImageContext.Provider value={{
            images: images,
            fetchImageData: fetchAllImageData
        }}>
            { children }
        </ImageContext.Provider>
    );
}

export default ImageProvider