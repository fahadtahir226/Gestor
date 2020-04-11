import React, { Component } from 'react';
import  {data}  from "./FAQData";


class FAQ extends Component {

render() {
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <h4 className="col s12 m12 l12 " style={styleBox.mainHeading} >FAQs</h4>
      <div className="row">
        <div className="col l12 m12 s12">
        <QuesParas heading="THE MANAGER"  questions={data.TheManager}/>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m12 l6" >
          <QuestionList heading="BASIC PLANS" questions={data.BasicPlan} />
          <QuestionList heading="TAXES" questions={data.Taxes} />
          <QuestionList heading="START WITH THE MANAGER" questions={data.StartWithTheManager} />
        </div>
        <div className="col s12 m12 l6" >
          <QuestionList heading="PRO PLANS" questions={data.ProPlan} />
          <QuestionList heading="DATA" questions={data.Data} />
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
const QuesParas = (data) =>{
  {console.log(data.questions)}
  return(
    <ul className="collection with-header" style={styleBox.listheader} >
      <li className="collection-header" style={styleBox.listItem}><h5>{data.heading}</h5></li>
      {data.questions.map((que,key)=>(
        <>
          <li className="collection-item" style={styleBox.listItem} key={key} >
            <div>{que[0]}</div>
            <div style={{paddingLeft: 30}} >{que[1]}</div>
          </li>
            </>
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
