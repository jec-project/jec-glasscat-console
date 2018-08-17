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
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

/**
 * The <code>LocaleService</code> class provides methods for working with
 * GlassCat server locale config.
 */
@Injectable()
export class LocaleService {

  /**
   * The reference to the URL used to access the context API.
   */
  private readonly DATA_URL: string = environment.apiPath + "data/locale";

    /**
     * Creates a new <code>LocaleService</code> instance.
     * 
     * @param {HttpClient} _http the HTTP client service injected by Angular.
     */
  constructor (private _http: HttpClient) {}

    /**
     * Returns an <code>Observable</code> object that represents the GlassCat 
     * server locale config.
     * 
     * @return {Observable<string[]>} an <code>Observable</code> object that 
     *                                represents the GlassCat server locale
     *                                config.
     */
  public getLocaleList(): Observable<string[]> {
    return this._http.get<string[]>(this.DATA_URL);
  }
}