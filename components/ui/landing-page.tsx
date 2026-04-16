"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  ChevronLeft,
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
  Send,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// ── Animation variants ──────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}
const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
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
    image: "/kem_chong_nang.jpg",
    tag: "Bán chạy nhất",
  },
  {
    name: "Nước Hoa Hồng Sen Hậu Giang",
    ingredient: "Hoa Sen Hậu Giang",
    benefit: "Dưỡng ẩm sâu, làm dịu và cân bằng độ pH",
    price: "165.000₫",
    image: "/nuoc_hoa_hong.png",
    tag: "Yêu thích nhất",
  },
  {
    name: "Tẩy Da Chết Cà Phê Đắk Lắk",
    ingredient: "Cà Phê Đắk Lắk",
    benefit: "Tẩy tế bào chết, sáng da, chống oxy hóa",
    price: "145.000₫",
    image: "/tay_da_chet.jpg",
    tag: "Đặc sản Việt Nam",
  },
  {
    name: "Tẩy Trang Bí Đao",
    ingredient: "Bí Đao Hậu Giang",
    benefit: "Làm sạch sâu, kiểm soát mụn, làm mát da",
    price: "129.000₫",
    image: "/tay trang bi dao.jpg",
    tag: "Dịu nhẹ",
  },
  {
    name: "Dầu Dưỡng Tóc Bưởi",
    ingredient: "Tinh Dầu Bưởi Việt Nam",
    benefit: "Giảm gãy rụng, tăng độ dày và sức sống cho tóc",
    price: "195.000₫",
    image: "/dau_duong_buoi.jpg",
    tag: "Chăm sóc tóc",
  },
]

const stats = [
  { value: "700K+", label: "Đánh giá xác thực" },
  { value: "5/5", label: "Trên Shopee & Lazada" },
  { value: "1.4M+", label: "Người theo dõi" },
  { value: "14×", label: "Tăng trưởng 2020–2022" },
]

const awards = [
  { year: "2021", title: "ELLE Beauty Awards", desc: "Sản phẩm Made in Vietnam của năm" },
  { year: "2022", title: "LazMall Brand Awards", desc: "Vietnam Brand of the Year" },
  { year: "2022", title: "APEA", desc: "Corporate Excellence" },
  { year: "2024", title: "BSI Awards", desc: "Gold — Best Influencer Strategy" },
]

const testimonials = [
  {
    quote:
      "Kem chống nắng bí đao của Cocoon thật sự thay đổi cuộc sống! Da mình không còn bóng dầu sau 2 tiếng nữa.",
    author: "Nguyễn Lan Anh",
    location: "Hà Nội",
  },
  {
    quote: "Cà phê Đắk Lắk của Cocoon là tốt nhất. Mùi thơm tự nhiên, da mình sáng hẳn sau 2 tuần dùng.",
    author: "Trần Minh Châu",
    location: "TP.HCM",
  },
  {
    quote:
      "Là người theo chủ nghĩa thuần chay, mình rất vui khi tìm được thương hiệu Việt Nam chất lượng cao và có đạo đức.",
    author: "Phạm Thu Hương",
    location: "Đà Nẵng",
  },
  {
    quote:
      "Nước hoa hồng sen Hậu Giang nhẹ nhàng, thấm nhanh, không kích ứng da nhạy cảm của mình. Đã dùng hết 3 chai!",
    author: "Lê Bảo Ngọc",
    location: "Cần Thơ",
  },
]

const blogPosts = [
  {
    slug: "ca-phe-dak-lak-lam-dep",
    title: "Cà Phê Đắk Lắk trong Mỹ Phẩm: Bí Quyết Làm Đẹp Từ Thiên Nhiên Việt Nam",
    excerpt: "Caffeine và antioxidant từ cà phê Đắk Lắk giúp sáng da, chống lão hóa và tẩy tế bào chết tự nhiên.",
    category: "Thành phần & Làm đẹp",
    date: "10 tháng 4, 2025",
    readTime: "5 phút",
    image: "/tay_da_chet.jpg",
  },
  {
    slug: "buoi-ho-lo-duong-sang-da",
    title: "Bưởi Hồ Lô Hậu Giang: Bí Quyết Dưỡng Sáng Da Từ Ruộng Đồng Miền Tây",
    excerpt: "Vitamin C tự nhiên từ bưởi Hồ Lô giúp đều màu da, mờ thâm nám và tăng độ ẩm cho làn da mịn màng.",
    category: "Nguyên liệu Việt Nam",
    date: "3 tháng 4, 2025",
    readTime: "4 phút",
    image: "/dau_duong_buoi.jpg",
  },
  {
    slug: "bi-dao-ninh-thuan-lam-dep",
    title: "Bí Đao Ninh Thuận: Thành Phần 'Mới Nổi' Đáng Thử Trong Làm Đẹp",
    excerpt: "Từ đặc sản ăn uống đến bí quyết trị nám và dưỡng sáng da — bí đao Ninh Thuận đang lên ngôi trong làng mỹ phẩm thuần chay.",
    category: "Xu hướng làm đẹp",
    date: "27 tháng 3, 2025",
    readTime: "5 phút",
    image: "/tay trang bi dao.jpg",
  },
  {
    slug: "dau-dua-ben-tre-duong-am",
    title: "Dầu Dừa Bến Tre: Từ Vùng Đất Dừa Đến Công Thức Dưỡng Ẩm Chuẩn",
    excerpt: "Axit béo thiết yếu từ dừa xiêm Bến Tre giúp khóa ẩm 24 giờ, phục hồi hàng rào bảo vệ da và làm dịu da nhạy cảm.",
    category: "Chăm sóc da",
    date: "20 tháng 3, 2025",
    readTime: "6 phút",
    image: "/kem_chong_nang.jpg",
  },
]

