import { iTool } from "../models/tool";

export const inputTypes: iTool[] = [
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
        type: "1x row",
        bSClass: "col-md-12",
        tag: "div",
        childs: []
    },
    {
        type: "2x row",
        bSClass: "col-md-6",
        tag: "div",
        childs: []
    },
    {
        type: "3x row",
        bSClass: "col-md-4",
        tag: "div"
    },
    {
        type: "4x row",
        bSClass: "col-md-3",
        tag: "div"
    },
    {
        type: "group",
        tag: "div"
    },
];