const terminologiTittleList = [
    {
        name: "CEO",
        badge: "👤",
        desc: "dilansir dari Investopedia, CEO adalah singkatan dari chief executive officer. Sementara, arti CEO yakni seseorang yang memiliki posisi tertinggi di perusahaan"
    },
        {      
        name: "Adipati",
        badge: "👑",
        desc: "gelar bangsawan untuk orang yang menjabat sebagai kepala wilayah yang tunduk dalam struktur pemerintahan kerajaan di Nusantara, Adipati di sini sebagai seorang pendukung website iDekita dan tunduk di bawah struktur manajemen iDekita"
        },
        {
            name:"Ccreator",
            badge: "🛠",
            desc: "singkatan dari C = Category dan creator adalah pembuat"
        },
        {
            name: "Astronomer",
            badge: "👨‍🚀",
            desc: "orang yang memiliki pemikiran seluas alam semesta, yang di sini berarti julukan bagi orang yang memiliki pandangan dalam membuat kategori baru"
        },
        {
            name: "Pathfinder",
            badge: "📌",
            desc: "orang yang memikirkan jalan-jalan untuk memudahkan orang-orang dalam mencari jalan (kategori) yang belum terfikirkan oleh orang lain"
        },
        {
            name: "Buntel",
            badge: "🍬",
            desc: "sebuah bungkusan, yang dimaksud di sini adalah seseorang yang digambarkan sebuah bungkus, bisa berarti sebuah bungkus ide-ide cemerlang atau hanya angin saja"
        },
        {
            name: "Idekreator",
            badge: "👨🏻‍💼",
            desc: "orang yang membuat/menyampaikan sebuah ide-ide agar bisa dilihat oleh khayalak umum"
        },
        {
            name: "Idekiawan",
            badge: "👨🏻‍🎓",
            desc: "orang yang menggunakan otaknya untuk berfikir kreatif untuk menghasilkan ide-ide yang mungkin bermanfaat bagi khalayak umum"
        },
        {
            name: "Idepedia",
            badge: "👨🏻‍⚖️",
            desc: "orang yang memiliki wawasan luas seputar ide-ide baik itu ide dari dirinya maupun ide yang dia dengar dari orang lain"
        },
        {
            name: "Idemitable",
            badge: "👨🏻‍🏭",
            desc: "orang yang menempatkan dirinya sebagai sebuah ‘table’ atau meja  yang diatasnya terdapat ide-ide cemerlang"
        },
        {
            name: "Ideamaster",
            badge: "🤴🏻",
            desc: "sesuai dengan yang disematkan di belakang kata ide, yaitu master atau sang ahli, tentunya ahli dalam memikirkan sebuah ide. Entah itu ide yang bermanfaat ataupun tidak"
        },
        {
            name: "Reportidea",
            badge: "🙅‍♂️",
            desc: "orang atau perilaku untuk melaporkan sebuah ide orang lain yang dianggapnya tidak bermanfaat/tidak bermutu"
        },
        {
            name: "reportman",
            badge: "👮🏻‍♂️",
            desc: "gabungan dari kata “report” & “man” yang artinya adalah seorang pelapor"
        },
        {
            name: "Reporteeer",
            badge: "💂‍♂️",
            desc: "diambil dari kata “reporter” yang berarti pelapor, terdapat 3 huruf ‘e’ yang berarti tingkatan ketiga di  urutan tier laporan"
        },
        {
            name: "Sweeper",
            badge: "👾",
            desc: "bahasa inggris dari kata penyapu, di sini yang bertugas untuk menyapu ide-ide tidak bermutu atau tidak kreatif yang dianggap ‘sampah’"
        },
        {
            name: "Judgernaut",
            badge: "🐻",
            desc: "seorang hakim, seorang hakim tentu sudah memiliki banyak pengetahuan seputar apa yang harusnya dia hakimi, di sini berarti orang yang gemar menghakimi ide orang lain"
        },
        {
            name: "Batamaster",
            badge: "🤺",
            desc: "diambil dari 2 kata ‘bata’ dan ‘master’, di mana sebuah bata adalah barang digunakan untuk bahan bangunan yang terbuat dari tanah liat lalu dipanaskan, dan maksud dari sebutan batamaster adalah orang yang memberi dinding pemisah antara pembuat ide-ide yang tidak bermanfaat/kreatif agar tidak terekspos ke khalayak umum"
        },
        {
            name: "Dilirik",
            badge: "🤨",
            desc: "orang yang mencuri perhatian sehingga orang-orang mulai melirik"
        },
        {
            name: "Disenengi",
            badge: "😍",
            desc: "dalam bahasa Indonesia kata ‘disenengi’ berarti disukai, yaitu orang yang disukai oleh banyak orang"
        },
        {
            name: "Popular",
            badge: "✨",
            desc: "berbeda dengan kata terkenal, jika terkenal belum tentu disukai, tetapi jika popolar adalah sebutan bagi orang yang terkenal serta disukai oleh orang-orang"
        },
        {
            name: "Contributor",
            badge: "🧰",
            desc: "diakui oleh banyak orang sebagai kontributor, di sini dalam artian orang yang berkontribusi memberikan ide-idenya"
        },
        {
            name: "Worldwide",
            badge: "🌏",
            desc: "dikenal oleh banyak orang tidak hanya satu negara, tapi sudah manca negara."
        },
        {
            name: "Superstar",
            badge: "🌟",
            desc: "mega bintang yang ketenarannya sudah di ambang batas tertinggi"
        },
        {
            name: "Pocung",
            badge: "👻",
            desc: "dalam artian lain kata ‘pocung’ adalah pocong, yaitu perjalanan terakhir manusia, tetapi semua ketenaran dan kemasyhurannya semasa hidup akan tetap diingat"
        },
        {
            name: "Buddy",
            badge: "👦",
            desc: "seseorang yang memiliki respect terhadap seseorang"
        },
        {
            name: "Suwung",
            badge: "💁🏻‍♂️",
            desc: "orang yang tidak memiliki pekerjaan atau dalam bahasa jawa yaitu ‘suwung’"
        },
        {
            name: "Penyuka",
            badge: "🤙",
            desc: "seseorang yang menyukai hasil karya orang lain, dan mulai antusias dalam menunggu postingan-postingan yang lain"
        },
        {
            name: "Maniac",
            badge: "👋",
            desc: "seorang penyuka yang kesukaannya mulai berlebihan atau sangat antusias dan terkesan mulai mengerikan"
        },
        {
            name: "Mahajari",
            badge: "🤟",
            desc: "seseorang yang memiliki jari dewa untuk menyukai setiap postingan yang ada, tanpa memperdulikan itu baik atau buruk"
        },
        {
            name: "Teknogidea",
            badge: "👩🏻‍💻",
            desc: "orang yang memiliki ide-ide seputar teknologi"
        },
        {
            name: "Teknoddict",
            badge: "👨‍💻",
            desc: "seseorang yang berambisi dalam teknologi"
        },
        {
            name: "Teknofreak",
            badge: "🤯",
            desc: "sebutan untuk orang yang sangat menyukai teknologi dan berambisi untuk mewujudkan segala cita-citanya dalam mencipatkan teknologi baru"
        },
        {
            name: "Teknoboss",
            badge: "🧞",
            desc: "gabungan dari kata ‘tekno’ dan ‘boss’, tekno yaitu teknologi sedangkan boss merujuk ke dalam sebutan dari raja para monster, di sini berarti sebutan bagi orang yang memiliki keahlian dalam bidang teknologi yang kemampuannya setara dengan boss para monster"
        },
        {
            name: "pertidea",
            badge: "👩‍🌾",
            desc: "orang yang peduli dalam bidang pertanian"
        },
        {
            name: "Pertaddict",
            badge: "💪",
            desc: "seseorang yang berambisi dalam kemajuan di bidang pertanian"
        },
        {
            name: "Pertafreak",
            badge: "🦶",
            desc: "sebutan bagi orang yang memiliki cita-cita untuk membuat bidang pertanian menjadi sangat maju dan memiliki terobosan-terobosan yang tidak terpikirkan oleh orang lain sebelumnya"
        },
        {
            name: "Pertaboss",
            badge: "👴",
            desc: "orang yang sudah sangat ahli di bidangnya dan ingin terus memajukkan bidang pertanian demi kemajuan umat manusia"
        },
        {
            name: "Creatividea",
            badge: "👨‍🔧",
            desc: "orang yang berfikir kreatif"
        },
        {
            name: "Creatividdict",
            badge: "🎭",
            desc: "orang yang berpikiran kreatif namun lebih antusias"
        },
        {
            name: "Creatifreak",
            badge: "🕵️",
            desc: "sebutan bagi seseorang yang berpikir kreatif seperti orang aneh, karna semua hal tercipta dari kreatifitas berfikir dan sering dianggap aneh oleh kebanyakan orang"
        },
        {
            name: "Creativiboss",
            badge: "👨🏻‍🎨",
            desc: "orang yang berpikiran kreatif melebihi manusia biasa, dan setiap buah pemikirannya akan menciptakan sesuatu hal baru yang tidak pernah terfikirkan oleh orang biasa"
        },
        {
            name: "Accnoob",
            badge: "🤦",
            desc: "seorang yang menekuni bidang akuntansi"
        },
        {
            name: "Accruiser",
            badge: "👲",
            desc: "gabungan dari kata ‘acc’ = accountancy dan ‘cruiser’ = penjelajah, adalah orang yang mulai menjelajah dan bereksplorasi dalam bidang akuntasi"
        },
        {
            name: "Accmaster",
            badge: "👨🏻‍🏫",
            desc: "seorang yang memiliki kemampuan di atas rata-rata dalam bidang akuntansi"
        },
        {
            name: "Accqueentance",
            badge: "👸",
            desc: "gabungan dari kata ‘acc’ = akun dan ‘queen’ = ratu dan ditambah -tance di belakang, yang berarti orang yang sangat ahli di bidang akuntansi dan kemampuan serta cara manajemen keuangan sangat tinggi seperti seorang ratu"
        },
        {
            name: "Appkiddie",
            badge: "🙆‍♂️",
            desc: "gabungan dari kata ‘app’ singkatan kata aplikasi dalam bahasa inggris serta ‘kiddie’ yaitu sebutan bagi seorang programmer pemula"
        },
        {
            name: "Appmaker",
            badge: "🧛",
            desc: "seseorang yang sudah biasa membuat aplikasi"
        },
        {
            name: "Appholic",
            badge: "🦸",
            desc: "sebutan bagi orang yang sangat menyukai aplikasi"
        },
        {
            name: "Appsodist",
            badge: "🤹🏻",
            desc: "gabungan dari kata ‘app’ yang berarti aplikasi dan ‘sodist’ yang diambil dari kata ‘rhapsodist’ yang digunakan sebagai sebutan orang ahli sastra, di sini appsodist berarti orang yang ahli dalam bahasa pemrograman"
        },
        {
            name: "Tradetrain",
            badge: "🧝",
            desc: "gabungan dari kata “trade” yang berarti transaksi dan “train” diambil dari kata “trainee” yang berarti pemula, adalah orang yang masih belajar di bidang trading"
        },
        {
            name: "Tradewhaller",
            badge: "👳‍♀️",
            desc: "orang yang paham dan mengetahui struktur dan algoritma dalam dunia trading"
        },
        {
            name: "Tradeasy",
            badge: "🤵",
            desc: "gabungan dari kata ‘trade’ dan ‘easy’ yang berarti adalah orang yang sudah ahli di bidang trading"
        },
        {
            name: "Tradebweezard",
            badge: "🧙‍♂️",
            desc: "seseorang yang memiliki kemampuan seorang ‘wizard’, di mana seorang wizard atau penyihir memiliki otak dan kemampuan berfikir yang sangat cerdas, di sini berarti orang yang berkemampuan dalam mengelola trading di tingkatan seorang ahli"
        }
]