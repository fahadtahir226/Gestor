import React, { Component } from 'react'
import M from 'materialize-css'
import "../css/chatstyle.css"
import {writeUserData} from '../Firebase/database'
import {database} from '../Firebase/database'

export default class Chat extends Component {
    constructor(props){
        super(props);
        var msgs = []
        this.state = {uid : this.props.uid, msgs: []}
        // database.ref('Users/' + this.props.uid).on('value', function(snapshot) {
        //     let data = snapshot.val();
        //     Object.keys(data).forEach((property, index) => {
        //         if(data[property].uid = props.uid){
        //             data[property].self = true;
        //         }
        //         else{
        //             data[property].self = false;
        //         }
        //         msgs.push(data[property]);
        //     })
        // })
        // this.state = {msgs};
        // console.log(this.state.msgs);
    }
    componentDidMount(){
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
    let uid = this.state.uid;
    let msgs = [];
    database.ref('Users/' + this.state.uid).on('value', function(snapshot) {
        let data = snapshot.val();
        console.log(data);
        Object.keys(data).forEach((property, index) => {
            console.log(data[property].uid,' ')
            if(data[property].uid === uid){
                data[property].self = true;
            }
            else{
                data[property].self = false;
            }
            msgs.push(data[property]);
            })
    })
    this.setState({msgs : msgs});
    console.log(msgs);


    // database.ref('Users/' + this.uid)
    // .on('value', function(snapshot) {
    //     let msgs = [];
    //     let data = snapshot.val();
    //     console.log(data);
    //     if(data){
    //     Object.keys(data).forEach((property, index) => {
    //         if(data[property].uid = this.uid){
    //             data[property].self = true;
    //         }
    //         else{
    //             data[property].self = false;
    //         }
    //         msgs.push(data[property]);
    //     })
    // }

        // console.log(data);
    // });
}  
render() {
        let { uid , name } = this.props;
        return (
            <div>
                  <div className="mycontainerbox clearfix">
                    <div className="chat">
                    <div className="chat-header clearfix">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
                        
                        <div className="chat-about">
                        <div className="chat-with">Costumer Support</div>
                        </div>
                        <i className="fa fa-star"></i>
                    </div> 
                    
                    <div className="chat-history">
                        <ul>
                            {
                                this.state.msgs.map((msg, key) => 
                                    <li key={key} className={msg.self ? 'clearfix' : null}>
                                        <div className={msg.self ? "message-data align-right" : 'message-data'}>
                                        <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                                        <span className="message-data-name" >{name}</span> <i className="fa fa-circle me"></i>

                                        </div>
                                        <div className={msg.self ? "message other-message float-right" : 'message  my-message'}>
                                            {msg.message}
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
                        
                        <button onClick={() => writeUserData(uid,document.getElementById('message-to-send').value)} >Send</button>

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