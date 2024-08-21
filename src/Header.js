import React from 'react';

const Header = () => {
  return  (
    <header>{/* headerをcssで設定する */}
        <div className="logo">
            <h3>ポートフォリオ</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <a href="#">ホーム</a>
                </li>
                <li>
                    <a href="#">ブログ</a>
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