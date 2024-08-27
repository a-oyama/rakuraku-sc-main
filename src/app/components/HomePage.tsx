"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import chatImage from "../Images/rakurakudog.jpg";
import fileImage from "../Images/file.jpg";
import movieImage from "../Images/movie.jpg";



const HomePage = () => {
  return <div className="container text-center">
  <h1>Calendar</h1>

{/* Calendar */}
  <p>
    カレンダー部
  </p>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <p>
    カレンダー部
  </p>

{/* Works */}
<nav>
  <ul>
  <section id="func">
    <div class="text-center">
      <h2 class="sec-title">Works</h2>
      <div class="row text-center">
        <div class="col-md-4 services">
          <li>
            <Link to="/chat">
               <img src={chatImage} alt=""/> {/* alt=画像取得できない場合 */}
            </Link>
          </li>
          <h4>連絡事項</h4>
        </div>

        <div class="col-md-4 services">
        <li>
        <Link to="/file">
          <img src={fileImage} alt=""/>
        </Link>
          </li>
          <h4>資料置き場</h4>
        </div>
        
        <div class="col-md-4 services">
          <img src={movieImage} alt=""/>
          <h4>動画</h4>
          <p>(実装予定)</p>
        </div>
      </div>
    </div>
  </section>
  </ul>
</nav>

{/* News(chat・fileの最新更新の各3件まで表示) */}
 <section id="news" class="wrapper">
    <h2 class="sec-title">News</h2>
    <dl>
        <dt>2024/6/30</dt>
        <dd>本ページの作成作業を開始</dd>
        <dt>2024/7/1</dt>
        <dd>作業続行</dd>
        <dt>2024/7/2</dt>
        <dd>勤務中からの体調不良により作業不可</dd>
        <dt>2024/7/3</dt>
        <dd>鬱気味から回復し本サイトが完成</dd>
    </dl>
  </section>


{/* Mail */}
  <section id="contact" class='wrapper'>
    <h2 class="sec-title">Contact</h2>
    <p>お問い合わせは以下のフォームから</p>
    <form action="#" method="post">
     <dl>
        <dt><label for="name">お名前</label></dt>
        <dd><input type="text" id="name" /></dd>
        <dt><label for="email">メールアドレス</label></dt>
        <dd><input type="email" id="email" /></dd>
        <dt><label for="content">内容</label></dt>
        <dd><textarea id="content" cols="30" row="10"> </textarea></dd>
     </dl>
     <div class="button"><input type="submit" value="送信"/></div>
    </form>
  </section>

</div>
};

export default HomePage;