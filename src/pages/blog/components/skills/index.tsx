import React from "react";
import { Row, Col, Card, Typography, Space } from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  ToolOutlined,
  BookOutlined,
  StarOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Title, Text } = Typography;

const skillCategories = [
  {
    icon: <CodeOutlined style={{ color: "#52c41a", fontSize: 24 }} />,
    title: "Front-end",
    items:
      "Javascript, Reactjs, Bootstrap, Jquery, Angular, Nextjs, Antd, Material-UI, Html, Scss...",
  },
  {
    icon: <DatabaseOutlined style={{ color: "#fa8c16", fontSize: 24 }} />,
    title: "Back-end (Basic)",
    items: "Express, Nodejs, SQL, MySql, Oracle, Redis, Sequelize, Socket",
  },
  {
    icon: <ToolOutlined style={{ color: "#1890ff", fontSize: 24 }} />,
    title: "Office Computing",
    items: "Word, Access, Powerpoint",
  },
  {
    icon: <BookOutlined style={{ color: "#722ed1", fontSize: 24 }} />,
    title: "Kiến thức khác",
    items:
      "OOP, Java-core(OOP), PHP, Github, Gitlab, Bitbucket, React Native, Figma, Photoshop...",
  },
];

// const skillsLeft = [
//   { name: "HTML", percent: 100 },
//   { name: "CSS", percent: 90 },
//   { name: "JS", percent: 90 },
//   { name: "Database", percent: 70 },
// ];

// const skillsRight = [
//   { name: "REACTJS", percent: 80 },
//   { name: "ANGULAR", percent: 80 },
//   { name: "NEXTJS", percent: 60 },
//   { name: "Nodejs (express)", percent: 70 },
// ];

