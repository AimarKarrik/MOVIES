import '../styles/Reviews.css';
import profile from '../assets/images/profile1.jpg';

export default function Reviews() {
    return (
        <div className="review">
            <div className='reviewCard'>
               <img
               src={profile}
               alt="profile"
               />
               <Link className="link" to="/profile">{username}</Link>
               <p className="reviewText"></p>
            </div>
        </div>
    )
};