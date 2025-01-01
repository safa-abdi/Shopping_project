import {
    AppstoreOutlined,
    FolderAddOutlined ,
    PlusOutlined ,
    UserOutlined,
    LogoutOutlined ,
    BookOutlined,
  } from "@ant-design/icons";
  import { Badge, Drawer, Image, List, Space, Typography } from "antd";
  import { Menu } from "antd";
  import { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import { Link } from 'react-router-dom';
  function SideMenuEcrivain() {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");
    const [user, setUser] = useState()
    const [token, setToken] = useState()
  
    const navigate = useNavigate();
    return (
      <div className="SideMenu">
         
        <Menu
        
          className="SideMenuVerticalE"
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
               label: "Home",
               key:'/dash',
              icon: <AppstoreOutlined />,
              
              className:"nnn"
            },
         
            {
              label: "Product",
              key:'/produit',
              icon: <BookOutlined />,
              className:"nnn"
            },
            
            {
              label: "Add product",
              key:'/ajoutP',
              icon: <PlusOutlined />,
              className:"nnn"
            },
            
            {
              label: "Profil",
              key:'/profil',
              icon: <UserOutlined />,
              className:"nnn"
            },
            {
              label: "Purchase requests",
              key:'/achat',
              icon: <UserOutlined />,
              className:"nnn"
            },
           
  <Image
          width={100}
          height={20}
         
        ></Image>,
            {
              label: "Logout",
              key: '/',
              icon: <LogoutOutlined />,
              className:"nnn",
             
              
            },
          ]}
        ></Menu>
      </div>
    );
  }
  export default SideMenuEcrivain;
  