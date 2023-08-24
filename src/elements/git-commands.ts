
interface Commande {
    command: string;
    description: string;
    favorite?: boolean;
}
export class GitCommands extends HTMLElement {
    commande:Commande[];
    currentSearchValue: string;
    shadow: ShadowRoot | null;

 constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.shadow = shadow;
    this.commande  =[
        {command:'git init',description:'Initialise un nouveau dépôt Git'},
    {command:'git clone <url>',description:'Clone un dépôt distant'},
    {command:'git status',description:'Liste tous les nouveaux fichiers et les fichiers modifiés à commiter'},
    {command:'git add <fichier>',description:'Ajoute un instantané du fichier, en préparation pour le suivi de version'},
    {command:'git commit -m "<message>"',description:'Enregistre des instantanés de fichiers de façon permanente dans l\'historique des versions'},
    {command:'git branch',description:'Liste toutes les branches locales dans le dépôt courant'},
    {command:'git branch -a',description:'Liste toutes les branches locales et distantes dans le dépôt courant'},
    {command:'git branch <nom>',description:'Crée une nouvelle branche'},
    {command:'git branch -d <nom>',description:'Supprime une branche'},
    {command:'git checkout <nom>',description:'Bascule sur la branche spécifiée et met à jour le répertoire de travail'},
    {command:'git merge <nom>',description:'Combine l\'historique de la branche spécifiée avec la branche courante'},
    {command:'git log',description:'Montre l\'historique des versions pour la branche courante'},
    {command:'git log --follow <fichier>',description:'Montre l\'historique des versions, y compris les actions de renommage, pour le fichier spécifié'},
    {command:'git diff <branche cible>',description:'Montre les différences de contenu entre deux branches'},
    {command:'git tag <nom>',description:'Marque le commit spécifié'},
    {command:'git show <commit>',description:'Montre les objets et les modifications de métadonnées associés au commit spécifié'},
    {command:'git remote add <nom> <url>',description:'Ajoute un dépôt distant avec le nom spécifié'},
    {command:'git fetch <nom>',description:'Récupère tout le contenu du dépôt distant spécifié'},
    {command:'git merge <nom>/<branche>',description:'Fusionne la branche distante dans la branche locale courante'},
    {command:'git push <nom> <branche>',description:'Envoie tous les commits de la branche locale vers GitHub'},
    {command:'git pull',description:'Récupère tout le contenu du dépôt distant spécifié'},
    {command:'git reset --hard <commit>',description:'Supprime tout l\'historique et les modifications effectuées après le commit spécifié'},
    {command:'git clean -df',description:'Supprime tous les nouveaux fichiers non suivis'},
    {command:'git config --global user.name <nom>',description:'Définit le nom que vous voulez associer à toutes vos opérations de commit'},
    {command:'git config --global user.email <adresse>',description:'Définit l\'email que vous voulez associer à toutes vos opérations de commit'},
    {command:'git config --global alias.<alias-name> <command>',description:'Crée un alias Git'},
    {command:'git config --global --edit',description:'Ouvre le fichier de configuration dans un éditeur de texte, pour que vous puissiez le modifier manuellement'},
    {command:'git reset HEAD <fichier>',description:'Annule la préparation du fichier, en retirant le fichier de l\'index, sans modifier son contenu'},
    {command:'git checkout -- <fichier>',description:'Annule les modifications du fichier'},
    {command:'git remote -v',description:'Montre les dépôts distants configurés'},
    {command:'git push --tags',description:'Envoie tous les tags vers GitHub'},
    {command:'git tag -d <nom>',description:'Supprime le tag local'},
    {command:'git push <nom> :refs/tags/<tagname>',description:'Supprime le tag distant'},
    {command:'git reset --hard origin/<nom>',description:'Supprime toutes les modifications locales et récupère la branche spécifiée sur GitHub'},
    {command:'git reset --hard <commit>',description:'Supprime tout l\'historique et les modifications effectuées après le commit spécifié'},
    {command:'git clean -df',description:'Supprime tous les nouveaux fichiers non suivis'},
    {command:'git config --global user.name <nom>',description:'Définit le nom que vous voulez associer à toutes vos opérations de commit'},
    {command:'git config --global user.email <adresse>',description:'Définit l\'email que vous voulez associer à toutes vos opérations de commit'},
    {command:'git config --global alias.<alias-name> <command>',description:'Crée un alias Git'},
    {command:'git config --global --edit',description:'Ouvre le fichier de configuration dans un éditeur de texte, pour que vous puissiez le modifier manuellement'},
    {command:'git reset HEAD <fichier>',description:'Annule la préparation du fichier, en retirant le fichier de l\'index, sans modifier son contenu'},
    {command:'git checkout -- <fichier>',description:'Annule les modifications du fichier'},
    {command:'git remote -v',description:'Montre les dépôts distants configurés'},
    {command:'git push --tags',description:'Envoie tous les tags vers GitHub'},
    {command:'git tag -d <nom>',description:'Supprime le tag local'},
    {command:'git push <nom> :refs/tags/<tagname>',description:'Supprime le tag distant'},  
    {command:'git reset --hard origin/<nom>',description:'Supprime toutes les modifications locales et récupère la branche spécifiée sur GitHub'},
    {command:'git reset --hard <commit>',description:'Supprime tout l\'historique et les modifications effectuées après le commit spécifié'},
    {command:'git clean -df',description:'Supprime tous les nouveaux fichiers non suivis'},
    {command:'git config --global user.name <nom>',description:'Définit le nom que vous voulez associer à toutes vos opérations de commit'},
    {command:'git config --global user.email <adresse>',description:'Définit l\'email que vous voulez associer à toutes vos opérations de commit'},
    {command:'git config --global alias.<alias-name> <command>',description:'Crée un alias Git'},   

    ];

