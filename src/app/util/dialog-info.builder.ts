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

import { DialogInfo } from "./dialog-info.interface";
import { DialogInfoType } from "./dialog-info-type.enum";

/**
 * The <code>DialogInfoBuilder</code> class provides static methods for creating
 * <code>DialogInfo</code> objects.
 */
export class DialogInfoBuilder {

    /**
     * Creates and returns a new <code>DialogInfo</code> object.
     * 
     * @param {string} title the title of the new <code>DialogInfo</code>
     *                       object.
     * @param {string} message the message associated with the new
     *                         <code>DialogInfo</code> object.
     * @param {DialogInfoType} type the type of the new <code>DialogInfo</code>
     *                              object.
     * @return {DialogInfo} a new <code>DialogInfo</code> object.
     */
    public static build(title: string, message: string,
                       type: DialogInfoType = DialogInfoType.INFO): DialogInfo {
        const item: DialogInfo = {
            title: title,
            message: message,
            type: type
        };
        return item;
    }
}