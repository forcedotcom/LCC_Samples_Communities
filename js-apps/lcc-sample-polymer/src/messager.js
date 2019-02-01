import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import LCC from 'lightning-container';

class LCCMessager extends PolymerElement {
  static get properties () {
    return {
      buttonText: {
        type: String,
        value: 'Send'
      }
    }
  }

  static get template() {
    return html`
      <style>
        paper-button.sendMessageButton {
          background-color: var(--paper-indigo-700);
          color: #FFFFFF;
          font-weight: bold;
        }
        paper-button.sendMessageButton:hover {
          background-color: var(--paper-indigo-900);
        }

        paper-input.messageInput {
          --primary-text-color: #000000;
          margin-bottom: 10px;
        }
      </style>

      <div>
        <paper-input class="messageInput" label="Message to Lightning Component" value="{{messageToLC}}"></paper-input>
        <paper-button raised class="sendMessageButton" on-click="handleClick">[[buttonText]]</paper-button>
      </div>`;
  }

  handleClick() {
    // Send message to hosting component.
    LCC.sendMessage(this.messageToLC);
  }
}

customElements.define('lcc-messager', LCCMessager);
