class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
        box-sizing: border-box;
        }

        :host {
            display: block;
            padding: 30px;
            text-align: center;
            color: black;
            width: 100%;
        }
        </style>

        <h1>Football Players</h1>
        `;
    }
}

customElements.define('app-bar', AppBar);