// ─── State ────────────────────────────────────────────────
const state = {
  view: 'home',
  company: null,
  tab: 'xamkorlar',
  query: '',
  homeTab: 'buyurtmachilar',
  history: [],
  heTab: 'yolxarita',
  infoTab: 'yol_xarita',
};

const MAP_W = 3085;
const MAP_H = 824;

const buyurtmachilar = [
  { id: 'b1', stir: '200144930', name: '"O‘zbekiston texnologik metallar kombinati" AJ' },
  { id: 'b2', stir: '200144930', name: 'Geoburmash MCHJ' },
  { id: 'b3', stir: '200144930', name: '"Grant metal stroy" MCHJ' },
  { id: 'b4', stir: '200144930', name: '"Metal mahsulot zavodi" MCHJ' },
  { id: 'b5', stir: '200144930', name: '"AUTO PAD SYSTEMS" MCHJ' },
];

// ─── HE Ministry content ──────────────────────────────────
const heContent = {
  yolxarita: `
    <div class="he-section">
      <p class="he-section-title">1. GFU innovatsion loyihalari</p>
      <ul class="he-list">
        <li><strong>AI-GEO Platform</strong> — sun'iy intellekt asosida geologik ma'lumotlarni tahlil qilish tizimi</li>
        <li><strong>VR Geologiya Laboratoriyasi</strong> — virtual haqiqat asosida geologik tadqiqot muhiti</li>
        <li><strong>Allmuseum</strong> — geologik namunalarning raqamli muzeyi va katalogi</li>
        <li><strong>UNIMA</strong> — universitetlararo innovatsion monitoring tizimi</li>
        <li><strong>Rock and Stones</strong> — mobil ilova, qazilma boyliklarni aniqlash uchun</li>
      </ul>
    </div>
    <div class="he-section">
      <p class="he-section-title">2. Tadqiqot yo'nalishlari</p>
      <ul class="he-list">
        <li>Noyob va nodir elementlar qazib olish texnologiyalari</li>
        <li>Yer usti resurslari monitoringi va GIS tizimlar</li>
        <li>Ekologik toza qazib olish usullari</li>
        <li>Raqamli kartografiya va 3D modellashtirish</li>
      </ul>
    </div>
    <div class="he-section">
      <p class="he-section-title">3. Talabalar tashrifi</p>
      <p class="he-section-body">Ko'rgazmada 18 nafar talaba ishtirok etadi. Ular loyihalarni taqdim etib, sanoat vakillari bilan bevosita muloqot qiladi.</p>
    </div>
    <div class="he-section">
      <p class="he-section-title">4. Memorandumlar va hamkorlik</p>
      <p class="he-section-body">Ko'rgazma doirasida sanoat korxonalari va GFU o'rtasida hamkorlik memorandumlari imzolanadi. Kadrlar tayyorlash bo'yicha qo'shma dasturlar ko'rib chiqiladi.</p>
    </div>`,

  startap: `
    <div class="he-doc-card">
      <div class="he-doc-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      </div>
      <div class="he-doc-info">
        <p class="he-doc-title">Sanoat yarmarkasi loyihalar ro'yxati</p>
        <p class="he-doc-meta">PDF hujjat</p>
      </div>
      <a class="he-open-btn" href="file:///Users/azizbekvahidov/Downloads/Sanoat%20yarmarkasi%20loyihalar%20royxat.pdf" target="_blank">Ochish</a>
    </div>`,

  sanoat: `
    <div class="he-doc-card">
      <div class="he-doc-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      </div>
      <div class="he-doc-info">
        <p class="he-doc-title">Milliy sanoat zanjiri — ishtirokchilar ro'yxati</p>
        <p class="he-doc-meta">Excel hujjat</p>
      </div>
      <a class="he-open-btn" href="file:///Users/azizbekvahidov/Downloads/Milliy%20sanoat%20zanjiri%20ishtirokchilar%20va%20maxsulotlar%202.xls" target="_blank">Ochish</a>
    </div>`,
};

const infoContent = {
  yol_xarita: `
    <div class="info-card info-card-pdf">
      <div class="info-pdf-wrap">
        <iframe
          class="info-pdf-frame"
          src="assets/%D0%98%D0%BB%D0%BE%D0%B2%D0%B0-1%20(%D0%93%D0%A4%D0%A3,%20%D0%9A%D1%9E%D1%80%D0%B3%D0%B0%D0%B7%D0%BC%D0%B0%20%D0%99%D1%9E%D0%BB%20%D1%85%D0%B0%D1%80%D0%B8%D1%82%D0%B0).pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          title="Ilova-1"
        ></iframe>
      </div>
    </div>`,
  ndktu: `
    <div class="info-card info-card-pdf">
      <div class="info-pdf-wrap">
        <iframe
          class="info-pdf-frame"
          src="assets/%D0%98%D0%9B%D0%9E%D0%92%D0%90-2%20(%D0%9D%D0%94%D0%9A%D0%A2%D0%A3,%20%D0%BA%D1%9E%D1%80%D0%B3%D0%B0%D0%B7%D0%BC%D0%B0).pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          title="Ilova-2"
        ></iframe>
      </div>
    </div>`,
  misis: `
    <div class="info-card info-card-pdf">
      <div class="info-pdf-wrap">
        <iframe
          class="info-pdf-frame"
          src="assets/%D0%98%D0%9B%D0%9E%D0%92%D0%90-3%20(%D0%9C%D0%98%D0%A1%D0%98%D0%A1,%20%D0%BA%D1%9E%D1%80%D0%B3%D0%B0%D0%B7%D0%BC%D0%B0).pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          title="Ilova-3"
        ></iframe>
      </div>
    </div>`,
  sanoat_yarmarkasi: `
    <div class="info-card info-card-pdf">
      <div class="info-pdf-wrap">
        <iframe
          class="info-pdf-frame"
          src="assets/Sanoat%20yarmarkasi%20loyihalar%20royxat.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          title="Sanoat yarmarkasi loyihalar royxati"
        ></iframe>
      </div>
    </div>`,
};

