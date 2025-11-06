import React from "react";
import { Card, Typography, Divider, Avatar, Space, Row, Col, Flex } from "antd";
import {
  MailOutlined,
  EnvironmentOutlined,
  GiftOutlined,
  CodeOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import imageAvt from "../../../../assets/img/img.jpg";
import TitleMenu from "../titleMenu";
import { dataWorking } from "../../../../assets/data";
import Skills from "../skills";

const { Text, Link, Title } = Typography;
interface InfoItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
}

const personalInfo: InfoItem[] = [
  { label: "Birthday", value: "24/04/1999", icon: <GiftOutlined /> },
  { label: "City", value: "Ha Noi, Viet Nam", icon: <EnvironmentOutlined /> },
  {
    label: "Email",
    value: "hanviethieu1999@gmail.com",
    icon: <MailOutlined />,
    href: "mailto:hanviethieu1999@gmail.com",
  },
  { label: "Position", value: "Web development", icon: <CodeOutlined /> },
];

const Profile: React.FC = () => {
  return (
    <div className="container-blog">
      <TitleMenu content="Profile" />
      <Card bordered={false} className="cart-container">
        <div>
          <Title level={3} className="container-blog__title">
            About
          </Title>
          <IntroText className="text-blog">
            Xin chào, tôi là <strong>Hiếu</strong>! Đây là nơi tôi ghi lại những
            kiến thức hay đôi khi là những chia sẻ trong quá trình làm việc, học
            tập những năm ở vị trí lập trình viên (Software Engineer).
          </IntroText>

          <ProfileWrapper>
            <AvatarBox>
              <Avatar
                src={imageAvt}
                alt="avatar"
                shape="square"
                size={230}
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
              />
            </AvatarBox>

            <InfoBox>
              <Typography.Title
                level={3}
                style={{
                  marginBottom: 12,
                  marginTop: 0,
                }}
              >
                Han Viet Hieu
              </Typography.Title>

              <Space direction="vertical" size="middle" style={{ gap: "12px" }}>
                {personalInfo.map((item, index) => (
                  <InfoRow key={index}>
                    <IconWrapper>{item.icon}</IconWrapper>
                    <Text strong style={{ width: 90 }}>
                      {item.label}:
                    </Text>
                    {item.href ? (
                      <Link href={item.href} target="_blank">
                        {item.value}
                      </Link>
                    ) : (
                      <Text>{item.value}</Text>
                    )}
                  </InfoRow>
                ))}
              </Space>
            </InfoBox>
          </ProfileWrapper>
        </div>
        <Divider style={{ margin: "38px 0 26px 0" }} />
        <div>
          <Title
            level={3}
            className="container-blog__title"
            style={{ marginBottom: "12px" }}
          >
            Experience
          </Title>
          <Row gutter={[24, 24]}>
            {dataWorking.map((item, index) => (
              <Col xs={24} sm={24}  key={index} md={12} xl={8} xxl={8}>
                <StyledCard>
                  <ResponsiveFlex
                    align="center"
                    gap={16}
                    style={{ marginBottom: 16 }}
                  >
                    <Avatar
                      src={item.logoCompany}
                      size={120}
                      shape="square"
                      className="logo-company"
                      style={{
                        borderRadius: 12,
                        backgroundColor: "#f9fafc",
                        objectFit: "contain",
                      }}
                    />
                    <div>
                      <Text strong style={{ fontSize: 16, lineHeight: 1 }}>
                        {item.companyName}
                      </Text>
                      <Flex align="center" gap={6} style={{ marginTop: 4 }}>
                        <EnvironmentOutlined style={{ color: "#1677ff" }} />
                        <Text type="secondary">{item.location}</Text>
                      </Flex>
                    </div>
                  </ResponsiveFlex>
                  <TimeBadge>
                    <ClockCircleOutlined />
                    <span>{item.workingTime}</span>
                  </TimeBadge>
                </StyledCard>
              </Col>
            ))}
          </Row>
          <Divider style={{ margin: "38px 0 26px 0" }} />
          <Skills />
        </div>
      </Card>
    </div>
  );
};

export default Profile;
const ResponsiveFlex = styled(Flex)`
  margin-bottom: 16px;
  gap: 16px;

  @media (max-width: 1440px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    gap: 6px;
  }
`;

const TimeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #e6f4ff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 0 rgba(22, 119, 255, 0.3);

  svg {
    font-size: 14px;
  }

   @media (max-width: 1440px) {
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    display: flex;
   }
`;
const StyledCard = styled(Card)`
  border-radius: 16px !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid #f0f0f0;
    /* .ant-card-body {
    padding: 20px;
  } */
  @media (min-width: 992px) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(22, 119, 255, 0.15);
    }
  }


`;

const IntroText = styled.p`
  color: #444;
  line-height: 1.6;
  font-size: 15px;
  background: #f8f9fa;
  padding: 12px 16px;
  border-left: 4px solid #1677ff;
  border-radius: 8px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const AvatarBox = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.div`
  flex: 1;
  min-width: 260px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f9fafc;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  &:hover {
    background: #eef5ff;
    border-color: #d0e3ff;
  }
`;

const IconWrapper = styled.span`
  color: #1677ff;
  font-size: 16px;
  display: flex;
  align-items: center;
`;
