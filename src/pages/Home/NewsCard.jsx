import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {

    const { title, image_url, details, _id, rating} = news;

    return (
        <div className="card  bg-base-100 shadow-xl mb-16 border-b-2">
             <h2 className="card-title">{title}</h2>
            <figure><img src= {image_url} /></figure>
            <div className="card-body">

                {
                    details.length > 200 ? <p>{details.slice(0,200)} 
                    <Link to={`/news/${_id}`}
                    className="text-blue-600 font-bold">Read More...
                    </Link></p>
                    : <p>{details}</p>
                }

                 <p className="">{details}</p><br />
                 
                
            </div>
        </div>
    );
};

export default NewsCard;