import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
        <div className="card">

            <div className="top">
                <img src={props.image} alt="" />
                <button>Save <Bookmark className='bookmark'/></button>
            </div>

            <div className="center">
                <div className="company">{props.company} <span>5 days ago</span></div>
                <div className="title">{props.title}</div>
                <div className="role">
                    <span>Part-time</span>
                </div>
            </div>

            <div className="bottom">
                <div className="price">{props.price}</div>
                <button>Apply Now</button>
            </div>
        </div>
  )
}

export default Card
