import { IImageAttributes } from "./IImageAttributes";

export interface IImageProviderValue {
    images: IImageAttributes[],
    fetchImageData: () => void
}