import { Component, OnInit } from '@angular/core';
import { Frog } from '../models/frog';
import { FrogService } from '../service/frog.service';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-frogs',
  templateUrl: './frogs.component.html',
  styleUrls: ['./frogs.component.scss']
})
export class FrogsComponent implements OnInit {
  allFrogs: Frog[] = [];
  filteredFrogs: Frog[] = [];
  isLoaded: boolean = false;

  //I'm not creating an interface for this
  dropdownOptions: any[] = [
    { region: 'All' },
    { region: 'Africa' },
    { region: 'Australia' },
    { region: 'South America' },
    { region: 'North America' },
    { region: 'Southeast Asia' }
  ];

  constructor(private frogService: FrogService) { }

  ngOnInit() {
    //Get all frogs
    this.frogService.getAllFrogs().subscribe(frogs => this.allFrogs = frogs);
    //Set filtered frogs to the default array, so we only have to call it once
    this.filteredFrogs = this.allFrogs;
    //Get ready for all of the frogs woohoo
    this.isLoaded = true;
  }


  onDropdownChange(event: any) {
    //Get the selected region
    if (event.source.value !== null) {
      //If it's a specific region then filter the frogs
      if (event.source.value !== 'All') {        
        this.filteredFrogs = this.allFrogs.filter(frog => frog.region === event.source.value);
      } else {
        //If it's 'all' then set the filtered frogs back to the default
        this.filteredFrogs = this.allFrogs;
      }
    }
  }

}
