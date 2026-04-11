      // ==================== KONFIGURASI API ====================
      const CLOUD_NAME = "ddbqhpuoz";
      const UPLOAD_PRESET = "ml_default";
      const IMGBB_API_KEY = "fc04ecb5446e5645ce99bcdab7ba7b86";

      // ==================== STORAGE KEYS ====================
      const STORAGE_KEYS = {
        TOTAL_VISITORS: 'jhon_total_visitors',
        UPLOADS_TODAY: 'jhon_uploads_today',
        LAST_VISIT_DATE: 'jhon_last_visit_date',
        UPLOAD_HISTORY: 'jhon_upload_history',
        VISITOR_HISTORY: 'jhon_visitor_history'
      };

      // ==================== INISIALISASI STATISTIK ====================
      function initStats() {
        const today = new Date().toISOString().split('T')[0];
        const lastVisit = localStorage.getItem(STORAGE_KEYS.LAST_VISIT_DATE);
        
        if (!localStorage.getItem(STORAGE_KEYS.VISITOR_HISTORY)) {
          const emptyVisitorHistory = {
            dailyData: {},
            today: 0,
            yesterday: 0,
            threeDays: 0,
            sevenDays: 0,
            thirtyDays: 0
          };
          localStorage.setItem(STORAGE_KEYS.VISITOR_HISTORY, JSON.stringify(emptyVisitorHistory));
        }
        
        if (lastVisit !== today) {
          localStorage.setItem(STORAGE_KEYS.UPLOADS_TODAY, '0');
          localStorage.setItem(STORAGE_KEYS.LAST_VISIT_DATE, today);
        }
        
         let totalVisitors = parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL_VISITORS) || '0');
        const sessionKey = 'jhon_session_' + today;
        if (!sessionStorage.getItem(sessionKey)) {
          totalVisitors++;
          localStorage.setItem(STORAGE_KEYS.TOTAL_VISITORS, totalVisitors.toString());
          sessionStorage.setItem(sessionKey, 'visited');
          
          const visitorHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITOR_HISTORY));
          visitorHistory.dailyData[today] = (visitorHistory.dailyData[today] || 0) + 1;
          visitorHistory.today = visitorHistory.dailyData[today] || 0;
          
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];
          visitorHistory.yesterday = visitorHistory.dailyData[yesterdayStr] || 0;
          
          let threeDaysTotal = 0;
          for (let i = 1; i <= 3; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            threeDaysTotal += visitorHistory.dailyData[dateStr] || 0;
          }
          visitorHistory.threeDays = threeDaysTotal;
          
          let sevenDaysTotal = 0;
          for (let i = 1; i <= 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            sevenDaysTotal += visitorHistory.dailyData[dateStr] || 0;
          }
          visitorHistory.sevenDays = sevenDaysTotal;
          
          let thirtyDaysTotal = 0;
          for (let i = 1; i <= 30; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            thirtyDaysTotal += visitorHistory.dailyData[dateStr] || 0;
          }
          visitorHistory.thirtyDays = thirtyDaysTotal;
          
          localStorage.setItem(STORAGE_KEYS.VISITOR_HISTORY, JSON.stringify(visitorHistory));
        }
        
        if (!localStorage.getItem(STORAGE_KEYS.UPLOAD_HISTORY)) {
          const emptyHistory = {
            dailyData: {},
            today: 0,
            yesterday: 0,
            threeDays: 0,
            sevenDays: 0,
            thirtyDays: 0
          };
          localStorage.setItem(STORAGE_KEYS.UPLOAD_HISTORY, JSON.stringify(emptyHistory));
        }
        
        updateStatsDisplay();
      }
      
      function updateStatsDisplay() {
        document.getElementById('kpiTotal').textContent = localStorage.getItem(STORAGE_KEYS.TOTAL_VISITORS) || '0';
        document.getElementById('kpiUploads').textContent = localStorage.getItem(STORAGE_KEYS.UPLOADS_TODAY) || '0';
        document.getElementById('kpiStatus').textContent = 'ONLINE';
        document.getElementById('kpiActive').textContent = '1';
        
        updateVisitorChart();
        updateUploadChart();
      }
      
      function updateVisitorChart() {
        const visitorHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITOR_HISTORY) || '{"today":0,"yesterday":0,"threeDays":0,"sevenDays":0,"thirtyDays":0}');
        const visitors = [
          visitorHistory.today || 0,
          visitorHistory.yesterday || 0,
          visitorHistory.threeDays || 0,
          visitorHistory.sevenDays || 0,
          visitorHistory.thirtyDays || 0
        ];
        const bars = document.querySelectorAll(".visitor-bar");
        const max = Math.max(...visitors, 1);
        bars.forEach((bar, i) => {
          const v = visitors[i] || 0;
          bar.style.height = (v / max * 100) + "%";
          const span = bar.querySelector("span");
          if (span) span.textContent = v;
        });
      }
      
      function updateUploadChart() {
        const uploadHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.UPLOAD_HISTORY) || '{"today":0,"yesterday":0,"threeDays":0,"sevenDays":0,"thirtyDays":0}');
        const uploads = [
          uploadHistory.today || 0,
          uploadHistory.yesterday || 0,
          uploadHistory.threeDays || 0,
          uploadHistory.sevenDays || 0,
          uploadHistory.thirtyDays || 0
        ];
        const bars = document.querySelectorAll(".upload-bar");
        const max = Math.max(...uploads, 1);
        bars.forEach((bar, i) => {
          const v = uploads[i] || 0;
          bar.style.height = (v / max * 100) + "%";
          const span = bar.querySelector("span");
          if (span) span.textContent = v;
        });
      }
      
      function recordUpload() {
        let uploadsToday = parseInt(localStorage.getItem(STORAGE_KEYS.UPLOADS_TODAY) || '0');
        uploadsToday++;
        localStorage.setItem(STORAGE_KEYS.UPLOADS_TODAY, uploadsToday.toString());
        
        const today = new Date().toISOString().split('T')[0];
        const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.UPLOAD_HISTORY) || '{"dailyData":{}}');
        history.dailyData[today] = (history.dailyData[today] || 0) + 1;
        history.today = history.dailyData[today] || uploadsToday;
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        history.yesterday = history.dailyData[yesterdayStr] || 0;
        
        let threeDaysTotal = 0;
        for (let i = 1; i <= 3; i++) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split('T')[0];
          threeDaysTotal += history.dailyData[dateStr] || 0;
        }
        history.threeDays = threeDaysTotal;
        
        let sevenDaysTotal = 0;
        for (let i = 1; i <= 7; i++) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split('T')[0];
          sevenDaysTotal += history.dailyData[dateStr] || 0;
        }
        history.sevenDays = sevenDaysTotal;
        
        let thirtyDaysTotal = 0;
        for (let i = 1; i <= 30; i++) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split('T')[0];
          thirtyDaysTotal += history.dailyData[dateStr] || 0;
        }
        history.thirtyDays = thirtyDaysTotal;
        
        localStorage.setItem(STORAGE_KEYS.UPLOAD_HISTORY, JSON.stringify(history));
        
        updateStatsDisplay();
      }

      // ==================== PREFERENSI PENGGUNA ====================
      const PREF_THEME = "jhon_theme";
      const PREF_MOTION = "jhon_motion";
      const PREF_AUTOCLOSE = "jhon_autoclose";

      function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(PREF_THEME, theme);
      }
      
      // PERBAIKAN: Animasi Sederhana - Sekarang Berfungsi
      function applyMotion(enabled) {
        localStorage.setItem(PREF_MOTION, enabled ? "on" : "off");
        
        if (!enabled) {
          // Matikan semua animasi dengan menambahkan CSS
          const style = document.getElementById("motionStyle");
          if (!style) {
            const s = document.createElement("style");
            s.id = "motionStyle";
            s.textContent = `
              .tool-section { animation: none !important; transition: none !important; }
              .bar { transition: none !important; }
              .qa-btn, .tool-btn, .sidebar-profile, .profile-badge, .link-btn, .nav-btn, .dropdown-btn { transition: none !important; transform: none !important; }
              .qa-btn:hover, .tool-btn:hover, .sidebar-profile:hover, .profile-badge:hover, .link-btn:hover, .nav-btn:hover, .dropdown-btn:hover { transform: none !important; }
              .dashboard-card, .overview-card, .clock-chip, .kpi, .ov-panel { transition: none !important; }
            `;
            document.head.appendChild(s);
          }
        } else {
          // Hidupkan kembali animasi dengan menghapus CSS
          const style = document.getElementById("motionStyle");
          if (style) style.remove();
        }
      }
      
      // PERBAIKAN: Auto-close Sidebar (Mobile) - Sekarang Berfungsi
      function applyAutoClose(enabled) { 
        localStorage.setItem(PREF_AUTOCLOSE, enabled ? "on" : "off");
      }
      function getAutoClose() { 
        return localStorage.getItem(PREF_AUTOCLOSE) !== "off";
      }

   // ==================== SIDEBAR & NAVIGASI ====================
      function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active');
        if (!sidebar.classList.contains('active')) closeUploaderDropdown();
      }
      
      function closeSidebar() {
        document.getElementById('sidebar').classList.remove('active');
        closeUploaderDropdown();
      }

      function toggleUploaderDropdown() {
        const dropdown = document.getElementById('uploaderDropdown');
        const btn = document.getElementById('uploaderBtn');
        dropdown.classList.toggle('active');
        btn.classList.toggle('active-dropdown');
        if (window.innerWidth <= 768) document.getElementById('sidebar').classList.add('active');
      }
      
      function closeUploaderDropdown() {
        document.getElementById('uploaderDropdown').classList.remove('active');
        document.getElementById('uploaderBtn').classList.remove('active-dropdown');
      }
      
      document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('uploaderDropdown');
        const btn = document.getElementById('uploaderBtn');
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) closeUploaderDropdown();
      });

      // PERBAIKAN: showTool dengan auto-close sidebar di mobile
      function showTool(tool) {
        closeUploaderDropdown();
        const sections = ['dashboardTool', 'profileTool', 'settingsTool', 'imgTool', 'vidTool', 'audTool'];
        sections.forEach(id => document.getElementById(id).classList.add('hidden'));

        const map = {
          dashboard: { id: 'dashboardTool', title: 'Dashboard', desc: 'Welcome to jhon_tools management panel' },
          profile: { id: 'profileTool', title: 'Profile', desc: 'Informasi singkat' },
          settings: { id: 'settingsTool', title: 'Settings', desc: 'Pengaturan tampilan dan preferensi' },
          img: { id: 'imgTool', title: 'Img to URL', desc: 'Upload image via ImgBB' },
          vid: { id: 'vidTool', title: 'Vid to URL', desc: 'Upload video via Cloudinary unsigned upload' },
          aud: { id: 'audTool', title: 'Aud to URL', desc: 'Upload audio via Cloudinary unsigned upload' }
        };

        const chosen = map[tool] || map.dashboard;
        document.getElementById(chosen.id).classList.remove('hidden');

        const h1 = document.querySelector('.page-title h1');
        const p = document.querySelector('.page-title p');
        if (h1) h1.textContent = chosen.title;
        if (p) p.textContent = chosen.desc;

        // PERBAIKAN: Auto-close sidebar di mobile (jika toggle ON)
        if (window.innerWidth <= 768 && getAutoClose()) {
          closeSidebar();
        }
      }

      // ==================== UTILITY FUNCTIONS ====================
      function setStatus(el, msg, type) {
        el.classList.remove('success', 'error');
        if (type) el.classList.add(type);
        el.textContent = msg || '';
      }

      function copyUrl(inputId) {
        const input = document.getElementById(inputId);
        if (!input || !input.value) return;

        input.focus();
        input.select();
        input.setSelectionRange(0, 99999);

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(input.value).then(() => showCopyFeedback(input)).catch(() => legacyCopy(input));
        } else {
          legacyCopy(input);
        }
      }
      
      function legacyCopy(input) {
        try {
          const ok = document.execCommand("copy");
          if (ok) showCopyFeedback(input);
          else alert("Tekan lama pada URL lalu pilih Salin.");
        } catch (e) { alert("Tekan lama pada URL lalu pilih Salin."); }
      }
      
      function showCopyFeedback(input) {
        const old = input.value;
        input.value = "✔ Copied!";
        setTimeout(() => { input.value = old; }, 900);
      }

      function bindPreview(inputId, mediaId, emptyId) {
        const input = document.getElementById(inputId);
        const media = document.getElementById(mediaId);
        const empty = document.getElementById(emptyId);
        if (!input || !media || !empty) return;

        input.addEventListener('change', () => {
          const file = input.files && input.files[0];
          if (!file) {
            media.classList.add('hidden');
            empty.classList.remove('hidden');
            if (media.tagName === 'IMG') media.src = '';
            else media.removeAttribute('src');
            return;
          }
          const url = URL.createObjectURL(file);
          if (media.tagName === 'IMG') media.src = url;
          else { media.src = url; media.load(); }
          media.classList.remove('hidden');
          empty.classList.add('hidden');
        });
      }

      // ==================== UPLOAD KE IMGBB (UNTUK GAMBAR) ====================
      async function uploadToImgBB(file) {
        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: "POST",
          body: formData
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.error?.message || "Upload ke ImgBB gagal");
        }
        
        let url = data.data.url;
        // PERBAIKAN: Ganti domain jika i.ibb.co tidak bisa diakses
        if (url.includes('i.ibb.co') && !url.includes('i.ibb.co.com')) {
          url = url.replace('i.ibb.co', 'i.ibb.co.com');
        }
        
        return url;
      }

      // ==================== UPLOAD KE CLOUDINARY (UNTUK VIDEO & AUDIO) ====================
      async function uploadCloudinary(file, endpoint) {
        const form = new FormData();
        form.append('file', file);
        form.append('upload_preset', UPLOAD_PRESET);

        const res = await fetch(endpoint, { method: 'POST', body: form });
        const json = await res.json();
        if (!res.ok || !json?.secure_url) throw new Error(json?.error?.message || 'Upload gagal.');
        return json.secure_url;
      }

      function setLoading(btn, statusEl, loading) {
        if (!btn) return;
        btn.disabled = loading;
        if (loading) {
          btn.classList.add("shimmer");
          setStatus(statusEl, "Uploading...", null);
        } else {
          btn.classList.remove("shimmer");
        }
      }

      // UPLOAD GAMBAR (ImgBB)
      async function uploadImg() {
        const fileInput = document.getElementById('imgFile');
        const btn = document.getElementById('imgUploadBtn');
        const status = document.getElementById('imgStatus');
        const out = document.getElementById('imgUrl');
        const file = fileInput.files && fileInput.files[0];
        if (!file) return setStatus(status, 'Pilih file gambar dulu.', 'error');

        out.value = '';
        setLoading(btn, status, true);

        try {
          const url = await uploadToImgBB(file);
          out.value = url;
          recordUpload();
          setStatus(status, 'Upload sukses ke ImgBB!', 'success');
        } catch (err) {
          setStatus(status, err.message || 'Terjadi error saat upload.', 'error');
        } finally {
          setLoading(btn, status, false);
        }
      }

      // UPLOAD VIDEO (Cloudinary)
      async function uploadVid() {
        const fileInput = document.getElementById('vidFile');
        const btn = document.getElementById('vidUploadBtn');
        const status = document.getElementById('vidStatus');
        const out = document.getElementById('vidUrl');
        const file = fileInput.files && fileInput.files[0];
        if (!file) return setStatus(status, 'Pilih file video dulu.', 'error');

        out.value = '';
        setLoading(btn, status, true);

        try {
          const endpoint = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`;
          out.value = await uploadCloudinary(file, endpoint);
          recordUpload();
          setStatus(status, 'Upload sukses!', 'success');
        } catch (err) {
          setStatus(status, err.message || 'Terjadi error saat upload.', 'error');
        } finally {
          setLoading(btn, status, false);
        }
      }

      // UPLOAD AUDIO (Cloudinary)
      async function uploadAud() {
        const fileInput = document.getElementById('audFile');
        const btn = document.getElementById('audUploadBtn');
        const status = document.getElementById('audStatus');
        const out = document.getElementById('audUrl');
        const file = fileInput.files && fileInput.files[0];
        if (!file) return setStatus(status, 'Pilih file audio dulu.', 'error');

        out.value = '';
        setLoading(btn, status, true);

        try {
          const endpoint = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`;
          out.value = await uploadCloudinary(file, endpoint);
          recordUpload();
          setStatus(status, 'Upload sukses!', 'success');
        } catch (err) {
          setStatus(status, err.message || 'Terjadi error saat upload.', 'error');
        } finally {
          setLoading(btn, status, false);
        }
      }

      // ==================== MOUNT TOOLS ====================
      function mountTools() {
        const imgWrap = document.getElementById('imgTool');
        const vidWrap = document.getElementById('vidTool');
        const audWrap = document.getElementById('audTool');

        imgWrap.innerHTML = ''; vidWrap.innerHTML = ''; audWrap.innerHTML = '';
        imgWrap.appendChild(document.getElementById('tplImg').content.cloneNode(true));
        vidWrap.appendChild(document.getElementById('tplVid').content.cloneNode(true));
        audWrap.appendChild(document.getElementById('tplAud').content.cloneNode(true));

        bindPreview('imgFile', 'imgPreview', 'imgPreviewEmpty');
        bindPreview('vidFile', 'vidPreview', 'vidPreviewEmpty');
        bindPreview('audFile', 'audPreview', 'audPreviewEmpty');
      }

      // ==================== COPY PROFILE BIO ====================
      function copyProfileBio() {
        const bio = "JHON — PRODUCTION dengan ketertarikan pada teknologi. Memulai dari eksplorasi AI dan berkembang ke pengembangan web. Berfokus pada antarmuka yang konsisten, rapi, dan mudah digunakan.";
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(bio).catch(() => {});
        } else {
          const ta = document.createElement("textarea");
          ta.value = bio;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); } catch(e) {}
          ta.remove();
        }
      }

      // ==================== CLOCK ====================
      function startClock() {
        const clock = document.getElementById('clockText');
        const sub = document.getElementById('clockSub');

        function tick() {
          const d = new Date();
          const hh = String(d.getHours()).padStart(2, '0');
          const mm = String(d.getMinutes()).padStart(2, '0');
          const ss = String(d.getSeconds()).padStart(2, '0');
          const day = d.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

          if (clock) clock.textContent = `${hh}:${mm}:${ss}`;
          if (sub) sub.textContent = day;
        }
        tick();
        setInterval(tick, 1000);
      }

      // ==================== SETTINGS UI ====================
      function initSettingsUI() {
        const themeToggle = document.getElementById("themeToggle");
        const motionToggle = document.getElementById("motionToggle");
        const autoCloseToggle = document.getElementById("autoCloseToggle");

        const savedTheme = localStorage.getItem(PREF_THEME) || "light";
        const savedMotion = localStorage.getItem(PREF_MOTION) || "on";
        const savedAutoClose = localStorage.getItem(PREF_AUTOCLOSE) || "on";

        applyTheme(savedTheme);
        applyMotion(savedMotion !== "off");
        applyAutoClose(savedAutoClose !== "off");

        if (themeToggle) themeToggle.checked = (savedTheme === "dark");
        if (motionToggle) motionToggle.checked = (savedMotion !== "off");
        if (autoCloseToggle) autoCloseToggle.checked = (savedAutoClose !== "off");

        themeToggle?.addEventListener("change", () => applyTheme(themeToggle.checked ? "dark" : "light"));
        motionToggle?.addEventListener("change", () => applyMotion(motionToggle.checked));
        autoCloseToggle?.addEventListener("change", () => applyAutoClose(autoCloseToggle.checked));
      }

      // ==================== INITIALIZATION ====================
      document.addEventListener('DOMContentLoaded', () => {
        initStats();
        mountTools();
        initSettingsUI();
        startClock();
        showTool('dashboard');
      });