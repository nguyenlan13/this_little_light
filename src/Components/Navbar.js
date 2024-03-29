import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Badge } from "antd";
import { Header } from "antd/lib/layout/layout";
import Logo from "../Assets/This-Little-Light.png"

function Navbar() {
  return (
    <div
      style={{
        height: "auto",
        backgroundColor: "#ffadd2",
        padding: "10px 5px 10px 5px",
        position: "fixed",
        width: "100%",
        // bottom: "0",
        overflow: "hidden",
      }}
    >
      <Header className="header">
        <Row
        // gutter={16}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          // gutter={{xs: 8, sm: 16, md: 24, lg: 32}}
          // style={{
          //   justifyContent: "space-around",
          // }}
        >
          <Col className="gutter-row" span={6}>
            <Link to="/home"><img src={Logo}/></Link>
          </Col>
          <Col className="gutter-row" span={6}>
            <Link to="/about">About</Link>
          </Col>
          <Col className="gutter-row" span={6}>
            <Link to="/new">New Arrivals</Link>
          </Col>
          <Col className="gutter-row" span={6}>
            <Link to="/sale">Sale</Link>
          </Col>
          <Col className="gutter-row" span={6}>
            <Link to="/contact">Contact us</Link>
          </Col>
        </Row>
      </Header>
    </div>
  );
}

export default Navbar;
