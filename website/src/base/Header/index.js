import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import Dictionary from '../../components/Dictionary';
import Burger from '@animated-burgers/burger-slip';
import '@animated-burgers/burger-slip/dist/styles.css';
import classNames from 'classnames';
import {
  Route,
  Link
} from "react-router-dom";
import Cluar from '../../common/Cluar';
import Builder from '../../common/Builder';

import logo from '../../assets/images/netunologolight.svg';

import './index.less';

const { Header } = Layout;
const { SubMenu } = Menu;

function BaseHeader() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState('main');

  const handleMenuClick = (selectMenu) => {
    setBurgerMenu(false);
    if (selectMenu) {
      setActiveMenu(selectMenu);
    }
    window.scrollTo(0, 0);
  };

  const menuLanguages = [];
  const menu = [];
  const subMenuKeys = [];
  const routes = [];
  for (const language of Cluar.languages()) {
    if (!Cluar.pages()[language.code]) {
      continue;
    }
    if (language.code !== Cluar.currentLanguage().code) {
      menuLanguages.push(
        // <Menu.Item key={language.code} onClick={() => {
        //   Cluar.changeLanguage(language.locale);
        //   window.localStorage.setItem('locale', Cluar.currentLanguage().locale);
        //   window.location.href = `/${language.locale}/`;
        // }}>{language.description}</Menu.Item>
        {
          key: language.code,
          onClick: () => {
            Cluar.changeLanguage(language.locale);
            window.localStorage.setItem('locale', Cluar.currentLanguage().locale);
            window.location.href = `/${language.locale}/`;
          },
          label: language.description
        }
      );
    }

    const buildMenu = (page, level) => {
      if (page.menu && language.code === Cluar.currentLanguage().code) {
        const key = `${page.link}`;
        if (Cluar.pages()[language.code].find((p) => p.menu && p.parent === page.link)) {
          subMenuKeys.push(key);
          // return (
          //   <SubMenu key={key} popupClassName={`menu-level-${level + 1}`} title={
          //     <Link to={`/${Cluar.currentLanguage().locale}${page.link}`} onClick={() => handleMenuClick(key)}>
          //       {page.title}
          //     </Link>
          //   }>

          //     { Cluar.pages()[language.code].filter((p) => p.menu && p.parent === page.link).map((p) => buildMenu(p, level + 1))}
          //   </SubMenu>
          // );

          return (
            {
              key,
              label: <Link to={`/${Cluar.currentLanguage().locale}${page.link}`} onClick={() => handleMenuClick(key)}>
                {page.title}
              </Link>,
              popupClassName: `menu-level-${level + 1}`

            }

          )
        } else {
          /**
           * Sample of submenu items customization, only on level 1:
           * 
          if (level == 1) {
            return (
              <Menu.Item key={key}>
                <Link to={`/${Cluar.currentLanguage().locale}${page.link}`} onClick={() => handleMenuClick(key)}>
                  <h2>{page.title}</h2>
                  <p>{page.description}</p>
                </Link>
              </Menu.Item>
            );
          }
          **/
          // return (
          //   <Menu.Item key={key}>
          // <Link to={`/${Cluar.currentLanguage().locale}${page.link}`} onClick={() => handleMenuClick(key)}>
          //   {page.title}
          // </Link>
          //   </Menu.Item>
          // );
          return (
            {
              key,
              label:
                <Link to={`/${Cluar.currentLanguage().locale}${page.link}`} onClick={() => handleMenuClick(key)}>
                  {page.title}
                </Link>
            }
          )
        }
      }
      return null;
    };

    const subroutes = [];
    for (const page of Cluar.pages()[language.code]) {
      if (page.menu && page.parent === "" && language.code === Cluar.currentLanguage().code) {
        menu.push(
          buildMenu(page, 0)
        );
      }
      subroutes.push(
        <Route key={`/${language.locale}${page.link}`} path={`/${language.locale}${page.link}`} exact element={<Builder page={page} />} />
      );
    }
    routes.push(
      <Route key={`/${language.locale}/`} path={`/${language.locale}/`}>
        {subroutes}
      </Route>
    );
  }

  return (
    <Header className={classNames({ 'header-burger-open': burgerMenu })}>
      <div className="ant-layout-header__wrapper">
        <div className="logo">
          <Link to={`/${Cluar.currentLanguage().locale}/`} onClick={() => handleMenuClick('/')}>
            <img alt="logo" src={logo} />
          </Link>
        </div>
        <div className={
          classNames({
            'menu': true
          })
        }>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[activeMenu]}
            selectedKeys={[activeMenu]}
            items={[...menu,
              {
                key: 'Dev',
                label: 
                  <span style={{ order: 1 }}>
                    <a href='https://dev.netuno.org' target="_blank"><Dictionary entry="Dev" oneLine /></a>
                  </span>
          
              },
              {
                key: 'forum',
                label:  
                  <span style={{ order: 2 }}>
                    <a href='https://forum.netuno.org' target="_blank"><Dictionary entry="forum" oneLine /></a>
                  </span>
                
              }, 
              {
                key: 'documentation',
                label: 
                  <span style={{ order: 3 }}>
                    <a href='https://doc.netuno.org' target="_blank"><Dictionary entry="documentation" oneLine /></a>
                  </span>
          
              },
            ]} />
        </div>
        <div className={
          classNames({
            'menu': true,
            'menu-burger': true,
            'menu-burger-open': burgerMenu
          })
        }>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[activeMenu]}
            selectedKeys={[activeMenu]}
            openKeys={subMenuKeys}
            items={[...menu,
              {
                key: 'forum',
                label:  
                  <span style={{ order: 1 }}>
                    <a href='https://forum.netuno.org' ><Dictionary entry="forum" oneLine /></a>
                  </span>               
              }, 
              {
                key: 'documentation',
                label: 
                  <span style={{ order: 2 }}>
                    <a href='https://doc.netuno.org'><Dictionary entry="documentation" oneLine /></a>
                  </span>
          
              },
              ]} 
          />
        </div>
        <div className="menu-burger-button">
          <Burger isOpen={burgerMenu} onClick={() => { setBurgerMenu(!burgerMenu); }} />
        </div>
        <Menu
          theme="light"
          className="menu-languages"
          mode={'horizontal'}
          defaultSelectedKeys={[activeMenu]}
          selectedKeys={[activeMenu]}
          items={[{ key: "langs", icon: <GlobalOutlined />, label: Cluar.currentLanguage().code, children: menuLanguages }]}
        />
      </div>
    </Header>
  );
}

export default BaseHeader;