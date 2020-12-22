import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url.service';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentsUrl: string;

   constructor(private http: HttpClient, private urlService: UrlService) {
    this.commentsUrl = this.urlService.getUrl() + 'comments';
  }

   getAvailableComments(): Observable<Comment[]> {
    return this.http.get(this.commentsUrl, {withCredentials:true}).pipe(
      map(resp => resp as Comment[])
    );
  }
 
  addComment(comment: Comment): Observable<object> {
    return this.http.post(this.commentsUrl, comment, {withCredentials:true}).pipe();
  }
 
  updateComment(comment: Comment): Observable<object> {
    return this.http.put(this.commentsUrl + comment.id, comment, {withCredentials:true}).pipe();
  }


}