const navLinks = [
  { label: "Sản phẩm", href: "#products" },
  { label: "Về chúng tôi", href: "#about" },
  { label: "Đánh giá", href: "#social-proof" },
  { label: "Blog", href: "https://kimquyenxinhdep.io.vn/tin-tuc/" },
  { label: "Liên hệ", href: "#contact" },
]

// ── Brand tokens ─────────────────────────────────────────────────────────────
const C = {
  forest: "#1a3d2b",
  sage: "#52796f",
  mint: "#84a98c",
  lightMint: "#a8c5b0",
  cream: "#faf6ee",
  creamAlt: "#f4f0e8",
  creamSection: "#eef4f0",
  honey: "#c5962d",
  bark: "#1c1a14",
  warmGray: "#6b6358",
}

// ── Component ───────────────────────────────────────────────────────────────
export function CocoonLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)
  const productScrollRef = useRef<HTMLDivElement>(null)
  const [activeBlog, setActiveBlog] = useState(0)
  const blogScrollRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const testimonialPausedRef = useRef(false)

  function scrollToProduct(idx: number) {
    const el = productScrollRef.current
    if (!el) return
    el.scrollTo({ left: idx * el.offsetWidth, behavior: "smooth" })
    setActiveProduct(idx)
  }

  function scrollToBlog(idx: number) {
    const el = blogScrollRef.current
    if (!el) return
    el.scrollTo({ left: idx * el.offsetWidth, behavior: "smooth" })
    setActiveBlog(idx)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const el = productScrollRef.current
    if (!el) return
    const handler = () => {
      setActiveProduct(Math.round(el.scrollLeft / el.offsetWidth))
    }
    el.addEventListener("scroll", handler, { passive: true })
    return () => el.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    const el = blogScrollRef.current
    if (!el) return
    const handler = () => {
      setActiveBlog(Math.round(el.scrollLeft / el.offsetWidth))
    }
    el.addEventListener("scroll", handler, { passive: true })
    return () => el.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    const el = testimonialRef.current
    if (!el) return
    const track = el
    let animId: number
    let last = 0
    let resumeTimer: ReturnType<typeof setTimeout>
    function step(ts: number) {
      if (!testimonialPausedRef.current) {
        const dt = last ? ts - last : 0
        track.scrollLeft += dt * 0.045
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft -= track.scrollWidth / 2
        }
      }
      last = ts
      animId = requestAnimationFrame(step)
    }
    animId = requestAnimationFrame(step)
    const pause = () => { testimonialPausedRef.current = true }
    const resume = () => { last = 0; testimonialPausedRef.current = false }
    const touchResume = () => {
      clearTimeout(resumeTimer)
      resumeTimer = setTimeout(resume, 1200)
    }
    el.addEventListener("mouseenter", pause)
    el.addEventListener("mouseleave", resume)
    el.addEventListener("touchstart", pause, { passive: true })
    el.addEventListener("touchend", touchResume)
    el.addEventListener("touchcancel", resume)
    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(resumeTimer)
      el.removeEventListener("mouseenter", pause)
      el.removeEventListener("mouseleave", resume)
      el.removeEventListener("touchstart", pause)
      el.removeEventListener("touchend", touchResume)
      el.removeEventListener("touchcancel", resume)
    }
  }, [])

  return (
    <div
      style={{ fontFamily: "var(--font-be-vietnam-pro)", backgroundColor: C.cream, color: C.bark }}
      className="flex min-h-screen flex-col"
    >
      {/* ── Back to Home ── */}
      <div className="sticky top-0 z-50 px-4 py-3" style={{ backgroundColor: C.cream, borderBottom: `1px solid rgba(26,61,43,0.06)` }}>
        <a
          href="https://kimquyenxinhdep.io.vn/"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-70"
          style={{ color: C.forest }}
        >
          ← Quay lại trang chủ
        </a>
      </div>

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative w-full overflow-hidden" style={{ backgroundColor: C.cream }}>
          {/* Mobile: full-bleed image background */}
          <div className="lg:hidden absolute inset-0 z-0">
            <Image
              src="/hero.jpg"
              alt=""
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, rgba(26,61,43,0.05) 0%, rgba(26,61,43,0.35) 40%, rgba(26,61,43,0.82) 65%, #1a3d2b 90%)" }}
            />
          </div>

          {/* Desktop: ambient blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden hidden lg:block" aria-hidden>
            <div
              className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-40"
              style={{ background: `radial-gradient(circle, ${C.creamSection} 0%, transparent 70%)` }}
            />
            <div
              className="absolute -bottom-16 -left-28 h-[380px] w-[380px] rounded-full opacity-25"
              style={{ background: `radial-gradient(circle, #e8dfc8 0%, transparent 70%)` }}
            />
          </div>

          <div className="relative z-10 container mx-auto px-5 lg:px-6 lg:py-24 xl:py-32">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">

              {/* Copy */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="flex flex-col justify-end min-h-[95svh] pb-14 space-y-5 lg:min-h-0 lg:justify-center lg:space-y-8"
              >
                <motion.div variants={fadeUp} className="flex items-center">
                  <Image
                    src="/cocoon logo.jpg"
                    alt="Cocoon Skin Routine"
                    width={96}
                    height={96}
                    className="rounded-full object-cover shadow-lg"
                  />
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-center gap-3">
                  <div className="h-px w-10 bg-[#a8c5b0] lg:bg-[#52796f]" />
                  <span
                    className="text-[#a8c5b0] lg:text-[#52796f]"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}
                  >
                    Thuần chay · Không thử nghiệm trên động vật
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-[2.6rem] font-bold sm:text-5xl xl:text-7xl text-white lg:text-[#1a3d2b]"
                  style={{ fontFamily: "var(--font-lora)", lineHeight: 1.08 }}
                >
                  Làn da khỏe
                  <br />
                  từ{" "}
                  <em className="italic text-[#a8c5b0] lg:text-[#52796f]">thiên nhiên</em>
                  <br />
                  Việt Nam
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="max-w-[420px] text-base leading-relaxed text-white/70 lg:text-[#6b6358] lg:text-lg"
                >
                  Mỹ phẩm thuần chay đầu tiên của Việt Nam đạt chứng nhận{" "}
                  <strong className="text-white lg:text-[#1a3d2b] font-semibold">Leaping Bunny</strong>,{" "}
                  <strong className="text-white lg:text-[#1a3d2b] font-semibold">PETA</strong> và{" "}
                  <strong className="text-white lg:text-[#1a3d2b] font-semibold">The Vegan Society</strong>.
                  Nguyên liệu từ Đắk Lắk, Hậu Giang, Bến Tre.
                </motion.p>

                {/* Mobile CTAs — honey gold on dark bg */}
                <motion.div variants={fadeUp} className="flex gap-3 lg:hidden">
                  <Link
                    href="#products"
                    className="rounded-full px-6 py-2.5 font-semibold text-white text-sm text-center transition-all whitespace-nowrap"
                    style={{ background: `linear-gradient(135deg, ${C.honey} 0%, #d4a63a 100%)`, letterSpacing: "0.02em" }}
                  >
                    Khám phá
                  </Link>
                  <Link
                    href="https://shopee.vn/cocoonvietnam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-6 py-2.5 font-medium text-sm text-white text-center transition-all whitespace-nowrap"
                    style={{ border: "1px solid rgba(255,255,255,0.4)", letterSpacing: "0.02em" }}
                  >
                    Mua ngay
                  </Link>
                </motion.div>

                {/* Desktop CTAs */}
                <motion.div variants={fadeUp} className="hidden lg:flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="#products"
                    className="group rounded-full px-8 py-3 font-semibold text-white text-center transition-all whitespace-nowrap"
                    style={{
                      background: `linear-gradient(135deg, ${C.forest} 0%, #2d6a4f 100%)`,
                      boxShadow: "0 4px 18px rgba(26,61,43,0.3)",
                      letterSpacing: "0.025em",
                    }}
                  >
                    Khám phá sản phẩm
                  </Link>
                  <Link
                    href="#about"
                    className="rounded-full px-8 py-3 font-medium text-center transition-all border whitespace-nowrap"
                    style={{ borderColor: `${C.forest}45`, color: C.forest, letterSpacing: "0.025em" }}
                  >
                    Câu chuyện của chúng tôi
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp} className="hidden lg:flex flex-wrap items-center gap-5 pt-1">
                  {["Leaping Bunny", "PETA Certified", "The Vegan Society"].map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <div
                        className="flex h-5 w-5 items-center justify-center rounded-full"
                        style={{ backgroundColor: C.forest }}
                      >
                        <CheckCircle className="h-3 w-3 text-white" style={{ strokeWidth: 2.5 }} />
                      </div>
                      <span style={{ fontSize: "0.8rem", color: C.sage, fontWeight: 600 }}>{cert}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Desktop organic-shaped image */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideRight}
                className="hidden lg:flex relative justify-end"
              >
                <div className="relative w-full max-w-[500px]">
                  <div
                    className="relative overflow-hidden"
                    style={{
                      borderRadius: "60% 40% 55% 45% / 48% 50% 50% 52%",
                      aspectRatio: "1 / 1.12",
                    }}
                  >
                    <Image
                      src="/hero.jpg"
                      alt="Bộ sưu tập sản phẩm Cocoon Vietnam"
                      fill
                      className="object-cover"
                      priority
                      sizes="50vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(135deg, ${C.forest}20 0%, transparent 55%)` }}
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.9, type: "spring", stiffness: 180, damping: 20 }}
                    className="absolute -bottom-5 -left-10"
                    style={{
                      backgroundColor: C.cream,
                      borderRadius: "18px",
                      padding: "14px 20px",
                      boxShadow: `0 12px 40px rgba(26,61,43,0.12)`,
                      border: `1px solid rgba(26,61,43,0.07)`,
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5" style={{ fill: C.honey, color: C.honey }} />
                        ))}
                      </div>
                      <span style={{ fontSize: "0.875rem", fontWeight: 700, color: C.forest }}>700K+ đánh giá</span>
                    </div>
                    <p style={{ fontSize: "0.72rem", color: C.warmGray, marginTop: "3px" }}>
                      Từ 1.4M+ khách hàng tin dùng
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                    className="absolute -right-8 -top-5"
                    style={{
                      backgroundColor: C.forest,
                      borderRadius: "14px",
                      padding: "10px 16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Leaf className="h-4 w-4" style={{ color: C.lightMint }} />
                    <span style={{ fontSize: "0.8rem", color: "white", fontWeight: 600 }}>100% Thuần Chay</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Wave transition to stats */}
          <div className="relative -mb-px h-14 overflow-hidden" aria-hidden>
            <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 56" preserveAspectRatio="none" fill="none">
              <path d="M0,28 C480,56 960,0 1440,28 L1440,56 L0,56 Z" fill={C.creamAlt} />
            </svg>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="w-full py-12" style={{ backgroundColor: C.creamAlt }}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 divide-x divide-y lg:grid-cols-4 lg:divide-y-0" style={{ borderColor: `${C.forest}12` }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55, ease }}
                  className="flex flex-col items-center justify-center px-6 py-6 text-center"
                >
                  <div
                    className="mb-3 h-0.5 w-8 rounded-full"
                    style={{ backgroundColor: C.honey }}
                  />
                  <div
                    style={{
                      fontFamily: "var(--font-lora)",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: C.forest,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: C.sage, marginTop: "6px", lineHeight: 1.4 }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Cocoon ── */}
        <section id="about" className="w-full py-20 md:py-28" style={{ backgroundColor: C.cream }}>
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-14 text-center"
            >
              <motion.div variants={fadeUp} className="mb-5 flex items-center justify-center gap-3">
                <div className="h-px w-12" style={{ backgroundColor: C.lightMint }} />
                <span
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: C.sage,
                    fontWeight: 600,
                  }}
                >
                  Tại sao chọn Cocoon?
                </span>
                <div className="h-px w-12" style={{ backgroundColor: C.lightMint }} />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mx-auto text-4xl font-bold sm:text-5xl"
                style={{ fontFamily: "var(--font-lora)", color: C.forest, lineHeight: 1.12, maxWidth: "640px" }}
              >
                Vì bạn xứng đáng với{" "}
                <em style={{ fontStyle: "italic", color: C.sage }}>điều tốt nhất</em>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-xl text-lg leading-relaxed"
                style={{ color: C.warmGray }}
              >
                Cocoon kết hợp trí tuệ thiên nhiên Việt Nam với công nghệ hiện đại để mang lại sản phẩm thuần chay
                chất lượng quốc tế.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  icon: <Leaf className="h-6 w-6" style={{ color: C.forest }} />,
                  title: "100% Thuần Chay",
                  desc: "Không thành phần từ động vật. Chứng nhận bởi The Vegan Society — tiêu chuẩn quốc tế khắt khe nhất.",
                  bg: C.creamSection,
                  border: `1px solid rgba(26,61,43,0.1)`,
                },
                {
                  icon: <Globe className="h-6 w-6" style={{ color: C.forest }} />,
                  title: "Nguyên Liệu Việt Nam",
                  desc: "Cà phê Đắk Lắk, sen Hậu Giang, bưởi, bí đao, khổ qua — hương vị từ mảnh đất hình chữ S.",
                  bg: "white",
                  border: `1px solid rgba(26,61,43,0.06)`,
                },
                {
                  icon: <ShieldCheck className="h-6 w-6" style={{ color: C.forest }} />,
                  title: "3 Chứng Nhận Quốc Tế",
                  desc: "Thương hiệu Việt Nam đầu tiên đạt đồng thời Leaping Bunny, PETA và The Vegan Society.",
                  bg: "white",
                  border: `1px solid rgba(26,61,43,0.06)`,
                },
                {
                  icon: <Heart className="h-6 w-6" style={{ color: C.honey }} />,
                  title: "Không Hóa Chất Độc Hại",
                  desc: "Không sulfate, không paraben, không hương liệu tổng hợp. An toàn cho da nhạy cảm và thai phụ.",
                  bg: "#fef9ec",
                  border: `1px solid rgba(197,150,45,0.15)`,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="flex flex-col rounded-3xl p-7 transition-all duration-300"
                  style={{
                    backgroundColor: item.bg,
                    border: item.border,
                    boxShadow: `0 2px 12px rgba(26,61,43,0.04)`,
                  }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    {item.icon}
                    <span
                      style={{
                        fontFamily: "var(--font-lora)",
                        fontSize: "1.8rem",
                        fontWeight: 700,
                        color: `${C.forest}10`,
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-lora)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: C.forest,
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: C.warmGray, lineHeight: 1.72 }}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Products ── */}
        <section id="products" className="w-full py-20 md:py-28" style={{ backgroundColor: C.creamAlt }}>
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-14 text-center"
            >
              <motion.div variants={fadeUp} className="mb-5 flex items-center justify-center gap-3">
                <div className="h-px w-12" style={{ backgroundColor: C.lightMint }} />
                <span
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: C.sage,
                    fontWeight: 600,
                  }}
                >
                  Sản phẩm nổi bật
                </span>
                <div className="h-px w-12" style={{ backgroundColor: C.lightMint }} />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mx-auto text-4xl font-bold sm:text-5xl"
                style={{ fontFamily: "var(--font-lora)", color: C.forest, lineHeight: 1.12, maxWidth: "640px" }}
              >
                Bộ sưu tập từ{" "}
                <em style={{ fontStyle: "italic", color: C.sage }}>thiên nhiên Việt Nam</em>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-xl text-lg leading-relaxed"
                style={{ color: C.warmGray }}
              >
                Mỗi sản phẩm là một câu chuyện về vùng đất và nguyên liệu đặc trưng của Việt Nam.
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <div
              ref={productScrollRef}
              className="flex gap-0 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:gap-5 md:overflow-visible md:pb-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            >
              {products.map((product, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group flex flex-col overflow-hidden rounded-3xl transition-all duration-300 min-w-full snap-start md:min-w-0 md:w-auto"
                  style={{
                    backgroundColor: "white",
                    boxShadow: `0 4px 20px rgba(26,61,43,0.07)`,
                    border: `1px solid rgba(26,61,43,0.06)`,
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "224px", backgroundColor: C.creamSection }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <span
                      className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white"
                      style={{ backgroundColor: C.forest }}
                    >
                      {product.tag}
                    </span>
                    <a
                      href="https://kimquyenxinhdep.io.vn/san-pham-2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-md transition-all duration-200 hover:scale-110 group-hover:opacity-100"
                      style={{ color: C.forest }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 flex items-center gap-1.5">
                      <Droplets className="h-3.5 w-3.5" style={{ color: C.sage }} />
                      <span
                        style={{
                          fontSize: "0.68rem",
                          color: C.sage,
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {product.ingredient}
                      </span>
                    </div>
                    <h3
                      style={{ fontSize: "0.9rem", fontWeight: 700, color: C.forest, marginBottom: "8px", lineHeight: 1.4 }}
                    >
                      {product.name}
                    </h3>
                    <p style={{ fontSize: "0.8rem", color: C.warmGray, lineHeight: 1.65, flex: 1 }}>
                      {product.benefit}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span
                        style={{ fontFamily: "var(--font-lora)", fontSize: "1.1rem", fontWeight: 700, color: C.honey }}
                      >
                        {product.price}
                      </span>
                      <a
                        href="https://kimquyenxinhdep.io.vn/san-pham-2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-7 px-3 text-xs font-medium rounded-full transition-all border text-center inline-flex items-center whitespace-nowrap"
                        style={{ borderColor: `${C.forest}35`, color: C.forest, letterSpacing: "0.02em" }}
                      >
                        Xem
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            </motion.div>

            {/* Mobile carousel controls */}
            <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
              <button
                onClick={() => scrollToProduct(activeProduct - 1)}
                disabled={activeProduct === 0}
                className="flex h-8 w-8 items-center justify-center rounded-full border transition-all disabled:opacity-20"
                style={{ borderColor: `${C.forest}30`, color: C.forest, backgroundColor: "white" }}
                aria-label="Sản phẩm trước"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                {products.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToProduct(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      height: "6px",
                      width: activeProduct === i ? "20px" : "6px",
                      backgroundColor: activeProduct === i ? C.forest : `${C.sage}40`,
                    }}
                    aria-label={`Sản phẩm ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => scrollToProduct(activeProduct + 1)}
                disabled={activeProduct === products.length - 1}
                className="flex h-8 w-8 items-center justify-center rounded-full border transition-all disabled:opacity-20"
                style={{ borderColor: `${C.forest}30`, color: C.forest, backgroundColor: "white" }}
                aria-label="Sản phẩm tiếp theo"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 md:mt-12 flex justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="https://kimquyenxinhdep.io.vn/san-pham-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-full px-10 py-3 font-semibold text-white text-center transition-all inline-block whitespace-nowrap"
                  style={{
                    background: `linear-gradient(135deg, ${C.forest} 0%, #2d6a4f 100%)`,
                    boxShadow: "0 4px 18px rgba(26,61,43,0.28)",
                    fontSize: "1rem",
                    letterSpacing: "0.025em",
                  }}
                >
                  Xem tất cả sản phẩm
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Awards ── */}
        <section className="w-full py-20 md:py-28" style={{ backgroundColor: C.cream }}>
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-12 text-center"
            >
              <motion.h2
                variants={fadeUp}
                className="text-4xl font-bold sm:text-5xl"
                style={{ fontFamily: "var(--font-lora)", color: C.forest, lineHeight: 1.12 }}
              >
                Giải thưởng &{" "}
                <em style={{ fontStyle: "italic", color: C.sage }}>Công nhận</em>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-3xl"
              style={{ border: `1px solid rgba(26,61,43,0.08)` }}
            >
              {awards.map((award, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex flex-col p-7 transition-colors duration-200 hover:bg-[#eef4f0]"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-lora)",
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: `${C.honey}22`,
                      lineHeight: 1,
                      marginBottom: "16px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {award.year}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-lora)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: C.forest,
                      marginBottom: "6px",
                      lineHeight: 1.3,
                    }}
                  >
                    {award.title}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: C.warmGray, lineHeight: 1.6, flex: 1 }}>
                    {award.desc}
                  </div>
                  <div className="mt-5 h-0.5 w-8 rounded-full" style={{ backgroundColor: C.honey }} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section id="social-proof" className="w-full py-20 md:py-28" style={{ backgroundColor: C.cream }}>
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-14 text-center"
            >
              <motion.div variants={fadeUp} className="mb-3 flex items-center justify-center gap-3">
                <div className="h-px w-10" style={{ backgroundColor: C.honey }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", color: C.sage, textTransform: "uppercase" }}>Đánh giá thực tế</span>
                <div className="h-px w-10" style={{ backgroundColor: C.honey }} />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-4xl font-bold sm:text-5xl"
                style={{ fontFamily: "var(--font-lora)", color: C.forest, lineHeight: 1.12 }}
              >
                Khách hàng{" "}
                <em style={{ fontStyle: "italic", color: C.honey }}>nói gì?</em>
              </motion.h2>
            </motion.div>

            {/* Auto-scroll marquee track */}
            <div className="relative overflow-hidden -mx-4 md:-mx-6 lg:-mx-0">
              {/* Edge gradient fades */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10"
                style={{ background: `linear-gradient(to right, ${C.cream}, transparent)` }} />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10"
                style={{ background: `linear-gradient(to left, ${C.cream}, transparent)` }} />

              <div
                ref={testimonialRef}
                className="flex gap-5 overflow-x-auto pb-4 px-4 md:px-6 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div
                    key={i}
                    aria-hidden={i >= testimonials.length ? true : undefined}
                    className="relative overflow-hidden rounded-3xl bg-white p-8 flex-shrink-0 w-[300px] md:w-[340px]"
                    style={{ boxShadow: "0 2px 24px rgba(26,61,43,0.07)" }}
                  >
                    {/* Honey accent top bar */}
                    <div
                      className="absolute left-8 top-0 h-0.5 w-12 rounded-full"
                      style={{ backgroundColor: C.honey }}
                    />
                    {/* Decorative quote mark */}
                    <div
                      aria-hidden
                      style={{
                        fontFamily: "var(--font-lora)",
                        fontSize: "6rem",
                        lineHeight: 0.75,
                        color: `${C.honey}18`,
                        position: "absolute",
                        top: "16px",
                        right: "24px",
                        fontWeight: 700,
                        userSelect: "none",
                      }}
                    >
                      &ldquo;
                    </div>
                    <div className="relative">
                      <div className="mb-4 flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-3.5 w-3.5" style={{ fill: C.honey, color: C.honey }} />
                        ))}
                      </div>
                      <blockquote
                        style={{
                          fontFamily: "var(--font-lora)",
                          fontSize: "1.05rem",
                          color: C.bark,
                          fontStyle: "italic",
                          lineHeight: 1.8,
                        }}
                      >
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: `${C.honey}18`,
                          border: `1.5px solid ${C.honey}45`,
                          fontFamily: "var(--font-lora)",
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: C.forest,
                        }}
                      >
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontSize: "0.88rem", fontWeight: 600, color: C.forest }}>{t.author}</div>
                        <div className="flex items-center gap-1" style={{ fontSize: "0.72rem", color: C.sage, marginTop: "2px" }}>
                          <MapPin className="h-2.5 w-2.5" />
                          {t.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Blog ── */}
        <section id="blog" className="w-full py-16 md:py-20" style={{ backgroundColor: C.creamAlt }}>
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-10 flex items-end justify-between"
            >
              <div>
                <motion.div variants={fadeUp} className="mb-3 flex items-center gap-3">
                  <div className="h-px w-8" style={{ backgroundColor: C.honey }} />
                  <span style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.sage, fontWeight: 600 }}>
                    Từ Blog Cocoon
                  </span>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl font-bold sm:text-4xl"
                  style={{ fontFamily: "var(--font-lora)", color: C.forest, lineHeight: 1.15 }}
                >
                  Bí quyết làm đẹp<br />
                  <em style={{ fontStyle: "italic", color: C.sage }}>từ thiên nhiên</em>
                </motion.h2>
              </div>
              <motion.div variants={fadeUp}>
                <a
                  href="https://kimquyenxinhdep.io.vn/tin-tuc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-60 whitespace-nowrap"
                  style={{ color: C.forest }}
                >
                  Xem tất cả <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Carousel */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                ref={blogScrollRef}
                className="flex gap-0 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:gap-5 md:overflow-visible md:pb-0 md:grid-cols-2 lg:grid-cols-4"
              >
                {blogPosts.map((post, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="min-w-full snap-start md:min-w-0 overflow-hidden rounded-3xl bg-white transition-shadow duration-300 hover:shadow-lg"
                    style={{ boxShadow: "0 2px 16px rgba(26,61,43,0.07)", border: `1px solid rgba(26,61,43,0.05)` }}
                  >
                    <a href="https://kimquyenxinhdep.io.vn/tin-tuc/" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                      <div className="relative overflow-hidden" style={{ height: "180px" }}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(26,61,43,0.25) 100%)" }} />
                        <span
                          className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold"
                          style={{ backgroundColor: "rgba(26,61,43,0.85)", color: C.lightMint, letterSpacing: "0.04em" }}
                        >
                          {post.category}
                        </span>
                      </div>
                      <div className="flex flex-col flex-1 p-5 gap-2.5">
                        <h3
                          className="font-bold leading-snug line-clamp-2"
                          style={{ fontFamily: "var(--font-lora)", fontSize: "0.98rem", color: C.forest }}
                        >
                          {post.title}
                        </h3>
                        <p className="text-sm leading-relaxed line-clamp-2 flex-1" style={{ color: C.warmGray }}>
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-2" style={{ borderTop: `1px solid rgba(26,61,43,0.06)` }}>
                          <span style={{ fontSize: "0.72rem", color: `${C.sage}90` }}>{post.date} · {post.readTime}</span>
                          <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: C.forest }}>
                            Đọc tiếp <ArrowUpRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile carousel controls */}
            <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
              <button
                onClick={() => scrollToBlog(activeBlog - 1)}
                disabled={activeBlog === 0}
                className="flex h-8 w-8 items-center justify-center rounded-full border transition-all disabled:opacity-20"
                style={{ borderColor: `${C.forest}30`, color: C.forest, backgroundColor: "white" }}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2">
                {blogPosts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToBlog(i)}
                    className="rounded-full transition-all duration-300"
                    style={{ height: "6px", width: activeBlog === i ? "20px" : "6px",
                             backgroundColor: activeBlog === i ? C.forest : `${C.sage}40` }}
                    aria-label={`Bài viết ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => scrollToBlog(activeBlog + 1)}
                disabled={activeBlog === blogPosts.length - 1}
                className="flex h-8 w-8 items-center justify-center rounded-full border transition-all disabled:opacity-20"
                style={{ borderColor: `${C.forest}30`, color: C.forest, backgroundColor: "white" }}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 flex justify-center sm:hidden">
              <a
                href="https://kimquyenxinhdep.io.vn/tin-tuc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: C.forest }}
              >
                Xem tất cả bài viết <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="w-full overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            {/* Left: CTA image */}
            <div className="flex items-center justify-center" style={{ backgroundColor: C.creamAlt }}>
              <Image
                src="/cta.jpg"
                alt="Cocoon Vietnam sản phẩm"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Right: cream CTA content */}
            <div
              className="flex flex-col justify-center px-10 py-16 md:px-16"
              style={{ backgroundColor: C.cream }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.div variants={fadeUp} className="mb-4 h-0.5 w-10 rounded-full" style={{ backgroundColor: C.honey }} />
                <motion.h2
                  variants={fadeUp}
                  className="text-4xl font-bold sm:text-5xl"
                  style={{ fontFamily: "var(--font-lora)", color: C.forest, lineHeight: 1.1 }}
                >
                  Bắt đầu hành trình
                  <br />
                  <em style={{ fontStyle: "italic", color: C.sage }}>làn da khỏe mạnh</em>
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-sm leading-relaxed"
                  style={{ color: C.warmGray, fontSize: "0.95rem" }}
                >
                  Khám phá kiến thức làm đẹp từ thiên nhiên Việt Nam qua các bài viết chuyên sâu của Cocoon.
                </motion.p>
                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    className="rounded-full px-8 font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${C.forest} 0%, #2d6a4f 100%)`,
                      boxShadow: "0 4px 18px rgba(26,61,43,0.3)",
                      letterSpacing: "0.025em",
                    }}
                    onClick={() => window.location.href = "https://kimquyenxinhdep.io.vn/tin-tuc/"}
                  >
                    Đọc bài viết mới nhất
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 font-semibold"
                    style={{ borderColor: `${C.forest}45`, color: C.forest, letterSpacing: "0.025em" }}
                    onClick={() => window.location.href = "#about"}
                  >
                    Tìm hiểu về Cocoon
                  </Button>
                </motion.div>
                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-5">
                  {["Thuần chay 100%", "Không thử trên động vật", "Nguyên liệu Việt Nam"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: C.honey }} />
                      <span style={{ fontSize: "0.75rem", color: C.sage, fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="w-full py-20 md:py-28" style={{ backgroundColor: C.creamAlt }}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Left */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideLeft}
                className="space-y-8"
              >
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-px w-10" style={{ backgroundColor: C.sage }} />
                    <span
                      style={{
                        fontSize: "0.75rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: C.sage,
                        fontWeight: 600,
                      }}
                    >
                      Liên hệ
                    </span>
                  </div>
                  <h2
                    className="text-4xl font-bold sm:text-5xl"
                    style={{ fontFamily: "var(--font-lora)", color: C.forest, lineHeight: 1.12 }}
                  >
                    Hãy kết nối
                    <br />
                    <em style={{ fontStyle: "italic", color: C.sage }}>với chúng tôi</em>
                  </h2>
                  <p className="mt-5 max-w-sm leading-relaxed" style={{ color: C.warmGray }}>
                    Có câu hỏi về sản phẩm? Cần tư vấn skincare? Đội ngũ Cocoon luôn sẵn sàng hỗ trợ bạn.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: <MapPin className="h-5 w-5" style={{ color: C.forest }} />,
                      label: "Địa chỉ",
                      content: "457 Nguyễn Đình Chiểu, Phường 5, Quận 3, TP.HCM",
                    },
                    {
                      icon: <Globe className="h-5 w-5" style={{ color: C.forest }} />,
                      label: "Website",
                      content: "kimquyenxinhdep.io.vn",
                      href: "https://kimquyenxinhdep.io.vn/",
                    },
                    {
                      icon: <FacebookIcon className="h-5 w-5" />,
                      label: "Fanpage",
                      content: "Cocoon Skin Routine",
                      href: "https://www.facebook.com/CocoonSkinRoutine",
                    },
                  ].map((item, i) => (
                    <motion.div key={i} whileHover={{ x: 5 }} className="flex items-start gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                        style={{
                          backgroundColor: "white",
                          border: `1px solid rgba(26,61,43,0.08)`,
                          boxShadow: `0 2px 10px rgba(26,61,43,0.05)`,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: C.sage,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                            style={{ fontSize: "0.9rem", color: C.forest, fontWeight: 500 }}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <div style={{ fontSize: "0.9rem", color: C.bark, marginTop: "2px" }}>{item.content}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: C.sage,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "14px",
                    }}
                  >
                    Theo dõi Cocoon
                  </div>
                  <div className="flex gap-3">
                    {[
                      {
                        href: "https://www.facebook.com/CocoonSkinRoutine",
                        label: "Facebook",
                        icon: <FacebookIcon className="h-5 w-5" />,
                      },
                      {
                        href: "https://www.tiktok.com/@trucanh2401?_r=1&_t=ZS-95YuxGC8OA8",
                        label: "TikTok",
                        icon: <TiktokIcon className="h-5 w-5" />,
                      },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{ y: -4, scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl transition-colors"
                        style={{
                          backgroundColor: "white",
                          border: `1px solid rgba(26,61,43,0.08)`,
                          color: C.sage,
                          boxShadow: `0 2px 10px rgba(26,61,43,0.05)`,
                        }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: contact form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideRight}
                className="rounded-3xl p-8"
                style={{
                  backgroundColor: "white",
                  boxShadow: `0 8px 40px rgba(26,61,43,0.08)`,
                  border: `1px solid rgba(26,61,43,0.06)`,
                }}
              >
                <h3
                  style={{ fontFamily: "var(--font-lora)", fontSize: "1.65rem", fontWeight: 700, color: C.forest }}
                >
                  Gửi tin nhắn
                </h3>
                <p style={{ fontSize: "0.875rem", color: C.warmGray, marginTop: "6px", marginBottom: "24px" }}>
                  Chúng tôi phản hồi trong vòng 24 giờ làm việc.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="first-name" style={{ fontSize: "0.8rem", fontWeight: 600, color: C.forest }}>
                        Họ
                      </label>
                      <Input
                        id="first-name"
                        placeholder="Nguyễn"
                        className="rounded-xl"
                        style={{ borderColor: `rgba(26,61,43,0.15)` }}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="last-name" style={{ fontSize: "0.8rem", fontWeight: 600, color: C.forest }}>
                        Tên
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Lan Anh"
                        className="rounded-xl"
                        style={{ borderColor: `rgba(26,61,43,0.15)` }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" style={{ fontSize: "0.8rem", fontWeight: 600, color: C.forest }}>
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      className="rounded-xl"
                      style={{ borderColor: `rgba(26,61,43,0.15)` }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" style={{ fontSize: "0.8rem", fontWeight: 600, color: C.forest }}>
                      Nội dung
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Bạn cần hỗ trợ gì về sản phẩm Cocoon?"
                      className="min-h-[120px] rounded-xl"
                      style={{ borderColor: `rgba(26,61,43,0.15)` }}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${C.forest} 0%, #2d6a4f 100%)`,
                      boxShadow: "0 4px 16px rgba(26,61,43,0.25)",
                      letterSpacing: "0.025em",
                    }}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Gửi tin nhắn
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

    </div>
  )
}
