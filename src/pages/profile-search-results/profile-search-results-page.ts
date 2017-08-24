import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github/github.service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results-page.html',
})
export class ProfileSearchResultsPage {
  username: string;
  user: User;
  repositories: Repository[];

  constructor(private githubService: GithubService, private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if(this.username) {
      this.getUserInformation();
    }
    
    console.log('ionViewWillLoad ProfileSearchResultsPage, username: ' + this.username );
  }

  getUserInformation(): void {
    this.githubService.mockGetUserInformation(this.username).subscribe((data: User) => {
      this.user = data;
      console.log(data)
    });
  
    this.githubService.mockGetRepositoryInformation(this.username).subscribe(
      (data: Repository[]) => {
        this.repositories = data;
        console.log('mockGetRepositoryInformation username:' + this.username);
        console.log('mockGetRepositoryInformation data:' + data);
      }
    )
  }
}