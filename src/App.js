import React from "react";
import './App.css';
import './Home.css';  // スタイルシートのインポート

const App = () => {
  return (
    <div>
      <header>
        <h1>外国人向けツアーガイド</h1> {/* 外国人向けツアーガイドのタイトル */}
      </header>

      <section className="tourist-spots">
        <h2>東京の観光地 3選</h2>
        <div className="spots">
          <div className="spot">
            <h3>浅草寺</h3>
            <p>東京の歴史的な寺院、浅草寺。美しい境内で日本の伝統を感じながら散策できます。</p>
          </div>
          <div className="spot">
            <h3>東京タワー</h3>
            <p>東京タワーからの絶景を楽しみ、東京の街並みを一望できます。</p>
          </div>
          <div className="spot">
            <h3>皇居</h3>
            <p>日本の皇族が住む場所、皇居。美しい庭園と歴史的な建造物を見学できます。</p>
          </div>
        </div>
      </section>

      <section className="price-info">
        <h2>料金案内</h2>
        <p>プライベートツアーの料金は1日30,000円〜です。詳細についてはお問い合わせください。</p>
      </section>

      <section className="contact-form">
        <h2>ツアーガイドの予約・お問い合わせ</h2>
        <form>
          <label>
            お名前:
            <input type="text" name="name" required />
          </label>
          <label>
            メールアドレス:
            <input type="email" name="email" required />
          </label>
          <label>
            ご希望のツアー日程:
            <input type="date" name="date" required />
          </label>
          <label>
            ご質問・ご要望:
            <textarea name="message" rows="4" />
          </label>
          <button type="submit">予約する</button>
        </form>
      </section>
    </div>
  );
};

export default App;
