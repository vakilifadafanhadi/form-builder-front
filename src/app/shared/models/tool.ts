export interface iTool {
    id?: string;
    icon?: string;
    type?: string;
    tag?: string;
    name?: string;
    label?: string;
    label2?: string;
    bSClass?: string;
    description?: string;
    required?: boolean;
    requiredTo?: boolean;
    placeHolder?: string;
    premissions?: iTool[];
    childs?: iTool[];
    splitChar?: string;
    splitCount?: string;
    max?: string | number;
    min?: string | number;
    maxTo?: string;
    minTo?: string;
    action?: string;
}
// export class tool implements iTool {
//     id?: string | undefined;
//     type?: string;
//     tag?: string | undefined;
//     name?: string | undefined;
//     label?: string | undefined;
//     bSClass?: string | undefined;
//     description?: string | undefined;
//     required?: boolean | undefined = false;
//     placeHolder?: string | undefined = "";
// }