// ─── Booth definitions (exact Figma pixel coordinates) ────
// x,y = top-left corner on 3085×824 canvas
// id  = companies[] entry id (clickable company booth)
// zone = 'he' for Higher-Ed ministry click
// label = displayed text (use \n for line breaks)
const BOOTH_DEFS = [
  // ── Top zone labels ─────────────────────────────────────────────────
  { x:  237, y:  26, w: 202, h:  74, label: 'B2B zona', color: 'booth-purple' },
  { x:  440, y:  26, w: 202, h:  74, label: 'Kompyuter zona', color: 'booth-purple' },
  { x:  683, y:  26, w: 120, h: 120, label: 'Konsultatsiya\nmarkazi' },
  { x:  843, y:  72, w: 202, h:  74, label: '"O\'ZBEKKIMMASH"' },
  { x: 1086, y:  26, w: 184, h: 110, label: 'O\'zbekekspertiza', color: 'booth-orange' },
  { x: 1311, y:  26, w: 184, h: 110, label: 'Raqamli\ntransformatsiya\nmarkazi', color: 'booth-orange' },
  { x: 1536, y:  26, w: 184, h: 110, label: 'Loyihalar va\nxaridlar markazi', color: 'booth-orange' },
  { x: 1761, y:  63, w: 110, h:  74, label: 'O\'zstandart', color: 'booth-orange' },
  // Right-side zone labels
  { x: 1594, y: 189, w: 184, h: 110, label: 'O\'ZTMK' },
  { x: 1594, y: 521, w: 184, h: 110, label: 'NAVOIYURAN' },
  // Far-right area
  { x: 2905, y:  26, w: 147, h: 138, label: 'B2B zona' },
  { x: 2905, y: 195, w: 147, h: 147, label: 'Ilmiy ishlanmalar\nva Startaplar' },
  { x: 2909, y: 425, w: 143, h: 366, label: 'Coffee-break zona' },
  { x: 2795, y: 447, w:  81, h: 234, label: 'Banklar' },

  // ── Center group header booths ────────────────────────────────────
  { x:  636, y: 300, w: 166, h:  92, label: 'Navoiy', id: 93, zoneLabel: true },
  { x:  802, y: 300, w: 110, h:  92, label: 'Kelajak\nloyihalari' },
  { x:  616, y: 425, w: 221, h:  92, label: 'Olmaliq', id: 94, zoneLabel: true },
  { x:  837, y: 425, w: 110, h:  92, label: 'Kelajak\nloyihalari\n(MOF-4)' },
  { x: 2076, y: 300, w: 120, h:  92, label: '"TAI CHANG\nSPECIAL STEEL"', id: 85 },
  { x: 2196, y: 300, w: 120, h:  92, label: 'AZIA\nMETALL PROF', id: 88 },
  { x: 2316, y: 300, w: 109, h:  92, label: 'TMZ', id: 96, zoneLabel: true },
  { x: 2076, y: 425, w: 202, h:  92, label: 'O\'zmetkombinat', id: 95, zoneLabel: true },
  { x: 2278, y: 425, w: 147, h:  92, label: 'TOSHKENT\nTRUBA ZAVODI', id: 92 },

  // ── Mid-zone cluster ───────────────────────────────────────────────
  { x: 1347, y: 190, w: 136, h: 110, label: '"GRAND METALL\nSTROY"', id: 65 },
  { x: 1285, y: 190, w:  62, h:  55, label: 'Steklo-\nplastik', color: 'booth-purple' },
  { x: 1285, y: 245, w:  62, h:  55, label: 'UTF', color: 'booth-purple' },
  { x: 1254, y: 337, w: 104, h:  59, label: '"GORTEHPROM"', id: 35 },
  { x: 1358, y: 337, w: 138, h:  59, label: '"SREDAZSVETME\nTENERGO"', id: 69 },
  { x: 1496, y: 337, w:  95, h:  59, label: 'GEOBURMASH', id: 77 },
  { x: 1654, y: 337, w:  62, h:  59, label: 'Navoiy\nDKTU', color: 'booth-purple' },
  { x: 1716, y: 337, w:  62, h:  59, label: 'MISIS', color: 'booth-purple' },
  { x: 1254, y: 425, w: 241, h:  59, label: '"CARBON-\nPOLYMER"', id: 11 },
  { x: 1495, y: 425, w:  95, h:  59, label: '"EKOLIFE"', id: 33 },
  { x: 1654, y: 425, w:  62, h:  59, label: 'GFU', color: 'booth-purple' },
  { x: 1716, y: 425, w:  62, h:  59, label: 'Markaz', color: 'booth-purple' },
  { x: 1254, y: 509, w: 207, h:  74, label: '"SPZ-BEARING"', id: 84 },
  { x: 1254, y: 583, w:  97, h:  59, label: 'KIMYO SERVIS\nNAVOIY', id: 31 },
  { x: 1351, y: 583, w: 109, h:  59, label: 'WORLD TRADING\nCOMPANY', id: 89 },

  // ── Navoiy oval companies (absolute canvas coords from Figma) ──────
  { x:  617, y: 202, w:  96, h:  40, label: '"UNIVERSAL\nFILTR"', id: 23 },
  { x:  707, y: 180, w:  96, h:  52, label: '"TIO PROM\nKOMPOZIT 2022"', id: 24 },
  { x:  792, y: 183, w:  96, h:  40, label: '"CHILON\nLUBRICANTS"', id: 25 },
  { x:  877, y: 208, w:  96, h:  30, label: '"LATEM-METAL"', id: 26 },
  { x:  531, y: 229, w:  96, h:  40, label: '"NAVPROMLIT\nMASH"', id: 22 },
  { x:  962, y: 232, w:  96, h:  40, label: '"EVRO PROM\nLIDER"', id: 27 },
  { x:  464, y: 268, w:  96, h:  40, label: '"NAVOIYELEKTR\nOREMONT"', id: 21 },
  { x:  418, y: 319, w:  96, h:  40, label: '"GIDRO STANKO\nSERVIS"', id: 20 },
  { x: 1029, y: 270, w:  96, h:  40, label: '"AVTOTRAKTO\nRRADIATOR"', id: 28 },
  { x: 1054, y: 321, w: 110, h:  40, label: '"METALL MAHSULOT\nZAVODI"', id: 29 },
  { x:  420, y: 448, w:  96, h:  52, label: '"ALMALYK QUYUV\nMEXANIKA\nZAVODI"', id: 1 },
  { x: 1072, y: 458, w:  96, h:  30, label: '"APITEKS"', id: 10 },
  { x:  453, y: 502, w: 112, h:  65, label: 'Andijon yuk vagonlarini\nqurish va ta\'mirlash\nzavodi', id: 7 },
  { x: 1025, y: 508, w:  96, h:  30, label: '"IGEA"', id: 9 },
  { x:  525, y: 532, w:  96, h:  65, label: '"DEUTSCHE\nINNOVATSION\nTEXNOLOGIYALAR\n-AGMK"', id: 3 },
  { x:  960, y: 540, w:  96, h:  40, label: '"RIALWAY\nSERVICE"', id: 8 },
  { x:  881, y: 572, w:  96, h:  40, label: '"ANGREN PIPE\nPLANT"', id: 2 },
  { x:  613, y: 570, w:  96, h:  40, label: 'KURAMA-\nVOSTOK', id: 4 },
  { x:  699, y: 580, w:  96, h:  52, label: '"NURAFSHON-\nMAXSUS-\nTEXNIKA"', id: 5 },
  { x:  793, y: 583, w:  96, h:  40, label: '"DRILLFLOT-\nASIA"', id: 6 },

  // ── O'zmetkombinat oval companies ─────────────────────────────────
  { x: 2091, y: 200, w:  96, h:  40, label: 'NAMANGANMASH MCHJ', id: 49 },
  { x: 2175, y: 181, w:  80, h:  40, label: '"NAMELTEX\nMOTORS"', id: 50 },
  { x: 2272, y: 180, w:  80, h:  40, label: '"MANOKIP\nZAVODI"', id: 51 },
  { x: 2349, y: 196, w:  96, h:  40, label: '"SOLAR ENERGY\nNAVOIY"', id: 52 },
  { x: 2000, y: 221, w:  96, h:  40, label: '"NAMANGAN\nREZINA PLAST"', id: 48 },
  { x: 2431, y: 222, w:  96, h:  40, label: '"STEELPRO\nENGINEERING"', id: 53 },
  { x: 1931, y: 261, w:  96, h:  40, label: '"FORIGHT\nGRANITE MINE"', id: 47 },
  { x: 1888, y: 312, w:  96, h:  40, label: '"ARTIKUL\nAZIYA KABEL"', id: 46 },
  { x: 2494, y: 270, w:  96, h:  30, label: '"NADIR RABER"', id: 54 },
  { x: 2521, y: 312, w: 110, h:  40, label: '"ZHONGTIAN\nCHEMICAL"', id: 55 },
  { x: 1883, y: 459, w: 100, h:  40, label: '"WANG DA\nROLLING STEEL"', id: 36 },
  { x: 2531, y: 456, w: 110, h:  40, label: 'Bekobod tog\'-konchilik\nqayta ishlash\nkombinati', id: 45 },
  { x: 1934, y: 511, w:  90, h:  40, label: '"BEKABAD\nOGNEUPOR"', id: 37 },
  { x: 2499, y: 516, w:  90, h:  30, label: '"UZTELMASH"', id: 44 },
  { x: 2008, y: 549, w:  80, h:  40, label: '"TURON\nABRASIVE"', id: 38 },
  { x: 2439, y: 556, w:  80, h:  30, label: '"JIHOZVENT"', id: 43 },
  { x: 2353, y: 575, w:  96, h:  40, label: '"HYDRO\nCOMPONENT"', id: 42 },
  { x: 2081, y: 583, w:  90, h:  40, label: '"DIZEL DETAL\nSAVDO"', id: 39 },
  { x: 2172, y: 594, w:  90, h:  40, label: '"NAM MOTOR\nSERVIS"', id: 40 },
  { x: 2265, y: 591, w:  80, h:  40, label: '"SOLID\nINDUSTRIES"', id: 41 },

  // ── Top row booths (frame 232:3807, y=55, each 81×81) ────────────
  { x: 1895, y: 55, w: 81, h: 81, label: '"PROM TEX\nEKSPERTIZA"', id: 74 },
  { x: 1976, y: 55, w: 81, h: 81, label: '"NASIBA\nGAVHAR"', id: 14 },
  { x: 2057, y: 55, w: 81, h: 81, label: '"PISKENT\nHAMKOR SAVDO"', id: 13 },
  { x: 2138, y: 55, w: 81, h: 81, label: '"MYSTEP"', id: 58 },
  { x: 2219, y: 55, w: 81, h: 81, label: 'Shturval' },
  { x: 2300, y: 55, w: 81, h: 81, label: '"SALAMAN S\nROLIKS"', id: 59 },
  { x: 2381, y: 55, w: 81, h: 81, label: '"UZSHOES"\nMCHJ QK', id: 60 },
  { x: 2462, y: 55, w: 81, h: 81, label: '"BIG-PROM-\nSERVIS"', id: 30 },
  { x: 2543, y: 55, w: 81, h: 81, label: 'Fahr Nur' },
  { x: 2624, y: 55, w: 81, h: 81, label: 'Jizzah akkumlyator\nzavodi' },
  { x: 2705, y: 55, w: 81, h: 81, label: '"UZAUTO\nMOTORS"' },

  // ── Bottom row 1 — Olmaliq + 8 companies (y=703) ──────────────────
  { x:  127, y: 703, w: 223, h: 81, label: 'Olmaliq' },
  { x:  350, y: 703, w:  81, h: 81, label: '"NOSIRXON\nMUSLIM"', id: 71 },
  { x:  431, y: 703, w:  81, h: 81, label: '"GEOBURTEHNIKA"', id: 76 },
  { x:  512, y: 703, w:  81, h: 81, label: '"FERRUM"', id: 12 },
  { x:  593, y: 703, w:  81, h: 81, label: '"SANOAT OGNEUPOR\nVA BUTLOV"', id: 15 },
  { x:  674, y: 703, w:  81, h: 81, label: '"OGNEUPOR"', id: 18 },
  { x:  755, y: 703, w:  81, h: 81, label: '"APEX TOOLS"', id: 86 },
  { x:  836, y: 703, w:  81, h: 81, label: '"KOGON MARS\nPLUS"', id: 79 },
  { x:  917, y: 703, w:  81, h: 81, label: '"KOGONTEKS"', id: 68 },

  // ── Bottom row 1 continued (frame 232:3830, y=703) ────────────────
  { x: 1020, y: 703, w:  63, h: 81, label: '"SDK GROUP\nAND"', id: 34 },
  { x: 1097, y: 703, w:  63, h: 81, label: '"ANGREN ELEKTRO\nPROM"', id: 78 },
  { x: 1174, y: 703, w:  81, h: 41, label: '"NAMELEKTRO"', id: 16 },
  { x: 1174, y: 744, w:  81, h: 40, label: '"AFNAN\nBUILDING 2020"', id: 66 },
  { x: 1255, y: 703, w:  77, h: 81, label: '"STALMET GROUP\nSERVICE"', id: 32 },
  { x: 1332, y: 703, w:  77, h: 81, label: '"UZXCMG"', id: 87 },
  { x: 1409, y: 703, w: 131, h: 81, label: '"NAVOIYSKIY ZAVOD\nBUROVOY"', id: 72 },
  { x: 1540, y: 703, w:  77, h: 81, label: 'ELEMERT' },

  // ── Bottom row 2 (frame 232:3894, y=703) ──────────────────────────
  { x: 1640, y: 703, w: 81, h: 81, label: '"GLOBAL GEO\nMETALL"', id: 80 },
  { x: 1721, y: 703, w: 81, h: 81, label: '"GOLD SHARQ\nSIFAT"', id: 82 },
  { x: 1802, y: 703, w: 81, h: 81, label: '"SHELF VOSTOK"', id: 83 },
  { x: 1883, y: 703, w: 81, h: 81, label: '"TEXNO TKAN\nTEKSTIL"' },
  { x: 1964, y: 703, w: 81, h: 81, label: '"KATTAQO\'RG\'ON\nELEKTROTEXNIKA"', id: 63 },
  { x: 2045, y: 703, w: 81, h: 81, label: '"METALL REAL"', id: 67 },
  { x: 2126, y: 703, w: 81, h: 81, label: '"METALL-\nTECHNOLOGIES"', id: 73 },
  { x: 2207, y: 703, w: 81, h: 81, label: '"SOLID\nINDUSTRIES"' },

  // ── Bottom row 3 (frame 232:3881, y=703) ──────────────────────────
  { x: 2309, y: 703, w: 81, h: 81, label: '"SURXON ART\nKERAMIKS"', id: 57 },
  { x: 2390, y: 703, w: 81, h: 81, label: 'ANDIJAN\nELEKTROTEXNIKA', id: 19 },
  { x: 2471, y: 703, w: 81, h: 81, label: '"AUTO PAD\nSYSTEMS"', id: 17 },
  { x: 2552, y: 703, w: 81, h: 81, label: '"BISYOR-FAYZ"', id: 64 },
  { x: 2633, y: 703, w: 81, h: 81, label: '"INOPROM"', id: 70 },
  { x: 2714, y: 703, w: 81, h: 81, label: '"CEMIX"', id: 81 },
];

