/**
*
* Copyright 2018 Infosys Ltd.
* Use of this source code is governed by MIT license that can be found in the LICENSE file or at
* https://opensource.org/licenses/MIT.”
*
**/
import { Routes, RouterModule } from "@angular/router";
import { TestInfoComponent } from "./test-info.component";

const TEST_INFO_ROUTER: Routes = [
    {
        path: "",
        component: TestInfoComponent
    }
];

export const testInfoRouter = RouterModule.forChild(TEST_INFO_ROUTER );
