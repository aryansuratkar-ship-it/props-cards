

import {Bookmark} from 'lucide-react'

function Cards (props) {
   const whatsappLink = "https://wa.me/918767788947?text=Hello%20I%20want%20to%20apply%20for%20this%20job";


    return (
      <>
       <div className="Card">
        <div>
          <div className="top">
          <img src={props.logo}></img>
          <button> Save <Bookmark size={12} /></button>
        </div>
        <div className="center">
          <h3> {props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4> {props.tag2}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">



            <button>Apply Now </button>
            </a>
          </div>
        

      </div>
      </>
    )
}

export default Cards;