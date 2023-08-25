
export class CopyCode extends HTMLElement{
    desciption: string;
    codeText: string;
    shadow: ShadowRoot | null;
    usage: string;

    
    constructor(){
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            this.shadow = shadow;
            const codeText = this.getAttribute('command');
            const commandDesciption = this.getAttribute('description');
            const usage = this.getAttribute('usage');
            //@ts-ignore
            this.usage = usage;
            //@ts-ignore
            this.desciption = commandDesciption;
            //@ts-ignore
            this.codeText = codeText;
          
           
            this.createDOMElements();    
            this.attachEventListeners(); 
          
            this.addStyles();

           
        }

        createDOMElements(){
            const container = document.createElement('div');
            container.classList.add('container');
            this.shadow?.appendChild(container);
            const flexBox = document.createElement('div');
            flexBox.classList.add('flex-box');
    
            const codeElement = document.createElement('pre');
            codeElement.textContent = this.codeText;
    
            const copyButton = document.createElement('button');
            copyButton.classList.add('copy-button');
            copyButton.textContent = 'Copier';
    
            const showDescriptionIcon = document.createElement('button');
            showDescriptionIcon.classList.add('show-description');
            showDescriptionIcon.textContent = 'i';
            showDescriptionIcon.title = 'Afficher la description';

            this.shadow?.appendChild(flexBox);
            flexBox.appendChild(codeElement);
            flexBox.appendChild(copyButton);
            this.shadow?.appendChild(showDescriptionIcon);
        }
        
        attachEventListeners() {
            //@ts-ignore
            this.shadow.querySelector('.copy-button').addEventListener('click', () => {
                this.copyToClipboard(this.codeText);
            });
    //@ts-ignore
            this.shadow.querySelector('.show-description').addEventListener('click', () => {
                this.dialogBoxDescription();
            });
        }
        addStyles() {
            const style = document.createElement('style');
            style.textContent = `
            :host{
                display: block;
            }
           
            .flex-box{
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                background: #000;
                color: #fff;
               
            }
            .copy-button{
                position: absolute;
                top: 0;
                right: 0;
                border: none;
                background: transparent;
                color: #fff;
                cursor: pointer;
                padding: 0.5rem;
                font-size: 1rem;
                font-weight: bold;
                outline: none;
            }   
            .copy-button:hover{
                color: #ccc;
            }
            pre{
                
                padding: 1rem;
                border-radius: 0.5rem;
                overflow-x: auto;
            }
            pre::selection{
                background: #fff;
                color: #000;
            }
            pre::-moz-selection{
                background: #fff;
                color: #000;
            }
            pre::-webkit-selection{
                background: #fff;
                color: #000;
            }
            
            .show-description{
                border: none;
                background: #000;
                color: #fff;
                cursor: pointer;
               
                font-size: 1rem;
                font-weight: bold;
                outline: none;
                
            }
            .show-description:hover{
                color: #ccc;
            }
            
            .toast{
                position: fixed;
                top: 0;
                left: 0;
                background: #000;
                color: #fff;
                padding: 1rem;
                border-radius: 0.5rem;
                font-size: 0.8rem;
                font-weight: bold;
                width: 100%;
                margin: 0;
                text-align: center;
                animation: toast 1s ease-in-out;
                
            }
            @keyframes toast{
                0%{
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            }
            .dialog::backdrop{
                background: rgba(0, 0, 0, 0.5);
            }
            .dialog{
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #000;
                color: #fff;
                padding: 1rem;
                border-radius: 0.5rem;
                font-size: 0.8rem;
                font-weight: bold;
                width: 90%;
                margin: 0;
                text-align: center;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
                animation: toast 1s ease-in-out;
            }
            
            
            .dialog-close-button{
                position: absolute;
                top: 0;
                right: 0;
                border: none;
                background: #e74c3c;
                color: #fff;
                cursor: pointer;
                padding: 0.5rem;
                font-size: 1rem;
                font-weight: bold;
                outline: none;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

            }
            .dialog-close-button:focus{
                outline: none;
            }
    

            .dialog-close-button:hover{
                color: #ccc;
                background: #c0392b;
            }
            .dialog-header-section{
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                background: #000;
                color: #fff;

            }
            .dialog-header ,.dialog-usage{
                margin: 0;
                padding: 0;
                font-size: 1rem;
                font-weight: bold;
            }
            .dialog-body{
                margin-top: 1rem;
            }
            .dialog-paragraph, .dialog-paragraph-usage{
                margin: 0;
                padding: 0;
                font-size: 0.8rem;
                font-weight: normal;
            }
    
          


            `

            this.shadow?.appendChild(style);
            


        
        }
        copyToClipboard(text: string) {
            navigator.clipboard.writeText(text).then(() => {
                this.copyAlertTost();
            }, () => {
                this.copyAlertTost('error');
            });

        }
        dialogBoxDescription() {
            const dialogHeaderSection = document.createElement('div');
            dialogHeaderSection.classList.add('dialog-header-section');
            const dialoHeader = document.createElement('h2');
            dialoHeader.textContent = 'Description';
            dialoHeader.classList.add('dialog-header');

            const dialogBody = document.createElement('div');
            dialogBody.classList.add('dialog-body');

            const dialogUsage = document.createElement('h2');
            dialogUsage.textContent = 'Usage';
            dialogUsage.classList.add('dialog-usage');


            
            const usage = this.usage;
            const usageElement = document.createElement('p');
            usageElement.textContent = usage;
            usageElement.classList.add('dialog-paragraph-usage');
        
         

        
            const dialog = document.createElement('dialog');
            dialog.classList.add('dialog');
        
           
            const dialogParagraph = document.createElement('p');
            dialogParagraph.textContent = this.desciption;
            dialogParagraph.classList.add('dialog-paragraph');
            dialogParagraph.style.marginBottom = '1rem';
            
            
          
            const dialogCloseButton = document.createElement('button');
            dialogCloseButton.textContent = 'x';
            dialogCloseButton.classList.add('dialog-close-button');
            dialogCloseButton.addEventListener('click', () => {
                
                dialog.close();
        
                
                setTimeout(() => {  
                    dialog.remove();
                }, 1000);
            });

            dialogHeaderSection.appendChild(dialoHeader);
            dialogHeaderSection.appendChild(dialogCloseButton);
            dialog.appendChild(dialogHeaderSection);
        
            dialogBody.appendChild(dialogParagraph);
            dialogBody.appendChild(dialogUsage);
            dialogBody.appendChild(usageElement);
            dialog.appendChild(dialogBody);
        
        
        
           
            this.shadowRoot?.appendChild(dialog);
        
           
            dialog.showModal();
        }
        

       

