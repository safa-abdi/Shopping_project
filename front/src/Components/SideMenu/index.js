import {
  AppstoreOutlined,
  FolderAddOutlined ,
  PlusOutlined ,
  UserOutlined,
  LogoutOutlined 
} from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../App.css'
function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
       
      <Menu
      
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        
        selectedKeys={[selectedKeys]}
        items={[
          <Image
        width={100}
        height={20}
       
      ></Image>,
       
          {
             label: "Home\n",
            
            icon: <AppstoreOutlined />,
            key: "/home",
            className:"nnn"
          },
       
          {
            label: "Ecrivains",
            key: "/inventory",
            icon: <UserOutlined />,
            className:"nnn"
          },
          
          {
            label: "Clients",
            key: "/customers",
            icon: <UserOutlined />,
            className:"nnn"
          },
          
          {
            label: "Ajouter un client",
            key: "/AjoutC",
            icon: <PlusOutlined />,
            className:"nnn"
          },
          {
            label: "Ajouter un ecrivain",
            key: "/AjoutE",
            icon: <PlusOutlined />,
            className:"nnn"
          },

<Image
        width={100}
        height={20}
       
      ></Image>,
          {
            label: "Logout",
            key: "/",
            icon: <LogoutOutlined />,
            className:"nnn"
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
