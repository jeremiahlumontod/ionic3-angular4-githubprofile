import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results.component';
// import { RepositoriesComponent } from './repositories/repositories';

@NgModule({
    declarations: [
        SearchResultsComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        SearchResultsComponent
    ]
}) 
export class ComponentsModule { } 