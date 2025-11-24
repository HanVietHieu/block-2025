import React, { useEffect, useRef, useState } from "react";
import { Drawer, Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import {
  FileTextOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MenuOutlined,
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
import ScrollTopButton from "./components/ScrollTopButton";

const { Header } = Layout;
const menuItems = [
  { key: "home", icon: <HomeOutlined />, label: "Home" },
  { key: "profile", icon: <UserOutlined />, label: "Profile" },
  { key: "resume", icon: <FileTextOutlined />, label: "Resume" },
  { key: "blog", icon: <ReadOutlined />, label: "Blog" },
  { key: "about", icon: <InfoCircleOutlined />, label: "About" },
];

const MainLayout: React.FC = () => {
  const isCheckMobile = useWindowWidth(992);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [collapsed, setCollapsed] = useState<boolean>(useWindowWidth(992));
  const [messageCreated, setMessageCreated] = useState(
    useWindowWidth(992) ? "@ 2024" : "© 2024 — Created by Han Viet Hieu"
  );
  const [themeMode, setThemeMode] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );
  const [activeKey, setActiveKey] = useState("home");
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleTheme = (data: "light" | "dark") => {
    setThemeMode(data);
    localStorage.setItem("theme", data);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    const contentEl = contentRef.current;

    if (el && contentEl) {
      const targetOffset = el.offsetTop;

      contentEl.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });

      setActiveKey(id);
    }
  };

  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    const handleScroll = () => {
      let current = "";
      menuItems.forEach((item) => {
        const section = document.getElementById(item.key);
        if (section) {
          const sectionTop = section.offsetTop;
          const scrollTop = contentEl.scrollTop;
          if (scrollTop >= sectionTop - 100) {
            current = item.key;
          }
        }
      });
      if (current) setActiveKey(current);
    };
    contentEl.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => contentEl.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTheme = themeMode === "dark" || themeMode === "light" ? lightTheme : darkTheme;

  const handleCollapsed = (value: boolean) => {
    setCollapsed(value);
    setMessageCreated(value ? "@ 2024" : "© 2024 — Created by Han Viet Hieu");
  };

  const handleRouter = () => {
    window.open(information.fakeBook);
  };

  const handleMenuItems = () => {
    return (
      <StyledSider
        $theme={themeMode}
        breakpoint={undefined}
        width={collapsed && !isCheckMobile ? 160 : 219}
        collapsible={!isCheckMobile}
        collapsed={collapsed && !isCheckMobile}
        onCollapse={(value: boolean) => handleCollapsed(value)}
        style={{ height: `${isCheckMobile ? "100%" : "auto"}` }}
      >
        <StyledAvt $collapsed={collapsed && !isCheckMobile}>
          <img className="profile__avt" src={information.avatar} alt="avt" />
          <div className="avt-item">
            <Logo>{information.fullName}</Logo>
            {collapsed && !isCheckMobile ? null : (
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
          collapsed={collapsed && !isCheckMobile}
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
    );
  };

  return (
    <>
      {isCheckMobile && (
        <Header className="header-menu__mobile">
          <MenuOutlined
            style={{
              fontSize: 22,
              position: "absolute",
              top: 20,
              left: 20,
              zIndex: 999,
              cursor: "pointer",
              color: themeMode === "dark" ? "#fff" : "#d7d7d7",
            }}
            onClick={() => setOpenDrawer(true)}
          />
        </Header>
      )}
      <Layout>
        {!isCheckMobile ? (
          handleMenuItems()
        ) : (
          <Drawer
            placement="left"
            onClose={() => setOpenDrawer(false)}
            open={openDrawer}
            bodyStyle={{ padding: 0 }}
            width={219}
            className="drawer-menu"
          >
            {handleMenuItems()}
          </Drawer>
        )}
        <ContentLayout
          ref={contentRef}
          className={`${isCheckMobile ? "mt-57" : ""}`}
        >
          <StyledContent style={{ background: currentTheme.contentBg }}>
            <Outlet />
          </StyledContent>
        </ContentLayout>
        <ScrollTopButton handleScrollTop={() => handleScrollTo("root")} activeKey={activeKey}/>
      </Layout>
    </>
  );
};

export default MainLayout;
