import { ArrowUpOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface ScrollTopButtonProps {
  handleScrollTop?: () => void;
  activeKey?: string | number;
}
export default function ScrollTopButton({handleScrollTop = () => {}, activeKey}: ScrollTopButtonProps) {

  if(activeKey === 'home' || activeKey === "profile") {
    return <></>
  }
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