import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  passport: any = {
  	blocktime : 1513351582,
  	confirmations : 11,
		data : {
        json : {
        'exp_block' : '6 months',
        'exp_dev' : '7 years',
        'location' : 'Valencia, Spain',
        'linkedIn' : 'https://www.linkedin.com/in/edjburton/',
        'contact' : 'ejb503@gmail.com',
        'forHire' : true
        }
      },
		keys : ['Peter'],
		publishers : ['1S8xbiSVYejZ3TG1sp8fD7CpgKbW3XgLrCFRix'],
		txid : '474d5f9eeb3b93d88a1fc43061a32e474c29286a72a584207379f5afe62338af'
  };
  constructor(private dataService : DataService) { }

  ngOnInit() {
    console.log(this.passport);
    this.loadPassport(this.passport.txid);
    // this.publishPassport(this.passport.data);
  }

  authorizeAddress(address){
    this.dataService.authorizeAddress(address).subscribe(response => {
      alert(response);
    });

  }

  loadPassport(address){
    this.dataService.getPassport(address).subscribe(response => {
    	this.passport = response;
    	console.log(response);
    });
  }

  // publishPassport(data){
  //   this.dataService.publishPassport(data).subscribe(response => {
  //     this.passport = response;
  //     console.log(response);
  //   });
  // }

}

