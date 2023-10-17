import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import pictureDefault1 from '../../../assets/qZone1.png';
import pictureDefault2 from '../../../assets/qZone2.png';
import pictureDefault3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-2xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-2">Find Us</h2>
                <a className='p-2 flex text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <a className='p-2 flex text-lg items-center border rounded-t-lg' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    Twitter
                </a>
                <a className='p-2 flex text-lg items-center border rounded-t-lg' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                   Instagram
                </a>
            </div>
            <div className='p-4 bg-slate-200 border rounded-lg space-y-3 mb-6'>
                <h2 className="text-2">Q-Zone</h2>
                <img src={pictureDefault1} alt="" />
                <img src={pictureDefault2} alt="" />
                <img src={pictureDefault3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;