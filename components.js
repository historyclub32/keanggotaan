/**
 * HISTORY CLUB 32 - SHARED UI COMPONENTS
 * Menggunakan UI/UX & Animasi dari pendaftaran.html
 */

// Konfigurasi Menu (Sesuaikan URL dengan kebutuhan)
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
    { type: 'link', text: 'Presensi', href: 'presensi.html', id: 'presensi' }, // Link lokal
    { type: 'link', text: 'Pendaftaran', href: 'pendaftaran.html', id: 'pendaftaran' } // Link lokal
];

// CSS Core dari pendaftaran.html (Disuntikkan via JS agar tidak perlu copy-paste di setiap HTML)
const HC32_STYLES = `
    :root {
        --hc-blue: #1a4787; --hc-toska: #0f8a94; --hc-dark: #2e2e2e;
        --hc-green: #15a256; --hc-red: #d30e14; --hc-bg: #f8fafc;
        --hc-yellow: #ecec17; --border: #cbd5e1; --card: #ffffff;
    }
    /* Header Sticky */
    .app-header {
        position: sticky; top: 0; left: 0; right: 0;
        height: 64px; background: #fff;
        display: flex; align-items: center; justify-content: space-between;
        padding: 0 24px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        z-index: 1000; 
        border-bottom: 3px solid var(--hc-yellow); 
    }
    .header-left { display: flex; align-items: center; }
    .header-logo { height: 36px; width: auto; object-fit: contain; }
    .menu-btn {
        background: none; border: none; cursor: pointer;
        display: flex; flex-direction: column; gap: 5px; padding: 5px;
    }
    .menu-btn span {
        display: block; width: 24px; height: 3px;
        background-color: var(--hc-blue); border-radius: 2px;
    }
    /* Sidebar Off-canvas */
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
    /* Links */
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
    /* Reset Main Layout untuk halaman yang dulunya pakai fixed sidebar */
    main { margin-left: 0 !important; width: 100% !important; box-sizing: border-box; }
    @media (max-width: 600px) {
        .app-header { padding: 0 16px; }
    }
`;

function initHC32Navigation(activePageId) {
    // 1. Inject CSS Styles
    const styleTag = document.createElement('style');
    styleTag.textContent = HC32_STYLES;
    document.head.appendChild(styleTag);

    // 2. Render Header HTML
    const headerHTML = `
        <div class="header-left">
            <img src="https://lh3.googleusercontent.com/d/1AplgM9Tf9RH9IKcQINTgHSUn1FUR5K8l" alt="History Club" class="header-logo">
        </div>
        <button class="menu-btn" id="hc32-btn-menu" aria-label="Menu">
            <span></span><span></span><span></span>
        </button>
    `;
    
    // Cek apakah elemen header sudah ada, jika tidak buat baru
    let headerEl = document.querySelector('header.app-header');
    if (!headerEl) {
        headerEl = document.createElement('header');
        headerEl.className = 'app-header';
        document.body.prepend(headerEl);
    }
    headerEl.innerHTML = headerHTML;

    // 3. Render Sidebar & Overlay HTML
    const overlayEl = document.createElement('div');
    overlayEl.className = 'sidebar-overlay';
    overlayEl.id = 'hc32-sidebar-overlay';

    const sidebarEl = document.createElement('aside');
    sidebarEl.className = 'sidebar';
    sidebarEl.id = 'hc32-sidebar';

    // Generate Menu Items
    let menuItemsHTML = '';
    HC32_MENU.forEach(item => {
        if (item.type === 'category') {
            menuItemsHTML += `<div class="menu-category">${item.text}</div>`;
        } else {
            const isActive = item.id === activePageId ? 'active' : '';
            const className = item.id === 'beranda' ? 'nav-link-single' : 'nav-link';
            // Jika href adalah halaman saat ini, gunakan # agar tidak reload
            const href = item.id === activePageId ? '#' : item.href;
            menuItemsHTML += `<a href="${href}" class="${className} ${isActive}">${item.text}</a>`;
        }
    });

    sidebarEl.innerHTML = `
        <div class="sidebar-header">
            <span class="sidebar-title">Menu Navigasi</span>
            <button class="close-btn" id="hc32-btn-close">×</button>
        </div>
        <div class="sidebar-content">
            ${menuItemsHTML}
        </div>
    `;

    // Masukkan ke Body
    document.body.appendChild(overlayEl);
    document.body.appendChild(sidebarEl);

    // 4. Attach Event Listeners (Logic Animasi)
    const btnMenu = document.getElementById('hc32-btn-menu');
    const btnClose = document.getElementById('hc32-btn-close');
    const overlay = document.getElementById('hc32-sidebar-overlay');
    const sidebar = document.getElementById('hc32-sidebar');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    btnMenu.addEventListener('click', toggleSidebar);
    btnClose.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);
}
