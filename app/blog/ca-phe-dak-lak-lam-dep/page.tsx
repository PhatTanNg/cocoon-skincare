import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cà Phê Đắk Lắk trong Mỹ Phẩm: Bí Quyết Làm Đẹp Từ Thiên Nhiên Việt Nam | Cocoon Vietnam",
  description:
    "Khám phá cách cà phê Đắk Lắk trở thành thành phần chăm sóc da đỉnh cao — từ caffeine chống lão hóa đến antioxidant tẩy tế bào chết tự nhiên. Bí quyết làm đẹp từ vùng đất bazan.",
  openGraph: {
    title: "Cà Phê Đắk Lắk trong Mỹ Phẩm: Bí Quyết Làm Đẹp Từ Thiên Nhiên Việt Nam",
    description:
      "Khám phá cách cà phê Đắk Lắk trở thành thành phần chăm sóc da đỉnh cao — từ caffeine chống lão hóa đến antioxidant tẩy tế bào chết tự nhiên.",
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
        {/* Meta */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#52796f" }}>
            Thành phần & Làm đẹp
          </span>
          <span style={{ color: "#c5962d", fontSize: "0.8rem" }}>·</span>
          <time style={{ fontSize: "0.75rem", color: "#6b6358" }}>10 tháng 4, 2025</time>
        </div>

        {/* H1 */}
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
          Cà Phê Đắk Lắk trong Mỹ Phẩm: Bí Quyết Làm Đẹp Từ Thiên Nhiên Việt Nam
        </h1>

        {/* Intro */}
        <p style={{ fontSize: "1.1rem", color: "#52796f", lineHeight: 1.8, marginBottom: "40px", fontStyle: "italic" }}>
          Từ những đồi cà phê xanh mướt trên cao nguyên bazan, hạt cà phê Đắk Lắk không chỉ mang lại hương vị độc đáo mà còn chứa đựng một kho báu dưỡng chất cho làn da.
        </p>

        {/* Divider */}
        <div style={{ height: "2px", width: "48px", backgroundColor: "#c5962d", borderRadius: "2px", marginBottom: "40px" }} />

        {/* Section 1 */}
        <h2
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a3d2b",
            marginBottom: "16px",
            marginTop: "0",
          }}
        >
          Đắk Lắk — Thủ phủ cà phê của Việt Nam
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "16px" }}>
          Đắk Lắk là tỉnh trồng cà phê lớn nhất Việt Nam, nằm trên độ cao từ 400 đến 800 mét so với mực nước biển. Khí hậu mát mẻ, đất đỏ bazan giàu khoáng chất và nguồn nước trong lành từ các con suối tự nhiên tạo nên những hạt cà phê Robusta và Arabica với chất lượng vượt trội.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "40px" }}>
          Mỗi năm, vùng đất này sản xuất hơn 500.000 tấn cà phê — chiếm gần 40% sản lượng cà phê của cả nước. Đây không chỉ là niềm tự hào nông nghiệp, mà còn là nguồn nguyên liệu quý giá mà Cocoon Vietnam đã lựa chọn để đưa vào dòng sản phẩm chăm sóc da và tóc của mình.
        </p>

        {/* Section 2 */}
        <h2
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a3d2b",
            marginBottom: "16px",
          }}
        >
          Thành phần hoạt chất trong cà phê có tác dụng gì với da?
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "16px" }}>
          Hạt cà phê chứa nhiều hợp chất sinh học có lợi cho da, đặc biệt khi được xử lý đúng cách và kết hợp với các thành phần hỗ trợ khác:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "8px" }}>
            <strong style={{ color: "#1a3d2b" }}>Caffeine:</strong> Có khả năng kích thích tuần hoàn máu, giảm thâm quầng mắt và phù nề. Caffeine còn hoạt động như một chất chống oxy hóa mạnh, bảo vệ da khỏi tổn thương do gốc tự do.
          </li>
          <li style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "8px" }}>
            <strong style={{ color: "#1a3d2b" }}>Axit chlorogenic (CGA):</strong> Là polyphenol dồi dào trong hạt cà phê xanh, có tác dụng làm sáng da, giảm sắc tố melanin và bảo vệ da khỏi tia UV.
          </li>
          <li style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "8px" }}>
            <strong style={{ color: "#1a3d2b" }}>Hạt cà phê thô (bã cà phê):</strong> Với kết cấu hạt thô tự nhiên, bã cà phê là chất tẩy tế bào chết cơ học lý tưởng — loại bỏ tế bào chết, thông thoáng lỗ chân lông và kích thích tái tạo da mới.
          </li>
          <li style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "8px" }}>
            <strong style={{ color: "#1a3d2b" }}>Dầu cà phê (coffee seed oil):</strong> Giàu axit linoleic và oleic, dầu chiết xuất từ hạt cà phê có tác dụng dưỡng ẩm sâu, củng cố hàng rào bảo vệ da và cải thiện độ đàn hồi.
          </li>
        </ul>
        <p style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "40px" }}>
          Nghiên cứu từ Đại học Kyushu (Nhật Bản) công bố năm 2019 đã chỉ ra rằng chiết xuất cà phê xanh có thể làm giảm đáng kể độ sâu của các nếp nhăn và cải thiện độ ẩm da sau 8 tuần sử dụng liên tục.
        </p>

        {/* Section 3 */}
        <h2
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a3d2b",
            marginBottom: "16px",
          }}
        >
          Cocoon Vietnam và hành trình từ nông trại đến sản phẩm
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "16px" }}>
          Không giống các thương hiệu nhập khẩu nguyên liệu từ nước ngoài, Cocoon Vietnam xây dựng chuỗi cung ứng trực tiếp với các nông hộ trồng cà phê tại Đắk Lắk. Quá trình này đảm bảo:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "8px" }}>
            <strong style={{ color: "#1a3d2b" }}>Truy xuất nguồn gốc 100%:</strong> Mỗi lô nguyên liệu đều có thể truy xuất đến tên nông hộ, địa điểm canh tác và ngày thu hoạch.
          </li>
          <li style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "8px" }}>
            <strong style={{ color: "#1a3d2b" }}>Không hóa chất độc hại:</strong> Cocoon ưu tiên làm việc với các nông hộ canh tác hữu cơ hoặc sử dụng tối thiểu thuốc bảo vệ thực vật.
          </li>
          <li style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "8px" }}>
            <strong style={{ color: "#1a3d2b" }}>Hỗ trợ cộng đồng địa phương:</strong> Thông qua việc thu mua trực tiếp với giá công bằng, Cocoon góp phần nâng cao thu nhập cho người nông dân Đắk Lắk.
          </li>
        </ul>
        <p style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "40px" }}>
          Sau khi thu hoạch, hạt cà phê được sơ chế theo phương pháp ướt để loại bỏ tạp chất, sau đó rang ở nhiệt độ vừa phải nhằm giữ lại tối đa các hoạt chất có lợi. Bã cà phê sau khi pha chế cũng được thu gom và tái sử dụng vào các sản phẩm tẩy tế bào chết — một vòng tuần hoàn sản xuất gần như không phế thải.
        </p>

        {/* Section 4 */}
        <h2
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a3d2b",
            marginBottom: "16px",
          }}
        >
          Cách sử dụng sản phẩm tẩy da chết cà phê đúng cách
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "16px" }}>
          Để đạt hiệu quả tốt nhất khi dùng <strong style={{ color: "#1a3d2b" }}>Tẩy Da Chết Cà Phê Đắk Lắk Cocoon</strong>, hãy thực hiện theo các bước sau:
        </p>
        <ol style={{ paddingLeft: "20px", marginBottom: "16px" }}>
          <li style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "10px" }}>
            <strong style={{ color: "#1a3d2b" }}>Làm ẩm da:</strong> Trước khi dùng, rửa mặt hoặc tắm để làm mềm da và mở lỗ chân lông. Hơi nước ấm từ tắm vòi sen hoặc xông hơi nhẹ giúp sản phẩm phát huy tác dụng tốt hơn.
          </li>
          <li style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "10px" }}>
            <strong style={{ color: "#1a3d2b" }}>Thoa và massage nhẹ nhàng:</strong> Lấy một lượng sản phẩm vừa đủ, thoa lên vùng da cần tẩy và massage theo chuyển động tròn trong 1–2 phút. Không chà xát quá mạnh, đặc biệt với da nhạy cảm.
          </li>
          <li style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "10px" }}>
            <strong style={{ color: "#1a3d2b" }}>Rửa sạch với nước ấm:</strong> Dùng nước ấm rửa sạch, tránh dùng nước quá nóng vì có thể gây khô da và kích ứng.
          </li>
          <li style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "10px" }}>
            <strong style={{ color: "#1a3d2b" }}>Dưỡng ẩm sau khi tẩy:</strong> Da sau khi tẩy tế bào chết có khả năng hấp thụ dưỡng chất tốt hơn. Đây là thời điểm lý tưởng để thoa serum hoặc kem dưỡng ẩm.
          </li>
          <li style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "10px" }}>
            <strong style={{ color: "#1a3d2b" }}>Tần suất sử dụng:</strong> Khuyến nghị dùng 2–3 lần/tuần với da thường. Da nhạy cảm chỉ nên dùng 1 lần/tuần và theo dõi phản ứng của da.
          </li>
        </ol>
        <p style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.9, marginBottom: "40px" }}>
          Hầu hết người dùng nhận thấy da sáng hơn và mịn màng hơn rõ rệt sau 2–4 tuần sử dụng đều đặn. Cà phê Đắk Lắk với đặc tính chống oxy hóa mạnh cũng giúp da trông tươi sáng và khỏe mạnh theo thời gian.
        </p>

        {/* Conclusion */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 2px 20px rgba(26,61,43,0.07)",
            marginBottom: "40px",
          }}
        >
          <div style={{ height: "2px", width: "40px", backgroundColor: "#c5962d", borderRadius: "2px", marginBottom: "20px" }} />
          <h3
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#1a3d2b",
              marginBottom: "12px",
            }}
          >
            Kết luận
          </h3>
          <p style={{ fontSize: "0.95rem", color: "#3d3830", lineHeight: 1.85, marginBottom: "0" }}>
            Cà phê Đắk Lắk không chỉ là niềm tự hào của nền nông nghiệp Việt Nam mà còn là một thành phần mỹ phẩm có giá trị khoa học được kiểm chứng. Khi lựa chọn Cocoon Vietnam, bạn không chỉ đang chăm sóc làn da mình mà còn đang ủng hộ một mô hình kinh doanh bền vững, tôn trọng người nông dân và môi trường. Đó là vẻ đẹp thực sự — đẹp từ bên trong, đẹp cho cả cộng đồng.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.85rem", color: "#52796f", marginBottom: "16px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Khám phá sản phẩm
          </p>
          <a
            href="https://cocoonvietnam.com/en/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              borderRadius: "100px",
              background: "linear-gradient(135deg, #1a3d2b 0%, #2d6a4f 100%)",
              color: "white",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              boxShadow: "0 4px 18px rgba(26,61,43,0.3)",
              letterSpacing: "0.025em",
            }}
          >
            Tẩy Da Chết Cà Phê Đắk Lắk — 145.000₫
          </a>
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