const Skills: React.FC = () => {
  return (
    <Container>
      <Title level={3} className="container-blog__title">
        Skills
      </Title>
      <Text style={{ fontSize: 16 }}>
        Tôi đã có hơn 4 năm kinh nghiệm trong vị trí Web Developer. Tôi có thể
        làm việc với các ngôn ngữ như:{" "}
        <b>ReactJS, NextJS, Angular, Express, MySQL...</b>
      </Text>

      {/* Cards */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        {skillCategories.map((cat) => (
          <Col xs={24} sm={12} md={12} lg={12} xl={6} key={cat.title} className="skill-items">
            <Card
              hoverable
              style={{
                borderRadius: 12,
                minHeight: 150,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                {cat.icon}
                <Text strong>{cat.title}</Text>
              </div>
              <Text type="secondary" style={{ fontSize: 13, lineHeight: 1.6 }}>
                {cat.items}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Progress bars */}
      <Row gutter={[32, 16]} style={{ marginTop: 24 }}>
        {/* <Col xs={24} md={12}>
          {skillsLeft.map((skill) => (
            <div key={skill.name} style={{ marginBottom: 16 }}>
              <Text strong>{skill.name}</Text>
              <Progress
                percent={skill.percent}
                showInfo
                strokeColor="#1677ff"
                style={{ marginTop: 4 }}
              />
            </div>
          ))}
        </Col> */}
        {/* <Col xs={24} md={12}>
          {skillsRight.map((skill) => (
            <div key={skill.name} style={{ marginBottom: 16 }}>
              <Text strong>{skill.name}</Text>
              <Progress
                percent={skill.percent}
                showInfo
                strokeColor="#1677ff"
                style={{ marginTop: 4 }}
              />
            </div>
          ))}
        </Col> */}
        <Col xs={24} md={24}>
        <Space direction="vertical" size={12} style={{ width: "100%" }}>
          <Title level={4} style={{ margin: 0 }}>
            <CheckCircleOutlined style={{ color: "#1677ff" }} /> Kỹ năng chuyên môn
          </Title>
          <Text>
            • Triển khai UI/UX theo thiết kế, responsive design (mobile-first) đáp ứng giao diện trên mọi thiết bị, giao diện thân thiện và trực quan.
          </Text>
          <Text>• SEO website tăng cơ hội tìm kiếm tiếp cận người dùng trên các thanh search-engine.</Text>
          <Text>• Kinh nhiệm quản lý state, props và global state.</Text>
          <Text>• Quản lý source code bằng github, gitlab...</Text>
          <Text>• Có thể viết unit test đảm bảo chất lượng sản phẩm.</Text>
          <Text>• Có kiến thức bảo mật tối thiểu phía front-end và basic back-end như refresh-token.</Text>
          <Text>• Review code đảm bảo mã nguồn sạch.</Text>
          <Text>• Kinh nhiệm build code bằng Webpack và dựng code lên server.</Text>
          <Text>• Có khả năng xác định, phân tích và giải quyết các vấn đề về hiệu suất (tốc độ tải trang, rendering, memory leaks), sử dụng các công cụ profiling, lazy loading, code splitting</Text>
          <Text>
            • Nghiên cứu & ứng dụng công nghệ mới nhằm nâng cao chất lượng sản phẩm.
          </Text>
          <Text>• Agile/Scrum: kinh nghiệm làm việc theo quy trình Agile.</Text>
          <Text>• Sử dụng API theo mô hình RESTful & GraphQL & WebSocket.</Text>
          <Text>• Hiểu biết và có thể code back-end, api bằng nodejs-express.</Text>
        </Space>
      </Col>

      {/* KỸ NĂNG MỀM */}
      <Col xs={24} md={24}>
        <Space direction="vertical" size={12} style={{ width: "100%" }}>
          <Title level={4} style={{ margin: 0 }}>
            <StarOutlined style={{ color: "#faad14" }} /> Kỹ năng mềm
          </Title>

          <Text>• Giao tiếp & làm việc nhóm tốt: Truyền đạt thông tin rõ ràng, lắng nghe tích cực và xây dựng mối quan hệ hợp tác hiệu quả.</Text>
          <Text>• Khả năng giải quyết vấn đề: Tiếp cận vấn đề một cách có hệ thống, phân tích và tìm ra phương án tốt nhất.</Text>
          <Text>
            • Tư duy phản biện: Đánh giá thông tin một cách khách quan, đặt câu hỏi hợp lý và đưa ra nhận định cá nhân lên từng task.
          </Text>
          <Text>• Quản lý thời gian nhận sự bằng cách chia task và estimate hợp lý.</Text>
          <Text>• Tư duy cầu tiến: Sẵn sàng tiếp nhận phản hồi, học hỏi từ sai lầm và luôn tìm cách cải thiện bản thân.</Text>
          <Text>• Tinh thần trách nhiệm cao: Hoàn thành cam kết bằng cách có gắng hết sức đảm bảo tiến độ dự án.</Text>
        </Space>
      </Col>

      {/* SỬ DỤNG AI */}
      <Col xs={24} md={24}>
        <Space direction="vertical" size={12} style={{ width: "100%" }}>
          <Title level={4} style={{ margin: 0 }}>
            <ThunderboltOutlined style={{ color: "#eb2f96" }} /> Tăng tốc với AI
          </Title>

          <Text>
            • Tối ưu hiệu suất và nâng cao chất lượng code: Tích hợp các công cụ AI (như ChatGPT, Gemini, hoặc GitHub Copilot) để tự động hóa việc sinh code boilerplate, gợi ý code khi đang gõ, và tạo các đoạn unit test case nhanh chóng.
          </Text>
          <Text>
            • Refactoring (Tái cấu trúc) code nhanh chóng: Dùng AI để đánh giá tính dễ đọc và bảo trì của code, sau đó thực hiện các gợi ý tự động để cải thiện cấu trúc code hiện có.
          </Text>
                    <Text>
            • Debug và kiểm tra lỗi hiệu quả: Sử dụng AI để phân tích thông báo lỗi (error logs) và Stack Trace, từ đó nhanh chóng khoanh vùng và đề xuất các giải pháp tiềm năng cho các vấn đề phức tạp.
          </Text>
                    <Text>
            • Khả năng đánh giá và cộng tác với các công cụ được hỗ trợ bởi AI</Text>
        </Space>
      </Col>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  @media (max-width: 768px) {
    .skill-items .ant-card-body {
      padding: 20px;
    }
  }
`;

export default Skills;
