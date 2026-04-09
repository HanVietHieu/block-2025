import { Card, Button, Space } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import TitleMenu from "../titleMenu";
import Resume from "../resume";
import styled from "styled-components";
import contacZalo from "../../../../assets/img/contac-zalo.jpeg";

export default function ContactMe() {
  return (
    <Container className="container-blog">
      <TitleMenu content="About" />
      <Card bordered={false} className="cart-container">
        <Resume />

        <Card
          title={
            <h2 style={{ margin: 0, textAlign: "center" }}>Liên hệ cho tôi</h2>
          }
          className="card-contact"
          style={{ textAlign: "center", borderRadius: 16 }}
        >
          {/* QR */}
          <Space direction="vertical" align="center" size={12}>
            <img
              src={contacZalo}
              alt="Zalo QR"
              style={{
                width: 160,
                height: 160,
                borderRadius: 16,
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              }}
            />

            <div style={{ color: "#888", fontSize: 14 }}>
              Quét mã QR để chat Zalo
            </div>
          </Space>

          {/* Divider */}
          <div
            style={{
              margin: "20px 0",
              marginBottom: "7px",
              height: 1,
              background: "#f0f0f0",
            }}
          />

          {/* Buttons */}
          <Space size={20} align="center">
            <Button
              type="primary"
              shape="circle"
              size="large"
              href="tel:039666141"
              icon={<PhoneOutlined />}
              style={{
                boxShadow: "0 4px 12px rgba(24,144,255,0.4)",
              }}
            />

            <Button
              shape="circle"
              size="large"
              href="mailto:hanviethieu1999@gmail.com"
              icon={<MailOutlined />}
              style={{
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
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
