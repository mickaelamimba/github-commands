var b=Object.defineProperty;var v=(u,c,e)=>c in u?b(u,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[c]=e;var g=(u,c,e)=>(v(u,typeof c!="symbol"?c+"":c,e),e);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();function m(u){const{tagName:c,id:e,classList:o,style:t,textContent:n,onClick:a,innerHTML:s,attributes:i,change:d,contextmenu:l}=u;let r=null;if(e&&(r=document.getElementById(e)),r||(r=document.createElement(c)),e&&r.setAttribute("id",e),o&&r.classList.add(...o),t&&Object.assign(r.style,t),n&&(r.textContent=n),s&&(r.innerHTML=s),a&&r.addEventListener("click",a),i)for(const p of i)r.setAttribute(p.name,p.value);return d&&r.addEventListener("change",d),l&&r.addEventListener("contextmenu",l),r.parentElement&&r.parentElement.contains(r)?r.parentElement.replaceChild(r,r):document.body.appendChild(r),r}class y extends HTMLElement{constructor(){super();g(this,"text");g(this,"shadow");g(this,"btnElment");g(this,"color");const e=this.attachShadow({mode:"open"});this.shadow=e,this.text=this.getAttribute("text"),this.color=this.getAttribute("color"),this.btnElment=m({tagName:"button"}),this.shadowRoot.innerHTML=`
        <style>
        :host{
            display: block;
        }
        button {
        border: none;
        background: #000;
        color:'#fff' ;
        cursor: pointer;
        padding: 0.5rem;
        font-size: 1rem;
        font-weight: bold;
        outline: none;
                
            }
        </style>
        `}connectedCallback(){var e;(e=this.shadowRoot)==null||e.appendChild(this.btnElment)}disconnectedCallback(){this.btnElment.remove()}static get observedAttributes(){return["text","color"]}attributeChangedCallback(e,o,t){e==="text"&&(this.btnElment.textContent=t),e==="color"&&(this.btnElment.style.color=t)}}customElements.define("c-button",y);class C extends HTMLElement{constructor(){super();g(this,"desciption");g(this,"codeText");g(this,"shadow");g(this,"usage");const e=this.attachShadow({mode:"open"});this.shadow=e;const o=this.getAttribute("command"),t=this.getAttribute("description"),n=this.getAttribute("usage");this.usage=n,this.desciption=t,this.codeText=o,this.createDOMElements(),this.attachEventListeners(),this.addStyles()}createDOMElements(){var s,i,d;const e=document.createElement("div");e.classList.add("container"),(s=this.shadow)==null||s.appendChild(e);const o=document.createElement("div");o.classList.add("flex-box");const t=document.createElement("pre");t.textContent=this.codeText;const n=document.createElement("button");n.classList.add("copy-button"),n.textContent="Copier";const a=document.createElement("button");a.classList.add("show-description"),a.textContent="i",a.title="Afficher la description",(i=this.shadow)==null||i.appendChild(o),o.appendChild(t),o.appendChild(n),(d=this.shadow)==null||d.appendChild(a)}attachEventListeners(){var e,o;(e=this.shadow)==null||e.querySelector(".copy-button").addEventListener("click",()=>{this.copyToClipboard(this.codeText)}),(o=this.shadow)==null||o.querySelector(".show-description").addEventListener("click",()=>{this.dialogBoxDescription()})}addStyles(){var o;const e=document.createElement("style");e.textContent=`
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
    
          


            `,(o=this.shadow)==null||o.appendChild(e)}copyToClipboard(e){navigator.clipboard.writeText(e).then(()=>{this.copyAlertTost()},()=>{this.copyAlertTost("error")})}dialogBoxDescription(){var r;const e=document.createElement("div");e.classList.add("dialog-header-section");const o=document.createElement("h2");o.textContent="Description",o.classList.add("dialog-header");const t=document.createElement("div");t.classList.add("dialog-body");const n=document.createElement("h2");n.textContent="Usage",n.classList.add("dialog-usage");const a=this.usage,s=document.createElement("p");s.textContent=a,s.classList.add("dialog-paragraph-usage");const i=document.createElement("dialog");i.classList.add("dialog");const d=document.createElement("p");d.textContent=this.desciption,d.classList.add("dialog-paragraph"),d.style.marginBottom="1rem";const l=document.createElement("button");l.textContent="x",l.classList.add("dialog-close-button"),l.addEventListener("click",()=>{i.close(),setTimeout(()=>{i.remove()},1e3)}),e.appendChild(o),e.appendChild(l),i.appendChild(e),t.appendChild(d),t.appendChild(n),t.appendChild(s),i.appendChild(t),(r=this.shadowRoot)==null||r.appendChild(i),i.showModal()}copyAlertTost(e="success"){var s;const o=document.createElement("div");e==="success"?o.style.background="rgba(76, 175, 80, 1)":o.style.background="rgba(244, 67, 54, 1)",(s=document==null?void 0:document.querySelector("body #app"))==null||s.appendChild(o),o.textContent="Commande copié ! avec succès",o.classList.add("toast");const t=document.createElement("div");t.style.background="#fff",t.style.height="0.2rem",t.style.width="0%",t.style.borderRadius="0.2rem",t.style.marginTop="0.5rem",o.appendChild(t);let n=0;const a=setInterval(()=>{n+=1,t.style.width=n+"%",n>=100&&(clearInterval(a),setTimeout(()=>{o.remove()},1e3))},20)}static get observedAttributes(){return["command","description","usage"]}attributeChangedCallback(e,o,t){var n,a,s;if(e==="command"){this.codeText=t;const i=(n=this.shadowRoot)==null?void 0:n.querySelector("pre");i&&(i.textContent=t)}if(e==="description"){this.desciption=t;const i=(a=this.shadowRoot)==null?void 0:a.querySelector(".dialog-paragraph");i&&(i.textContent=t)}if(e==="usage"){this.usage=t;const i=(s=this.shadowRoot)==null?void 0:s.querySelector(".dialog-paragraph-usage");i&&(i.textContent=t)}}}customElements.define("copy-code",C);const x=[{command:"git init",description:"Initialise un nouveau dépôt Git",usage:"git init <nom_du_dossier>"},{command:"git clone <url>",description:"Clone un dépôt distant",usage:"git clone <url> <nom_du_dossier>"},{command:"git status",description:"Affiche les fichiers nouveaux, modifiés et non suivis dans le répertoire de travail",usage:"git status [-s | --short]"},{command:"git add <fichier>",description:"Ajoute un instantané du fichier à l'index, en préparation pour le suivi de version",usage:"git add <fichier>"},{command:'git commit -m "<message>"',description:"Enregistre des instantanés de fichiers de façon permanente dans l'historique des versions",usage:'git commit -am "<message>"'},{command:"git branch",description:"Affiche la liste des branches locales",usage:"git branch [-a]"},{command:"git branch -a",description:"Affiche la liste de toutes les branches locales et distantes",usage:"git branch -a"},{command:"git branch <nom>",description:"Crée une nouvelle branche à partir de la branche actuelle",usage:"git branch <nom>"},{command:"git branch -d <nom>",description:"Supprime une branche (locale uniquement)",usage:"git branch -d <nom>"},{command:"git branch -m <nom> <nouveau_nom>",description:"Renomme une branche",usage:"git branch -m <nom> <nouveau_nom>"},{command:"git checkout <nom>",description:"Bascule sur la branche spécifiée et met à jour le répertoire de travail",usage:"git checkout -b <nom>"},{command:"git merge <nom>",description:"Combine l'historique de la branche spécifiée avec la branche courante",usage:"git merge <nom> [--no-ff]"},{command:"git log",description:"Affiche l'historique des versions pour la branche courante",usage:"git log [--oneline]"},{command:"git log --follow <fichier>",description:"Affiche l'historique des versions, y compris les renommages, pour le fichier spécifié",usage:"git log --follow <fichier>"},{command:"git diff <branche cible>",description:"Affiche les différences de contenu entre deux branches",usage:"git diff <branche cible> [--cached <fichier>]"},{command:"git tag <nom>",description:"Marque le commit courant avec un tag",usage:'git tag -a <nom> -m "<message>"'},{command:"git show <commit>",description:"Affiche les détails et les modifications associées à un commit",usage:"git show <commit>"},{command:"git remote add <nom> <url>",description:"Ajoute un dépôt distant avec le nom spécifié",usage:"git remote add <nom> <url>"},{command:"git fetch <nom>",description:"Récupère les références du dépôt distant spécifié",usage:"git fetch <nom> [<branche>] "},{command:"git merge <nom>/<branche>",description:"Fusionne la branche distante dans la branche locale courante",usage:"git merge <nom>/<branche>"},{command:"git push <nom> <branche>",description:"Pousse les commits locaux vers la branche distante",usage:"git push <nom> <branche>"},{command:"git pull",description:"Récupère les changements depuis un dépôt distant",usage:"git pull <nom> <branche>"},{command:"git reset --hard <commit>",description:"Réinitialise la branche courante au commit spécifié, en supprimant les modifications locales",usage:"git reset --hard <commit>"},{command:"git clean -df",description:"Supprime les fichiers non suivis du répertoire de travail",usage:"git clean -df"},{command:"git config --global user.name <nom>",description:"Configure le nom associé à vos opérations de commit",usage:"git config --global user.name <nom>"},{command:"git config --global user.email <adresse>",description:"Configure l'adresse email associée à vos opérations de commit",usage:"git config --global user.email <adresse>"},{command:"git config --global alias.<alias-name> <commande>",description:"Crée un alias pour une commande Git",usage:"git config --global alias.<alias-name> <commande>"},{command:"git config --global --edit",description:"Ouvre le fichier de configuration global dans un éditeur de texte",usage:"git config --global --edit"},{command:"git reset HEAD <fichier>",description:"Annule la préparation du fichier, le retirant de l'index, sans modifier son contenu",usage:"git reset HEAD <fichier>"},{command:"git checkout -- <fichier>",description:"Annule les modifications apportées au fichier non enregistré",usage:"git checkout -- <fichier>"},{command:"git remote -v",description:"Affiche les URL des dépôts distants configurés",usage:"git remote -v"},{command:"git push --tags",description:"Pousse tous les tags vers le dépôt distant",usage:"git push --tags"},{command:"git tag -d <nom>",description:"Supprime le tag local spécifié",usage:"git tag -d <nom>"},{command:"git push <nom> :refs/tags/<tagname>",description:"Supprime le tag distant spécifié",usage:"git push <nom> :refs/tags/<tagname>"},{command:"git reset --hard origin/<nom>",description:"Réinitialise la branche locale en supprimant les modifications non enregistrées et en récupérant les modifications distantes",usage:"git reset --hard origin/<nom>"},{command:"git reset --hard <commit>",description:"Réinitialise la branche locale en supprimant les modifications après le commit spécifié",usage:"git reset --hard <commit>"},{command:"git clean -df",description:"Supprime les fichiers non suivis et ignorés du répertoire de travail",usage:"git clean -df"}];class E extends HTMLElement{constructor(){super();g(this,"commande");g(this,"currentSearchValue");g(this,"shadow");const e=this.attachShadow({mode:"open"});this.shadow=e,this.commande=x,this.currentSearchValue="",this.createDOMElements(),this.attachEventListeners();const o=document.createElement("style");o.textContent=`
        :host{
            display: block;
            font-family: sans-serif;
            font-size: 1rem;
        }
        .container{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem;
        padding: 1rem 0;
        transition: transform 0.3s ease-in-out;
        
             }
     .card{
        background: #fff;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        position: relative;
         }
     .card{
        transition: transform 0.3s ease-in-out;
     }
    .card:hover {
        transform: scale(1.05);
    }
    @keyframes cardEnterAnimation {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    .card::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0.5rem;
        height: 100%;
        background: #000;
        border-radius: 0.5rem 0 0 0.5rem;
    }
    .card .draggable{
        cursor: move;
    }
    .card pre{
        background: #000;
        color: #fff;
        padding: 1rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        
    }
    serche-card{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    .search{
        display: block;
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        outline: none;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        box-sizing: border-box;
    }
    .search:focus{
        border: 1px solid #000;
    }
    .search::placeholder{
        color: #ccc;
    }
    .btn-section{
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        align-items: center;
        
    }
    
    .btn-favorite,.btn-all, .remove-favorite{
        border: none;
        background: #000;
        color: #fff;
        cursor: pointer;
        padding: 0.5rem;
        font-size: 1rem;
        font-weight: bold;
        outline: none;
    }
    .btn-favorite:hover,.btn-all:hover, .remove-favorite:hover{
        color: #ccc;
    }
    .btn-favorite-section{
       text-align: right;
    }
    
    .btn-favorite{
        color: #f1c40f;
        position: relative;
        
    }
    .btn-favorite:hover{
        color: #f39c12;
    }
    .remove-favorite{
        color: #e74c3c;
    }
    .remove-favorite:hover{
        color: #c0392b;
    }
    sup{
        position: absolute;
        top: -0.8rem;
        right: -0.5rem;
        background: #f1c40f;
        color: #fff;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.75rem;
        font-weight: bold;

    }
    [draggable="true"]{
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
    .dragging{
      opacity:0.25
    }

   


   
    `,e.appendChild(o)}createDOMElements(){var p,h,f;const e=m({tagName:"section",classList:["btn-section"]}),o=m({tagName:"sup",classList:["sup-top-btn"],textContent:"0"}),t=m({tagName:"draggable-box",textContent:"Ajouter une commande au favoris",classList:["draggable-box"]}),n=m({tagName:"h1",textContent:"Git Commands"}),a=m({tagName:"div",classList:["box"]}),s=m({tagName:"div",classList:["serche-card"]}),i=m({tagName:"input",attributes:[{name:"type",value:"text"},{name:"placeholder",value:"Rechercher une commande"},{name:"id",value:"search"}],classList:["search"]});s.appendChild(i);const d=document.createElement("button");d.setAttribute("class","btn-favorite"),d.textContent="Mes favoris",d.appendChild(o);const l=document.createElement("button");l.setAttribute("class","btn-all"),l.textContent="Toutes les commandes",e.appendChild(d),e.appendChild(l),a.appendChild(t),a.appendChild(s),a.appendChild(e);const r=document.createElement("div");r.setAttribute("class","container"),(p=this.shadow)==null||p.appendChild(n),(h=this.shadow)==null||h.appendChild(a),(f=this.shadow)==null||f.appendChild(r)}countFavoiteCommande(){let e=0;for(const o of this.commande)o.favorite&&e++;return e}attachEventListeners(){var n,a,s;const e=(n=this.shadow)==null?void 0:n.querySelector("#search");e==null||e.addEventListener("keyup",()=>{const i=e.value.toLowerCase();if(i!==this.currentSearchValue){this.currentSearchValue=i;const d=this.commande.filter(l=>l.command.toLowerCase().includes(this.currentSearchValue));this.render(d)}});const o=(a=this.shadow)==null?void 0:a.querySelector(".btn-favorite");o==null||o.addEventListener("click",()=>{this.render(this.commande,!0)});const t=(s=this.shadow)==null?void 0:s.querySelector(".btn-all");t==null||t.addEventListener("click",()=>{this.render(this.commande,!1)})}connectedCallback(){var o;this.adoptedCallback(),this.render(this.commande);const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".draggable-box");e==null||e.addEventListener("itemdropped",t=>{const n=t.detail;this.setFavoriteCommande(n,!0),this.render(this.commande,!1)})}setFavoriteCommande(e,o){for(const t of this.commande)t.command===e.command&&(e.favorite=!!o,Object.assign(t,e))}onDragStart(e){var i;const o=e.target,t=o.getAttribute("command"),n=o.getAttribute("description"),a=o.getAttribute("usage"),s={command:t,description:n,usage:a,favorite:!0};(i=e.dataTransfer)==null||i.setData("text/plain",JSON.stringify(s))}render(e,o){var s,i,d;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".sup-top-btn");t.textContent=this.countFavoiteCommande().toString(),this.saveToLocalStorage();const n=document.createElement("div");n.setAttribute("class","container"),n.style.transform="scale(0.95)",n.style.opacity="0",n.style.transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out",o?e=e.filter(l=>l.favorite):e=e.filter(l=>!l.favorite),e.forEach(l=>{const r=this.createCommandCard(l);n.appendChild(r)});const a=(i=this.shadowRoot)==null?void 0:i.querySelector(".container");a&&a.remove(),(d=this.shadowRoot)==null||d.appendChild(n),setTimeout(()=>{n.style.transform="scale(1)",n.style.opacity="1"},0)}createCommandCard(e){const o=m({tagName:"section",classList:["btn-favorite-section"]}),t=m({tagName:"c-button",attributes:[{name:"text",value:"Supprimer des favoris"},{name:"color",value:"#e74c3c"}],onClick:()=>{this.setFavoriteCommande(e,!1),this.render(this.commande,!0)}}),n=m({tagName:"c-button",attributes:[{name:"text",value:"Ajouter au favoris"},{name:"color",value:"#f1c40f"}],onClick:()=>{this.setFavoriteCommande(e,!0),this.render(this.commande,!1)}}),a=m({tagName:"div",classList:["card","draggable"]}),s=m({tagName:"copy-code",attributes:[{name:"command",value:e.command},{name:"description",value:e.description},{name:"usage",value:e.usage}],style:{animation:"cardEnterAnimation 0.3s ease-in-out"},textContent:e.command,classList:["draggable"]});return s.draggable=!0,s.addEventListener("dragstart",this.onDragStart.bind(this)),a.appendChild(s),a.appendChild(o),e.favorite?(s.draggable=!1,s.classList.remove("draggable"),a.classList.remove("draggable"),o.appendChild(t),n.remove()):(o.appendChild(n),t.remove()),a}highlightSearchMatches(e,o){const t=new RegExp(o,"gi");return e.replace(t,n=>`<mark>${n}</mark>`)}saveToLocalStorage(){localStorage.setItem("commande",JSON.stringify(this.commande))}loadFromLocalStorage(){const e=localStorage.getItem("commande");e&&(this.commande=JSON.parse(e))}disconnectedCallback(){this.saveToLocalStorage()}adoptedCallback(){this.loadFromLocalStorage()}}customElements.define("git-commands",E);class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
        <style>
        :host {
            display: block;
            border: 2px dashed #bababa;
            padding: 1rem;
            margin: 1rem 0;
            background-color: white;
            color: black;
            font-family: sans-serif;
            font-size: 1.5rem;
            text-align: center;
            }
            </style>
        <slot></slot>
        `,this.addEventListener("dragover",this.handleDragOver.bind(this)),this.addEventListener("drop",this.handleDrop.bind(this))}handleDragOver(c){c.preventDefault(),c.dataTransfer.dropEffect="move"}handleDrop(c){c.preventDefault();const e=JSON.parse(c.dataTransfer.getData("text/plain")),o=new CustomEvent("itemdropped",{bubbles:!0,detail:e});this.dispatchEvent(o)}}customElements.define("draggable-box",w);const L="github-commands",k="0.1.1",S="module",A="https://mickaelamimba.github.io/github-commands/",T={dev:"vite",build:"tsc && vite build",preview:"vite preview",deploy:"gh-pages -d dist"},D={"gh-pages":"^6.0.0",typescript:"^5.0.2",vite:"^4.4.5"},R={name:L,private:!0,version:k,type:S,homepage:A,scripts:T,devDependencies:D},N=R.version,q=document.querySelector("#app-footer"),M=` <p>©2023 - <a href="mailto:michael.amimba@accenture.com">AMIMBA MICHAEL</a> - Accenture  - Git commands version ${N}</p>`;q.appendChild(document.createRange().createContextualFragment(M));
