//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import { Injectable } from "@angular/core";
import { BootstrapConfig } from "jec-glasscat-config";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';

/**
 * The <code>ContextService</code> class provides methods for working with
 * GlassCat server context config.
 */
@Injectable()
export class ContextService {

    /**
     * The HTP options used to access the context API.
     */
    private readonly HTTP_OPTIONS: any;

    /**
     * The reference to the URL used to access the context API.
     */
    private readonly CONTEXT_URL: string = environment.apiPath + "data/context";

    /**
     * The HTTP header used to access the context API.
     */
    private readonly HTTP_HEADER: any = { "Content-Type": "application/json" };

    /**
     * Creates a new ContextService instance.
     * 
     * @param {HttpClient} _http the HTTP client service injected by Angular.
     */
    constructor(private _http: HttpClient) {
        const headers: HttpHeaders = new HttpHeaders(this.HTTP_HEADER);
        this.HTTP_OPTIONS = { headers: headers };
    }

    /**
     * Returns an Observable object that represents the GlassCat server context
     * config.
     * 
     * @return {Observable<BootstrapConfig>} an Observable object that
     *                                       represents the GlassCat server
     *                                       context config.
     */
    public getContext(): Observable<BootstrapConfig> {
        return this._http.get<BootstrapConfig>(this.CONTEXT_URL);
    }

    /**
     * Sets the new GlassCat server context config.
     * 
     * @param {BootstrapConfig} config the new GlassCat server context config to
     *                                 be saved.
     */
    public saveContext(config: BootstrapConfig): void {
        this._http.put(this.CONTEXT_URL, config, this.HTTP_OPTIONS);
    }
}