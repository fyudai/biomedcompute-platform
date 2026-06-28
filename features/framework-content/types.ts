export interface Chapter {
    id: string;
    title: string;
}

export interface Unit {
    id: string;
    title: string;
    href: string;
    chapters: Chapter[];
}

export interface FrameworkDashboardData {
    title: string;
    objective: string;
    units: Unit[];
}