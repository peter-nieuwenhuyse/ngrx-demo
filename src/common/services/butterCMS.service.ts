import * as Butter from 'buttercms';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ButterCMSService {
  butterService = Butter('ea674a0f64cd8fc8cdacfb75211accf0af1ddc78');

  getSinglePage(page: string) {
    return this.butterService.post.retrieve(page);
  }

  getAllPages() {
    this.butterService.post.list({
      page: 1,
      page_size: 10
    })
      .then((res) => {
        console.log('Content from ButterCMS');
        console.log(res);
      })
      .catch((res) => {
        // create a service to handle errors
        console.log('error fetching posts');
        console.log(res);
      });
  }
}
