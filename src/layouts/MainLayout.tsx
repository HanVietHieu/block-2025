import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import {
  FileTextOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  ReadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { information } from "../assets/data";
import { FaFacebook } from "react-icons/fa";
import ThemeToggle from "./components/ThemeToggle";
import {
  ContentLayout,
  darkTheme,
  lightTheme,
  Logo,
  SidebarFooter,
  StyledAvt,
  StyledContent,
  StyledSider,
} from "./components/LayoutStyles";
import { useWindowWidth } from "../hooks/useWindowWidth";

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(useWindowWidth(992));
  const [messageCreated, setMessageCreated] = useState(
    useWindowWidth(992) ? "@ 2024" : "© 2024 — Created by Han Viet Hieu"
  );
  const [themeMode, setThemeMode] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "dark"
  );
  const [activeKey, setActiveKey] = useState("home");

  const menuItems = [
    { key: "home", icon: <HomeOutlined />, label: "Home" },
    { key: "profile", icon: <UserOutlined />, label: "Profile" },
    { key: "resume", icon: <FileTextOutlined />, label: "Resume" },
    { key: "blog", icon: <ReadOutlined />, label: "Blog" },
    { key: "about", icon: <InfoCircleOutlined />, label: "About" },
  ];

  const toggleTheme = (data: "light" | "dark") => {
    setThemeMode(data);
    localStorage.setItem("theme", data);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
      setActiveKey(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      menuItems.forEach((item) => {
        const section = document.getElementById(item.key);
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = item.key;
          }
        }
      });
      if (current) setActiveKey(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTheme = themeMode === "dark" ? darkTheme : lightTheme;

  const handleCollapsed = (value: boolean) => {
    setCollapsed(value);
    setMessageCreated(value ? "@ 2024" : "© 2024 — Created by Han Viet Hieu");
  };

  const handleRouter = () => {
    window.open(information.fakeBook);
  };

  return (
    <Layout>
      <StyledSider
        $theme={themeMode}
        breakpoint={undefined}
        width={collapsed ? 160 : 219}
        collapsible
        collapsed={collapsed}
        onCollapse={(value: boolean) => handleCollapsed(value)}
      >
        <StyledAvt $collapsed={collapsed}>
          <img className="profile__avt" src={information.avatar} alt="avt" />
          <div className="avt-item">
            <Logo>{information.fullName}</Logo>
            {collapsed ? null : (
              <FaFacebook
                size={24}
                onClick={handleRouter}
                color="rgb(179 188 207)"
              />
            )}
          </div>
        </StyledAvt>

        <ThemeToggle
          themeMode={themeMode}
          toggleTheme={toggleTheme}
          collapsed={collapsed}
        />
        <hr />
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[activeKey]}
          onClick={({ key }) => handleScrollTo(key)}
          items={menuItems}
        />
        <SidebarFooter>{messageCreated}</SidebarFooter>
      </StyledSider>
      <ContentLayout>
        <StyledContent style={{ background: currentTheme.contentBg }}>
          <Outlet />
        </StyledContent>
      </ContentLayout>
    </Layout>
  );
};

export default MainLayout;
