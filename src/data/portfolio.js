// Structured portfolio data for Dirom Purbowiseno.
// Descriptive text carries both locales (`id` default, `en`); proper nouns,
// tech tags, metrics, and URLs are language-neutral. Resolve with pickLocale().

export const PROFILE = {
    name: "Dirom Purbowiseno",
    role: {
        id: "Fullstack Developer (Backend, Frontend & Mobile)",
        en: "Fullstack Developer (Backend, Frontend & Mobile)",
    },
    location: "Jakarta, Indonesia",
    email: "infohijra4@gmail.com",
    linkedin: "https://www.linkedin.com/in/diromdp/",
};

export const STATS = [
    { value: "8+", label: { id: "Tahun membangun web", en: "Years building for the web" } },
    { value: "15+", label: { id: "Proyek yang sudah rilis", en: "Projects shipped" } },
    { value: "30%", label: { id: "Kenaikan revenue klien", en: "Revenue lift for clients" } },
    { value: "90+", label: { id: "Skor PageSpeed tertinggi", en: "Best PageSpeed score" } },
];

export const EXPERIENCE = [
    {
        company: "Catalyze",
        role: { id: "Front-End Developer", en: "Front-End Developer" },
        period: { id: "Agu 2022 sampai sekarang", en: "Aug 2022 to now" },
        summary: {
            id: "Catalyze membantu organisasi yang peduli lingkungan menyampaikan misi mereka lewat komunikasi yang kredibel.",
            en: "Catalyze helps eco-conscious organizations communicate their mission credibly.",
        },
        achievements: [
            {
                id: "Merilis situs interaktif untuk UNEP, WWF, JETP, Lestari Capital, dan RMU dengan skor PageSpeed 78 sampai 87.",
                en: "Shipped interactive sites for UNEP, WWF, JETP, Lestari Capital, and RMU, hitting PageSpeed scores of 78 to 87.",
            },
        ],
        stack: ["Next.js", "React.js", "GSAP", "Lottie", "Laravel", "TailwindCSS", "Nest.js" , "REST API", "Nuxt.js"],
    },
    {
        company: "Salt X Orbit",
        role: { id: "Frontend Developer", en: "Frontend Developer" },
        period: { id: "Agu 2020 sampai Agu 2022", en: "Aug 2020 to Aug 2022" },
        summary: {
            id: "Mengembangkan dan merapikan fitur yang menaikkan order 5%, sambil menjaga kualitas UI/UX. Code review mingguan menurunkan masalah di kode sekitar 15%.",
            en: "Built and refined features that lifted orders by 5% while keeping the UI/UX in shape. Weekly code reviews cut code issues by about 15%.",
        },
        achievements: [
            {
                id: "Menaikkan order 5% lewat fitur baru dan optimasi.",
                en: "Increased orders by 5% with new and optimized features.",
            },
            {
                id: "Memangkas isu kode sekitar 15% lewat code review mingguan dan menaikkan PageSpeed dari 70 ke 80.",
                en: "Cut code issues by about 15% through weekly code reviews and improved PageSpeed from 70 to 80.",
            },
        ],
        stack: ["React Native", "React Native Web", "Redux", "JavaScript"],
    },
    {
        company: "Qasir.id",
        role: { id: "Front-End Developer", en: "Front-End Developer" },
        period: { id: "Des 2018 sampai Jun 2020", en: "Dec 2018 to Jun 2020" },
        summary: {
            id: "Fitur grocery dan Payment Point Online Bank menaikkan basis pengguna 35% dan GMV 30%. Saya juga membangun Wholesale Admin Panel dari nol sampai dipakai 40 vendor di Jakarta.",
            en: "The grocery and Payment Point Online Bank features grew the user base by 35% and GMV by 30%. I also built the Wholesale Admin Panel from scratch, and 40 vendors in Jakarta ended up using it.",
        },
        achievements: [
            {
                id: "Menaikkan basis pengguna 35% dan GMV 30% lewat fitur grocery dan PPOB.",
                en: "Grew the user base by 35% and GMV by 30% with grocery and PPOB features.",
            },
            {
                id: "Membangun Wholesale Admin Panel dari nol sampai 40 vendor di Jakarta.",
                en: "Built the Wholesale Admin Panel from zero to 40 vendors in Jakarta.",
            },
        ],
        stack: ["Vue.js", "React.js", "Redux", "Laravel", "Magento"],
    },
    {
        company: "Vhiweb",
        role: { id: "Front-End Developer", en: "Front-End Developer" },
        period: { id: "Agu 2017 sampai Nov 2018", en: "Aug 2017 to Nov 2018" },
        summary: {
            id: "Membangun dashboard internal Badan Keuangan Negara dari nol, ditambah beberapa situs e-commerce cabang seperti Sarayu, Kotex, dan Fiesta yang menaikkan revenue hingga 37%.",
            en: "Built an internal dashboard for the State Financial Body from scratch, plus branch e-commerce sites for Sarayu, Kotex, and Fiesta that lifted revenue by up to 37%.",
        },
        achievements: [
            {
                id: "Membangun dashboard keuangan internal pemerintah dari nol.",
                en: "Built an internal government finance dashboard from scratch.",
            },
            {
                id: "Meluncurkan situs e-commerce cabang yang menaikkan revenue 20% sampai 37%.",
                en: "Launched branch e-commerce sites that lifted revenue by 20% to 37%.",
            },
        ],
        stack: ["Laravel", "LESS", "jQuery"],
    },
];

