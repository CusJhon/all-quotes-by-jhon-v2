// ========== FORMAT MOCKUP V1 ==========
const formatsV1 = [
    { id: 'brat', name: 'Brat Text', icon: 'fas fa-font', endpoint: '/maker/brat', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'text', label: 'Teks', type: 'text', placeholder: 'Masukkan teks...' }] },
    { id: 'fakecall', name: 'Fake Call', icon: 'fas fa-phone-alt', endpoint: '/maker/fakecall', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'nama', label: 'Nama Penelepon', type: 'text', placeholder: 'Jhony' }, { name: 'durasi', label: 'Durasi', type: 'text', placeholder: '19:31' }, { name: 'avatar', label: 'URL Avatar', type: 'url', placeholder: 'https://cdn.discordapp.com/embed/avatars/0.png' }] },
    { id: 'fakechannel', name: 'Fake Channel', icon: 'fab fa-youtube', endpoint: '/maker/fakechannel', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'url', label: 'URL Gambar', type: 'url' }, { name: 'name', label: 'Nama Channel', type: 'text' }, { name: 'followers', label: 'Followers', type: 'text' }, { name: 'desc', label: 'Deskripsi', type: 'text' }, { name: 'date', label: 'Tanggal', type: 'text' }] },
    { id: 'fakedana', name: 'Fake DANA', icon: 'fas fa-wallet', endpoint: '/maker/fakedanav2', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'nominal', label: 'Nominal', type: 'text', placeholder: 'Rp 100.000' }] },
    { id: 'fbcomment', name: 'FB Comment', icon: 'fab fa-facebook', endpoint: '/maker/fakefbcomment', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'name', label: 'Nama', type: 'text' }, { name: 'comment', label: 'Komentar', type: 'text' }, { name: 'url', label: 'URL Foto Profil', type: 'url' }] },
    { id: 'wagroup', name: 'WA Group', icon: 'fab fa-whatsapp', endpoint: '/maker/fakegroup', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'url', label: 'URL Icon', type: 'url' }, { name: 'title', label: 'Judul', type: 'text' }, { name: 'number', label: 'Jumlah Pesan', type: 'text' }, { name: 'time', label: 'Waktu', type: 'text' }] },
    { id: 'wagroupv2', name: 'WA Group V2', icon: 'fab fa-whatsapp', endpoint: '/maker/fakegroupv2', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'url', label: 'URL Avatar', type: 'url' }, { name: 'name', label: 'Nama Admin', type: 'text' }, { name: 'members', label: 'Member', type: 'text' }, { name: 'desc', label: 'Deskripsi', type: 'text' }, { name: 'author', label: 'Author', type: 'text' }, { name: 'date', label: 'Tanggal', type: 'text' }] },
    { id: 'igpost', name: 'IG Post', icon: 'fab fa-instagram', endpoint: '/maker/fakeigpost', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'content', label: 'URL Konten', type: 'url' }, { name: 'username', label: 'Username', type: 'text' }, { name: 'likes', label: 'Likes', type: 'text' }, { name: 'comment', label: 'Comments', type: 'text' }, { name: 'share', label: 'Share', type: 'text' }, { name: 'repost', label: 'Repost', type: 'text' }, { name: 'date', label: 'Tanggal', type: 'text' }, { name: 'desc', label: 'Caption', type: 'textarea' }] },
    { id: 'tiktokprofile', name: 'TikTok Profile', icon: 'fab fa-tiktok', endpoint: '/maker/faketiktok', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'name', label: 'Nama', type: 'text' }, { name: 'username', label: 'Username', type: 'text' }, { name: 'following', label: 'Following', type: 'text' }, { name: 'followers', label: 'Followers', type: 'text' }, { name: 'likes', label: 'Likes', type: 'text' }, { name: 'url', label: 'URL Foto', type: 'url' }] },
    { id: 'tiktokcomment', name: 'TikTok Comment', icon: 'fab fa-tiktok', endpoint: '/maker/fakettcomment', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'url', label: 'URL Foto', type: 'url' }, { name: 'username', label: 'Username', type: 'text' }, { name: 'comment', label: 'Komentar', type: 'text' }, { name: 'date', label: 'Tanggal', type: 'text' }] },
    { id: 'ytcommunity', name: 'YT Community', icon: 'fab fa-youtube', endpoint: '/maker/fakeytcomunity', baseUrl: 'https://api.zenzxz.my.id', params: [{ name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'content', label: 'URL Konten', type: 'url' }, { name: 'username', label: 'Username', type: 'text' }, { name: 'desc', label: 'Deskripsi', type: 'text' }, { name: 'like', label: 'Like', type: 'text' }, { name: 'comment', label: 'Comment', type: 'text' }] },
    { id: 'ytcomment', name: 'YT Comment', icon: 'fab fa-youtube', endpoint: '/maker/ytcomment', baseUrl: 'https://api.deline.web.id', params: [{ name: 'username', label: 'Username', type: 'text', placeholder: 'cpmjhon21' }, { name: 'text', label: 'Komentar', type: 'textarea', placeholder: 'Tulis komentar di sini...' }, { name: 'avatar', label: 'URL Avatar', type: 'url', placeholder: 'https://example.com/avatar.jpg' }] }
];

