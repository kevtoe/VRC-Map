function openPanel(panelId) {
    closeAllPanels();
    document.getElementById(panelId).classList.add('show');
    location.hash = panelId;
}

function closePanel(panelId) {
    document.getElementById(panelId).classList.remove('show');
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function closeAllPanels() {
    document.querySelectorAll('.panel').forEach(panel => panel.classList.remove('show'));
}

function checkHash() {
    const panelId = location.hash.substring(1);
    if (panelId) {
        openPanel(panelId);
    }
}

window.onload = checkHash;
window.onhashchange = checkHash;
