import React from "react";
import Logo from "../../asset/logo.png";
export default function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content bg-[#4444] h-[400px] text-white">
        <div>
          <img src={Logo} className="w-44"></img>

          <p className="font-bold">Tentang Hotelin</p>

          <p className="mb-4 text-justify">
            Aplikasi Hotelin adalah aplikasi yang dapat membantu masyarakat yang
            sedang berpergian <br></br>ke luar kota ketika ingin hotel di
            berbagai daerah di negara Indonesia. <br></br>masyarakat yang ingin
            menggunakan aplikasi Hotelin
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
}
