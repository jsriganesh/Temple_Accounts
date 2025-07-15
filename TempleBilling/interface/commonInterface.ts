export interface categorieProps {
    id: number;
    name: string;
    image: any;
    labelParentKey:string; labelChildKey:string;
    options: categoriesOptionsProps[];
}

export interface categoriesOptionsProps {
    id: number;
    name: string;
    image: any;
    labelParentKey:string; labelChildKey:string;
}

export type FilterDatesProps = { fromDate: Date; toDate: Date }
