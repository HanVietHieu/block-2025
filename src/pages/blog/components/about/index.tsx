import React from "react";
import { Card, Button, Space, QRCode } from "antd";
import { FacebookFilled, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import TitleMenu from "../titleMenu";
import Resume from "../resume";

export default function ContactMe() {
  return (
    <div className="container-blog">
      <TitleMenu content="About" />
      <Card bordered={false} className="cart-container">
        <Resume />
        <Card
          style={{ width: 380, textAlign: "center", borderRadius: 16, marginTop: 12 }}
          title={<h2 style={{ margin: 0 }}>Liên hệ với tôi</h2>}
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
    </div>
  );
}
