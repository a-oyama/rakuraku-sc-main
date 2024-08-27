"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import SNSImage from "../Images/twitter.png";


const Header = () => {
  return  (
    <header>{/* headerをcssで設定する */}
    <nav>
      <ul>
        <li>
        <div className="logo">
          <a href='#Logo'>
          <Link to="/">
            <h3>らくらくスケジュール</h3>
            </Link>
          </a>
        </div>
        </li>
      </ul>
    </nav>

{/* App.jsで設定したRoutesに飛ばす */}
{/* noopnerで別タブで開く */}
        <nav>
            <ul>
                <li>
                <Link to="/logon">新規登録</Link>
                </li>
                <li>
                <Link to="/login">ログイン</Link>
                </li>
                <li>
                <Link to="/profile">プロフィール編集</Link>
                </li>
                <li>
                   <a href="https://www.twitter.com" 
                   target="_blank"
                   rel="noopenner noreferrer">
                   <img src={SNSImage}
                   alt="Twitter"
                   class="icon" /></a>
                </li>
                <li>
                <Link to="/">ログアウト</Link>
                </li>
            </ul>
        </nav>
    </header>

  );
};

export default Header;