    this.currentSearchValue = '';
   
        this.createDOMElements();
        this.attachEventListeners();
        const style = document.createElement('style');
        style.textContent = `
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

   


   
    `;
    shadow.appendChild(style);

}
createDOMElements(){
    const btnSection = document.createElement('section');
    btnSection.setAttribute('class', 'btn-section');
    const supTopBtn = document.createElement('sup');
    supTopBtn.setAttribute('class', 'sup-top-btn');
    supTopBtn.textContent = "0";

    const draggableBox = document.createElement('draggable-box');
    draggableBox.textContent = 'Ajouter une commande au favoris';
    draggableBox.setAttribute('class', 'draggable-box');

    const title = document.createElement('h1');
    title.textContent = 'Git Commands';
   
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    const sercheCard = document.createElement('div');

    const sercheComande = document.createElement('input');
    sercheComande.setAttribute('type', 'text');
    sercheComande.setAttribute('placeholder', 'Rechercher une commande');
    sercheComande.setAttribute('id', 'search');
    sercheComande.setAttribute('class', 'search');
    sercheCard.appendChild(sercheComande);
    sercheCard.setAttribute('class', 'serche-card');
    const btnFavorite = document.createElement('button');
    btnFavorite.setAttribute('class', 'btn-favorite');
    btnFavorite.textContent = 'Mes favoris';
    btnFavorite.appendChild(supTopBtn);

    const btnAll = document.createElement('button');
    btnAll.setAttribute('class', 'btn-all');
    btnAll.textContent = 'Toutes les commandes';
    btnSection.appendChild(btnFavorite);
    btnSection.appendChild(btnAll);


   
    box.appendChild(draggableBox);
    box.appendChild(sercheCard);
    box.appendChild(btnSection);

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    this.shadow?.appendChild(title);
    this.shadow?.appendChild(box)
    this.shadow?.appendChild(container)
    



}
countFavoiteCommande(){
    let count = 0;
    for (const command of this.commande) {
        if(command.favorite){
            count++;
        }
        console.log(count);
    }
    return count;
}

attachEventListeners(){
    const sercheComande = this.shadow?.querySelector('#search');
    sercheComande?.addEventListener('keyup', () => {
        //@ts-ignore
        const newSearchValue = sercheComande.value.toLowerCase() ; 
        if (newSearchValue !== this.currentSearchValue) {
            this.currentSearchValue = newSearchValue;
            const result = this.commande.filter((commande) => {
                return commande.command.toLowerCase().includes(this.currentSearchValue);
            });
            this.render(result);
        }
    });

    const btnFavorite = this.shadow?.querySelector('.btn-favorite');
    btnFavorite?.addEventListener('click', () => {
        this.render(this.commande,true);
    });

    const btnAll = this.shadow?.querySelector('.btn-all');
    btnAll?.addEventListener('click', () => {
        this.render(this.commande,false);
    });



}
connectedCallback() {
    this.adoptedCallback();
    this.render(this.commande);
    const draggableBox = this.shadowRoot?.querySelector('.draggable-box');
    // add type for event

    draggableBox?.addEventListener('itemdropped', (event:any) => {
        const data = event.detail;
        this.setFavoriteCommande(data,true);
        this.render(this.commande,false);
    });
}

