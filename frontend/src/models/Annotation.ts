import Point from "@/models/Point";

interface Annotation {
    id: string,
    imageId: string,
    label: string,
    points: Point[]
}

export default Annotation;
