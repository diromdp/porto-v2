// Structured portfolio data for Dirom Purbowiseno.
// Descriptive text carries both locales (`id` default, `en`); proper nouns,
// tech tags, metrics, and URLs are language-neutral. Resolve with pickLocale().

export const PROFILE = {
    name: "Dirom Purbowiseno",
    role: {
        id: "Front-End Developer",
        en: "Front-End Developer",
    },
    location: "Jakarta, Indonesia",
    email: "infohijra4@gmail.com",
    linkedin: "https://www.linkedin.com/in/diromdp/",
};

export const STATS = [
    { value: "8+", label: { id: "Tahun bikin web", en: "Years building for the web" } },
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
            id: "Catalyze membantu organisasi yang tulus peduli pada masa depan bumi untuk menyampaikan misi mereka dengan jujur, menarik, dan berdampak nyata.",
            en: "Catalyze helps eco-conscious organizations share their vision through credible, compelling, and deeply effective communication.",
        },
        achievements: [
            {
                id: "",
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
            id: "Ngembangin dan ngerapihin fitur yang bikin order naik 5%, sambil terus jaga sisi UI/UX. Lewat code review tiap minggu, masalah di kode juga turun sekitar 15%.",
            en: "I shipped and polished features that lifted orders by 5%, while keeping a close eye on UI/UX. Our weekly code reviews also brought code issues down by about 15%.",
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
            id: "Lewat fitur grocery dan Payment Point Online Bank, basis pengguna naik 35% dan GMV naik 30%. Saya juga bangun Wholesale Admin Panel dari nol sampai dipakai 40 vendor di Jakarta.",
            en: "Through grocery and Payment Point Online Bank features, the user base grew 35% and GMV went up 30%. I also built the Wholesale Admin Panel from scratch until 40 vendors in Jakarta were using it.",
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
            id: "Bikin dashboard internal Badan Keuangan Negara dari nol, plus beberapa e-commerce cabang seperti Sarayu, Kotex, dan Fiesta yang menaikkan revenue sampai 37%.",
            en: "I built an internal dashboard for the State Financial Body from scratch, plus a few branch e-commerce sites like Sarayu, Kotex, and Fiesta that lifted revenue by up to 37%.",
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
    { name: "UNEP", logo: "/assets/clients/unep.png", width: 150 },
    { name: "WWF", logo: "/assets/clients/WWF.avif", width: 150 },
    { name: "WRI Indonesia", logo: "/assets/clients/wri-indonesia.webp", width: 150 },
    { name: "ERIA", logo: "/assets/clients/eria.png", width: 150 },
    { name: "Lestari Capital", logo: "/assets/clients/lestari-capital.png", width: 150 },
    { name: "Rimba Makmur Utama", logo: "/assets/clients/rimba-makmur.jpeg", width: 150 },
];

export const PROJECTS = [
    {
        name: "Journey of Food",
        client: "UNEP",
        url: "https://www.unep.org/interactives/journey-of-food",
        contribution: {
            id: "Membangun animasi scroll vertikal (GSAP + Lottie) dan mengoptimalkan performa.",
            en: "Built the vertical scroll animation (GSAP + Lottie) and tuned the performance.",
        },
        description: {
            id: "Cerita yang terbuka sambil kamu scroll ke bawah, dihidupkan pakai animasi GSAP dan Lottie buat UN Environment Programme.",
            en: "A story that unfolds as you scroll down, brought to life with GSAP and Lottie animations for the UN Environment Programme.",
        },
        stack: ["Next.js", "React.js", "GSAP", "Lottie"],
        accent: "sage",
    },
    {
        name: "Earth Hour",
        client: "WWF",
        url: "https://www.earthhour.org/",
        contribution: {
            id: "Pengembangan front-end dan seluruh animasi di halaman.",
            en: "Front-end development and all the on-page animation.",
        },
        description: {
            id: "Situs kampanye global WWF yang animasinya halus tapi tetap ringan dibuka.",
            en: "WWF's global campaign site, with smooth animation that still stays light to load.",
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
            en: "Built the entire animated site from scratch.",
        },
        description: {
            id: "Website beranimasi buat gerakan kurangi sampah plastik. Ini proyek internal yang saya garap sendiri.",
            en: "An animated site for a movement to cut plastic waste. This was an internal project I took on myself.",
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
            en: "Built the front-end together with its narrative animation.",
        },
        description: {
            id: "Portal Just Energy Transition Partnership yang menjelaskan transisi energi lewat animasi yang mengalir.",
            en: "The Just Energy Transition Partnership portal that walks you through the energy transition with flowing animation.",
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
            id: "Pengembangan front-end dengan animasi dan interaksi yang terukur.",
            en: "Front-end development with measured motion and interactions.",
        },
        description: {
            id: "Situs korporat di bidang sustainable finance yang animasi dan interaksinya dibuat secukupnya, biar tetap terasa serius.",
            en: "A corporate site in sustainable finance, where the animation and interactions are kept just enough to still feel serious.",
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
            id: "Situs konservasi yang saya rakit dengan REST API dan Redux, lengkap dengan dukungan PWA dan SEO yang sudah dirapikan.",
            en: "A conservation site I put together with a REST API and Redux, plus PWA support and SEO that's been tidied up.",
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
            id: "Dashboard peta internal WWF berbasis ArcGIS untuk memvisualisasikan data konservasi secara interaktif.",
            en: "An internal ArcGIS map dashboard for WWF that visualizes conservation data interactively.",
        },
        stack: ["Next.js", "Redux", "TailwindCSS", "REST API", "ArcGIS", "JavaScript"],
        accent: "sage",
    },
    {
        name: "RKCMPD ERIA",
        client: "ERIA",
        url: "https://rkcmpd-eria.org/",
        contribution: {
            id: "Membangun versi kedua situs dengan interaksi web yang lebih hidup.",
            en: "Built the second version of the site with more lively web interactions.",
        },
        description: {
            id: "Situs profil organisasi RKCMPD ERIA. Saya menggarap versi keduanya dengan interaksi yang lebih kaya.",
            en: "The organizational profile site of RKCMPD ERIA. I built its second version with richer interactions.",
        },
        stack: ["Laravel", "TailwindCSS", "JavaScript"],
        accent: "mist",
    },
    {
        name: "SEA-MAP",
        client: "ERIA",
        url: "https://sea-map.staging.catalyze.id/",
        contribution: {
            id: "Membangun seluruh interaksi website dari nol.",
            en: "Built the entire website interaction from zero.",
        },
        description: {
            id: "Mendukung implementasi ASEAN Regional Action Plan lewat pertukaran pengetahuan, penguatan kapasitas, dialog kebijakan, dan kemitraan lintas sektor untuk mempercepat aksi terkoordinasi menangani polusi plastik laut di ASEAN.",
            en: "Supporting the ASEAN Regional Action Plan by strengthening knowledge exchange, capacity building, policy dialogues, and cross-sector partnerships to accelerate coordinated action on marine plastic pollution across ASEAN.",
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
            id: "Kinly adalah platform yang dirancang untuk membangun kebiasaan baik dalam keluarga. Aplikasi ini membantu anak-anak menjadi lebih disiplin dan mandiri melalui pendekatan yang menyenangkan, sekaligus memberikan kemudahan bagi orang tua untuk mengarahkan anak tanpa effort yang melelahkan.",
            en: "Kinly is a family-oriented platform dedicated to building positive habits. It is designed to foster discipline and independence in children while minimizing the effort and stress for parents in guiding them.",
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
