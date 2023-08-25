var g=Object.defineProperty;var b=(l,r,e)=>r in l?g(l,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[r]=e;var m=(l,r,e)=>(b(l,typeof r!="symbol"?r+"":r,e),e);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();class v extends HTMLElement{constructor(){super();m(this,"desciption");m(this,"codeText");m(this,"shadow");const e=this.attachShadow({mode:"open"});this.shadow=e;const o=this.getAttribute("command"),t=this.getAttribute("description");this.desciption=t,this.codeText=o,this.createDOMElements(),this.attachEventListeners(),this.addStyles()}createDOMElements(){var s,a,c;const e=document.createElement("div");e.classList.add("container"),(s=this.shadow)==null||s.appendChild(e);const o=document.createElement("div");o.classList.add("flex-box");const t=document.createElement("pre");t.textContent=this.codeText;const i=document.createElement("button");i.classList.add("copy-button"),i.textContent="Copier";const n=document.createElement("button");n.classList.add("show-description"),n.textContent="i",n.title="Afficher la description",(a=this.shadow)==null||a.appendChild(o),o.appendChild(t),o.appendChild(i),(c=this.shadow)==null||c.appendChild(n)}attachEventListeners(){this.shadow.querySelector(".copy-button").addEventListener("click",()=>{this.copyToClipboard(this.codeText)}),this.shadow.querySelector(".show-description").addEventListener("click",()=>{this.dialogBoxDescription(this.desciption)})}addStyles(){var o;const e=document.createElement("style");e.textContent=`
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
                background: transparent;
                color: #fff;
                cursor: pointer;
                padding: 0.5rem;
                font-size: 1rem;
                font-weight: bold;
                outline: none;
            }
            .dialog-close-button:hover{
                color: #ccc;
            }
            `,(o=this.shadow)==null||o.appendChild(e)}copyToClipboard(e){navigator.clipboard.writeText(e).then(()=>{this.copyAlertTost()},()=>{this.copyAlertTost("error")})}dialogBoxDescription(e){var n;console.log(e);const o=document.createElement("dialog");o.classList.add("dialog");const t=document.createElement("p");t.textContent=this.desciption,t.classList.add("dialog-paragraph"),t.style.marginBottom="1rem";const i=document.createElement("button");i.textContent="x",i.classList.add("dialog-close-button"),i.addEventListener("click",()=>{o.close(),setTimeout(()=>{o.remove()},1e3)}),o.appendChild(i),o.appendChild(t),(n=this.shadowRoot)==null||n.appendChild(o),o.showModal()}copyAlertTost(e="success"){var s;const o=document.createElement("div");e==="success"?o.style.background="rgba(76, 175, 80, 1)":o.style.background="rgba(244, 67, 54, 1)",(s=document==null?void 0:document.querySelector("body #app"))==null||s.appendChild(o),o.textContent="Commande copié ! avec succès",o.classList.add("toast");const t=document.createElement("div");t.style.background="#fff",t.style.height="0.2rem",t.style.width="0%",t.style.borderRadius="0.2rem",t.style.marginTop="0.5rem",o.appendChild(t);let i=0;const n=setInterval(()=>{i+=1,t.style.width=i+"%",i>=100&&(clearInterval(n),setTimeout(()=>{o.remove()},1e3))},20)}static get observedAttributes(){return["command","description"]}attributeChangedCallback(e,o,t){var i,n;if(e==="command"){this.codeText=t;const s=(i=this.shadowRoot)==null?void 0:i.querySelector("pre");s&&(s.textContent=t)}if(e==="description"){this.desciption=t;const s=(n=this.shadowRoot)==null?void 0:n.querySelector(".dialog-paragraph");s&&(s.textContent=t)}}}customElements.define("copy-code",v);class y extends HTMLElement{constructor(){super();m(this,"commande");m(this,"currentSearchValue");m(this,"shadow");const e=this.attachShadow({mode:"open"});this.shadow=e,this.commande=[{command:"git init",description:"Initialise un nouveau dépôt Git"},{command:"git clone <url>",description:"Clone un dépôt distant"},{command:"git status",description:"Liste tous les nouveaux fichiers et les fichiers modifiés à commiter"},{command:"git add <fichier>",description:"Ajoute un instantané du fichier, en préparation pour le suivi de version"},{command:'git commit -m "<message>"',description:"Enregistre des instantanés de fichiers de façon permanente dans l'historique des versions"},{command:"git branch",description:"Liste toutes les branches locales dans le dépôt courant"},{command:"git branch -a",description:"Liste toutes les branches locales et distantes dans le dépôt courant"},{command:"git branch <nom>",description:"Crée une nouvelle branche"},{command:"git branch -d <nom>",description:"Supprime une branche"},{command:"git checkout <nom>",description:"Bascule sur la branche spécifiée et met à jour le répertoire de travail"},{command:"git merge <nom>",description:"Combine l'historique de la branche spécifiée avec la branche courante"},{command:"git log",description:"Montre l'historique des versions pour la branche courante"},{command:"git log --follow <fichier>",description:"Montre l'historique des versions, y compris les actions de renommage, pour le fichier spécifié"},{command:"git diff <branche cible>",description:"Montre les différences de contenu entre deux branches"},{command:"git tag <nom>",description:"Marque le commit spécifié"},{command:"git show <commit>",description:"Montre les objets et les modifications de métadonnées associés au commit spécifié"},{command:"git remote add <nom> <url>",description:"Ajoute un dépôt distant avec le nom spécifié"},{command:"git fetch <nom>",description:"Récupère tout le contenu du dépôt distant spécifié"},{command:"git merge <nom>/<branche>",description:"Fusionne la branche distante dans la branche locale courante"},{command:"git push <nom> <branche>",description:"Envoie tous les commits de la branche locale vers GitHub"},{command:"git pull",description:"Récupère tout le contenu du dépôt distant spécifié"},{command:"git reset --hard <commit>",description:"Supprime tout l'historique et les modifications effectuées après le commit spécifié"},{command:"git clean -df",description:"Supprime tous les nouveaux fichiers non suivis"},{command:"git config --global user.name <nom>",description:"Définit le nom que vous voulez associer à toutes vos opérations de commit"},{command:"git config --global user.email <adresse>",description:"Définit l'email que vous voulez associer à toutes vos opérations de commit"},{command:"git config --global alias.<alias-name> <command>",description:"Crée un alias Git"},{command:"git config --global --edit",description:"Ouvre le fichier de configuration dans un éditeur de texte, pour que vous puissiez le modifier manuellement"},{command:"git reset HEAD <fichier>",description:"Annule la préparation du fichier, en retirant le fichier de l'index, sans modifier son contenu"},{command:"git checkout -- <fichier>",description:"Annule les modifications du fichier"},{command:"git remote -v",description:"Montre les dépôts distants configurés"},{command:"git push --tags",description:"Envoie tous les tags vers GitHub"},{command:"git tag -d <nom>",description:"Supprime le tag local"},{command:"git push <nom> :refs/tags/<tagname>",description:"Supprime le tag distant"},{command:"git reset --hard origin/<nom>",description:"Supprime toutes les modifications locales et récupère la branche spécifiée sur GitHub"},{command:"git reset --hard <commit>",description:"Supprime tout l'historique et les modifications effectuées après le commit spécifié"},{command:"git clean -df",description:"Supprime tous les nouveaux fichiers non suivis"},{command:"git config --global user.name <nom>",description:"Définit le nom que vous voulez associer à toutes vos opérations de commit"},{command:"git config --global user.email <adresse>",description:"Définit l'email que vous voulez associer à toutes vos opérations de commit"},{command:"git config --global alias.<alias-name> <command>",description:"Crée un alias Git"},{command:"git config --global --edit",description:"Ouvre le fichier de configuration dans un éditeur de texte, pour que vous puissiez le modifier manuellement"},{command:"git reset HEAD <fichier>",description:"Annule la préparation du fichier, en retirant le fichier de l'index, sans modifier son contenu"},{command:"git checkout -- <fichier>",description:"Annule les modifications du fichier"},{command:"git remote -v",description:"Montre les dépôts distants configurés"},{command:"git push --tags",description:"Envoie tous les tags vers GitHub"},{command:"git tag -d <nom>",description:"Supprime le tag local"},{command:"git push <nom> :refs/tags/<tagname>",description:"Supprime le tag distant"},{command:"git reset --hard origin/<nom>",description:"Supprime toutes les modifications locales et récupère la branche spécifiée sur GitHub"},{command:"git reset --hard <commit>",description:"Supprime tout l'historique et les modifications effectuées après le commit spécifié"},{command:"git clean -df",description:"Supprime tous les nouveaux fichiers non suivis"},{command:"git config --global user.name <nom>",description:"Définit le nom que vous voulez associer à toutes vos opérations de commit"},{command:"git config --global user.email <adresse>",description:"Définit l'email que vous voulez associer à toutes vos opérations de commit"},{command:"git config --global alias.<alias-name> <command>",description:"Crée un alias Git"}],this.currentSearchValue="",this.createDOMElements(),this.attachEventListeners();const o=document.createElement("style");o.textContent=`
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

   


   
    `,e.appendChild(o)}createDOMElements(){var p,h,f;const e=document.createElement("section");e.setAttribute("class","btn-section");const o=document.createElement("sup");o.setAttribute("class","sup-top-btn"),o.textContent="0";const t=document.createElement("draggable-box");t.textContent="Ajouter une commande au favoris",t.setAttribute("class","draggable-box");const i=document.createElement("h1");i.textContent="Git Commands";const n=document.createElement("div");n.setAttribute("class","box");const s=document.createElement("div"),a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("placeholder","Rechercher une commande"),a.setAttribute("id","search"),a.setAttribute("class","search"),s.appendChild(a),s.setAttribute("class","serche-card");const c=document.createElement("button");c.setAttribute("class","btn-favorite"),c.textContent="Mes favoris",c.appendChild(o);const d=document.createElement("button");d.setAttribute("class","btn-all"),d.textContent="Toutes les commandes",e.appendChild(c),e.appendChild(d),n.appendChild(t),n.appendChild(s),n.appendChild(e);const u=document.createElement("div");u.setAttribute("class","container"),(p=this.shadow)==null||p.appendChild(i),(h=this.shadow)==null||h.appendChild(n),(f=this.shadow)==null||f.appendChild(u)}countFavoiteCommande(){let e=0;for(const o of this.commande)o.favorite&&e++,console.log(e);return e}attachEventListeners(){var i,n,s;const e=(i=this.shadow)==null?void 0:i.querySelector("#search");e==null||e.addEventListener("keyup",()=>{const a=e.value.toLowerCase();if(a!==this.currentSearchValue){this.currentSearchValue=a;const c=this.commande.filter(d=>d.command.toLowerCase().includes(this.currentSearchValue));this.render(c)}});const o=(n=this.shadow)==null?void 0:n.querySelector(".btn-favorite");o==null||o.addEventListener("click",()=>{this.render(this.commande,!0)});const t=(s=this.shadow)==null?void 0:s.querySelector(".btn-all");t==null||t.addEventListener("click",()=>{this.render(this.commande,!1)})}connectedCallback(){var o;this.adoptedCallback(),this.render(this.commande);const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".draggable-box");e==null||e.addEventListener("itemdropped",t=>{const i=t.detail;this.setFavoriteCommande(i,!0),this.render(this.commande,!1)})}setFavoriteCommande(e,o){for(const t of this.commande)t.command===e.command&&(e.favorite=!!o,Object.assign(t,e))}onDragStart(e){var s;const o=e.target,t=o.getAttribute("command"),i=o.getAttribute("description"),n={command:t,description:i,favorite:!0};(s=e.dataTransfer)==null||s.setData("text/plain",JSON.stringify(n))}render(e,o){var s,a,c;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".sup-top-btn");t.textContent=this.countFavoiteCommande().toString(),this.saveToLocalStorage();const i=document.createElement("div");i.setAttribute("class","container"),i.style.transform="scale(0.95)",i.style.opacity="0",i.style.transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out",o?e=e.filter(d=>d.favorite):e=e.filter(d=>!d.favorite),e.forEach(d=>{const u=this.createCommandCard(d);i.appendChild(u)});const n=(a=this.shadowRoot)==null?void 0:a.querySelector(".container");n&&n.remove(),(c=this.shadowRoot)==null||c.appendChild(i),setTimeout(()=>{i.style.transform="scale(1)",i.style.opacity="1"},0)}createCommandCard(e){const o=document.createElement("section");o.setAttribute("class","btn-favorite-section");const t=document.createElement("button");t.setAttribute("class","remove-favorite"),t.textContent="Supprimer des favoris",t.addEventListener("click",()=>{this.setFavoriteCommande(e,!1),this.render(this.commande,!0)});const i=document.createElement("button");i.setAttribute("class","btn-favorite"),i.textContent="Ajouter au favoris",i.addEventListener("click",()=>{this.setFavoriteCommande(e,!0),this.render(this.commande,!1)});const n=document.createElement("div");n.setAttribute("class","card");const s=document.createElement("copy-code");return s.style.animation="cardEnterAnimation 0.3s ease-in-out",s.textContent=e.command,s.draggable=!0,s.classList.add("draggable"),s.addEventListener("dragstart",this.onDragStart.bind(this)),s.setAttribute("command",e.command),s.setAttribute("description",e.description),n.appendChild(s),n.appendChild(o),e.favorite?(s.draggable=!1,s.classList.remove("draggable"),o.appendChild(t)):o.appendChild(i),n}highlightSearchMatches(e,o){const t=new RegExp(o,"gi");return e.replace(t,i=>`<mark>${i}</mark>`)}saveToLocalStorage(){localStorage.setItem("commande",JSON.stringify(this.commande))}loadFromLocalStorage(){const e=localStorage.getItem("commande");e&&(this.commande=JSON.parse(e))}disconnectedCallback(){this.saveToLocalStorage()}adoptedCallback(){this.loadFromLocalStorage()}}customElements.define("git-commands",y);class x extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
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
        `,this.addEventListener("dragover",this.handleDragOver.bind(this)),this.addEventListener("drop",this.handleDrop.bind(this))}handleDragOver(r){r.preventDefault(),r.dataTransfer.dropEffect="move"}handleDrop(r){r.preventDefault();const e=JSON.parse(r.dataTransfer.getData("text/plain")),o=new CustomEvent("itemdropped",{bubbles:!0,detail:e});this.dispatchEvent(o)}}customElements.define("draggable-box",x);
