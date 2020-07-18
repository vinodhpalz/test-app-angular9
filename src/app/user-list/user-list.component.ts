import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { UserService } from './user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  pageTitle: string = 'User List';
  imgWidth: number = 100;
  imgMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  filteredUsers: IUser[];
  users: IUser[];
  errorMessage: string;
  constructor(private userService: UserService) {}
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredUsers = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.users;
  }

  performFilter(filterBy: string): IUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter(
      (user: IUser) => user.userName.toLocaleLowerCase().indexOf(filterBy)! == 0
    );
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = this.users;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  onNotify(message: string): void {
    this.pageTitle = 'Users List: ' + message;
  }
}
