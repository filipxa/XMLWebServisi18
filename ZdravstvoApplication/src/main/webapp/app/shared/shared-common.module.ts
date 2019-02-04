import { NgModule } from '@angular/core';

import { ZdravstvoApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ZdravstvoApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ZdravstvoApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ZdravstvoApplicationSharedCommonModule {}
