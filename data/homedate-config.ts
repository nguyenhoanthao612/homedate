// Cấu hình dữ liệu toàn bộ website Homedate.
// Chỉ cần chỉnh sửa thông tin trong tệp này là toàn bộ website sẽ tự động cập nhật!

export interface HomedateConfig {
  // 1. THÔNG TIN LIÊN HỆ & THƯƠNG HIỆU
  brand: {
    name: string;          // Tên Homedate
    slogan: string;        // Slogan ngắn
    logoText: string;      // Tên logo dạng chữ (nếu không dùng ảnh)
    logoImage: string;     // Đường dẫn ảnh logo (để trống nếu muốn dùng chữ)
    phone: string;         // Số điện thoại liên hệ (vd: "0901234567")
    phoneDisplay: string;  // Số điện thoại hiển thị (vd: "090.123.4567")
    email: string;         // Email liên hệ (vd: "contact@homedate.vn")
    address: string;       // Địa chỉ chi tiết
    mapEmbedUrl: string;   // Link nhúng bản đồ Google Maps (thẻ iframe src)
    facebook: string;      // Link trang Facebook
    messenger: string;     // Link chat Messenger
    zalo: string;          // Link chat Zalo hoặc số điện thoại Zalo
    tiktok?: string;       // Link trang TikTok
    instagram?: string;    // Link trang Instagram
  };

  // 2. HERO BANNER (TRANG CHỦ)
  hero: {
    isVideo: boolean;      // Sử dụng video nền hay không (true = video, false = ảnh)
    videoUrl: string;      // Link video nền (.mp4, có thể lưu trong thư mục /public/video)
    imageUrl: string;      // Link ảnh nền (nếu isVideo = false)
    primaryCtaText: string;// Chữ nút đặt phòng chính
    secondaryCtaText: string; // Chữ nút xem phòng
  };

  // 3. THÔNG TIN GIỚI THIỆU (GIỚI THIỆU)
  about: {
    title: string;         // Tiêu đề phần giới thiệu
    subtitle: string;      // Phụ đề
    description: string;   // Mô tả chi tiết về Homedate
    images: string[];      // Danh sách ảnh không gian giới thiệu
    highlights: {          // Điểm nổi bật
      title: string;
      description: string;
    }[];
    designStyle: {         // Phong cách thiết kế
      name: string;
      description: string;
    };
    amenities: {           // Tiện ích chung tại homestay
      icon: string;        // Tên icon từ Lucide (vd: "Wifi", "Tv", "Coffee"...)
      label: string;       // Tên tiện ích hiển thị
    }[];
  };

  // 4. DANH SÁCH PHÒNG (PHÒNG)
  rooms: {
    id: string;            // ID phòng (unique, vd: "deluxe-ocean", "family-suite")
    branchId: string;      // ID chi nhánh sở hữu phòng này (vd: "branch-valley-hill", "branch-pine-forest")
    name: string;          // Tên phòng
    basePrice: number;     // Giá từ (VNĐ/đêm)
    priceDisplay: string;  // Chuỗi giá hiển thị (vd: "1.200.000đ")
    area: number;          // Diện tích (m2)
    capacity: string;      // Sức chứa (vd: "2 người lớn, 1 trẻ em")
    thumbnail: string;     // Ảnh đại diện phòng
    gallery: string[];     // Bộ sưu tập ảnh phòng (cho phần chi tiết)
    videoUrl?: string;     // Link video giới thiệu phòng (nếu có, vd: Youtube Embed hoặc video trực tiếp)
    shortDesc: string;     // Mô tả ngắn ở ngoài danh sách
    fullDesc: string;      // Mô tả đầy đủ ở phần xem chi tiết
    amenities: string[];   // Danh sách tất cả tiện nghi phòng
  }[];

  // 5. ĐÁNH GIÁ (ĐÁNH GIÁ THÀNH VIÊN)
  reviews: {
    id: string;
    name: string;
    avatar: string;
    rating: number;        // Số sao (1 đến 5)
    date: string;          // Ngày đánh giá
    content: string;       // Nội dung đánh giá
  }[];

  // 6. DANH SÁCH CHI NHÁNH
  branches: {
    id: string;            // ID chi nhánh
    name: string;          // Tên chi nhánh
    address: string;       // Địa chỉ chi nhánh
    phone: string;         // Số điện thoại liên hệ chi nhánh
    phoneDisplay: string;  // Số điện thoại hiển thị chi nhánh
    email?: string;        // Email chi nhánh (nếu có)
    mapEmbedUrl: string;   // Bản đồ Google Maps nhúng chi nhánh
    hero?: {
      isVideo?: boolean;
      videoUrl?: string;
      imageUrl?: string;
    };
  }[];
}

