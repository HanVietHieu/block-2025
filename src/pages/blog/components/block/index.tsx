import React, { useState } from "react";
import { Button, Carousel, Modal } from "antd";
import "./block.scss";
import TitleMenu from "../titleMenu";

interface Slide {
  title: string;
  description: string;
  image: string;
  detail: string;
}

const slides: Slide[] = [
  {
    title: "Sức mạnh của ReactJS",
    description:
      "ReactJS mang đến khả năng xây dựng UI nhanh, component tái sử dụng và hiệu năng cao nhờ Virtual DOM.",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1500&q=80",
    detail: `
ReactJS là thư viện UI mạnh mẽ giúp xây dựng giao diện hiện đại với tốc độ cao nhờ Virtual DOM.

<ul>
  <li>Tách UI thành các component độc lập – dễ tái sử dụng</li>
  <li>Dễ mở rộng, dễ bảo trì</li>
  <li>Hệ sinh thái lớn: Redux, Zustand, React Query, Tailwind, MUI…</li>
  <li>Hiệu năng cao và tốc độ phát triển rất nhanh</li>
</ul>

React phù hợp cho mọi loại dự án từ nhỏ đến lớn.
`,
  },

  {
    title: "Next.js – Framework mạnh mẽ",
    description:
      "Next.js hỗ trợ SSR, SEO tốt, routing đơn giản và khả năng build web siêu nhanh.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80",
    detail: `
Next.js mở rộng React với khả năng xử lý phía server và tối ưu SEO vượt trội.

<ul>
  <li>Hỗ trợ SSR, SSG, ISR giúp website tải nhanh</li>
  <li>Routing theo thư mục – không cần cài router</li>
  <li>Image Optimization & Font Optimization tích hợp sẵn</li>
  <li>Build production rất nhẹ và hiệu quả</li>
</ul>

Next.js phù hợp cho SaaS, eCommerce, landing page và hệ thống cần SEO mạnh.
`,
  },

  {
    title: "Kết hợp React + Next",
    description:
      "Tốc độ, SEO, trải nghiệm người dùng và sự linh hoạt cao trong phát triển frontend hiện đại.",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1500&q=80",
    detail: `
React + Next là combo hoàn hảo của frontend hiện đại.

<ul>
  <li>React cung cấp sự linh hoạt & UI hiện đại</li>
  <li>Next tối ưu SEO, tốc độ tải & hiệu năng</li>
  <li>Chuyển trang nhanh – trải nghiệm người dùng mượt</li>
  <li>Dễ mở rộng cho dự án lớn / enterprise</li>
</ul>

Đây là bộ đôi tiêu chuẩn cho phát triển web 2024–2025.
`,
  },

  {
    title: "Angular – Mạnh mẽ & Quy chuẩn",
    description:
      "Angular phù hợp cho dự án lớn nhờ kiến trúc rõ ràng, TypeScript mạnh mẽ và bộ công cụ tích hợp sẵn.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80",
    detail: `
Angular là framework toàn diện, mạnh mẽ và quy chuẩn cho các hệ thống lớn.

<ul>
  <li>Kiến trúc module rõ ràng – dễ quản lý</li>
  <li>Sử dụng TypeScript mạnh mẽ và an toàn</li>
  <li>Tích hợp sẵn Router, Form, DI, HTTP…</li>
  <li>Angular CLI giúp tạo project chuẩn & đồng nhất</li>
</ul>

Angular phù hợp cho hệ thống enterprise yêu cầu độ ổn định cao.
`,
  },
];

const Block: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
    detail: "",
  });

  return (
    <div className="container-blog">
      <TitleMenu content="Blog" />
      <Carousel
        autoplay
        arrows
        pauseOnHover
        dots={true}
        draggable
        className="slider-container"
      >
        {slides.map((item: Slide, idx) => (
          <div key={idx}>
            <div
              className="banner-bg"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="banner-overlay">
                <h1 className="banner-title">{item.title}</h1>
                <p className="banner-desc">{item.description}</p>

                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    setModalOpen(true);
                    setData(item);
                  }}
                >
                  Xem thêm
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <Modal
        title={data.title}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        centered
        // width={'90%'}
        footer={[
          <Button key="close" onClick={() => setModalOpen(false)}>
            Đóng
          </Button>,
        ]}
      >
        <div
          className="detail-text"
          dangerouslySetInnerHTML={{ __html: data.detail }}
        ></div>
      </Modal>
    </div>
  );
};

export default Block;
