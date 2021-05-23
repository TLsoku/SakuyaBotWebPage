import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

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