export const homedateData: HomedateConfig = {
  brand: {
    name: "Alma Home",
    slogan: "Không gian mộc mạc, chạm nhẹ xúc cảm bình yên",
    logoText: "Alma Home",
    logoImage: "/logo.png", // Để trống để dùng logoText dạng chữ sang trọng
    phone: "0336124797",
    phoneDisplay: "(+84) 336.124.797",
    email: "almahome.sg@gmail.com",
    address: "611/14B Điện Biên Phủ, Phường 1, Quận 3, TP.HCM",
    // Bản đồ nhúng - chỉ cần copy src từ thẻ iframe chia sẻ của Google Maps
    mapEmbedUrl: "https://maps.google.com/maps?q=611/14B%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7,%20Ph%C6%B0%E1%BB%9Dng%201,%20Qu%E1%BB%A3n%203,%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed",
    facebook: "https://www.facebook.com/almahomesg/?locale=vi_VN",
    messenger: "https://m.me/almahomesg",
    zalo: "https://zalo.me/0336124797",
    tiktok: "https://tiktok.com/@almahomesg",
    instagram: "https://instagram.com/almahomesg"
  },
  hero: {
    isVideo: false, // Bạn có thể chuyển sang true nếu có tệp video nền mp4
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cozy-living-room-with-a-burning-fireplace-42031-large.mp4",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920",
    primaryCtaText: "Đặt phòng ngay",
    secondaryCtaText: "Xem phòng trống"
  },
  about: {
    title: "Chạm đến bình yên giữa lòng Sài Gòn",
    subtitle: "Về Alma Home",
    description: "Nằm nép mình giữa những góc phố bình yên và rợp bóng cây xanh, Alma Home mang đến cho du khách một không gian nghỉ dưỡng đích thực, nơi tách biệt hoàn toàn khỏi những khói bụi ồn ào của phố thị. Tại đây, bạn sẽ được tận hưởng những phút giây thư thái nhất, lắng nghe tiếng chim hót líu lo chào ngày mới, và hít hà hương hoa thơm ngát phảng phất trong sân vườn ngập nắng. Alma Home tự hào kết hợp hoàn hảo giữa nét mộc mạc nguyên bản và tiện nghi hiện đại tinh tế, tạo nên một chốn dừng chân ấm cúng như chính ngôi nhà của bạn.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200"
    ],
    highlights: [
      {
        title: "Vị trí đắc địa",
        description: "Tọa lạc tại những vị trí trung tâm sầm uất nhưng vẫn giữ trọn vẹn được sự yên tĩnh và riêng tư tuyệt đối."
      },
      {
        title: "Không gian xanh mát",
        description: "Sở hữu những khoảng sân vườn thoáng đãng, ngập tràn ánh nắng và sắc hoa tươi tắn."
      },
      {
        title: "Trải nghiệm ấm cúng",
        description: "Thưởng thức tách cà phê thơm ấm ban sớm và những buổi tối lãng mạn, thư giãn bên gia đình."
      }
    ],
    designStyle: {
      name: "Rustic Scandinavian ấm áp",
      description: "Sử dụng tông màu gỗ tự nhiên kết hợp với sắc trắng tinh khôi, hệ cửa kính kịch trần tối ưu ánh sáng tự nhiên, mang thiên nhiên hòa vào trong từng hơi thở của căn nhà."
    },
    amenities: [
      { icon: "Wifi", label: "Wifi tốc độ cao" },
      { icon: "Utensils", label: "Bếp nướng BBQ ngoài trời" },
      { icon: "Car", label: "Bãi đỗ xe rộng rãi" },
      { icon: "Coffee", label: "Quầy cafe tự phục vụ" },
      { icon: "Flower2", label: "Sân vườn hoa rực rỡ" },
      { icon: "Sparkles", label: "Dọn phòng hàng ngày" },
      { icon: "Heart", label: "Tâm lý & Mến khách" },
      { icon: "Flame", label: "Lò sưởi ấm cúng buổi tối" }
    ]
  },
  rooms: [
    {
      id: "cozy-nest",
      branchId: "branch-alma-1",
      name: "Phòng Cozy Nest - Tổ ấm yên bình",
      basePrice: 850000,
      priceDisplay: "850.000đ",
      area: 25,
      capacity: "2 người lớn",
      thumbnail: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cozy-bedroom-interior-with-warm-lighting-42352-large.mp4",
      shortDesc: "Căn phòng nhỏ nhắn nhưng ấm áp lý tưởng dành cho các cặp đôi tìm kiếm sự lãng mạn tinh tế và riêng tư.",
      fullDesc: "Phòng Cozy Nest được thiết kế nhằm tối ưu hóa sự ấm cúng và gần gũi. Điểm nhấn là chiếc giường King-size êm ái với bộ chăn ga cotton cao cấp, kết hợp đèn vàng dịu nhẹ mang lại giấc ngủ sâu nhất. Phòng sở hữu cửa sổ lớn ngắm nhìn ra vườn hồng đầy hoa sặc sỡ, có góc uống trà thư giãn vô cùng dễ thương.",
      amenities: [
        "Giường King-size cao cấp",
        "Ban công ngắm vườn hoa",
        "Phòng tắm riêng khép kín",
        "Máy sấy tóc & Đồ vệ sinh cá nhân",
        "Ấm đun nước siêu tốc",
        "Trà & Cafe miễn phí mỗi ngày",
        "Tinh dầu thơm tự nhiên",
        "Hộp ký gửi an toàn"
      ]
    },
    {
      id: "valley-view-suite",
      branchId: "branch-alma-1",
      name: "Phòng Valley View Suite - Tuyệt tác sương mai",
      basePrice: 1350000,
      priceDisplay: "1.350.000đ",
      area: 40,
      capacity: "2 người lớn, 1 trẻ em",
      thumbnail: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Sở hữu tầm nhìn triệu đô hướng thẳng ra thung lũng, đón trọn vẹn biển mây bồng bềnh mỗi sáng sớm thức dậy.",
      fullDesc: "Valley View Suite là hạng phòng cao cấp và được yêu thích nhất tại Alma Home. Toàn bộ mặt trước của phòng là hệ thống kính chạm trần mở ra ban công lộng gió 12m2. Nội thất được chăm chút tỉ mỉ từ bồn tắm nằm gỗ pơ-mu thơm phức đến chiếc ghế lười đọc sách thư giãn cạnh ban công.",
      amenities: [
        "Ban công panorama thung lũng sương",
        "Bồn tắm gỗ pơ-mu thư giãn",
        "Giường King-size chuẩn 5 sao",
        "Smart TV 55 inch netflix sẵn",
        "Tủ lạnh mini bar đầy đủ đồ uống",
        "Máy pha cà phê viên nén cao cấp",
        "Bàn làm việc rộng rãi",
        "Khu vực tiếp khách sang trọng"
      ]
    },
    {
      id: "branch-1-garden-room",
      branchId: "branch-alma-1",
      name: "Phòng Garden View - Ban mai rực rỡ",
      basePrice: 950000,
      priceDisplay: "950.000đ",
      area: 28,
      capacity: "2 người lớn",
      thumbnail: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Phòng ngủ xinh xắn ngập tràn ánh nắng tự nhiên với cửa sổ kính rộng mở thẳng ra khu vườn hồng đầy hương sắc.",
      fullDesc: "Phòng Garden View được bày trí theo phong cách mộc mạc tối giản nhưng không kém phần tinh tế. Với vách kính đón trọn vẹn bình minh và một ban công gỗ xinh xắn bên hông, bạn sẽ cảm giác như đang được bao bọc bởi cây cỏ và sắc hoa rực rỡ buổi sớm.",
      amenities: [
        "Giường Double cỡ lớn",
        "Cửa kính đón nắng sớm",
        "Phòng tắm vách kính hiện đại",
        "Ban công ngắm hoa riêng",
        "Ấm đun nước & trà gói",
        "Smart TV kết nối wifi",
        "Dọn phòng miễn phí hàng ngày"
      ]
    },
    {
      id: "branch-1-studio-comfort",
      branchId: "branch-alma-1",
      name: "Phòng Studio Comfort - Nhịp sống phố thị",
      basePrice: 1100000,
      priceDisplay: "1.100.000đ",
      area: 35,
      capacity: "2 người lớn, 1 trẻ em",
      thumbnail: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Căn hộ studio đầy đủ tiện nghi, có tích hợp bếp mini tiện lợi để tự tay chuẩn bị những bữa ăn ấm cúng.",
      fullDesc: "Studio Comfort mang đến sự tiện nghi của một ngôi nhà thu nhỏ. Căn phòng sở hữu thiết kế thông minh với phòng ngủ kết hợp khu bếp nấu ăn nhỏ gọn, trang bị tủ lạnh, lò vi sóng cùng bàn ăn tinh tế bằng gỗ sồi. Thích hợp cho những chuyến lưu trú dài ngày.",
      amenities: [
        "Giường King-size êm ái",
        "Bếp mini & dụng cụ nấu ăn",
        "Tủ lạnh gia đình cỡ vừa",
        "Bàn ăn tối tinh xảo",
        "Lò vi sóng & ấm đun nước",
        "Sofa tiếp khách thoải mái",
        "Điều hòa hai chiều thông minh"
      ]
    },
    {
      id: "branch-1-loft-premium",
      branchId: "branch-alma-1",
      name: "Phòng Loft Premium - Gác xếp mộng mơ",
      basePrice: 1250000,
      priceDisplay: "1.250.000đ",
      area: 38,
      capacity: "2 người lớn, 2 trẻ em",
      thumbnail: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Căn gác lửng độc đáo với ô kính tròn nhìn trời sao đêm, nơi nuôi dưỡng những mộng mơ ngọt ngào.",
      fullDesc: "Loft Premium sở hữu cấu trúc gác lửng thời thượng kết hợp trần nhà cao thoáng đãng. Chiếc giường ngủ chính đặt trên gác lửng ấm cúng, phía dưới là phòng khách rộng rãi cùng bồn tắm gỗ sồi ngâm chân thư giãn. Một trải nghiệm kiến trúc hoàn toàn mới lạ.",
      amenities: [
        "Thiết kế gác lửng sáng tạo",
        "Cửa sổ giếng trời ngắm sao",
        "Sofa giường lớn tầng trệt",
        "Bồn tắm nằm gỗ sồi cổ điển",
        "Hệ thống loa âm trần",
        "Máy chiếu phim màn ảnh rộng",
        "Trà & cafe đặc sản miễn phí"
      ]
    },
    {
      id: "branch-1-penthouse-urban",
      branchId: "branch-alma-1",
      name: "Phòng Penthouse Urban - Đỉnh cao thư thái",
      basePrice: 2500000,
      priceDisplay: "2.500.000đ",
      area: 75,
      capacity: "4 người lớn, 2 trẻ em",
      thumbnail: "https://images.unsplash.com/photo-1502672012114-1e5256e36d4a?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1502672012114-1e5256e36d4a?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Căn hộ áp mái thượng lưu với sân vườn trên mây, bể jacuzzi sang chảnh ôm trọn thành phố lộng lẫy.",
      fullDesc: "Penthouse Urban là lựa chọn đỉnh cao nhất tại chi nhánh Quận 3. Với không gian cực kỳ rộng rãi bao gồm 2 phòng ngủ riêng biệt, phòng khách sang trọng nối liền khoảng sân thượng xanh mướt ngập tràn sắc hoa và bồn sục jacuzzi sưởi ấm, giúp bạn tận hưởng tối đa sự xa hoa giữa thiên nhiên.",
      amenities: [
        "2 phòng ngủ King-size biệt lập",
        "Bể sục Jacuzzi nước ấm ngoài trời",
        "Sân vườn thượng uyển trên mây",
        "Phòng ăn rộng lớn cho gia đình",
        "Hệ thống âm thanh hi-end cực đỉnh",
        "Khu bếp nấu nướng hiện đại",
        "Bar mini tự pha chế cực chill"
      ]
    },
    {
      id: "family-haven",
      branchId: "branch-alma-2",
      name: "Phòng Family Haven - Gắn kết yêu thương",
      basePrice: 1950000,
      priceDisplay: "1.950.000đ",
      area: 60,
      capacity: "4 người lớn, 2 trẻ em",
      thumbnail: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Không gian rộng lớn thiết kế 2 giường đôi lớn biệt lập, tối ưu không gian sinh hoạt chung ấm cúng cho cả gia đình.",
      fullDesc: "Phòng Family Haven là căn hộ thu nhỏ hoàn hảo cho gia đình hoặc nhóm bạn thân. Sở hữu 2 giường đôi cỡ lớn, 1 khu bếp mini tiện nghi cho phép nấu các món súp nóng hổi và 1 phòng khách nhỏ xinh. Căn phòng mở ra khoảng sân vườn cỏ xanh mướt nơi trẻ em có thể thỏa thích chơi đùa.",
      amenities: [
        "2 Giường đôi lớn cao cấp",
        "Khu vực bếp mini & Bàn ăn riêng",
        "Lối đi thẳng ra sân vườn cỏ xanh",
        "Phòng tắm rộng có vòi sen massage",
        "Lò sưởi sưởi ấm gia đình",
        "Trò chơi boardgame sẵn trong phòng",
        "Sofa bed thông minh tiện dụng",
        "Đầy đủ dụng cụ nấu ăn cơ bản"
      ]
    },
    {
      id: "pine-bungalow",
      branchId: "branch-alma-2",
      name: "Phòng Pine Bungalow - Hơi thở đại ngàn",
      basePrice: 950000,
      priceDisplay: "950.000đ",
      area: 30,
      capacity: "2 người lớn",
      thumbnail: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Bungalow gỗ tự nhiên mộc mạc ẩn hiện dưới tán thông xanh mát, mang lại sự riêng tư hoàn hảo.",
      fullDesc: "Pine Bungalow là không gian lãng mạn được bao bọc bởi đồi thông rì rào. Toàn bộ vách tường sử dụng gỗ thông nhập khẩu có hương thơm tự nhiên dịu nhẹ, giúp thư giãn tinh thần và mang đến giấc ngủ ngon sâu lắng. Căn phòng có ô cửa kính tròn độc đáo nhìn thẳng ra khu rừng rậm rạp sương phủ.",
      amenities: [
        "Vách gỗ thông tự nhiên tỏa hương thơm",
        "Cửa sổ kính tròn ngắm rừng thông",
        "Sân hiên gỗ ngắm bình minh",
        "Bồn tắm sứ cao cấp",
        "Trà gừng & Cafe đặc sản Đà Lạt",
        "Máy sưởi sưởi ấm dịu nhẹ",
        "Trà & Cafe miễn phí mỗi ngày",
        "Tinh dầu thơm tự nhiên"
      ]
    },
    {
      id: "branch-2-standard-twin",
      branchId: "branch-alma-2",
      name: "Phòng Standard Twin - Kết nối tâm giao",
      basePrice: 800000,
      priceDisplay: "800.000đ",
      area: 28,
      capacity: "2 người lớn",
      thumbnail: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Bố trí 2 giường đơn độc lập, mang lại sự riêng tư thoải mái tối đa cho những chuyến đi công tác hoặc bạn bè thân thiết.",
      fullDesc: "Standard Twin được tối ưu hóa sự thoải mái với hai chiếc giường đơn êm ái biệt lập. Phong cách trang trí kết hợp giữa tông gỗ trầm ấm áp và các mảng màu xanh xám mát dịu, giúp tinh thần lắng dịu sau ngày dài khám phá Sài Gòn.",
      amenities: [
        "2 giường đơn chuẩn khách sạn",
        "Bàn làm việc thông minh",
        "Tủ quần áo gỗ sồi lớn",
        "Két sắt an toàn trong phòng",
        "Điều hòa hai chiều tiết kiệm điện",
        "Đầy đủ dụng cụ pha trà, cafe"
      ]
    },
    {
      id: "branch-2-deluxe-balcony",
      branchId: "branch-alma-2",
      name: "Phòng Deluxe Balcony - Góc nhỏ đón nắng",
      basePrice: 1150000,
      priceDisplay: "1.150.000đ",
      area: 35,
      capacity: "2 người lớn, 1 trẻ em",
      thumbnail: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1611891404114-5090bc24c32d?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Sở hữu ban công ngắm nhìn phố xá yên bình với hàng cây xanh ngợp bóng, mang hơi thở thiên nhiên tươi mát.",
      fullDesc: "Deluxe Balcony đem đến bầu không khí thoáng đãng ngập tràn. Bạn có thể mở toang hệ cửa lùa bằng kính để bước ra ban công lộng gió ngắm những vòm cây, ngồi thưởng trà nghe nhạc thư giãn. Toàn bộ nội thất cao cấp mang lại sự thoải mái trọn vẹn nhất.",
      amenities: [
        "Ban công riêng lộng gió",
        "Bàn ghế thưởng trà ngoài trời",
        "Giường đôi cỡ lớn cao cấp",
        "Smart TV 50 inch netflix sẵn",
        "Bồn tắm vách kính sang trọng",
        "Tinh dầu sả chanh thư thái"
      ]
    },
    {
      id: "branch-2-executive-suite",
      branchId: "branch-alma-2",
      name: "Phòng Executive Suite - Sang trọng đẳng cấp",
      basePrice: 1700000,
      priceDisplay: "1.700.000đ",
      area: 50,
      capacity: "2 người lớn, 2 trẻ em",
      thumbnail: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Hạng phòng suite thượng lưu với phòng khách tách biệt riêng tư và bồn tắm nằm gỗ pơ-mu cực sang chảnh.",
      fullDesc: "Executive Suite là biểu tượng của cuộc sống hoàng gia mộc mạc. Sự pha trộn tài tình giữa chất liệu gỗ thông mộc đỏ ấm áp và những chiếc đèn lồng làm thủ công tinh xảo, bồn tắm nằm gỗ pơ-mu tỏa hương thơm thư giãn hỗ trợ phục hồi sức khỏe diệu kỳ.",
      amenities: [
        "Phòng ngủ & phòng khách biệt lập",
        "Bồn tắm nằm pơ-mu thơm dịu",
        "Sofa giường thông minh lớn",
        "Tủ lạnh quầy bar mini cao cấp",
        "Hệ thống loa âm thanh cao cấp",
        "Dịch vụ trà chiều phục vụ tận phòng"
      ]
    },
    {
      id: "branch-2-garden-cabin",
      branchId: "branch-alma-2",
      name: "Phòng Garden Cabin - Bình yên ngõ nhỏ",
      basePrice: 1000000,
      priceDisplay: "1.000.000đ",
      area: 32,
      capacity: "2 người lớn",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Căn cabin nhỏ xinh ẩn mình trong khu vườn riêng rợp bóng mát cây xanh, cho bạn không gian riêng tư tối đa.",
      fullDesc: "Garden Cabin là khoảng lánh đời tuyệt hảo. Chỉ vài bước chân từ cửa gỗ mộc mạc, bạn đã đứng giữa khu vườn hồng xinh đẹp và những ngõ nhỏ xanh tươi rộn rã tiếng chim hót. Căn phòng trang trí giản dị nhưng chu đáo vô cùng.",
      amenities: [
        "Cabin sân vườn biệt lập",
        "Sân vườn riêng ngập hoa hồng",
        "Vòi hoa sen massage sảng khoái",
        "Bàn ăn tối dã ngoại ngoài trời",
        "Máy sưởi ấm cúng buổi tối",
        "Trà thảo mộc & bánh ngọt đón khách"
      ]
    },
    {
      id: "forest-cabin",
      branchId: "branch-alma-3",
      name: "Phòng Forest Cabin - Bản tình ca ngàn thông",
      basePrice: 1500000,
      priceDisplay: "1.500.000đ",
      area: 45,
      capacity: "2 người lớn, 1 trẻ em",
      thumbnail: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Thiết kế dạng cabin chữ A hiện đại với vách kính lớn thu trọn vẹn vẻ đẹp hoang sơ của đồi thông.",
      fullDesc: "Forest Cabin đưa bạn chạm gần hơn vào thiên nhiên hoang sơ với thiết kế chữ A độc đáo cùng mặt kính kịch trần hướng đồi thông rộng lớn. Buổi sáng, những tia nắng vàng len lỏi qua kẽ lá rọi thẳng vào chiếc giường ấm áp. Cabin trang bị đầy đủ tiện nghi đẳng cấp bao gồm bồn tắm gỗ sồi ngoài trời cực chill.",
      amenities: [
        "Thiết kế chữ A độc đáo, sang trọng",
        "Mặt kính panorama rộng mở đón nắng",
        "Bồn tắm ngoài trời ẩn mình giữa thiên nhiên",
        "Máy pha cà phê espresso tự động",
        "Giường King-size tiêu chuẩn resort",
        "Loa bluetooth xịn nghe nhạc chill",
        "Tủ lạnh mini bar đầy đủ đồ uống",
        "Khu vực tiếp khách sang trọng"
      ]
    },
    {
      id: "lakeview-chalet",
      branchId: "branch-alma-3",
      name: "Phòng Lakeview Chalet - Bản giao hưởng hồ Tuyền Lâm",
      basePrice: 2200000,
      priceDisplay: "2.200.000đ",
      area: 70,
      capacity: "4 người lớn, 2 trẻ em",
      thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Căn Chalet gỗ rộng lớn hướng mặt về phía hồ Tuyền Lâm phẳng lặng, mang đến trải nghiệm nghỉ dưỡng hoàn mỹ bậc nhất.",
      fullDesc: "Lakeview Chalet mang đến một định nghĩa hoàn toàn mới về nghỉ dưỡng sang trọng giữa thiên nhiên. Tọa lạc tại vị trí đắc địa nhất của Chi nhánh Đồi Thông, căn Chalet sở hữu không gian phòng khách lớn ấm cúng, 2 phòng ngủ riêng tư và sân ban công gỗ siêu rộng ngắm cảnh hồ Tuyền Lâm mờ ảo trong sương sớm. Đây là lựa chọn hoàn mỹ cho gia đình hoặc nhóm bạn thân.",
      amenities: [
        "Tầm nhìn ôm trọn hồ Tuyền Lâm thơ mộng",
        "Sân ban công gỗ ngoài trời siêu rộng",
        "2 Phòng ngủ King-size biệt lập",
        "Khu vực bếp nấu ăn đầy đủ thiết bị",
        "Hồ nước nóng mini massage ngoài trời",
        "Lò sưởi củi sưởi ấm truyền thống",
        "Smart TV 55 inch netflix sẵn",
        "Đầy đủ dụng cụ nấu ăn cơ bản"
      ]
    },
    {
      id: "branch-3-vintage-attic",
      branchId: "branch-alma-3",
      name: "Phòng Vintage Attic - Hồi ức ngọt ngào",
      basePrice: 900000,
      priceDisplay: "900.000đ",
      area: 30,
      capacity: "2 người lớn",
      thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Căn gác mái đậm chất hoài cổ mang phong cách cổ điển lãng mạn, kể lại câu chuyện về những hồi ức ngọt ngào.",
      fullDesc: "Vintage Attic với trần gỗ xéo ấm cúng và ánh sáng vàng hổ phách dịu êm đưa bạn về thế giới của sự mộng mơ và lắng đọng. Căn phòng sử dụng những món đồ decor tuyển chọn từ vải thô, đệm gối thổ cẩm thêu tay và một chiếc máy phát nhạc đĩa than ấm áp.",
      amenities: [
        "Gác mái cổ điển ấm cúng",
        "Máy nghe nhạc đĩa than vintage",
        "Đệm ngủ thổ cẩm handmade",
        "Góc đọc sách yên tĩnh đón nắng",
        "Bồn ngâm chân thảo mộc sẵn",
        "Ấm đun nước & trà gói hảo hạng"
      ]
    },
    {
      id: "branch-3-sunshine-studio",
      branchId: "branch-alma-3",
      name: "Phòng Sunshine Studio - Nắng ấm ban mai",
      basePrice: 1200000,
      priceDisplay: "1.200.000đ",
      area: 36,
      capacity: "2 người lớn, 1 trẻ em",
      thumbnail: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Thiết kế mở thông minh đón trọn vẹn những tia nắng vàng rực rỡ buổi sớm mai nhảy nhót quanh phòng ngủ.",
      fullDesc: "Sunshine Studio sở hữu ba mặt kính cường lực đón nắng tuyệt hảo hướng ra thung lũng sâu, mang lại cảm giác rộng mở sảng khoái tối đa. Gian phòng ngủ sáng sủa kết hợp nhẹ nhàng với một góc làm việc yên tĩnh ngập sắc xanh cây cảnh.",
      amenities: [
        "Vách kính đón nắng 270 độ",
        "Góc làm việc yên tĩnh xanh mát",
        "Giường đôi cao cấp King-size",
        "Smart TV màn hình cong hiện đại",
        "Bồn tắm vách kính ngoài trời",
        "Hộp quà bánh sừng bò tiếp đón"
      ]
    },
    {
      id: "branch-3-royal-suite",
      branchId: "branch-alma-3",
      name: "Phòng Royal Suite - Hoàng gia quý phái",
      basePrice: 2100000,
      priceDisplay: "2.100.000đ",
      area: 55,
      capacity: "2 người lớn, 2 trẻ em",
      thumbnail: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Tận hưởng cuộc sống xa hoa với phòng tắm xông hơi đá muối Himalaya riêng ngay trong căn phòng hoàng gia quý phái.",
      fullDesc: "Royal Suite là sự giao thoa kiệt xuất giữa nghỉ dưỡng xa xỉ và thiên nhiên thanh lành. Điểm đắt giá nhất chính là phòng xông hơi hồng ngoại đá muối Himalaya riêng biệt, đem lại trải nghiệm chăm sóc cơ thể thải độc sâu sắc nhất ngay tại giường ngủ của bạn.",
      amenities: [
        "Phòng xông hơi đá muối riêng",
        "Bồn tắm sục nước jacuzzi",
        "Giường siêu lớn tơ lụa mềm mịn",
        "Nước ép hoa quả tươi đón mừng",
        "Hệ thống âm thanh Bluetooth hi-end",
        "Dịch vụ quản gia túc trực riêng"
      ]
    },
    {
      id: "branch-3-family-large",
      branchId: "branch-alma-3",
      name: "Phòng Family Suite Large - Sum vầy ấm cúng",
      basePrice: 2600000,
      priceDisplay: "2.600.000đ",
      area: 80,
      capacity: "6 người lớn, 3 trẻ em",
      thumbnail: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200"
      ],
      videoUrl: "",
      shortDesc: "Căn villa gia đình cực đại với 3 giường đôi khổng lồ, bếp đầy đủ lò nướng phục vụ các buổi party ấm áp.",
      fullDesc: "Family Suite Large được ví như một căn biệt thự thu nhỏ ấm cúng. Nơi đây sở hữu 3 phòng ngủ giường đôi riêng biệt, khu sinh hoạt chung với một phòng bếp cỡ đại đầy đủ lò nướng, nồi lẩu hiện đại. Sân hiên lớn lát gỗ cho phép nướng BBQ ngoài trời, tạo ra những ký ức gia đình vô cùng trọn vẹn.",
      amenities: [
        "3 phòng ngủ giường đôi cỡ đại",
        "Bếp nấu & Lò nướng nướng bánh",
        "Sân ban công tiệc BBQ lớn",
        "2 phòng tắm rộng lớn riêng biệt",
        "Máy chiếu phim tại phòng khách",
        "Trò chơi gia đình phong phú sẵn",
        "Dịch vụ chuẩn bị sẵn than củi nướng"
      ]
    }
  ],
  reviews: [
    {
      id: "rev-1",
      name: "Khánh Linh",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      date: "05/07/2026",
      content: "Một nơi tuyệt vời để trốn khỏi thành phố ồn ào. Thức dậy mở cửa ra là thấy sương mù phủ khắp thung lũng thông xanh mướt, đẹp bình yên vô cùng. Phòng ốc cực kỳ sạch sẽ, thơm tho mùi tinh dầu tự nhiên dễ chịu. Các bạn nhân viên siêu mến khách và chu đáo, hỗ trợ tụi mình rất nhiệt tình."
    },
    {
      id: "rev-2",
      name: "Minh Quân",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      date: "28/06/2026",
      content: "Nhà mình đi gia đình có con nhỏ, phòng ốc rộng rãi, có khoảng sân vườn cỏ xanh rất tiện cho bé chạy nhảy. Tối đến cả nhà cùng nướng BBQ ngoài trời dưới thời tiết se lạnh, cảm giác ấm cúng vô cùng. Mọi thứ được chuẩn bị chu đáo từ những chi tiết nhỏ nhất. Chắc chắn sẽ quay lại!"
    },
    {
      id: "rev-3",
      name: "Huyền Trang",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      date: "15/06/2026",
      content: "Phòng có ban công siêu rộng hướng thẳng ra thung lũng ngắm view mây bay cực chill. Mình đã có cả album ảnh kỷ niệm tuyệt đẹp ở đây. Bồn tắm gỗ ấm áp ngắm cảnh rất thư giãn, giường ngủ êm ái ngủ thẳng giấc tới sáng. Rất hài lòng với chất lượng dịch vụ chu đáo."
    },
    {
      id: "rev-4",
      name: "Tuấn Đạt",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      date: "02/06/2026",
      content: "Không gian mộc mạc, gần gũi với thiên nhiên nhưng tiện nghi vẫn đầy đủ và hiện đại. Thích nhất cảm giác ngồi nhâm nhi ly trà ấm ban sớm, nghe tiếng chim hót giữa núi đồi tĩnh lặng. Một trải nghiệm chữa lành và nạp lại năng lượng tuyệt vời."
    }
  ],
  branches: [
    {
      id: "branch-alma-1",
      name: "Alma Home 1",
      address: "611/14B Điện Biên Phủ, Phường 1, Quận 3, TP.HCM",
      phone: "0336124797",
      phoneDisplay: "(+84) 336.124.797",
      email: "almahome.sg@gmail.com",
      mapEmbedUrl: "https://maps.google.com/maps?q=611/14B%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7,%20Ph%C6%B0%E1%BB%9Dng%201,%20Qu%E1%BB%A3n%203,%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed",
      hero: {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920"
      }
    },
    {
      id: "branch-alma-2",
      name: "Alma Home 2",
      address: "178/4/14A Phan Đăng Lưu, Phường 3, Quận Phú Nhuận, TP.HCM",
      phone: "0336124797",
      phoneDisplay: "(+84) 336.124.797",
      email: "almahome.sg@gmail.com",
      mapEmbedUrl: "https://maps.google.com/maps?q=178/4/14A%20Phan%20%C4%90%C4%83ng%20L%C6%B0u,%20Ph%C6%B0%E1%BB%9Dng%203,%20Qu%E1%BB%A3n%20Ph%C3%BA%20Nhu%E1%BA%ADn,%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed",
      hero: {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1920"
      }
    },
    {
      id: "branch-alma-3",
      name: "Alma Home 3",
      address: "45A Hoa Hồng, Phường 2, Quận Phú Nhuận, TP.HCM",
      phone: "0336124797",
      phoneDisplay: "(+84) 336.124.797",
      email: "almahome.sg@gmail.com",
      mapEmbedUrl: "https://maps.google.com/maps?q=Alma+Home+03+-+Hoa+H%E1%BB%93ng&t=&z=16&ie=UTF8&iwloc=&output=embed",
      hero: {
        isVideo: false,
        imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1920"
      }
    }
  ]
};
