import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CredentialsService, Credentials } from './credentials.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8080/api';
  isAuthenticated = false;

  constructor(private router: Router, private http: HttpClient, private credentialsService: CredentialsService) {}

  login(username: string, password: string): Observable<any> {
    const loginPayload = { username, password };

    return this.http.post<{ token: string }>(`${this.apiUrl}/auth/token`, loginPayload).pipe(
      tap((response) => {
        const credentials: Credentials = {
          token: response.token,
        };
        this.credentialsService.setCredentials(credentials, true);
        this.isAuthenticated = true;
        console.log(`Авторизация прошла успешно для пользователя: ${username}`);
      }),
      catchError(this.handleError)
    );
  }

  logout(): Observable<void> {
    return new Observable<void>((observer) => {
      this.credentialsService.setCredentials(undefined, false);
      console.log('Пользователь вышел из системы');
      this.router.navigate(['/login'], { replaceUrl: true });
      observer.next();
      observer.complete();
    });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Неизвестная ошибка!';
    if (error.status === 401) {
      errorMessage = 'Неавторизованный запрос. Пожалуйста, проверьте свои учетные данные.';
    } else if (error.status === 0) {
      errorMessage = 'Ошибка сети. Пожалуйста, проверьте ваше подключение.';
    } else {
      errorMessage = `Ошибка: ${error.statusText}`;
    }
    console.error('HTTP ошибка:', error);
    return throwError(errorMessage);
  }
}
