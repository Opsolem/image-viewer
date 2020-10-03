import Point from "@/models/Point";

interface Annotation {
    id: string,
    imageId: string,
    label: string,
    points: Point[]
}

interface PolygonProps {
    key: string,
    points: Point[]
}

interface TextProps {
    key: string,
    label: string,
    point: Point
}


export {
    Annotation,
    PolygonProps,
    TextProps
};
