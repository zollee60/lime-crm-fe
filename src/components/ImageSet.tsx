import React, { ContextType, useEffect } from 'react'
import { ImageContext } from './ImageProvider';
import { IImageProviderValue } from '../models/IImageProviderValue';
import NewImageButton from './NewImageButton';
import ImageTile from './ImageTile';

const ImageSet: React.FC = () => {

    const { images, fetchImageData } = React.useContext<IImageProviderValue>(ImageContext);

    useEffect( () => {
        fetchImageData();
    }, [])

    return (
        <div className="md:mt-7 md:mx-7">
            <h1 className="text-3xl font-bold text-gray-700">Uploaded images</h1>
            <div className="flex flex-wrap flex-col items-center md:flex-row md:items-start gap-10 mt-7">
                <NewImageButton />
                {images.map(i => {
                    return <ImageTile key={i.id} imgData={i}/>
                })}
            </div>
        </div>
    );
}

export default ImageSet;