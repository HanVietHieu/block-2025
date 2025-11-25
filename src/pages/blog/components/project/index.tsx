import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Card, Typography } from "antd";
import TitleMenu from "../titleMenu";
import imgArabica from "../../../../assets/img/logo-arabica.svg";

const { Title, Text, Link } = Typography;

const projectsMonkey = [
  {
    title: "Hoc10.vn",
    link: "https://www.hoc10.vn/",
    time: "06/2021 – 01/2023",
    role: "Lập trình viên",
    tech: "ReactJS + Angular",
    description: [
      `Hoc10 là website cung cấp chương trình giảng dạy tương tác "Bộ sách cánh diều", tài liệu giảng dạy cho giáo viên và ngân hàng đề thi cho học sinh từ lớp 1 đến lớp 12.`,
      `Phát triển Hệ thống quản lý nội dung để cấu hình và tải lê trò chơi trong thư viện sách điện tử và câu hỏi chuẩn bị cho kỳ thi, bài tập về nhà, slide và bài giảng mẫu.`,
      "SEO website, cải thiện hiệu suất trải nghiệm người dùng.",
      "Phát triển tính năng luyện tập, luyện thi, tập huấn cho giáo viên và học sinh.",
      "Phát triển phần Blog, checking hành vi người dùng.",
      "Maintain & fix bug hệ thống.",
    ],
  },
  {
    title: "Tutoring",
    link: "#",
    time: "01/2023 – 03/2023",
    role: "Lập trình viên",
    tech: "NextJS",
    description: [
      "Phân tích và phát triển các tính năng kiểm tra và bài tập cho học sinh.",
      "Giáo viên quản lý lớp học, bài tập và đánh giá kết quả học sinh.",
      "Học sinh xem lại các bài tập và câu trả lời của mình.",
      "Tạo ra các game tương tác giữa các bài học.",
      "Website đang trong quá trình phát triển.",
      "Mục tiêu: tạo môi trường giảng dạy học online hiện đại.",
    ],
  },
];

