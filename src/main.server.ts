import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import {AppShellComponent} from './app/app-shell/app-shell.component';

const bootstrap = () => bootstrapApplication(AppShellComponent, config);

export default bootstrap;