// ========== FORMAT MOCKUP V2 ==========
const formatsV2 = [
    { id: 'goodbye', name: 'Goodbye V1', icon: 'fas fa-sign-out-alt', endpoint: '/api/canvas/goodbyev1', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'username', label: 'Username', type: 'text' }, { name: 'guildName', label: 'Nama Guild', type: 'text' }, { name: 'guildIcon', label: 'URL Icon Guild', type: 'url' }, { name: 'memberCount', label: 'Jumlah Member', type: 'text' }, { name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'background', label: 'URL Background', type: 'url' }, { name: 'quality', label: 'Kualitas (1-100)', type: 'text' }] },
    { id: 'welcome', name: 'Welcome V1', icon: 'fas fa-sign-in-alt', endpoint: '/api/canvas/welcomev1', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'username', label: 'Username', type: 'text' }, { name: 'guildName', label: 'Nama Guild', type: 'text' }, { name: 'guildIcon', label: 'URL Icon Guild', type: 'url' }, { name: 'memberCount', label: 'Jumlah Member', type: 'text' }, { name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'background', label: 'URL Background', type: 'url' }, { name: 'quality', label: 'Kualitas (1-100)', type: 'text' }] },
    { id: 'spotify', name: 'Spotify Card', icon: 'fab fa-spotify', endpoint: '/api/canvas/spotify', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'title', label: 'Judul Lagu', type: 'text' }, { name: 'artist', label: 'Artis', type: 'text' }, { name: 'start', label: 'Waktu Mulai (ms)', type: 'text' }, { name: 'end', label: 'Waktu Akhir (ms)', type: 'text' }, { name: 'image', label: 'URL Gambar', type: 'url' }, { name: 'border', label: 'Warna Border', type: 'text' }, { name: 'album', label: 'Nama Album', type: 'text' }] },
    { id: 'gay', name: 'Gay Image', icon: 'fas fa-rainbow', endpoint: '/api/canvas/gay', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'nama', label: 'Nama', type: 'text' }, { name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'num', label: 'Angka', type: 'text' }] },
    { id: 'profilecard', name: 'Profile Card', icon: 'fas fa-id-card', endpoint: '/api/canvas/profile', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'backgroundURL', label: 'URL Background', type: 'url' }, { name: 'avatarURL', label: 'URL Avatar', type: 'url' }, { name: 'rankName', label: 'Nama Rank', type: 'text' }, { name: 'rankId', label: 'ID Rank', type: 'text' }, { name: 'exp', label: 'EXP', type: 'text' }, { name: 'requireExp', label: 'EXP Required', type: 'text' }, { name: 'level', label: 'Level', type: 'text' }, { name: 'name', label: 'Nama', type: 'text' }] },
    { id: 'captcha', name: 'Captcha Image', icon: 'fas fa-shield-alt', endpoint: '/api/canvas/captcha', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'background', label: 'URL Background', type: 'url' }, { name: 'captchaKey', label: 'Kode Captcha', type: 'text' }, { name: 'border', label: 'Warna Border', type: 'text' }, { name: 'overlayOpacity', label: 'Opacity Overlay', type: 'text' }] },
    { id: 'fakecomment', name: 'Fake xny67 Comment', icon: 'fas fa-comment-dots', endpoint: '/api/canvas/fake-xny67', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'name', label: 'Nama', type: 'text' }, { name: 'quote', label: 'Kutipan', type: 'textarea' }, { name: 'likes', label: 'Jumlah Like', type: 'text' }, { name: 'dislikes', label: 'Jumlah Dislike', type: 'text' }] },
    { id: 'ship', name: 'Ship Image', icon: 'fas fa-heart', endpoint: '/api/canvas/ship', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'avatar1', label: 'URL Avatar 1', type: 'url' }, { name: 'avatar2', label: 'URL Avatar 2', type: 'url' }, { name: 'background', label: 'URL Background', type: 'url' }, { name: 'persen', label: 'Persentase (%)', type: 'text' }] },
    { id: 'fakexn', name: 'Fake xny67', icon: 'fas fa-skull', endpoint: '/api/canvas/xny67', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'title', label: 'Judul', type: 'text' }, { name: 'image', label: 'URL Gambar', type: 'url' }] },
    { id: 'beautiful', name: 'Beautiful Image', icon: 'fas fa-star', endpoint: '/api/canvas/beautiful', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url' }] },
    { id: 'sertifikat', name: 'Sertifikat Tolol', icon: 'fas fa-scroll', endpoint: '/api/canvas/sertifikat-tolol', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'text', label: 'Teks', type: 'text' }] },
    { id: 'ektp', name: 'eKTP Generator', icon: 'fas fa-id-card', endpoint: '/api/canvas/ektp', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'provinsi', label: 'Provinsi', type: 'text' }, { name: 'kota', label: 'Kota', type: 'text' }, { name: 'nik', label: 'NIK', type: 'text' }, { name: 'nama', label: 'Nama', type: 'text' }, { name: 'ttl', label: 'Tempat/Tgl Lahir', type: 'text' }, { name: 'jenis_kelamin', label: 'Jenis Kelamin', type: 'text' }, { name: 'golongan_darah', label: 'Golongan Darah', type: 'text' }, { name: 'alamat', label: 'Alamat', type: 'textarea' }, { name: 'rt/rw', label: 'RT/RW', type: 'text' }, { name: 'kel/desa', label: 'Kelurahan/Desa', type: 'text' }, { name: 'kecamatan', label: 'Kecamatan', type: 'text' }, { name: 'agama', label: 'Agama', type: 'text' }, { name: 'status', label: 'Status Perkawinan', type: 'text' }, { name: 'pekerjaan', label: 'Pekerjaan', type: 'text' }, { name: 'kewarganegaraan', label: 'Kewarganegaraan', type: 'text' }, { name: 'masa_berlaku', label: 'Masa Berlaku', type: 'text' }, { name: 'terbuat', label: 'Tanggal Terbuat', type: 'text' }, { name: 'pas_photo', label: 'URL Pas Photo', type: 'url' }] },
    { id: 'levelup', name: 'Level Up Card', icon: 'fas fa-level-up-alt', endpoint: '/api/canvas/level-up', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'backgroundURL', label: 'URL Background', type: 'url' }, { name: 'avatarURL', label: 'URL Avatar', type: 'url' }, { name: 'fromLevel', label: 'Dari Level', type: 'text' }, { name: 'toLevel', label: 'Ke Level', type: 'text' }, { name: 'name', label: 'Nama', type: 'text' }] },
    { id: 'batslap', name: 'Batslap Image', icon: 'fas fa-hand-paper', endpoint: '/api/canvas/batslap', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image1', label: 'URL Gambar 1', type: 'url' }, { name: 'image2', label: 'URL Gambar 2', type: 'url' }] },
    { id: 'security', name: 'Security Card', icon: 'fas fa-shield-virus', endpoint: '/api/canvas/security', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'avatar', label: 'URL Avatar', type: 'url' }, { name: 'background', label: 'URL Background', type: 'url' }, { name: 'createdTimestamp', label: 'Created Timestamp', type: 'text' }, { name: 'suspectTimestamp', label: 'Suspect Timestamp', type: 'text' }, { name: 'locale', label: 'Locale', type: 'text' }] },
    { id: 'blur', name: 'Blur Image Effect', icon: 'fas fa-blur', endpoint: '/api/canvas/blur', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'image', label: 'URL Gambar', type: 'url' }] },
    { id: 'textpro', name: 'TextPro', icon: 'fas fa-text-height', endpoint: '/api/m/textpro', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'url', label: 'URL TextPro', type: 'url' }, { name: 'text1', label: 'Teks 1', type: 'text' }, { name: 'text2', label: 'Teks 2', type: 'text' }] },
    { id: 'photooxy', name: 'PhotoOxy', icon: 'fas fa-image', endpoint: '/api/m/photooxy', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'url', label: 'URL PhotoOxy', type: 'url' }, { name: 'text1', label: 'Teks', type: 'text' }] },
    { id: 'ephoto360', name: 'Ephoto360', icon: 'fas fa-edit', endpoint: '/api/m/ephoto360', baseUrl: 'https://api.siputzx.my.id', params: [{ name: 'url', label: 'URL Ephoto360', type: 'url' }, { name: 'text1', label: 'Teks', type: 'text' }] },
    // RANDOM IMAGES - dengan endpoint alternatif untuk menghindari 403
    { id: 'random_bluearchive', name: 'Random Blue Archive', icon: 'fas fa-dice-d6', endpoint: '/api/r/blue-archive', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true },
    { id: 'random_cecan_thailand', name: 'Random Cecan Thailand', icon: 'fas fa-dice-d6', endpoint: '/api/r/cecan/thailand', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, altEndpoint: '/api/random/cecan/thailand' },
    { id: 'random_cecan_china', name: 'Random Cecan China', icon: 'fas fa-dice-d6', endpoint: '/api/r/cecan/china', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, altEndpoint: '/api/random/cecan/china' },
    { id: 'random_cecan_vietnam', name: 'Random Cecan Vietnam', icon: 'fas fa-dice-d6', endpoint: '/api/r/cecan/vietnam', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, altEndpoint: '/api/random/cecan/vietnam' },
    { id: 'random_cecan_indonesia', name: 'Random Cecan Indonesia', icon: 'fas fa-dice-d6', endpoint: '/api/r/cecan/indonesia', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, altEndpoint: '/api/random/cecan/indonesia' },
    { id: 'random_cecan_japan', name: 'Random Cecan Japan', icon: 'fas fa-dice-d6', endpoint: '/api/r/cecan/japan', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, altEndpoint: '/api/random/cecan/japan' },
    { id: 'random_cecan_korea', name: 'Random Cecan Korea', icon: 'fas fa-dice-d6', endpoint: '/api/r/cecan/korea', baseUrl: 'https://api.siputzx.my.id', params: [], isRandom: true, altEndpoint: '/api/random/cecan/korea' },
    { id: 'random_waifu', name: 'Random Waifu', icon: 'fas fa-dice-d6', endpoint: '/api/r/waifu', baseUrl: 'https://api.waifu.pics', params: [], isRandom: true, useWaifuPics: true, category: 'sfw', type: 'waifu' },
    { id: 'random_neko', name: 'Random Anime Neko', icon: 'fas fa-dice-d6', endpoint: '/api/neko', baseUrl: 'https://nekos.best/api/v2', params: [], isRandom: true, useNekosBest: true }
];

