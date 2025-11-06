import { ArrowUpOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function ScrollTopButton({handleScrollTop = () => {}}) {

  return (
    <Button
      type="primary"
      shape="circle"
      icon={<ArrowUpOutlined style={{ fontSize: 22 }} />}
      onClick={handleScrollTop}
      className="scroll-top-btn"
    />
  );
}