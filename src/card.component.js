import {css} from './card.style.mjs';

const template = document.createElement('template');
template.innerHTML=`
<style>
${css}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/fontawesome.min.js"></script>

<div class="card">
    <a id="group_link" target="_blank">
    <div id="header">
    <img src="./assets/meetup-brands.svg" id='logo'>
    <h4 id="header-group-name"> </h4> 
    </div>
    </a>
    <div id="content">
    </div>
    <div id="footer">
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
        event_data = event_data.sort(function(a,b){
            return new Date(b.local_date) - new Date(a.local_date);
        })
        console.log(event_data)
        // Render The Events
        this.renderEvents(event_data);
    }

    renderEvents(events_data){
        events_data.forEach(event=>{

            let a = document.createElement('a');
            a.setAttribute('href',event.link)
            a.innerHTML=`
            <div class="event">
            <h4 style="text-align:left"> ${event.name} </h4>
            <br>
            <img src="./assets/calendar-alt-regular.svg" class="icon">&nbsp<span class="label">${this.reformatDate(event.local_date)}</span> <span class="label" style="float:right"><img src="./assets/user-check-solid.svg" class="icon"> ${event.yes_rsvp_count}+</span>
            <div>
            `
            this._shadowRoot.querySelector(`#content`).appendChild(a);

        })
    }

    reformatDate(dateStr)
    {
      let dArr = dateStr.split("-");  // ex input "2010-01-18"
      return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0] //ex out: "18/01/10"
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
        this._shadowRoot.querySelector(`#group_link`).setAttribute('href',group_data.link);
        this.fetchEvents();
        
    }
} 




customElements.define('meetup-widget',MeetupCard);

