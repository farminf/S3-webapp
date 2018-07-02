/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
import React from "react";
import { Container, Menu, Responsive, Header } from "semantic-ui-react";
// import PopupMessage from '../components/PopupMessage';
import ProfileMenu from "../ProfileMenu";
// import logo from "../images/logo-white.png";
import { NavLink } from "react-router-dom";

class NavigationbarDesktop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <Responsive minWidth={550}>
        <div className="nav-bar">
          <Menu fixed="top" inverted>
            {/*<Menu.Item style={{ marginLeft: "70px" }}>
              <Image size="mini" src={logo} alt={"Techedge Logo"} />
    </Menu.Item>*/}
            <Menu.Item>
              <NavLink to="/">
                <Header
                  as="h2"
                  inverted
                  style={{
                    color: "white",
                    fontSize: "1.5em",
                    fontWeight: "700"
                  }}
                >
                  Techedge Storage
                </Header>
              </NavLink>
            </Menu.Item>

            <Container>
              <Menu.Item position="right">
                <ProfileMenu />
              </Menu.Item>
            </Container>
          </Menu>
        </div>
        <div className="body">
          {/*<PopupMessage/> */}
          {this.props.children}
        </div>
      </Responsive>
    );
  }
}

export default NavigationbarDesktop;
