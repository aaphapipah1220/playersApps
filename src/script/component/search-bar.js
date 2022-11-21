class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            max-width: 800px;
            padding: 15px;
            border-radius: 30px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: #2f3b2a;
        }
        
        .search-container > input {
            width: 75%;
            padding: 15px;
            border-radius: 20px;
            border-bottom: 3px solid #367E18;
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 3px solid red;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container > input::placeholder {
            color: #367E18;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 15%;
            cursor: pointer;
            background-color: #C6EBC5;
            color: #367E18;
            font-weight: normal;
            border-radius: 30%;
            border: 0;
            padding: 15px;
            text-transform: uppercase;
            margin-left: auto;
        }
        
        @media screen and (max-width: 550px) {
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 15px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        </style>

        <div id="search-container" class="search-container">
            <input type="search" placeholder="Search name's players" id="searchElement">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);