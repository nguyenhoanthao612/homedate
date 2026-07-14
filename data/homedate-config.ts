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
}

export const homedateData: HomedateConfig = {
  brand: {
    name: "L'Amour Villa Homedate",
    slogan: "Không gian mộc mạc, chạm nhẹ xúc cảm bình yên",
    logoText: "L'Amour Villa",
    logoImage: "", // Để trống để dùng logoText dạng chữ sang trọng
    phone: "0987654321",
    phoneDisplay: "098.765.4321",
    email: "lamourvilla@gmail.com",
    address: "Số 15 Đường Hoa Hồng, Phường 4, TP. Đà Lạt, Lâm Đồng",
    // Bản đồ nhúng - chỉ cần copy src từ thẻ iframe chia sẻ của Google Maps
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.743126861214!2d108.43574977598858!3d11.9230554873887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317113171658cb0b%3A0xbbfd1182062fe7bd!2sDalat%20Flower%20Park!5e0!3m2!1sen!2svn!4v1700000000000!5m2!1sen!2svn",
    facebook: "https://facebook.com",
    messenger: "https://m.me/lamourvilla",
    zalo: "https://zalo.me/0987654321",
    tiktok: "https://tiktok.com",
    instagram: "https://instagram.com"
  },
  hero: {
    isVideo: false, // Bạn có thể chuyển sang true nếu có tệp video nền mp4
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cozy-living-room-with-a-burning-fireplace-42031-large.mp4",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920",
    primaryCtaText: "Đặt phòng ngay",
    secondaryCtaText: "Xem phòng trống"
  },
  about: {
    title: "Chạm Đến Bình Yên Giữa Lòng Đà Lạt",
    subtitle: "Về L'Amour Villa",
    description: "Nằm nép mình giữa thung lũng thông xanh rì rào, L'Amour Villa mang đến cho du khách một kỳ nghỉ dưỡng đích thực, nơi tách biệt hoàn toàn khỏi những khói bụi ồn ào của phố thị. Tại đây, bạn sẽ được đánh thức bởi tiếng chim hót líu lo, ngắm nhìn sương mờ ôm lượn quanh sườn đồi, và hít hà hương hoa thơm ngát phảng phất trong từng ngọn gió se lạnh. L'Amour Villa tự hào kết hợp hoàn hảo giữa nét mộc mạc nguyên bản và tiện nghi hiện đại tinh tế, tạo nên một chốn dừng chân ấm cúng như chính ngôi nhà của bạn.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200"
    ],
    highlights: [
      {
        title: "Vị trí đắc địa",
        description: "Chỉ cách trung tâm 5 phút di chuyển nhưng hoàn toàn yên tĩnh, bao quanh bởi rừng thông thơ mộng."
      },
      {
        title: "Tầm nhìn thung lũng",
        description: "Tất cả các phòng đều sở hữu ban công rộng lớn hướng thẳng ra thung lũng đón sương mai."
      },
      {
        title: "Trải nghiệm bản địa",
        description: "Thưởng thức trà Atiso ấm nóng ban sớm và tổ chức tiệc BBQ tối lãng mạn ngoài sân vườn."
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
      name: "Phòng Cozy Nest - Tổ Ấm Yên Bình",
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
      name: "Phòng Valley View Suite - Tuyệt Tác Sương Mai",
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
      fullDesc: "Valley View Suite là hạng phòng cao cấp và được yêu thích nhất tại L'Amour Villa. Toàn bộ mặt trước của phòng là hệ thống kính chạm trần mở ra ban công lộng gió 12m2. Nội thất được chăm chút tỉ mỉ từ bồn tắm nằm gỗ pơ-mu thơm phức đến chiếc ghế lười đọc sách thư giãn cạnh ban công.",
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
      id: "family-haven",
      name: "Phòng Family Haven - Gắn Kết Yêu Thương",
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
    }
  ],
  reviews: [
    {
      id: "rev-1",
      name: "Khánh Linh",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      date: "05/07/2026",
      content: "Một nơi tuyệt vời để trốn khỏi Sài Gòn ồn ào. Thức dậy mở cửa ra là thấy sương mù phủ khắp thung lũng thông xanh, đẹp rụng rời. Phòng ốc cực kỳ sạch sẽ, thơm tho mùi tinh dầu sả chanh. Chị chủ và các bạn nhân viên siêu mến khách, chỉ tụi mình bao nhiêu quán ăn ngon của người địa phương."
    },
    {
      id: "rev-2",
      name: "Minh Quân",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      date: "28/06/2026",
      content: "Nhà mình ở phòng Family Haven có lối đi thẳng ra sân vườn rất tiện. Các con tha hồ chạy nhảy trên thảm cỏ xanh. Tối đến tụi mình đặt villa set BBQ ngoài trời, đồ ăn ướp siêu ngon, vừa ăn vừa nướng dưới không khí se lạnh 15 độ, cảm giác lãng mạn và ấm cúng vô cùng. Sẽ quay lại nhiều lần nữa!"
    },
    {
      id: "rev-3",
      name: "Huyền Trang",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      date: "15/06/2026",
      content: "Phòng Valley View Suite thật sự xứng đáng điểm 10 tuyệt đối. Bồn tắm gỗ xịn sò ngắm view thung lũng rất chill. Mình đã có hàng trăm bức ảnh sống ảo tuyệt đẹp ở ban công phòng. Giường ngủ êm như khách sạn 5 sao, ngủ thẳng giấc tới sáng mượt mà. Đánh giá 5 sao cho chất lượng dịch vụ!"
    },
    {
      id: "rev-4",
      name: "Tuấn Đạt",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      rating: 5,
      date: "02/06/2026",
      content: "Không gian mộc mạc đúng chất Rustic nhưng tiện nghi thì không thiếu thứ gì. Thích nhất là được ngồi nhâm nhi ly trà Atiso nóng ban sớm ngắm thung lũng thơ mộng. Một trải nghiệm chữa lành tuyệt vời mà ai cũng nên thử khi ghé thăm Đà Lạt."
    }
  ]
};
