import { tool } from "../models/tool";

export const inputTypes: tool[] = [
    {
        type: "number",
        tag: "input"
    },
    {
        type: "text",
        tag: "input"
    },
    {
        type: "date",
        tag: "input"
    },
    {
        type: "textarea",
        tag: "textarea"
    },
    {
        type: "daterange",
        tag: "mixedInput"
    },
    {
        type: "dropdown",
        tag: "mixedInput"
    },
    {
        type: "radio",
        tag: "input"
    },
    {
        type: "checkbox",
        tag: "input"
    },
    {
        type: "row",
        tag: "div"
    },
    {
        type: "col",
        tag: "div"
    },
    {
        type: "group",
        tag: "div"
    },
];