import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>ZINDAGO</h2>
          <p>
            AI powered vehicle valuation platform delivering
            accurate market predictions.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">

            <a
              href="https://www.linkedin.com/in/janhavi-kashyap-385997277/"
              target="_blank"
              rel="noreferrer"
            >
              💼 LinkedIn
            </a>

            <a
              href="https://github.com/Janhavi078"
              target="_blank"
              rel="noreferrer"
            >
              🐙 GitHub
            </a>

          </div>
        </div>

        {/* CONTRIBUTORS */}
        <div className="footer-section">
          <h4>Contributors</h4>

          <a
            href="https://www.linkedin.com/in/janhavi-kashyap-385997277/"
            target="_blank"
            rel="noreferrer"
          >
            Janhavi Kashyap
          </a>

          <a
            href="https://www.linkedin.com/in/ujjwal-singh-614b95254/"
            target="_blank"
            rel="noreferrer"
          >
            Ujjwal Singh
          </a>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>support@vehiclepredictor.ai</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ZINDAGO • Built with ❤️ by Janhavi & Ujjwal
      </div>

    </footer>
  );
}
