import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AdminLayoutRoutes } from './admin-layout.routing'
import { DashboardComponent } from '../../dashboard/dashboard.component'
import { UserProfileComponent } from '../../user-profile/user-profile.component'
import { CatalogListComponent } from '../../catalog-list/catalog-list.component'
import { TypographyComponent } from '../../typography/typography.component'
import { IconsComponent } from '../../icons/icons.component'
import { NotificationsComponent } from '../../notifications/notifications.component'
import { UpgradeComponent } from '../../upgrade/upgrade.component'

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
} from '@angular/material'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    CatalogListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ],
})
export class AdminLayoutModule {}
