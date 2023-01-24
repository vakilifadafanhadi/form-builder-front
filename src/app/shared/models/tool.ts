export interface iTool {
    id?: string;
    type?: string;
    tag?: string;
    name?: string;
    label?: string;
    bSClass?: string;
}
export class tool implements iTool {
    id?: string | undefined;
    type?: string;
    tag?: string | undefined;
    name?: string | undefined;
    label?: string | undefined;
    bSClass?: string | undefined;
}