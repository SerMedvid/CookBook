import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';


const AppRouts: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(AppRouts, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {}
