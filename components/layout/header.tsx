"use client";

import Button from "@/components/ui/button";
import { brand, contactDetails, navigationLink } from "@/content/global";
import { cn } from "@/utils/cn";
import { ArrowUpRight, ChevronDown, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
} from "react";

const SCROLL_TOLERANCE = 5;
const TOP_THRESHOLD = 16;

function isCurrentPath(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

function DirectionalArrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("relative block size-4 overflow-hidden", className)}
    >
      <ArrowUpRight className="absolute inset-0 size-4 transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover/link-arrow:translate-x-full group-hover/link-arrow:-translate-y-full motion-reduce:transform-none" />
      <ArrowUpRight className="absolute inset-0 size-4 -translate-x-full translate-y-full transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover/link-arrow:translate-x-0 group-hover/link-arrow:translate-y-0 motion-reduce:hidden" />
    </span>
  );
}

function DesktopLink({
  href,
  label,
  index,
  active,
}: {
  href: string;
  label: string;
  index: number;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group/nav-link relative flex h-12 items-center gap-2 px-3 text-xs font-semibold text-neutral-800",
        "transition-transform duration-200 active:translate-x-px active:translate-y-px",
        "focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/65 focus-visible:ring-offset-2",
      )}
    >
      <span
        className={cn(
          "font-mono text-[8px] font-medium tracking-[0.12em] transition-transform duration-300",
          active ? "text-primary-600" : "text-neutral-400",
          "group-hover/nav-link:-translate-y-px",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="whitespace-nowrap transition-transform duration-300 group-hover/nav-link:-translate-y-px motion-reduce:transform-none">
        {label}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-3 bottom-1 h-px origin-left bg-primary-600 transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)]",
          active ? "scale-x-100" : "scale-x-0 group-hover/nav-link:scale-x-100",
        )}
      />
      <span
        aria-hidden="true"
        className="absolute left-1 top-2 h-0 w-px bg-primary-500 transition-[height] duration-300 group-hover/nav-link:h-4 motion-reduce:hidden"
      />
    </Link>
  );
}

function MobileLink({
  href,
  label,
  index,
  active,
  onClick,
}: {
  href: string;
  label: string;
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className="group/link-arrow relative grid min-h-16 grid-cols-[32px_1fr_16px] items-center gap-3 border-b border-neutral-200 px-2 py-3 text-neutral-900 transition-transform duration-200 active:translate-x-px active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/65"
    >
      <span className="font-mono text-[9px] tracking-[0.16em] text-primary-500">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="text-base font-semibold leading-snug transition-transform duration-300 group-hover/link-arrow:translate-x-1 motion-reduce:transform-none sm:text-lg">
        {label}
      </span>
      <DirectionalArrow />
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-y-3 left-0 w-px origin-top bg-primary-600 transition-transform duration-300",
          active
            ? "scale-y-100"
            : "scale-y-0 group-hover/link-arrow:scale-y-100",
        )}
      />
    </Link>
  );
}

