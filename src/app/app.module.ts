import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FullUserComponent } from './components/full-user/full-user.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/resolve/user-resolve.service';
import {PostResolveService} from './services/resolve/post-resolve.service';

const routes: Routes = [{
  path: '', redirectTo: 'users', pathMatch: 'full'
},

  {
    path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService},
    children: [{
      path: ':id', component: FullUserComponent, children: [{
        path: 'posts/:id', component: PostsComponent, resolve: {postsData: PostResolveService}
      }]
    }]
  }];

@NgModule({
  declarations: [
    AppComponent,
    FullUserComponent,
    PostComponent,
    PostsComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
