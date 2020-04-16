import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment } from '../../../environments/environment'

import { ServerLog } from './server-log'

const API = environment.ApiLogServerUrl

@Injectable({
    providedIn: 'root'
})
export class ServerLogService { 

    constructor(private http: HttpClient) { }

    log(serverLog: ServerLog) {
        
        return this.http.post(API + '/infra/log', serverLog)
    }
}