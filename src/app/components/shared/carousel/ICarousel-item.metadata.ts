export interface ICarouselItem{
    marginLeft?: number;
    id: number;
    title?: {
        first: string;
        second: string;
    };
    subtitle?: string;
    link?: string;
    image: string;
    order?: number;
    margin?: number;
}