let activeFormatV1 = formatsV1[0];
let activeFormatV2 = formatsV2[0];
let currentVersion = 'v1';

// ========== VERIFICATION GATE ==========
let isFollowed = false, isShared = false, verificationCompleted = false;

if (localStorage.getItem('quickfake_verified') === 'true') {
    verificationCompleted = true;
    document.getElementById('gatePage').classList.add('hidden');
    document.getElementById('splashScreen').style.display = 'flex';
    initSplashScreen();
    initAll();
} else {
    document.getElementById('gatePage').style.display = 'flex';
    document.getElementById('splashScreen').style.display = 'none';
    document.getElementById('mainContent').classList.add('hidden');
}

function followSaluran() { window.open('https://whatsapp.com/channel/0029VaLiUSS5q08hPj5mcH0m', '_blank'); isFollowed = true; cekProgress(); }
function shareWA() { const waText = `*WEBSITE QuickFake By Jhon*\n> ${window.location.href}\n\n*SUMBER UTAMA*\n> https://whatsapp.com/channel/0029VaLiUSS5q08hPj5mcH0m`; window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`, '_blank'); isShared = true; cekProgress(); }

function cekProgress() {
    const pBar = document.getElementById('pBar'), statusText = document.getElementById('statusText');
    let progress = (isFollowed ? 50 : 0) + (isShared ? 50 : 0);
    pBar.style.width = progress + '%';
    statusText.style.display = 'block';
    if (progress === 100) {
        statusText.innerHTML = '✅ Verifikasi berhasil! Mengalihkan...';
        statusText.style.color = '#10b981';
        localStorage.setItem('quickfake_verified', 'true');
        setTimeout(() => {
            document.getElementById('gatePage').classList.add('hidden');
            document.getElementById('splashScreen').style.display = 'flex';
            document.getElementById('mainContent').classList.remove('hidden');
            initSplashScreen();
            initAll();
        }, 1500);
    } else { statusText.innerHTML = `Progress: ${progress}% - Selesaikan kedua tugas!`; statusText.style.color = '#f59e0b'; }
}

function initAll() {
    renderFormatGridV1(); renderParamFormV1();
    renderFormatGridV2(); renderParamFormV2();
    initNavigation(); initInfoPage();
    document.getElementById('generateBtnV1').addEventListener('click', () => generateMockup('v1'));
    document.getElementById('generateBtnV2').addEventListener('click', () => generateMockup('v2'));
    document.getElementById('sswebGenerateBtn').addEventListener('click', generateSSWeb);
}

function switchMockupTab(version) {
    currentVersion = version;
    document.getElementById('tabV1Btn').classList.toggle('active', version === 'v1');
    document.getElementById('tabV2Btn').classList.toggle('active', version === 'v2');
    document.getElementById('mockupV1').classList.toggle('active-tab', version === 'v1');
    document.getElementById('mockupV2').classList.toggle('active-tab', version === 'v2');
}

// ========== SPLASH SCREEN ==========
function initSplashScreen() {
    const splashScreen = document.getElementById('splashScreen'), mainContent = document.getElementById('mainContent');
    const progressFill = document.getElementById('progressFill'), loadingPercentage = document.getElementById('loadingPercentage'), loadingStatus = document.getElementById('loadingStatus');
    const messages = [{ text: '🎨 Loading features...', progress: 20 }, { text: '⚡ Connecting to API...', progress: 40 }, { text: '✨ Preparing v1 & v2...', progress: 60 }, { text: '📸 Adding SSWeb...', progress: 80 }, { text: '🎉 Welcome to QuickFake!', progress: 100 }];
    let currentProgress = 0, msgIndex = 0;
    createParticles();
    function updateProgress() {
        const target = messages[msgIndex]?.progress || 100;
        const interval = setInterval(() => {
            if (currentProgress < target) { currentProgress++; progressFill.style.width = currentProgress + '%'; loadingPercentage.textContent = currentProgress; }
            else {
                clearInterval(interval);
                if (msgIndex < messages.length - 1) { msgIndex++; const icons = ['', 'network-wired', 'palette', 'camera', 'check-circle']; loadingStatus.innerHTML = `<i class="fas fa-${icons[msgIndex]}"></i> ${messages[msgIndex].text}`; updateProgress(); }
                else { setTimeout(() => { splashScreen.classList.add('fade-out'); mainContent.classList.remove('hidden'); setTimeout(() => { mainContent.classList.add('visible'); splashScreen.style.display = 'none'; }, 800); }, 500); }
            }
        }, 30);
    }
    updateProgress();
}

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) { const p = document.createElement('div'); p.className = 'particle'; p.style.position = 'absolute'; p.style.left = Math.random() * 100 + '%'; p.style.animationDelay = Math.random() * 3 + 's'; p.style.animationDuration = 2 + Math.random() * 2 + 's'; p.style.background = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`; container.appendChild(p); }
}

