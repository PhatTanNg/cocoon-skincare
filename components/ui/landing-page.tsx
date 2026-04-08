"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  MapPin,
  Leaf,
  ShieldCheck,
  Award,
  Star,
  Heart,
  Droplets,
  Globe,
  CheckCircle,
  Sparkles,
  Users,
  TrendingUp,
  Send,
  Zap,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// ── Animation variants ──────────────────────────────────────────────────────
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// ── Inline SVG social icons ─────────────────────────────────────────────────
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

// ── Data ────────────────────────────────────────────────────────────────────
const products = [
  {
    name: "Kem Chống Nắng Bí Đao SPF 50+",
    ingredient: "Bí Đao Hậu Giang",
    benefit: "Kiểm soát dầu, bảo vệ khỏi tia UV, không bóng nhờn",
    price: "155.000₫",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
    tag: "Bán chạy nhất",
  },
  {
    name: "Nước Hoa Hồng Sen Hậu Giang",
    ingredient: "Hoa Sen Hậu Giang",
    benefit: "Dưỡng ẩm sâu, làm dịu và cân bằng độ pH",
    price: "165.000₫",
    image: "https://images.unsplash.com/photo-1620756235543-8c4a02fd7d83?w=400&q=80",
    tag: "Yêu thích nhất",
  },
  {
    name: "Tẩy Da Chết Cà Phê Đắk Lắk",
    ingredient: "Cà Phê Đắk Lắk",
    benefit: "Tẩy tế bào chết, sáng da, chống oxy hóa",
    price: "145.000₫",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
    tag: "Đặc sản Việt Nam",
  },
  {
    name: "Tẩy Trang Khổ Qua",
    ingredient: "Khổ Qua (Mướp Đắng)",
    benefit: "Làm sạch sâu, kiểm soát mụn, làm mát da",
    price: "129.000₫",
    image: "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=400&q=80",
    tag: "Dịu nhẹ",
  },
  {
    name: "Dầu Dưỡng Tóc Bưởi",
    ingredient: "Tinh Dầu Bưởi Việt Nam",
    benefit: "Giảm gãy rụng, tăng độ dày và sức sống cho tóc",
    price: "195.000₫",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
    tag: "Chăm sóc tóc",
  },
]

const stats = [
  { value: "700K+", label: "Đánh giá xác thực", icon: <Star className="h-5 w-5" /> },
  { value: "5/5 ⭐", label: "Trên Shopee & Lazada", icon: <Award className="h-5 w-5" /> },
  { value: "1.4M+", label: "Người theo dõi", icon: <Users className="h-5 w-5" /> },
  { value: "14×", label: "Tăng trưởng 2020–2022", icon: <TrendingUp className="h-5 w-5" /> },
]

const awards = [
  { year: "2021", title: "ELLE Beauty Awards", desc: "Sản phẩm Made in Vietnam của năm" },
  { year: "2022", title: "LazMall Brand Awards", desc: "Vietnam Brand of the Year" },
  { year: "2022", title: "APEA", desc: "Corporate Excellence" },
  { year: "2024", title: "BSI Awards", desc: "Gold — Best Influencer Strategy" },
]

const testimonials = [
  {
    quote: "Kem chống nắng bí đao của Cocoon thật sự thay đổi cuộc sống! Da mình không còn bóng dầu sau 2 tiếng nữa.",
    author: "Nguyễn Lan Anh",
    location: "Hà Nội",
  },
  {
    quote: "Cà phê Đắk Lắk của Cocoon là tốt nhất. Mùi thơm tự nhiên, da mình sáng hẳn sau 2 tuần dùng.",
    author: "Trần Minh Châu",
    location: "TP.HCM",
  },
  {
    quote: "Là người theo chủ nghĩa thuần chay, mình rất vui khi tìm được thương hiệu Việt Nam chất lượng cao và có đạo đức.",
    author: "Phạm Thu Hương",
    location: "Đà Nẵng",
  },
  {
    quote: "Nước hoa hồng sen Hậu Giang nhẹ nhàng, thấm nhanh, không kích ứng da nhạy cảm của mình. Đã dùng hết 3 chai!",
    author: "Lê Bảo Ngọc",
    location: "Cần Thơ",
  },
]

const navLinks = [
  { label: "Sản phẩm", href: "#products" },
  { label: "Về chúng tôi", href: "#about" },
  { label: "Đánh giá", href: "#social-proof" },
  { label: "Liên hệ", href: "#contact" },
]

