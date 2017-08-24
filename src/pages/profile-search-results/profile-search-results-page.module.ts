import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResultsPage } from './profile-search-results-page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProfileSearchResultsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProfileSearchResultsPage),
  ],
})
export class ProfileSearchResultsPageModule {}
