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
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6664 22.6666H8C7.6464 22.6663 7.30738 22.5257 7.05735 22.2757C6.80732 22.0256 6.66672 21.6866 6.6664 21.333V13.333C6.66682 12.9795 6.80748 12.6406 7.05749 12.3906C7.30751 12.1407 7.64647 12.0001 8 11.9998H21.3332C21.6868 11.9999 22.0259 12.1404 22.2759 12.3904C22.526 12.6404 22.6666 12.9794 22.6668 13.333V19.4462L25.3332 18.379V13.333C25.3332 11.1246 23.5428 9.33301 21.3332 9.33301H8C5.7908 9.33301 4 11.1246 4 13.333V21.333C4 23.5426 5.7916 25.333 8 25.333H12.6664V22.6666ZM17.3336 29.333H20V35.9998H17.3336V29.333Z" fill="#F3F6FA"/>
<path d="M22.4762 21.6768C21.1142 22.2212 18.8006 22.6668 17.3334 22.6668H14.6662V30.6668H17.3334C18.8006 30.6668 21.1142 31.112 22.4762 31.6564L33.333 36V17.3332L22.4762 21.6768ZM19.9998 28.2604C19.053 28.0988 18.117 28 17.3334 28V25.3332C18.1154 25.3332 19.053 25.2344 19.9998 25.0732V28.2604ZM30.6666 32.0612L23.4658 29.1808C23.2027 29.0776 22.9362 28.9834 22.6666 28.8984V24.4348C22.9478 24.3436 23.2186 24.25 23.4658 24.1524L30.6666 21.2724V32.0612ZM33.333 29.3332L35.9998 28V25.3332L33.333 24V29.3332ZM11.999 4V5.3332L13.6658 6V9.3332H15.6658V6L17.3334 5.3332V4H11.999Z" fill="#F3F6FA"/>
<path d="M17.9996 17.3337C18.7361 17.3337 19.3332 16.7366 19.3332 16.0001C19.3332 15.2636 18.7361 14.6665 17.9996 14.6665C17.2631 14.6665 16.666 15.2636 16.666 16.0001C16.666 16.7366 17.2631 17.3337 17.9996 17.3337Z" fill="#F3F6FA"/>
<path d="M12.6668 16.0002C12.6669 16.1753 12.6326 16.3487 12.5657 16.5105C12.4987 16.6723 12.4006 16.8193 12.2768 16.9431C12.153 17.0669 12.006 17.1651 11.8442 17.2321C11.6825 17.2991 11.5091 17.3335 11.334 17.3334C10.5964 17.3334 10.0004 16.7374 10.0004 16.0002C10.0004 15.263 10.5964 14.667 11.334 14.667C11.5091 14.6669 11.6825 14.7013 11.8442 14.7683C12.006 14.8352 12.153 14.9334 12.2768 15.0573C12.4006 15.1811 12.4987 15.3281 12.5657 15.4899C12.6326 15.6517 12.6669 15.8251 12.6668 16.0002ZM12.0004 18.667H17.334V20.667H12.0004V18.667ZM11.334 9.33339H9.33398V6.66699H10.6668L11.334 9.33339ZM18.0004 9.33339H20.0004V6.66699H18.6668L18.0004 9.33339Z" fill="#F3F6FA"/>
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
