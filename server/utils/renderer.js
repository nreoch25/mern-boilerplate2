export default html => {
  return `
    <!DOCTYPE HTML>
    <html>
      <head>
        <title>MERN BOILERPLATE</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
};
