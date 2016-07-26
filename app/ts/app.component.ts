import {Component} from "angular2/core";
import {ServicesComponent} from "./services.component";
import {PortfolioComponent} from "./portfolio.component";
import {MainHeaderComponent} from "./mainHeader.component";
import {MainNavComponent} from "./mainNav.component";
import {AboutComponent} from "./about.component";
import {ClientsComponent} from "./clients.component";
import {ContactComponent} from "./contact.component";
import {TeamComponent} from "./team.component";
import {PortfolioModalsComponent} from "./portfolioModals.component";

@Component({
    selector: "my-app",
    templateUrl: "app/views/app.component.html",
    directives: [ServicesComponent, PortfolioComponent, MainHeaderComponent, MainNavComponent, AboutComponent, ClientsComponent, ContactComponent, TeamComponent, PortfolioModalsComponent]
})
export class AppComponent { 
    title: string =  "first Component";
}