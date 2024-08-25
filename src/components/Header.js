import React from 'react';
import { Link } from 'react-router-dom';
import SNSImage from "../Images/twitter.png";


const Header = () => {
  return  (
    <header>{/* headerをcssで設定する */}
        <div className="logo">
            <h3>らくらくスケジュール</h3>
        </div>

{/* App.jsで設定したRoutesに飛ばす */}
        <nav>
            <ul>
                <li>
                <Link to="/">ホーム</Link>
                </li>
                <li>
                <Link to="/chat">連絡事項</Link>
                </li>
                <li>
                   <a href="https://www.twitter.com" 
                   target="_blank"
                   rel="noopenner noreferrer">
                   <img src={SNSImage}
                   alt="Twitter"
                   class="icon" /></a>
                </li>
            </ul>
        </nav>
    </header>

  );
};

export default Header;