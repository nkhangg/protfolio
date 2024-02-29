export interface IPreviewProject {
    id: string;
    title: string;
    image: string;
}
export interface IProject extends IPreviewProject {
    content: string;
    funtion: {
        client: string[];
        server: string[];
        ai?: string[];
    };
    tectical: { title: string; details: string[] }[];
    git: string;
    link?: string;
    type?: 'fs' | 'fe';
}
