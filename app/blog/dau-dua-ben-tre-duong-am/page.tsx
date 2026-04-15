import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dầu Dừa Bến Tre: Từ Vùng Đất Dừa Đến Công Thức Dưỡng Ẩm Chuẩn | Cocoon Skin Routine",
  description:
    "Axit béo từ dừa xiêm Bến Tre giúp khóa ẩm 24 giờ, phục hồi hàng rào bảo vệ da và làm dịu da nhạy cảm. Tìm hiểu tại sao dầu dừa thuần chay Cocoon khác biệt so với dầu dừa thông thường.",
  openGraph: {
    title: "Dầu Dừa Bến Tre: Từ Vùng Đất Dừa Đến Công Thức Dưỡng Ẩm Chuẩn",
    description:
      "Axit béo từ dừa xiêm Bến Tre giúp khóa ẩm 24 giờ, phục hồi hàng rào bảo vệ da và làm dịu da nhạy cảm.",
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
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#52796f" }}>
            Chăm sóc da
          </span>
          <span style={{ color: "#c5962d", fontSize: "0.8rem" }}>·</span>
          <time style={{ fontSize: "0.75rem", color: "#6b6358" }}>20 tháng 3, 2025</time>
          <span style={{ color: "#c5962d", fontSize: "0.8rem" }}>·</span>
          <span style={{ fontSize: "0.75rem", color: "#6b6358" }}>6 phút đọc</span>
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
          Dầu Dừa Bến Tre: Từ Vùng Đất Dừa Đến Công Thức Dưỡng Ẩm Chuẩn
        </h1>

        <p style={{ fontSize: "1.05rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "32px", borderLeft: "3px solid #c5962d", paddingLeft: "20px" }}>
          Bến Tre — &ldquo;xứ dừa&rdquo; của Việt Nam — có hơn 70.000 hectare dừa trải dài, tạo nên một hệ sinh thái xanh mát và nguồn nguyên liệu dừa dồi dào bậc nhất Đông Nam Á. Trong số hàng trăm sản phẩm làm từ dừa, dầu dừa ép lạnh từ dừa xiêm Bến Tre đã chứng minh được giá trị vượt trội trong lĩnh vực chăm sóc da hiện đại.
        </p>

        <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "1.5rem", fontWeight: 700, color: "#1a3d2b", marginTop: "40px", marginBottom: "16px" }}>
          Dừa xiêm Bến Tre — không phải dừa nào cũng như nhau
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Dừa xiêm (hay dừa nước) là giống dừa bản địa của vùng đồng bằng sông Cửu Long, khác biệt hoàn toàn với dừa cao (dừa ta) về thành phần hóa học. Cơm dừa xiêm mỏng hơn nhưng chứa nhiều axit lauric hơn — thành phần chủ lực tạo nên đặc tính dưỡng ẩm và kháng khuẩn của dầu dừa.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Khí hậu nhiệt đới ẩm ở Bến Tre, với lượng mưa đều đặn và nhiệt độ ổn định quanh năm 26–28°C, tạo ra điều kiện lý tưởng để dừa tích lũy chất béo no mạch trung bình (MCT) — nhóm axit béo có kích thước phân tử nhỏ, thẩm thấu nhanh qua biểu bì da mà không gây bít lỗ chân lông.
        </p>

        <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "1.5rem", fontWeight: 700, color: "#1a3d2b", marginTop: "40px", marginBottom: "16px" }}>
          Khoa học đằng sau dưỡng ẩm từ dầu dừa
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Dầu dừa Bến Tre chứa khoảng 48–52% axit lauric (C12:0), 16–18% axit myristic (C14:0), và 8–10% axit caprylic/capric (C8/C10). Mỗi loại axit béo này đóng một vai trò riêng trong việc chăm sóc da:
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          <strong style={{ color: "#1a3d2b" }}>Axit lauric</strong> thẩm thấu sâu vào lớp sừng và điền vào các &ldquo;khoảng trống&rdquo; trong hàng rào lipid tự nhiên của da — lớp bảo vệ mỏng manh ngăn da mất nước qua bề mặt (TEWL). Ở những người có hàng rào da yếu do eczema, viêm da cơ địa, hoặc đơn giản là da khô, axit lauric giúp phục hồi cấu trúc này theo cơ chế vật lý mà không cần hormone hay hoạt chất tổng hợp.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          <strong style={{ color: "#1a3d2b" }}>Axit myristic</strong> là chất nhũ hóa tự nhiên, giúp phân tán đều dầu trong nước và tạo cảm giác nhẹ mịn khi thoa. Chính thành phần này giúp dầu dừa không để lại cảm giác nhờn bóng nếu dùng đúng lượng. <strong style={{ color: "#1a3d2b" }}>Axit caprylic/capric</strong> có đặc tính kháng nấm và kháng khuẩn nhẹ, hữu ích cho vùng da hay bị viêm nhiễm nhẹ.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Ngoài axit béo, dầu dừa còn chứa một lượng nhỏ tocopherol (vitamin E tự nhiên) và phytosterol — hai hợp chất chống oxy hóa giúp làm chậm quá trình lão hóa da do ô nhiễm và tia UV.
        </p>

        <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "1.5rem", fontWeight: 700, color: "#1a3d2b", marginTop: "40px", marginBottom: "16px" }}>
          Ép lạnh — quy trình tạo nên sự khác biệt
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Cocoon chỉ sử dụng dầu dừa ép lạnh (cold-pressed) từ Bến Tre, không qua tinh luyện hay khử mùi bằng nhiệt. Quy trình ép lạnh ở nhiệt độ dưới 40°C giữ nguyên toàn bộ tocopherol, phytosterol và các hoạt chất nhạy nhiệt — thành phần dễ bị phân hủy khi tiếp xúc nhiệt độ cao trong quy trình tinh luyện công nghiệp.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Dầu dừa ép lạnh có màu trắng sữa tự nhiên, mùi dừa nhẹ nhàng và kết cấu mềm ở nhiệt độ phòng. Đây là dấu hiệu cho thấy dầu chưa bị biến đổi cấu trúc hóa học — điều quan trọng để đảm bảo hiệu quả dưỡng ẩm thực sự trên da.
        </p>

        <h2 style={{ fontFamily: "var(--font-lora)", fontSize: "1.5rem", fontWeight: 700, color: "#1a3d2b", marginTop: "40px", marginBottom: "16px" }}>
          Cách dùng dầu dừa Bến Tre đúng cách
        </h2>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Dù dầu dừa là thành phần lành tính, có một số điểm cần lưu ý khi sử dụng. Với da mặt, đặc biệt là da dầu mụn, nên dùng các sản phẩm có dầu dừa đã được công thức hóa (như serum hoặc kem dưỡng) thay vì bôi dầu dừa nguyên chất — vì dầu dừa nguyên chất có chỉ số comedogenic (bít lỗ chân lông) từ 2–4 tùy loại.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Với cơ thể, tóc và móng, dầu dừa nguyên chất Bến Tre là lựa chọn lý tưởng. Thoa một lượng nhỏ lên da còn ẩm sau tắm để khóa ẩm tối ưu. Với tóc hư tổn, đắp dầu dừa như mặt nạ ủ 30–60 phút trước khi gội giúp phục hồi sợi tóc từ bên trong nhờ cơ chế thẩm thấu vào lõi keratin.
        </p>
        <p style={{ fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.85, marginBottom: "16px" }}>
          Đối với khu vực khóe mắt và môi — những vùng da không có tuyến bã nhờn — dầu dừa là dưỡng chất tự nhiên hoàn hảo giúp giữ ẩm và làm mờ nếp nhăn nhỏ mà không gây dị ứng.
        </p>

        <div style={{ backgroundColor: "#1a3d2b", borderRadius: "20px", padding: "32px", marginTop: "48px" }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(168,197,176,0.7)", marginBottom: "8px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Sản phẩm Cocoon</p>
          <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "white", marginBottom: "12px", fontFamily: "var(--font-lora)" }}>Dầu dừa Bến Tre đa năng</p>
          <p style={{ fontSize: "0.88rem", color: "rgba(168,197,176,0.75)", lineHeight: 1.75, marginBottom: "20px" }}>
            Dầu dừa ép lạnh 100% từ dừa xiêm Bến Tre — không tinh luyện, không hương liệu tổng hợp. Dưỡng da, tóc, và móng trong một sản phẩm thuần chay.
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
