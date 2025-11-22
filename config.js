/* ==========================================================
 * FILE KONFIGURASI (config.js)
 * Digunakan oleh: pendaftaran.html & presensi.html
 * ========================================================== */

// ▼▼▼ GANTI URL INI DENGAN DEPLOYMENT ID TERBARU ANDA (Web App URL) ▼▼▼
const GAS_URL = 'https://script.google.com/macros/s/AKfycbz22NwYQ-WJwmdieMgzQxw1I2lXKTghebFO-oSY-wE_av-3oEYIi9TfSCqJCpy3iZKt/exec';
// ▲▲▲ PASTIKAN URL DIAKHIRI DENGAN '/exec' ▲▲▲


/**
 * Fungsi Pengirim Data Standar (POST)
 * Digunakan oleh Pendaftaran untuk mengirim data formulir.
 * Menggunakan 'text/plain' untuk menghindari blokir CORS dari Google.
 * * @param {string} action - Nama aksi (misal: 'pendaftaran')
 * @param {object} body   - Data objek yang dikirim
 */
async function hc32_post(action, body = {}) {
  // Bungkus data dengan property 'action' agar Router di Backend tahu tujuannya
  const payload = { ...body, action: action };

  try {
    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: {
        // PENTING: Jangan ubah ke application/json! 
        // text/plain mencegah browser melakukan "Preflight Check" yang sering gagal di Apps Script.
        'Content-Type': 'text/plain', 
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Gagal menghubungi server: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error(`Error pada hc32_post (action: ${action}):`, error);
    // Kembalikan format error yang bisa dibaca frontend
    return { status: 'error', message: error.message || 'Terjadi kesalahan koneksi' };
  }
}