        copyAlertTost (type: string = 'success'){ 
            const toast = document.createElement('div');
            if(type === 'success'){
                toast.style.background = 'rgba(76, 175, 80, 1)';
            }else{
                toast.style.background = 'rgba(244, 67, 54, 1)';
            }
           document?.querySelector('body #app')?.appendChild(toast);
            toast.textContent = 'Commande copié ! avec succès';
            toast.classList.add('toast');
           
            const progressBar = document.createElement('div');
            progressBar.style.background = '#fff';
            progressBar.style.height = '0.2rem';
            progressBar.style.width = '0%';
            progressBar.style.borderRadius = '0.2rem';
            progressBar.style.marginTop = '0.5rem';
            toast.appendChild(progressBar);
            let progress = 0;
            const animationInterval = setInterval(() => {
                progress += 1;
                progressBar.style.width = progress + '%';
                if (progress >= 100) {
                    clearInterval(animationInterval);
                    setTimeout(() => {
                        toast.remove();
                    }, 1000); 
                }
            }, 20);
           
        } 
        
    static get observedAttributes() {
        return ['command', 'description', 'usage'];
    }
    //@ts-ignore
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if(name === 'command'){
            this.codeText = newValue;
            const codeElement = this.shadowRoot?.querySelector('pre');
            if(codeElement){
                codeElement.textContent = newValue;
            }
        }
        if(name === 'description'){
            this.desciption = newValue;
            
            const descriptionElement = this.shadowRoot?.querySelector('.dialog-paragraph');
            if(descriptionElement){
                descriptionElement.textContent = newValue;
                
            }
        }
        if(name === 'usage'){

            this.usage = newValue;
            const usageElement = this.shadowRoot?.querySelector('.dialog-paragraph-usage');
            if(usageElement){
                usageElement.textContent = newValue;
            }
        }
        
    }


}

customElements.define('copy-code', CopyCode);