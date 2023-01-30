import { FormControl } from "@angular/forms";
import { iTool } from "../models/tool";

export type toolVM = {
    id?: FormControl<string | null>;
    type?: FormControl<string | null>;
    tag?: FormControl<string | null>;
    name?: FormControl<string | null>;
    label?: FormControl<string | null>;
    label2?: FormControl<string | null>;
    bSClass?: FormControl<string | null>;
    description?: FormControl<string | null>;
    required?: FormControl<boolean | null>;
    requiredTo?: FormControl<boolean | null>;
    placeHolder?: FormControl<string | null>;
    premissions?: FormControl<iTool[] | null>;
    splitChar?: FormControl<string | null>;
    splitCount?: FormControl<string | null>;
    max?: FormControl<string | number | null>;
    min?: FormControl<string | number | null>;
    maxTo?: FormControl<string | null>;
    minTo?: FormControl<string | null>;
    action?: FormControl<string | null>;
}