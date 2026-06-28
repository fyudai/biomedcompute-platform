export interface MathLecture {
    id: string;
    title: string;
}

export interface MathChapter {
    id: string;
    title: string;
    href: string;
    lectures: MathLecture[];
}

export interface MathUnit {
    id: string;
    unit: Number;
    title: string;
    href: string;
    chapters: MathChapter[];
}

export interface MathCategory {
    id: string;
    title: string;
    description: string;
    href: string;
    units: MathUnit[];
}