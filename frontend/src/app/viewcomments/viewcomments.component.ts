import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-viewcomments',
  templateUrl: './viewcomments.component.html',
  styleUrls: ['./viewcomments.component.css']
})
export class ViewcommentsComponent implements OnInit {
  loggedUser: User;
  availableComments: Comment[];

  constructor(private userService: UserService, private commentService: CommentService) { }

  ngOnInit(): void {
    this.userService.loginUser(null,null).subscribe(
      resp => {
        this.loggedUser = resp;
      }
    );
    this.commentService.getAvailableComments().subscribe(
      resp => {
        this.availableComments = resp;
      }
    );
  }
  addComment(comment: Comment) {
    this.commentService.addComment(comment).subscribe();
  }

}
