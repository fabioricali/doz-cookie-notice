import {Component} from "doz";

export default class extends Component{

    constructor(o) {
        super(o);

        this.props = {
            storageKey: 'doz-cookie-notice-agreement',
            position: 'bottom',
            message: '',
            moreInfoText: '',
            moreInfoLink: '',
            privacyLink: '',
            okButtonText: 'Ok',
            theme: 'dark'
        }
    }

    template(h) {
        
        //language=HTML
        return h`
            <style> 
                :component {
                    display: ${this.agreementExists() ? 'none' : 'block'};
                    position: fixed;
                    ${this.props.position === 'top' ? 'top: 0': 'bottom: 0'};
                    left: 0;
                    width: 100%;
                    z-index: 99999;
                    font-family: Arial, 'sans-serif';
                }
                
                * {
                    box-sizing: border-box;
                }
                
                .cookie-notice-container {
                    ${this.props.theme === 'dark' ? 'background: #000; color: #fff;' : 'background: #fff; color: #000;'}
                    padding: 24px;
                    font-size: 14px;
                }
                
                .message-container {
                    margin-bottom: 16px;
                }
                
                .button {
                    padding: 8px;
                    border: none;
                    display: inline-block;
                    border-radius: 4px;
                    text-transform: uppercase;
                }
                
                .ok-button {
                    border: none;
                    background: cornflowerblue;
                    color: #fff;
                    cursor: pointer;
                }
                
                a {
                    ${this.props.theme === 'dark' ? 'color: #fff;' : 'color: #000;'}
                }
            </style>
            <div class="cookie-notice-container" data-nosnippet="true">
                <div class="message-container">
                    <span class="message-text">${this.props.message}</span>
                    <span d-show="${!!this.props.moreInfoLink}" class="more-info-text">&nbsp;
                        <a href="${this.props.moreInfoLink}" target="_blank">${this.props.moreInfoText}</a>
                    </span>
                </div>
                <div class="buttons-container">
                    <button class="ok-button button" onclick="${this.agree}">
                        ${this.props.okButtonText}
                    </button>
                </div>
            </div>
        `
    }

    agreementExists() {
        return !!localStorage.getItem(this.props.storageKey);
    }

    agree() {
        localStorage.setItem(this.props.storageKey, new Date().getTime() + '');
        this.render();
    }

};
