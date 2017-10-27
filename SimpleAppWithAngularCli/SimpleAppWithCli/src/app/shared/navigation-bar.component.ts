import {Component} from '@angular/core'

@Component({
    selector:'navigation-bar',
    template: `
    <div class="top-bar">
        <div class="top-bar-title">The Awesome Company</div>
        <div>
            <ul class="menu">
                <li class="navigation-menu left"><a [routerLink]="['']">Home</a></li>
                <li class="navigation-menu left"><a [routerLink]="['/login']>Login</a></li>
                <li class="navigation-menu right">x</li>
            </ul>
        </div>
    </div>
`,
styleUrls:['./navigation-bar.component.css']
})

export class NavigationBarComponent{}