// ─── jsPlumb instance (lazy) ──────────────────────────────
let _jp = null;
function getJP() {
  if (!_jp) {
    _jp = jsPlumb.getInstance({
      Container: document.getElementById('booths'),
      ConnectionsDetachable: false,
      ReattachConnections: false,
    });
  }
  return _jp;
}

// ─── Map build ────────────────────────────────────────────
function buildMap() {
  const el = document.getElementById('booths');
  let html = '';

  BOOTH_DEFS.forEach(b => {
    const rotStyle = b.rot != null ? `;transform:rotate(${b.rot}deg)` : '';
    const style = `left:${b.x}px;top:${b.y}px;width:${b.w}px;height:${b.h}px${rotStyle}`;
    const cleanLabel = normalizeCompanyName(b.label);
    const labelHtml = cleanLabel.replace(/\n/g, '<br>');

    const extraCls = b.color ? ' ' + b.color : '';
    if (b.id && b.zoneLabel) {
      html += `<button class="booth booth-zone booth-org${extraCls}" data-id="${b.id}" style="${style}" title="${cleanLabel.replace(/\n/g,' ')}">${labelHtml}</button>`;
    } else if (b.id) {
      html += `<button class="booth" data-id="${b.id}" style="${style}" title="${cleanLabel.replace(/\n/g,' ')}"><span class="booth-label">${labelHtml}</span></button>`;
    } else if (b.zone) {
      html += `<div class="booth booth-zone${extraCls}" data-zone="${b.zone}" style="${style}">${labelHtml}</div>`;
    } else {
      html += `<div class="booth booth-zone${extraCls}" style="${style}">${labelHtml}</div>`;
    }
  });

  // ── Chair column (9 chairs stacked) ────────────────────────────────
  const chairImg = `<img class="map-chair-img" src="assets/chair.svg" alt="">`;
  const row9 = `<div class="map-chair-row">${Array(9).fill(chairImg).join('')}</div>`;

  // ── Structural map frames ────────────────────────────────────────────
  html += `
    <div class="map-frame-border b-top"    style="left:0;top:0;width:3086px;height:26px;"></div>
    <div class="map-frame-border b-bottom" style="left:0;top:798px;width:3086px;height:26px;">
      <button class="map-kirish-btn">
        <img src="assets/icon-kirish.svg" alt="">KIRISH
      </button>
    </div>
    <div class="map-frame-border b-left"  style="left:0;top:26px;width:26px;height:772px;"></div>
    <div class="map-frame-border b-right" style="left:3060px;top:26px;width:26px;height:772px;"></div>

    <div class="map-h-divider">
      <button class="map-otish-btn">
        <img src="assets/icon-otish.svg" alt="">O'tish
      </button>
    </div>

    <div class="map-stage">
      <div class="map-ekran-bar"><span>Ekran</span></div>
      <div class="map-sahna-bar">Sahna</div>
      <div class="map-chair-rows">
        ${Array(6).fill(row9).join('')}
      </div>
    </div>`;

  el.innerHTML = html;
  el.addEventListener('click', e => {
    const btn = e.target.closest('[data-id]');
    if (btn) { push(); selectCompany(+btn.dataset.id); return; }
    const zone = e.target.closest('[data-zone]');
    if (zone) { push(); setState({ view: 'he' }); }
  });
}

