import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    /** pathMatch: The path-match strategy 'full' matches against the entire URL.
     * It is important to do this when redirecting empty-path routes. */
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
];
// Transform a TypeScript class into an Angular module
/** NgModule takes a JS object in which we configure our router and export it to
 * the app.module.ts
*/
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}