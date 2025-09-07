const sidebarHtml = `
  <nav class="sidebar" data-test="sidebar">
    <button class="sidebar-toggle">☰</button>
    <a href="/index.html" data-test="navHome">Home</a>
    <b>Current Projects</b>
    <a href="/PlaywrightTestSite/index.html" data-test="navPlaywright">Playwright Demo</a>
    <br>
    <b>Archive</b>
    <a href="/PotionomicsRecipeFinder/index.html" data-test="navPotionomics">Potionomics</a>
  </nav>
  
`;

document.addEventListener('DOMContentLoaded', () => {
    if (!document.querySelector('.sidebar')) {
        document.body.insertAdjacentHTML('afterbegin', sidebarHtml);

        const sidebar = document.querySelector('.sidebar');
        const toggleBtn = sidebar.querySelector('.sidebar-toggle');
        toggleBtn.addEventListener('click', () => sidebar.classList.toggle('collapsed'));
    }


});