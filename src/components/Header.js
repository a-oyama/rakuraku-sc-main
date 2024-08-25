import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="/chat">書き込み</Link>
                </li>
                <li>
                    <a href="#">SNS</a>
                </li>
            </ul>
        </nav>
    </header>

  );
};

export default Header;