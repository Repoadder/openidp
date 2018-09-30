/**
*
* Copyright 2018 Infosys Ltd.
* Use of this source code is governed by MIT license that can be found in the LICENSE file or at
* https://opensource.org/licenses/MIT.”
*
**/
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ManageEnvironmentComponent } from "./manage-environment.component";

describe("ManageEnvironmentComponent", () => {
  let component: ManageEnvironmentComponent;
  let fixture: ComponentFixture<ManageEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ ManageEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
