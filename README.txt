<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="E & E Favor Books creates faith-filled children's books that inspire curiosity, healthy living, and a love for God's wonderful creation." />
  <meta name="theme-color" content="#0b6b35" />
  <meta property="og:title" content="E & E Favor Books" />
  <meta property="og:description" content="Wonderfully Made. Wonderfully Told." />
  <meta property="og:type" content="website" />
  <title>E & E Favor Books | Wonderfully Made. Wonderfully Told.</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Pacifico&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <div class="announcement">
    🍎 Faith-filled stories that inspire healthy hearts, curious minds, and strong families.
  </div>

  <header class="site-header">
    <a class="brand" href="#home" aria-label="E and E Favor Books home">
      <span class="brand-main"><b>E</b><i>&amp;</i><b>E</b></span>
      <span class="brand-sub">Favor Books</span>
    </a>

    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">☰</button>

    <nav class="nav" aria-label="Main navigation">
      <a class="active" href="#home">Home</a>
      <a href="#books">Books</a>
      <a href="#freebies">Freebies</a>
      <a href="#about">About</a>
      <a href="#school-visits">School Visits</a>
      <a href="#contact">Contact</a>
    </nav>

    <a class="shop-top" href="#books">🛍 Shop Books</a>
  </header>

  <main id="main">
    <section class="hero" id="home">
      <div class="hero-copy reveal">
        <p class="eyebrow">WELCOME TO</p>
        <h1><span>E &amp; E</span> FAVOR BOOKS</h1>
        <p class="script">Wonderfully Made. Wonderfully Told.</p>
        <p class="intro">
          We create faith-filled children's books that inspire curiosity, healthy living,
          and a love for God's wonderful creation. Written by two brothers, for families everywhere.
        </p>

        <div class="hero-actions">
          <a class="button primary" href="#books">📖 Shop Books</a>
          <a class="button secondary" href="#freebies">⬇ Free Coloring Pages</a>
        </div>
      </div>

      <div class="hero-art reveal">
        <div class="glow"></div>
        <img src="assets/hero-brothers.jpeg" alt="Two brothers exploring a colorful fruit orchard" />
      </div>
    </section>

    <section class="featured" id="books">
      <div class="book-visual reveal">
        <div class="book-shell">
          <div class="book-cover-crop">
            <img src="assets/fruits-cover-spread.jpeg" alt="Fruits Tell Their Tales book cover" />
          </div>
        </div>
      </div>

      <div class="book-copy reveal">
        <span class="feature-label">★ Featured Book</span>
        <h2><span>Fruits</span> Tell Their <em>Tales</em></h2>
        <h3>❧ A Two-Brother Adventure ❧</h3>
        <p>
          Join Elijah and Ezra on a fruity adventure where apples crunch, lemons squeeze,
          watermelons knock, and every fruit has a tale to tell!
        </p>

        <div class="features-row">
          <div><span>🍓</span><b>Fun Fruit Facts</b></div>
          <div><span>📖</span><b>Playful Rhymes</b></div>
          <div><span>💗</span><b>Healthy Living</b></div>
          <div><span>🌱</span><b>God's Creation</b></div>
        </div>

        <div class="purchase-actions">
          <a class="button primary buy-button" href="https://www.barnesandnoble.com/w/fruits-tell-their-tales-elijah-favor/1146452863" target="_blank" rel="noopener">
            Buy at Barnes &amp; Noble
          </a>
          <a class="button amazon-button" href="https://a.co/d/07lo4Bmq" target="_blank" rel="noopener">
            Buy on Amazon
          </a>
        </div>

        <p class="book-meta">Ages 3–8 &nbsp; | &nbsp; 42 Pages &nbsp; | &nbsp; Hardcover</p>
      </div>
    </section>

    <section class="benefits" id="about">
      <h2>More Than Just a Book</h2>
      <span class="tiny-heart">♡</span>

      <div class="benefit-grid">
        <article class="reveal">
          <div class="round-icon">📕</div>
          <div>
            <h3>Encourages Healthy Habits</h3>
            <p>Kids learn about fruits in a fun way that promotes healthy choices for life.</p>
          </div>
        </article>

        <article class="reveal">
          <div class="round-icon">👨‍👩‍👧</div>
          <div>
            <h3>Perfect for Family Time</h3>
            <p>Great for read-alouds, bedtime stories, and quality time together.</p>
          </div>
        </article>

        <article class="reveal">
          <div class="round-icon">✝️</div>
          <div>
            <h3>Faith-Filled Stories</h3>
            <p>Every page points children to the beauty and goodness of God's creation.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="newsletter" id="freebies">
      <div class="newsletter-copy reveal">
        <h2>Join Our Family!</h2>
        <p>
          Get free coloring pages, fun activities, and be the first to know about new books and special offers.
        </p>

        <form id="signup-form">
          <label class="sr-only" for="email">Email address</label>
          <input id="email" type="email" placeholder="Enter your email" required />
          <button type="submit">✉ Join Now</button>
        </form>

        <small>We respect your privacy. Unsubscribe at any time.</small>
        <p class="form-message" aria-live="polite"></p>
      </div>

      <div class="coloring-card reveal" aria-label="Coloring pages preview">
        <div class="paper">
          <div class="line-art">👦🏽 🌳 👦🏽</div>
          <div class="scribble"></div>
          <div class="scribble short"></div>
        </div>
        <div class="pencils">✏️ ✏️ ✏️</div>
      </div>
    </section>

    <section class="service-strip" id="school-visits">
      <div>🚚 <span><b>Fast Shipping</b><small>From trusted retailers</small></span></div>
      <div>🛡️ <span><b>Secure Checkout</b><small>Safe &amp; trusted</small></span></div>
      <div>♡ <span><b>Made with Love</b><small>For your family</small></span></div>
      <div>☺ <span><b>Faith-Filled Fun</b><small>Stories children enjoy</small></span></div>
    </section>
  </main>

  <footer id="contact">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">E<span>&amp;</span>E</div>
        <strong>Favor Books</strong>
        <p class="footer-script">Wonderfully Made. Wonderfully Told.</p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <a href="#home">Home</a>
        <a href="#books">Books</a>
        <a href="#freebies">Free Coloring Pages</a>
        <a href="#school-visits">School Visits</a>
        <a href="#contact">Contact</a>
      </div>

      <div>
        <h4>Shop</h4>
        <a href="https://www.barnesandnoble.com/w/fruits-tell-their-tales-elijah-favor/1146452863" target="_blank" rel="noopener">Barnes &amp; Noble</a>
        <a href="https://a.co/d/07lo4Bmq" target="_blank" rel="noopener">Amazon</a>
        <a href="#books">Featured Book</a>
      </div>

      <div>
        <h4>Stay Connected</h4>
        <p>Follow us for updates, sneak peeks, and encouragement for your family.</p>
        <div class="socials">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="YouTube">▶</a>
          <a href="#" aria-label="TikTok">♪</a>
        </div>
      </div>
    </div>

    <div class="copyright">
      © <span id="year"></span> E &amp; E Favor Books. All rights reserved.
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
