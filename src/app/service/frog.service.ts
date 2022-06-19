import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Frog } from '../models/frog';
import { frogs } from '../models/mock-data';

@Injectable({
    providedIn: 'root'
})

export class FrogService {
 
    constructor() { }

    getAllFrogs(): Observable<Frog[]> {
        return of(frogs);

    }
}