import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bưởi Hồ Lô Hậu Giang: Bí Quyết Dưỡng Sáng Da Từ Ruộng Đồng Miền Tây | Cocoon Skin Routine",
  description:
    "Vitamin C tự nhiên từ bưởi Hồ Lô Hậu Giang giúp đều màu da, mờ thâm nám và tăng cường độ ẩm. Khám phá lý do Cocoon chọn bưởi Hồ Lô làm nguyên liệu chủ lực.",
  openGraph: {
    title: "Bưởi Hồ Lô Hậu Giang: Bí Quyết Dưỡng Sáng Da Từ Ruộng Đồng Miền Tây",
    description:
      "Vitamin C tự nhiên từ bưởi Hồ Lô Hậu Giang giúp đều màu da, mờ thâm nám và tăng cường độ ẩm.",
    type: "article",
    locale: "vi_VN",
    siteName: "Cocoon Skin Routine",
  },
}

export default function BlogPost() {
  return (
    <div style={{ fontFamily: "var(--font-be-vietnam-pro)", backgroundColor: "#faf6ee", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#1a3d2b", padding: "16px 0" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Image
              src="/cocoon logo.jpg"
              alt="Cocoon Skin Routine"
              width={40}
              height={40}
              style={{ borderRadius: "9999px", objectFit: "cover", display: "block", outline: "2px solid rgba(255,255,255,0.15)", outlineOffset: "0px" }}
            />
          </Link>
          <Link href="/blog" style={{ fontSize: "0.8rem", color: "rgba(168,197,176,0.7)", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            ← Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Meta */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#52796f" }}>
            Nguyên liệu Việt Nam
          </span>
          <span style={{ color: "#c5962d", fontSize: "0.8rem" }}>·</span>
          <time style={{ fontSize: "0.75rem", color: "#6b6358" }}>3 tháng 4, 2025</time>
          <span style={{ color: "#c5962d", fontSize: "0.8rem" }}>·</span>
          <span style={{ fontSize: "0.75rem", color: "#6b6358" }}>4 phút đọc</span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
            fontWeight: 700,
            color: "#1a3d2b",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          Bưởi Hồ Lô Hậu Giang: Bí Quyết Dưỡng Sáng Da Từ Ruộng Đồng Miền Tây
        </h1>

        <p style={{ fontSize: "1.05rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "32px", borderLeft: "3px solid #c5962d", paddingLeft: "20px" }}>
          Giữa những ruộng bưởi xanh mát trải dài ven sông Hậu Giang, người nông dân Việt Nam từ lâu đã biết dùng vỏ và tinh dầu bưởi để chăm sóc tóc và da. Ngày nay, khoa học hiện đại đã xác nhận điều mà bà con miền Tây vẫn tin tưởng hàng thế kỷ: bưởi Hồ Lô là một trong những nguyên liệu làm đẹp tốt nhất tự nhiên ban tặng.
        </p>

        <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "1.5rem", fontWeight: 700, color: "#1a3d2b", marginTop: "40px", marginBottom: "16px" }}>
          Bưởi Hồ Lô là gì và tại sao nó đặc biệt?
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Bưởi Hồ Lô (hay còn gọi là bưởi lê) là giống bưởi bản địa đặc trưng của vùng đất Hậu Giang — một tỉnh thuộc đồng bằng sông Cửu Long. Khác với các loại bưởi thương mại thông thường, bưởi Hồ Lô có hàm lượng vitamin C cao hơn đáng kể, cùng với nồng độ flavonoid và naringenin tự nhiên vượt trội. Đây chính là bộ ba hoạt chất làm nên sức mạnh của loại trái cây này trong làm đẹp.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Hậu Giang có khí hậu nhiệt đới ẩm, đất phù sa màu mỡ và nguồn nước ngọt dồi dào từ sông Hậu — những điều kiện lý tưởng để bưởi phát triển với hàm lượng dinh dưỡng cao nhất. Người nông dân ở đây thu hoạch bưởi theo mùa, đảm bảo trái chín tự nhiên và giữ nguyên vẹn các hoạt chất có lợi.
        </p>

        <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "1.5rem", fontWeight: 700, color: "#1a3d2b", marginTop: "40px", marginBottom: "16px" }}>
          Vitamin C và flavonoid — bộ đôi dưỡng sáng da
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Vitamin C (ascorbic acid) là một trong những hoạt chất được nghiên cứu nhiều nhất trong lĩnh vực chăm sóc da. Nó hoạt động theo ba cơ chế chính: ức chế enzyme tyrosinase (enzyme gây ra sắc tố melanin), kích thích tổng hợp collagen, và trung hòa các gốc tự do gây lão hóa sớm.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Điều khiến vitamin C từ bưởi Hồ Lô đặc biệt hơn dạng tổng hợp là sự hiện diện song song của flavonoid và bioflavonoid tự nhiên. Các hợp chất này giúp vitamin C được hấp thụ và duy trì ổn định hơn trên da, kéo dài hiệu quả dưỡng sáng và ngăn ngừa oxy hóa. Kết quả là da trở nên đều màu hơn, vết thâm nám mờ dần, và tông da sáng khỏe tự nhiên sau vài tuần sử dụng đều đặn.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Naringenin — flavonoid chủ yếu trong bưởi — còn có đặc tính chống viêm nhẹ, giúp làm dịu da đỏ và nhạy cảm, đồng thời bảo vệ da khỏi tác hại của tia UV thông qua cơ chế kháng oxy hóa.
        </p>

        <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "1.5rem", fontWeight: 700, color: "#1a3d2b", marginTop: "40px", marginBottom: "16px" }}>
          Cocoon lấy bưởi Hồ Lô như thế nào?
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Cocoon làm việc trực tiếp với các hộ nông dân trồng bưởi tại Hậu Giang theo mô hình hợp tác bền vững. Bưởi được thu hoạch đúng độ chín sinh lý — thời điểm hàm lượng vitamin C và flavonoid đạt đỉnh cao nhất. Vỏ bưởi, phần có nồng độ hoạt chất cao nhất, được ép lạnh ngay sau thu hoạch để tách chiết tinh dầu và dịch chiết tươi.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Quy trình chiết xuất nhiệt độ thấp giúp bảo toàn cấu trúc phân tử của vitamin C và các hoạt chất nhạy nhiệt khác — điều mà phương pháp nhiệt thông thường không làm được. Toàn bộ sản phẩm phụ từ quá trình này đều được tái sử dụng, đảm bảo không có lãng phí trong chuỗi sản xuất.
        </p>

        <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "1.5rem", fontWeight: 700, color: "#1a3d2b", marginTop: "40px", marginBottom: "16px" }}>
          Cách dùng dầu dưỡng bưởi Hồ Lô hiệu quả nhất
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Để phát huy tối đa hiệu quả của dịch chiết bưởi Hồ Lô trong sản phẩm Cocoon, hãy áp dụng sau bước toner khi da còn hơi ẩm. Lớp ẩm nhẹ trên da giúp vitamin C thẩm thấu đều hơn và giảm cảm giác kích ứng cho da nhạy cảm. Buổi sáng, luôn kết hợp với kem chống nắng SPF 30+ vì vitamin C nhạy cảm với ánh sáng và có thể gây đốm nâu nếu tiếp xúc UV không được bảo vệ.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Với da dầu mụn, dịch chiết bưởi trong serum Cocoon còn có tác dụng điều tiết bã nhờn nhờ axit citric tự nhiên, giúp lỗ chân lông trông nhỏ hơn và da mịn màng hơn sau 4–6 tuần.
        </p>

        <div style={{ backgroundColor: "#1a3d2b", borderRadius: "20px", padding: "32px", marginTop: "48px" }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(168,197,176,0.7)", marginBottom: "8px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Sản phẩm Cocoon</p>
          <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "white", marginBottom: "12px", fontFamily: "var(--font-lora)" }}>Dầu dưỡng bưởi Hồ Lô</p>
          <p style={{ fontSize: "0.88rem", color: "rgba(168,197,176,0.75)", lineHeight: 1.75, marginBottom: "20px" }}>
            Dịch chiết bưởi Hồ Lô nguyên chất kết hợp dầu dừa Bến Tre và vitamin E — dưỡng sáng, mờ thâm và giữ ẩm suốt 24 giờ.
          </p>
          <Link
            href="https://kimquyenxinhdep.io.vn/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", backgroundColor: "#c5962d", color: "white", borderRadius: "100px", padding: "10px 24px", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
          >
            Xem sản phẩm →
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1a3d2b", padding: "24px 0", textAlign: "center" }}>
        <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
          <Image
            src="/cocoon logo.jpg"
            alt="Cocoon Skin Routine"
            width={40}
            height={40}
            style={{ borderRadius: "9999px", objectFit: "cover", display: "block", outline: "2px solid rgba(255,255,255,0.15)", outlineOffset: "0px", margin: "0 auto" }}
          />
        </Link>
        <p style={{ fontSize: "0.72rem", color: "rgba(168,197,176,0.4)", marginTop: "8px" }}>
          © {new Date().getFullYear()} Cocoon Skin Routine
        </p>
      </footer>
    </div>
  )
}
