import CustomImage from "@/app/CustomImage";
import { DotIcon } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * @typedef {Object} MenuSection
 * @property {string} title - The title of the menu section
 * @property {string[]} links - Array of link names in this section
 */

/**
 * Footer Component
 *
 * A responsive website footer that displays navigation links, a subscription form,
 * and copyright information. Features include:
 * - Responsive grid layout that adapts to different screen sizes
 * - Multiple menu sections organized in columns
 * - Email subscription form with validation
 * - Company branding with logo
 * - Copyright information that automatically updates with the current year
 * - Privacy and terms links
 *
 * The component is structured in three main sections:
 * 1. Top section with menu columns and subscription form
 * 2. Divider for visual separation
 * 3. Bottom section with logo, copyright, and privacy links
 *
 * @returns {JSX.Element} The rendered Footer component
 */
const Footer = () => {
  /**
   * Menu data structure defining the sections and links in the footer
   * Each section has a title and an array of link names
   *
   * @type {MenuSection[]}
   */

  const Router = useRouter();
  const menu = [
    {
      title: "Useful Links",
      links: [
        { name:"About Us", href: "/about-us" },
        { name:"Contact Us", href: "/contacts" },
        { name:"FAQs", href: "/faqs" },
        { name:"Terms of Service", href: "/terms-of-service" },
        { name:"Privacy Policy", href: "/privacy-policy" },
      ],
    },
    // {
    //   title: "Careers",
    //   links: ["Blog", "Press", "Partnerships", "Support", "Help Center"],
    // },
    {
      title: "Resources",
      links: [
        {name: "Press",href:"/press"},
        {name: "Blog",href:"/blog"},
        {name: "Local Law guide",href:"/law/local-law"},
        {name: "Alert System guide",href:"/alert"},
        /*"Events", "Community", "Social Media"*/
      ],
    },
    {
      title: "Services & Solutions",
      links: [
        {name: "Property Management", href:"/property-management"},
        {name: "Owner Representative", href:"/owner-representative"},
        {name: "Inspection Services", href:"/inspection-services"},
        {name: "Expediting Services", href:"/expediting-services"},
        {name: "Alert Service", href:"/alert"},
      ],
      hrefs: [
        "/property-management",
        "/owner-representative",
        "/inspection-services",
        "/expediting-services",
        "/alert",
      ],
    },
  ];

  /**
   * Commented out background image implementation
   * Preserved for potential future use
   *
   * <div className="text-[#DCE2E2] py-16 relative bg-cover bg-center"
   * style={{
   *   backgroundImage: `url('/PBS Assets/Brand Language/sky-scraper-building-hong-kong-cityscape.jpg')`,
   *   // Mobile image as default
   * }}>
   * Add overlay for better text contrast
   * <div className="absolute inset-0 bg-black/50 z-0"></div>
   * <div className="container mx-auto px-8 sm:px-0 relative z-10">
   */

  return (
    <div className="bg-brand-gray1 text-[#DCE2E2] py-10  lg:pb-0 lg:pt-10">
      <div className="md:w-[80vw] lg:w-full mx-auto">
        {/* Top Section - Menu Columns and Subscription Form */}
        <div className="container mx-auto px-[35px] md:px-[50px] flex flex-col lg:flex-row justify-between gap-10 ">
          {/* Menu Columns - Responsive Grid Layout */}
          <div className="w-full lg:w-[70%] grid grid-cols-2 lg:grid-cols-3 gap-8">
            {menu.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-[#b9c0bf]">
                  {section.links.map((link, index) => (
                    <li
                      key={index}
                      className="hover:text-[#DCE2E2] transition duration-300 flex gap-2 font-semibold items-center text-sm"
                    >
                      <DotIcon />
                      <button
                        onClick={() => {
                          Router.push(link.href);
                        }}
                        className="cursor-pointer text-left md:text-center"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Subscribe Section - Hidden on medium screens, visible on small and large screens */}
          <div className="w-full lg:w-[30%] flex flex-col items-center md:items-start mx-auto my-8 md:block">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Subscribe
            </h3>
            <p className="text-[#DCE2E2] mb-4 font-semibold text-sm text-center">
              Join our community to receive updates
            </p>
            {/* Email Subscription Form */}
            <form className="relative overflow-hidden flex justify-center items-center w-full  lg:max-w-md ">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex text-base px-4 py-2 rounded-2xl bg-white text-[#7A8E85] focus:outline-none w-5/6 md:w-4/6 lg:w-full"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="absolute right-6 md:right-16 lg:right-0 w-2/5 lg:w-[50%] xl:w-2/5 px-6 py-2 bg-[#37403D] text-[#DCE2E2] rounded-2xl hover:bg-[#8AD5B7] transition duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm font-semibold text-[#DCE2E2] mt-2 text-center">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>

        {/* Divider - Visual separator between top and bottom sections */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Bottom Section - Logo, Copyright, and Privacy Links */}
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          {/* Logo - Hidden on mobile, visible on larger screens */}
          <div className="flex items-center gap-4 mb-4 md:mb-0 md:block pb-4">
            <CustomImage
              src="/pics/LOGO.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-[80px]"
            />
          </div>

          {/* Copyright Notice - Automatically updates with current year */}
          <p className="text-center text-sm text-[#b9c0bf] font-semibold">
            © {new Date().getFullYear()} PBS NYC. All rights reserved
          </p>

          {/* Social Icons - Commented out but preserved for future use
            <div className="flex items-center gap-4 text-[#b9c0bf]">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#DCE2E2] transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#DCE2E2] transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#DCE2E2] transition duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-[#DCE2E2] transition duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div> */}

          {/* Privacy Links - Terms, Privacy, and Cookie policies */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#7A8E85] mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-[#DCE2E2] transition duration-300"
              aria-label="View Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[#DCE2E2] transition duration-300"
              aria-label="View Terms of Service"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-[#DCE2E2] transition duration-300"
              aria-label="View Cookie Policy"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