// Clients & partners shown in the auto-scrolling logo strip above the projects.
// Logos are lightweight monochrome SVG wordmarks; `width` sets the rendered
// intrinsic width so the marquee spacing stays even.
export const CLIENTS = [
    { name: "Catalyze", logo: "/assets/clients/catalyze.svg", width: 150 },
    { name: "UNEP", logo: "/assets/clients/unep.png", width: 150 },
    { name: "WWF", logo: "/assets/clients/WWF.avif", width: 150 },
    { name: "WRI Indonesia", logo: "/assets/clients/wri-indonesia.webp", width: 150 },
    { name: "ERIA", logo: "/assets/clients/eria.png", width: 150 },
    { name: "Lestari Capital", logo: "/assets/clients/lestari-capital.png", width: 150 },
    { name: "Rimba Makmur Utama", logo: "/assets/clients/rimba-makmur.jpeg", width: 150 },
];

export const PROJECTS = [
    {
        name: "Maxima",
        client: "Maxima Stiftung",
        url: "https://maxima.toolsumkm.web.id/",
        description: {
            id: "Sistem untuk mengelola siswa, kursus online (LMS), dan penempatan kerja ke Jerman.",
            en: "A system for managing students, online courses (LMS), and job placements in Germany.",
        },
        stack: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL"],
        accent: "sage",
    },
    {
        name: "Timelog",
        client: "Catalyze",
        url: "https://timelog.catalyze.id/",
        description: {
            id: "Tool internal Catalyze untuk mengelola proyek dan mencatat waktu yang dihabiskan di tiap proyek.",
            en: "Catalyze's internal tool for managing projects and tracking the time spent on each one.",
        },
        stack: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL"],
        accent: "mint",
    },
    {
        name: "Prevention Platform",
        client: "Australian Government",
        url: "https://prevention-platform.org/",
        contribution: {
            id: "Slicing dan integrasi semua halaman, plus membangun CMS custom untuk situs ini.",
            en: "Sliced and integrated every page, and built a custom CMS for the site.",
        },
        description: {
            id: "Inisiatif Pemerintah Australia untuk mendukung upaya pencegahan kekerasan berbasis gender (GBV) di Asia Tenggara.",
            en: "An Australian Government initiative that supports efforts to prevent gender-based violence (GBV) in Southeast Asia.",
        },
        stack: ["React.js", "Next.js", "REST API", "JavaScript", "TailwindCSS"],
    },
    {
        name: "Journey of Food",
        client: "UNEP",
        url: "https://www.unep.org/interactives/journey-of-food",
        contribution: {
            id: "Membangun animasi scroll vertikal (GSAP + Lottie) dan mengoptimalkan performanya.",
            en: "Built the vertical scroll animation (GSAP + Lottie) and tuned its performance.",
        },
        description: {
            id: "Cerita interaktif untuk UN Environment Programme yang terbuka bertahap saat Anda scroll, dengan animasi GSAP dan Lottie.",
            en: "An interactive story for the UN Environment Programme that unfolds as you scroll, animated with GSAP and Lottie.",
        },
        stack: ["Next.js", "React.js", "GSAP", "Lottie"],
        accent: "sage",
    },
    {
        name: "Earth Hour",
        client: "WWF",
        url: "https://www.earthhour.org/",
        contribution: {
            id: "Pengembangan front-end dan semua animasi di halaman.",
            en: "Front-end development and all the on-page animation.",
        },
        description: {
            id: "Situs kampanye global WWF. Animasinya halus, tapi halamannya tetap ringan dibuka.",
            en: "WWF's global campaign site. The animation is smooth and the pages still load quickly.",
        },
        stack: ["Laravel", "TailwindCSS", "JavaScript"],
        accent: "mist",
    },
    {
        name: "Taksu Plastic Detox",
        client: "Taksu Reuse",
        url: "https://taksureuse.com/",
        contribution: {
            id: "Membangun seluruh situs beranimasi dari awal.",
            en: "Built the whole animated site from scratch.",
        },
        description: {
            id: "Website beranimasi untuk gerakan mengurangi sampah plastik. Ini proyek internal yang saya kerjakan sendiri.",
            en: "An animated site for a movement to cut plastic waste. It was an internal project I handled on my own.",
        },
        stack: ["Drupal", "Alpine.js", "TailwindCSS"],
        accent: "mint",
    },
    {
        name: "JETP Indonesia",
        client: "JETP",
        url: "https://id.jetp-id.org/",
        contribution: {
            id: "Membangun front-end beserta animasi naratifnya.",
            en: "Built the front-end and its narrative animation.",
        },
        description: {
            id: "Portal Just Energy Transition Partnership yang menjelaskan transisi energi lewat animasi bercerita.",
            en: "The Just Energy Transition Partnership portal, which explains the energy transition through animated storytelling.",
        },
        stack: ["Laravel", "TailwindCSS", "JavaScript"],
        accent: "sage",
    },
    {
        name: "Lestari Capital",
        client: "Lestari Capital",
        url: "https://lestaricapital.com/",
        pagespeed: 78,
        contribution: {
            id: "Pengembangan front-end, termasuk animasi dan interaksinya.",
            en: "Front-end development, including the animation and interactions.",
        },
        description: {
            id: "Situs korporat di bidang sustainable finance. Animasi dan interaksinya sengaja dibuat secukupnya supaya kesannya tetap serius.",
            en: "A corporate site in sustainable finance. The animation and interactions are kept minimal so the site still feels serious.",
        },
        stack: ["Laravel", "TailwindCSS", "JavaScript"],
        accent: "mist",
    },
    {
        name: "Rimba Makmur Utama",
        client: "RMU",
        url: "https://rimbamakmurutama.com/",
        pagespeed: 80,
        contribution: {
            id: "Front-end dengan REST API, Redux, dukungan PWA, dan setup SEO.",
            en: "Front-end with a REST API, Redux, PWA support, and SEO setup.",
        },
        description: {
            id: "Situs konservasi yang dibangun dengan REST API dan Redux, dengan dukungan PWA dan SEO yang sudah dirapikan.",
            en: "A conservation site built with a REST API and Redux, with PWA support and cleaned-up SEO.",
        },
        stack: ["Next.js", "REST API", "Redux", "PWA", "SEO"],
        accent: "mint",
    },
    {
        name: "WWF Navigator",
        client: "WWF",
        url: "https://navigator.panda.org/",
        contribution: {
            id: "Membangun peta internal WWF menggunakan ArcGIS.",
            en: "Built WWF's internal map using ArcGIS.",
        },
        description: {
            id: "Dashboard peta internal WWF berbasis ArcGIS untuk menampilkan data konservasi secara interaktif.",
            en: "An internal ArcGIS map dashboard that lets WWF explore conservation data interactively.",
        },
        stack: ["Next.js", "Redux", "TailwindCSS", "REST API", "ArcGIS", "JavaScript"],
        accent: "sage",
    },
    {
        name: "RKCMPD ERIA",
        client: "ERIA",
        url: "https://rkcmpd-eria.org/",
        contribution: {
            id: "Membangun versi kedua situs dengan interaksi web yang lebih banyak.",
            en: "Built the second version of the site with more web interactions.",
        },
        description: {
            id: "Situs profil organisasi RKCMPD ERIA, sekarang di versi kedua yang saya bangun.",
            en: "The organizational profile site for RKCMPD ERIA, now on the second version, which I built.",
        },
        stack: ["Laravel", "TailwindCSS", "JavaScript"],
        accent: "mist",
    },
    {
        name: "SEA-MAP",
        client: "ERIA",
        url: "https://kpp.seamap-asean.org/",
        contribution: {
            id: "Membangun semua interaksi website dari nol.",
            en: "Built all of the site's interactions from scratch.",
        },
        description: {
            id: "Platform pendukung ASEAN Regional Action Plan untuk menangani polusi plastik laut, lewat pertukaran pengetahuan, penguatan kapasitas, dialog kebijakan, dan kemitraan lintas sektor.",
            en: "A platform supporting the ASEAN Regional Action Plan on marine plastic pollution through knowledge exchange, capacity building, policy dialogue, and cross-sector partnerships.",
        },
        stack: ["Next.js", "Redux", "REST API", "JavaScript", "TailwindCSS"],
        accent: "mint",
    },
];