// ── Component ───────────────────────────────────────────────────────────────
export function CocoonLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* ── Header ── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow ${
          scrollY > 50 ? "shadow-sm" : ""
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex h-9 w-9 items-center justify-center rounded-2xl bg-green-600"
            >
              <Leaf className="h-5 w-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight">Cocoon</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="sm" className="rounded-xl" asChild>
              <a href="https://cocoonvietnam.com/en" target="_blank" rel="noopener noreferrer">
                Tìm hiểu thêm
              </a>
            </Button>
            <Button size="sm" className="rounded-xl bg-green-600 text-white hover:bg-green-700" asChild>
              <a href="https://shopee.vn/cocoonvietnam" target="_blank" rel="noopener noreferrer">
                Mua ngay
              </a>
            </Button>
          </div>

          <button
            className="flex md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-background pt-16 md:hidden"
        >
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container mx-auto grid gap-1 px-4 py-6"
          >
            {navLinks.map((item) => (
              <motion.div key={item.href} variants={itemFadeIn}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemFadeIn} className="mt-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full rounded-xl" asChild>
                <a href="https://cocoonvietnam.com/en" target="_blank" rel="noopener noreferrer">
                  Tìm hiểu thêm
                </a>
              </Button>
              <Button className="w-full rounded-xl bg-green-600 text-white hover:bg-green-700" asChild>
                <a href="https://shopee.vn/cocoonvietnam" target="_blank" rel="noopener noreferrer">
                  Mua ngay
                </a>
              </Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="w-full py-12 md:py-20 lg:py-28 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-3xl border bg-gradient-to-br from-green-50/60 to-background p-6 md:p-10 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="flex flex-col justify-center space-y-6"
                >
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-700"
                    >
                      <Zap className="h-3.5 w-3.5" />
                      Thuần chay • Không thử nghiệm trên động vật
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl"
                    >
                      Làn da khỏe từ{" "}
                      <span className="text-green-600">thiên nhiên Việt Nam</span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                      className="max-w-lg text-lg text-muted-foreground"
                    >
                      Mỹ phẩm thuần chay đầu tiên của Việt Nam đạt chứng nhận{" "}
                      <strong>Leaping Bunny</strong>, <strong>PETA</strong> và{" "}
                      <strong>The Vegan Society</strong>. Nguyên liệu từ Đắk Lắk, Hậu Giang, Bến Tre.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-col gap-3 sm:flex-row"
                  >
                    <Button size="lg" className="rounded-2xl bg-green-600 text-white hover:bg-green-700 group" asChild>
                      <a href="#products">
                        Khám phá sản phẩm
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-2xl" asChild>
                      <a href="#about">Tìm hiểu thêm</a>
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap items-center gap-4 pt-1"
                  >
                    {["Leaping Bunny", "PETA Certified", "The Vegan Society"].map((cert) => (
                      <div key={cert} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {cert}
                      </div>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative h-[360px] w-full overflow-hidden rounded-2xl md:h-[460px]">
                    <Image
                      src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1200&q=80"
                      alt="Bộ sưu tập sản phẩm Cocoon Vietnam"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-transparent" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="absolute -bottom-4 -left-4 rounded-2xl border bg-background p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">700K+ đánh giá</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Cocoon ── */}
        <section id="about" className="w-full py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-3xl border bg-muted/20 p-6 md:p-10"
            >
              <div className="mb-10 text-center">
                <div className="mb-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Tại sao chọn Cocoon?
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Vì bạn xứng đáng với điều tốt nhất
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                  Cocoon kết hợp trí tuệ thiên nhiên Việt Nam với công nghệ hiện đại để mang lại sản phẩm thuần chay chất lượng quốc tế.
                </p>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {[
                  {
                    icon: <Leaf className="h-7 w-7 text-green-600" />,
                    title: "100% Thuần Chay",
                    desc: "Không thành phần từ động vật. Chứng nhận bởi The Vegan Society — tiêu chuẩn quốc tế khắt khe nhất.",
                  },
                  {
                    icon: <Globe className="h-7 w-7 text-green-600" />,
                    title: "Nguyên Liệu Việt Nam",
                    desc: "Cà phê Đắk Lắk, sen Hậu Giang, bưởi, bí đao, khổ qua — hương vị từ mảnh đất hình chữ S.",
                  },
                  {
                    icon: <ShieldCheck className="h-7 w-7 text-green-600" />,
                    title: "3 Chứng Nhận Quốc Tế",
                    desc: "Thương hiệu Việt Nam đầu tiên đạt đồng thời Leaping Bunny, PETA và The Vegan Society.",
                  },
                  {
                    icon: <Heart className="h-7 w-7 text-green-600" />,
                    title: "Không Hóa Chất Độc Hại",
                    desc: "Không sulfate, không paraben, không hương liệu tổng hợp. An toàn cho da nhạy cảm và thai phụ.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemFadeIn}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-2xl border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-50 transition-all duration-300 group-hover:bg-green-100" />
                    <div className="relative">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50">
                        {item.icon}
                      </div>
                      <h3 className="mb-2 font-semibold">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Products ── */}
        <section id="products" className="w-full py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-3xl border p-6 md:p-10"
            >
              <div className="mb-10 text-center">
                <div className="mb-3 inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium">
                  Sản phẩm nổi bật
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Bộ sưu tập từ thiên nhiên Việt Nam
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                  Mỗi sản phẩm là một câu chuyện về vùng đất và nguyên liệu đặc trưng của Việt Nam.
                </p>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
              >
                {products.map((product, i) => (
                  <motion.div
                    key={i}
                    variants={itemFadeIn}
                    whileHover={{ y: -8 }}
                    className="group flex flex-col overflow-hidden rounded-2xl border bg-background shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="relative h-52 overflow-hidden bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <span className="absolute left-3 top-3 rounded-full bg-green-600 px-2.5 py-0.5 text-xs font-medium text-white">
                        {product.tag}
                      </span>
                      <a
                        href="https://cocoonvietnam.com/en/collections/all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-foreground opacity-0 shadow transition-opacity group-hover:opacity-100"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="mb-1 flex items-center gap-1 text-xs text-green-600">
                        <Droplets className="h-3 w-3" />
                        {product.ingredient}
                      </div>
                      <h3 className="mb-2 text-sm font-semibold leading-tight">{product.name}</h3>
                      <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
                        {product.benefit}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-green-700">{product.price}</span>
                        <Button size="sm" variant="outline" className="rounded-xl h-8 text-xs" asChild>
                          <a href="https://cocoonvietnam.com/en/collections/all" target="_blank" rel="noopener noreferrer">
                            Xem <ArrowRight className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-8 flex justify-center">
                <Button size="lg" className="rounded-2xl bg-green-600 text-white hover:bg-green-700 group" asChild>
                  <a href="https://cocoonvietnam.com/en/collections/all" target="_blank" rel="noopener noreferrer">
                    Xem tất cả sản phẩm
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Social Proof ── */}
        <section id="social-proof" className="w-full py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-3xl border bg-muted/20 p-6 md:p-10"
            >
              {/* Stats */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={itemFadeIn}
                    className="flex flex-col items-center rounded-2xl border bg-background p-5 text-center shadow-sm"
                  >
                    <div className="mb-2 text-green-600">{stat.icon}</div>
                    <div className="text-2xl font-bold sm:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Awards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="mb-10"
              >
                <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">Giải thưởng & Công nhận</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {awards.map((award, i) => (
                    <motion.div
                      key={i}
                      variants={itemFadeIn}
                      whileHover={{ y: -4 }}
                      className="flex flex-col items-center rounded-2xl border bg-background p-5 text-center shadow-sm"
                    >
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50">
                        <Award className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="text-xs font-medium text-muted-foreground">{award.year}</div>
                      <div className="mt-1 text-sm font-bold">{award.title}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{award.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonials */}
              <div>
                <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">Khách hàng nói gì?</h2>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-4 md:grid-cols-2"
                >
                  {testimonials.map((t, i) => (
                    <motion.div
                      key={i}
                      variants={itemFadeIn}
                      whileHover={{ y: -4 }}
                      className="flex flex-col justify-between rounded-2xl border bg-background p-6 shadow-sm"
                    >
                      <div>
                        <div className="mb-3 flex gap-0.5">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="text-sm leading-relaxed">"{t.quote}"</blockquote>
                      </div>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-700">
                          {t.author.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-medium">{t.author}</div>
                          <div className="text-xs text-muted-foreground">{t.location}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="w-full py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-3xl bg-green-600 p-8 text-center md:p-14"
            >
              <Sparkles className="mx-auto mb-4 h-10 w-10 text-green-200" />
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Bắt đầu hành trình làn da khỏe mạnh
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-green-100">
                Khám phá hơn 50 sản phẩm thuần chay được hàng triệu người Việt tin dùng. Giá từ 29.000₫.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="rounded-2xl bg-white font-semibold text-green-700 hover:bg-green-50" asChild>
                  <a href="https://cocoonvietnam.com/en/collections/all" target="_blank" rel="noopener noreferrer">
                    Khám phá bộ sưu tập
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl border-white text-white hover:bg-white/10" asChild>
                  <a href="#about">Tìm hiểu thêm</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="w-full py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid gap-6 rounded-3xl border p-6 md:p-10 lg:grid-cols-2 lg:gap-10"
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <div className="mb-3 inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium">
                    Liên hệ
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">Hãy kết nối với chúng tôi</h2>
                  <p className="mt-4 text-muted-foreground">
                    Có câu hỏi về sản phẩm? Cần tư vấn skincare? Đội ngũ Cocoon luôn sẵn sàng hỗ trợ bạn.
                  </p>
                </div>

                <div className="space-y-4">
                  <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-green-50">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium">Địa chỉ</div>
                      <div className="text-sm text-muted-foreground">
                        457 Nguyễn Đình Chiểu, Phường 5, Quận 3, TP.HCM
                      </div>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-green-50">
                      <Globe className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium">Website</div>
                      <a
                        href="https://cocoonvietnam.com/en"
                        className="text-sm text-green-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        cocoonvietnam.com
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <div className="mb-3 text-sm font-medium">Theo dõi Cocoon</div>
                  <div className="flex gap-2">
                    {[
                      { href: "https://www.facebook.com/CocoonVietnamOfficial", label: "Facebook", icon: <FacebookIcon className="h-5 w-5" /> },
                      { href: "https://www.instagram.com/cocoon.vietnam", label: "Instagram", icon: <InstagramIcon className="h-5 w-5" /> },
                      { href: "https://www.tiktok.com/@cocoon.vietnam", label: "TikTok", icon: <TiktokIcon className="h-5 w-5" /> },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border text-muted-foreground transition-colors hover:border-green-600 hover:text-green-600"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border bg-background p-6 shadow-sm"
              >
                <h3 className="mb-1 text-lg font-semibold">Gửi tin nhắn</h3>
                <p className="mb-6 text-sm text-muted-foreground">Chúng tôi phản hồi trong vòng 24 giờ làm việc.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="first-name" className="text-sm font-medium">Họ</label>
                      <Input id="first-name" placeholder="Nguyễn" className="rounded-xl" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="last-name" className="text-sm font-medium">Tên</label>
                      <Input id="last-name" placeholder="Lan Anh" className="rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="email@example.com" className="rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium">Nội dung</label>
                    <Textarea
                      id="message"
                      placeholder="Bạn cần hỗ trợ gì về sản phẩm Cocoon?"
                      className="min-h-[120px] rounded-xl"
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-xl bg-green-600 text-white hover:bg-green-700">
                    <Send className="mr-2 h-4 w-4" />
                    Gửi tin nhắn
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full border-t">
        <div className="container mx-auto grid gap-8 px-4 py-12 md:px-6 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-600">
                <Leaf className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">Cocoon</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Mỹ phẩm thuần chay từ thiên nhiên Việt Nam. Chứng nhận Leaping Bunny, PETA và The Vegan Society.
            </p>
            <div className="flex gap-2">
              {[
                { href: "https://www.facebook.com/CocoonVietnamOfficial", label: "Facebook", icon: <FacebookIcon className="h-4 w-4" /> },
                { href: "https://www.instagram.com/cocoon.vietnam", label: "Instagram", icon: <InstagramIcon className="h-4 w-4" /> },
                { href: "https://www.tiktok.com/@cocoon.vietnam", label: "TikTok", icon: <TiktokIcon className="h-4 w-4" /> },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Sản phẩm</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              {["Chăm sóc da mặt", "Chăm sóc tóc", "Chống nắng", "Tẩy trang", "Tẩy da chết"].map((item) => (
                <a
                  key={item}
                  href="https://cocoonvietnam.com/en/collections/all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Thương hiệu</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground">Câu chuyện của chúng tôi</a>
              <a href="#social-proof" className="hover:text-foreground">Giải thưởng</a>
              <a href="https://cocoonvietnam.com/en" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                Website chính thức
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Nhận ưu đãi độc quyền</h3>
            <p className="text-sm text-muted-foreground">
              Đăng ký nhận thông tin mới nhất về sản phẩm và khuyến mãi từ Cocoon.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Email của bạn" className="flex-1 rounded-xl" />
              <Button type="submit" size="sm" className="rounded-xl bg-green-600 text-white hover:bg-green-700">
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="flex flex-col gap-1">
              {["Leaping Bunny Certified", "PETA Cruelty Free", "The Vegan Society"].map((cert) => (
                <div key={cert} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t">
          <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:px-6">
            <p>© {new Date().getFullYear()} Cocoon Original Vietnam. Mọi quyền được bảo lưu.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground">Chính sách bảo mật</a>
              <a href="#" className="hover:text-foreground">Điều khoản sử dụng</a>
              <a href="#" className="hover:text-foreground">Chính sách đổi trả</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
