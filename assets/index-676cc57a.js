var f=Object.defineProperty;var b=(l,r,e)=>r in l?f(l,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[r]=e;var m=(l,r,e)=>(b(l,typeof r!="symbol"?r+"":r,e),e);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();class v extends HTMLElement{constructor(){super();m(this,"desciption");m(this,"codeText");m(this,"shadow");m(this,"usage");const e=this.attachShadow({mode:"open"});this.shadow=e;const o=this.getAttribute("command"),t=this.getAttribute("description"),i=this.getAttribute("usage");this.usage=i,this.desciption=t,this.codeText=o,this.createDOMElements(),this.attachEventListeners(),this.addStyles()}createDOMElements(){var n,s,c;const e=document.createElement("div");e.classList.add("container"),(n=this.shadow)==null||n.appendChild(e);const o=document.createElement("div");o.classList.add("flex-box");const t=document.createElement("pre");t.textContent=this.codeText;const i=document.createElement("button");i.classList.add("copy-button"),i.textContent="Copier";const a=document.createElement("button");a.classList.add("show-description"),a.textContent="i",a.title="Afficher la description",(s=this.shadow)==null||s.appendChild(o),o.appendChild(t),o.appendChild(i),(c=this.shadow)==null||c.appendChild(a)}attachEventListeners(){this.shadow.querySelector(".copy-button").addEventListener("click",()=>{this.copyToClipboard(this.codeText)}),this.shadow.querySelector(".show-description").addEventListener("click",()=>{this.dialogBoxDescription()})}addStyles(){var o;const e=document.createElement("style");e.textContent=`
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
    
          


            `,(o=this.shadow)==null||o.appendChild(e)}copyToClipboard(e){navigator.clipboard.writeText(e).then(()=>{this.copyAlertTost()},()=>{this.copyAlertTost("error")})}dialogBoxDescription(){var u;const e=document.createElement("div");e.classList.add("dialog-header-section");const o=document.createElement("h2");o.textContent="Description",o.classList.add("dialog-header");const t=document.createElement("div");t.classList.add("dialog-body");const i=document.createElement("h2");i.textContent="Usage",i.classList.add("dialog-usage");const a=this.usage,n=document.createElement("p");n.textContent=a,n.classList.add("dialog-paragraph-usage");const s=document.createElement("dialog");s.classList.add("dialog");const c=document.createElement("p");c.textContent=this.desciption,c.classList.add("dialog-paragraph"),c.style.marginBottom="1rem";const d=document.createElement("button");d.textContent="x",d.classList.add("dialog-close-button"),d.addEventListener("click",()=>{s.close(),setTimeout(()=>{s.remove()},1e3)}),e.appendChild(o),e.appendChild(d),s.appendChild(e),t.appendChild(c),t.appendChild(i),t.appendChild(n),s.appendChild(t),(u=this.shadowRoot)==null||u.appendChild(s),s.showModal()}copyAlertTost(e="success"){var n;const o=document.createElement("div");e==="success"?o.style.background="rgba(76, 175, 80, 1)":o.style.background="rgba(244, 67, 54, 1)",(n=document==null?void 0:document.querySelector("body #app"))==null||n.appendChild(o),o.textContent="Commande copié ! avec succès",o.classList.add("toast");const t=document.createElement("div");t.style.background="#fff",t.style.height="0.2rem",t.style.width="0%",t.style.borderRadius="0.2rem",t.style.marginTop="0.5rem",o.appendChild(t);let i=0;const a=setInterval(()=>{i+=1,t.style.width=i+"%",i>=100&&(clearInterval(a),setTimeout(()=>{o.remove()},1e3))},20)}static get observedAttributes(){return["command","description","usage"]}attributeChangedCallback(e,o,t){var i,a,n;if(e==="command"){this.codeText=t;const s=(i=this.shadowRoot)==null?void 0:i.querySelector("pre");s&&(s.textContent=t)}if(e==="description"){this.desciption=t;const s=(a=this.shadowRoot)==null?void 0:a.querySelector(".dialog-paragraph");s&&(s.textContent=t)}if(e==="usage"){this.usage=t;const s=(n=this.shadowRoot)==null?void 0:n.querySelector(".dialog-paragraph-usage");s&&(s.textContent=t)}}}customElements.define("copy-code",v);const y=[{command:"git init",description:"Initialise un nouveau dépôt Git",usage:"git init <nom_du_dossier>"},{command:"git clone <url>",description:"Clone un dépôt distant",usage:"git clone <url> <nom_du_dossier>"},{command:"git status",description:"Affiche les fichiers nouveaux, modifiés et non suivis dans le répertoire de travail",usage:"git status [-s | --short]"},{command:"git add <fichier>",description:"Ajoute un instantané du fichier à l'index, en préparation pour le suivi de version",usage:"git add <fichier>"},{command:'git commit -m "<message>"',description:"Enregistre des instantanés de fichiers de façon permanente dans l'historique des versions",usage:'git commit -am "<message>"'},{command:"git branch",description:"Affiche la liste des branches locales",usage:"git branch [-a]"},{command:"git branch -a",description:"Affiche la liste de toutes les branches locales et distantes",usage:"git branch -a"},{command:"git branch <nom>",description:"Crée une nouvelle branche à partir de la branche actuelle",usage:"git branch <nom>"},{command:"git branch -d <nom>",description:"Supprime une branche (locale uniquement)",usage:"git branch -d <nom>"},{command:"git branch -m <nom> <nouveau_nom>",description:"Renomme une branche",usage:"git branch -m <nom> <nouveau_nom>"},{command:"git checkout <nom>",description:"Bascule sur la branche spécifiée et met à jour le répertoire de travail",usage:"git checkout -b <nom>"},{command:"git merge <nom>",description:"Combine l'historique de la branche spécifiée avec la branche courante",usage:"git merge <nom> [--no-ff]"},{command:"git log",description:"Affiche l'historique des versions pour la branche courante",usage:"git log [--oneline]"},{command:"git log --follow <fichier>",description:"Affiche l'historique des versions, y compris les renommages, pour le fichier spécifié",usage:"git log --follow <fichier>"},{command:"git diff <branche cible>",description:"Affiche les différences de contenu entre deux branches",usage:"git diff <branche cible> [--cached <fichier>]"},{command:"git tag <nom>",description:"Marque le commit courant avec un tag",usage:'git tag -a <nom> -m "<message>"'},{command:"git show <commit>",description:"Affiche les détails et les modifications associées à un commit",usage:"git show <commit>"},{command:"git remote add <nom> <url>",description:"Ajoute un dépôt distant avec le nom spécifié",usage:"git remote add <nom> <url>"},{command:"git fetch <nom>",description:"Récupère les références du dépôt distant spécifié",usage:"git fetch <nom> [<branche>] "},{command:"git merge <nom>/<branche>",description:"Fusionne la branche distante dans la branche locale courante",usage:"git merge <nom>/<branche>"},{command:"git push <nom> <branche>",description:"Pousse les commits locaux vers la branche distante",usage:"git push <nom> <branche>"},{command:"git pull",description:"Récupère les changements depuis un dépôt distant",usage:"git pull <nom> <branche>"},{command:"git reset --hard <commit>",description:"Réinitialise la branche courante au commit spécifié, en supprimant les modifications locales",usage:"git reset --hard <commit>"},{command:"git clean -df",description:"Supprime les fichiers non suivis du répertoire de travail",usage:"git clean -df"},{command:"git config --global user.name <nom>",description:"Configure le nom associé à vos opérations de commit",usage:"git config --global user.name <nom>"},{command:"git config --global user.email <adresse>",description:"Configure l'adresse email associée à vos opérations de commit",usage:"git config --global user.email <adresse>"},{command:"git config --global alias.<alias-name> <commande>",description:"Crée un alias pour une commande Git",usage:"git config --global alias.<alias-name> <commande>"},{command:"git config --global --edit",description:"Ouvre le fichier de configuration global dans un éditeur de texte",usage:"git config --global --edit"},{command:"git reset HEAD <fichier>",description:"Annule la préparation du fichier, le retirant de l'index, sans modifier son contenu",usage:"git reset HEAD <fichier>"},{command:"git checkout -- <fichier>",description:"Annule les modifications apportées au fichier non enregistré",usage:"git checkout -- <fichier>"},{command:"git remote -v",description:"Affiche les URL des dépôts distants configurés",usage:"git remote -v"},{command:"git push --tags",description:"Pousse tous les tags vers le dépôt distant",usage:"git push --tags"},{command:"git tag -d <nom>",description:"Supprime le tag local spécifié",usage:"git tag -d <nom>"},{command:"git push <nom> :refs/tags/<tagname>",description:"Supprime le tag distant spécifié",usage:"git push <nom> :refs/tags/<tagname>"},{command:"git reset --hard origin/<nom>",description:"Réinitialise la branche locale en supprimant les modifications non enregistrées et en récupérant les modifications distantes",usage:"git reset --hard origin/<nom>"},{command:"git reset --hard <commit>",description:"Réinitialise la branche locale en supprimant les modifications après le commit spécifié",usage:"git reset --hard <commit>"},{command:"git clean -df",description:"Supprime les fichiers non suivis et ignorés du répertoire de travail",usage:"git clean -df"}];class C extends HTMLElement{constructor(){super();m(this,"commande");m(this,"currentSearchValue");m(this,"shadow");const e=this.attachShadow({mode:"open"});this.shadow=e,this.commande=y,console.log(this.commande),this.currentSearchValue="",this.createDOMElements(),this.attachEventListeners();const o=document.createElement("style");o.textContent=`
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

   


   
    `,e.appendChild(o)}createDOMElements(){var p,g,h;const e=document.createElement("section");e.setAttribute("class","btn-section");const o=document.createElement("sup");o.setAttribute("class","sup-top-btn"),o.textContent="0";const t=document.createElement("draggable-box");t.textContent="Ajouter une commande au favoris",t.setAttribute("class","draggable-box");const i=document.createElement("h1");i.textContent="Git Commands";const a=document.createElement("div");a.setAttribute("class","box");const n=document.createElement("div"),s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("placeholder","Rechercher une commande"),s.setAttribute("id","search"),s.setAttribute("class","search"),n.appendChild(s),n.setAttribute("class","serche-card");const c=document.createElement("button");c.setAttribute("class","btn-favorite"),c.textContent="Mes favoris",c.appendChild(o);const d=document.createElement("button");d.setAttribute("class","btn-all"),d.textContent="Toutes les commandes",e.appendChild(c),e.appendChild(d),a.appendChild(t),a.appendChild(n),a.appendChild(e);const u=document.createElement("div");u.setAttribute("class","container"),(p=this.shadow)==null||p.appendChild(i),(g=this.shadow)==null||g.appendChild(a),(h=this.shadow)==null||h.appendChild(u)}countFavoiteCommande(){let e=0;for(const o of this.commande)o.favorite&&e++;return e}attachEventListeners(){var i,a,n;const e=(i=this.shadow)==null?void 0:i.querySelector("#search");e==null||e.addEventListener("keyup",()=>{const s=e.value.toLowerCase();if(s!==this.currentSearchValue){this.currentSearchValue=s;const c=this.commande.filter(d=>d.command.toLowerCase().includes(this.currentSearchValue));this.render(c)}});const o=(a=this.shadow)==null?void 0:a.querySelector(".btn-favorite");o==null||o.addEventListener("click",()=>{this.render(this.commande,!0)});const t=(n=this.shadow)==null?void 0:n.querySelector(".btn-all");t==null||t.addEventListener("click",()=>{this.render(this.commande,!1)})}connectedCallback(){var o;this.adoptedCallback(),this.render(this.commande);const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".draggable-box");e==null||e.addEventListener("itemdropped",t=>{const i=t.detail;this.setFavoriteCommande(i,!0),this.render(this.commande,!1)})}setFavoriteCommande(e,o){for(const t of this.commande)t.command===e.command&&(e.favorite=!!o,Object.assign(t,e))}onDragStart(e){var s;const o=e.target,t=o.getAttribute("command"),i=o.getAttribute("description"),a=o.getAttribute("usage"),n={command:t,description:i,usage:a,favorite:!0};(s=e.dataTransfer)==null||s.setData("text/plain",JSON.stringify(n))}render(e,o){var n,s,c;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(".sup-top-btn");t.textContent=this.countFavoiteCommande().toString(),this.saveToLocalStorage();const i=document.createElement("div");i.setAttribute("class","container"),i.style.transform="scale(0.95)",i.style.opacity="0",i.style.transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out",o?e=e.filter(d=>d.favorite):e=e.filter(d=>!d.favorite),e.forEach(d=>{const u=this.createCommandCard(d);i.appendChild(u)});const a=(s=this.shadowRoot)==null?void 0:s.querySelector(".container");a&&a.remove(),(c=this.shadowRoot)==null||c.appendChild(i),setTimeout(()=>{i.style.transform="scale(1)",i.style.opacity="1"},0)}createCommandCard(e){const o=document.createElement("section");o.setAttribute("class","btn-favorite-section");const t=document.createElement("button");t.setAttribute("class","remove-favorite"),t.textContent="Supprimer des favoris",t.addEventListener("click",()=>{this.setFavoriteCommande(e,!1),this.render(this.commande,!0)});const i=document.createElement("button");i.setAttribute("class","btn-favorite"),i.textContent="Ajouter au favoris",i.addEventListener("click",()=>{this.setFavoriteCommande(e,!0),this.render(this.commande,!1)});const a=document.createElement("div");a.setAttribute("class","card");const n=document.createElement("copy-code");return n.style.animation="cardEnterAnimation 0.3s ease-in-out",n.textContent=e.command,n.draggable=!0,n.classList.add("draggable"),n.addEventListener("dragstart",this.onDragStart.bind(this)),n.setAttribute("command",e.command),n.setAttribute("description",e.description),n.setAttribute("usage",e.usage),a.appendChild(n),a.appendChild(o),e.favorite?(n.draggable=!1,n.classList.remove("draggable"),o.appendChild(t)):o.appendChild(i),a}highlightSearchMatches(e,o){const t=new RegExp(o,"gi");return e.replace(t,i=>`<mark>${i}</mark>`)}saveToLocalStorage(){localStorage.setItem("commande",JSON.stringify(this.commande))}loadFromLocalStorage(){const e=localStorage.getItem("commande");e&&(this.commande=JSON.parse(e))}disconnectedCallback(){this.saveToLocalStorage()}adoptedCallback(){this.loadFromLocalStorage()}}customElements.define("git-commands",C);class x extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
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
        `,this.addEventListener("dragover",this.handleDragOver.bind(this)),this.addEventListener("drop",this.handleDrop.bind(this))}handleDragOver(r){r.preventDefault(),r.dataTransfer.dropEffect="move"}handleDrop(r){r.preventDefault();const e=JSON.parse(r.dataTransfer.getData("text/plain")),o=new CustomEvent("itemdropped",{bubbles:!0,detail:e});this.dispatchEvent(o)}}customElements.define("draggable-box",x);const E="github-commands",w="0.1.1",A="module",L="https://mickaelamimba.github.io/github-commands/",S={dev:"vite",build:"tsc && vite build",preview:"vite preview",deploy:"gh-pages -d dist"},k={"gh-pages":"^6.0.0",typescript:"^5.0.2",vite:"^4.4.5"},T={name:E,private:!0,version:w,type:A,homepage:L,scripts:S,devDependencies:k},D=T.version,q=document.querySelector("#app-footer"),R=` <p>©2023 - <a href="mailto:michael.amimba@accenture.com">AMIMBA MICHAEL</a> - Accenture  - Git commands version ${D}</p>`;q.appendChild(document.createRange().createContextualFragment(R));
