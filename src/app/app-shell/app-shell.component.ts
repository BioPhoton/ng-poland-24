import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

import {DarkModeToggleComponent} from '../ui/component/dark-mode-toggle/dark-mode-toggle.component';
import {HamburgerButtonComponent} from '../ui/component/hamburger-button/hamburger-button.component';
import {SearchBarComponent} from '../ui/component/search-bar/search-bar.component';
import {SideDrawerComponent} from '../ui/component/side-drawer/side-drawer.component';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  standalone: true,
  imports: [
    SideDrawerComponent,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    HamburgerButtonComponent,
    SearchBarComponent,
    FormsModule,
    DarkModeToggleComponent,
  ]
})
export class AppShellComponent {
  sideDrawerOpen = false;
}
