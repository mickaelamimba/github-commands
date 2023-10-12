import { createElements } from "../func/createElment";
import comands from "./comands.json"
export interface Commande {
  command: string;
  description: string;
  favorite?: boolean;
  usage: string;
}
export class GitCommands extends HTMLElement {
  commande: Commande[];
  currentSearchValue: string;
  shadow: ShadowRoot | null;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.shadow = shadow;
    this.commande = comands;
   

    this.currentSearchValue = "";

    this.createDOMElements();
    this.attachEventListeners();
    const style = document.createElement("style");
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
    [draggable="true"]{
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
    .dragging{
      opacity:0.25
    }

   


   
    `;
    shadow.appendChild(style);
  }
  createDOMElements() {

    const btnSection = createElements({tagName:'section', classList:['btn-section']})
    const supTopBtn = createElements({tagName:'sup', classList:['sup-top-btn'],textContent:'0'}) 
    const draggableBox = createElements({tagName:'draggable-box',textContent:'Ajouter une commande au favoris',classList:['draggable-box']});
    const title = createElements({tagName:'h1' ,textContent:'Git Commands'})
    const box = createElements({tagName:'div', classList:['box']})
    const sercheCard = createElements({tagName:'div', classList:['serche-card']})
    const sercheComande = createElements({tagName:'input',attributes:[
      {name:'type',value:'text'},
      {name:'placeholder',value:'Rechercher une commande'},
      {name:'id',value:'search'}
    ]
    ,classList:['search']
  }) 
      
    sercheCard.appendChild(sercheComande);
    const btnFavorite = document.createElement("button");
    btnFavorite.setAttribute("class", "btn-favorite");
    btnFavorite.textContent = "Mes favoris";
    btnFavorite.appendChild(supTopBtn);

    const btnAll = document.createElement("button");
    btnAll.setAttribute("class", "btn-all");
    btnAll.textContent = "Toutes les commandes";
    btnSection.appendChild(btnFavorite);
    btnSection.appendChild(btnAll);

    box.appendChild(draggableBox);
    box.appendChild(sercheCard);
    box.appendChild(btnSection);

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    this.shadow?.appendChild(title);
    this.shadow?.appendChild(box);
    this.shadow?.appendChild(container);
  }
  countFavoiteCommande() {
    let count = 0;
    for (const command of this.commande) {
      if (command.favorite) {
        count++;
      }
    }
    return count;
  }

  attachEventListeners() {
    const sercheComande = this.shadow?.querySelector("#search");
    sercheComande?.addEventListener("keyup", () => {
      //@ts-ignore
      const newSearchValue = sercheComande.value.toLowerCase();
      if (newSearchValue !== this.currentSearchValue) {
        this.currentSearchValue = newSearchValue;
        const result = this.commande.filter((commande) => {
          return commande.command
            .toLowerCase()
            .includes(this.currentSearchValue);
        });
        this.render(result);
      }
    });

    const btnFavorite = this.shadow?.querySelector(".btn-favorite");
    btnFavorite?.addEventListener("click", () => {
      this.render(this.commande, true);
    });

    const btnAll = this.shadow?.querySelector(".btn-all");
    btnAll?.addEventListener("click", () => {
      this.render(this.commande, false);
    });
  }
  connectedCallback() {
    this.adoptedCallback();
    this.render(this.commande);
    const draggableBox = this.shadowRoot?.querySelector(".draggable-box");

    draggableBox?.addEventListener("itemdropped", (event: any) => {
      const data = event.detail;
      this.setFavoriteCommande(data, true);
      this.render(this.commande, false);
    });
  }

  setFavoriteCommande(cmd: Commande, add?: boolean) {
    for (const command of this.commande) {
      if (command.command === cmd.command) {
        cmd.favorite = add ? true : false;
        Object.assign(command, cmd);
      }
    }
  }

  onDragStart(event: DragEvent) {
    const card = event.target as HTMLElement;
    
    const command = card.getAttribute("command");
    const description = card.getAttribute("description");
    const usage = card.getAttribute("usage");
    const data = { command, description, usage, favorite: true };
    event.dataTransfer?.setData("text/plain", JSON.stringify(data));
  }


  render(commande: Commande[], favoris?: boolean) {
    const supTopBtn = this.shadowRoot?.querySelector(
      ".sup-top-btn"
    ) as HTMLElement;
    supTopBtn.textContent = this.countFavoiteCommande().toString();

    this.saveToLocalStorage();

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    container.style.transform = "scale(0.95)";
    container.style.opacity = "0";
    container.style.transition =
      "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";

    if (favoris) {
      commande = commande.filter((commande) => {
        return commande.favorite;
      });
    } else {
      commande = commande.filter((commande) => {
        return !commande.favorite;
      });
    }

    commande.forEach((cmd) => {
      const card = this.createCommandCard(cmd);
      container.appendChild(card);
    });

    const existingContainer = this.shadowRoot?.querySelector(".container");
    if (existingContainer) {
      existingContainer.remove();
    }
    this.shadowRoot?.appendChild(container);

    setTimeout(() => {
      container.style.transform = "scale(1)";
      container.style.opacity = "1";
    }, 0);
  }
  createCommandCard(commande: Commande) {
    const btnFavoriteSection = createElements({ tagName: 'section', classList: ['btn-favorite-section'] });



    const removeFavorite = createElements({
      tagName: 'c-button', attributes: [
        { name: 'text', value: 'Supprimer des favoris' },
        { name: 'color', value: '#e74c3c' }


      ],
      onClick: () => {
        this.setFavoriteCommande(commande, false);
        this.render(this.commande, true);
      }
    })
    const btnFavorite = createElements({
      tagName: 'c-button', attributes: [
        { name: 'text', value: 'Ajouter au favoris' },
        { name: 'color', value: '#f1c40f' }

      ],
      onClick: () => {
        this.setFavoriteCommande(commande, true);
        this.render(this.commande, false);
      }
    })

    const card = createElements({ tagName: 'div', classList: ['card','draggable'] });

    const code = createElements({
      tagName: 'copy-code', attributes: [
        { name: 'command', value: commande.command },
        { name: 'description', value: commande.description },
        { name: 'usage', value: commande.usage },
      ],
      style: { animation: 'cardEnterAnimation 0.3s ease-in-out' },
      textContent: commande.command,
      classList: ['draggable']
    }
    );
    code.draggable = true;
    code.addEventListener("dragstart", this.onDragStart.bind(this));
    card.appendChild(code);
    card.appendChild(btnFavoriteSection);
    if (commande.favorite) {
      code.draggable = false;
      code.classList.remove("draggable");
      card.classList.remove('draggable')
      btnFavoriteSection.appendChild(removeFavorite);
      btnFavorite.remove()
    } else {
      btnFavoriteSection.appendChild(btnFavorite);
      removeFavorite.remove()
    }

    return card;
  }
  highlightSearchMatches(text: string, searchValue: string) {
    const regex = new RegExp(searchValue, "gi");
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  }

  saveToLocalStorage() {
    localStorage.setItem("commande", JSON.stringify(this.commande));
  }
  loadFromLocalStorage() {
    const savedCommande = localStorage.getItem("commande");
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

customElements.define("git-commands", GitCommands);