const projectsArabica = [
  {
    title: "King-Of-Bet (Arabica Tech + Viettel)",
    link: "#",
    time: "04/2023 – Now",
    role: "Lập trình viên",
    tech: "Fe: ReactJS Be: Express, Express",
    description: [
      "Phân tích và phát triển hệ thống website bóng đá và CMS cho dự án hợp tác cùng Viettel.",
      "Triển khai frontend + backend cho 2 mảng: Web và CMS.",
      "Web: xây dựng tính năng cược, tổng hợp trận đấu, phòng người chơi, giao diện responsive, tốc độ cao...",
      "Config base (Redux Thunk, Axios, Env...), hỗ trợ Backend phân tích và xử lý dữ liệu.",
      "CMS: báo cáo doanh thu hàng ngày / tuần / tháng, xuất file Excel, quản lý người chơi và chống gian lận.",
      "Phân tích dữ liệu, thiết kế cơ sở dữ liệu, hỗ trợ bảo trì hệ thống.",
    ],
  },
  {
    title: "Game Unitel (Arabica Tech + Unitel)",
    link: "http://arabica.la/",
    time: "10/2023 - 02/2024",
    role: "Lập trình viên",
    tech: "Fe: Reactjs, Be: Socket, Express",
    description: [
      "Website liên kết với nhà mạng Bitel mà ở đó người chơi có thể chơi các game đối kháng, tích điểm hoặc mua gói để đổi lấy data nhà mạng",
      "Đảm bảo estimate, giao diện website thân thiện với người dùng",
      "Update version 2 của website, fixbug và maintenance source code",
    ],
  },
  {
    title: "Aution Mytel (Arabica Tech + Mytel)",
    link: "http://reverseauction.com.mm/",
    time: "02/2024 - 05/2024",
    role: "Lập trình viên",
    tech: "Fe: Reactjs + Be: Nodejs-Express, Oracle, redis...",
    description: [
      "Web + Cms: Website đấu giá ngược",
      "Tạo sản phẩm đấu giá, mua lượt bid, config người trúng thưởng...",
      "Update version 2 của website, fixbug và maintenance source code",
    ],
  },
  {
    title: "Các website Mobion (Arabica Tech + Mobiphone)",
    link: "#",
    time: "05/2024 - 08/2024",
    role: "Lập trình viên",
    tech: "Fe: Reactjs",
    description: [
      "Các website bao gồm http://esport.mobion.vn, http://mobion.vn, http://tvshow.mobion.vn, http://phim.mobion.vn, http://nhac.mobion.vn, http://tinnhanh.mobion.vn",
      "Cập nhật giao diện mới các trang chuyên mục theo yêu cầu của Mobiphone",
      "Đảm bảo tiến độ dự án",
      "Tối ưu code",
    ],
  },
  {
    title: "Kid Mobion (Arabica Tech + Mobiphone)",
    link: "https://kid.mobion.vn",
    time: "05/2024 - 08/2024",
    role: "Leader: Front-end",
    tech: "Fe: Reactjs",
    description: [
      "Trang web có nội dung dành cho trẻ em",
      "Config cập nhật cấu hình, video...",
      "Review code, viết tài liệu website",
      "Follow tiến độ, đảm bảo deadline",
    ],
  },
  {
    title: "Viettel Cx (Arabica Tech + Viettel)",
    link: "https://kid.mobion.vn",
    time: "08/2024 - Now",
    role: "Lập trình viên",
    tech: "Fe: Nextjs",
    description: [
      "Trang giới thiệu hệ sinh thái dịch vụ chăm sóc khách hàng của Viettel",
      "Đảm bảo website hoạt động tốt, thân thiện với người dùng",
      "Seo website, giao diện hoạt động tốt trên các thiết bị...",
      "Đảm bảo tiến độ dự án",
    ],
  },
  {
    title: "Dự toán công tác phí (Arabica Tech + Viettel)",
    link: "#",
    time: "12/2024 - Now",
    role: "Lập trình viên",
    tech: "Fe: Angular",
    description: [
      "Cấu hình các chi phí như di chuyển, lưu trú, ăn uống, đi lại...của 1 chuyến công tác",
      "Tính toán số tiền phải trả cho 1 chuyến công tác + phát sinh...",
      "Thêm sửa xóa kế hoạch của chuyến công tác, dự toán công tác phí, gửi form lên ban giám đốc trình ký",
      "Đảm bảo tiến độ dự án",
    ],
  },
  {
    title: "SMS Gateway (Arabica Tech + Viettel)",
    link: "#",
    time: "12/2024 - Now",
    role: "Lập trình viên",
    tech: "Fe: Reactjs",
    description: [
      "Tạo 1 Hệ thống cổng gửi – nhận tin nhắn SMS cho doanh nghiệp. Nó cho phép các ứng dụng, website hoặc hệ thống nội bộ có thể gửi SMS hàng loạt hoặc tự động đến khách hàng",
      "Đảm bảo tính năng + bảo mật của website",
      "Viết tài liệu SRS website",
      "Đảm bảo chất lượng code, tiến độ dự án",
    ],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <div className="container-blog">
      <TitleMenu content="Resume" />
      <Card bordered={false} className="cart-container">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Row gutter={[32, 32]} justify="center">
            {/* BÊN TRÁI - MONKEY */}
            <Col xs={24} md={24}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  bordered={false}
                  style={{
                    borderRadius: 16,
                    boxShadow:
                      "0 4px 20px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)",
                    overflow: "hidden",
                  }}
                  bodyStyle={{ padding: 0 }}
                >
                  <div
                    style={{
                      background: "linear-gradient(90deg, #ffe7c3, #fff5e0)",
                      padding: "10px 20px",
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <Title
                      level={5}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        margin: 0,
                        color: "#b26a00",
                        letterSpacing: 0.5,
                        fontWeight: 600,
                        fontSize: 18,
                      }}
                    >
                      <img
                        src="https://static.topcv.vn/company_logos/psMPv0ZZb1sUc3hhsagvRqgOCH9gTQ43_1633421799____d70425d87c547f71d6df274b8a328f62.png"
                        width={40}
                        style={{
                          objectFit: "contain",
                        }}
                        alt="Monkey logo"
                      />
                      Early Start (Monkey)
                    </Title>
                  </div>
                  <Row gutter={[32, 32]} style={{ padding: 24 }}>
                    {projectsMonkey.map((p, i) => (
                      <Col
                        xs={24}
                        md={12}
                        key={i}
                        style={{
                          paddingBottom: 24,
                        }}
                      >
                        <Title
                          level={4}
                          style={{ marginBottom: 8, marginTop: 0 }}
                        >
                          {p.title}{" "}
                          <Link
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            🔗
                          </Link>
                        </Title>
                        <Text italic>{p.role}</Text>
                        <br />
                        <Text type="secondary">{p.time}</Text>
                        <ul style={{ marginTop: 12 }}>
                          {p.description.map((d, idx) => (
                            <li key={idx} style={{ marginBottom: 4 }}>
                              {d}
                            </li>
                          ))}
                        </ul>
                        <Text strong style={{ display: "block", marginTop: 8 }}>
                          Công nghệ: {p.tech}
                        </Text>
                      </Col>
                    ))}
                  </Row>
                </Card>
              </motion.div>
            </Col>

            <Col xs={24} md={24}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  bordered={false}
                  style={{
                    borderRadius: 16,
                    boxShadow:
                      "0 4px 20px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)",
                    overflow: "hidden",
                  }}
                  bodyStyle={{ padding: 0 }}
                >
                  <div
                    style={{
                      background: "linear-gradient(90deg, #d7e6ff, #f0f7ff)",
                      padding: "10px 20px",
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <Title
                      level={5}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        margin: 0,
                        color: "#b26a00",
                        letterSpacing: 0.5,
                        fontWeight: 600,
                        fontSize: 18,
                      }}
                    >
                      <img
                        src={imgArabica}
                        width={40}
                        // height={36}
                        style={{
                          objectFit: "contain",
                        }}
                        alt="Monkey logo"
                      />
                      Arabica Tech
                    </Title>
                  </div>

                  <Row gutter={[32, 32]} style={{ padding: 24 }}>
                    {projectsArabica.map((p, i) => (
                      <Col xs={24} md={12} key={i} style={{ marginBottom: 32 }}>
                        <Title
                          level={4}
                          style={{ marginBottom: 8, marginTop: 0 }}
                        >
                          {p.title}{" "}
                          <Link
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            🔗
                          </Link>
                        </Title>

                        <Text italic>{p.role}</Text>
                        <br />
                        <Text type="secondary">{p.time}</Text>

                        <ul style={{ marginTop: 12 }}>
                          {p.description.map((d, idx) => (
                            <li key={idx} style={{ marginBottom: 4 }}>
                              {d}
                            </li>
                          ))}
                        </ul>

                        <Text strong style={{ display: "block", marginTop: 8 }}>
                          Công nghệ: {p.tech}
                        </Text>
                      </Col>
                    ))}
                  </Row>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Card>
    </div>
  );
};

export default ProjectsSection;