// ─── Helpers ──────────────────────────────────────────────
function push() {
  state.history.push({
    view: state.view, company: state.company,
    tab: state.tab, query: state.query, homeTab: state.homeTab, heTab: state.heTab,
  });
}
function setState(patch) { Object.assign(state, patch); render(); }
function stripOuterQuotes(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/^[\s"'“”«»]+/, '')
    .replace(/[\s"'“”«»]+$/, '');
}
function normalizeCompanyName(text) {
  if (typeof text !== 'string') return text;
  return stripOuterQuotes(text).replace(/["'“”«»]/g, '').replace(/\s{2,}/g, ' ').trim();
}
function scrollToCompanyBooth(id) {
  const area = document.getElementById('map-area');
  const booth = document.querySelector(`.booth[data-id="${id}"]`);
  if (!area || !booth) return;

  const targetLeft = booth.offsetLeft - (area.clientWidth - booth.offsetWidth) / 2;
  const maxLeft = Math.max(0, area.scrollWidth - area.clientWidth);
  area.scrollTo({
    left: Math.max(0, Math.min(targetLeft, maxLeft)),
    behavior: 'smooth',
  });
}
function selectCompany(id) {
  if (state.view === 'company' && state.company && state.company.id === id) {
    setState({ view: 'home', company: null, tab: 'xamkorlar' });
    return;
  }
  setState({ view: 'company', company: companies.find(c => c.id === id), tab: 'xamkorlar' });
  requestAnimationFrame(() => scrollToCompanyBooth(id));
}
function getPartners(c) {
  // Xamkorlar: satellite companies in the same parent org cluster
  if (!c.parent_org_name || c.parent_org_name === 'Hududiy korxonalar') return [];
  return companies.filter(x => x.id !== c.id && x.parent_org_name === c.parent_org_name && !x.self_stirs);
}
function getProposals(c) {
  // Takliflar: second-file companies whose supplies_to references this cluster's org STIRs
  const orgStirs = new Set([...(c.self_stirs || []), ...(c.parent_org_stirs || [])]);
  if (!orgStirs.size) return [];
  return companies.filter(x => x.id !== c.id && (x.supplies_to || []).some(o => orgStirs.has(o)));
}

function pill(text, white) {
  return `<span class="pill${white ? ' pill-white' : ''}">${text}</span>`;
}

// ─── Card HTML builders ───────────────────────────────────
function companyCardHTML(c) {
  const sector = c.sector ? c.sector.split(',')[0].trim() : '';
  const deliveredProduct = c.mahsulot || 'Ma\'lumot mavjud emas';
  return `<div class="company-card" data-id="${c.id}">
    <p class="cc-name">${normalizeCompanyName(c.name)}</p>
    <div class="cc-pills">
      ${pill('STIR: ' + c.stir)}
      ${sector ? pill(sector) : ''}
      ${pill('Sanoq ehtiyoji')}
    </div>
    <div>
      <p class="cc-addr-label">Ishlab chiqarish maydonlari</p>
      <p class="cc-addr">${[c.tuman, c.viloyat].filter(Boolean).join(', ')}</p>
    </div>
    <div style="margin-top: 4px">
      <p class="cc-addr-label">Mahsulot</p>
      <p class="cc-addr">${deliveredProduct}</p>
    </div>
  </div>`;
}

function partnerCardHTML(c, idx) {
  const colors = ['c1', 'c2', 'c3', 'c4'];
  const sector = c.sector ? c.sector.split(',')[0].trim() : '';
  const deliveredProduct = c.mahsulot || 'Ma\'lumot mavjud emas';
  return `<div class="partner-card ${colors[idx % 4]}" data-id="${c.id}">
    <p class="pc-name">${normalizeCompanyName(c.name)}</p>
    <div class="cc-pills">
      ${pill('STIR: ' + c.stir)}
      ${sector ? pill(sector) : ''}
      ${pill('Sanoq ehtiyoji')}
    </div>
    <div>
      <p class="cc-addr-label">Ishlab chiqarish maydonlari</p>
      <p class="cc-addr">${[c.tuman, c.viloyat].filter(Boolean).join(', ')}</p>
    </div>
    <div>
      <p class="cc-addr-label">Yetkazib berilayotgan mahsulot</p>
      <p class="cc-addr">${deliveredProduct}</p>
    </div>
  </div>`;
}

function productCardHTML(c) {
  return `<div class="product-card">
    <div class="product-img">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    </div>
    <div class="product-info">
      <p class="product-name">${c.mahsulot}</p>
      <div class="product-badges">
        <span class="badge">ГОСТ 15150-2005</span>
        <span class="badge">e-xarid.uz</span>
      </div>
    </div>
  </div>`;
}

function satelliteProductCardHTML(c) {
  if (!c.mahsulot) return '';
  return `<div class="product-card" data-id="${c.id}">
    <div class="product-img">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    </div>
    <div class="product-info">
      <p class="product-name">${c.mahsulot}</p>
      <div class="product-badges">
        <span class="badge">${normalizeCompanyName(c.name)}</span>
      </div>
    </div>
  </div>`;
}

// ─── Render ───────────────────────────────────────────────
function render() {
  document.querySelectorAll('.panel-view').forEach(v => {
    v.classList.toggle('active', v.id === 'view-' + state.view);
  });
  if (state.view !== 'home') hideSearchKeyboard();

  if (state.view === 'home')    renderHome();
  if (state.view === 'company') renderCompany();
  if (state.view === 'info')    renderInfo();
  if (state.view === 'he')      renderHE();

  updateBoothClasses();
  renderPartnerLinks();
  updateMinimap();
  layoutScrollIndicator();
}

function renderHome() {
  document.querySelectorAll('.home-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.hometab === state.homeTab);
  });

  const q = state.query.toLowerCase();
  let list = [];
  if (state.homeTab === 'korxonalar') {
    list = q
      ? companies.filter(c =>
          normalizeCompanyName(c.name).toLowerCase().includes(q) ||
          c.stir.includes(q) ||
          (c.viloyat && c.viloyat.toLowerCase().includes(q)) ||
          (c.sector && c.sector.toLowerCase().includes(q))
        )
      : [...companies];
    list.sort((a, b) => normalizeCompanyName(a.name).localeCompare(normalizeCompanyName(b.name), 'uz'));
  } else {
    list = q
      ? buyurtmachilar.filter(x =>
          normalizeCompanyName(x.name).toLowerCase().includes(q) || x.stir.includes(q)
        )
      : buyurtmachilar;
  }

  const el = document.getElementById('home-list');
  el.innerHTML = list.length
    ? (state.homeTab === 'korxonalar'
      ? list.map(companyCardHTML).join('')
      : list.map(x => `<div class="company-card company-card-static">
          <p class="cc-name">${normalizeCompanyName(x.name)}</p>
          <div class="cc-pills">${pill('STIR: ' + x.stir)}</div>
        </div>`).join(''))
    : '<p class="empty-state">Ma\'lumot topilmadi</p>';

  if (state.homeTab === 'korxonalar') {
    el.querySelectorAll('.company-card').forEach(card => {
      card.addEventListener('click', () => { push(); selectCompany(+card.dataset.id); });
    });
  }

  syncScrollIndicator(el);
}

function renderCompany() {
  const c = state.company;
  if (!c) return;

  document.getElementById('cd-name').textContent = normalizeCompanyName(c.name);
  document.getElementById('cd-addr').textContent = [c.tuman, c.viloyat].filter(Boolean).join(', ');

  const isParentOrgHeader = !!(c.self_stirs && c.self_stirs.length);
  const sector = c.sector ? c.sector.split(',')[0].trim() : '';
  document.getElementById('cd-pills').innerHTML =
    pill('STIR: ' + c.stir, true) +
    (sector ? pill(sector, true) : '') +
    (isParentOrgHeader ? pill(c.tip || 'Yirik korxona', true) : pill('Elektr energiya', true));

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === state.tab);
  });

  const content = document.getElementById('tab-content');
  const items = state.tab === 'xamkorlar' ? getPartners(c) : getProposals(c);
  content.innerHTML = items.length
    ? items.map((p, i) => partnerCardHTML(p, i)).join('')
    : '<p class="empty-state">Ma\'lumot topilmadi</p>';
  content.querySelectorAll('[data-id]').forEach(card => {
    card.addEventListener('click', () => { push(); selectCompany(+card.dataset.id); });
  });

  syncScrollIndicator(content);
}

function renderHE() {
  const content = document.getElementById('he-content');
  content.innerHTML = heContent[state.heTab] || '';
  document.querySelectorAll('.he-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.hetab === state.heTab);
  });
  syncScrollIndicator(content);
}

