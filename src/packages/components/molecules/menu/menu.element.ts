import { LitElement, html, customElement, css, TemplateResult } from 'lit-element';

@customElement('menu-element')
export class MenuElement extends LitElement {
  static get styles() {
    return [
      css`
        ul {
          display: flex;
        }
        li {
          margin: 0 0 0 20px;
          list-style-type: none;
          font-size: 0.85em;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `,
    ];
  }

  public render(): TemplateResult {
    return html`
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          |
        </li>
        <li>
          <a href="#">Sing In</a>
        </li>
      </ul>
    `;
  }
}