// ========== GENERATE LOADING ==========
function showGenerateLoading(version) {
    const prefix = version === 'v1' ? 'V1' : version === 'v2' ? 'V2' : '';
    const btn = document.getElementById(`generateBtn${prefix}`), loading = document.getElementById(`generateLoading${prefix}`), fill = document.getElementById(`generateProgressFill${prefix}`), percent = document.getElementById(`generateProgressPercent${prefix}`), msg = document.getElementById(`generateLoadingMessage${prefix}`);
    if (btn) btn.classList.add('hidden');
    if (loading) loading.classList.remove('hidden');
    let progress = 0, idx = 0;
    const interval = setInterval(() => {
        if (progress < 95) { progress += Math.random() * 12; if (progress > 95) progress = 95; if (fill) fill.style.width = progress + '%'; if (percent) percent.textContent = Math.floor(progress); }
    }, 180);
    return { interval, fill, percent };
}

function hideGenerateLoading(loading, fill, percent, success = true, version) {
    if (loading && loading.interval) clearInterval(loading.interval);
    if (loading && loading.clearInterval) clearInterval(loading.clearInterval);
    const prefix = version === 'v1' ? 'V1' : version === 'v2' ? 'V2' : '';
    const btn = document.getElementById(`generateBtn${prefix}`), container = document.getElementById(`generateLoading${prefix}`);
    if (success && fill && percent) { fill.style.width = '100%'; percent.textContent = '100'; setTimeout(() => { if (container) container.classList.add('hidden'); if (btn) btn.classList.remove('hidden'); }, 500); }
    else { if (container) container.classList.add('hidden'); if (btn) btn.classList.remove('hidden'); }
}

// ========== FUNGSI KHUSUS UNTUK RANDOM IMAGES ==========
async function fetchRandomImage(format) {
    console.log('Fetching random image for:', format.id);
    
    // Untuk Waifu.pics API
    if (format.useWaifuPics) {
        try {
            const response = await fetch(`https://api.waifu.pics/${format.type || 'sfw'}/${format.category || 'waifu'}`, {
                headers: { 'Accept': 'application/json' }
            });
            if (!response.ok) throw new Error(`Waifu.pics error: ${response.status}`);
            const data = await response.json();
            if (data.url) return data.url;
            throw new Error('No URL in response');
        } catch (err) {
            console.error('Waifu.pics error:', err);
            throw err;
        }
    }
    
    // Untuk Nekos.best API
    if (format.useNekosBest) {
        try {
            const response = await fetch('https://nekos.best/api/v2/neko', {
                headers: { 'Accept': 'application/json' }
            });
            if (!response.ok) throw new Error(`Nekos.best error: ${response.status}`);
            const data = await response.json();
            if (data.results && data.results[0] && data.results[0].url) return data.results[0].url;
            throw new Error('No URL in response');
        } catch (err) {
            console.error('Nekos.best error:', err);
            throw err;
        }
    }
    
    // Coba endpoint utama
    const baseUrl = format.baseUrl;
    let apiUrl = `${baseUrl}${format.endpoint}`;
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);
        
        const response = await fetch(apiUrl, {
            signal: controller.signal,
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        let imageUrl = null;
        
        // Parse berbagai format response
        if (data.url) imageUrl = data.url;
        else if (data.data?.url) imageUrl = data.data.url;
        else if (data.result?.url) imageUrl = data.result.url;
        else if (data.image) imageUrl = data.image;
        else if (data.data?.image) imageUrl = data.data.image;
        else if (Array.isArray(data) && data[0]?.url) imageUrl = data[0].url;
        else if (typeof data === 'string' && data.startsWith('http')) imageUrl = data;
        
        if (imageUrl) return imageUrl;
        
        // Coba alternatif endpoint jika ada
        if (format.altEndpoint) {
            console.log('Trying alternative endpoint:', format.altEndpoint);
            const altResponse = await fetch(`${baseUrl}${format.altEndpoint}`, {
                headers: { 'Accept': 'application/json', 'User-Agent': 'Mozilla/5.0' }
            });
            if (altResponse.ok) {
                const altData = await altResponse.json();
                if (altData.url) return altData.url;
                if (altData.data?.url) return altData.data.url;
                if (altData.result?.url) return altData.result.url;
            }
        }
        
        throw new Error('Tidak dapat menemukan URL gambar');
    } catch (err) {
        console.error('Random image fetch error:', err);
        throw err;
    }
}

