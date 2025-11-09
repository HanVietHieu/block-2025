import { Card, Button, Space, QRCode } from "antd";
import { FacebookFilled, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import TitleMenu from "../titleMenu";
import Resume from "../resume";
import styled from "styled-components";

export default function ContactMe() {
  return (
    <Container className="container-blog">
      <TitleMenu content="About" />
      <Card bordered={false} className="cart-container">
        <Resume />
        <Card
          title={<h2 style={{ margin: 0 }}>Liên hệ cho tôi</h2>}
          className="card-contact"
        >
          <Space direction="vertical" align="center" size={12}>
            <QRCode value="https://facebook.com/yourlink" size={160} />
            <div style={{ color: "#666" }}>Quét mã QR để mở Facebook</div>
          </Space>
          <Space style={{ marginTop: 24 }} size={24} align="center">
            <Button
              type="primary"
              shape="circle"
              size="large"
              href="https://www.facebook.com/hanviethieu"
              target="_blank"
              icon={<FacebookFilled />}
            />
            <Button
              type="default"
              shape="circle"
              size="large"
              href="tel:039666141"
              icon={<PhoneOutlined />}
            />
            <Button
              type="default"
              shape="circle"
              size="large"
              href="mailto:hanviethieu1999@gmail.com"
              icon={<MailOutlined />}
            />
          </Space>
        </Card>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  .card-contact {
    width: 380px;
    text-align: center;
    border-radius: 16px;
    margin-top: 12px;
  }

  @media (max-width: 768px) {
    .card-contact {
      width: 100%;
      text-align: center;
      border-radius: 16px;
      margin-top: 12px;

      .ant-space-vertical.ant-space-align-center {
        display: block;
        text-align: center;
        padding-top: 20px;

        .ant-space-item {
          text-align: center;
          display: flex;
          justify-content: center;
        }
      }

      .ant-space-horizontal.ant-space-align-center {
        padding-bottom: 20px;
        margin-top: 20px !important;

      }
    }
  }
`;
