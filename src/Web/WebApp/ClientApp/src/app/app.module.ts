import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app.routing'
import { ComponentsModule } from './components/components.module'

import { AppComponent } from './app.component'
import { OAuthModule } from 'angular-oauth2-oidc'

import { DashboardComponent } from './dashboard/dashboard.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { CatalogListComponent } from './catalog-list/catalog-list.component'
import { TypographyComponent } from './typography/typography.component'
import { IconsComponent } from './icons/icons.component'
import { NotificationsComponent } from './notifications/notifications.component'
import { UpgradeComponent } from './upgrade/upgrade.component'
import { AgmCoreModule } from '@agm/core'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'
import { HttpClientModule } from '../../node_modules/@angular/common/http'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
    }),
  ],
  declarations: [AppComponent, AdminLayoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
