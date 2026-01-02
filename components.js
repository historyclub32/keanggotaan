/**
 * HISTORY CLUB 32 - SHARED UI COMPONENTS
 * (Header, Sidebar, Footer, Global Loader & Status System)
 */

// === KONFIGURASI MENU SIDEBAR ===
const HC32_MENU = [
    { type: 'link', text: 'Beranda', href: 'https://sites.google.com/view/historyclub32/beranda', id: 'beranda' },
    { type: 'category', text: 'Profil' },
    { type: 'link', text: 'Tentang Kami', href: 'https://sites.google.com/view/historyclub32/profil/tentang-kami', id: 'tentang' },
    { type: 'link', text: 'Sejarah', href: 'https://sites.google.com/view/historyclub32/profil/sejarah', id: 'sejarah' },
    { type: 'link', text: 'Kepengurusan', href: 'https://sites.google.com/view/historyclub32/profil/kepengurusan', id: 'kepengurusan' },
    { type: 'category', text: 'Aktivitas' },
    { type: 'link', text: 'Agenda', href: 'https://sites.google.com/view/historyclub32/aktivitas/agenda', id: 'agenda' },
    { type: 'link', text: 'Kegiatan', href: 'https://sites.google.com/view/historyclub32/aktivitas/kegiatan', id: 'kegiatan' },
    { type: 'category', text: 'Keanggotaan' },
    { type: 'link', text: 'Anggota', href: 'https://sites.google.com/view/historyclub32/keanggotaan/anggota', id: 'anggota' },
    { type: 'link', text: 'Presensi', href: 'presensi.html', id: 'presensi' },
    { type: 'link', text: 'Pendaftaran', href: 'pendaftaran.html', id: 'pendaftaran' }
];

