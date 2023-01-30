import { iTool } from "../models/tool";

export const inputTypes: iTool[] = [
    {
        icon: "tag",
        type: "number",
        tag: "input"
    },
    {
        icon: "title",
        type: "text",
        tag: "input"
    },
    {
        icon: "calendar_month",
        type: "date",
        tag: "input"
    },
    {
        icon: "html",
        type: "textarea",
        tag: "textarea"
    },
    {
        icon: "date_range",
        type: "daterange",
        tag: "daterange"
    },
    {
        icon: "list",
        type: "dropdown",
        tag: "dropdown"
    },
    {
        icon: "radio_button_checked",
        type: "radio",
        tag: "radio"
    },
    {
        icon: "check_box",
        type: "checkbox",
        tag: "checkbox"
    },
    {
        icon: "space_dashboard",
        type: "section",
        tag: "div"
    },
    {
        icon: "label",
        type: "label",
        tag: "label"
    },
    {
        icon: "smart_button",
        type: "button",
        tag: "button"
    },
    {
        icon: "link",
        type: "link",
        tag: "link"
    }
];