// ========== MOCKUP FUNCTIONS ==========
function renderFormatGridV1() { renderFormatGrid('V1', formatsV1, activeFormatV1, (f) => activeFormatV1 = f); }
function renderParamFormV1() { renderParamForm('V1', activeFormatV1); }
function renderFormatGridV2() { renderFormatGrid('V2', formatsV2, activeFormatV2, (f) => activeFormatV2 = f); }
function renderParamFormV2() { renderParamForm('V2', activeFormatV2); }

function renderFormatGrid(prefix, formats, activeFormat, setActive) {
    const grid = document.getElementById(`formatGrid${prefix}`);
    if (!grid) return;
    grid.innerHTML = formats.map(f => `<div class="format-item ${activeFormat.id === f.id ? 'active' : ''}" data-id="${f.id}"><i class="${f.icon}"></i> ${f.name}</div>`).join('');
    document.querySelectorAll(`#formatGrid${prefix} .format-item`).forEach(el => {
        el.addEventListener('click', () => { const newFormat = formats.find(f => f.id === el.dataset.id); setActive(newFormat); renderFormatGrid(prefix, formats, newFormat, setActive); renderParamForm(prefix, newFormat); const resultArea = document.getElementById(`resultArea${prefix}`); if (resultArea) resultArea.innerHTML = `<div class="result-placeholder"><i class="fas fa-image"></i><p>Hasil mockup akan tampil di sini</p></div>`; });
    });
}

function renderParamForm(prefix, activeFormat) {
    const container = document.getElementById(`paramForm${prefix}`);
    if (!container) return;
    if (!activeFormat.params?.length) { container.innerHTML = '<div class="input-group"><p style="color:#9ca3af;">Tidak ada parameter (random image)</p></div>'; return; }
    container.innerHTML = activeFormat.params.map(p => `<div class="input-group"><label>${p.label}</label>${p.type === 'textarea' ? `<textarea name="${p.name}" rows="3" placeholder="${p.placeholder || ''}"></textarea>` : `<input type="${p.type}" name="${p.name}" placeholder="${p.placeholder || ''}" />`}</div>`).join('');
}

async function generateMockup(version) {
    const prefix = version === 'v1' ? 'V1' : 'V2';
    const activeFormat = version === 'v1' ? activeFormatV1 : activeFormatV2;
    const resultDiv = document.getElementById(`resultArea${prefix}`);
    const loadingInfo = showGenerateLoading(version);
    
    try {
        // Handle random image (tanpa parameter)
        if (activeFormat.isRandom || (activeFormat.params && activeFormat.params.length === 0)) {
            const imageUrl = await fetchRandomImage(activeFormat);
            resultDiv.innerHTML = `<div class="result-content"><img src="${imageUrl}" alt="Mockup" style="max-width:100%; border-radius:1rem; box-shadow:0 8px 20px rgba(0,0,0,0.3);" /><div style="margin-top:20px; text-align:center;"><button class="download-btn" id="downloadImageBtn${prefix}"><i class="fas fa-download"></i> Download Gambar</button></div></div>`;
            const downloadBtn = document.getElementById(`downloadImageBtn${prefix}`);
            if (downloadBtn) { 
                const newBtn = downloadBtn.cloneNode(true); 
                downloadBtn.parentNode.replaceChild(newBtn, downloadBtn); 
                newBtn.onclick = async (e) => { 
                    e.preventDefault(); 
                    if (typeof window.downloadImage === 'function') await window.downloadImage(imageUrl, `${activeFormat.id}_${Date.now()}.png`); 
                    else { const a = document.createElement('a'); a.href = imageUrl; a.download = `${activeFormat.id}_${Date.now()}.png`; a.click(); } 
                }; 
            }
            hideGenerateLoading(loadingInfo, null, null, true, version);
            if (window.showToast) window.showToast('Gambar berhasil dihasilkan!', 'success');
            return;
        }
        
        // Handle regular mockup dengan parameter
        const inputs = document.querySelectorAll(`#paramForm${prefix} input, #paramForm${prefix} textarea`);
        let params = {};
        inputs.forEach(inp => { if (inp.value.trim()) params[inp.name] = encodeURIComponent(inp.value.trim()); });
        
        const baseUrl = activeFormat.baseUrl || 'https://api.zenzxz.my.id';
        let apiUrl = `${baseUrl}${activeFormat.endpoint}?`;
        apiUrl += Object.entries(params).map(([k, v]) => `${k}=${v}`).join('&');
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);
        
        const response = await fetch(apiUrl, { 
            signal: controller.signal,
            method: 'GET', 
            headers: { 
                'Accept': 'image/*, application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const errorData = await response.json();
                throw new Error(errorData.message || errorData.error || `HTTP ${response.status}`);
            }
            throw new Error(`HTTP ${response.status}`);
        }
        
        const contentType = response.headers.get('content-type');
        let imageUrl;
        let blob;
        
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            if (data.result?.url) imageUrl = data.result.url;
            else if (data.url) imageUrl = data.url;
            else if (data.image) imageUrl = data.image;
            else if (data.data?.url) imageUrl = data.data.url;
            else throw new Error('Tidak dapat menemukan URL gambar dalam response');
            
            const imgResponse = await fetch(imageUrl, {
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
            });
            if (!imgResponse.ok) throw new Error(`Gagal mengambil gambar: ${imgResponse.status}`);
            blob = await imgResponse.blob();
            imageUrl = URL.createObjectURL(blob);
        } else {
            blob = await response.blob();
            if (!blob.type.startsWith('image/')) throw new Error('Bukan format gambar');
            imageUrl = URL.createObjectURL(blob);
        }
        
        resultDiv.innerHTML = `<div class="result-content"><img src="${imageUrl}" alt="Mockup" style="max-width:100%; border-radius:1rem; box-shadow:0 8px 20px rgba(0,0,0,0.3);" /><div style="margin-top:20px; text-align:center;"><button class="download-btn" id="downloadImageBtn${prefix}"><i class="fas fa-download"></i> Download Gambar</button></div></div>`;
        
        const downloadBtn = document.getElementById(`downloadImageBtn${prefix}`);
        if (downloadBtn) { 
            const newBtn = downloadBtn.cloneNode(true); 
            downloadBtn.parentNode.replaceChild(newBtn, downloadBtn); 
            newBtn.onclick = async (e) => { 
                e.preventDefault(); 
                if (typeof window.downloadImage === 'function') await window.downloadImage(imageUrl, `${activeFormat.id}_mockup_${Date.now()}.png`); 
                else { const a = document.createElement('a'); a.href = imageUrl; a.download = `${activeFormat.id}_mockup_${Date.now()}.png`; a.click(); } 
            }; 
        }
        
        hideGenerateLoading(loadingInfo, null, null, true, version);
        if (window.showToast) window.showToast('Mockup berhasil dibuat!', 'success');
        
    } catch (err) { 
        console.error('Generate error:', err);
        resultDiv.innerHTML = `<div class="result-placeholder"><i class="fas fa-times-circle"></i><p>❌ Gagal: ${err.message}</p><p style="font-size:12px; margin-top:8px;">Coba refresh atau pilih format lain</p></div>`; 
        hideGenerateLoading(loadingInfo, null, null, false, version); 
        if (window.showToast) window.showToast(err.message, 'error'); 
    }
}

