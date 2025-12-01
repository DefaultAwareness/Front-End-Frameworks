import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageInput = "";
  displayedMessage = "Hello World";

  displayMessage() {
    this.displayedMessage = this.messageInput || "Hello World";
  }
}
