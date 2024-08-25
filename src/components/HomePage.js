import React from 'react';
import { Button } from 'react-bootstrap';
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/sibainu.jpg";

const HomePage = () => {
  return <div className="container text-center">
  <h1>Shin Code</h1>

  <img src={profileImage} className="profileImage" />

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

  <section class="page-section" id="services">
    <div className="service">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
        <h3 class="section-subheading text-muted mb-5">
          私が作った作品一覧です
        </h3>
      </div>
      <div class="row text-center">
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="my-3">ECサイト</h4>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta
            impedit.
          </p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="my-3">レスポンシブサイト</h4>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta
            impedit.
          </p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="my-3">ウェブセキュリティ</h4>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta
            impedit.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="skill">
    <div class="text-center">
      <h1 class="title">スキル</h1>
      <div class="row text-center">
        <div class="col-md-4 services">
          <img src={reactImage} />
          <h4>React</h4>
          <p>Reactがつかえます</p>
        </div>
        <div class="col-md-4 services">
          <img src={jsImage} />
          <h4>HTML/CSS</h4>
          <p>HTML/CSSがつかえます</p>
        </div>
        <div class="col-md-4 services">
          <img src={firebaseImage} />
          <h4>Firebase</h4>
          <p>Firebaseがつかえます</p>
        </div>
      </div>
      <button type="button" class="btn btn-primary">
        スキル一覧
      </button>
    </div>
  </section>

{/* News */}
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