import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bí Đao Ninh Thuận: Thành Phần 'Mới Nổi' Đáng Thử Trong Làm Đẹp | Cocoon Vietnam",
  description:
    "Bí đao Ninh Thuận chứa colocynthin, citrulline và khoáng chất giúp làm trắng sáng da, kiểm soát dầu và làm dịu da nhạy cảm. Khám phá vì sao thành phần thuần Việt này đang 'lên ngôi'.",
  openGraph: {
    title: "Bí Đao Ninh Thuận: Thành Phần 'Mới Nổi' Đáng Thử Trong Làm Đẹp",
    description:
      "Bí đao Ninh Thuận chứa colocynthin, citrulline và khoáng chất giúp làm trắng sáng da, kiểm soát dầu và làm dịu da nhạy cảm.",
    type: "article",
    locale: "vi_VN",
    siteName: "Cocoon Vietnam",
  },
}

export default function BlogPost() {
  return (
    <div style={{ fontFamily: "var(--font-be-vietnam-pro)", backgroundColor: "#faf6ee", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#1a3d2b", padding: "16px 0" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-lora)", fontSize: "1.4rem", fontWeight: 600, fontStyle: "italic", color: "white", letterSpacing: "-0.02em" }}>
              Cocoon
            </span>
          </Link>
          <Link href="/blog" style={{ fontSize: "0.8rem", color: "rgba(168,197,176,0.7)", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            ← Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#52796f" }}>
            Xu hướng làm đẹp
          </span>
          <span style={{ color: "#c5962d", fontSize: "0.8rem" }}>·</span>
          <time style={{ fontSize: "0.75rem", color: "#6b6358" }}>27 tháng 3, 2025</time>
          <span style={{ color: "#c5962d", fontSize: "0.8rem" }}>·</span>
          <span style={{ fontSize: "0.75rem", color: "#6b6358" }}>5 phút đọc</span>
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
          Bí Đao Ninh Thuận: Thành Phần &ldquo;Mới Nổi&rdquo; Đáng Thử Trong Làm Đẹp
        </h1>

        <p style={{ fontSize: "1.05rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "32px", borderLeft: "3px solid #c5962d", paddingLeft: "20px" }}>
          Trong khi thị trường mỹ phẩm toàn cầu đang chú ý đến các nguyên liệu ngoại nhập như niacinamide hay tranexamic acid, người Việt Nam từ lâu đã có một &ldquo;viên ngọc ẩn&rdquo; ngay trong vườn nhà: bí đao — loại rau quả quen thuộc trong bếp nay đang bước vào phòng tắm với tư cách thành phần làm đẹp đáng gờm.
        </p>

        <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "1.5rem", fontWeight: 700, color: "#1a3d2b", marginTop: "40px", marginBottom: "16px" }}>
          Bí đao Ninh Thuận — tại sao lại là vùng đất này?
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Ninh Thuận nổi tiếng với khí hậu khô nóng và ít mưa — điều kiện tưởng như khắc nghiệt nhưng lại tạo ra lợi thế đặc biệt cho cây bí đao: trái phát triển chậm hơn, tích lũy được lượng chất khô và hoạt chất cao hơn so với bí đao trồng ở vùng ẩm ướt. Đất đỏ bazan pha cát ở Ninh Thuận giàu khoáng chất kẽm và silica — hai nguyên tố vi lượng có lợi trực tiếp cho da.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Người nông dân Ninh Thuận trồng bí đao theo mùa khô, tưới tiết kiệm, không dùng thuốc trừ sâu hóa học — tập quán canh tác truyền thống này vô tình tạo ra nguyên liệu sạch, phù hợp với tiêu chuẩn thuần chay và hữu cơ của Cocoon.
        </p>

        <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "1.5rem", fontWeight: 700, color: "#1a3d2b", marginTop: "40px", marginBottom: "16px" }}>
          Hoạt chất làm đẹp trong bí đao
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Bí đao chứa một bộ hoạt chất đa dạng mà ít người biết đến. <strong style={{ color: "#1a3d2b" }}>Colocynthin</strong> — hoạt chất đặc trưng của họ bầu bí — có khả năng ức chế nhẹ enzyme tyrosinase, từ đó giảm sản sinh melanin và mờ dần các vết thâm sau mụn. Đây là cơ chế tương tự niacinamide nhưng đến từ nguồn gốc thực vật thuần túy.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          <strong style={{ color: "#1a3d2b" }}>Citrulline</strong> — một amino acid tìm thấy nhiều trong bí đao — là tiền chất của arginine trong cơ thể, giúp cải thiện vi tuần hoàn máu dưới da, mang đến tông da hồng hào và sáng khỏe tự nhiên. Khác với các hoạt chất làm trắng mạnh gây bong tróc, citrulline tác động nhẹ nhàng và an toàn ngay cả với da nhạy cảm.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Thêm vào đó, bí đao có hàm lượng nước lên đến 96% trong trái tươi, cùng với các polysaccharide giữ ẩm tự nhiên tương tự hyaluronic acid nhưng có trọng lượng phân tử thấp hơn — thẩm thấu nhanh và sâu hơn vào biểu bì.
        </p>

        <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "1.5rem", fontWeight: 700, color: "#1a3d2b", marginTop: "40px", marginBottom: "16px" }}>
          Tẩy trang bí đao — xu hướng đến từ truyền thống
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Trong y học dân gian Việt Nam, bí đao đã được dùng như một loại &ldquo;tẩy trang&rdquo; tự nhiên từ nhiều thế kỷ trước — bà và mẹ của nhiều người Việt từng đắp mặt nạ bí đao để làm sạch da và làm mờ tàn nhang. Ngày nay, Cocoon đã hiện đại hóa truyền thống này thành dạng sữa tẩy trang chuẩn hóa, kết hợp dịch chiết bí đao Ninh Thuận với các emulsifier lành tính và không silicon.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Điểm nổi bật của công thức tẩy trang bí đao so với các dòng micellar thông thường là khả năng làm sạch sâu nhưng không phá vỡ hàng rào lipid tự nhiên của da — nhờ đó da không bị cảm giác &ldquo;căng rút&rdquo; sau khi tẩy trang, một vấn đề phổ biến với da dầu mụn thường xuyên tẩy trang bằng nước tẩy trang có cồn.
        </p>

        <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "1.5rem", fontWeight: 700, color: "#1a3d2b", marginTop: "40px", marginBottom: "16px" }}>
          Phù hợp với loại da nào?
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Bí đao thực sự là &ldquo;nguyên liệu đa zi năng&rdquo; trong làm đẹp. Với da dầu mụn, tính làm sạch nhẹ và khả năng kiểm soát bã nhờn của colocynthin giúp thu nhỏ lỗ chân lông và giảm độ bóng. Với da khô, polysaccharide của bí đao bổ sung lớp ẩm mà không gây bít lỗ chân lông. Với da nhạy cảm, citrulline và các flavonoid chống viêm giúp xoa dịu đỏ và ngứa mà không cần cortisone hay hóa chất tổng hợp.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Điều kiện duy nhất cần lưu ý: nếu bạn đang dùng retinol hoặc AHA/BHA nồng độ cao, hãy không dùng cùng lúc với sản phẩm có bí đao để tránh hiện tượng kích ứng chồng chất. Ngoài ra, bí đao hoàn toàn phù hợp mọi loại da và mọi lứa tuổi.
        </p>

        <div style={{ backgroundColor: "#1a3d2b", borderRadius: "20px", padding: "32px", marginTop: "48px" }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(168,197,176,0.7)", marginBottom: "8px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Sản phẩm Cocoon</p>
          <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "white", marginBottom: "12px", fontFamily: "var(--font-lora)" }}>Tẩy trang bí đao Ninh Thuận</p>
          <p style={{ fontSize: "0.88rem", color: "rgba(168,197,176,0.75)", lineHeight: 1.75, marginBottom: "20px" }}>
            Sữa tẩy trang từ dịch chiết bí đao Ninh Thuận — làm sạch sâu, mờ thâm, không cồn và không silicon. Phù hợp mọi loại da kể cả da nhạy cảm.
          </p>
          <Link
            href="https://cocoonvietnam.com"
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
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-lora)", fontSize: "1.2rem", fontWeight: 600, fontStyle: "italic", color: "white" }}>
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