// === CSS GABUNGAN ===
const HC32_STYLES = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    @import url('https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css');

    :root {
        --hc-blue: #1a4787; --hc-toska: #0f8a94; --hc-dark: #2e2e2e;
        --hc-green: #15a256; --hc-red: #d30e14; --hc-bg: #f8fafc;
        --hc-yellow: #ecec17; --border: #cbd5e1; --card: #ffffff;
    }
    
    /* GLOBAL OVERLAY (Loader & Status) */
    #hc32-global-overlay {
        position: fixed; inset: 0; background: rgba(255, 255, 255, 0.95);
        display: none; flex-direction: column; align-items: center; justify-content: center;
        z-index: 99999; backdrop-filter: blur(5px);
    }
    
    .hc-status-card {
        background: white; padding: 30px; border-radius: 24px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.15); text-align: center;
        max-width: 320px; width: 90%; transform: scale(0.9); opacity: 0;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    #hc32-global-overlay.active .hc-status-card { transform: scale(1); opacity: 1; }

    /* NEW SPINNER DESIGN (Logo inside Ring) */
    .hc-spinner-box {
        position: relative; width: 80px; height: 80px; margin: 0 auto 20px;
    }
    .hc-spinner-ring {
        position: absolute; inset: 0; border-radius: 50%;
        border: 4px solid rgba(26, 71, 135, 0.1);
        border-top-color: var(--hc-blue);
        border-right-color: var(--hc-toska);
        animation: hcspin 1s linear infinite;
    }
    .hc-spinner-logo {
        position: absolute; inset: 0; margin: auto;
        width: 45px; height: 45px; object-fit: contain;
        border-radius: 50%;
    }

    /* Icon Box for Success/Error */
    .hc-status-icon-box {
        width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 40px; display: none; /* Hidden by default */
    }
    
    .state-success .hc-status-icon-box { display: flex; background: #dcfce7; color: var(--hc-green); border: 4px solid #bbf7d0; animation: popIn 0.4s; }
    .state-error .hc-status-icon-box { display: flex; background: #fee2e2; color: var(--hc-red); border: 4px solid #fecaca; animation: shake 0.4s; }
    
    /* Text Styles */
    .hc-status-title { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 700; color: var(--hc-dark); margin-bottom: 8px; }
    .hc-status-desc { font-family: 'Poppins', sans-serif; font-size: 14px; color: #64748b; line-height: 1.5; margin-bottom: 20px; }
    
    .hc-status-btn {
        width: 100%; padding: 14px; border: none; border-radius: 12px;
        background: var(--hc-blue); color: white; font-weight: 600; font-family: 'Poppins', sans-serif;
        cursor: pointer; transition: 0.2s; display: none; box-shadow: 0 4px 12px rgba(26, 71, 135, 0.2);
    }
    .hc-status-btn:hover { background: var(--hc-toska); transform: translateY(-2px); }

    @keyframes hcspin { to { transform: rotate(360deg); } }
    @keyframes popIn { 0%{transform:scale(0)} 80%{transform:scale(1.1)} 100%{transform:scale(1)} }
    @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }

    /* HEADER & SIDEBAR (Standard) */
    .app-header {
        position: sticky; top: 0; left: 0; right: 0; height: 60px; background: #fff; 
        display: flex; align-items: center; justify-content: space-between; padding: 0 20px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05); z-index: 1000; border-bottom: 3px solid var(--hc-yellow); 
    }
    .header-logo { height: 32px; width: auto; object-fit: contain; }
    .menu-btn { background: none; border: none; cursor: pointer; display: flex; flex-direction: column; gap: 5px; padding: 5px; }
    .menu-btn span { display: block; width: 24px; height: 3px; background-color: var(--hc-blue); border-radius: 2px; }

    .sidebar-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1100; opacity: 0; visibility: hidden; transition: 0.3s; }
    .sidebar-overlay.active { opacity: 1; visibility: visible; }
    .sidebar {
        position: fixed; top: 0; right: 0; bottom: 0; width: 280px; background: #fff; z-index: 1200;
        transform: translateX(100%); transition: transform 0.3s ease-out; display: flex; flex-direction: column;
        box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    }
    .sidebar.active { transform: translateX(0); }
    .sidebar-header { display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid #f1f5f9; }
    .sidebar-title { font-size: 18px; font-weight: 700; color: var(--hc-blue); font-family: 'Poppins', sans-serif; }
    .close-btn { font-size: 28px; background: none; border: none; cursor: pointer; }
    .sidebar-content { flex: 1; overflow-y: auto; padding: 10px 0; }
    .menu-category { padding: 16px 24px 8px; font-size: 12px; font-weight: 600; color: var(--hc-toska); text-transform: uppercase; letter-spacing: 1px; font-family: 'Poppins', sans-serif; }
    .nav-link, .nav-link-single { display: block; padding: 10px 24px; color: var(--hc-dark); text-decoration: none; font-size: 15px; border-left: 4px solid transparent; font-family: 'Poppins', sans-serif; }
    .nav-link { padding-left: 40px; }
    .nav-link:hover { background-color: #f0f9fa; color: var(--hc-blue); }
    .nav-link.active { background: linear-gradient(to right, #f0f9fa, white); color: var(--hc-blue); font-weight: 600; border-left-color: var(--hc-toska); }

    /* FOOTER STYLES */
    .site-footer { background-color: #0f172a; color: #fff; padding: 50px 20px 30px; margin-top: auto; font-family: 'Poppins', sans-serif; }
    .footer-content { max-width: 1100px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 30px; text-align: left; }
    .footer-brand { flex: 1 1 250px; min-width: 200px; }
    
    /* Logo Footer */
    .footer-brand img.f-logo { width: auto; height: 60px; margin-bottom: 15px; }
    .footer-brand img.f-slogan { width: 180px; height: auto; display: block; opacity: 0.9; }
    
    .footer-col { flex: 0 1 auto; min-width: 120px; }
    .footer-col h4 { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
    .footer-col ul { list-style: none; padding: 0; margin: 0; }
    .footer-col ul li { margin-bottom: 10px; }
    .footer-col ul li a { color: #fff; text-decoration: none; font-size: 13px; font-weight: 500; transition: 0.2s; }
    .footer-col ul li a:hover { color: var(--hc-toska); padding-left: 5px; }
    
    .footer-bottom { max-width: 1100px; margin: 40px auto 0; padding-top: 20px; border-top: 1px solid #1e293b; text-align: center; font-size: 12px; color: #64748b; }

    body { display: flex; flex-direction: column; min-height: 100vh; }
    @media (max-width: 768px) {
        .footer-content { display: grid; grid-template-columns: 1fr 1fr; gap: 30px 20px; }
        .footer-brand { grid-column: span 2; text-align: center; border-bottom: 1px solid #1e293b; padding-bottom: 20px; margin-bottom: 10px; }
        .footer-brand img.f-slogan { margin: 0 auto; }
        .footer-col:last-child { grid-column: span 2; text-align: center; margin-top: 10px; }
    }
`;

function initHC32Navigation(activePageId) {
    const styleTag = document.createElement('style');
    styleTag.textContent = HC32_STYLES;
    document.head.appendChild(styleTag);

    // BUILD LOADER HTML
    if (!document.getElementById('hc32-global-overlay')) {
        const overlayHTML = `
            <div id="hc32-global-overlay">
                <div class="hc-status-card" id="hc32-status-card">
                    <div class="hc-spinner-box" id="hc32-spinner-box">
                        <div class="hc-spinner-ring"></div>
                        <img src="https://drive.google.com/thumbnail?id=1uBiuujXrUc6qEhKHnHjvveaAueQxR2IO&sz=w200" class="hc-spinner-logo" alt="HC">
                    </div>
                    <div class="hc-status-icon-box" id="hc32-status-icon-box">
                        <i id="hc32-status-icon"></i>
                    </div>
                    
                    <div id="hc32-status-title" class="hc-status-title">Memuat...</div>
                    <div id="hc32-status-desc" class="hc-status-desc"></div>
                    <button id="hc32-status-btn" class="hc-status-btn">Oke</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', overlayHTML);
        document.getElementById('hc32-status-btn').addEventListener('click', window.hideHC32Status);
    }

    // EXPOSE FUNCTIONS
    const overlay = document.getElementById('hc32-global-overlay');
    const card = document.getElementById('hc32-status-card');
    const spinnerBox = document.getElementById('hc32-spinner-box');
    const iconBox = document.getElementById('hc32-status-icon-box');
    const icon = document.getElementById('hc32-status-icon');
    const titleEl = document.getElementById('hc32-status-title');
    const descEl = document.getElementById('hc32-status-desc');
    const btn = document.getElementById('hc32-status-btn');

    window.showHC32Status = (type, title, message) => {
        card.classList.remove('state-success', 'state-error');
        overlay.style.display = 'flex';
        void overlay.offsetWidth; 
        overlay.classList.add('active');

        titleEl.textContent = title;
        descEl.textContent = message || '';

        if (type === 'loading') {
            spinnerBox.style.display = 'block';
            iconBox.style.display = 'none';
            btn.style.display = 'none';
        } else {
            spinnerBox.style.display = 'none';
            iconBox.style.display = 'flex';
            btn.style.display = 'block';
            
            if (type === 'success') {
                card.classList.add('state-success');
                icon.className = 'ri-check-line';
            } else {
                card.classList.add('state-error');
                icon.className = 'ri-close-line';
            }
        }
    };

    window.hideHC32Status = () => {
        overlay.classList.remove('active');
        setTimeout(() => overlay.style.display = 'none', 300);
    };

    // HEADER
    let headerEl = document.querySelector('header.app-header');
    if (!headerEl) {
        headerEl = document.createElement('header');
        headerEl.className = 'app-header';
        document.body.prepend(headerEl);
    }
    headerEl.innerHTML = `
        <div class="header-left">
            <img src="https://drive.google.com/thumbnail?id=1uBiuujXrUc6qEhKHnHjvveaAueQxR2IO&sz=w200" alt="History Club" class="header-logo">
        </div>
        <button class="menu-btn" id="hc32-btn-menu" aria-label="Menu"><span></span><span></span><span></span></button>
    `;

    // SIDEBAR
    const sideOverlay = document.createElement('div');
    sideOverlay.className = 'sidebar-overlay';
    sideOverlay.id = 'hc32-sidebar-overlay';
    const sidebarEl = document.createElement('aside');
    sidebarEl.className = 'sidebar';
    sidebarEl.id = 'hc32-sidebar';

    let menuItemsHTML = '';
    HC32_MENU.forEach(item => {
        if (item.type === 'category') menuItemsHTML += `<div class="menu-category">${item.text}</div>`;
        else {
            const isActive = item.id === activePageId ? 'active' : '';
            menuItemsHTML += `<a href="${item.href}" class="nav-link ${isActive}">${item.text}</a>`;
        }
    });

    sidebarEl.innerHTML = `
        <div class="sidebar-header"><span class="sidebar-title">Menu Navigasi</span><button class="close-btn" id="hc32-btn-close">×</button></div>
        <div class="sidebar-content">${menuItemsHTML}</div>
    `;
    document.body.appendChild(sideOverlay);
    document.body.appendChild(sidebarEl);

    // FOOTER
    let footerEl = document.querySelector('footer.site-footer');
    if (!footerEl) {
        footerEl = document.createElement('footer');
        footerEl.className = 'site-footer';
        document.body.appendChild(footerEl);
    }

    footerEl.innerHTML = `
      <div class="footer-content">
          <div class="footer-brand">
              <img src="https://drive.google.com/thumbnail?id=1uBiuujXrUc6qEhKHnHjvveaAueQxR2IO&sz=w400" alt="HC Logo" class="f-logo">
              <img src="https://drive.google.com/thumbnail?id=1kNumtFhyzrMmiwbQf_Xu7LWPhXMz2wHj&sz=w600" alt="History Victory" class="f-slogan">
          </div>
          <div class="footer-col">
              <h4>PROFIL</h4>
              <ul>
                  <li><a href="https://sites.google.com/view/historyclub32/profil/tentang-kami">Tentang Kami</a></li>
                  <li><a href="https://sites.google.com/view/historyclub32/profil/sejarah">Sejarah</a></li>
                  <li><a href="https://sites.google.com/view/historyclub32/profil/kepengurusan">Kepengurusan</a></li>
              </ul>
          </div>
          <div class="footer-col">
              <h4>AKTIVITAS</h4>
              <ul>
                  <li><a href="https://sites.google.com/view/historyclub32/aktivitas/agenda">Agenda</a></li>
                  <li><a href="https://sites.google.com/view/historyclub32/aktivitas/kegiatan">Kegiatan</a></li>
              </ul>
          </div>
          <div class="footer-col">
              <h4>KEANGGOTAAN</h4>
              <ul>
                  <li><a href="https://sites.google.com/view/historyclub32/keanggotaan/anggota">Daftar Anggota</a></li>
                  <li><a href="presensi.html">Presensi</a></li>
                  <li><a href="pendaftaran.html">Pendaftaran</a></li>
              </ul>
          </div>
          <div class="footer-col">
              <h4>IKUTI KAMI</h4>
              <ul><li><a href="https://instagram.com/historyclub32jkt" target="_blank">Instagram</a></li></ul>
          </div>
      </div>
      <div class="footer-bottom">
          <p style="margin: 0;">© 2025 History Club SMAN 32 Jakarta.</p>
          <p style="margin: 4px 0 0 0; opacity: 0.8;">
              Dibuat dan dikembangkan dengan penuh bangga oleh 
              <a href="https://www.instagram.com/mickovoitto" target="_blank" style="color: #ecec17; text-decoration: none; font-weight: 500;">@mickovoitto</a>
          </p>
      </div>
    `;

    // Logic Sidebar
    const btnMenu = document.getElementById('hc32-btn-menu');
    const btnMenuClose = document.getElementById('hc32-btn-close');
    const overlayDiv = document.getElementById('hc32-sidebar-overlay');
    const sidebarDiv = document.getElementById('hc32-sidebar');
    function toggleSidebar() { sidebarDiv.classList.toggle('active'); overlayDiv.classList.toggle('active'); }
    if(btnMenu) btnMenu.addEventListener('click', toggleSidebar);
    if(btnMenuClose) btnMenuClose.addEventListener('click', toggleSidebar);
    if(overlayDiv) overlayDiv.addEventListener('click', toggleSidebar);
}
