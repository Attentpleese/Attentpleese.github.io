// Edit this file to update text, numbers, links, cases, media paths and theme colors.
// Put files inside public/media/... and use paths like "/media/reels/example.mp4".
const emptyMedia = {
  type: "video",
  preview: "",
  embedUrl: "",
  thumbnail: "",
  statsImage: "",
  originalUrl: "",
  showOriginalUrl: false
};

const withBase = path => path?.startsWith("/media/") ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;
const makeMedia = overrides => {
  const media = { ...emptyMedia, ...overrides };
  for (const key of ["preview", "thumbnail", "statsImage"]) media[key] = withBase(media[key]);
  return media;
};

export const portfolioData = {
  defaultLanguage: "en",
  theme: {
    background: "#050505",
    surface: "#101113",
    cardBackground: "#15171a",
    text: "#ffffff",
    mutedText: "#a1a1aa",
    accent: "#d6ff3f",
    accentSoft: "rgba(214, 255, 63, 0.12)",
    border: "rgba(255,255,255,0.12)",
    font: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
  },
  languages: {
    en: {
      nav: {
        brand: "Sports Creator",
        work: "Work",
        process: "Process",
        performance: "Performance",
        skills: "Skills",
        about: "About",
        contact: "Contact"
      },
      hero: {
        kicker: "FOOTBALL SHORT-FORM CONTENT & MATCHDAY MOTION",
        title: "Sports Content Creator & Video Editor",
        subtitle: "I turn sports moments into short-form videos, matchday visuals and motion content - from idea, hook and script to editing, CTA integration and publishing.",
        primaryButton: "View Work",
        secondaryButton: "Contact",
        showreelLabel: "Showreel coming soon",
        media: makeMedia({})
      },
      stats: [
        { value: "70M+", label: "Total Reels Views" },
        { value: "4.8M", label: "Views on One Reel" },
        { value: "200K", label: "Shares on Viral Content" },
        { value: "952K", label: "Views From One Matchday Trip" }
      ],
      work: {
        kicker: "Selected Work",
        title: "Selected Work",
        subtitle: "A selection of sports content projects across short-form video, stadium LED screens, matchday motion, sponsor integrations and branded community assets.",
        viewCase: "View case",
        roleLabel: "Role",
        resultLabel: "Result"
      },
      cases: [
        {
          title: "Sensitive Football News Reel",
          category: "Football News / Reels",
          description: "A sensitive football news story turned into a short-form video with emotional pacing and clear editorial structure.",
          role: "Text / Edit / Story Packaging",
          result: "2.5M views, 12K+ hours of watch time, 887 new followers",
          context: "A South African national team player became the center of a tragic football news story after returning from the World Cup.",
          contentAngle: "Instead of presenting the story as a sensational headline, I focused on a respectful, emotional and news-driven angle.",
          execution: "I wrote the on-screen text, structured the story for short-form viewing and edited the video with a serious emotional rhythm.",
          learning: "Sensitive sports stories can perform strongly when handled with clarity, emotional restraint and respect.",
          previewLabel: "Sensitive news preview",
          metrics: ["2.5M views", "12K+ watch hours", "887 new followers"],
          media: makeMedia({ statsImage: "/media/stats/sensitive-football-news.jpg" })
        },
        {
          title: "Legacy Sports Story Reel",
          category: "Sports Storytelling / TikTok",
          description: "A historic sports achievement turned into an emotional short-form story about legacy, memory and continuity.",
          role: "Idea / Text / Edit / Story Angle",
          result: "819K views, 87K likes, 3.1K shares, 440 new followers",
          context: "Mikhail Shaidorov won a historic first Olympic gold for Kazakhstan in figure skating at the 2026 Winter Olympics.",
          contentAngle: "I focused on the emotional connection between generations, the memory of Denis Ten and a new Kazakh athlete continuing the legacy.",
          execution: "The reel used a nostalgic narrative, connecting past and present through text, pacing and music.",
          learning: "Sports content performs strongly when a historic result connects to memory, legacy and local emotion.",
          previewLabel: "Legacy story preview",
          metrics: ["819K views", "87K likes", "3.1K shares"],
          media: makeMedia({ statsImage: "/media/stats/legacy-sports-story.jpg" })
        },
        {
          title: "Matchday Content Trip",
          category: "Matchday / TikTok + Instagram",
          description: "A fast production trip built around matchday atmosphere, fan details and live publishing.",
          role: "Shooting / Edit / Publishing",
          result: "952K views from 16 videos",
          context: "A matchday trip created a limited time window to capture, edit and publish relevant content while the event was still alive.",
          contentAngle: "The focus was on atmosphere, travel details, fans and quick emotional moments rather than only match highlights.",
          execution: "I filmed on location, selected moments quickly, edited short vertical videos and published them in a steady rhythm.",
          learning: "Matchday content works best when speed, authenticity and editorial selection stay balanced.",
          previewLabel: "Matchday preview",
          metrics: ["952K views", "16 videos", "Live production"],
          media: makeMedia({ preview: "/media/reels/matchday-content-trip.mp4", thumbnail: "/media/reels/matchday-content-trip.jpg", statsImage: "/media/stats/matchday-content-trip.jpg" })
        },
        {
          title: "Viral Football Edit",
          category: "Reels / TikTok / Shorts",
          description: "An emotional football edit shaped around a quick hook, fan feeling and shareable rhythm.",
          role: "Idea / Hook / Text / Edit / Motion",
          result: "4.8M views and 200K shares",
          context: "A football moment had strong emotional potential but needed a format that viewers could understand instantly.",
          contentAngle: "I built the edit around one clear fan emotion and made the first seconds easy to read.",
          execution: "The edit combined concise on-screen text, fast cuts, music timing and motion accents.",
          learning: "A simple emotional angle can turn a moment into content that travels beyond the original audience.",
          previewLabel: "Viral reel preview",
          metrics: ["4.8M views", "200K shares", "Short-form"],
          media: makeMedia({ preview: "/media/reels/viral-football-edit.mp4", thumbnail: "/media/reels/viral-football-edit.jpg", statsImage: "/media/stats/viral-football-edit.jpg" })
        },
        {
          title: "Stadium LED Animation",
          category: "LED / Matchday Motion",
          description: "Motion content for stadium screens with readable timing, club-safe energy and clear hierarchy.",
          role: "Motion Design / LED Adaptation",
          result: "Matchday-ready motion asset",
          context: "Stadium screens need visuals that are readable from distance and feel aligned with the matchday environment.",
          contentAngle: "The goal was to keep energy high without making the design too noisy for official club communication.",
          execution: "I built a clean motion sequence with bold timing, simple structure and strong contrast.",
          learning: "LED motion needs fewer elements, stronger rhythm and clearer hierarchy than standard social content.",
          previewLabel: "LED animation preview",
          metrics: ["LED screen", "Motion design", "Club-safe"],
          media: makeMedia({ preview: "/media/led/stadium-led-animation.mp4", thumbnail: "/media/led/stadium-led-animation.jpg" })
        },
        {
          title: "Countdown To Match",
          category: "Countdown / Motion",
          description: "A match countdown asset designed for social and matchday use with a clean premium sports feel.",
          role: "Design / Animation / Format Adaptation",
          result: "Reusable countdown motion template",
          context: "Clubs and media teams need repeatable pre-match assets that can be adapted quickly.",
          contentAngle: "The countdown needed to feel energetic, but simple enough to update for different games.",
          execution: "I designed a flexible layout, animated the timing and prepared it for future matchday updates.",
          learning: "Reusable systems help sports teams publish faster while keeping a consistent visual identity.",
          previewLabel: "Countdown preview",
          metrics: ["Countdown", "Template", "Matchday"],
          media: makeMedia({ preview: "/media/countdown/countdown-to-match.mp4", thumbnail: "/media/countdown/countdown-to-match.jpg" })
        },
        {
          title: "Sponsor CTA Integration",
          category: "Sponsor CTA / Brand Integration",
          description: "Animated CTA elements integrated into sports content without breaking the native feel.",
          role: "Motion Design / CTA / Product Placement",
          result: "Sponsor visibility inside social-first content",
          context: "Sponsor elements need attention, but they should not interrupt the content experience.",
          contentAngle: "I treated the CTA as part of the edit rhythm instead of a separate ad layer.",
          execution: "I designed animated stickers and graphic accents that stayed readable while matching the pacing.",
          learning: "Sponsor content works better when the CTA supports the story and respects the audience experience.",
          previewLabel: "CTA preview",
          metrics: ["Sponsor CTA", "Motion sticker", "Brand integration"],
          media: makeMedia({ preview: "/media/cta/sponsor-cta-integration.mp4", thumbnail: "/media/cta/sponsor-cta-integration.jpg" })
        },
        {
          title: "Branded Telegram Emojis",
          category: "Community Assets / Motion",
          description: "Animated branded reactions for Telegram, created for visual style and daily community communication.",
          role: "Emoji Design / Animation / Brand System",
          result: "Branded micro-assets for digital fan communication",
          context: "Sports communities need small branded visual elements that fans can use in everyday conversations.",
          contentAngle: "The emojis had to feel native to Telegram while keeping the brand style visible.",
          execution: "I designed and animated emoji assets for reactions, emotions and community communication.",
          learning: "Small branded assets can support the culture of a digital sports community.",
          previewLabel: "Emoji preview",
          metrics: ["Telegram", "Emoji assets", "Community"],
          media: makeMedia({ preview: "/media/emojis/branded-telegram-emojis.mp4", thumbnail: "/media/emojis/branded-telegram-emojis.jpg" })
        }
      ],
      process: {
        kicker: "Process",
        title: "How I create sports content",
        subtitle: "From a sports moment to a published short-form video, matchday asset or motion piece.",
        steps: [
          "Find the moment - news, matchday, player story or fan reaction",
          "Define the angle - why fans should care",
          "Build the hook - first seconds, text and emotional promise",
          "Edit the rhythm - music, cuts, captions and pacing",
          "Add motion / CTA - sponsor sticker, graphic accent or call to action",
          "Adapt the format - Reels, TikTok, LED, Telegram or matchday screen",
          "Learn from performance - views, shares, saves, comments and retention"
        ]
      },
      performance: {
        kicker: "Performance",
        title: "Performance Highlights",
        subtitle: "Selected numbers from short-form sports content.",
        rows: [
          { project: "Sensitive Football News Reel", platform: "TikTok", views: "2.5M views", extra: "12K+ watch hours", role: "Text / Edit" },
          { project: "Legacy Sports Story Reel", platform: "TikTok", views: "819K views", extra: "87K likes", role: "Idea / Text / Edit" },
          { project: "Matchday Content Trip", platform: "TikTok + Instagram", views: "952K views", extra: "16 videos", role: "Shooting / Edit / Publishing" },
          { project: "Total Reels Performance", platform: "Instagram / TikTok", views: "70M+ total views", extra: "Multiple formats", role: "Content creation / editing" }
        ]
      },
      skills: {
        kicker: "Skills",
        title: "A focused toolkit for social-first sports content.",
        groups: [
          { title: "Content", items: ["Sports storytelling", "Football short-form video", "Viral hooks", "News-to-content formats", "Matchday content", "Social media packaging"] },
          { title: "Video & Motion", items: ["Premiere Pro", "After Effects", "Reels editing", "Captions", "Motion graphics", "CTA stickers", "LED screen animation"] },
          { title: "Design & Visuals", items: ["Photoshop", "Figma", "Sports graphics", "Posters", "AI visual direction", "Social media visuals"] },
          { title: "Workflow", items: ["Fast production", "Publishing", "Performance analysis", "Automation mindset", "Content systems"] }
        ],
        clubSafe: {
          kicker: "Official-ready",
          title: "Fan emotion. Club-safe execution.",
          text: "I understand the difference between viral fan content and official club communication. My goal is to create content that feels alive, but still respects brand tone, player image, sponsor visibility and media standards.",
          cards: ["Matchday storytelling", "Player-focused content", "Sponsor-friendly CTA", "Brand-safe editing"]
        }
      },
      about: {
        kicker: "About",
        heading: "I create sports content built around emotion, speed and performance.",
        paragraphs: [
          "I am a sports content creator, video editor and motion designer from Kazakhstan. I work across the full short-form content cycle: idea, hook, script, edit, motion graphics, CTA integration, publishing and performance analysis.",
          "My strongest side is turning sports moments into content that fans can understand quickly, feel emotionally and share with others.",
          "I also create motion assets for matchday environments: LED screens, countdowns, branded animations and community assets such as Telegram emojis.",
          "My goal is to join an international football club, sports media company or creative team where I can help create social-first and matchday content for a global sports audience."
        ]
      },
      contact: {
        kicker: "Contact",
        heading: "Available for football clubs, sports media and creative teams.",
        text: "For collaborations, portfolio review or job opportunities, feel free to contact me.",
        email: "daukabdy@gmail.com",
        contactButton: "Contact me",
        links: [
          { label: "Email", value: "daukabdy@gmail.com", url: "mailto:daukabdy@gmail.com" },
          { label: "LinkedIn", value: "placeholder", url: "#" },
          { label: "Instagram", value: "placeholder", url: "#" },
          { label: "Telegram", value: "placeholder", url: "#" },
          { label: "Behance", value: "behance.net/daukadauka", url: "https://www.behance.net/daukadauka" }
        ]
      },
      modal: {
        kicker: "Case study",
        shortDescription: "Short description",
        role: "Role",
        result: "Result",
        context: "Context",
        contentAngle: "Content angle",
        execution: "Execution",
        learning: "Learning",
        originalPost: "Original post",
        originalOnRequest: "Original post available on request",
        statsImageAlt: "Performance screenshot",
        close: "Close case"
      },
      footer: "Sports content creator / video editor / motion designer"
    },
    ru: {
      nav: {
        brand: "Sports Creator",
        work: "Работы",
        process: "Процесс",
        performance: "Результаты",
        skills: "Навыки",
        about: "О себе",
        contact: "Контакты"
      },
      hero: {
        kicker: "ФУТБОЛЬНЫЙ SHORT-FORM КОНТЕНТ И MATCHDAY MOTION",
        title: "Sports Content Creator & Video Editor",
        subtitle: "Я превращаю спортивные моменты в short-form видео, matchday-визуалы и motion-контент: от идеи, хука и текста до монтажа, CTA-интеграции и публикации.",
        primaryButton: "Смотреть работы",
        secondaryButton: "Связаться",
        showreelLabel: "Showreel скоро будет",
        media: makeMedia({})
      },
      stats: [
        { value: "70M+", label: "просмотров Reels" },
        { value: "4.8M", label: "просмотров на одном ролике" },
        { value: "200K", label: "репостов на вирусном контенте" },
        { value: "952K", label: "просмотров за одну матчевую поездку" }
      ],
      work: {
        kicker: "Избранные работы",
        title: "Избранные работы",
        subtitle: "Подборка спортивных проектов для short-form видео, стадионных LED-экранов, matchday-анимации, sponsor-интеграций и брендированных элементов для комьюнити.",
        viewCase: "Смотреть кейс",
        roleLabel: "Моя роль",
        resultLabel: "Результат"
      },
      cases: [
        {
          title: "Sensitive Football News Reel",
          category: "Football News / Reels",
          description: "Чувствительный футбольный инфоповод, упакованный в short-form видео с эмоциональным темпом и понятной новостной структурой.",
          role: "Текст / Монтаж / Упаковка истории",
          result: "2.5M просмотров, 12K+ часов просмотра, 887 новых подписчиков",
          context: "Игрок сборной ЮАР оказался в центре трагичной футбольной новости после возвращения с Чемпионата мира.",
          contentAngle: "Я выбрал уважительный, эмоциональный и новостной угол, чтобы зритель быстро понял суть и почувствовал человеческую сторону события.",
          execution: "Я написал экранный текст, выстроил структуру под short-form формат и смонтировал ролик в серьезном эмоциональном ритме.",
          learning: "Чувствительные спортивные истории могут сильно работать, если подавать их ясно, сдержанно и уважительно.",
          previewLabel: "Превью новостного ролика",
          metrics: ["2.5M просмотров", "12K+ часов", "887 подписчиков"],
          media: makeMedia({ statsImage: "/media/stats/sensitive-football-news.jpg" })
        },
        {
          title: "Legacy Sports Story Reel",
          category: "Sports Storytelling / TikTok",
          description: "Историческое спортивное достижение, превращенное в emotional short-form историю о памяти, наследии и преемственности.",
          role: "Идея / Текст / Монтаж / Угол подачи",
          result: "819K просмотров, 87K лайков, 3.1K репостов, 440 новых подписчиков",
          context: "Михаил Шайдоров выиграл историческое первое золото для Казахстана в фигурном катании на зимней Олимпиаде 2026.",
          contentAngle: "Я сделал акцент на связи поколений: памяти о Денисе Тене и новой истории казахстанского спортсмена.",
          execution: "Ролик был построен в ностальгическом и эмоциональном тоне, где текст и монтаж связывали прошлое и настоящее.",
          learning: "Спортивный контент сильнее работает, когда результат связан с памятью, наследием и локальной эмоцией.",
          previewLabel: "Превью legacy-истории",
          metrics: ["819K просмотров", "87K лайков", "3.1K репостов"],
          media: makeMedia({ statsImage: "/media/stats/legacy-sports-story.jpg" })
        },
        {
          title: "Matchday Content Trip",
          category: "Matchday / TikTok + Instagram",
          description: "Матчевая поездка с быстрым производством контента вокруг атмосферы, фанатских деталей и live-публикации.",
          role: "Съемка / Монтаж / Публикация",
          result: "952K просмотров из 16 видео",
          context: "Матчевая поездка дала короткое окно для съемки, монтажа и публикации актуального контента.",
          contentAngle: "Фокус был на атмосфере, дороге, фанатах и быстрых эмоциональных моментах, а не только на хайлайтах.",
          execution: "Я снимал на месте, быстро выбирал моменты, монтировал вертикальные видео и публиковал их в стабильном ритме.",
          learning: "Matchday-контент работает лучше, когда скорость, живость и редакторский отбор остаются в балансе.",
          previewLabel: "Превью matchday-видео",
          metrics: ["952K просмотров", "16 видео", "Live production"],
          media: makeMedia({ preview: "/media/reels/matchday-content-trip.mp4", thumbnail: "/media/reels/matchday-content-trip.jpg", statsImage: "/media/stats/matchday-content-trip.jpg" })
        },
        {
          title: "Viral Football Edit",
          category: "Reels / TikTok / Shorts",
          description: "Эмоциональный футбольный эдит, построенный вокруг быстрого хука, фанатского ощущения и ритма для репостов.",
          role: "Идея / Хук / Текст / Монтаж / Motion",
          result: "4.8M просмотров и 200K репостов",
          context: "У футбольного момента был сильный эмоциональный потенциал, но ему нужна была мгновенно понятная упаковка.",
          contentAngle: "Я построил ролик вокруг одной ясной фанатской эмоции и сделал первые секунды максимально читаемыми.",
          execution: "Монтаж объединил короткий экранный текст, быстрые склейки, музыкальный тайминг и motion-акценты.",
          learning: "Простой эмоциональный угол может вынести момент далеко за пределы исходной аудитории.",
          previewLabel: "Превью вирусного ролика",
          metrics: ["4.8M просмотров", "200K репостов", "Short-form"],
          media: makeMedia({ preview: "/media/reels/viral-football-edit.mp4", thumbnail: "/media/reels/viral-football-edit.jpg", statsImage: "/media/stats/viral-football-edit.jpg" })
        },
        {
          title: "Stadium LED Animation",
          category: "LED / Matchday Motion",
          description: "Motion-контент для стадионных экранов с читаемым таймингом, клубной аккуратностью и чистой иерархией.",
          role: "Motion Design / LED Adaptation",
          result: "Matchday-ready motion asset",
          context: "Стадионным экранам нужны визуалы, которые читаются с расстояния и подходят к matchday-среде.",
          contentAngle: "Цель была сохранить энергию, но не перегрузить официальный клубный визуал.",
          execution: "Я собрал чистую motion-секвенцию с понятным ритмом, простой структурой и сильным контрастом.",
          learning: "LED-motion требует меньше элементов, сильнее ритм и яснее иерархию, чем обычный social-контент.",
          previewLabel: "Превью LED-анимации",
          metrics: ["LED screen", "Motion design", "Club-safe"],
          media: makeMedia({ preview: "/media/led/stadium-led-animation.mp4", thumbnail: "/media/led/stadium-led-animation.jpg" })
        },
        {
          title: "Countdown To Match",
          category: "Countdown / Motion",
          description: "Match countdown asset для соцсетей и matchday-среды в чистом премиальном sports media стиле.",
          role: "Design / Animation / Format Adaptation",
          result: "Reusable countdown motion template",
          context: "Клубам и медиа-командам нужны повторяемые pre-match ассеты, которые быстро адаптируются.",
          contentAngle: "Countdown должен был быть энергичным, но достаточно простым для обновления под разные матчи.",
          execution: "Я разработал гибкий layout, анимировал тайминг и подготовил систему для будущих матчевых обновлений.",
          learning: "Переиспользуемые системы помогают публиковать быстрее и сохранять единый визуальный стиль.",
          previewLabel: "Превью countdown",
          metrics: ["Countdown", "Template", "Matchday"],
          media: makeMedia({ preview: "/media/countdown/countdown-to-match.mp4", thumbnail: "/media/countdown/countdown-to-match.jpg" })
        },
        {
          title: "Sponsor CTA Integration",
          category: "Sponsor CTA / Brand Integration",
          description: "Анимированные CTA-элементы внутри спортивного контента без ощущения навязчивой рекламы.",
          role: "Motion Design / CTA / Product Placement",
          result: "Видимость бренда внутри social-first контента",
          context: "Спонсорским элементам нужно внимание, но они не должны ломать просмотр.",
          contentAngle: "Я рассматривал CTA как часть монтажного ритма, а не как отдельный рекламный слой.",
          execution: "Я сделал анимированные стикеры и графические акценты, которые читаются и совпадают с темпом.",
          learning: "Sponsor content работает лучше, когда CTA поддерживает историю и уважает опыт аудитории.",
          previewLabel: "Превью CTA",
          metrics: ["Sponsor CTA", "Motion sticker", "Brand integration"],
          media: makeMedia({ preview: "/media/cta/sponsor-cta-integration.mp4", thumbnail: "/media/cta/sponsor-cta-integration.jpg" })
        },
        {
          title: "Branded Telegram Emojis",
          category: "Community Assets / Motion",
          description: "Анимированные брендированные реакции для Telegram-канала, созданные для визуального стиля и общения с аудиторией.",
          role: "Emoji Design / Animation / Brand System",
          result: "Брендированные micro-assets для digital fan communication",
          context: "Спортивным комьюнити нужны маленькие брендированные визуальные элементы для ежедневного общения.",
          contentAngle: "Эмодзи должны были ощущаться нативно для Telegram и при этом сохранять брендовый стиль.",
          execution: "Я разработал и анимировал emoji-assets для реакций, эмоций и коммуникации внутри комьюнити.",
          learning: "Маленькие брендированные элементы поддерживают культуру digital-комьюнити.",
          previewLabel: "Превью emoji",
          metrics: ["Telegram", "Emoji assets", "Community"],
          media: makeMedia({ preview: "/media/emojis/branded-telegram-emojis.mp4", thumbnail: "/media/emojis/branded-telegram-emojis.jpg" })
        }
      ],
      process: {
        kicker: "Процесс",
        title: "Как я создаю спортивный контент",
        subtitle: "От спортивного момента до опубликованного short-form видео, matchday-ассета или motion-ролика.",
        steps: [
          "Нахожу момент - новость, матч, история игрока или реакция фанатов",
          "Определяю угол - почему это должно зацепить аудиторию",
          "Собираю хук - первые секунды, текст и эмоциональное обещание",
          "Монтирую ритм - музыка, склейки, субтитры и темп",
          "Добавляю motion / CTA - стикер, графический акцент или call to action",
          "Адаптирую формат - Reels, TikTok, LED, Telegram или matchday screen",
          "Анализирую результат - просмотры, репосты, сохранения, комментарии и удержание"
        ]
      },
      performance: {
        kicker: "Результаты",
        title: "Результаты",
        subtitle: "Избранные цифры short-form спортивного контента.",
        rows: [
          { project: "Sensitive Football News Reel", platform: "TikTok", views: "2.5M просмотров", extra: "12K+ часов просмотра", role: "Текст / Монтаж" },
          { project: "Legacy Sports Story Reel", platform: "TikTok", views: "819K просмотров", extra: "87K лайков", role: "Идея / Текст / Монтаж" },
          { project: "Matchday Content Trip", platform: "TikTok + Instagram", views: "952K просмотров", extra: "16 видео", role: "Съемка / Монтаж / Публикация" },
          { project: "Total Reels Performance", platform: "Instagram / TikTok", views: "70M+ суммарных просмотров", extra: "Разные форматы", role: "Content creation / editing" }
        ]
      },
      skills: {
        kicker: "Навыки",
        title: "Фокусный набор навыков для social-first sports content.",
        groups: [
          { title: "Контент", items: ["Sports storytelling", "Футбольный short-form video", "Вирусные хуки", "News-to-content форматы", "Matchday-контент", "Social media packaging"] },
          { title: "Видео & Motion", items: ["Premiere Pro", "After Effects", "Монтаж Reels", "Субтитры", "Motion graphics", "CTA-стикеры", "LED screen animation"] },
          { title: "Дизайн & Visuals", items: ["Photoshop", "Figma", "Sports graphics", "Постеры", "AI visual direction", "Social media visuals"] },
          { title: "Workflow", items: ["Быстрое производство", "Публикация", "Анализ результата", "Automation mindset", "Content systems"] }
        ],
        clubSafe: {
          kicker: "Клубная коммуникация",
          title: "Фанатская эмоция. Клубная аккуратность.",
          text: "Я понимаю разницу между вирусным фанатским контентом и официальной коммуникацией клуба. Моя задача - делать живой контент, который при этом уважает tone of voice бренда, образ игроков, видимость спонсоров и медиа-стандарты.",
          cards: ["Matchday storytelling", "Контент про игроков", "Sponsor-friendly CTA", "Brand-safe монтаж"]
        }
      },
      about: {
        kicker: "О себе",
        heading: "Я создаю спортивный контент, построенный на эмоции, скорости и результате.",
        paragraphs: [
          "Я sports content creator, video editor и motion designer из Казахстана. Работаю с полным циклом short-form контента: идея, хук, текст, монтаж, motion-графика, CTA-интеграция, публикация и анализ результата.",
          "Моя сильная сторона - превращать спортивные моменты в контент, который быстро считывается, эмоционально цепляет и вызывает желание поделиться.",
          "Также я создаю motion-ассеты для matchday-среды: LED-экраны, countdown-анимации, брендированные ролики и элементы для комьюнити, например Telegram emojis.",
          "Моя цель - попасть в международный футбольный клуб, sports media company или creative team, где я смогу создавать social-first и matchday-контент для глобальной спортивной аудитории."
        ]
      },
      contact: {
        kicker: "Контакты",
        heading: "Открыт к футбольным клубам, sports media и creative teams.",
        text: "Для сотрудничества, просмотра портфолио или рабочих предложений можно связаться со мной.",
        email: "daukabdy@gmail.com",
        contactButton: "Связаться",
        links: [
          { label: "Email", value: "daukabdy@gmail.com", url: "mailto:daukabdy@gmail.com" },
          { label: "LinkedIn", value: "placeholder", url: "#" },
          { label: "Instagram", value: "placeholder", url: "#" },
          { label: "Telegram", value: "placeholder", url: "#" },
          { label: "Behance", value: "behance.net/daukadauka", url: "https://www.behance.net/daukadauka" }
        ]
      },
      modal: {
        kicker: "Кейс",
        shortDescription: "Короткое описание",
        role: "Моя роль",
        result: "Результат",
        context: "Инфоповод",
        contentAngle: "Угол подачи",
        execution: "Реализация",
        learning: "Вывод",
        originalPost: "Оригинальный пост",
        originalOnRequest: "Original post available on request",
        statsImageAlt: "Скриншот статистики",
        close: "Закрыть кейс"
      },
      footer: "Sports content creator / video editor / motion designer"
    }
  }
};
