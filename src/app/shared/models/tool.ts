export interface iTool {
    id?: string;
    type?: string;
    tag?: string;
    name?: string;
    label?: string;
    bSClass?: string;
    description?: string;
    required?: boolean;
    placeHolder?: string;
    childs?: iTool[];
}
export class tool implements iTool {
    id?: string | undefined;
    type?: string;
    tag?: string | undefined;
    name?: string | undefined;
    label?: string | undefined;
    bSClass?: string | undefined;
    description?: string | undefined;
    required?: boolean | undefined = false;
    placeHolder?: string | undefined = "";
}