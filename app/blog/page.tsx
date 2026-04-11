import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog — Bí quyết làm đẹp từ thiên nhiên Việt Nam | Cocoon Vietnam",
  description:
    "Khám phá các bài viết về chăm sóc da, thành phần thiên nhiên và bí quyết làm đẹp từ Cocoon Vietnam — thương hiệu mỹ phẩm thuần chay đầu tiên của Việt Nam.",
}

const posts = [
  {
    slug: "ca-phe-dak-lak-lam-dep",
    title: "Cà Phê Đắk Lắk trong Mỹ Phẩm: Bí Quyết Làm Đẹp Từ Thiên Nhiên Việt Nam",
    excerpt:
      "Khám phá cách cà phê Đắk Lắk trở thành thành phần chăm sóc da đỉnh cao — từ caffeine chống lão hóa đến antioxidant tẩy tế bào chết tự nhiên.",
    category: "Thành phần & Làm đẹp",
    date: "10 tháng 4, 2025",
    readTime: "5 phút đọc",
  },
  {
    slug: "buoi-ho-lo-duong-sang-da",
    title: "Bưởi Hồ Lô Hậu Giang: Bí Quyết Dưỡng Sáng Da Từ Ruộng Đồng Miền Tây",
    excerpt:
      "Vitamin C tự nhiên từ bưởi Hồ Lô giúp đều màu da, mờ thâm nám và tăng cường độ ẩm — khoa học hiện đại xác nhận điều bà con miền Tây đã biết từ lâu.",
    category: "Nguyên liệu Việt Nam",
    date: "3 tháng 4, 2025",
    readTime: "4 phút đọc",
  },
  {
    slug: "bi-dao-ninh-thuan-lam-dep",
    title: "Bí Đao Ninh Thuận: Thành Phần 'Mới Nổi' Đáng Thử Trong Làm Đẹp",
    excerpt:
      "Từ đặc sản ăn uống đến bí quyết trị nám và dưỡng sáng — bí đao Ninh Thuận chứa citrulline và colocynthin đang được cộng đồng skincare Việt đặc biệt chú ý.",
    category: "Xu hướng làm đẹp",
    date: "27 tháng 3, 2025",
    readTime: "5 phút đọc",
  },
  {
    slug: "dau-dua-ben-tre-duong-am",
    title: "Dầu Dừa Bến Tre: Từ Vùng Đất Dừa Đến Công Thức Dưỡng Ẩm Chuẩn",
    excerpt:
      "Axit béo mạch trung bình từ dừa xiêm Bến Tre ép lạnh giúp khóa ẩm 24 giờ, phục hồi hàng rào lipid da và làm dịu da nhạy cảm không cần hóa chất tổng hợp.",
    category: "Chăm sóc da",
    date: "20 tháng 3, 2025",
    readTime: "6 phút đọc",
  },
]

export default function BlogIndex() {
  return (
    <div style={{ fontFamily: "var(--font-be-vietnam-pro)", backgroundColor: "#faf6ee", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#1a3d2b", padding: "16px 0" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: "1.4rem",
                fontWeight: 600,
                fontStyle: "italic",
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              Cocoon
            </span>
          </Link>
          <Link
            href="/"
            style={{
              fontSize: "0.8rem",
              color: "rgba(168,197,176,0.7)",
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            ← Trang chủ
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div style={{ backgroundColor: "#1a3d2b", padding: "48px 24px 64px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ height: "2px", width: "40px", backgroundColor: "#c5962d", marginBottom: "20px", borderRadius: "2px" }} />
          <h1
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              fontWeight: 700,
              color: "white",
              fontStyle: "italic",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            Blog Cocoon
          </h1>
          <p style={{ fontSize: "0.95rem", color: "rgba(168,197,176,0.65)", lineHeight: 1.7 }}>
            Bí quyết làm đẹp, thành phần thiên nhiên và câu chuyện từ vùng nguyên liệu Việt Nam.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                className="hover:-translate-y-1 transition-transform duration-200"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "32px",
                  boxShadow: "0 2px 20px rgba(26,61,43,0.07)",
                  border: "1px solid rgba(26,61,43,0.05)",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#52796f",
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ color: "#c5962d" }}>·</span>
                  <span style={{ fontSize: "0.75rem", color: "#6b6358" }}>{post.date}</span>
                  <span style={{ color: "#c5962d" }}>·</span>
                  <span style={{ fontSize: "0.75rem", color: "#6b6358" }}>{post.readTime}</span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#1a3d2b",
                    lineHeight: 1.35,
                    marginBottom: "12px",
                  }}
                >
                  {post.title}
                </h2>
                <p style={{ fontSize: "0.9rem", color: "#6b6358", lineHeight: 1.75, marginBottom: "20px" }}>
                  {post.excerpt}
                </p>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#1a3d2b",
                    letterSpacing: "0.04em",
                  }}
                >
                  Đọc tiếp →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1a3d2b", padding: "24px 0", textAlign: "center" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "1.2rem",
              fontWeight: 600,
              fontStyle: "italic",
              color: "white",
            }}
          >
            Cocoon
          </span>
        </Link>
        <p style={{ fontSize: "0.72rem", color: "rgba(168,197,176,0.4)", marginTop: "8px" }}>
          © {new Date().getFullYear()} Cocoon Original Vietnam
        </p>
      </footer>
    </div>
  )
}
