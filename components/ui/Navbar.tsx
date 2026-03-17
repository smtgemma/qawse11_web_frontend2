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
        label: "Paid Advertising (PPC)",
        href: "/services",
        id: "paid-advertising",
      },
      {
        label: "SEO",
        href: "/services/seo",
        id: "seo",
      },
        { label: "Social Media", href: "/services/social-media", id: "social-media" },
      {
        label: "Content Marketing",
        href: "/services/content-marketing",
        id: "content-marketing",
      },
      {
        label: "Email Marketing",
        href: "/services/email-marketing",
        id: "email-marketing",
      },
      {
        label: "Analytics",
        href: "/services/analytics",
        id: "analytics",
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
    aria-label="DIMA360MARKETING Home">
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.0844 6.875H21.5625V4.625C21.5625 4.39294 21.4703 4.17038 21.3062 4.00628C21.1421 3.84219 20.9196 3.75 20.6875 3.75H19.3125C19.0804 3.75 18.8579 3.84219 18.6938 4.00628C18.5297 4.17038 18.4375 4.39294 18.4375 4.625V6.875H10.9156C9.34696 6.87583 7.84278 7.49935 6.73356 8.60856C5.62435 9.71778 5.00083 11.222 5 12.7906V16.3156C5 20.1936 6.54051 23.9127 9.28265 26.6549C12.0248 29.397 15.7439 30.9375 19.6219 30.9375H20.6875C20.9196 30.9375 21.1421 30.8453 21.3062 30.6812C21.4703 30.5171 21.5625 30.2946 21.5625 30.0625V28.6875C21.5625 28.4554 21.4703 28.2329 21.3062 28.0688C21.1421 27.9047 20.9196 27.8125 20.6875 27.8125H19.6219C16.5727 27.8125 13.6484 26.6012 11.4924 24.4451C9.33628 22.2891 8.125 19.3648 8.125 16.3156V12.7906C8.125 12.0505 8.41901 11.3407 8.94235 10.8174C9.4657 10.294 10.1755 10 10.9156 10H29.0844C29.8245 10 30.5343 10.294 31.0576 10.8174C31.581 11.3407 31.875 12.0505 31.875 12.7906V16.5625C31.873 17.4199 31.7681 18.2739 31.5625 19.1062C31.508 19.3207 31.5371 19.5479 31.6439 19.7417C31.7506 19.9355 31.9271 20.0815 32.1375 20.15L33.45 20.5781C33.5634 20.6157 33.6833 20.6297 33.8022 20.619C33.9212 20.6084 34.0367 20.5734 34.1417 20.5163C34.2466 20.4591 34.3386 20.3811 34.4121 20.2869C34.4855 20.1927 34.5389 20.0844 34.5688 19.9688C34.8529 18.8556 34.9978 17.7114 35 16.5625V12.7906C34.9992 11.222 34.3757 9.71778 33.2664 8.60856C32.1572 7.49935 30.653 6.87583 29.0844 6.875Z" fill="#F3F6FA"/>
<path d="M15 20C16.3807 20 17.5 18.8807 17.5 17.5C17.5 16.1193 16.3807 15 15 15C13.6193 15 12.5 16.1193 12.5 17.5C12.5 18.8807 13.6193 20 15 20Z" fill="#F3F6FA"/>
<path d="M25 20C26.3807 20 27.5 18.8807 27.5 17.5C27.5 16.1193 26.3807 15 25 15C23.6193 15 22.5 16.1193 22.5 17.5C22.5 18.8807 23.6193 20 25 20Z" fill="#F3F6FA"/>
<path d="M34.916 29.0002L37.7472 30.1158C37.8055 30.1388 37.8556 30.1789 37.8908 30.2307C37.926 30.2825 37.9449 30.3438 37.9449 30.4064C37.9449 30.4691 37.926 30.5303 37.8908 30.5822C37.8556 30.634 37.8055 30.674 37.7472 30.6971L34.916 31.8127C34.4148 32.0108 33.9596 32.3097 33.5785 32.6908C33.1974 33.0719 32.8985 33.5271 32.7004 34.0283L31.5847 36.8408C31.5617 36.8991 31.5217 36.9491 31.4699 36.9843C31.418 37.0196 31.3568 37.0384 31.2941 37.0384C31.2314 37.0384 31.1702 37.0196 31.1184 36.9843C31.0666 36.9491 31.0265 36.8991 31.0035 36.8408L29.8879 34.0283C29.6902 33.5268 29.3915 33.0714 29.0103 32.6902C28.6292 32.3091 28.1737 32.0104 27.6722 31.8127L24.8597 30.6971C24.8015 30.674 24.7514 30.634 24.7162 30.5822C24.681 30.5303 24.6621 30.4691 24.6621 30.4064C24.6621 30.3438 24.681 30.2825 24.7162 30.2307C24.7514 30.1789 24.8015 30.1388 24.8597 30.1158L27.6722 29.0002C28.1737 28.8025 28.6292 28.5038 29.0103 28.1226C29.3915 27.7415 29.6902 27.286 29.8879 26.7846L31.0035 23.9721C31.0265 23.9138 31.0666 23.8637 31.1184 23.8285C31.1702 23.7933 31.2314 23.7744 31.2941 23.7744C31.3568 23.7744 31.418 23.7933 31.4699 23.8285C31.5217 23.8637 31.5617 23.9138 31.5847 23.9721L32.7004 26.7846C32.8985 27.2857 33.1974 27.741 33.5785 28.122C33.9596 28.5031 34.4148 28.802 34.916 29.0002Z" fill="#F3F6FA"/>
</svg>


    <span className="font-bold text-sm sm:text-base leading-none whitespace-nowrap">
      <span className="text-white">DIMA360MARKETlNG</span>
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
                ? "text-[#1E72A1]"
                : "text-gray-100 group-hover:text-[#3A9AD4]/80"
            }`}
            aria-expanded={servicesOpen}
            aria-haspopup="true">
            {link.label}
            <span
              className={`absolute left-0 -bottom-1.5 h-0.5 bg-gradient-to-r from-[#1E72A1] to-[#3A9AD4] transition-all duration-300 ${
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
                  ? "text-primary"
                  : "text-gray-100 group-hover:text-primary/80"
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
                  "linear-gradient(0deg, #1E72A1 0%, rgba(15, 45, 70, 0.9) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(30, 114, 161, 0.3)",
              }}
              variants={dropdownVariants}
              initial="closed"
              animate="open"
              exit="closed">
              <div
                className="p-2"
                role="menu"
                aria-label="Services dropdown menu"
                onMouseEnter={onDropdownMouseEnter}
                onMouseLeave={onDropdownMouseLeave}>
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
                          ? "bg-[#1E72A1]/20 text-[#ffffff]"
                          : "text-gray-200 hover:bg-[#1E72A1]/10 hover:text-[#3A9AD4]"
                      }`}
                      role="menuitem">
                      <div
                        className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors duration-200 ${
                          currentPath === subLink.href
                            ? "bg-[#3A9AD4]"
                            : "bg-white"
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
        isActive ? "text-[#1E72A1]" : "text-gray-100 hover:text-[#3A9AD4]/80"
      }`}>
      {link.label}
      <span
        className={`absolute left-0 -bottom-1.5 h-0.5 bg-gradient-to-r from-[#1E72A1] to-[#3A9AD4] transition-all duration-300 ${
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
          className="flex items-center justify-center h-12 px-6 gap-2.5 rounded-lg text-sm xl:text-base font-semibold text-white cursor-pointer whitespace-nowrap transition-all duration-200 bg-gradient-to-r from-[#1E72A1] to-[#3A9AD4] hover:shadow-[0_4px_10px_0_rgba(30,114,161,0.2)] hover:opacity-90"
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
            className="fixed inset-0 bg-[#051C2A33] backdrop-blur-sm z-[9998] lg:hidden"
            onClick={onClose}
            aria-hidden="true"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
          />

          {/* Sidebar */}
          <div
            className="fixed top-0 right-0 h-full w-full sm:w-[340px] z-[9999] lg:hidden overflow-y-auto"
            style={{
              background:
                "linear-gradient(135deg, rgba(15, 45, 70, 0.98) 0%, rgba(15, 40, 65, 0.98) 100%)",
              backdropFilter: "blur(25px)",
              borderLeft: "1px solid rgba(30, 114, 161, 0.3)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            onClick={(e) => e.stopPropagation()}>
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="h-full">
            {/* Header */}
            <div
              className="flex items-center justify-between sticky top-0 z-10 p-4 sm:p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(15, 45, 70, 0.98) 0%, rgba(15, 40, 65, 0.98) 100%)",
                borderBottom: "1px solid rgba(30, 114, 161, 0.3)",
              }}>
              <Logo onClick={onClose} />
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-white hover:bg-[#1E72A1]/20 transition-all duration-200"
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
                                ? "text-[#3A9AD4] bg-[#1E72A1]/15"
                                : "text-white hover:bg-[#1E72A1]/10 hover:text-[#3A9AD4]"
                            }`}
                            aria-expanded={servicesOpen}
                            aria-haspopup="true">
                            <span>{link.label}</span>
                            {isActive && (
                              <div className="absolute left-0 w-1 h-full rounded-r bg-gradient-to-b from-[#1E72A1] to-[#3A9AD4]" />
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
                                className="ml-4 pl-4 mt-1 border-l-2 border-[#1E72A1]/30 overflow-hidden"
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
                                          ? "text-[#3A9AD4] bg-[#1E72A1]/10"
                                          : "text-gray-300 hover:bg-[#1E72A1]/10 hover:text-[#3A9AD4]"
                                      }`}
                                      role="menuitem">
                                      <div
                                        className={`w-2 h-2 rounded-full mr-3 ${
                                          currentPath === subLink.href
                                            ? "bg-[#3A9AD4]"
                                            : "bg-[#1E72A1]/40"
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
                              ? "text-[#3A9AD4] bg-[#1E72A1]/15"
                              : "text-white hover:bg-[#1E72A1]/10 hover:text-[#3A9AD4]"
                          }`}>
                          {link.label}
                          {isActive && (
                            <div className="absolute left-0 w-1 h-full rounded-r bg-gradient-to-b from-[#1E72A1] to-[#3A9AD4]" />
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
              <div className="border-t border-[#1E72A1]/20" />
            </div>

            {/* CTA Buttons */}
            <div className="p-5 sm:p-6">
              <div className="flex flex-col gap-3">
                <CTAButtons onLinkClick={onClose} />
              </div>
            </div>
            </motion.div>
          </div>
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
            ? "0 4px 10px 0 rgba(30, 114, 161, 0.15)"
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
            className="lg:hidden p-2 rounded-lg text-white hover:bg-[#1E72A1]/20 transition-all duration-200"
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
