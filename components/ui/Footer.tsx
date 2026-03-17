"use client";

import { Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";

const Footer: React.FC = () => {
  const pathname = usePathname();

  // Helper function to check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  // Active link class
  const activeClass = "text-white font-medium";

  return (
    <footer className="bg-[#031119] text-white">
      <Container className="py-8 sm:py-12 md:py-16">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start pb-8 sm:pb-10 md:pb-12 max-w-[1300px] mx-auto gap-8 sm:gap-10 md:gap-12 lg:gap-0">
          {/* Left Section - Brand, Tagline, and Social */}
          <div className="max-w-full lg:max-w-[520px] w-full">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 no-underline mb-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.0844 6.875H21.5625V4.625C21.5625 4.39294 21.4703 4.17038 21.3062 4.00628C21.1421 3.84219 20.9196 3.75 20.6875 3.75H19.3125C19.0804 3.75 18.8579 3.84219 18.6938 4.00628C18.5297 4.17038 18.4375 4.39294 18.4375 4.625V6.875H10.9156C9.34696 6.87583 7.84278 7.49935 6.73356 8.60856C5.62435 9.71778 5.00083 11.222 5 12.7906V16.3156C5 20.1936 6.54051 23.9127 9.28265 26.6549C12.0248 29.397 15.7439 30.9375 19.6219 30.9375H20.6875C20.9196 30.9375 21.1421 30.8453 21.3062 30.6812C21.4703 30.5171 21.5625 30.2946 21.5625 30.0625V28.6875C21.5625 28.4554 21.4703 28.2329 21.3062 28.0688C21.1421 27.9047 20.9196 27.8125 20.6875 27.8125H19.6219C16.5727 27.8125 13.6484 26.6012 11.4924 24.4451C9.33628 22.2891 8.125 19.3648 8.125 16.3156V12.7906C8.125 12.0505 8.41901 11.3407 8.94235 10.8174C9.4657 10.294 10.1755 10 10.9156 10H29.0844C29.8245 10 30.5343 10.294 31.0576 10.8174C31.581 11.3407 31.875 12.0505 31.875 12.7906V16.5625C31.873 17.4199 31.7681 18.2739 31.5625 19.1062C31.508 19.3207 31.5371 19.5479 31.6439 19.7417C31.7506 19.9355 31.9271 20.0815 32.1375 20.15L33.45 20.5781C33.5634 20.6157 33.6833 20.6297 33.8022 20.619C33.9212 20.6084 34.0367 20.5734 34.1417 20.5163C34.2466 20.4591 34.3386 20.3811 34.4121 20.2869C34.4855 20.1927 34.5389 20.0844 34.5688 19.9688C34.8529 18.8556 34.9978 17.7114 35 16.5625V12.7906C34.9992 11.222 34.3757 9.71778 33.2664 8.60856C32.1572 7.49935 30.653 6.87583 29.0844 6.875Z" fill="#F3F6FA" />
                <path d="M15 20C16.3807 20 17.5 18.8807 17.5 17.5C17.5 16.1193 16.3807 15 15 15C13.6193 15 12.5 16.1193 12.5 17.5C12.5 18.8807 13.6193 20 15 20Z" fill="#F3F6FA" />
                <path d="M25 20C26.3807 20 27.5 18.8807 27.5 17.5C27.5 16.1193 26.3807 15 25 15C23.6193 15 22.5 16.1193 22.5 17.5C22.5 18.8807 23.6193 20 25 20Z" fill="#F3F6FA" />
                <path d="M34.916 29.0002L37.7472 30.1158C37.8055 30.1388 37.8556 30.1789 37.8908 30.2307C37.926 30.2825 37.9449 30.3438 37.9449 30.4064C37.9449 30.4691 37.926 30.5303 37.8908 30.5822C37.8556 30.634 37.8055 30.674 37.7472 30.6971L34.916 31.8127C34.4148 32.0108 33.9596 32.3097 33.5785 32.6908C33.1974 33.0719 32.8985 33.5271 32.7004 34.0283L31.5847 36.8408C31.5617 36.8991 31.5217 36.9491 31.4699 36.9843C31.418 37.0196 31.3568 37.0384 31.2941 37.0384C31.2314 37.0384 31.1702 37.0196 31.1184 36.9843C31.0666 36.9491 31.0265 36.8991 31.0035 36.8408L29.8879 34.0283C29.6902 33.5268 29.3915 33.0714 29.0103 32.6902C28.6292 32.3091 28.1737 32.0104 27.6722 31.8127L24.8597 30.6971C24.8015 30.674 24.7514 30.634 24.7162 30.5822C24.681 30.5303 24.6621 30.4691 24.6621 30.4064C24.6621 30.3438 24.681 30.2825 24.7162 30.2307C24.7514 30.1789 24.8015 30.1388 24.8597 30.1158L27.6722 29.0002C28.1737 28.8025 28.6292 28.5038 29.0103 28.1226C29.3915 27.7415 29.6902 27.286 29.8879 26.7846L31.0035 23.9721C31.0265 23.9138 31.0666 23.8637 31.1184 23.8285C31.1702 23.7933 31.2314 23.7744 31.2941 23.7744C31.3568 23.7744 31.418 23.7933 31.4699 23.8285C31.5217 23.8637 31.5617 23.9138 31.5847 23.9721L32.7004 26.7846C32.8985 27.2857 33.1974 27.741 33.5785 28.122C33.9596 28.5031 34.4148 28.802 34.916 29.0002Z" fill="#F3F6FA" />
              </svg>


              <span
                className="font-bold text-sm sm:text-base leading-none whitespace-nowrap"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}>
                <span style={{ color: "#FFFFFF" }}>DIMA360MARKETlNG</span>
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-[#999999] text-[15px] leading-[1.6] mb-6 sm:mb-8 md:mb-10">
              Full-service digital marketing agency helping ambitious <br /> businesses scale through data-driven strategies and <br /> measurable results.
            </p>

            {/* Social Section */}
            <div>
              <h3 className="text-white text-base font-normal mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {/* LinkedIn */}
                {/* <Link
                  href="http://linkedin.com/"
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E72A1] to-[#3A9AD4] flex items-center justify-center transition-all hover:shadow-[0_4px_40px_rgba(30,114,161,0.6)]"
                  aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 text-white" />
                </Link> */}

                {/* X (Twitter) */}
                <Link
                  href="https://x.com/dima360ai/"
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E72A1] to-[#3A9AD4] flex items-center justify-center transition-all hover:shadow-[0_4px_40px_rgba(30,114,161,0.6)]"
                  aria-label="X (Twitter)">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.451 1.875h1.692L7.185 6.061l4.494 5.939H8.266l-2.656-3.472-3.038 3.472H1.097l3.967-4.536L.937 1.875h3.492l2.4 3.175 2.622-3.175zm-.592 8.918h.937L4.18 2.797H3.173l5.686 7.996z"
                      fill="white"
                    />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/dima360ai/"
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E72A1] to-[#3A9AD4] flex items-center justify-center transition-all hover:shadow-[0_4px_40px_rgba(30,114,161,0.6)]"
                  aria-label="X (Twitter)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Two Columns */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-32 w-full sm:w-auto">
            {/* Solutions Column */}
            <div>
              <h3 className="text-white text-base font-normal mb-4 sm:mb-6">
                Solutions
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link
                    href="/services"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${isActive("/services") ? activeClass : ""
                      }`}>
                    Paid Advertising
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/seo"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${isActive("/services/seo")
                        ? activeClass
                        : ""
                      }`}>
                    SEO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/social-media"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${isActive("/services/social-media") ? activeClass : ""
                      }`}>
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/content-marketing"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${isActive("/services/content-marketing")
                        ? activeClass
                        : ""
                      }`}>
                    Content Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/email-marketing"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${isActive("/services/email-marketing") ? activeClass : ""
                      }`}>
                    Email Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/analytics"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${isActive("/services/analytics") ? activeClass : ""
                      }`}>
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-white text-base font-normal mb-4 sm:mb-6">
                Resources
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link
                    href="/case-studies"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${isActive("/case-studies") ? activeClass : ""
                      }`}>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight hidden ${isActive("#") ? activeClass : ""
                      }`}>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center border-t border-[#1F1F1F] gap-4 sm:gap-0">
          <p className="text-white text-sm font-normal order-2 sm:order-1 text-center sm:text-left">
            &copy; 2026 DIMA360MARKETlNG. All Rights Reserved<span title="Developed by Fardus (fardus.dev@gmail.com)">.</span>
          </p>
          <div className="flex items-center gap-6 sm:gap-8 md:gap-12 order-1 sm:order-2">
            <Link
              href="/terms-of-service"
              className={`text-white hover:text-white/80 transition-colors text-sm font-normal ${isActive("/terms-of-service") ? "text-white font-medium" : ""
                }`}>
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className={`text-white hover:text-white/80 transition-colors text-sm font-normal ${isActive("/privacy-policy") ? "text-white font-medium" : ""
                }`}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
