import { bootstrap } from "@angular/platform-browser-dynamic";
import { disableDeprecatedForms, provideForms } from "@angular/forms";
import { HTTP_PROVIDERS } from "@angular/http";
import { LocationStrategy, HashLocationStrategy } from "@angular/common"
import { provideRouter } from "@angular/router"

import { App, PROVIDERS } from "./app";
import { routes } from "./app/routes";

bootstrap(App, [
    ...HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    provideRouter(routes),
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ...PROVIDERS
]);