import {Component} from "@angular/core";
import {LOGO} from "../../../../global/constants/image";
@Component({
  selector: 'app-header-logo',
  templateUrl: 'header-logo.component.html'
})

export class HeaderLogoComponent {
  logo = LOGO
}