// ========== SSWEB FUNCTIONS ==========
async function generateSSWeb() {
    const url = document.getElementById('sswebUrl')?.value;
    const device = document.getElementById('sswebDevice')?.value;
    const fullPage = document.getElementById('sswebFullPage')?.value;
    const scale = document.getElementById('sswebScale')?.value;
    
    if (!url) { if (window.showToast) window.showToast('Masukkan URL website', 'error'); return; }
    if (!device) { if (window.showToast) window.showToast('Pilih perangkat', 'error'); return; }
    if (!fullPage) { if (window.showToast) window.showToast('Pilih opsi Halaman Penuh', 'error'); return; }
    if (!scale) { if (window.showToast) window.showToast('Pilih skala', 'error'); return; }
    
    const resultDiv = document.getElementById('sswebResultArea');
    const generateBtn = document.getElementById('sswebGenerateBtn');
    const loadingDiv = document.getElementById('sswebLoading');
    const loadingFill = document.getElementById('sswebProgressFill');
    const loadingPercent = document.getElementById('sswebProgressPercent');
    const loadingMessage = document.getElementById('sswebLoadingMessage');
    
    generateBtn.classList.add('hidden');
    loadingDiv.classList.remove('hidden');
    loadingFill.style.width = '0%';
    loadingPercent.textContent = '0';
    loadingMessage.innerHTML = '<i class="fas fa-globe"></i> Menghubungkan ke server...';
    
    let progress = 0;
    let msgIndex = 0;
    const loadingMessages = [
        { icon: 'fa-globe', text: 'Menghubungkan ke server...' },
        { icon: 'fa-camera', text: 'Mengambil screenshot...' },
        { icon: 'fa-image', text: 'Memproses gambar...' },
        { icon: 'fa-check-circle', text: 'Menyelesaikan...' }
    ];
    
    const progressInterval = setInterval(() => {
        if (progress < 90) { 
            progress += Math.random() * 15; 
            if (progress > 90) progress = 90; 
            loadingFill.style.width = progress + '%'; 
            loadingPercent.textContent = Math.floor(progress); 
        }
        if (progress >= 20 && msgIndex === 0) { msgIndex++; loadingMessage.innerHTML = `<i class="fas ${loadingMessages[msgIndex].icon}"></i> ${loadingMessages[msgIndex].text}`; }
        else if (progress >= 50 && msgIndex === 1) { msgIndex++; loadingMessage.innerHTML = `<i class="fas ${loadingMessages[msgIndex].icon}"></i> ${loadingMessages[msgIndex].text}`; }
        else if (progress >= 75 && msgIndex === 2) { msgIndex++; loadingMessage.innerHTML = `<i class="fas ${loadingMessages[msgIndex].icon}"></i> ${loadingMessages[msgIndex].text}`; }
    }, 200);
    
    const fullPageValue = fullPage === 'penuh' ? 'true' : 'false';
    const apiEndpoints = [
        `https://api.zenzxz.my.id/tools/ssweb?url=${encodeURIComponent(url)}&device=${device}&full_page=${fullPageValue}&scale=${scale}`,
        `https://api.siputzx.my.id/tools/ssweb?url=${encodeURIComponent(url)}&device=${device}&full_page=${fullPageValue}&scale=${scale}`
    ];
    
    let imageUrl = null;
    let lastError = null;
    
    for (let i = 0; i < apiEndpoints.length; i++) {
        try {
            loadingMessage.innerHTML = `<i class="fas fa-sync-alt fa-spin"></i> Mencoba server ${i + 1}...`;
            
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 25000);
            
            const response = await fetch(apiEndpoints[i], { 
                signal: controller.signal,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });
            clearTimeout(timeoutId);
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const contentType = response.headers.get('content-type');
            let data;
            
            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
                if (data.status && data.result?.url) imageUrl = data.result.url;
                else if (data.url) imageUrl = data.url;
                else if (data.screenshot) imageUrl = data.screenshot;
                else if (data.image) imageUrl = data.image;
                else throw new Error('Response JSON tidak memiliki URL gambar');
            } else {
                const blob = await response.blob();
                if (blob.type.startsWith('image/')) imageUrl = URL.createObjectURL(blob);
                else throw new Error('Bukan format gambar');
            }
            
            if (imageUrl) break;
        } catch (err) {
            console.error(`Endpoint ${i + 1} gagal:`, err.message);
            lastError = err;
            continue;
        }
    }
    
    if (!imageUrl) {
        clearInterval(progressInterval);
        resultDiv.innerHTML = `<div class="result-placeholder"><i class="fas fa-times-circle"></i><p>❌ Gagal mengambil screenshot</p><p style="font-size:12px; margin-top:8px;">${lastError?.message || 'Semua server gagal, coba lagi nanti'}</p><p style="font-size:11px; margin-top:4px;">Tips: Pastikan URL valid dan website dapat diakses</p></div>`;
        loadingDiv.classList.add('hidden');
        generateBtn.classList.remove('hidden');
        if (window.showToast) window.showToast(lastError?.message || 'Gagal mengambil screenshot', 'error');
        return;
    }
    
    clearInterval(progressInterval);
    loadingFill.style.width = '100%';
    loadingPercent.textContent = '100';
    loadingMessage.innerHTML = '<i class="fas fa-check-circle"></i> Selesai!';
    
    setTimeout(() => {
        resultDiv.innerHTML = `<div class="result-content"><img src="${imageUrl}" alt="Screenshot" style="max-width:100%; border-radius:1rem; box-shadow:0 8px 20px rgba(0,0,0,0.3);" /><div style="margin-top:20px; text-align:center;"><button class="download-btn" id="sswebDownloadBtn"><i class="fas fa-download"></i> Download Screenshot</button></div><p style="font-size:0.7rem; color:#6c757d; margin-top:12px;">📸 ${url.substring(0, 50)}${url.length > 50 ? '...' : ''}</p></div>`;
        
        const downloadBtn = document.getElementById('sswebDownloadBtn');
        if (downloadBtn) { 
            const newBtn = downloadBtn.cloneNode(true); 
            downloadBtn.parentNode.replaceChild(newBtn, downloadBtn); 
            newBtn.onclick = async (e) => { 
                e.preventDefault(); 
                if (typeof window.downloadImage === 'function') await window.downloadImage(imageUrl, `screenshot_${Date.now()}.png`); 
                else { const a = document.createElement('a'); a.href = imageUrl; a.download = `screenshot_${Date.now()}.png`; a.click(); } 
            }; 
        }
        
        loadingDiv.classList.add('hidden'); 
        generateBtn.classList.remove('hidden');
    }, 500);
    
    if (window.showToast) window.showToast('Screenshot berhasil diambil!', 'success');
}

