export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  videoUrl?: string;
}

export const blogs: BlogPost[] = [
  {
    slug: "micro-frontends-modular-strategy",
    title: "Micro-Frontends: Why Your Next Big Project Needs a Modular Strategy",
    excerpt: "Exploring how to scale large frontend applications using micro-frontend architecture without losing sanity.",
    date: "Jan 2025",
    readTime: "12 min",
    category: "Architecture",
    content: `
      Frontend development ekhon ar shudhu UI banano noy, eta ekhon full-blown engineering. Amar experience theke bolchi, jokhon ekta project-e 20-30 jon developer kaj kore, tokhon 'Monolithic Frontend' ekta nightmare hoye daray. Ekhanei ashe **Micro-Frontends**.

      ### 1. What is Micro-Frontend?
      Shohoj kothay bolte gele, micro-frontend hocche back-end-er microservices-er motoi. Pura frontend-ta-ke choto choto, independent piece-e vag kora, jate prottekta team nijeder feature-e kaj korte pare independently. 

      ### 2. Why we should use it in Bangladesh?
      Amader deshe ekhon onek boro boro enterprise SaaS ar Fintech apps hocche. Ei shob apps scalability kkhub gorutto-purno. Micro-frontend use korle:
      - **Technology Agnostic**: Ekta part React-e thakle arekta Vue-te thaka somvob (jodio ami suggest kori na).
      - **Independent Deployments**: Apnar 'Payment' module-e bug thakle 'Product List' module-er deploy atkabe na.
      - **Team Autonomy**: Prottekta team nijeder code-base-er owner.

      ### 3. Implementation Strategies
      Onek vabe implement kora jay, kintu amar favorite hocche **Module Federation** (Webpack 5 feature). Eta dynamically code share korte help kore. Arekta option hocche **Single SPA**, jeta ektu complex holeo besh powerful.

      ### Final Thoughts
      Micro-frontend shob jaygay dorkar nai. Choto ba medium project-er jonno eta over-engineering. Kintu jokhon apnar team boro hoye jabe ar project complex hobe, tokhon eta chara scaling somvob noy.
    `,
    videoUrl: "https://www.youtube.com/embed/boost-portfolio"
  },
  {
    slug: "mastering-react-server-components",
    title: "Mastering React Server Components (RSC): A Deep Dive into the Future",
    excerpt: "React Server Components are changing the rules of the game. Let's understand how they work under the hood.",
    date: "Dec 2024",
    readTime: "10 min",
    category: "Next.js",
    content: `
      Next.js 13+ platform-e RSC ashar por amader development-er dhoron change hoye geche. Beshirvag developer-i RSC ar Client Components-er moddhe confusion create kore. 

      ### 1. Server vs Client: The Boundary
      RSC mane hocche component-ta server-e render hobe ar Client-e shudhu JSON serialization data ashbe. Client components-e amra 'use client' likhi, main difference hocche inter-activity.

      ### 2. Performance Benefits
      RSC-er main goal hocche zero bundle size impact. Apnay jotoy boro library (like Zod ba Moment.js) server-e use koren, client-er package size barve na. Bangladesh-er moto deshe jekhane internet speed fluctuate kore, sekhane ei bundle size optimization khub dorkar.

      ### 3. Best Practices
      - **Keep State at the Leaves**: State-ke jotota niche rakha jay totota valo.
      - **Data Fetching in Server**: Database call ba API fetch direct Server component-e kora uchit.
      
      Next.js ekhon industry standard. Apni jodi pro-level frontend developer hote chan, RSC explore kora must.
    `
  },
  {
    slug: "high-performance-animations",
    title: "The Art of High-Performance Animations: Frame-by-Frame Optimization",
    excerpt: "Animations can make or break your UX. Learn how to achieve 60fps smoothness in complex web apps.",
    date: "Nov 2024",
    readTime: "8 min",
    category: "UX/UI",
    content: `
      Web animation dekhte sundor holeo, poorly implement korle eta site-ke slow kore dey. Smooth 60fps animation pawa eto shohoj noy. 

      ### 1. Browser Rendering Pipeline
      Browser-e jokhon animation chole, tokhon 4-ta step thake: Layout, Paint, Composite ar GPU acceleration. Amra jodi 'top/left' change kori, browser layout recalculate kore - jeta khub expensive.

      ### 2. Transform ar Opacity
      Sobshomoy chesta korben **transform** ar **opacity** property use korte. Ei gulo GPU-te execute hoy, tai animation smoother thake. Framer Motion ba GSAP-er moto library gulo internally egulo optimization-e help kore.

      ### 3. Layout Thrashing avoid korun
      JavaScript loop-er vitor layout properties read/write korle performance-e dhom neme ashe. Eta theke bachar jonno **requestAnimationFrame** use kora standard practice.

      ### Final Thoughts
      Animation hobe subtle ar meaningful. 'Flashy' animation-er cheye 'Smooth' animation user-ke beshi engage kore.
    `
  },
  {
    slug: "react-clean-code-best-practices",
    title: "React Clean Code: Writing Maintenance-Friendly Components",
    excerpt: "Learn how to write clean, reusable, and maintainable React components that your future self will thank you for.",
    date: "Feb 2025",
    readTime: "15 min",
    category: "Best Practices",
    content: `
      Code lekha shohoj, kintu clean code lekha kothin. Amar career-er shuru te ami-o messy code likhtam, kintu boro project-e kaj korte giye bujhechi 'Clean Code' keno dorkar. 

      ### 1. Component Responsibility (SRP)
      Ekta component shudhu ekta kaj-i kora uchit. Apnar jodi mone hoy ekta component boro hoye jacche, sheta-ke choto choto sub-component-e vag korun. Eta testing ar maintenance-e khub help kore.

      ### 2. Meaningful Naming
      Variable ar function-er nam hobe self-explanatory. \`const data = ...\` na likhe \`const userData = ...\` likhun. Naming-er khetre kono compromise kora jabe na.

      ### 3. Custom Hooks use korun
      Logic ar UI-ke alada kora clean code-er arekta boro shoto. Component-er vitor boro boro \`useEffect\` ba complex state handling na kore, segulo-ke Custom Hook-e move korun.

      ### Final Thoughts
      Clean code mane ei noy jeta shudhu computer bujhe, baru eta hobe emon jeta onno developer-ra shohoje bujhতে pare. Code hobe 'Readable' ar 'Scalable'.
    `
  }
];
