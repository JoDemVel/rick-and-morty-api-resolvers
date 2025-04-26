import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-loading-spinner></app-loading-spinner>
  `,
  styles: [
    `
      main {
        min-height: calc(100vh - 64px);
        background-color: #f5f5f5;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