// ========== INFO & BERITA FUNCTIONS ==========
let currentBeritaSource = 'cnbc', currentGempaTab = 'auto', currentChannel = 'sctv';
const beritaSources = { cnbc: 'https://api.siputzx.my.id/api/berita/cnbcindonesia', liputan6: 'https://api.siputzx.my.id/api/berita/liputan6', tribun: 'https://api.siputzx.my.id/api/berita/tribunnews', sindonews: 'https://api.siputzx.my.id/api/berita/sindonews', kompas: 'https://api.siputzx.my.id/api/berita/kompas', merdeka: 'https://api.siputzx.my.id/api/berita/merdeka', cnn: 'https://api.siputzx.my.id/api/berita/cnn', antara: 'https://api.siputzx.my.id/api/berita/antara' };

function initInfoTabs() {
    const tabBtns = document.querySelectorAll('.info-tab-btn');
    const sections = { berita: document.getElementById('infoBerita'), gempa: document.getElementById('infoGempa'), cuaca: document.getElementById('infoCuaca'), jadwaltv: document.getElementById('infoJadwalTV') };
    tabBtns.forEach(btn => { btn.addEventListener('click', () => { tabBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); Object.values(sections).forEach(s => s.classList.remove('active-info')); if (sections[btn.dataset.info]) sections[btn.dataset.info].classList.add('active-info'); if (btn.dataset.info === 'gempa') loadGempaData(); if (btn.dataset.info === 'jadwaltv') loadJadwalTV(currentChannel); }); });
}

