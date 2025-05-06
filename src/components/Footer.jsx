import React from "react";
import { FaFacebook, FaFacebookMessenger, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { TfiInstagram } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Footer = ({ image }) => {
  return (
    <footer className="mt-5 " style={{ backgroundColor: "gray" }}>
      <div className="row py-2 px-5 justify-content-between">
        <div className="col-12 col-lg-4 mb-2" style={{ textAlign: "right" }}>
          <h4 className="my-3">Contact Us</h4>
          <p>
            {" "}
            <Link
              to="tel:+0660550444"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <MdContactPhone style={{ fontSize: "x-large" }} /> : <br />
              066 055 0444
            </Link>
          </p>
          <p>
            <Link
              to="https://maps.apple.com/place?address=999/9%20Ratchadamri%20Rd.,%20Pathum%20Wan,%20Pathum%20Wan,%20Bangkok%2010330,%20Thailand&coordinate=13.746558,100.539148&name=centralwOrld&place-id=I40CE84432F27B0C2&map=explore"
              target="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SlLocationPin style={{ fontSize: "x-large" }} /> : <br />
              999/9 Ratchadamri Rd, Pathum Wan, Bangkok, <br />
              10330 Thailand
            </Link>
          </p>
          <p>
            <Link
              to="mailto:www.ggmobile.bkk@gmail.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <GrMail style={{ fontSize: "x-large" }} /> : <br />
              www.ggmobile.bkk@gmail.com
            </Link>
          </p>
        </div>

        <div className="col-12 col-lg-3 mb-2">
          <h4 className="mb-3 text-center my-3">Follow Us</h4>
          <p className="text-center">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={image}
                alt="Gadget Galaxy Logo"
                style={{
                  height: "120px",
                  marginRight: "5px",
                  borderRadius: "50%",
                }}
              />{" "}
              <br />
              <span style={{ fontSize: "x-large" }}>
                {" "}
                <span className="text-primary">GG</span>{" "}
                <span className="text-warning">Mobile</span>
              </span>
            </Link>
          </p>
          <p className="text-center" style={{ fontSize: "x-large" }}>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              className="mx-2"
            >
              <FaFacebook />
            </Link>

            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              className="mx-2"
            >
              <FaFacebookMessenger />
            </Link>

            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              className="mx-2"
            >
              <TfiInstagram />
            </Link>

            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              className="mx-2"
            >
              <FaSquareXTwitter />
            </Link>

            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              className="mx-2"
            >
              <FaLinkedin />
            </Link>
          </p>
        </div>

        <div className="col-12 col-lg-4 " style={{ textAlign: "left" }}>
          <h4 className="mb-3  my-3">About Us</h4>
          <ul className="mt-4">
            <li>Connecting You to the Future.</li>
            <li>Your One-Stop Mobile Destination.</li>
            <li>Smart Choices. Smarter Phones.</li>
            <li>Leading the Way in Mobile Innovation.</li>
          </ul>
          <p className=" mt-5">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "large",
              }}
              className="me-4"
            >
              Products{" "}
            </Link>

            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "large",
              }}
              className="me-4"
            >
              Cart{" "}
            </Link>

            <Link
              to="/favorite"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "large",
              }}
              className="me-4"
            >
              Favorite
            </Link>
          </p>
        </div>
      </div>
      <hr></hr>

      <div className="row pt-1 text-center">
        <p>
          Copyright &copy; 2025. All Rights Reserve.
          <br />
          <span className="text-warning">Designed by Ko Phyo</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
