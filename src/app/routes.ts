import { RouterConfig } from "@angular/router";

import { Main } from "./containers/main";
import { Notes } from "./containers/notes";
import { About } from "./containers/about";

export const routes:RouterConfig = [
    {
        path: "",
        component: Main,
        children: [
            {
                path: '',
                component: Notes
            },
            {
                path: "about",
                component: About
            }
        ]
    },
    {
        path: "**",
        redirectTo: ""
    }
];