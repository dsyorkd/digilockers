import { Routes } from '@angular/router'

import { DashboardComponent } from '../../dashboard/dashboard.component'
import { UserProfileComponent } from '../../user-profile/user-profile.component'
import { CatalogListComponent } from '../../catalog-list/catalog-list.component'
import { TypographyComponent } from '../../typography/typography.component'
import { IconsComponent } from '../../icons/icons.component'
import { NotificationsComponent } from '../../notifications/notifications.component'
import { UpgradeComponent } from '../../upgrade/upgrade.component'

export const AdminLayoutRoutes: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'catalog-list', component: CatalogListComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'upgrade', component: UpgradeComponent },
]