setFavoriteCommande(cmd:Commande,add?:boolean){
   for (const command of this.commande) {
        if(command.command === cmd.command){
            cmd.favorite = add ? true : false;
            Object.assign(command, cmd);
        }        
   }
}




onDragStart(event: DragEvent) {
    const card = event.target as HTMLElement;
    const command = card.getAttribute('command');
    const description = card.getAttribute('description');
    const data = { command, description, favorite:true};
    event.dataTransfer?.setData('text/plain', JSON.stringify(data));
}

render(commande:Commande[], favoris?:boolean){
   const supTopBtn= this.shadowRoot?.querySelector('.sup-top-btn') as HTMLElement;
    supTopBtn.textContent = this.countFavoiteCommande().toString();

    this.saveToLocalStorage();
       
         const container = document.createElement('div');
        container.setAttribute('class', 'container');
        
        container.style.transform = 'scale(0.95)';
        container.style.opacity = '0';
        container.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
       
        if (favoris){
            commande = commande.filter((commande) => {
                return commande.favorite;
            });
        }else{
            commande = commande.filter((commande) => {
                return !commande.favorite;
            });
        }
       
        commande.forEach((cmd) => {
            const card = this.createCommandCard(cmd);
            container.appendChild(card);
        });

        const existingContainer = this.shadowRoot?.querySelector('.container');
        if (existingContainer) {
            existingContainer.remove();
        }
        this.shadowRoot?.appendChild(container);

        setTimeout(() => {
            container.style.transform = 'scale(1)';
            container.style.opacity = '1';

          }, 0);

}
createCommandCard(commande:Commande){
    const btnFavoriteSection = document.createElement('section');
    btnFavoriteSection.setAttribute('class', 'btn-favorite-section');

    const removeFavorite = document.createElement('button');
    removeFavorite.setAttribute('class', 'remove-favorite');
    removeFavorite.textContent = 'Supprimer des favoris';
    removeFavorite.addEventListener('click', () => {
        this.setFavoriteCommande(commande,false);
        this.render(this.commande,true);
    });
    
    const btnFavorite = document.createElement('button');
    
    btnFavorite.setAttribute('class', 'btn-favorite');
    btnFavorite.textContent = 'Ajouter au favoris';
    btnFavorite.addEventListener('click', () => {
        this.setFavoriteCommande(commande,true);
        this.render(this.commande,false);
    });

    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    const code = document.createElement('copy-code');
    code.style.animation = 'cardEnterAnimation 0.3s ease-in-out';
    
    code.textContent = commande.command;
    code.draggable = true;
    code.classList.add('draggable');
    code.addEventListener('dragstart', this.onDragStart.bind(this));
   
    code.setAttribute('command', commande.command);
    code.setAttribute('description', commande.description);
    card.appendChild(code);
    card.appendChild(btnFavoriteSection);
    if(commande.favorite){
        code.draggable = false;
        code.classList.remove('draggable');
        btnFavoriteSection.appendChild(removeFavorite);
    }else{
        btnFavoriteSection.appendChild(btnFavorite);
    }

    
    
    return card;

}
highlightSearchMatches(text: string, searchValue: string) {
    const regex = new RegExp(searchValue, 'gi'); 
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
}

saveToLocalStorage(){
    localStorage.setItem('commande', JSON.stringify(this.commande));

}
loadFromLocalStorage(){

    const savedCommande = localStorage.getItem('commande');
    if (savedCommande) {
        this.commande = JSON.parse(savedCommande);
    }
    
}
disconnectedCallback() {
    this.saveToLocalStorage();
}
adoptedCallback() {
    this.loadFromLocalStorage();

}

}


customElements.define('git-commands', GitCommands);