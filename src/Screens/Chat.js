import React, { Component } from 'react'
import M from 'materialize-css'
import "../css/chatstyle.css"
import {writeUserData} from '../Firebase/database'
import {database} from '../Firebase/database'

export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {messages : messages};
    }
  componentDidMount(){
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);

    var msgs = database.ref('Users/123');
    msgs.on('value', function(snapshot) {
        // let arry = this.state.msgs;
        console.log(snapshot.val())
        // this.state({postElement, snapshot.val()});
      }); 
  }  

    render() {
        let userName = "Marry"
        return (
            <div>
                  <div className="mycontainerbox clearfix">
                    <div className="chat">
                    <div className="chat-header clearfix">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
                        
                        <div className="chat-about">
                        <div className="chat-with">Vincent Porter</div>
                        </div>
                        <i className="fa fa-star"></i>
                    </div> 
                    
                    <div className="chat-history">
                        <ul>
                            {
                                this.state.messages.map(msg => 
                                    <li className={msg.self ? 'clearfix' : null}>
                                        <div className={msg.self ? "message-data align-right" : 'message-data'}>
                                        <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                                        <span className="message-data-name" >{userName}</span> <i className="fa fa-circle me"></i>

                                        </div>
                                        <div className={msg.self ? "message other-message float-right" : 'message  my-message'}>
                                            {msg.content}
                                        {/* Hi Vincent, how are you? How is the project coming along? */}
                                        </div>
                                    </li>
                                )
                            }
                        
                        </ul>
                        
                    </div>
                    
                    <div className="chat-message clearfix">
                        <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                                
                        <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-file-image-o"></i>
                        
                        <button onClick={() => writeUserData('123',document.getElementById('message-to-send').value)} >Send</button>

                    </div> 
                    
                    </div> 
                    
                </div> 

                <script id="message-template" type="text/x-handlebars-template">
                <li className="clearfix">
                    <div className="message-data align-right">
                    <span className="message-data-time" >time, Today</span> &nbsp; &nbsp;
                    <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
                    </div>
                    <div className="message other-message float-right">
                    messageOutput
                    </div>
                </li>
                </script>

                <script id="message-response-template" type="text/x-handlebars-template">
                <li>
                    <div className="message-data">
                    <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                    <span className="message-data-time">time, Today</span>
                    </div>
                    <div className="message my-message">
                    response
                    </div>
                </li>
                </script>

            </div>
        )
    }
}


const messages = [
    {
        self: true,
        content: "Hey How Are You?"
    },
    {
        self: false,
        content: "I'm great! How Are You?"
    },
    {
        self: true,
        content: "I'am good too"
    },
    {
        self: false,
        content: "Whats the plan"
    },
    {
        self: false,
        content: "Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?"
    }

]