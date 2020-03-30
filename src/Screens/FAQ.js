import React, { Component } from 'react';
import  {data}  from "./FAQData";


class FAQ extends Component {

render() {
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <h4 className="col s12 m12 l12 " style={styleBox.mainHeading} >FAQs</h4>
      <div className="row">
        <div className="col s12 m12 l6" >
          <QuestionList heading="Gestor" questions={data.Gestor} />
          <QuestionList heading="Subscription" questions={data.Subscription} />
          <QuestionList heading="Pricing" questions={data.Pricing} />
        </div>
        <div className="col s12 m12 l6" >
          <QuestionList heading="Misc" questions={data.Misc} />

        </div>
      </div>
    </div>
    )
}
}


const QuestionList = (data) =>{
    // {console.log(heading,questions)}
    return(
      <ul className="collection with-header" style={styleBox.listheader} >
        <li className="collection-header" style={styleBox.listItem}><h5>{data.heading}</h5></li>
        {data.questions.map((que,key)=>(
            <li className="collection-item" style={styleBox.listItem} key={key} >
              <div>{que}
                <a href="#!" className="secondary-content">
                  <i className="material-icons">chevron_right</i>
                </a>
              </div>
            </li>
        ))}
      </ul>
    )
}
const styleBox = {
  main: {
    marginTop: "50px !important",
    margin: 30,
    borderRadius: 10,
    minHeight: 500,
    padding: 30,
    color: "#1e88e5",
    boxShadow:"0px 1px 2px 2px #ceeef2"
  },
  mainHeading: {
    marginBottom: 0,
    fontWeight: "bold"
  },
  listheader: {
    border: "1px solid transparent ",

  },
  listItem: {
      borderTop: "1px solid transparent ",
      borderRight: "1px solid transparent ",
      borderLeft: "1px solid transparent "
  }
}

export default FAQ;
