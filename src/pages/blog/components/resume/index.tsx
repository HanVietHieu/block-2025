import React from "react";
import styled from "styled-components";
import { Typography, List } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Resume: React.FC = () => {
  const listItems = [
    "Môi trường làm việc mong muốn: Tìm kiếm môi trường chuyên nghiệp, có định hướng phát triển lâu dài, với mức lương thưởng ổn định và cơ hội phát triển bản thân",
    "Mục tiêu Ngắn hạn: Trở thành một lập trình viên full stack có đóng góp tích cực vào các dự án của công ty.",
    "Mục tiêu Dài hạn: Trong vòng 3-5 năm tới, phát triển bản thân và kỹ năng để trở thành quản lý của một team (Team Leader/Manager)",
    "Kỹ năng làm việc nhóm tốt.",
    "Hiểu biết về UI/UX, SEO web.",
    "Dễ thích nghi môi trường mới, có khả năng làm việc nhóm hoặc làm độc lập.",
    "Sở thích: Hát không hay nhưng hay hát, Bóng đá, Cầu lông, Bida...",
  ];
  return (
    <ContainerResume>
      <div>
        <div className="container-header">
          <Title
            level={4}
            style={{
              color: "#222",
              fontWeight: 600,
              marginBottom: 0,
              marginTop: "0px",
            }}
          >
            Han Viet Hieu
          </Title>

          <Paragraph
            italic
            style={{
              fontSize: 15,
              color: "#444",
              background: "#f8f9fa",
              padding: "10px 16px",
              borderRadius: 8,
              borderLeft: "3px solid #0d6efd",
              marginBottom: 16,
            }}
          >
            * Mọi sự cố gắng đều được đền đáp xứng đáng. Cố gắng chưa chắc đã
            thành công nhưng không cố gắng chắc chắn sẽ thất bại.
          </Paragraph>
        </div>
        <List
          dataSource={listItems}
          split={false}
          renderItem={(item) => (
            <List.Item
              style={{
                padding: "6px 0",
                borderBottom: "1px dashed #f0f0f0",
              }}
            >
              <Text style={{ fontSize: 15, color: "#333" }}>
                <CheckCircleTwoTone
                  twoToneColor={["#0d6efd", "#bae0ff"]}
                  style={{ marginRight: 8 }}
                />
                {item}
              </Text>
            </List.Item>
          )}
        />
      </div>
    </ContainerResume>
  );
};

export default Resume;

const ContainerResume = styled.div`
  li {
    list-style: square !important;
  }

  .resume__detail {
    padding-left: 15px;
    border-left: 2px solid #0d6efd;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50px;
      left: -9px;
      top: 0;
      background: #fff;
      border: 2px solid #1f5297;
    }
  }

  .working-time {
    background-color: #9e9ef1;
    font-style: italic;
    width: max-content;
    padding: 0 5px;
    font-size: 12px;
  }
`;
