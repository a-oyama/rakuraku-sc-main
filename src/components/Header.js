import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return  (
    <header>{/* headerをcssで設定する */}
        <div className="logo">
            <h3>ポートフォリオ</h3>
        </div>

{/* App.jsで設定したRoutesに飛ばす */}
        <nav>
            <ul>
                <li>
                <Link to="/">ホーム</Link>
                </li>
                <li>
                <Link to="/blog">ブログ</Link>
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