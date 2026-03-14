"use client";

import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { persistor } from "@/redux/persistor";
import { logout } from "@/redux/features/authSlice";

// ==================== TYPES ====================
interface SubRoute {
  label: string;
  href: string;
  id: string;
}

interface NavLink {
  label: string;
  href: string;
  id: string;
  subRoutes?: SubRoute[];
}

// ==================== CONSTANTS ====================
const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", id: "home" },
  { label: "About Us", href: "/about", id: "about" },
  {
    label: "Services",
    href: "/services",
    id: "services",
    subRoutes: [
      {
        label: "AI Chatbots & AI Agents",
        href: "/services",
        id: "ai-consulting",
      },
      {
        label: "Workflow Automation",
        href: "/services/workflow-automation",
        id: "workflow-automation",
      },
      { label: "Rag System", href: "/services/rag-systems", id: "rag-systems" },
      {
        label: "Custom AI Application",
        href: "/services/custom-ai-applications",
        id: "custom-ai-applications",
      },
      {
        label: "AI Integration",
        href: "/services/ai-integration",
        id: "ai-integration",
      },
      {
        label: "AI Strategy & Consulting",
        href: "/services/ai-strategy-consulting",
        id: "ai-strategy-consulting",
      },
    ],
  },
  { label: "Case Studies", href: "/case-studies", id: "case-studies" },
  { label: "Contact", href: "/contact", id: "contact" },
];

