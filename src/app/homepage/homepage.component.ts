import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public animeList: Array<any>;

  public test: string;
  constructor(public httpClient: HttpClient) {
    this.test = "test";
    this.animeList = new Array();
    this.requestSample();
  }

  ngOnInit(): void {
  }
  
  alerts(): void{
    this.test = "alert";
  }

  requestSample(): void{
    this.httpClient.get("https://api.jikan.moe/v3/manga/1/characters")
    .subscribe((data:any)=>{
      this.animeList=data.characters;
      this.animeList.push();
      //this.test=JSON.stringify(this.animeList);
    })
  }
}
