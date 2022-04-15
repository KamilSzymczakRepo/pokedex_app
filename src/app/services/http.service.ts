import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICard } from '../models/card';



@Injectable({
    providedIn: 'root'
})

export class HttpService {
    private apiKey: string = "";
    private url = "https://api.pokemontcg.io/v2/cards";

    getCard(): Observable<ICard> {
        const params = new HttpParams({ fromString: 'name=Pikatchu' });
        return this.httpClient.get<ICard>(this.url, {
            headers: {
                "X-Api-Key": this.getApiKey()
            }
        })
        .pipe(catchError(this.handleError))
    }

    getCardByFilter(value: any): Observable<ICard> {
        return this.httpClient.get<ICard>(this.url, {
            headers: {
                "X-Api-Key": this.getApiKey()
            }
        })
        .pipe(catchError(this.handleError))
    }

    getApiKey() {
        return this.apiKey
    }

    setApiKey(apiKey: string) {
        this.apiKey = apiKey
    }

    constructor(private httpClient: HttpClient) { }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.error(
            `Name: ${error.name} \n` +
            `Message: ${error.message} \n` +
            `Returned code: ${error.status}`
        )
        return throwError('Something bad happened; please try again later.')
    }
}

