import { BellFilled, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, Space, Typography, Avatar, Popover } from "antd";
import { useEffect, useState } from "react";
import '../../DashEcrivain.css';

function AppHeaderEcrivain() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState();
  const [drawerVisible, setDrawerVisible] = useState(false); // For Profile Drawer

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="AppHeader">
      {/* Logo */}
      <Image
        width={100}
        height={70}
        src="https://i.pinimg.com/236x/c1/25/9c/c1259ccfcf97d920b7cc7f02dff68bf8.jpg"
      ></Image>

      {/* Title */}
      <Typography.Title><b className="titr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fashion Style</b></Typography.Title>

      {/* User Info */}
      <Space style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        
        {/* Notification Icon */}
        <Badge  offset={[10, 0]}>
          <BellFilled style={{ fontSize: '24px', cursor: 'pointer' , marginRight:10 }} />
        </Badge>

        {/* Profile Icon */}
        <Popover
          content={
            <div>
              <p><b>First Name  : </b> {user?.nom}</p>
              <p><b>Last Name  : </b> {user?.prenom}</p>
              <p><b>Email   :</b> {user?.email}</p>
            </div>
          }
          title="Profil"
          trigger="click"
        >
          <Avatar
            style={{ cursor: 'pointer' }}
            size="large"
            icon={<UserOutlined />}
          />
        </Popover>
      </Space>

      {/* Profile Drawer */}
      <Drawer
        title="Profil Utilisateur"
        placement="right"
        onClose={onClose}
        visible={drawerVisible}
      >
        <p><b>Nom:</b> {user?.nom}</p>
        <p><b>Prénom:</b> {user?.prenom}</p>
        <p><b>Email:</b> {user?.email}</p>
      </Drawer>
    </div>
  );
}

export default AppHeaderEcrivain;