function renderInfo() {
  const content = document.getElementById('info-content');
  content.innerHTML = infoContent[state.infoTab] || '';
  document.querySelectorAll('.info-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.infotab === state.infoTab);
  });
  syncScrollIndicator(content);
}

function updateBoothClasses() {
  const isCompanyView = state.view === 'company' && !!state.company;
  const isPartnersTab = isCompanyView && state.tab === 'xamkorlar';
  const isProposalsTab = isCompanyView && state.tab === 'takliflar';
  const partnerIds = isPartnersTab ? new Set(getPartners(state.company).map(p => p.id)) : null;
  const proposalIds = isProposalsTab ? new Set(getProposals(state.company).map(p => p.id)) : null;

  document.querySelectorAll('.booth').forEach(el => {
    el.classList.remove('selected', 'partner', 'proposal', 'is-disabled');

    const id = el.dataset.id ? +el.dataset.id : null;
    if (!isCompanyView) return;

    if (id === state.company.id) {
      el.classList.add('selected');
      return;
    }

    if (isPartnersTab) {
      if (id != null && partnerIds.has(id)) {
        el.classList.add('partner');
      } else {
        el.classList.add('is-disabled');
      }
      return;
    }

    if (isProposalsTab) {
      if (id != null && proposalIds.has(id)) {
        el.classList.add('proposal');
      } else {
        el.classList.add('is-disabled');
      }
      return;
    }

    el.classList.add('is-disabled');
  });

  const stageEl = document.querySelector('.map-stage');
  if (stageEl) stageEl.classList.toggle('is-disabled', isCompanyView);
}