// ==================== ANIMATION VARIANTS ====================
const sidebarVariants: Variants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const backdropVariants: Variants = {
  closed: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    backdropFilter: "blur(8px)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const dropdownVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const dropdownItemVariants = {
  closed: {
    opacity: 0,
    x: -10,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const mobileDropdownVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const mobileDropdownItemVariants = {
  closed: {
    opacity: 0,
    x: -10,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

// ==================== UTILITY FUNCTIONS ====================
const getActiveLink = (currentPath: string): string => {
  const exactMatch = NAV_LINKS.find((link) => link.href === currentPath);
  if (exactMatch) return exactMatch.id;

  for (const link of NAV_LINKS) {
    if (link.subRoutes?.some((sub) => sub.href === currentPath)) {
      return link.id;
    }
  }

  const partialMatch = NAV_LINKS.find(
    (link) => link.href !== "/" && currentPath.startsWith(link.href)
  );
  if (partialMatch) return partialMatch.id;

  return "home";
};

// ==================== COMPONENTS ====================

// Logo Component
const Logo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <Link
    href="/"
    onClick={onClick}
    className="flex items-center gap-2.5 hover:opacity-90 transition-opacity duration-200 group"
    aria-label="DIMA360AI Home">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="32"
      viewBox="0 0 25 30"
      fill="none"
      className="transition-transform duration-300 group-hover:scale-105"
      aria-hidden="true">
      <path
        d="M9.48723 5.77502L10.3404 8.1444C10.8086 9.44331 11.5575 10.623 12.5338 11.5993C13.5101 12.5756 14.6898 13.3245 15.9887 13.7926L18.358 14.6458C18.4048 14.663 18.4452 14.6941 18.4738 14.735C18.5023 14.7758 18.5176 14.8244 18.5176 14.8743C18.5176 14.9241 18.5023 14.9727 18.4738 15.0136C18.4452 15.0544 18.4048 15.0856 18.358 15.1027L15.9887 15.9559C14.6898 16.424 13.5101 17.173 12.5338 18.1493C11.5575 19.1256 10.8086 20.3052 10.3404 21.6041L9.48723 23.9735C9.47007 24.0203 9.43897 24.0607 9.39811 24.0892C9.35726 24.1178 9.30863 24.1331 9.25879 24.1331C9.20896 24.1331 9.16033 24.1178 9.11948 24.0892C9.07862 24.0607 9.04751 24.0203 9.03036 23.9735L8.17717 21.6041C7.70902 20.3052 6.9601 19.1256 5.9838 18.1493C5.00749 17.173 3.82784 16.424 2.52892 15.9559L0.159543 15.1027C0.112757 15.0856 0.0723678 15.0544 0.0438345 15.0136C0.0153011 14.9727 0 14.9241 0 14.8743C0 14.8244 0.0153011 14.7758 0.0438345 14.735C0.0723678 14.6941 0.112757 14.663 0.159543 14.6458L2.52892 13.7926C3.82784 13.3245 5.00749 12.5756 5.9838 11.5993C6.9601 10.623 7.70902 9.44331 8.17717 8.1444L9.03036 5.77502C9.04704 5.72776 9.07797 5.68684 9.11888 5.65789C9.15979 5.62895 9.20868 5.6134 9.25879 5.6134C9.30891 5.6134 9.3578 5.62895 9.39871 5.65789C9.43962 5.68684 9.47055 5.72776 9.48723 5.77502ZM20.1526 0.0810833L20.585 1.28065C20.8223 1.9383 21.2016 2.53557 21.696 3.02994C22.1904 3.52432 22.7876 3.90363 23.4453 4.1409L24.6449 4.57333C24.6686 4.58199 24.6892 4.59774 24.7037 4.61846C24.7182 4.63918 24.7259 4.66386 24.7259 4.68915C24.7259 4.71444 24.7182 4.73912 24.7037 4.75983C24.6892 4.78055 24.6686 4.79631 24.6449 4.80496L23.4453 5.2374C22.7876 5.47466 22.1904 5.85398 21.696 6.34835C21.2016 6.84272 20.8223 7.43999 20.585 8.09765L20.1526 9.29721C20.144 9.32097 20.1282 9.3415 20.1075 9.35601C20.0868 9.37051 20.0621 9.37829 20.0368 9.37829C20.0115 9.37829 19.9868 9.37051 19.9661 9.35601C19.9454 9.3415 19.9296 9.32097 19.921 9.29721L19.4885 8.09765C19.2513 7.43999 18.872 6.84272 18.3776 6.34835C17.8832 5.85398 17.286 5.47466 16.6283 5.2374L15.4287 4.80496C15.405 4.79631 15.3844 4.78055 15.3699 4.75983C15.3554 4.73912 15.3476 4.71444 15.3476 4.68915C15.3476 4.66386 15.3554 4.63918 15.3699 4.61846C15.3844 4.59774 15.405 4.58199 15.4287 4.57333L16.6283 4.1409C17.286 3.90363 17.8832 3.52432 18.3776 3.02994C18.872 2.53557 19.2513 1.9383 19.4885 1.28065L19.921 0.0810833C19.9296 0.0573185 19.9454 0.036791 19.9661 0.0222858C19.9868 0.00778061 20.0115 0 20.0368 0C20.0621 0 20.0868 0.00778061 20.1075 0.0222858C20.1282 0.036791 20.144 0.0573185 20.1526 0.0810833ZM20.1526 20.4524L20.585 21.652C20.8223 22.3096 21.2016 22.9069 21.696 23.4013C22.1904 23.8956 22.7876 24.2749 23.4453 24.5122L24.6449 24.9446C24.6686 24.9533 24.6892 24.9691 24.7037 24.9898C24.7182 25.0105 24.7259 25.0352 24.7259 25.0605C24.7259 25.0857 24.7182 25.1104 24.7037 25.1311C24.6892 25.1519 24.6686 25.1676 24.6449 25.1763L23.4453 25.6087C22.7876 25.846 22.1904 26.2253 21.696 26.7197C21.2016 27.214 20.8223 27.8113 20.585 28.469L20.1526 29.6685C20.144 29.6923 20.1282 29.7128 20.1075 29.7273C20.0868 29.7418 20.0621 29.7496 20.0368 29.7496C20.0115 29.7496 19.9868 29.7418 19.9661 29.7273C19.9454 29.7128 19.9296 29.6923 19.921 29.6685L19.4885 28.469C19.2513 27.8113 18.872 27.214 18.3776 26.7197C17.8832 26.2253 17.286 25.846 16.6283 25.6087L15.4287 25.1763C15.405 25.1676 15.3844 25.1519 15.3699 25.1311C15.3554 25.1104 15.3476 25.0857 15.3476 25.0605C15.3476 25.0352 15.3554 25.0105 15.3699 24.9898C15.3844 24.9691 15.405 24.9533 15.4287 24.9446L16.6283 24.5122C17.286 24.2749 17.8832 23.8956 18.3776 23.4013C18.872 22.9069 19.2513 22.3096 19.4885 21.652L19.921 20.4524C19.9603 20.344 20.1144 20.344 20.1526 20.4524Z"
        fill="white"
      />
    </svg>
    <span className="font-bold text-xl sm:text-2xl leading-none whitespace-nowrap">
      <span className="text-white">DIMA</span>
      <span className="text-white">360</span>
      <span className="text-white">AI</span>
    </span>
  </Link>
);

// Desktop Navigation Link
const DesktopNavLink: React.FC<{
  link: NavLink;
  isActive: boolean;
  currentPath: string;
  servicesOpen: boolean;
  onServicesMouseEnter: () => void;
  onServicesMouseLeave: () => void;
  onDropdownMouseEnter: () => void;
  onDropdownMouseLeave: () => void;
  onDropdownItemClick: () => void;
}> = ({
  link,
  isActive,
  currentPath,
  servicesOpen,
  onServicesMouseEnter,
  onServicesMouseLeave,
  onDropdownMouseEnter,
  onDropdownMouseLeave,
  onDropdownItemClick,
}) => {
  const isServices = link.id === "services";

  if (isServices && link.subRoutes) {
    return (
      <div
        className="relative"
        onMouseEnter={onServicesMouseEnter}
        onMouseLeave={onServicesMouseLeave}>
        <div className="flex items-center gap-1 cursor-default group">
          <span
            className={`relative text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap ${
              isActive || servicesOpen
                ? "text-violet-600"
                : "text-gray-100 group-hover:text-violet-600/80"
            }`}
            aria-expanded={servicesOpen}
            aria-haspopup="true">
            {link.label}
            <span
              className={`absolute left-0 -bottom-1.5 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 ${
                isActive || servicesOpen ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </span>
          <motion.div
            animate={{ rotate: servicesOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}>
            <ChevronDown
              size={16}
              className={`${
                isActive || servicesOpen
                  ? "text-violet-600"
                  : "text-gray-100 group-hover:text-violet-600/80"
              }`}
            />
          </motion.div>
        </div>
        <div className="absolute left-0 top-full w-full h-3 bg-transparent pointer-events-none"></div>

        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              className="absolute left-0 top-full mt-3 w-64 rounded-xl shadow-2xl z-50 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 20, 50, 0.98) 0%, rgba(20, 15, 40, 0.98) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
              }}
              role="menu"
              aria-label="Services dropdown menu"
              onMouseEnter={onDropdownMouseEnter}
              onMouseLeave={onDropdownMouseLeave}
              variants={dropdownVariants}
              initial="closed"
              animate="open"
              exit="closed">
              <div className="p-2">
                {link.subRoutes.map((subLink, idx) => (
                  <motion.div
                    key={subLink.id}
                    variants={dropdownItemVariants}
                    custom={idx}>
                    <Link
                      href={subLink.href}
                      onClick={onDropdownItemClick}
                      className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        currentPath === subLink.href
                          ? "bg-violet-500/20 text-violet-300"
                          : "text-gray-200 hover:bg-violet-500/10 hover:text-violet-300"
                      }`}
                      role="menuitem">
                      <div
                        className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors duration-200 ${
                          currentPath === subLink.href
                            ? "bg-violet-400"
                            : "bg-violet-500/40"
                        }`}
                      />
                      {subLink.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      className={`relative text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap group ${
        isActive ? "text-violet-600" : "text-gray-100 hover:text-violet-600/80"
      }`}>
      {link.label}
      <span
        className={`absolute left-0 -bottom-1.5 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
};

// CTA Buttons
const CTAButtons: React.FC<{ onLinkClick?: () => void }> = ({
  onLinkClick,
}) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
  };
  return (
    <div className="flex items-center gap-3">
      <Link href="/book-consultation" onClick={onLinkClick}>
        <button
          className="flex items-center justify-center h-12 px-6 gap-2.5 rounded-lg text-sm xl:text-base font-semibold text-white cursor-pointer whitespace-nowrap transition-all duration-200 bg-gradient-to-r from-violet-600 to-violet-700 hover:shadow-[0_4px_10px_0_rgba(255,210,238,0.09)] hover:opacity-90"
          aria-label="Book a consultation">
          Book Consultation
        </button>
      </Link>
      {token ? (
        <button
          onClick={handleLogout}
          className="flex items-center justify-center px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-sm xl:text-base font-semibold cursor-pointer transition-all duration-200 whitespace-nowrap bg-transparent text-white border border-white hover:bg-white/10"
          aria-label="Sign up">
          Logout
        </button>
      ) : (
        <Link href="/signup" onClick={onLinkClick}>
          <button
            className="flex items-center justify-center px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-sm xl:text-base font-semibold cursor-pointer transition-all duration-200 whitespace-nowrap bg-transparent text-white border border-white hover:bg-white/10"
            aria-label="Sign up">
            Sign Up
          </button>
        </Link>
      )}
    </div>
  );
};

// Mobile Menu Component
const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  activeLink: string;
  currentPath: string;
  servicesOpen: boolean;
  onServicesToggle: () => void;
}> = ({
  isOpen,
  onClose,
  activeLink,
  currentPath,
  servicesOpen,
  onServicesToggle,
}) => {
  // Portal rendering - ensure we're on client side
  if (typeof window === "undefined") return null;

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] lg:hidden"
            onClick={onClose}
            aria-hidden="true"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-[340px] z-[9999] lg:hidden overflow-y-auto"
            style={{
              background:
                "linear-gradient(135deg, rgba(30, 20, 50, 0.98) 0%, rgba(20, 15, 40, 0.98) 100%)",
              backdropFilter: "blur(25px)",
              borderLeft: "1px solid rgba(139, 92, 246, 0.2)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div
              className="flex items-center justify-between sticky top-0 z-10 p-4 sm:p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 20, 50, 0.98) 0%, rgba(20, 15, 40, 0.98) 100%)",
                borderBottom: "1px solid rgba(139, 92, 246, 0.2)",
              }}>
              <Logo onClick={onClose} />
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-white hover:bg-violet-500/20 transition-all duration-200"
                aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-5 sm:p-6" aria-label="Main navigation">
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeLink === link.id;
                  const isServices = link.id === "services";

                  return (
                    <div key={link.id}>
                      {isServices ? (
                        <>
                          <button
                            onClick={onServicesToggle}
                            className={`relative flex items-center justify-between w-full px-4 py-3.5 font-medium rounded-lg transition-all duration-200 ${
                              isActive || servicesOpen
                                ? "text-violet-300 bg-violet-500/15"
                                : "text-white hover:bg-violet-500/10 hover:text-violet-300"
                            }`}
                            aria-expanded={servicesOpen}
                            aria-haspopup="true">
                            <span>{link.label}</span>
                            {isActive && (
                              <div className="absolute left-0 w-1 h-full rounded-r bg-gradient-to-b from-violet-500 to-purple-500" />
                            )}
                            <motion.div
                              animate={{ rotate: servicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}>
                              <ChevronDown size={18} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {servicesOpen && (
                              <motion.div
                                className="ml-4 pl-4 mt-1 border-l-2 border-violet-500/30 overflow-hidden"
                                variants={mobileDropdownVariants}
                                initial="closed"
                                animate="open"
                                exit="closed">
                                {link.subRoutes?.map((subLink) => (
                                  <motion.div
                                    key={subLink.id}
                                    variants={mobileDropdownItemVariants}>
                                    <Link
                                      href={subLink.href}
                                      onClick={onClose}
                                      className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        currentPath === subLink.href
                                          ? "text-violet-300 bg-violet-500/10"
                                          : "text-gray-300 hover:bg-violet-500/10 hover:text-violet-300"
                                      }`}
                                      role="menuitem">
                                      <div
                                        className={`w-2 h-2 rounded-full mr-3 ${
                                          currentPath === subLink.href
                                            ? "bg-violet-400"
                                            : "bg-violet-500/40"
                                        }`}
                                      />
                                      {subLink.label}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className={`relative flex items-center px-4 py-3.5 font-medium rounded-lg transition-all duration-200 ${
                            isActive
                              ? "text-violet-300 bg-violet-500/15"
                              : "text-white hover:bg-violet-500/10 hover:text-violet-300"
                          }`}>
                          {link.label}
                          {isActive && (
                            <div className="absolute left-0 w-1 h-full rounded-r bg-gradient-to-b from-violet-500 to-purple-500" />
                          )}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>

            {/* Divider */}
            <div className="px-5 sm:px-6">
              <div className="border-t border-violet-500/20" />
            </div>

            {/* CTA Buttons */}
            <div className="p-5 sm:p-6">
              <div className="flex flex-col gap-3">
                <CTAButtons onLinkClick={onClose} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(menuContent, document.body);
};

// ==================== MAIN COMPONENT ====================
const LandingNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopServicesDropdownOpen, setDesktopServicesDropdownOpen] =
    useState(false);
  const [mobileServicesDropdownOpen, setMobileServicesDropdownOpen] =
    useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const activeLink = getActiveLink(pathname);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);
  const prevPathnameRef = useRef<string>(pathname);

  // ------------------- DROPDOWN TIMER FUNCTIONS -------------------
  const clearDropdownTimer = useCallback(() => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
  }, []);

  const startDropdownTimer = useCallback(() => {
    clearDropdownTimer();
    dropdownTimerRef.current = setTimeout(() => {
      setDesktopServicesDropdownOpen(false);
    }, 200);
  }, [clearDropdownTimer]);

  // ------------------- EVENT HANDLERS -------------------
  const openMobileMenu = useCallback(() => {
    setMobileMenuOpen(true);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileServicesDropdownOpen(false);
  }, []);

  const toggleMobileServicesDropdown = useCallback(() => {
    setMobileServicesDropdownOpen((prev) => !prev);
  }, []);

  const handleServicesMouseEnter = useCallback(() => {
    clearDropdownTimer();
    setDesktopServicesDropdownOpen(true);
  }, [clearDropdownTimer]);

  const handleServicesMouseLeave = useCallback(() => {
    startDropdownTimer();
  }, [startDropdownTimer]);

  const handleDropdownMouseEnter = useCallback(() => {
    clearDropdownTimer();
    setDesktopServicesDropdownOpen(true);
  }, [clearDropdownTimer]);

  const handleDropdownMouseLeave = useCallback(() => {
    startDropdownTimer();
  }, [startDropdownTimer]);

  const handleDropdownItemClick = useCallback(() => {
    setDesktopServicesDropdownOpen(false);
  }, []);

  // ------------------- BODY SCROLL LOCK -------------------
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // ------------------- CLOSE MOBILE MENU ON PATHNAME CHANGE -------------------
  useEffect(() => {
    if (prevPathnameRef.current !== pathname && mobileMenuOpen) {
      prevPathnameRef.current = pathname;
      // Close menu on navigation
      const timer = setTimeout(() => {
        setMobileMenuOpen(false);
        setMobileServicesDropdownOpen(false);
      }, 0);
      return () => clearTimeout(timer);
    }
    prevPathnameRef.current = pathname;
  }, [pathname, mobileMenuOpen]);

  // ------------------- CLOSE DESKTOP DROPDOWN ON CLICK OUTSIDE -------------------
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopServicesDropdownOpen &&
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setDesktopServicesDropdownOpen(false);
      }
    };

    if (desktopServicesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopServicesDropdownOpen]);

  // ------------------- CLEANUP -------------------
  useEffect(() => {
    return () => {
      clearDropdownTimer();
    };
  }, [clearDropdownTimer]);

  // ------------------- ESC KEY -------------------
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileMenuOpen) {
          closeMobileMenu();
        }
        if (desktopServicesDropdownOpen) {
          setDesktopServicesDropdownOpen(false);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, desktopServicesDropdownOpen, closeMobileMenu]);

  // ------------------- SCROLL EFFECT -------------------
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
        style={{
          backdropFilter: "blur(20px)",
          background: "#00000033",
          boxShadow: isScrolled
            ? "0 4px 10px 0 rgba(255, 210, 238, 0.09)"
            : "none",
        }}>
        <Container className="flex items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.id}
                ref={link.id === "services" ? dropdownContainerRef : null}>
                <DesktopNavLink
                  link={link}
                  isActive={activeLink === link.id}
                  currentPath={pathname}
                  servicesOpen={desktopServicesDropdownOpen}
                  onServicesMouseEnter={handleServicesMouseEnter}
                  onServicesMouseLeave={handleServicesMouseLeave}
                  onDropdownMouseEnter={handleDropdownMouseEnter}
                  onDropdownMouseLeave={handleDropdownMouseLeave}
                  onDropdownItemClick={handleDropdownItemClick}
                />
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <CTAButtons />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-violet-500/20 transition-all duration-200"
            onClick={openMobileMenu}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}>
            <Menu size={22} />
          </button>
        </Container>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        activeLink={activeLink}
        currentPath={pathname}
        servicesOpen={mobileServicesDropdownOpen}
        onServicesToggle={toggleMobileServicesDropdown}
      />
    </>
  );
};

export default LandingNavbar;