const Header = () => {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const frame = useRef<number | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLLIElement>(null);

  const servicesItem = navigationLink.find(
    (item) => "dropdown" in item && item.dropdown,
  );
  const services = servicesItem?.dropdown ?? [];
  const servicesActive = services.some((item) =>
    isCurrentPath(pathname, item.href),
  );
  const contactHref =
    navigationLink.find((item) => item.label === "Contact Us")?.href ??
    "/contact-us";
  const email = contactDetails.find(
    (item) => item.icon === "mail" && typeof item.href === "string",
  );

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateHeader = () => {
      if (frame.current !== null) return;

      frame.current = window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0);
        const delta = currentScrollY - lastScrollY.current;
        const atTop = currentScrollY <= TOP_THRESHOLD;

        setIsAtTop(atTop);

        if (atTop || mobileMenuOpen) {
          setIsVisible(true);
        } else if (Math.abs(delta) >= SCROLL_TOLERANCE) {
          setIsVisible(delta < 0);
          if (delta > 0) setServicesOpen(false);
        }

        lastScrollY.current = currentScrollY;
        frame.current = null;
      });
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => {
      mobilePanelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    });

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const panelElements = Array.from(
        mobilePanelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter(
        (element) =>
          !element.closest("[inert]") && element.getClientRects().length > 0,
      );
      const focusableElements = [
        menuButtonRef.current,
        ...panelElements,
      ].filter((element): element is HTMLElement => element !== null);

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    const closeMobileOnDesktop = () => {
      if (desktopQuery.matches) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };

    desktopQuery.addEventListener("change", closeMobileOnDesktop);
    return () =>
      desktopQuery.removeEventListener("change", closeMobileOnDesktop);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleServicesBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setServicesOpen(false);
    }
  };

  const handleServicesKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === "Escape") {
      setServicesOpen(false);
      servicesRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    }
  };

  const barVisible = isAtTop || isVisible || mobileMenuOpen;

  return (
    <header
      className={cn(
        "pointer-events-none inset-x-0 top-0 z-50 w-full",
        isAtTop && !mobileMenuOpen ? "absolute" : "fixed",
      )}
    >
      <div
        className={cn(
          "container relative z-20 transition-[transform,padding-top] duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
          isAtTop && !mobileMenuOpen ? "pt-4" : "pt-2",
          barVisible ? "translate-y-0" : "-translate-y-[calc(100%+16px)]",
          "motion-reduce:transition-none",
        )}
      >
        <div
          className={cn(
            "pointer-events-auto relative grid w-full grid-cols-[1fr_auto] items-center transition-[height,background-color,border-color,box-shadow] duration-400 xl:grid-cols-[1fr_auto_1fr]",
            isAtTop && !mobileMenuOpen
              ? "h-20 border-b border-primary-900/15 bg-transparent"
              : "px-4 h-16 rounded-sm border border-neutral-200 bg-[#fcfaf7] shadow-[0_2px_6px_rgba(23,23,23,.09)]",
          )}
        >
          <Link
            href="/"
            aria-label={`${brand.name} home`}
            onClick={closeMobileMenu}
            className="group/logo relative z-10 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/65 focus-visible:ring-offset-2 active:translate-x-px active:translate-y-px"
          >
            <Image
              src={brand.logoHorizontal}
              alt={brand.name}
              width={1948}
              height={651}
              priority
              sizes="(max-width: 639px) 144px, (max-width: 1279px) 160px, 176px"
              className={cn(
                "h-auto object-contain transition-[width,transform] duration-400 group-hover/logo:-translate-y-px motion-reduce:transform-none",
                isAtTop && !mobileMenuOpen
                  ? "w-36 sm:w-40 xl:w-44"
                  : "w-32 sm:w-36",
              )}
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary-600 transition-transform duration-400 group-hover/logo:scale-x-100"
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden border-y border-neutral-900/10 xl:block"
          >
            <ul className="flex items-stretch">
              {navigationLink.map((item, index) => {
                if ("dropdown" in item && item.dropdown) {
                  return (
                    <li
                      key={item.label}
                      ref={servicesRef}
                      className="relative border-l border-neutral-900/10 last:border-r"
                      onPointerEnter={() => setServicesOpen(true)}
                      onPointerLeave={() => setServicesOpen(false)}
                      onFocusCapture={() => setServicesOpen(true)}
                      onBlurCapture={handleServicesBlur}
                      onKeyDown={handleServicesKeyDown}
                    >
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-controls="desktop-services-menu"
                        onClick={() => setServicesOpen((open) => !open)}
                        className="group/services relative flex h-12 items-center gap-2 px-3 text-xs font-semibold text-neutral-800 transition-transform duration-200 active:translate-x-px active:translate-y-px focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/65 focus-visible:ring-offset-2"
                      >
                        <span
                          className={cn(
                            "font-mono text-[8px] font-medium tracking-[0.12em] transition-transform duration-300 group-hover/services:-translate-y-px",
                            servicesActive || servicesOpen
                              ? "text-primary-600"
                              : "text-neutral-400",
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="transition-transform duration-300 group-hover/services:-translate-y-px motion-reduce:transform-none">
                          {item.label}
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "size-3 transition-transform duration-300",
                            servicesOpen && "rotate-180",
                          )}
                        />
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute inset-x-3 bottom-1 h-px origin-left bg-primary-600 transition-transform duration-400",
                            servicesActive || servicesOpen
                              ? "scale-x-100"
                              : "scale-x-0 group-hover/services:scale-x-100",
                          )}
                        />
                      </button>

                      <div
                        id="desktop-services-menu"
                        aria-hidden={!servicesOpen}
                        inert={servicesOpen ? undefined : true}
                        className={cn(
                          "absolute left-1/2 top-full w-190 -translate-x-1/2 pt-4 transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(.22,1,.36,1)]",
                          servicesOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-2 opacity-0",
                        )}
                      >
                        <section
                          aria-labelledby="services-menu-title"
                          className="relative rounded-sm border border-neutral-300 bg-[#fcfaf7] p-4 shadow-[0_4px_12px_rgba(23,23,23,.1)]"
                        >
                          <div className="grid grid-cols-[1fr_auto] items-end gap-4 border-b border-neutral-300 pb-4">
                            <div>
                              <p className="mb-1 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-primary-600">
                                Services index /{" "}
                                {String(services.length).padStart(2, "0")}
                              </p>
                              <h2
                                id="services-menu-title"
                                className="font-heading text-2xl font-medium text-neutral-950"
                              >
                                Publishing, from draft to audience.
                              </h2>
                            </div>
                            <Button
                              href={contactHref}
                              size="sm"
                              variant="outline"
                            >
                              Discuss a project
                            </Button>
                          </div>

                          <ul className="grid grid-cols-2 gap-x-4">
                            {services.map((service, serviceIndex) => (
                              <li
                                key={service.href}
                                className="border-b border-neutral-200"
                              >
                                <Link
                                  href={service.href}
                                  onClick={() => setServicesOpen(false)}
                                  aria-current={
                                    isCurrentPath(pathname, service.href)
                                      ? "page"
                                      : undefined
                                  }
                                  className="group/link-arrow relative grid min-h-14 grid-cols-[28px_1fr_16px] items-center gap-2 px-1 py-2 text-xs font-semibold text-neutral-800 transition-transform duration-200 active:translate-x-px active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/65"
                                >
                                  <span className="font-mono text-[8px] tracking-[0.14em] text-primary-500">
                                    {String(serviceIndex + 1).padStart(2, "0")}
                                  </span>
                                  <span className="leading-snug transition-transform duration-300 group-hover/link-arrow:translate-x-1 motion-reduce:transform-none">
                                    {service.label}
                                  </span>
                                  <DirectionalArrow />
                                  <span
                                    aria-hidden="true"
                                    className={cn(
                                      "absolute inset-y-2 left-0 w-px origin-top bg-primary-600 transition-transform duration-300",
                                      isCurrentPath(pathname, service.href)
                                        ? "scale-y-100"
                                        : "scale-y-0 group-hover/link-arrow:scale-y-100",
                                    )}
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </section>
                      </div>
                    </li>
                  );
                }

                const href = "href" in item && item.href ? item.href : "/";

                return (
                  <li
                    key={item.label}
                    className="border-l border-neutral-900/10 last:border-r"
                  >
                    <DesktopLink
                      href={href}
                      label={item.label}
                      index={index}
                      active={isCurrentPath(pathname, href)}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden justify-self-end xl:block">
            <Button
              href={contactHref}
              size={isAtTop ? "md" : "sm"}
              className="min-w-36 transition-[height] duration-400"
            >
              Start a project
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="group/menu relative flex h-12 items-center gap-2 justify-self-end rounded-sm border border-neutral-400 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-900 transition-transform duration-200 active:translate-x-px active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/65 focus-visible:ring-offset-2 xl:hidden"
          >
            <span className="hidden sm:inline">
              {mobileMenuOpen ? "Close" : "Index"}
            </span>
            <span className="relative block size-4 overflow-hidden">
              <Menu
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 size-4 transition-[transform,opacity] duration-300",
                  mobileMenuOpen
                    ? "-translate-y-full opacity-0"
                    : "translate-y-0 opacity-100",
                )}
              />
              <X
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 size-4 transition-[transform,opacity] duration-300",
                  mobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0",
                )}
              />
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-x-1 top-1 h-px origin-left scale-x-0 bg-primary-600 transition-transform duration-400 group-hover/menu:scale-x-100"
            />
            <span
              aria-hidden="true"
              className="absolute inset-x-1 bottom-1 h-px origin-right scale-x-0 bg-primary-600 transition-transform duration-400 group-hover/menu:scale-x-100"
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        inert={mobileMenuOpen ? undefined : true}
        className={cn(
          "pointer-events-auto fixed inset-0 z-10 xl:hidden",
          "transition-[opacity,visibility] duration-300",
          mobileMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close navigation"
          onClick={() => {
            closeMobileMenu();
            menuButtonRef.current?.focus();
          }}
          className="absolute inset-0 h-full w-full cursor-default bg-neutral-950/20"
        />

        <aside
          ref={mobilePanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={cn(
            "absolute right-0 top-0 h-full w-full overflow-hidden border-l border-neutral-300 bg-[#fcfaf7] shadow-[-2px_0_8px_rgba(23,23,23,.08)] sm:w-[min(600px,88vw)]",
            "transition-[clip-path] duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
            mobileMenuOpen
              ? "[clip-path:inset(0_0_0_0)]"
              : "[clip-path:inset(0_0_0_100%)]",
            "motion-reduce:transition-none",
          )}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-12 top-0 w-px bg-primary-900/10"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-2 top-24 size-2 border-l border-t border-primary-500/60"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 right-2 size-2 border-b border-r border-primary-500/60"
          />

          <div className="relative h-full overflow-y-auto overscroll-contain pb-6 pl-16 pr-4 pt-24 sm:pl-20 sm:pr-8">
            <div className="mx-auto max-w-xl">
              <div className="border-b border-neutral-300 pb-4">
                <p className="mb-1 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-primary-600">
                  Scriptora / Navigation index
                </p>
                <h2 className="font-heading text-2xl font-medium text-neutral-950 sm:text-[28px]">
                  Choose the next chapter.
                </h2>
              </div>

              <nav aria-label="Mobile navigation">
                <ul>
                  {navigationLink.map((item, index) => {
                    if ("dropdown" in item && item.dropdown) {
                      return (
                        <li
                          key={item.label}
                          className="border-b border-neutral-200"
                        >
                          <button
                            type="button"
                            aria-expanded={mobileServicesOpen}
                            aria-controls="mobile-services-list"
                            onClick={() =>
                              setMobileServicesOpen((open) => !open)
                            }
                            className="group/mobile-services relative grid min-h-16 w-full grid-cols-[32px_1fr_28px] items-center gap-3 px-2 py-3 text-left text-neutral-900 transition-transform duration-200 active:translate-x-px active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/65"
                          >
                            <span className="font-mono text-[9px] tracking-[0.16em] text-primary-500">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-base font-semibold transition-transform duration-300 group-hover/mobile-services:translate-x-1 motion-reduce:transform-none sm:text-lg">
                              {item.label}
                            </span>
                            <span className="flex size-7 items-center justify-center border border-neutral-300">
                              <ChevronDown
                                aria-hidden="true"
                                className={cn(
                                  "size-4 transition-transform duration-300",
                                  mobileServicesOpen && "rotate-180",
                                )}
                              />
                            </span>
                            <span
                              aria-hidden="true"
                              className={cn(
                                "absolute inset-y-3 left-0 w-px origin-top bg-primary-600 transition-transform duration-300",
                                mobileServicesOpen || servicesActive
                                  ? "scale-y-100"
                                  : "scale-y-0 group-hover/mobile-services:scale-y-100",
                              )}
                            />
                          </button>

                          <div
                            id="mobile-services-list"
                            aria-hidden={!mobileServicesOpen}
                            inert={mobileServicesOpen ? undefined : true}
                            className={cn(
                              "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                              mobileServicesOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0",
                            )}
                          >
                            <div className="overflow-hidden">
                              <ul className="grid border-t border-neutral-200 sm:grid-cols-2 sm:gap-x-4">
                                {item.dropdown.map((service, serviceIndex) => (
                                  <li
                                    key={service.href}
                                    className={cn(
                                      "border-b border-neutral-200 last:border-b-0",
                                      serviceIndex >=
                                        item.dropdown.length - 2 &&
                                        "sm:border-b-0",
                                    )}
                                  >
                                    <Link
                                      href={service.href}
                                      onClick={closeMobileMenu}
                                      aria-current={
                                        isCurrentPath(pathname, service.href)
                                          ? "page"
                                          : undefined
                                      }
                                      className="group/link-arrow relative grid min-h-12 grid-cols-[24px_1fr_16px] items-center gap-2 px-1 py-2 text-xs font-semibold leading-snug text-neutral-700 transition-transform duration-200 active:translate-x-px active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/65"
                                    >
                                      <span className="font-mono text-[8px] text-primary-500">
                                        {String(serviceIndex + 1).padStart(
                                          2,
                                          "0",
                                        )}
                                      </span>
                                      <span className="transition-transform duration-300 group-hover/link-arrow:translate-x-1 motion-reduce:transform-none">
                                        {service.label}
                                      </span>
                                      <DirectionalArrow />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </li>
                      );
                    }

                    const href = "href" in item && item.href ? item.href : "/";

                    return (
                      <li key={item.label}>
                        <MobileLink
                          href={href}
                          label={item.label}
                          index={index}
                          active={isCurrentPath(pathname, href)}
                          onClick={closeMobileMenu}
                        />
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <section
                aria-labelledby="mobile-contact-title"
                className="mt-6 border-t border-neutral-300 pt-4"
              >
                <h3
                  id="mobile-contact-title"
                  className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500"
                >
                  Have a manuscript in mind?
                </h3>
                {email && typeof email.href === "string" && (
                  <address className="mb-4 not-italic">
                    <a
                      href={email.href}
                      className="group/email inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/65"
                    >
                      <span className="flex size-7 items-center justify-center border border-neutral-300">
                        <Mail aria-hidden="true" className="size-3.5" />
                      </span>
                      <span className="border-b border-transparent transition-[transform,border-color] duration-300 group-hover/email:translate-x-1 group-hover/email:border-primary-500">
                        {email.value}
                      </span>
                    </a>
                  </address>
                )}
                <Button href={contactHref} onClick={closeMobileMenu} fullWidth>
                  Start a project
                </Button>
              </section>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
