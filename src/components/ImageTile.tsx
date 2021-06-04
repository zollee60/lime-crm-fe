import React from 'react'
import { IImageAttributes } from '../models/IImageAttributes'
import link from '../assets/link.svg';

interface ImageTileProps {
    imgData: IImageAttributes
}

const ImageTile: React.FC<ImageTileProps> = ({ imgData }) => {

    const createDateTimeString = () => {
        const date = new Date(imgData.createdAt);
        return date.toLocaleDateString("hu-HU") + " " + date.getHours() + ":" + date.getMinutes();
    }

    const handleCopyUrlToClipboard = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        navigator.clipboard.writeText(imgData.url);
    }

    return(
        <div className="w-72 h-72 md:w-64 md:h-64 bg-cover bg-center cursor-pointer relative rounded shadow-4xl hover:shadow-base" style={{backgroundImage: `url(${imgData.url})`}}>
            <div className="w-100 h-100 bg-black bg-opacity-60 absolute rounded inset-0 opacity-0 hover:opacity-100 backdrop-filter backdrop-blur-sm transition duration-300 ease-in-out">
                <div className="w-full h-full top-32 left-32 px-3 pt-1 absolute transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-lime text-lg font-bold">{imgData.originalName}</h2>
                    <table className="w-100">
                        <tr>
                            <td className="text-sm text-lime w-2/5">size:</td>
                            <td className="text-sm text-white w-3/5 pl-3">{imgData.size.toFixed(2)} MB</td>
                        </tr>
                        <tr>
                            <td className="text-sm text-lime w-2/5">source:</td>
                            <td className="text-sm text-white w-3/5 pl-3">{imgData.source}</td>
                        </tr>
                        <tr>
                            <td className="text-sm text-lime w-2/5">uploaded at:</td>
                            <td className="text-sm text-white w-3/5 pl-3">{createDateTimeString()}</td>
                        </tr>
                        <tr>
                            <td className="text-sm text-lime w-2/5">dimensions:</td>
                            <td className="text-sm text-white w-3/5 pl-3">{imgData.dimensions}</td>
                        </tr>
                    </table>
                    <h3 className="text-sm text-lime mt-2">Description</h3>
                    <div className="md:h-24">
                        <p className="text-xs text-white overflow-hidden overflow-ellipsis h-full">{imgData.description}</p>
                    </div>
                    
                </div>
                <div className="absolute left-52 top-3 hover:border-2 hover:border-lime focus:border-lime-dark focus:text-lime-dark">
                    <input type="image" src={link} alt="Copy link" title="Copy link to clipboard" onClick={handleCopyUrlToClipboard}/>
                </div>
            </div>
        </div>
    );
}

export default ImageTile;

