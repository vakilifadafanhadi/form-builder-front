import { FormControl } from "@angular/forms";

export type toolVM = {
    label: FormControl<string | null>;
    name: FormControl<string | null>;
    bSClass: FormControl<string | null>;
}