export const PRODUCTS = [
    {
        name: { id: "Kinly", en: "Kinly" },
        org: { id: "Produk sendiri", en: "Own product" },
        url: "https://kinly.id/landing",
        description: {
            id: "Kinly adalah platform untuk membangun kebiasaan baik di keluarga. Anak belajar disiplin dan mandiri dengan cara yang menyenangkan, dan orang tua bisa mengarahkan anak tanpa harus menguras tenaga.",
            en: "Kinly is a platform for building good habits at home. Kids learn discipline and independence in a way that feels fun, and parents can guide them without wearing themselves out.",
        },
        stack: ["Nuxt.js", "Vue.js", "TailwindCSS", "JavaScript", "REST API", "PostgreSQL", "Drizzle ORM", "Nest.js"],
    },
];

export const FOCUS_AREAS = [
    { id: "Go Green", en: "Go Green" },
    { id: "Sustainability", en: "Sustainability" },
    { id: "NGO", en: "NGO" },
    { id: "Pemerintahan", en: "Government" },
];

export const SKILL_GROUPS = [
    {
        title: { id: "Frontend", en: "Frontend" },
        skills: ["React.js", "Next.js", "React Native", "Nuxt.js","Vue.js", "Alpine.js", "jQuery", "Vanilla JS"],
    },
    {
        title: { id: "Bahasa & Styling", en: "Languages & Styling" },
        skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SASS/SCSS", "TailwindCSS"],
    },
    {
        title: { id: "Backend", en: "Backend" },
        skills: ["Node.js", "Nest.js", "Express.js", "Laravel", "REST API"],
    },
    {
        title: { id: "Data & Tooling", en: "Data & Tooling" },
        skills: ["Supabase", "Highcharts", "Chart.js", "Redux", "PWA", "Drizzle ORM", "PostgreSQL"],
    },
    {
        title: { id: "Praktik", en: "Practices" },
        skills: ["Responsive Design", "SEO Optimization", "DevOps", "AI Prompt Engineering", "Product Thinking", "Code Review"],
    },
];

// Pick a localized string from a { id, en } object, falling back to id then raw value.
export function pickLocale(field, locale) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[locale] ?? field.id ?? "";
}
