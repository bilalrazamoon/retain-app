import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router"

import { AppBar } from "./../ui/app-bar"
import { Notes } from "./notes";

@Component({
    selector: 'main-container',
    directives: [
        AppBar,
        Notes,
        ...ROUTER_DIRECTIVES
    ],
    template: `<div>
<app-bar></app-bar>
<div class="main">
    <router-outlet></router-outlet>
</div>
</div>`
})
export class Main {

}