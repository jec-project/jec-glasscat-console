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

import { MenuItem } from "./menu-item.interface";

/**
 * The <code>MenuItemBuilder</code> class provides static methods for creating
 * <code>MenuItem</code> objects.
 */
export class MenuItemBuilder {

    /**
     * Creates and returns a new <code>MenuItem</code> object.
     * 
     * @param {string} label the label of the new <code>MenuItem</code> object.
     * @param {string} link the label associated with the new <code>MenuItem</code> object.
     * @param {string} icon the icon of the new <code>MenuItem</code> object.
     * @param {any} data the data associated with the new <code>MenuItem</code> object.
     * @return {MenuItem} a new <code>MenuItem</code> object.
     */
    public static build(label: string, link: string, icon?: string, data?: any): MenuItem {
        const item: MenuItem = {
            label: label,
            link: link,
            icon: icon,
            data: data
        };
        return item;
    }
}