function clearPartnerLinks() {
  if (_jp) _jp.deleteEveryConnection();
}

function renderPartnerLinks() {
  clearPartnerLinks();

  const isXamkorlar = state.tab === 'xamkorlar';
  const isTakliflar = state.tab === 'takliflar';
  if (state.view !== 'company' || (!isXamkorlar && !isTakliflar) || !state.company) return;

  const srcEl = document.querySelector(`.booth[data-id="${state.company.id}"]`);
  if (!srcEl) return;

  const relatedCompanies = isXamkorlar ? getPartners(state.company) : getProposals(state.company);
  const color = isXamkorlar ? '#9bbb59' : '#fec524';
  const jp = getJP();

  relatedCompanies.forEach(company => {
    const targetEl = document.querySelector(`.booth[data-id="${company.id}"]`);
    if (!targetEl) return;
    try {
      jp.connect({
        source: srcEl,
        target: targetEl,
        anchors: ['AutoDefault', 'AutoDefault'],
        connector: ['Flowchart', {
          stub: 16,
          gap: 4,
          cornerRadius: 8,
          alwaysRespectStubs: false,
        }],
        paintStyle: { stroke: color, strokeWidth: 2 },
        endpoint: 'Blank',
        overlays: [
          ['Arrow', {
            location: 1,
            width: 10,
            length: 12,
            foldback: 0.7,
            paintStyle: { fill: color, stroke: color },
          }],
        ],
      });
    } catch (e) {}
  });
}

