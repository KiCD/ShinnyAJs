import {Component} from '@angular/core'

@Component({
    selector:'navigation-bar',
    template: `
    <div class="top-bar">
        <div class="top-bar-title">The Awesome Company</div>
        <div>
            <ul class="menu">
                <li class="navigation-menu left"><a href="#">Home</a></li>
                <li class="navigation-menu left"><a href="#">Login</a></li>
                <li class="navigation-menu right"><a href="#">x</a></li>
            </ul>
        </div>
    </div>
`,
styleUrls:['./navigation-bar.component.css']
})

export class NavigationBarComponent{}