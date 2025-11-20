/* ==========================================================
 * KONFIGURASI PUBLIK (Pendaftaran)
 * ========================================================== */

// URL Web App Google Apps Script
const GAS_URL = 'https://script.google.com/macros/s/AKfycbz22NwYQ-WJwmdieMgzQxw1I2lXKTghebFO-oSY-wE_av-3oEYIi9TfSCqJCpy3iZKt/exec';

/**
 * Fungsi untuk mengirim data pendaftaran ke Google Apps Script.
 * Menggunakan 'text/plain' untuk menghindari error CORS.
 * * @param {string} action - Nama action di backend (misal: 'pendaftaran')
 * @param {object} body - Data formulir yang akan dikirim
 * @returns {Promise<object>} - Response dari server
 */
async function hc32_post(action, body = {}) {
  // Gabungkan action ke dalam payload
  const payload = { ...body, action: action };

  try {
    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: {
        // PENTING: Jangan ubah ini ke application/json agar tidak kena preflight CORS
        'Content-Type': 'text/plain', 
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Gagal menghubungi server: ${response.statusText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error(`Error pada hc32_post (action: ${action}):`, error);
    return { status: 'error', message: error.message };
  }
}
