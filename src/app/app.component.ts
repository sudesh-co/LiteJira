import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, NgClass, ViewportScroller, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';
import { SidebarComponent } from './shared/common/sidebar/sidebar.component';
import { HeaderComponent } from './shared/common/header/header.component';
import { FooterComponent } from './shared/common/footer/footer.component';
import { CustomizerSettingsComponent } from './shared/customizer-settings/customizer-settings.component';
import { ToggleService } from './shared/common/sidebar/toggle.service';
import { CustomizerSettingsService } from './shared/customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, SidebarComponent, HeaderComponent, FooterComponent, CustomizerSettingsComponent, NgClass],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {


  showAlert() {
    if (isPlatformBrowser(this.platformId)) {
      alert('This is a browser alert!');
    }
  }
    // Title
    title = 'Daxa - Angular 19 Material Design Admin Dashboard Template';

    // isSidebarToggled
    isSidebarToggled = false;

    constructor(
        public router: Router,
        private toggleService: ToggleService,
        private viewportScroller: ViewportScroller,
      public themeService: CustomizerSettingsService,
      @Inject(PLATFORM_ID) private platformId: object
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.viewportScroller.scrollToPosition([0, 0]);
            }
        });
        this.toggleService.isSidebarToggled$.subscribe(isSidebarToggled => {
            this.isSidebarToggled = isSidebarToggled;
        });
    }
    ngOnInit(): void {
    }

}
