import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Badge } from "antd";
import { Header } from "antd/lib/layout/layout";

function Navbar() {
  return (
    <div
      style={{
        height: "auto",
        backgroundColor: "#91d5ff",
        padding: "10px 5px 10px 5px",
        position: "fixed",
        width: "100%",
        // bottom: "0",
        overflow: "hidden",
      }}
    >
      <Header className="header">
        <Row
          // gutter={{xs: 8, sm: 16, md: 24, lg: 32}}
          style={{
            justifyContent: "space-around",
          }}
        >
          <Col className="gutter-row" span={4}>
            <Link to="/about">About</Link>
          </Col>
          <Col className="gutter-row" span={4}>
            <Link to="/new">New Arrivals</Link>
          </Col>
          <Col span={4}>
            <Link to="/sale">Sale</Link>
          </Col>
          <Col span={4}>
            <Link to="/contact">Contact us</Link>
          </Col>
        </Row>
      </Header>
    </div>
  );
}

export default Navbar;
