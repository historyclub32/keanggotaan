/**
 * HISTORY CLUB 32 - SHARED UI COMPONENTS
 * (Header, Sidebar, dan Footer terpusat)
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
    /* Import Font Khusus untuk Slogan */
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

    :root {
        --hc-blue: #1a4787; --hc-toska: #0f8a94; --hc-dark: #2e2e2e;
        --hc-green: #15a256; --hc-red: #d30e14; --hc-bg: #f8fafc;
        --hc-yellow: #ecec17; --border: #cbd5e1; --card: #ffffff;
    }
    
    /* HEADER STYLES */
    .app-header {
        position: sticky; top: 0; left: 0; right: 0;
        height: 60px; background: #fff; 
        display: flex; align-items: center; justify-content: space-between;
        padding: 0 20px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        z-index: 1000; 
        border-bottom: 3px solid var(--hc-yellow); 
    }
    .header-left { display: flex; align-items: center; }
    .header-logo { height: 32px; width: auto; object-fit: contain; }
    
    .menu-btn {
        background: none; border: none; cursor: pointer;
        display: flex; flex-direction: column; gap: 5px; padding: 5px;
    }
    .menu-btn span {
        display: block; width: 24px; height: 3px;
        background-color: var(--hc-blue); border-radius: 2px;
    }

    /* SIDEBAR STYLES */
    .sidebar-overlay {
        position: fixed; inset: 0; background: rgba(46, 46, 46, 0.5);
        z-index: 1100; opacity: 0; visibility: hidden; transition: all 0.3s;
    }
    .sidebar-overlay.active { opacity: 1; visibility: visible; }
    .sidebar {
        position: fixed; top: 0; right: 0; bottom: 0;
        width: 280px; background: #fff; z-index: 1200;
        transform: translateX(100%); transition: transform 0.3s ease-out;
        display: flex; flex-direction: column;
        box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    }
    .sidebar.active { transform: translateX(0); }
    .sidebar-header {
        display: flex; justify-content: space-between; align-items: center;
        padding: 20px; border-bottom: 1px solid #f1f5f9;
    }
    .sidebar-title { font-size: 18px; font-weight: 700; color: var(--hc-blue); }
    .close-btn { font-size: 28px; background: none; border: none; color: var(--hc-dark); cursor: pointer; }
    .sidebar-content { flex: 1; overflow-y: auto; padding: 10px 0; }
    .menu-category {
        padding: 16px 24px 8px; font-size: 12px; font-weight: 600;
        color: var(--hc-toska); text-transform: uppercase; letter-spacing: 1px;
    }
    .nav-link, .nav-link-single {
        display: block; padding: 10px 24px; color: var(--hc-dark); 
        text-decoration: none; font-size: 15px; transition: 0.2s;
        border-left: 4px solid transparent;
    }
    .nav-link { padding-left: 40px; }
    .nav-link:hover, .nav-link-single:hover { background-color: #f0f9fa; color: var(--hc-blue); }
    .nav-link.active {
        background: linear-gradient(to right, #f0f9fa, white);
        color: var(--hc-blue); font-weight: 600; border-left-color: var(--hc-toska);
    }

    /* FOOTER STYLES */
    .site-footer {
        background-color: #0f172a; /* Dark Slate Blue */
        color: #fff; padding: 50px 20px 30px;
        margin-top: auto; 
    }
    
    .footer-content {
        max-width: 1100px; margin: 0 auto;
        /* PERUBAHAN: Menggunakan Flexbox untuk layout lebih fleksibel & rapi */
        display: flex;
        flex-wrap: wrap; /* Agar responsif di layar kecil */
        justify-content: space-between; /* Menyebar menu agar tidak ada space kosong di kanan */
        gap: 30px;
        text-align: left;
    }
    
    /* Bagian Brand (Logo & Slogan) */
    .footer-brand {
        flex: 1 1 250px; /* Mengambil ruang lebih tapi fleksibel */
        min-width: 200px;
    }

    /* PERUBAHAN LOGO: Diperkecil agar seimbang dengan slogan */
    .footer-brand img { 
        width: auto; 
        height: 50px; /* Diperkecil dari 80px ke 50px */
        border-radius: 0; 
        margin-bottom: 10px; 
        object-fit: contain;
    }
    
    .footer-slogan { 
        font-family: 'Dancing Script', cursive;
        font-size: 24px; 
        color: #fff; 
        margin-top: 5px; 
        line-height: 1.2;
        opacity: 0.9;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }
    
    /* Bagian Menu (Profil, Aktivitas, dll) */
    .footer-col {
        flex: 0 1 auto; /* Lebar menyesuaikan konten */
        min-width: 120px; /* Lebar minimal agar tidak terlalu sempit */
    }
    
    .footer-col h4 { 
        font-size: 11px; font-weight: 700; color: #94a3b8; 
        text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;
    }
    .footer-col ul { list-style: none; padding: 0; margin: 0; }
    .footer-col ul li { margin-bottom: 10px; }
    .footer-col ul li a { 
        color: #fff; text-decoration: none; font-size: 13px; font-weight: 500; transition: 0.2s; 
    }
    .footer-col ul li a:hover { color: var(--hc-toska); padding-left: 5px; }

    .footer-bottom {
        max-width: 1100px; margin: 40px auto 0; padding-top: 20px;
        border-top: 1px solid #1e293b; text-align: center;
        font-size: 12px; color: #64748b;
    }

    /* Layout Helper */
    body { display: flex; flex-direction: column; min-height: 100vh; }
    main { margin-left: 0 !important; width: 100% !important; box-sizing: border-box; }
    
    /* RESPONSIVE (MOBILE) */
    @media (max-width: 768px) {
        .app-header { padding: 0 16px; }
        
        /* Di HP kembali ke Grid 2 kolom agar rapi */
        .footer-content { 
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px 20px;
        }
        
        .footer-brand { 
            grid-column: span 2; 
            text-align: center; 
            border-bottom: 1px solid #1e293b;
            padding-bottom: 20px;
            margin-bottom: 10px;
        }
        
        .footer-col:last-child {
            grid-column: span 2;
            text-align: center;
            margin-top: 10px;
        }
    }
`;

function initHC32Navigation(activePageId) {
    // 1. Inject CSS
    const styleTag = document.createElement('style');
    styleTag.textContent = HC32_STYLES;
    document.head.appendChild(styleTag);

    // 2. Render Header
    let headerEl = document.querySelector('header.app-header');
    if (!headerEl) {
        headerEl = document.createElement('header');
        headerEl.className = 'app-header';
        document.body.prepend(headerEl);
    }
    headerEl.innerHTML = `
        <div class="header-left">
            <img src="https://lh3.googleusercontent.com/d/1AplgM9Tf9RH9IKcQINTgHSUn1FUR5K8l" alt="History Club" class="header-logo">
        </div>
        <button class="menu-btn" id="hc32-btn-menu" aria-label="Menu">
            <span></span><span></span><span></span>
        </button>
    `;

    // 3. Render Sidebar
    const overlayEl = document.createElement('div');
    overlayEl.className = 'sidebar-overlay';
    overlayEl.id = 'hc32-sidebar-overlay';

    const sidebarEl = document.createElement('aside');
    sidebarEl.className = 'sidebar';
    sidebarEl.id = 'hc32-sidebar';

    let menuItemsHTML = '';
    HC32_MENU.forEach(item => {
        if (item.type === 'category') {
            menuItemsHTML += `<div class="menu-category">${item.text}</div>`;
        } else {
            const isActive = item.id === activePageId ? 'active' : '';
            const className = item.id === 'beranda' ? 'nav-link-single' : 'nav-link';
            const href = item.id === activePageId ? '#' : item.href;
            menuItemsHTML += `<a href="${href}" class="${className} ${isActive}">${item.text}</a>`;
        }
    });

    sidebarEl.innerHTML = `
        <div class="sidebar-header">
            <span class="sidebar-title">Menu Navigasi</span>
            <button class="close-btn" id="hc32-btn-close">×</button>
        </div>
        <div class="sidebar-content">${menuItemsHTML}</div>
    `;

    document.body.appendChild(overlayEl);
    document.body.appendChild(sidebarEl);

    // 4. Render Footer
    let footerEl = document.querySelector('footer.site-footer');
    if (!footerEl) {
        footerEl = document.createElement('footer');
        footerEl.className = 'site-footer';
        document.body.appendChild(footerEl);
    }

    footerEl.innerHTML = `
      <div class="footer-content">
          <div class="footer-brand">
              <img src="https://lh3.googleusercontent.com/d/1-n36cU02E5foAGs4gQbg1pzfbDdCee_f" alt="HC Logo">
              <div class="footer-slogan">
                  History Victory!<br>Historia Delectat!
              </div>
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
                  <li><a href="https://sites.google.com/view/historyclub32/keanggotaan/presensi">Presensi</a></li>
                  <li><a href="pendaftaran.html">Pendaftaran</a></li>
              </ul>
          </div>

          <div class="footer-col">
              <h4>IKUTI KAMI</h4>
              <ul>
                  <li><a href="https://instagram.com/historyclub32jkt" target="_blank">Instagram</a></li>
              </ul>
          </div>
      </div>
      
      <div class="footer-bottom">
          <p style="margin: 0;">© 2025 History Club SMAN 32 Jakarta.</p>
          <p style="margin: 4px 0 0 0; opacity: 0.8;">
              Dibuat dan dikembangkan dengan penuh bangga oleh 
              <a href="https://instagram.com/vitezegi" target="_blank" style="color: #ecec17; text-decoration: none; font-weight: 500;">@vitezegi</a>
          </p>
      </div>
    `;

    // 5. Event Listeners
    const btnMenu = document.getElementById('hc32-btn-menu');
    const btnClose = document.getElementById('hc32-btn-close');
    const overlay = document.getElementById('hc32-sidebar-overlay');
    const sidebar = document.getElementById('hc32-sidebar');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    if(btnMenu) btnMenu.addEventListener('click', toggleSidebar);
    if(btnClose) btnClose.addEventListener('click', toggleSidebar);
    if(overlay) overlay.addEventListener('click', toggleSidebar);
}
