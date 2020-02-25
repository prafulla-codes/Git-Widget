import {css} from './card.style.mjs';

const template = document.createElement('template');
template.innerHTML=`
<style>
${css}
</style>

<div class="card">
    <div id="header">
    <a id="project_link" target="_blank">
    <img src="https://res.cloudinary.com/prafulla98/image/upload/v1582632790/git-widget/github-brands_ap0by4.svg" id='logo'>
    <h4 id="header-projectid"> </h4> 
    </a>
    <br>
    <br>
    <h4 id="header-description"> </h4>

    </div>
  
    <div id="content">
    </div>
    <div id="footer">
    <img src="https://res.cloudinary.com/prafulla98/image/upload/v1582634736/git-widget/star-solid_imdbmt.svg" class='footer-icon' id="star_logo" title='Stargazers' >
    <h4 class='footer-label' id='star_count' title='Stargazers'> </h4>
    <img src="https://res.cloudinary.com/prafulla98/image/upload/v1582635429/git-widget/eye-regular_lfwidc.svg" class='footer-icon' id='watch_logo' title='Subscribers'>
    <h4 class='footer-label' id='subscribers_count' title='Subscribers'> </h4>
    <img src="https://res.cloudinary.com/prafulla98/image/upload/v1582634861/git-widget/code-branch-solid_dgx2pa.svg" class='footer-icon' id='fork_logo' title='Forks'>
    <h4 class='footer-label' id='fork_count' title='Forks'> </h4>
    </div>
</div>   
`

export class GitWidget extends HTMLElement {
    constructor(){
        super();

        this._shadowRoot = this.attachShadow({mode:"open"});
        this._shadowRoot.appendChild(template.content.cloneNode(true));

    }

    static get observedAttributes() { 
        return ['data-width', 'data-height',"data-mode"]; 
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (attr == 'data-width' && oldValue != newValue) {
            this[attr] = newValue;
            this.setWidth();
        }

        if (attr == 'data-mode' && oldValue != newValue)
        {
            this[attr] = newValue;
        }
        if(attr == 'data-height' && oldValue != newValue && 'data-height' > '300px'){
            this[attr] = newValue;
            this.setHeight(newValue);
        }
    }

    setWidth(){
        this._shadowRoot.querySelector(`.card`).style.width = this.dataset.width || '400px';
    }

    setHeight(){
        this._shadowRoot.querySelector(`.card`).style.height = this.dataset.width || '500px';

    }

    connectedCallback(){
        
        // Mounted
        this.render();
        this._shadowRoot.querySelector(`.card`).style.width = this.dataset.width || '400px';
        this._shadowRoot.querySelector(`.card`).style.height = this.dataset.height || '500px';

    }
    


    async renderEvents(){
        let events_data = await fetch(`https://api.github.com/repos/${this.dataset.projectid}/events`);
        let events = await events_data.json();
        console.log(events)
        events.forEach(event=>{
            let e = document.createElement('div');
            let created_at = new Date(event.created_at);
            e.setAttribute('class','event');
            e.innerHTML=`
            <img src="${event.actor.avatar_url}" class="event_user_icon">
            <div class="event_header">
            <h4 class="event_username"> ${event.actor.login} </h4> <span class='date' style='float:right'>${created_at.getDay()+1}/${created_at.getMonth()+1}/${created_at.getFullYear()}</span>
            <br>
            <span class="event_type"> ${event.type.split("Event")[0]} ${event.type=="ReleaseEvent" ? "</span><span class='release_tag'>"+event.payload.release.tag_name+"</span>" : ""} </h4>
            
            </div>
            <br>
            <div class="event_description">
                <h5 class="event_message"> ${event.type=='PushEvent'? event.payload.commits[0].message : '' } </h5>
                <h5 class="event_message"> ${event.type=='PullRequestReviewCommentEvent'? event.payload.comment.body+" <br><br> commit - <br><span style='color:blue'><a href='"+event.payload.comment.html_url+"' target='_blank'>"+event.payload.comment.commit_id+"</span></a>" : '' } </h5>
                <h5 class="event_message" style="color:darkgreen"> ${event.type=='ForkEvent'? "Forked The Repository! " : '' } </h5>
                <h5 class="event_message"> ${event.type=='PullRequestEvent' && event.payload.action=='opened'? "Opened A New PR ! "+"<br> <span style='color:blue'><a href='"+event.payload.pull_request.html_url+"' target='_blank'>"+event.payload.pull_request.title+"</span></a>" : '' } </h5>
                <h5 class="event_message"> ${event.type=='PullRequestEvent' && event.payload.action=='closed'? "Closed The PR : "+"<br> <span style='color:blue'><a href='"+event.payload.pull_request.html_url+"' target='_blank'>"+event.payload.pull_request.title+"</span></a>" : '' } </h5>
                <h5 class="event_message"> ${event.type=='IssuesEvent' && event.payload.action=='closed'? "Closed the Issue:  "+"<br> <span style='color:blue'>"+event.payload.issue.title+"</span>" : '' } </h5>
                <h5 class="event_message"> ${event.type=='IssuesEvent' && event.payload.action=='opened'? "Opened the Issue:  "+"<br> <span style='color:blue'>"+event.payload.issue.title+"</span>" : '' } </h5>
                <h5 class="event_message"> ${event.type=='WatchEvent' ? "<span style='color:blue'> Is now watching the repository </span>" : '' } </h5>
                <h5 class="event_message"> ${event.type=='IssueCommentEvent'? "<a href='"+event.payload.comment.html_url+"' target='_blank'>"+ event.payload.comment.body+"</a>" : '' } </h5>
                <h5 class="event_message" style="color:darkgreen"> ${event.type=='ReleaseEvent'? "<a href='"+event.payload.release.html_url+"' target='_blank'>"+ "Released A New Version ! ^_^" +"</a>" : '' } </h5>

                </div>
            `
            this._shadowRoot.querySelector(`#content`).appendChild(e)
        })
        console.log(events);
    }

    
    reformatDate(dateStr)
    {
      let dArr = dateStr.split("-");  // ex input "2010-01-18"
      return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0] //ex out: "18/01/10"
    }

    async render(){
        console.log("Rendering the git-project widget");
            
            let project_data = await fetch(`https://api.github.com/repos/${this.dataset.projectid}`)
            let project = await project_data.json();
            if(project.message)
            {
                this._shadowRoot.querySelector(`#content`).innerHTML=`<h4> Something went wrong '_'. Please check your projectid </h4>`
            }
            else
            {
                console.log(project);

            // Render the widget details 
            this._shadowRoot.querySelector(`#header-description`).innerHTML=project.description;
            this._shadowRoot.querySelector(`#star_count`).innerHTML=project.stargazers_count;
            this._shadowRoot.querySelector(`#subscribers_count`).innerHTML=project.subscribers_count;
            this._shadowRoot.querySelector(`#fork_count`).innerHTML=project.forks_count;

            this._shadowRoot.querySelector(`#header-projectid`).innerHTML=this.dataset.projectid;
            this._shadowRoot.querySelector(`#project_link`).setAttribute('href',`https://github.com/${this.dataset.projectid}`);
            
            this.renderEvents();
        }
       



        
    }
} 




customElements.define('git-widget',GitWidget);

