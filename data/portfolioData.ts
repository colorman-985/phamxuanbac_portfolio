// Portfolio Data — Single source of truth
export interface Project {
  id: string
  title: string
  role: string
  shortDescription: string
  tag: string
  tagStyle: 'primary' | 'default'
  year: string
  githubUrl: string
  demoUrl: string
  metrics: string[]
  badges: string[]
  image?: string
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  iconColor: string
  tags: string[]
  span?: string
  badge?: string
}

export interface ContactLink {
  id: string
  label: string
  value: string
  url: string
  type: 'email' | 'github' | 'facebook'
  action: 'copy' | 'visit'
}

// ============================================
// PERSONAL INFO
// ============================================
export const personalInfo = {
  name: 'Phạm Xuân Bắc',
  title: 'Backend Developer',
  level: 'Fresher',
  bio: 'Chuyên sâu về kiến trúc backend hiệu năng cao, cơ sở dữ liệu quan hệ tối ưu và thiết kế RESTful API chuẩn mực. Tập trung xây dựng các hệ thống sẵn sàng cho môi trường production với khả năng mở rộng cao.',
  fullBio:
    'Tôi là một Backend Developer với niềm đam mê xây dựng các hệ thống web có khả năng mở rộng cao trên nền tảng Laravel và MySQL. Định hướng phát triển của tôi xoay quanh tính toàn vẹn của cơ sở dữ liệu quan hệ, thiết kế REST API chuẩn mực và tối ưu hiệu năng backend. Tôi thích biến các quy trình nghiệp vụ phức tạp thành kiến trúc code sạch sẽ, dễ bảo trì.',
  location: 'TP. Cần Thơ, Việt Nam',
  availability: 'Sẵn sàng nhận việc (Backend)',
  email: 'phamxuanbac28102003@gmail.com',
  githubUrl: 'https://github.com/colorman-985',
  githubHandle: 'github.com/colorman-985',
  facebookUrl: 'https://www.facebook.com/xuanbac.pham.524',
  facebookHandle: 'facebook.com/xuanbac.pham.524',
  cvUrl: '/files/Pham-Xuan-Bac-CV.pdf',
  stack: 'Laravel / MySQL',
  // latency: '<24ms độ trễ',
  heroTags: 'Laravel • PHP • MySQL • RESTful API',
  status: 'sẵn sàng nhận việc',
  photo: '/image/avatar_profile.jpeg',
}

// ============================================
// EDUCATION
// ============================================
export const education = [
  {
    id: 'school',
    label: 'HỌC VẤN',
    title: 'FPT Polytechnic',
    subtitle: 'Lập trình Web',
    highlight: false,
  },
  {
    id: 'gpa',
    label: 'THÀNH TÍCH HỌC TẬP',
    title: 'GPA 3.8 / 4.0',
    subtitle: 'Tốt nghiệp giỏi',
    highlight: true,
  },
  {
    id: 'focus',
    label: 'ĐỊNH HƯỚNG CHUYÊN MÔN',
    title: 'Chuyên sâu Backend',
    subtitle: 'API, RDBMS, Độ ổn định cao',
    highlight: false,
  },
]

// ============================================
// SKILLS
// ============================================
export const skills: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Lập trình Backend',
    icon: 'terminal',
    iconColor: 'text-primary-container',
    tags: ['Laravel', 'PHP', 'RESTful API', 'JWT Auth', 'Laravel Reverb', 'Filament'],
  },
  {
    id: 'database',
    title: 'Cơ sở dữ liệu & Lưu trữ',
    icon: 'storage',
    iconColor: 'text-secondary',
    tags: ['MySQL', 'Eloquent ORM', 'Indexing', 'Migrations'],
  },
  {
    id: 'frontend',
    title: 'Giao diện & Frontend',
    icon: 'code',
    iconColor: 'text-secondary',
    tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'tools',
    title: 'Công cụ & Tự động hóa',
    icon: 'build',
    iconColor: 'text-secondary',
    tags: ['Git', 'GitHub', 'Postman', 'Cloudinary', 'n8n'],
  },
  // {
  //   id: 'ai',
  //   title: 'Tích hợp AI & Giải pháp thông minh',
  //   icon: 'smart_toy',
  //   iconColor: 'text-primary-container',
  //   tags: ['Gemini API', 'RAG Chatbot', 'Prompt Engineering', 'Contextual Embeddings'],
  //   span: 'md:col-span-2',
  //   badge: 'Ứng dụng thực tế',
  // },
]

// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
  {
    id: 'drivio',
    title: 'Drivio - Sàn thuê xe tự lái trực tuyến',
    role: 'Fullstack Developer',
    shortDescription: 'Hệ thống cho thuê xe tự lái toàn diện với ứng dụng Web và Mobile, tích hợp đặt xe, quản trị và thanh toán tiện lợi.',
    tag: 'Dự án tốt nghiệp',
    tagStyle: 'primary',
    year: '2026',
    githubUrl: 'https://github.com/baolmq05/DuAnTotNghiep_Website_Thue_Xe',
    demoUrl: '#',
    image: '/images/thuexe_project.PNG',
    metrics: ['RESTful API', 'MySQL', 'Xác thực JWT', 'Chat thời gian thực & Thanh toán VNPay'],
    badges: ['Laravel', 'PHP', 'Nuxt 3', 'JWT', 'Reverb', 'VNPay', 'Cloudinary'],
  },
  {
    id: 'room-rental',
    title: 'PhongTro123 - Nền tảng đăng tin & tìm trọ',
    role: 'Fullstack Developer',
    shortDescription: 'Nền tảng tìm kiếm phòng trọ tích hợp bản đồ Goong Maps và tìm kiếm thông minh theo vị trí địa lý.',
    tag: 'Bản đồ số & BĐS',
    tagStyle: 'default',
    year: '2026',
    githubUrl: 'https://github.com/baolmq05/PhongTro123_WebsitePhongTro',
    demoUrl: '#',
    image: '/images/phongtro_project.png',
    metrics: [],
    badges: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Goong Maps API'],
  },
  {
    id: 'flower-ecommerce',
    title: 'FloSun - Website thương mại điện tử bán hoa tươi',
    role: 'Fullstack Developer',
    shortDescription: 'Website thương mại điện tử với giỏ hàng, quản lý đơn hàng, danh mục sản phẩm và tích hợp cổng thanh toán trực tuyến.',
    tag: 'Thương mại điện tử',
    tagStyle: 'default',
    year: '2025',
    githubUrl: 'https://github.com/ngocdao0103/Flower-Shop',
    demoUrl: '#',
    image: '/images/flower_shop_project.PNG',
    metrics: [],
    badges: ['Node.js', 'JavaScript', 'MySQL', 'Bootstrap', 'Payment API'],
  },
]

// ============================================
// CONTACT
// ============================================
export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'phamxuanbac28102003@gmail.com',
    url: 'mailto:phamxuanbac28102003@gmail.com',
    type: 'email',
    action: 'copy',
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: 'github.com/colorman-985',
    url: 'https://github.com/colorman-985',
    type: 'github',
    action: 'visit',
  },
  {
    id: 'facebook',
    label: 'FACEBOOK',
    value: 'facebook.com/xuanbac.pham.524',
    url: 'https://www.facebook.com/xuanbac.pham.524',
    type: 'facebook',
    action: 'visit',
  },
]
