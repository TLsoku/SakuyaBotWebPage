import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


  
 

export class AppComponent {
  // Connection URL
  public url = 'mongodb://localhost:27017';
  // Database Name
  public client: any;
  
  public dbName = 'myproject';

  constructor() {
  // Use connect method to connect to the server
    let thizz = this;
    this.client = new MongoClient(this.url);

    thizz.client.connect(function(err) {
      assert.equal(null, err);
      console.log('Connected successfully to server');

      const db = thizz.client.db(thizz.dbName);

      thizz.client.close();
    });
  }
  title = 'SakuyaBot';

}

