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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="30"
                viewBox="0 0 25 30"
                fill="none"
                className="w-6 h-7 sm:w-[25px] sm:h-[30px]">
                <path
                  d="M9.48723 5.77502L10.3404 8.1444C10.8086 9.44331 11.5575 10.623 12.5338 11.5993C13.5101 12.5756 14.6898 13.3245 15.9887 13.7926L18.358 14.6458C18.4048 14.663 18.4452 14.6941 18.4738 14.735C18.5023 14.7758 18.5176 14.8244 18.5176 14.8743C18.5176 14.9241 18.5023 14.9727 18.4738 15.0136C18.4452 15.0544 18.4048 15.0856 18.358 15.1027L15.9887 15.9559C14.6898 16.424 13.5101 17.173 12.5338 18.1493C11.5575 19.1256 10.8086 20.3052 10.3404 21.6041L9.48723 23.9735C9.47007 24.0203 9.43897 24.0607 9.39811 24.0892C9.35726 24.1178 9.30863 24.1331 9.25879 24.1331C9.20896 24.1331 9.16033 24.1178 9.11948 24.0892C9.07862 24.0607 9.04751 24.0203 9.03036 23.9735L8.17717 21.6041C7.70902 20.3052 6.9601 19.1256 5.9838 18.1493C5.00749 17.173 3.82784 16.424 2.52892 15.9559L0.159543 15.1027C0.112757 15.0856 0.0723678 15.0544 0.0438345 15.0136C0.0153011 14.9727 0 14.9241 0 14.8743C0 14.8244 0.0153011 14.7758 0.0438345 14.735C0.0723678 14.6941 0.112757 14.663 0.159543 14.6458L2.52892 13.7926C3.82784 13.3245 5.00749 12.5756 5.9838 11.5993C6.9601 10.623 7.70902 9.44331 8.17717 8.1444L9.03036 5.77502C9.04704 5.72776 9.07797 5.68684 9.11888 5.65789C9.15979 5.62895 9.20868 5.6134 9.25879 5.6134C9.30891 5.6134 9.3578 5.62895 9.39871 5.65789C9.43962 5.68684 9.47055 5.72776 9.48723 5.77502ZM20.1526 0.0810833L20.585 1.28065C20.8223 1.9383 21.2016 2.53557 21.696 3.02994C22.1904 3.52432 22.7876 3.90363 23.4453 4.1409L24.6449 4.57333C24.6686 4.58199 24.6892 4.59774 24.7037 4.61846C24.7182 4.63918 24.7259 4.66386 24.7259 4.68915C24.7259 4.71444 24.7182 4.73912 24.7037 4.75983C24.6892 4.78055 24.6686 4.79631 24.6449 4.80496L23.4453 5.2374C22.7876 5.47466 22.1904 5.85398 21.696 6.34835C21.2016 6.84272 20.8223 7.43999 20.585 8.09765L20.1526 9.29721C20.144 9.32097 20.1282 9.3415 20.1075 9.35601C20.0868 9.37051 20.0621 9.37829 20.0368 9.37829C20.0115 9.37829 19.9868 9.37051 19.9661 9.35601C19.9454 9.3415 19.9296 9.32097 19.921 9.29721L19.4885 8.09765C19.2513 7.43999 18.872 6.84272 18.3776 6.34835C17.8832 5.85398 17.286 5.47466 16.6283 5.2374L15.4287 4.80496C15.405 4.79631 15.3844 4.78055 15.3699 4.75983C15.3554 4.73912 15.3476 4.71444 15.3476 4.68915C15.3476 4.66386 15.3554 4.63918 15.3699 4.61846C15.3844 4.59774 15.405 4.58199 15.4287 4.57333L16.6283 4.1409C17.286 3.90363 17.8832 3.52432 18.3776 3.02994C18.872 2.53557 19.2513 1.9383 19.4885 1.28065L19.921 0.0810833C19.9296 0.0573185 19.9454 0.036791 19.9661 0.0222858C19.9868 0.00778061 20.0115 0 20.0368 0C20.0621 0 20.0868 0.00778061 20.1075 0.0222858C20.1282 0.036791 20.144 0.0573185 20.1526 0.0810833ZM20.1526 20.4524L20.585 21.652C20.8223 22.3096 21.2016 22.9069 21.696 23.4013C22.1904 23.8956 22.7876 24.2749 23.4453 24.5122L24.6449 24.9446C24.6686 24.9533 24.6892 24.9691 24.7037 24.9898C24.7182 25.0105 24.7259 25.0352 24.7259 25.0605C24.7259 25.0857 24.7182 25.1104 24.7037 25.1311C24.6892 25.1519 24.6686 25.1676 24.6449 25.1763L23.4453 25.6087C22.7876 25.846 22.1904 26.2253 21.696 26.7197C21.2016 27.214 20.8223 27.8113 20.585 28.469L20.1526 29.6685C20.144 29.6923 20.1282 29.7128 20.1075 29.7273C20.0868 29.7418 20.0621 29.7496 20.0368 29.7496C20.0115 29.7496 19.9868 29.7418 19.9661 29.7273C19.9454 29.7128 19.9296 29.6923 19.921 29.6685L19.4885 28.469C19.2513 27.8113 18.872 27.214 18.3776 26.7197C17.8832 26.2253 17.286 25.846 16.6283 25.6087L15.4287 25.1763C15.405 25.1676 15.3844 25.1519 15.3699 25.1311C15.3554 25.1104 15.3476 25.0857 15.3476 25.0605C15.3476 25.0352 15.3554 25.0105 15.3699 24.9898C15.3844 24.9691 15.405 24.9533 15.4287 24.9446L16.6283 24.5122C17.286 24.2749 17.8832 23.8956 18.3776 23.4013C18.872 22.9069 19.2513 22.3096 19.4885 21.652L19.921 20.4524C19.9603 20.344 20.1144 20.344 20.1526 20.4524Z"
                  fill="#FFFFFF"
                />
              </svg>
              <span
                className="font-bold text-lg sm:text-xl md:text-2xl leading-none whitespace-nowrap"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}>
                <span style={{ color: "#FFFFFF" }}>DIMA</span>
                <span style={{ color: "#FFFFFF" }}>360</span>
                <span style={{ color: "#FFFFFF" }}>AI</span>
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-[#999999] text-[15px] leading-[1.6] mb-6 sm:mb-8 md:mb-10">
              Enterprise Al solutions that transform how businesses
              <br />
              operate. Trusted by Fortune 500 companies worldwide.
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
            &copy; 2026 DIMA360AI. All Rights Reserved.
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