// ─── Scroll indicator sync ────────────────────────────────
function syncScrollIndicator(scrollEl) {
  if (!scrollEl) return;
  scrollEl.addEventListener('scroll', () => updateScrollThumb(scrollEl), { passive: true });
  updateScrollThumb(scrollEl);
}

function updateScrollThumb(el) {
  const thumb = document.getElementById('scroll-thumb');
  const indicator = document.getElementById('scroll-indicator');
  if (!el || !thumb) return;
  const hasOverflow = el.scrollHeight > el.clientHeight + 1;
  if (indicator) indicator.style.display = hasOverflow ? 'flex' : 'none';
  if (!hasOverflow) return;
  const ratio = el.scrollTop / Math.max(1, el.scrollHeight - el.clientHeight);
  const trackHeight = document.querySelector('.scroll-track')?.offsetHeight || 600;
  const thumbH = Math.max(30, trackHeight * (el.clientHeight / el.scrollHeight));
  const maxTop = trackHeight - thumbH;
  thumb.style.height = thumbH + 'px';
  thumb.style.top = (ratio * maxTop) + 'px';
}

function getActiveScrollEl() {
  if (state.view === 'home')    return document.getElementById('home-list');
  if (state.view === 'company') return document.getElementById('tab-content');
  if (state.view === 'info')    return document.getElementById('info-content');
  if (state.view === 'he')      return document.getElementById('he-content');
  return null;
}

function layoutScrollIndicator() {
  const indicator = document.getElementById('scroll-indicator');
  const panel = document.getElementById('detail-panel');
  const activeScroll = getActiveScrollEl();
  if (!indicator || !panel || !activeScroll) return;

  const panelRect = panel.getBoundingClientRect();
  const scrollRect = activeScroll.getBoundingClientRect();

  const top = Math.max(0, scrollRect.top - panelRect.top + 6);
  const height = Math.max(120, scrollRect.height - 12);

  indicator.style.top = `${top}px`;
  indicator.style.height = `${height}px`;
}

// ─── Minimap ──────────────────────────────────────────────
function updateMinimap() {
  const area = document.getElementById('map-area');
  const mm   = document.getElementById('map-minimap');
  const vp   = document.getElementById('minimap-viewport');
  const ratio = mm.offsetWidth / 3085;
  const w = Math.max(16, area.offsetWidth * ratio);
  const l = Math.min(area.scrollLeft * ratio, mm.offsetWidth - w);
  vp.style.width = w + 'px';
  vp.style.left  = l + 'px';
}

function updateSearchClear() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');
  if (!input || !clearBtn) return;
  clearBtn.classList.toggle('visible', !!input.value.trim());
}

