System.register(["angular2/core", "./services.component", "./portfolio.component", "./mainHeader.component", "./mainNav.component", "./about.component", "./clients.component", "./contact.component", "./team.component", "./portfolioModals.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, services_component_1, portfolio_component_1, mainHeader_component_1, mainNav_component_1, about_component_1, clients_component_1, contact_component_1, team_component_1, portfolioModals_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_component_1_1) {
                services_component_1 = services_component_1_1;
            },
            function (portfolio_component_1_1) {
                portfolio_component_1 = portfolio_component_1_1;
            },
            function (mainHeader_component_1_1) {
                mainHeader_component_1 = mainHeader_component_1_1;
            },
            function (mainNav_component_1_1) {
                mainNav_component_1 = mainNav_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (clients_component_1_1) {
                clients_component_1 = clients_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (team_component_1_1) {
                team_component_1 = team_component_1_1;
            },
            function (portfolioModals_component_1_1) {
                portfolioModals_component_1 = portfolioModals_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "first Component";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "app/views/app.component.html",
                        directives: [services_component_1.ServicesComponent, portfolio_component_1.PortfolioComponent, mainHeader_component_1.MainHeaderComponent, mainNav_component_1.MainNavComponent, about_component_1.AboutComponent, clients_component_1.ClientsComponent, contact_component_1.ContactComponent, team_component_1.TeamComponent, portfolioModals_component_1.PortfolioModalsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map