import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AppInjector } from '../../app.injector';

import { SERVER_URL } from '../../shared/url/url.domain';

export abstract class BaseService {
    
    protected http: HttpClient = AppInjector.get(HttpClient);

    /**
     * Constructor.
     */
    constructor() {}

    /**
     * HTTP Method GET.
     *
     * @param {string} url
     * @param {Object} params
     * @returns {Observable<Object>}
     */
    get(url: string, params?: HttpParams) {
        return this.http.get(SERVER_URL + url, {
            headers: this.getHeaders(),
            params: params
        });
    }

    /**
     * HTTP Method POST.
     *
     * @param {string} url
     * @param {Object} body
     * @returns {Observable<Object>}
     */
    post(url: string, body = {}) {
        return this.http.post(SERVER_URL + url, body, {
            headers: this.getHeaders()
        });
    }

    /**
     * HTTP Method PUT.
     *
     * @param {string} url
     * @param {Object} body
     * @returns {Observable<Object>}
     */
    put(url: string, body = {}) {
        return this.http.put(SERVER_URL + url, body, {
            headers: this.getHeaders()
        });
    }

    /**
     * HTTP Method PATCH.
     *
     * @param {string} url
     * @param {Object} body
     * @returns {Observable<Object>}
     */
    patch(url: string, body = {}) {
        return this.http.patch(SERVER_URL + url, body, {
            headers: this.getHeaders()
        });
    }

    /**
     * HTTP Method DELETE.
     *
     * @param {string} url
     * @returns {Observable<Object>}
     */
    delete(url: string) {
        return this.http.delete(SERVER_URL + url, { headers: this.getHeaders() });
    }

    /**
     * Executes before the request.
     *
     * @param {HttpHeaders} httpHeaders
     */
    protected customHeaders(httpHeaders: HttpHeaders): void { }

    /**
     * Gets the default headers to request the server.
     *
     * @returns {HttpHeaders}
     */
    protected getHeaders(): HttpHeaders {
        let httpHeaders: HttpHeaders;
        const user = localStorage.getItem('user')

        if (user) {
            const userObject = JSON.parse(user);
            httpHeaders = new HttpHeaders()
                .set('Authorization', userObject.token)
        } else {
            httpHeaders = new HttpHeaders();
        }

        return httpHeaders;
    }

}