let searchKeyboard = null;
let keyboardLang = 'en';
function showSearchKeyboard() {
  const wrap = document.getElementById('search-keyboard-wrap');
  if (!wrap || state.view !== 'home') return;
  wrap.classList.add('visible');
}
function hideSearchKeyboard() {
  const wrap = document.getElementById('search-keyboard-wrap');
  if (!wrap) return;
  wrap.classList.remove('visible');
}
function initSearchKeyboard() {
  const input = document.getElementById('search-input');
  const mount = document.getElementById('search-keyboard');
  if (!input || !mount) return;

  function getRows() {
    if (keyboardLang === 'ru') {
      return [
        ['1','2','3','4','5','6','7','8','9','0','bksp'],
        ['й','ц','у','к','е','н','г','ш','щ','з','х'],
        ['ф','ы','в','а','п','р','о','л','д','ж','э'],
        ['я','ч','с','м','и','т','ь','б','ю'],
        ['lang','space','clear','enter']
      ];
    }
    return [
      ['1','2','3','4','5','6','7','8','9','0','bksp'],
      ['q','w','e','r','t','y','u','i','o','p'],
      ['a','s','d','f','g','h','j','k','l'],
      ['z','x','c','v','b','n','m'],
      ['lang','space','clear','enter']
    ];
  }

  function renderKeyboard() {
    const rows = getRows();
    mount.innerHTML = rows.map(row =>
      `<div class="kb-row">${
        row.map(key => {
          const label = key === 'bksp' ? '⌫'
            : key === 'space' ? 'Bo‘sh joy'
            : key === 'clear' ? 'Tozalash'
            : key === 'enter' ? 'Yopish'
            : key === 'lang' ? (keyboardLang === 'ru' ? 'EN' : 'RU')
            : key.toUpperCase();
          const cls = key === 'space' ? ' kb-key-space'
            : key === 'enter' ? ' kb-key-enter'
            : key === 'clear' ? ' kb-key-clear'
            : key === 'lang' ? ' kb-key-lang'
            : '';
          return `<button type="button" class="kb-key${cls}" data-key="${key}">${label}</button>`;
        }).join('')
      }</div>`
    ).join('');
  }
  renderKeyboard();

  searchKeyboard = {
    setInput(value) {
      input.value = value;
      state.query = value;
      updateSearchClear();
      renderHome();
    }
  };

  mount.addEventListener('click', e => {
    const key = e.target.closest('.kb-key')?.dataset.key;
    if (!key) return;
    if (key === 'bksp') {
      searchKeyboard.setInput(input.value.slice(0, -1));
      return;
    }
    if (key === 'space') {
      searchKeyboard.setInput(input.value + ' ');
      return;
    }
    if (key === 'clear') {
      searchKeyboard.setInput('');
      input.focus();
      return;
    }
    if (key === 'lang') {
      keyboardLang = keyboardLang === 'ru' ? 'en' : 'ru';
      renderKeyboard();
      input.focus();
      return;
    }
    if (key === 'enter') {
      hideSearchKeyboard();
      input.blur();
      return;
    }
    searchKeyboard.setInput(input.value + key);
  });
}

// ─── Events ───────────────────────────────────────────────
document.getElementById('btn-home').addEventListener('click', () => {
  state.history = [];
  document.getElementById('search-input').value = '';
  updateSearchClear();
  setState({ view: 'home', company: null, tab: 'xamkorlar', query: '', homeTab: 'buyurtmachilar' });
});

document.getElementById('btn-back').addEventListener('click', () => {
  if (state.history.length) {
    Object.assign(state, state.history.pop());
    render();
    const inp = document.getElementById('search-input');
    if (inp) inp.value = state.query || '';
  } else {
    state.history = [];
    document.getElementById('search-input').value = '';
    updateSearchClear();
    setState({ view: 'home', company: null, tab: 'xamkorlar', query: '', homeTab: 'buyurtmachilar' });
  }
});

document.getElementById('btn-info').addEventListener('click', () => {
  push();
  setState({ view: 'info' });
});

document.getElementById('search-input').addEventListener('input', e => {
  state.query = e.target.value;
  if (searchKeyboard) searchKeyboard.setInput(e.target.value);
  updateSearchClear();
  renderHome();
});

document.getElementById('search-input').addEventListener('focus', () => {
  showSearchKeyboard();
});

document.getElementById('search-clear').addEventListener('click', () => {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.value = '';
  state.query = '';
  hideSearchKeyboard();
  input.blur();
  updateSearchClear();
  renderHome();
});

document.getElementById('panel-tabs').addEventListener('click', e => {
  const btn = e.target.closest('.tab-btn');
  if (btn && state.company) setState({ tab: btn.dataset.tab });
});

document.getElementById('home-tabs').addEventListener('click', e => {
  const btn = e.target.closest('.home-tab-btn');
  if (btn) setState({ homeTab: btn.dataset.hometab, query: '' });
  const input = document.getElementById('search-input');
  if (input) {
    input.value = '';
    updateSearchClear();
  }
});

document.getElementById('he-tabs').addEventListener('click', e => {
  const btn = e.target.closest('.he-tab-btn');
  if (btn) setState({ heTab: btn.dataset.hetab });
});

document.getElementById('info-tabs').addEventListener('click', e => {
  const btn = e.target.closest('.info-tab-btn');
  if (btn) setState({ infoTab: btn.dataset.infotab });
});

document.getElementById('scroll-up').addEventListener('click', () => {
  const el = getActiveScrollEl();
  if (el) el.scrollBy({ top: -200, behavior: 'smooth' });
});
document.getElementById('scroll-down').addEventListener('click', () => {
  const el = getActiveScrollEl();
  if (el) el.scrollBy({ top: 200, behavior: 'smooth' });
});

document.getElementById('map-area').addEventListener('scroll', updateMinimap);
document.addEventListener('pointerdown', e => {
  const keyboardWrap = document.getElementById('search-keyboard-wrap');
  const searchInput = document.getElementById('search-input');
  if (!keyboardWrap || !searchInput) return;
  if (keyboardWrap.contains(e.target) || searchInput.contains(e.target)) return;
  hideSearchKeyboard();
});
window.addEventListener('resize', () => {
  layoutScrollIndicator();
  const el = getActiveScrollEl();
  if (el) updateScrollThumb(el);
  renderPartnerLinks();
});

// ─── Init ─────────────────────────────────────────────────
buildMap();
render();
updateSearchClear();
initSearchKeyboard();
