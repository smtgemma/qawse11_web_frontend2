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
    <footer className="bg-black text-white">
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
<path d="M12.6664 22.6666H8C7.6464 22.6663 7.30738 22.5257 7.05735 22.2757C6.80732 22.0256 6.66672 21.6866 6.6664 21.333V13.333C6.66682 12.9795 6.80748 12.6406 7.05749 12.3906C7.30751 12.1407 7.64647 12.0001 8 11.9998H21.3332C21.6868 11.9999 22.0259 12.1404 22.2759 12.3904C22.526 12.6404 22.6666 12.9794 22.6668 13.333V19.4462L25.3332 18.379V13.333C25.3332 11.1246 23.5428 9.33301 21.3332 9.33301H8C5.7908 9.33301 4 11.1246 4 13.333V21.333C4 23.5426 5.7916 25.333 8 25.333H12.6664V22.6666ZM17.3336 29.333H20V35.9998H17.3336V29.333Z" fill="#F3F6FA"/>
<path d="M22.4762 21.6768C21.1142 22.2212 18.8006 22.6668 17.3334 22.6668H14.6662V30.6668H17.3334C18.8006 30.6668 21.1142 31.112 22.4762 31.6564L33.333 36V17.3332L22.4762 21.6768ZM19.9998 28.2604C19.053 28.0988 18.117 28 17.3334 28V25.3332C18.1154 25.3332 19.053 25.2344 19.9998 25.0732V28.2604ZM30.6666 32.0612L23.4658 29.1808C23.2027 29.0776 22.9362 28.9834 22.6666 28.8984V24.4348C22.9478 24.3436 23.2186 24.25 23.4658 24.1524L30.6666 21.2724V32.0612ZM33.333 29.3332L35.9998 28V25.3332L33.333 24V29.3332ZM11.999 4V5.3332L13.6658 6V9.3332H15.6658V6L17.3334 5.3332V4H11.999Z" fill="#F3F6FA"/>
<path d="M17.9996 17.3337C18.7361 17.3337 19.3332 16.7366 19.3332 16.0001C19.3332 15.2636 18.7361 14.6665 17.9996 14.6665C17.2631 14.6665 16.666 15.2636 16.666 16.0001C16.666 16.7366 17.2631 17.3337 17.9996 17.3337Z" fill="#F3F6FA"/>
<path d="M12.6668 16.0002C12.6669 16.1753 12.6326 16.3487 12.5657 16.5105C12.4987 16.6723 12.4006 16.8193 12.2768 16.9431C12.153 17.0669 12.006 17.1651 11.8442 17.2321C11.6825 17.2991 11.5091 17.3335 11.334 17.3334C10.5964 17.3334 10.0004 16.7374 10.0004 16.0002C10.0004 15.263 10.5964 14.667 11.334 14.667C11.5091 14.6669 11.6825 14.7013 11.8442 14.7683C12.006 14.8352 12.153 14.9334 12.2768 15.0573C12.4006 15.1811 12.4987 15.3281 12.5657 15.4899C12.6326 15.6517 12.6669 15.8251 12.6668 16.0002ZM12.0004 18.667H17.334V20.667H12.0004V18.667ZM11.334 9.33339H9.33398V6.66699H10.6668L11.334 9.33339ZM18.0004 9.33339H20.0004V6.66699H18.6668L18.0004 9.33339Z" fill="#F3F6FA"/>
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
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${
                      isActive("/services") ? activeClass : ""
                    }`}>
                    AI Agents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/workflow-automation"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${
                      isActive("/services/workflow-automation")
                        ? activeClass
                        : ""
                    }`}>
                    Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/rag-systems"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${
                      isActive("/services/rag-systems") ? activeClass : ""
                    }`}>
                    RAG Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/custom-ai-applications"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${
                      isActive("/services/custom-ai-applications")
                        ? activeClass
                        : ""
                    }`}>
                    Custom Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ai-integration"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${
                      isActive("/services/ai-integration") ? activeClass : ""
                    }`}>
                    Integrations
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
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight ${
                      isActive("/case-studies") ? activeClass : ""
                    }`}>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`text-[#999999] hover:text-white transition-colors text-[15px] leading-tight hidden ${
                      isActive("#") ? activeClass : ""
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
              className={`text-white hover:text-white/80 transition-colors text-sm font-normal ${
                isActive("/terms-of-service") ? "text-white font-medium" : ""
              }`}>
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className={`text-white hover:text-white/80 transition-colors text-sm font-normal ${
                isActive("/privacy-policy") ? "text-white font-medium" : ""
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
