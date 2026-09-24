export type Language = 'tr' | 'en' | 'ru';

export const translations = {
  tr: {
    nav: {
      academy: 'Akademi', programs: 'Programlar', shop: 'Video Mağazası', belts: 'Kuşaklar', contact: 'İletişim',
      trial: 'Deneme Dersi', menu: 'Menüyü aç', language: 'Dil seçimi', home: 'Roger Gracie Bursa ana sayfa',
    },
    hero: {
      aria: 'Roger Gracie Bursa giriş',
      kicker: 'BRAZILIAN JIU-JITSU · HER SEVİYEYE AÇIK',
      description: 'Tekniğin sakinliği, mücadelenin enerjisi. İlk adımını at; matta kendi ritmini bul.',
      primary: 'Ücretsiz Deneme', secondary: 'Programları Gör',
      values: 'DİSİPLİN · TEKNİK · TOPLULUK', discover: 'Keşfet',
    },
    quick: {
      aria: 'Hızlı bağlantılar', eyebrow: 'Matın çevresinde',
      description: 'Akademiyi, dersleri, video eğitimlerini ve BJJ yolculuğunu tek sayfada keşfet.',
      links: [
        { index: '01', label: 'Akademi', href: '#akademi' },
        { index: '02', label: 'Programlar', href: '#programlar' },
        { index: '03', label: 'Kuşak Yolu', href: '#kusaklar' },
        { index: '04', label: 'Ders Saatleri', href: '#program' },
        { index: '05', label: 'Video Mağazası', href: '#magaza' },
      ],
    },
    academy: {
      eyebrow: 'ROGER GRACIE BURSA yaklaşımı', title: 'Ego kapıda kalır. Gelişim matta başlar.',
      stats: [
        { value: '06', label: 'Kişilik sınıf grupları' },
        { value: '90', label: 'Dakikalık teknik seanslar' },
        { value: '01', label: 'Ortak gelişim kültürü' },
      ],
      badge: 'R.G. BURSA / 01', imageAlt: 'Roger Gracie Bursa Brazilian Jiu-Jitsu bannerı',
      cardEyebrow: 'Temel her şeydir', cardCopy: 'Duruş, disiplin ve tekrar; sağlam bir oyunun başlangıcı.',
    },
    programs: {
      eyebrow: 'Programlar', title: 'Her seviye için net bir yol.',
      intro: 'Dersler küçük gruplar, bol tekrar ve kontrollü canlı antrenman üzerine kurulur. Nereden başladığın değil, nasıl ilerlediğin önemlidir.',
      items: [
        { code: 'FND.01', title: 'FUNDAMENTALS', subtitle: 'Temelden başla', description: 'Pozisyon, denge, kaçış ve güvenli sparring. BJJ ile ilk kez tanışanlar için sağlam bir teknik zemin.', meta: 'Başlangıç · 60 dk' },
        { code: 'ALL.02', title: 'ALL LEVELS', subtitle: 'Akışı kur', description: 'Teknik zincirleri canlı antrenmanla birleştiren, her kuşaktan sporcunun birlikte geliştiği ana program.', meta: 'Tüm seviyeler · 90 dk' },
        { code: 'CMP.03', title: 'COMPETITION', subtitle: 'Sınırını test et', description: 'Maç temposu, strateji, kondisyon ve detaylı pozisyon analiziyle müsabakaya odaklanan yoğun seanslar.', meta: 'İleri seviye · 90 dk' },
      ],
    },
    shop: {
      eyebrow: 'Video mağazası', title: 'Tekniği durdur. Geri sar. Ustalaş.',
      intro: 'Mat dışında da çalışabilmen için hazırlanan, ömür boyu erişimli premium video eğitimleri. Satın alma ve ödeme için WhatsApp üzerinden bize ulaş.',
      deliveryNote: 'Ödeme sonrası erişim bilgileri WhatsApp’tan iletilir',
      priceLabel: 'Tek seferlik ödeme', buy: 'WhatsApp’tan Al',
      orderMessage: 'Merhaba, şu video eğitimini satın almak istiyorum:',
      items: [
        { code: 'VID.01', title: 'Guard Retention System', description: 'Guardını korumak, mesafe yaratmak ve baskı altında yeniden pozisyon almak için adım adım bir sistem.', meta: '12 ders · 2 sa 40 dk', level: 'Tüm seviyeler', price: '₺1.490' },
        { code: 'VID.02', title: 'Pressure Passing Blueprint', description: 'Rakibin guardını sabitle, ağırlığını doğru aktar ve yüksek yüzdeli geçiş zincirleri kur.', meta: '10 ders · 2 sa 05 dk', level: 'Orta seviye', price: '₺1.290' },
        { code: 'VID.03', title: 'Back Control & Finishes', description: 'Sırt kontrolünü kaybetmeden geçiş yapmayı ve güvenilir bitiriş kombinasyonlarını öğren.', meta: '8 ders · 1 sa 45 dk', level: 'Orta / İleri', price: '₺1.190' },
      ],
    },
    belts: {
      eyebrow: 'Kuşak yolculuğu', title: 'Renk değişir. Pratik kalır.',
      intro: 'Kuşak hedef değil, o ana kadar verdiğin emeğin kısa bir kaydıdır. Her renk başka bir soru sorar.',
      ariaSuffix: 'BJJ kuşağı',
      items: [
        { name: 'Beyaz', note: 'Merak', description: 'Temelleri öğren, doğru alışkanlıkları kur ve matta rahat etmeye başla.' },
        { name: 'Mavi', note: 'Bağlantı', description: 'Pozisyonları birbirine bağla; savunmadan atağa kendi oyununu geliştir.' },
        { name: 'Mor', note: 'Yaratıcılık', description: 'Detayları kişiselleştir, ritmi yönet ve tekniğini farklı bedenlere uyarla.' },
        { name: 'Kahverengi', note: 'Keskinlik', description: 'Fazlalıkları bırak; zamanlama, baskı ve verimlilikle oyunu sadeleştir.' },
        { name: 'Siyah', note: 'Derinlik', description: 'Ustalığı bir son değil, öğrenmenin daha dürüst bir başlangıcı olarak gör.' },
      ],
    },
    schedule: {
      eyebrow: 'Haftalık program', title: 'Rutinini seç. Matta buluşalım.',
      note: 'Program örnektir; salonun gerçek saatleriyle kolayca güncellenebilir.',
      items: [
        { day: 'Pazartesi', sessions: ['07:30 FUNDAMENTALS', '19:00 ALL LEVELS'] },
        { day: 'Salı', sessions: ['12:30 OPEN MAT', '20:00 ALL LEVELS'] },
        { day: 'Çarşamba', sessions: ['07:30 FUNDAMENTALS', '19:00 COMPETITION'] },
        { day: 'Perşembe', sessions: ['12:30 FUNDAMENTALS', '20:00 ALL LEVELS'] },
        { day: 'Cuma', sessions: ['18:30 ALL LEVELS', '20:00 OPEN MAT'] },
        { day: 'Cumartesi', sessions: ['11:00 FUNDAMENTALS', '12:30 OPEN MAT'] },
      ],
    },
    contact: {
      eyebrow: 'İlk adım / şimdi', title: 'İlk dersini', outline: 'planla.',
      description: 'Deneme dersine katıl, salonu ve ekibi tanı. Gi’n yoksa sorun değil; ilk ders için gereken her şeyi birlikte planlarız.',
      whatsapp: "WhatsApp'tan Yaz", instagram: 'Instagram', soon: 'Yakında',
    },
    whatsappWidget: {
      regionLabel: 'WhatsApp iletişim alanı', open: 'Bize ulaşın', close: 'WhatsApp penceresini kapat',
      title: 'Nasıl yardımcı olabiliriz?',
      description: "Dersler, program ve deneme antrenmanı hakkında bilgi almak için bize WhatsApp'tan yazın.",
      cta: "WhatsApp'ta konuş", note: 'Bağlantı yeni sekmede açılır',
    },
    footer: { top: 'Yukarı dön', instagram: 'Instagram · Yakında', discipline: 'BRAZILIAN JIU-JITSU' },
  },
  en: {
    nav: {
      academy: 'Academy', programs: 'Programs', shop: 'Video Shop', belts: 'Belts', contact: 'Contact',
      trial: 'Trial Class', menu: 'Open menu', language: 'Language', home: 'Roger Gracie Bursa home',
    },
    hero: {
      aria: 'Roger Gracie Bursa introduction', kicker: 'BRAZILIAN JIU-JITSU · OPEN TO ALL LEVELS',
      description: 'The calm of technique, the energy of the fight. Take your first step and find your rhythm on the mat.',
      primary: 'Free Trial', secondary: 'View Programs', values: 'DISCIPLINE · TECHNIQUE · COMMUNITY', discover: 'Explore',
    },
    quick: {
      aria: 'Quick links', eyebrow: 'Around the mat', description: 'Discover the academy, classes, video courses and your BJJ journey on one page.',
      links: [
        { index: '01', label: 'Academy', href: '#akademi' },
        { index: '02', label: 'Programs', href: '#programlar' },
        { index: '03', label: 'Belt Journey', href: '#kusaklar' },
        { index: '04', label: 'Class Times', href: '#program' },
        { index: '05', label: 'Video Shop', href: '#magaza' },
      ],
    },
    academy: {
      eyebrow: 'The Roger Gracie Bursa approach', title: 'Leave the ego at the door. Growth starts on the mat.',
      stats: [
        { value: '06', label: 'Small training groups' },
        { value: '90', label: 'Minute technical sessions' },
        { value: '01', label: 'Shared growth culture' },
      ],
      badge: 'R.G. BURSA / 01', imageAlt: 'Roger Gracie Bursa Brazilian Jiu-Jitsu banner',
      cardEyebrow: 'Basics are everything', cardCopy: 'Posture, discipline and repetition: the start of a solid game.',
    },
    programs: {
      eyebrow: 'Programs', title: 'A clear path for every level.',
      intro: 'Classes are built around small groups, focused repetition and controlled live training. Where you start matters less than how you progress.',
      items: [
        { code: 'FND.01', title: 'FUNDAMENTALS', subtitle: 'Start with the basics', description: 'Position, balance, escapes and safe sparring. A solid technical base for anyone meeting BJJ for the first time.', meta: 'Beginner · 60 min' },
        { code: 'ALL.02', title: 'ALL LEVELS', subtitle: 'Build your flow', description: 'Our core program connects technical chains with live training and brings every belt level together.', meta: 'All levels · 90 min' },
        { code: 'CMP.03', title: 'COMPETITION', subtitle: 'Test your limits', description: 'High-intensity sessions focused on match pace, strategy, conditioning and detailed positional analysis.', meta: 'Advanced · 90 min' },
      ],
    },
    shop: {
      eyebrow: 'Video shop', title: 'Pause the technique. Rewind. Master it.',
      intro: 'Premium video courses with lifetime access, made for training beyond the mat. Contact us on WhatsApp to purchase and arrange payment.',
      deliveryNote: 'Access details are sent on WhatsApp after payment',
      priceLabel: 'One-time payment', buy: 'Buy on WhatsApp',
      orderMessage: 'Hello, I would like to purchase this video course:',
      items: [
        { code: 'VID.01', title: 'Guard Retention System', description: 'A step-by-step system for protecting your guard, creating distance and recovering position under pressure.', meta: '12 lessons · 2 hr 40 min', level: 'All levels', price: '₺1,490' },
        { code: 'VID.02', title: 'Pressure Passing Blueprint', description: 'Pin the guard, transfer your weight correctly and build high-percentage passing chains.', meta: '10 lessons · 2 hr 05 min', level: 'Intermediate', price: '₺1,290' },
        { code: 'VID.03', title: 'Back Control & Finishes', description: 'Learn to transition without losing back control and connect reliable finishing combinations.', meta: '8 lessons · 1 hr 45 min', level: 'Int. / Advanced', price: '₺1,190' },
      ],
    },
    belts: {
      eyebrow: 'The belt journey', title: 'The color changes. The practice remains.',
      intro: 'A belt is not the goal. It is a brief record of the work you have put in. Every color asks a different question.',
      ariaSuffix: 'BJJ belt',
      items: [
        { name: 'White', note: 'Curiosity', description: 'Learn the foundations, build good habits and begin to feel at home on the mat.' },
        { name: 'Blue', note: 'Connection', description: 'Connect positions and develop your own game from defense to attack.' },
        { name: 'Purple', note: 'Creativity', description: 'Personalize the details, control the rhythm and adapt technique to different bodies.' },
        { name: 'Brown', note: 'Precision', description: 'Remove the excess and simplify your game through timing, pressure and efficiency.' },
        { name: 'Black', note: 'Depth', description: 'See mastery not as an ending, but as a more honest beginning to learning.' },
      ],
    },
    schedule: {
      eyebrow: 'Weekly schedule', title: 'Choose your routine. Meet us on the mat.',
      note: 'This is a sample schedule and can easily be updated with the academy’s actual class times.',
      items: [
        { day: 'Monday', sessions: ['07:30 FUNDAMENTALS', '19:00 ALL LEVELS'] },
        { day: 'Tuesday', sessions: ['12:30 OPEN MAT', '20:00 ALL LEVELS'] },
        { day: 'Wednesday', sessions: ['07:30 FUNDAMENTALS', '19:00 COMPETITION'] },
        { day: 'Thursday', sessions: ['12:30 FUNDAMENTALS', '20:00 ALL LEVELS'] },
        { day: 'Friday', sessions: ['18:30 ALL LEVELS', '20:00 OPEN MAT'] },
        { day: 'Saturday', sessions: ['11:00 FUNDAMENTALS', '12:30 OPEN MAT'] },
      ],
    },
    contact: {
      eyebrow: 'First step / now', title: 'Plan your', outline: 'first class.',
      description: 'Join a trial class and meet the academy and team. No gi yet? No problem; we will plan everything you need for day one.',
      whatsapp: 'Message on WhatsApp', instagram: 'Instagram', soon: 'Coming soon',
    },
    whatsappWidget: {
      regionLabel: 'WhatsApp contact', open: 'Contact us', close: 'Close WhatsApp window',
      title: 'How can we help?',
      description: 'Message us on WhatsApp for information about classes, schedules and trial sessions.',
      cta: 'Chat on WhatsApp', note: 'Opens in a new tab',
    },
    footer: { top: 'Back to top', instagram: 'Instagram · Coming soon', discipline: 'BRAZILIAN JIU-JITSU' },
  },
  ru: {
    nav: {
      academy: 'Академия', programs: 'Программы', shop: 'Видеокурсы', belts: 'Пояса', contact: 'Контакты',
      trial: 'Пробное занятие', menu: 'Открыть меню', language: 'Выбор языка', home: 'Главная Roger Gracie Bursa',
    },
    hero: {
      aria: 'Вступительный экран Roger Gracie Bursa', kicker: 'БРАЗИЛЬСКОЕ ДЖИУ-ДЖИТСУ · ДЛЯ ВСЕХ УРОВНЕЙ',
      description: 'Спокойствие техники и энергия борьбы. Сделайте первый шаг и найдите свой ритм на татами.',
      primary: 'Пробное занятие', secondary: 'Смотреть программы', values: 'ДИСЦИПЛИНА · ТЕХНИКА · КОМАНДА', discover: 'Подробнее',
    },
    quick: {
      aria: 'Быстрые ссылки', eyebrow: 'Вокруг татами', description: 'Академия, занятия, видеокурсы и ваш путь в BJJ на одной странице.',
      links: [
        { index: '01', label: 'Академия', href: '#akademi' },
        { index: '02', label: 'Программы', href: '#programlar' },
        { index: '03', label: 'Путь поясов', href: '#kusaklar' },
        { index: '04', label: 'Расписание', href: '#program' },
        { index: '05', label: 'Видеокурсы', href: '#magaza' },
      ],
    },
    academy: {
      eyebrow: 'Подход Roger Gracie Bursa', title: 'Оставьте эго за дверью. Рост начинается на татами.',
      stats: [
        { value: '06', label: 'Небольшие группы' },
        { value: '90', label: 'Минут техники' },
        { value: '01', label: 'Общая культура роста' },
      ],
      badge: 'R.G. BURSA / 01', imageAlt: 'Баннер Roger Gracie Bursa Brazilian Jiu-Jitsu',
      cardEyebrow: 'Основа решает всё', cardCopy: 'Стойка, дисциплина и повторение — начало сильной игры.',
    },
    programs: {
      eyebrow: 'Программы', title: 'Понятный путь для любого уровня.',
      intro: 'Занятия строятся на небольших группах, многократных повторениях и контролируемой практике. Важно не то, откуда вы начали, а как вы развиваетесь.',
      items: [
        { code: 'FND.01', title: 'ОСНОВЫ', subtitle: 'Начните с базы', description: 'Позиции, баланс, выходы и безопасный спарринг. Надёжная техническая база для первого знакомства с BJJ.', meta: 'Начальный · 60 мин' },
        { code: 'ALL.02', title: 'ВСЕ УРОВНИ', subtitle: 'Соберите свой поток', description: 'Основная программа объединяет технические цепочки и живую практику для спортсменов всех поясов.', meta: 'Все уровни · 90 мин' },
        { code: 'CMP.03', title: 'СОРЕВНОВАНИЯ', subtitle: 'Проверьте пределы', description: 'Интенсивные занятия: темп схватки, стратегия, подготовка и подробный разбор позиций.', meta: 'Продвинутый · 90 мин' },
      ],
    },
    shop: {
      eyebrow: 'Магазин видео', title: 'Остановите. Перемотайте. Освойте.',
      intro: 'Премиальные видеокурсы с пожизненным доступом для тренировок вне татами. Напишите нам в WhatsApp, чтобы оформить покупку и оплату.',
      deliveryNote: 'Доступ отправляется в WhatsApp после оплаты',
      priceLabel: 'Разовая оплата', buy: 'Купить в WhatsApp',
      orderMessage: 'Здравствуйте, я хочу приобрести этот видеокурс:',
      items: [
        { code: 'VID.01', title: 'Guard Retention System', description: 'Пошаговая система сохранения гарда, создания дистанции и восстановления позиции под давлением.', meta: '12 уроков · 2 ч 40 мин', level: 'Все уровни', price: '₺1 490' },
        { code: 'VID.02', title: 'Pressure Passing Blueprint', description: 'Зафиксируйте гард, правильно переносите вес и стройте надёжные цепочки проходов.', meta: '10 уроков · 2 ч 05 мин', level: 'Средний', price: '₺1 290' },
        { code: 'VID.03', title: 'Back Control & Finishes', description: 'Переходите между позициями, не теряя контроль спины, и соединяйте надёжные финиши.', meta: '8 уроков · 1 ч 45 мин', level: 'Сред. / Продв.', price: '₺1 190' },
      ],
    },
    belts: {
      eyebrow: 'Путь поясов', title: 'Цвет меняется. Практика остаётся.',
      intro: 'Пояс — не цель, а короткая запись уже проделанной работы. Каждый цвет задаёт новый вопрос.',
      ariaSuffix: 'пояс BJJ',
      items: [
        { name: 'Белый', note: 'Интерес', description: 'Изучите основы, сформируйте правильные привычки и освойтесь на татами.' },
        { name: 'Синий', note: 'Связь', description: 'Связывайте позиции и развивайте свою игру от защиты к атаке.' },
        { name: 'Фиолетовый', note: 'Творчество', description: 'Настраивайте детали, управляйте ритмом и адаптируйте технику к разным соперникам.' },
        { name: 'Коричневый', note: 'Точность', description: 'Уберите лишнее и упростите игру с помощью тайминга, давления и эффективности.' },
        { name: 'Чёрный', note: 'Глубина', description: 'Смотрите на мастерство не как на финал, а как на честное начало нового обучения.' },
      ],
    },
    schedule: {
      eyebrow: 'Расписание недели', title: 'Выберите ритм. Встретимся на татами.',
      note: 'Это пример расписания; его легко заменить реальными часами занятий академии.',
      items: [
        { day: 'Понедельник', sessions: ['07:30 ОСНОВЫ', '19:00 ВСЕ УРОВНИ'] },
        { day: 'Вторник', sessions: ['12:30 ОТКРЫТЫЙ ТАТАМИ', '20:00 ВСЕ УРОВНИ'] },
        { day: 'Среда', sessions: ['07:30 ОСНОВЫ', '19:00 СОРЕВНОВАНИЯ'] },
        { day: 'Четверг', sessions: ['12:30 ОСНОВЫ', '20:00 ВСЕ УРОВНИ'] },
        { day: 'Пятница', sessions: ['18:30 ВСЕ УРОВНИ', '20:00 ОТКРЫТЫЙ ТАТАМИ'] },
        { day: 'Суббота', sessions: ['11:00 ОСНОВЫ', '12:30 ОТКРЫТЫЙ ТАТАМИ'] },
      ],
    },
    contact: {
      eyebrow: 'Первый шаг / сейчас', title: 'Запланируйте', outline: 'первое занятие.',
      description: 'Приходите на пробное занятие и познакомьтесь с академией и командой. Нет ги? Не проблема — мы подскажем всё необходимое.',
      whatsapp: 'Написать в WhatsApp', instagram: 'Instagram', soon: 'Скоро',
    },
    whatsappWidget: {
      regionLabel: 'Связь через WhatsApp', open: 'Связаться с нами', close: 'Закрыть окно WhatsApp',
      title: 'Чем мы можем помочь?',
      description: 'Напишите нам в WhatsApp, чтобы узнать о занятиях, расписании и пробной тренировке.',
      cta: 'Открыть WhatsApp', note: 'Откроется в новой вкладке',
    },
    footer: { top: 'Наверх', instagram: 'Instagram · Скоро', discipline: 'БРАЗИЛЬСКОЕ ДЖИУ-ДЖИТСУ' },
  },
} as const;

export type Translation = (typeof translations)[Language];
