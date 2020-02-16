import {css} from './card.style.mjs';

const template = document.createElement('template');
template.innerHTML=`
<style>
${css}
</style>
<div class="card">
    <div class="header">
        <h4 id="header-group-name"> </h4> 
    </div>
    <div class="content">
    </div>
</div>   
`

class MeetupCard extends HTMLElement {
    constructor(){
        super();

        this._shadowRoot = this.attachShadow({mode:"open"});
        this._shadowRoot.appendChild(template.content.cloneNode(true));

    }
    connectedCallback(){
        
        // Mounted
        this.render();
    }
    


   async fetchEvents(){

   
       
        let events = await fetch(`https://cors-anywhere.herokuapp.com/https://api.meetup.com/${this.dataset.groupurl}/events?status=past`,{
            method:"GET",
            headers:{
                'Access-Control-Allow-Methods':'GET',
                'Access-Control-Allow-Headers':'application/json',
            }
        })
       
        let event_data = await events.json();
        console.log(event_data)
        
    }


    async render(){
        console.log("Rendering the meetup widget");
        let group = await fetch(`https://cors-anywhere.herokuapp.com/https://api.meetup.com/${this.dataset.groupurl}`,{
        method:"GET",
        headers:{
            'Access-Control-Allow-Methods':'GET',
            'Access-Control-Allow-Headers':'application/json',
        }
        })
        let group_data = await group.json();
        console.log(group_data)
        this._shadowRoot.querySelector(`#header-group-name`).innerHTML=group_data.name;
        this.fetchEvents();
        
    }
} 




customElements.define('meetup-widget',MeetupCard);

