import styled from "styled-components";
import { Layout } from "antd";
const { Sider, Content } = Layout;

export const lightTheme = {
  sidebarBg: "#ffffff",
  sidebarText: "#000000",
  sidebarHover: "#e6f7ff",
  contentBg: "#f0f2f5",
  contentText: "#000000",
};

export const darkTheme = {
  sidebarBg: "#001529",
  sidebarText: "#ffffff",
  sidebarHover: "#1677ff",
  contentBg: "#141414",
  contentText: "#ffffff",
};

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

export const SidebarFooter = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 100%;
  text-align: center;
  color: #aaa;
  font-size: 12px;
`;

export const ContentLayout = styled(Layout)`
  max-height: 100vh;
  width: auto;
  overflow-y: auto;
  @media (max-width: 992px) {
    transition: none;
  }
`;

export const StyledContent = styled(Content)`
  background: #f5f5f5;
`;

export const StyledSider = styled(Sider)<{  $theme: "light" | "dark" }>`
  background: #001529;
  color: ${(props) => (props.$theme === "dark" ? "#fff" : "#000")} !important;
  left: 0;
  top: 0;
  bottom: 0;
  width: 220px !important;
`;

export const StyledAvt = styled.div<{ 
  $collapsed?: boolean;
}>`
  .profile__avt {
    margin: 12px auto;
    display: block;
    width: ${(props) => (props.$collapsed ? "62px" : "130px")};
    border-radius: 15%;
    height: auto;
  }

  .avt-item {
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;

    svg {
      cursor: pointer;
      color: #ccc;
      transition: color 0.3s ease;
    }

    &:hover svg {
      color: #1877f2;
    }
  }
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    cursor: pointer;
  }
`;

export const Switch = styled.div<{ $active: boolean }>`
  width: 46px;
  height: 24px;
  background: ${(props) => (props.$active ? "#143350" : "rgb(179, 188, 207)")};
  border-radius: 24px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: ${(props) => (props.$active ? "24px" : "3px")};
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
`;

export const Icon = styled.div<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? "#fadb14" : "#999")};
  font-size: 18px;
  transition: color 0.3s;
`;