function initBeritaSources() {
    document.querySelectorAll('.source-btn').forEach(btn => { btn.addEventListener('click', () => { document.querySelectorAll('.source-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); currentBeritaSource = btn.dataset.source; loadBerita(currentBeritaSource); }); });
}

async function loadBerita(source) {
    const container = document.getElementById('beritaContent');
    container.innerHTML = '<div class="loading-info"><i class="fas fa-spinner fa-pulse"></i> Memuat berita...</div>';
    try {
        const response = await fetch(beritaSources[source]); const data = await response.json();
        if (!data.status || !data.data) throw new Error('Gagal memuat berita');
        const articles = data.data.slice(0, 20);
        container.innerHTML = articles.map(article => `<div class="berita-item"><div class="berita-title"><a href="${article.link || '#'}" target="_blank">${article.title || 'Judul tidak tersedia'}</a></div><div class="berita-meta"><span><i class="far fa-clock"></i> ${article.time || article.timestamp || 'Baru saja'}</span><span><i class="fas fa-tag"></i> ${article.category || article.channel || 'Umum'}</span></div></div>`).join('');
        if (articles.length === 0) container.innerHTML = '<div class="loading-info">Tidak ada berita</div>';
    } catch (error) { console.error('Berita error:', error); container.innerHTML = '<div class="loading-info">Gagal memuat berita</div>'; }
}

function initGempaTabs() {
    document.querySelectorAll('.gempa-subtab').forEach(btn => { btn.addEventListener('click', () => { document.querySelectorAll('.gempa-subtab').forEach(b => b.classList.remove('active')); btn.classList.add('active'); currentGempaTab = btn.dataset.gempa; loadGempaData(); }); });
}

async function loadGempaData() {
    const container = document.getElementById('gempaContent');
    container.innerHTML = '<div class="loading-info"><i class="fas fa-spinner fa-pulse"></i> Memuat data gempa...</div>';
    try {
        const response = await fetch('https://api.siputzx.my.id/api/info/bmkg'); const data = await response.json();
        if (!data.status) throw new Error('Gagal memuat gempa');
        let gempaList = currentGempaTab === 'auto' ? (data.data.auto?.Infogempa?.gempa ? [data.data.auto.Infogempa.gempa] : []) : (data.data.dirasakan?.Infogempa?.gempa || []);
        if (gempaList.length === 0) { container.innerHTML = '<div class="loading-info">Tidak ada data gempa</div>'; return; }
        container.innerHTML = gempaList.map(g => `<div class="gempa-item"><div class="gempa-lokasi"><i class="fas fa-map-marker-alt"></i> ${g.Wilayah || 'Lokasi tidak diketahui'}</div><div class="gempa-magnitude">Magnitude: ${g.Magnitude || '?'}</div><div class="gempa-info"><i class="far fa-clock"></i> ${g.Jam || g.Tanggal || ''} | Kedalaman: ${g.Kedalaman || '?'}</div>${g.Dirasakan ? `<div class="gempa-info"><i class="fas fa-waveform"></i> Dirasakan: ${g.Dirasakan}</div>` : ''}</div>`).join('');
    } catch (error) { console.error('Gempa error:', error); container.innerHTML = '<div class="loading-info">Gagal memuat data gempa</div>'; }
}

async function loadCuaca(city) {
    const container = document.getElementById('cuacaContent');
    if (!city.trim()) { container.innerHTML = '<div class="loading-info">Masukkan nama kota</div>'; return; }
    container.innerHTML = '<div class="loading-info"><i class="fas fa-spinner fa-pulse"></i> Memuat data cuaca...</div>';
    try {
        const response = await fetch(`https://api.siputzx.my.id/api/info/cuaca?q=${encodeURIComponent(city)}`); const data = await response.json();
        if (!data.status || !data.data) throw new Error('Gagal memuat cuaca');
        const weather = data.data.weather?.[0]; const location = data.data.wilayah;
        if (!weather) { container.innerHTML = '<div class="loading-info">Data cuaca tidak tersedia</div>'; return; }
        const currentWeather = weather.cuaca?.[0]?.[0] || {};
        container.innerHTML = `<div class="cuaca-item"><h3><i class="fas fa-location-dot"></i> ${location?.desa || city}, ${location?.kecamatan || ''}</h3><div class="cuaca-temp">🌡️ ${currentWeather.t || '?'}°C</div><div><i class="fas fa-cloud"></i> ${currentWeather.weather_desc || 'Tidak diketahui'}</div><div><i class="fas fa-tint"></i> Kelembaban: ${currentWeather.hu || '?'}%</div><div><i class="fas fa-wind"></i> Angin: ${currentWeather.wd || '?'} (${currentWeather.ws || '?'} m/s)</div></div>`;
    } catch (error) { console.error('Cuaca error:', error); container.innerHTML = '<div class="loading-info">Gagal memuat data cuaca</div>'; }
}

function initTVChannels() {
    document.querySelectorAll('.channel-btn').forEach(btn => { btn.addEventListener('click', () => { document.querySelectorAll('.channel-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); currentChannel = btn.dataset.channel; loadJadwalTV(currentChannel); }); });
}

async function loadJadwalTV(channel) {
    const container = document.getElementById('jadwaltvContent');
    container.innerHTML = '<div class="loading-info"><i class="fas fa-spinner fa-pulse"></i> Memuat jadwal TV...</div>';
    try {
        const response = await fetch(`https://api.siputzx.my.id/api/info/jadwaltv?channel=${channel}`); const data = await response.json();
        if (!data.status || !data.data) throw new Error('Gagal memuat jadwal TV');
        const schedules = data.data;
        if (schedules.length === 0) { container.innerHTML = '<div class="loading-info">Tidak ada jadwal acara</div>'; return; }
        container.innerHTML = schedules.map(s => `<div class="tv-item"><div class="tv-jam">${s.jam || '?'}</div><div class="tv-acara">${s.acara || 'Acara tidak tersedia'}</div></div>`).join('');
    } catch (error) { console.error('Jadwal TV error:', error); container.innerHTML = '<div class="loading-info">Gagal memuat jadwal TV</div>'; }
}

function initInfoPage() {
    initInfoTabs(); initBeritaSources(); initGempaTabs(); initTVChannels();
    loadBerita('cnbc');
    const searchBtn = document.getElementById('searchCuacaBtn'), cuacaInput = document.getElementById('cuacaCity');
    if (searchBtn && cuacaInput) { searchBtn.addEventListener('click', () => loadCuaca(cuacaInput.value)); cuacaInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') loadCuaca(cuacaInput.value); }); }
}

// ========== NAVIGATION ==========
function initNavigation() {
    const links = document.querySelectorAll('.nav-link');
    const pages = { home: document.getElementById('homePage'), ssweb: document.getElementById('sswebPage'), info: document.getElementById('infoPage'), howto: document.getElementById('howtoPage'), guide: document.getElementById('guidePage'), docs: document.getElementById('docsPage') };
    function switchPage(pageId) {
        Object.values(pages).forEach(p => p?.classList.remove('active-page'));
        if (pages[pageId]) pages[pageId].classList.add('active-page');
        links.forEach(l => l.classList.remove('active'));
        document.querySelector(`.nav-link[data-page="${pageId}"]`)?.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (pageId === 'info') { loadBerita(currentBeritaSource); }
    }
    links.forEach(l => { l.addEventListener('click', (e) => { e.preventDefault(); switchPage(l.dataset.page); document.getElementById('navMenu')?.classList.remove('active'); }); });
    document.getElementById('navToggle')?.addEventListener('click', () => { document.getElementById('navMenu')?.classList.toggle('active'); });
    switchPage('home');
}