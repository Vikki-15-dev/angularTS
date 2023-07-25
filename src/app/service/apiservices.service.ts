import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIServicesService {
  private apiUrl = 'https://your-api-url';
  constructor(private http : HttpClient) { }
}
