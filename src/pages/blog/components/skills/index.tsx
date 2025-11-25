import React from "react";
import { Row, Col, Card, Progress, Typography } from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  ToolOutlined,
  BookOutlined,
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

const skillsLeft = [
  { name: "HTML", percent: 100 },
  { name: "CSS", percent: 90 },
  { name: "JS", percent: 90 },
  { name: "Database", percent: 70 },
];

const skillsRight = [
  { name: "REACTJS", percent: 80 },
  { name: "ANGULAR", percent: 80 },
  { name: "NEXTJS", percent: 60 },
  { name: "Nodejs (express)", percent: 70 },
];

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
          <Col xs={24} sm={12} md={6} key={cat.title} className="skill-items">
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
        <Col xs={24} md={12}>
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
        </Col>
        <Col xs={24} md={12}>
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
        </Col>
        <Col xs={24} md={24}>
          * Với các kỹ năng chuyên môn như{" "}
          Triển khai UI/UX theo thiết kế, xây dựng các hiệu ứng và hoạt ảnh hiện đại, mượt mà.
          <div>Tối ưu hóa hiệu năng, SEO (đặc biệt với Next.js) và khả năng tương thích trình duyệt.</div>
          <div>Review code, có thể viết unit test để đảm bảo chất lượng sản phẩm</div>
          <div>Nghiên cứu, đề xuất và ứng dụng các công nghệ front-end mới nhằm nâng cao chất lượng sản phẩm và quy trình làm việc.</div>
          <div>Agile/Scrum: Kinh nghiệm làm việc theo phương pháp Agile.</div>
          <div>Api sử dụng theo mô hình Resful và Soap...</div>
        </Col>
        <Col xs={24} md={24}>
          * Bên cạnh các kỹ năng chuyên môn, tôi còn sở hữu những{" "}
          <b>kỹ năng mềm</b> quan trọng như:{" "}
          <b>giao tiếp & làm việc nhóm tốt</b>,{" "}
          <b>khả năng giải quyết vấn đề</b>,<b> tư duy phản biện</b>,{" "}
          <b>quản lý thời gian</b>, và tinh thần
          <b> tự học, trách nhiệm cao</b>.
        </Col>
        <Col xs={24} md={24}>
          * <b>Tăng tốc, nâng cao</b> chất lượng code bằng việc tích hợp sử dụng
          linh hoạt các công cụ AI như ChatGPT và Gemini vào quy trình làm việc.
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
