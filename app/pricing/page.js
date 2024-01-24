"use client";
import React, { useState } from "react";
import Deliveries from "../Components/Deliveries";
import PreFooter from "../Components/PreFooter";
import ReviewSec from "../Components/ReviewSec";
import SubHeading from "../Components/SubHeading";
import HeadingMain from "../Components/HeadingMain";
import PackagesBox from "../Components/PackagesBox";
import InnerBanner from "../Components/InnerBanner";
import FloatingIcons from "../Components/FloatingIcons";
import { IoIosPaperPlane } from "react-icons/io";
import { GiAirplaneDeparture } from "react-icons/gi";
import { BsRocketTakeoff } from "react-icons/bs";

const page = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  // Replace this with your dynamic data (e.g., fetched from an API)
  const seosilver = [
    "Campaign Setup",
    "Website Audit",
    "15 Selected Keywords Targeting",
    "Keyword Research",
    "Keyword Grouping",
    "Keyword Mapping",
    "SEO Road Map",
    "Blog Creation",
    "Webpage Copywriting (3 Pages, 350 Words Per Page)",
    "Title Tag Optimization (10 Titles)",
    "Meta Description Optimization (10 Meta Descriptions)",
    "Meta Keyword Optimization (10 Meta Keywords)",
    "Domain Redirect Optimization (10 Domain Redirects)",
    "XML Sitemap Optimization",
    "Robots.Txt Check",
    "URL Rewrites (10 URL Rewrites)",
    "Broken Link Report",
    "Rich Snippet Recommendations",
    "Breadcrumbs",
    "Initial Off-Page SEO",
    "Social Bookmarking",
    "Slide Share Marketing",
    "Forums/FAQ's",
    "Link Building",
    "Directory Submission",
    "Local Business Listings",
    "10 Submissions",
    "10 Classifieds",
    "10 Community Participation",
    "10 Business Profiles",
    "Meta Tags Creation",
    "Web Content Optimization",
    "Keyword Optimization",
    "Anchor Text Optimization",
    "Google Analytics Installation",
    "Monthly Progress Report",
    "Dedicated Project Manager",
    "Support, 5 Days a Week",
  ];
  const seogold = [
    "Prior Analysis",
    "Business Analysis",
    "Consumer Analysis",
    "Competitor Analysis",
    "35 Selected Keywords Targeting",
    "15 Pages Keyword Targeted",
    "Meta Tags Creation",
    "Keyword Optimization",
    "Image Optimization",
    "Inclusion Of Anchors",
    "Tracking & Analysis",
    "Google Analytics Installation",
    "Google Webmaster Installation",
    "Call To Action Plan",
    "Creation Of Sitemaps",
    "Reporting",
    "Monthly Reporting",
    "Recommendation",
    "Email Support",
    "Phone Support",
    "Social Bookmarking",
    "Slide Share Marketing",
    "Forums/FAQs",
    "Link Building",
    "Directory Submission",
    "Local Business Listings",
    "15 Submissions",
    "15 Classifieds",
    "15 Community Participation",
    "15 Business Profiles",
    "Meta Tags Creation",
    "Web Content Optimization",
    "Keyword Optimization",
    "Landing Page Optimization",
    "Anchor Text Optimization",
    "Image Optimization",
    "Google Analytics Installation",
    "Monthly Progress Report",
    "Dedicated Project Manager",
    "Support, 5 Days a Week",
  ];
  const seoplatinum = [
    "PLAN INCLUDES:",
    "Prior Analysis",
    "Business Analysis",
    "Consumer Analysis",
    "Competitor Analysis",
    "60+ Selected Keywords Targeting",
    "30 Pages Keyword Targeted",
    "Meta Tags Creation",
    "Keyword Optimization",
    "Image Optimization",
    "Inclusion Of Anchors Tags",
    "Inclusion Of Anchors Indexing Modifications",
    "Tracking & Analysis",
    "Google Analytics Installation",
    "Google Webmaster Installation",
    "Call To Action Plan",
    "Creation Of Sitemaps",
    "Reporting",
    "Monthly Reporting",
    "Recommendation",
    "Email Support",
    "Phone Support",
    "Off Page Optimization",
    "Social Bookmarking",
    "Slide Share Marketing",
    "Forums/FAQs",
    "Link Building",
    "Directory Submission",
    "Local Business Listings",
    "Local SEO",
  ];
  const elementarywebsite = [
    "3 Page Website",
    "Theme Based Design",
    "Stock Photography",
    "Responsive Design",
    "Turnaround 3 Days",
    "Social Media Integration",
    "Contact Forms Included",
    "Content Not Included!",
  ];
  const collateralclassic = [
    "5 Page Website",
    "Theme Based Design",
    "Stock Photography",
    "Turnaround 4 Days",
    "Responsive Design",
    "Content Management System",
    "Social Media Integration",
    "Blog Setup",
    "Contact Forms Included",
  ];
  const exclusivewebsite = [
    "10 Page Website",
    "Custom Design",
    "Stock Photography",
    "Original Content",
    "Turnaround 7 Days",
    "Responsive Design",
    "Content Management System",
    "Sliders",
    "Social Media Integration",
    "SEO Features",
    "Blog Setup",
    "Contact Forms Included",
  ];
  const deluxewebsite = [
    "Dedicated Project Manager",
    "Upto 12-14 Unique Pages Website",
    "Conceptual And Dynamic Website",
    "Online Reservation/Appointment Tool (Optional)",
    "Custom Forms",
    "Lead Capturing Forms (Optional)",
    "Striking Hover Effects",
    "Newsletter Subscription (Optional)",
    "Newsfeed Integration",
    "Social Media Integration",
    "Search Engine Submission",
    "Mobile Responsive",
    "8 Stock Photos",
    "5 Unique Banner Design",
    "1 JQuery Slider Banner",
    "48 To 72 Hours TAT",
    "Complete Deployment",
    "100% Unique Design Assurance",
    "Complete Ownership Rights",
  ];
  const noblewebsite = [
    "Dedicated Project Manager",
    "15 Seconds 2D Explainer Video",
    "Voice - Over & Sound Effects",
    "Professional Script Writing",
    "Storyboard",
    "SEO Meta Tags",
    "Unlimited Pages Website",
    "Custom Made, Interactive, Dynamic & High End Design",
    "Custom WP (Or) Custom PHP Development",
    "1 JQuery Slider Banner",
    "Up To 10 Custom Made Banner Designs",
    "10 Stock Images",
    "Unlimited Revisions",
    "Unlimited Revisions",
    "Special Hover Effects",
    "Content Management System (CMS)",
    "Online Appointment/Scheduling/Online Ordering Integration (Optional)",
    "Online Payment Integration (Optional)Complete Deployment",
    "Multi Lingual (Optional)",
    "Custom Dynamic Forms (Optional)",
    "Signup Area (For Newsletters, Offers Etc.)",
    "Search Bar",
    "Live Feeds Of Social Networks Integration (Optional)",
    "Mobile Responsive",
    "FREE 5 Years Domain Name",
    "Free Google Friendly Sitemap",
    "Search Engine Submission",
    "Industry Specified Team Of Expert Designers And Developers",
    "Complete Deployment",
    "Dedicated Accounts Manager",
    "100% Unique Design Assurance",
    "Complete Ownership Rights",
  ];
  const customloginwebsite = [
    "Dedicated Project Manager",
    "Dedicated Project Manager",
    "Complete Custom Design & Development",
    "Complete Branding Solution",
    "Banner Designs",
    "Unique Logo Designs",
    "Unlimited Revisions",
    "Custom Portal",
    "Unique, User Friendly, Interactive, Dynamic Layout",
    "High End UI Design",
    "JQuery Slider",
    "Special Hoover Effects",
    "20 Stock Images",
    "Client/User Dashboard Area",
    "Custom PHP Development",
    "Content Management System (Custom)",
    "Online Appointment",
    "Scheduling Integration",
    "Online Ordering Tool",
    "Online Payment Integration",
    "Multi Lingual",
    "Sales Reports",
    "Trend Analytics",
    "Forecasting",
    "Territory Management",
    "Account Management",
    "Event Integration",
    "Advanced Data Security",
    "Custom Dynamic Forms",
    "User Signup Area",
    "User Login Area",
    "User Dashboard Area",
    "Complete Database Creation",
    "Signup Automated Email Authentication",
    "Web Traffic Analytics Integration",
    "3rd Party API Integrations",
    "Signup Area (For Newsletters, Offers Etc.)",
    "Search Bar For Easy Search",
    "Live Feeds Of Social Networks",
    "Search Engine Submission",
    "Module-Wise Architecture",
    "Extensive Admin Panel",
    "1 Year Domain",
    "1 Year Dedicated Hosting Server",
    "Dedicated Designers And Developers",
    "Complete Deployment",
    "100% Unique Design Assurance",
    "Complete Ownership Rights",
  ];
  const elementaryecommerce = [
    "Customized Design",
    "Up-To 50 Products",
    "Content Management System (CMS)",
    "Mini Shopping Cart Integration",
    "Payment Module Integration",
    "Easy Product Search",
    "Mobile Responsive",
    "Dedicated Designer & Developer",
    "Unlimited Revisions",
    "100% Unique Design Assurance",
    "Complete Ownership Rights",
  ];
  const exclusiveecommerce = [
    "Customized Design",
    "Up-To 100 Products",
    "Content Management System (CMS)",
    "Mini Shopping Cart Integration",
    "Payment Module Integration",
    "Easy Product Search",
    "Mobile Responsive",
    "Dedicated Designer & Developer",
    "Unlimited Revisions",
    "100% Unique Design Assurance",
    "Complete Ownership Rights",
  ];
  const deluxeecommerce = [
    "Customized Design",
    "Up-To 500 Products",
    "Content Management System (CMS)",
    "Full Shopping Cart Integration",
    "Payment Module Integration",
    "Easy Product Search",
    "Product Reviews",
    "5 Promotional Banners",
    "Mobile Responsive",
    "Team Of Expert Designers & Developers",
    "Unlimited Revisions",
    "100% Unique Design Assurance",
    "Complete Ownership Rights",
  ];
  const nobleecommerce = [
    "Dedicated Project Manager",
    "Unlimited Pages Website",
    "Customized Designed Logo",
    "Unlimited Products",
    "Mobile Responsive + Mobile Friendly",
    "Content Management System (CMS)",
    "Full Shopping Cart Integration",
    "Payment Module Integration (Visa, MC, Discover & AMEX)",
    "Easy Product Search",
    "Product Reviews",
    "5 Promotional Banners",
    "Mobile Responsive",
    "Social Media Integration (Facebook Instagram & Twitter)",
    "6 Months Complimentary Website Maintenance",
    "Newsletter Subscription",
    "Unlimited Revisions",
    "100% Unique Design Assurance",
    "Complete Ownership Rights",
  ];
  const customecommerce = [
    "Unlimited Page Websit",
    "Unique Pages And UI Desig",
    "Complete Custom Developmen",
    "Newsfeed Integratio",
    "Social Media Plugins Integratio",
    "Advanced Ecommerce Marketplace Feature",
    "Inventory Managemen",
    "CRM (Customer Relation Management System",
    "Advanced Admin Features 2.",
    "Advanced User Feature",
    "Dashboard And Analytic",
    "Seller/Shipping Distributio",
    "Seller Profile Managemen",
    "User Profile Managemen",
    "General Configuration Feature",
    "Revenue Model",
    "Featured Product",
    "Google Advertisement",
    "Flash Sales Modul",
    "Loyalty Rewards Modul",
    "Mobile Responsiv",
    "Upto 40 Stock Image",
    "10 Unique Banner Design",
    "JQuery Slide",
    "Search Engine Submissio",
    "Free Google Friendly Sitema",
    "Social Media Page Designs (Facebook, Twitter, Instagram",
    "Complete W3C Certified HTM",
    "Complete Deploymen",
    "100% Unique Design Assuranc",
    "Complete Ownership Right",
  ];
  const automatedinteractive = [
    "Unlimited Page Website",
    "Custom Content Management System (CMS)",
    "Unique Pages And UI Design",
    "Complete Custom Development",
    "Process Automation Tools",
    "Newsfeed Integration",
    "Social Media Plugins Integration",
    "Upto 40 Stock Images",
    "10 Unique Banner Designs",
    "JQuery Slider",
    "Search Engine Submission",
    "Free Google Friendly Sitemap",
    "FREE 5 Years Hosting",
    "Custom Email Addresses",
    "Social Media Page Designs (Facebook, Twitter, Instagram)",
    "Complete W3C Certified HTML",
    "Complete Deployment",
    "100% Satisfaction Guarantee",
    "100% Unique Design Guarantee",
    "Money Back Guarantee",
    "Automated Inventory/Shipping/Supplier Module:",
    "Manage Thousands To Millions Of Inventory With Ease And Check Stock Levels In Real-Time. Receive Low Inventory Notifications And Generate Purchase Orders To Replenish Your Stock.",
    "Suppliers Integration (API NEEDED)",
    "Shipper Integration (API NEEDED)",
    "Order Management",
    "LOT Numbers And Expire Date Tracking",
    "Transfer Stock Between Warehouses (If Warehouse - API NEEDED)",
    "Receive Stock Into A Specific Warehouse (If Warehouse - API NEEDED)",
    "Fulfill Orders From A Particular Warehouse (If Warehouse - API NEEDED)",
    "Stock Management",
    "Actionable Insights",
    "Real- Time Visibility",
    "Inventory Opportunities",
    "Advanced Features: (API Needed For Suppliers/Warehouse)",
    "Speak To Suppliers During Trivial Conversations.",
    "Set And Send Actions To Suppliers Regarding Governance And Compliance Materials. Place Purchasing Requests.",
    "Research And Answer Internal Questions Regarding Procurement Functionalities Or A Supplier/Supplier Set.",
    "Receiving/Filing/Documentation Of Invoices And Payments/Order Requests",
    "Machine Learning (ML) For Supply Chain Planning (SCP)",
    "Machine Learning For Warehouse Management",
    "Natural Language Processing (NLP) For Data Cleansing And Building Data Robustness",
    "Automated Invoices & Estimates",
    "Create Beautiful, Professional Invoices & Estimates In Just A Few Seconds And Then Instantly Email Them As PDF's Directly To Your Customers Or Prospects.",
    "Automated Split Invoicing",
    "Automated Combine Invoices",
    "Invoice Templates",
    "Automated Barcode Scanning",
    "Scan Inventory Into Your Orders, Generate Barcodes For Your Documents, And Search For Inventory Or Documents By Scanning Barcodes.",
    "Locations And Zones",
    "Have Multiple Warehouses, Offices, Or Retail Stores? No Problem. Easily Track Where All Your Inventory Is By Organizing Everything Into Locations And Zones. Organize Inventory Items Using Custom Attributes Such As Size, Color, And Location. View How Many You Have Globally Or At Each Location.",
    "Customer Accounts",
    "Performance And Analytics",
    "Customization Of Personal Details",
    "Process Management",
    "Sales Automation",
    "Team Collaboration",
    "Marketing Automation",
    "Security",
    "Integrations",
    "Mobile Notifications",
    "Sales Reports",
    "Trend Analytics",
    "Forecasting",
    "Territory Management",
    "Account Management",
    "Event Integration",
    "Advanced Data Security",
    "Purchase Orders",
    "With Integrated Purchase Orders, You Can Easily Replenish Your Inventory Levels By Ordering More Stock And Even Track When Those New Items Will Arrive.",
    "Partial Orders Fulfill",
    "Backordering",
    "Financial Reports",
    "Generate Extremely Detailed Reports For Your Inventory, Sales And Services. Filter Your Reports By Date-Range And Category To See What's Making You The Most Money.",
  ];
  const customcrmerpportal = [
    "Unlimited Page Website",
    "Unique Pages And UI Design",
    "Complete Custom Development",
    "Newsfeed Integration",
    "CRM (Customer Relation Management System)",
    "Performance And Analytics",
    "Customization Of Personal Details",
    "Process Management",
    "Sales Automation",
    "Team Collaboration",
    "Marketing Automation",
    "Security",
    "Integrations",
    "Mobile Notifications",
    "Sales Reports",
    "Trend Analytics",
    "Forecasting",
    "Territory Management",
    "Account Management",
    "Event Integration",
    "Advanced Data Security",
    "Opportunity Management",
    "Sales Forecasting",
    "Call/Video Logging",
    "Quotes",
    "Contracts",
    "Document Library",
    "Case Management",
    "Analytics And Dashboards",
    "Lead Management",
    "Resource Management",
    "Analytics",
    "Web Intelligence",
    "Automated Emails, Invoices & Estimates",
    "Automated Split Invoicing",
    "Automated Combine Invoices",
    "Invoice Templates",
    "Financial Reports",
    "Generate Extremely Detailed Reports For Your Sales And Services. Filter Your Reports By Date-Range And Category To See What's Making You The Most Money.",
    "Generate Automated Sales Reports",
    "Core Modules",
    "Human Resources",
    "Integration",
    "Business Intelligence",
    "Sales/Marketing",
    "Finance",
    "Core Features",
    "Reporting",
    "Accounting",
    "Tracking And Visibility",
    "Centralized Modules",
    "ERP Database",
    "Human Resources Management",
    "Business Process Management",
    "Enterprise Analytics",
    "Business Intelligence",
    "ERP Database",
    "Integrations",
    "If (Manufacturing) (Optional)",
    "Accounting",
    "Distribution",
    "Business Intelligence",
    "Insights",
    "Standardization",
    "Procurement",
    "Reporting And Analytics",
    "Forecasting",
    "Projection",
    "Enterprise-Wide Integration",
    "Real-Time Operations",
    "Problem Definition",
    "Description Of The Programs Objectives And Scope",
    "Assumptions",
    "Implementation Costs",
    "Implementation Schedule",
    "Development And Operational Risks",
    "Projected Benefits",
    "Team Members",
    "Contracts",
    "Infrastructure Upgrades",
    "Create Work Plans And Timelines",
    "Analyze Gaps",
    "Configure Parameters",
    "Migrate Data",
    "Test System",
    "Document System",
    "Advanced Admin Features 2.0",
    "User Signup/Login Functionalities",
    "Advanced User Features",
    "User Profile Management",
    "General Configuration Features",
    "Complete W3C Certified HTML",
  ];
  const beginner = [
    "2 Social Networks Included (Facebook,Instagram, Twitter)",
    "2 Posts Per Week",
    "Account Creation/Optimization",
    "Content Creation",
    "Create Cover & Profile Picture",
    "Account Monitoring & Engagment",
    "Monthly Progress Report",
  ];
  const growth = [
    "3 Social Networks Included (Facebook, Intagram & Twitter)",
    "4 Postings Per Week",
    "Copywriting & Visual Designs",
    "Account Creation/Optimization",
    "Business Page Optimization",
    "Monthly Progress Report",
    "Reputation Management",
    "Social Account Setup",
    "Content Creation",
    "Social Media Hearing",
    "Query and Comments Reply",
  ];
  const pro = [
    "5 Social Networks Included (Facebook, Instagram, Twitter, Linkedin & YouTube)",
    "5 Postings Per Week",
    "Copywriting & Visual Designs",
    "Account Creation/Optimization",
    "Business Page Optimization",
    "Comprehensive Ad Campaign Management",
    "Spam Monitoring",
    "Detailed Analytic Reporting",
    "Social Media Hearing",
    "Brand Monitoring",
  ];
  const ultrabasiclogo = [
    "1 Custom Logo Design",
    "3 Round Of Revisions",
    "Web Ready File Format",
    "48 Hrs Turnaround Time",
    "100% Ownership Right",
    "100% Satisfaction",
  ];
  const interactivelogo = [
    "3 Custom Logo Desion",
    "3 Dedicated Designers",
    "3 Round Of Revisions",
    "24 - 48 Hrs Turnaround Time",
    "100% Ownership Right",
    "100% Satisfaction",
  ];
  const innovativelogo = [
    "Custom Logo Designs Primbed",
    "8 Creative Designers",
    "Unlimited Revisions",
    "1 Stationary Concept",
    "24-48 Hrs Turnaround Time",
    "100% Ownership Right",
    "100% Satisfaction",
  ];
  const subliminallogo = [
    "Custom Logo Designs (Unlimited)",
    "10 Creative Designers",
    "Untiented Revisions",
    "2 Stationary Concept",
    "1 Facebook Cover Photo",
    "1 Web Homepage Design",
    "2 Inner Pages Web Design",
    "24-48 Hrs Turnaround Time",
    "100% Ownership Right",
    "100% Satisfaction",
  ];
  const businesslogo = [
    "UNLIMITED Logo Design Concepts",
    "By 8 Award Winning Designers",
    "UNLIMITED Revisions",
    "2 Stationary Design Sets (Business Card, Letterhead, Envelope)",
    "Icon Design",
    "Double Sided Flyer Design / Bi-Fold Brochure",
    "FREE MS Word Letterhead",
    "Free Email Signature",
    "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
    "100% Satisfaction Guarantee",
    "100% Unique Design Guarantee",
    "100% Money Back Guarantee *",
  ];
  const basicillustrative = [
    "3 Custom Design Concepts",
    "By 2 Designers",
    "UNLIMITED Revisions",
    "48 to 72 hours TAT",
    "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
    "100% Ownership Rights",
    "100% Satisfaction Guarantee",
    "100% Unique Design Guarantee",
    "100% Money Back Guarantee *",
  ];
  const startupillustrative = [
    "4 Custom Design Concepts",
    "By 3 Designers",
    "48 to 72 hours TAT",
    "UNLIMITED Revisions",
    "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
    "100% Ownership Rights",
    "100% Satisfaction Guarantee",
    "100% Unique Design Guarantee",
    "100% Money Back Guarantee *",
  ];
  const goldlogo = [
    "UNLIMITED Logo Design Concepts",
    "By 8 Award Winning Designers",
    "Icon Design",
    "UNLIMITED Revisions",
    "2 Stationary Design Sets (Business Card, Letterhead, Envelope)",
    "FREE MS Word Letterhead",
    "Free Email Signature",
    "3 Page Custom Website",
    "2 Stock Photos",
    "2 Banner Designs",
    "jQuery Slider",
    "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
    "100% Satisfaction Guarantee",
    "100% Unique Design Guarantee",
    "100% Money Back Guarantee *",
  ];
  const d3logopackage = [
    "3 Unique 3D Logo Concepts",
    "Light Effects and VFX",
    "Fully Rendered",
    "Multiple 3D Angles",
    "By 3 Award Winning Designers",
    "72 hours Turnaround Time",
    "UNLIMITED Revisions",
    "100% Ownership Rights",
    "100% Satisfaction Guarantee",
    "100% Unique Design Guarantee",
    "100% Satisfaction Guarantee",
    "100% Money Back Guarantee *",
  ];
  const professionalillustrative = [
    "UNLIMITED Logo Design Concepts",
    "By 4 Designers",
    "UNLIMITED Revisions",
    "Stationary Design (Business Card, Letterhead, Envelope)",
    "FREE MS Word Letterhead",
    "48 to 72 hours TAT",
    "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)*",
    "100% Satisfaction Guarantee",
    "100% Unique Design Guarantee",
    "100% Money Back Guarantee *",
  ];
  const startupcollateral = [
    "1 Stationery Design Set",
    "FREE Fax Template",
    "Print Ready Formats",
    "UNLIMITED Revisions",
    "Satisfaction Assurance",
  ];
  const brandingcollateralclassic = [
    "2 Stationery Design Set",
    "UNLIMITED Revisions",
    "Flyer Design",
    "Brochure Design (Bi-Fold/Tri-Fold)",
    "Satisfaction Assurance",
  ];
  const premiumcollateral = [
    "4 Stationery Design Se",
    "Packaging Desig",
    "UNLIMITED Revision",
    "T-Shirt Desig",
    "Satisfaction Assuranc",
  ];
  const unlimitedcollateral = [
    "6 Stationery Design Set",
    "Menu Card Design",
    "T-Shirt Design",
    "1 Banner Design",
    "100% Satisfaction Guarantee",
    "Satisfaction Assurance",
  ];
  const specialvideo = [
    "15s Duration - HD 1080",
    "Professional Script",
    "Storyboard Design",
    "Animations & VFX",
    "Music And Foley",
    "Voice Over Artist",
  ];
  const videocollateralclassic = [
    "30s Duration - HD 1080",
    "Professional Script",
    "Storyboard Design",
    "Animations & VFX",
    "Music And Foley",
    "Voice Over Artists",
  ];
  const classicvideo = [
    "60 Second Video",
    "Professional Script",
    "Storyboard Design",
    "Animations & VFX",
    "Music And Foley",
    "Voice Over Artists",
    "Unlimited Revisions",
  ];
  const webcontentbasic = [
    "1 Page Professional Copywriting Service",
    "Creative & Well-Written by 1 Professional Copywriter",
    "Industry Specified Expert Copywriter",
    "300 Words Per Page",
    "5 Revisions",
    "3 to 4 Business Days Rotation",
    "According To Your Exact Requirements",
    "Proofing by our in-house experts",
    "100% Original Content",
    "100% Approval Assurance",
    "30 Days Refund Warranty",
  ];
  const webcontentstarter = [
    "5 Pages Professional Copywriting Service",
    "Creative & Well-Written by 2 Professional Copywriters",
    "Industry Specified Expert Copywriters",
    "300 Words Per Page",
    "10 Revisions",
    "5 to 7 Business Days Rotation",
    "According To Your Exact Requirements",
    "Proofing by our in-house experts",
    "Free Meta Tags Creation",
    "Keyword Mapping",
    "100% Ownership Rights",
    "100% Original Content",
    "100% Approval Assurance",
    "30 Days Refund Warranty",
  ];
  const webcontentprofessional = [
    "10 Pages Professional Copywriting Service",
    "Creative & Well-Written by 3 Professional Copywriters",
    "Industry Specified Expert Copywriters",
    "300 Words Per Page",
    "Unlimited Revisions",
    "7 to 10 Business Days Rotation",
    "According To Your Exact Requirements",
    "Proofing by our in-house experts",
    "Free Meta Tags Creation",
    "Keyword Mapping",
    "100% Ownership Rights",
    "100% Original Content",
    "100% Approval Assurance",
    "30 Days Refund Warranty",
  ];
  const webcontentidentity = [
    "Up To 20 Pages Professional Copywriting Service",
    "Creative & Well-Written by 3 Professional Copywriters",
    "Industry Specified Expert Copywriters",
    "300 Words Per Page",
    "Unlimited Revisions",
    "7 to 10 Business Days Rotation",
    "According To Your Exact Requirements",
    "Proofing by our in-house experts",
    "Free Meta Tags Creation",
    "Keyword Mapping",
    "100% Ownership Rights",
    "100% Original Content",
    "100% Approval Assurance",
    "30 Days Refund Warranty",
  ];
  const basic = [
    "– Logo Design",
    "5 Custom Logo Design Concepts",
    "By 2 Designers",
    "Icon Design",
    "All Final File Formats",
    "– Business Stationary",
    "Business Card, Letterhead, Envelope, Fax Template",
    "MS Word Letterhead",
    "– Website Design",
    "5 Page Website",
    "Mobile Responsive",
    "Team of Expert Designers & Developers",
    "8 Stock images",
    "5 Banner Designs",
    "jQuery Sliders",
    "Free Google Friendly Sitemap",
    "Facebook Page Design",
    "Complete W3C Certified HTML",
    "Complete Deployment",
    "– Value Added Services",
    "Logo Design Final Files (.PNG, .JPG, .PDF)",
    "Website Design Complete Source Files",
    "Dedicated Project Manager",
    "100% Money Back Guarantee",
    "Complete Deployment",
    "*NO MONTHLY OR ANY HIDDEN FEE*",
  ];
  const startup = [
    "– Logo Design",
    "Unlimited Logo Design Concepts",
    "Unlimited Revisions",
    "Icon Design",
    "All Final File Formats",
    "– Stationary Design",
    "Business Card, Letterhead, Envelope",
    "MS Word Letterhead",
    "– Website Design",
    "UNLIMITED Pages Website",
    "Content Management System (CMS)",
    "Mobile Responsive",
    "5 Stock Photos + 3 Banner Designs",
    "Any 3 Social Media Platforms",
    "Complete W3C Certified HTML",
    "Complete Deployment",
    "– Value Added Services",
    "Dedicated Account Manager",
    "100% Money Back Guarantee",
    "Complete Deployment",
  ];
  const professional = [
    "– Logo Design",
    "Unlimited Logo Concepts",
    "8 Dedicated Designers",
    "Icon Design",
    "Unlimited Revisions",
    "All file formats",
    "– Print Materials",
    "2 Free Custom Stationary Designs",
    "MS Word Letterhead",
    "Free Trifold Brochure Design",
    "– Website Design",
    "Unlimited Pages Design",
    "Conceptual and Dynamic Liquid Website",
    "Team of Expert Designers &amp; Developers",
    "Word Press OR Custom Php",
    "Content Management System",
    "Mobile Responsive",
    "Online Reservation/Appointment Tool (Optional)",
    "Custom Forms",
    "Lead Capturing Forms (Optional)",
    "Newsfeed Integration",
    "Social Media Integration",
    "Search Engine Submission",
    "15 Stock images",
    "8 Unique Banner Designs",
    "jQuery Sliders",
    "Free Google Friendly Sitemap",
    "Complete W3C Certified HTML",
    "– – Social Media Page Design",
    "Facebook Page Design",
    "Twitter Page Design",
    "YouTube Page Design",
    "Google+ Page Design",
    "– Value Added Services",
    "Dedicated Account Manager",
    "100% Satisfaction Guarantee",
    "100% Money Back Guarantee",
    "*NO MONTHLY OR ANY HIDDEN FEE*",
  ];
  const identity = [
    "– Logo Design",
    "9 Logo Design Idea(s)",
    "By 4 Expert Level Designer(s)",
    "Free Icon Design",
    "Unlimited Revisions",
    "2 to 3 Business Days TAT",
    "– Stationary Design",
    "Letterhead Design",
    "Business Card Design",
    "Envelope Design",
    "Email Signature Design",
    "Electronic Letterhead",
    "Invoice Design",
    "– Website Design",
    "Unique 5 Pages Website Design",
    "Custom, Interactive, Dynamic & High End Web Design",
    "Custom WordPress Development",
    "5 Stock Images",
    "5 Banner Designs",
    "Sliding Banners",
    "Unlimited Revisions",
    "Special Hoover Effects",
    "Content Management System (WordPress)",
    "Mobile Responsive",
    "Online Appointment/Booking/Scheduling/Online Ordering Integration (If Required)",
    "FREE 12 Months Domain Name",
    "FREE 12 Month Hosting",
    "5 Professional Email ID’s",
    "Social Media Page Integration",
    "Google Friendly Sitemap",
    "Search Engine Submission",
    "Complete W3C Certified HTML",
    "Industry specified Team of Expert Designers and Developers",
    "Complete Deployment",
    "– – Social Media Page Design",
    "Facebook Icon Image & Banner Design",
    "Twitter Icon Image & Banner Design",
    "Google+ Icon Image & Banner Design",
    "– Value Added Services",
    "Logo Design Final Files (.AI, .PSD, .EPS, .PNG, .JPG, .PDF, .TIFF)",
    "Website Design Complete Source Files",
    "Dedicated Project Manager",
    "100% Satisfaction Guarantee",
    "100% Money Back Guarantee",
    "*NO MONTHLY OR ANY HIDDEN FEE*",
    "– Add on",
    "Professional Content/Copywriting",
    "Online Payment Integration",
    "Shopping Cart Integration",
    "Additional Professional Email ID",
  ];
  const corporate = [
    "– Logo Design",
    "Unlimited Logo Design Idea(s)",
    "8 Dedicated Designers",
    "Icon Design",
    "All final file formats",
    "– Stationary Design",
    "2 Free Custom Stationary Designs",
    "MS Word Letterhead",
    "Invoice Design",
    "FREE Tri fold Brochure Design",
    "– Website Design",
    "Unlimited Pages Website",
    "Conceptual and Dynamic Website",
    "Word Press OR CUSTOM PHP",
    "Content Management System (CMS)",
    "Easy Product Search",
    "Product Reviews",
    "Unlimited Products",
    "Unlimited Categories",
    "Promotional Product Showcase",
    "New Product Showcase",
    "Full Shopping Cart Integration",
    "Payment Module Integration",
    "Sales & Inventory Management",
    "Custom Forms",
    "Lead Capturing Forms (Optional)",
    "Newsfeed Integration",
    "Social Media Integration",
    "Search Engine Submission",
    "Team of Dedicated Designers, Developers and Brand Experts",
    "20 Stock images",
    "6 Unique Banner Designs",
    "jQuery Slider",
    "Free Google Friendly Sitemap",
    "Complete W3C Certified HTML",
    "– – Social Media Page Design",
    "Facebook Page Design",
    "Twitter Page Design",
    "YouTube Page Design",
    "Google+ Page Design",
    "Pinterest Page Design",
    "– Value Added Services",
    "Dedicated Account Manager",
    "100% Satisfaction Guarantee",
    "100% Money Back Guarantee",
    "*NO MONTHLY OR ANY HIDDEN FEE*",
  ];
  const elite = [
    "– Logo Design",
    "Unlimited Logo Design Idea(s)",
    "8 Dedicated Designers",
    "Icon Design",
    "All final file formats",
    "– Stationary Design",
    "2 Free Custom Stationary Designs",
    "MS Word Letterhead",
    "Invoice Design",
    "FREE Tri fold Brochure Design",
    "– Website Design",
    "Complete Custom Design & Development",
    "Any One: Dating Portal, Job Portal, Professional Network, Social Network, Medical Portal, Restaurant Portal, Medical Portal, News Portal, Enterprise Portal",
    "Unique, User Friendly, Interactive, Dynamic, High End UI Design",
    "Unlimited Banner Designs",
    "JQuery Slider",
    "Special Hoover Effects",
    "20 Stock Images",
    "Client/User Dashboard Area",
    "Custom Coding",
    "Custom PHP Development",
    "Content Management System (Custom)",
    "Online Appointment/Scheduling/Online Ordering Integration (Optional)",
    "Online Payment Integration (Optional)",
    "Multi Lingual (Optional)",
    "Custom Dynamic Forms (Optional)",
    "User Signup Area",
    "User Login Area",
    "User Dashboard Area",
    "Complete Database Creation",
    "Signup Automated Email Authentication",
    "Web Traffic Analytics Integration",
    "3rd Party API Integrations",
    "Signup Area (For Newsletters, Offers etc.)",
    "Search Bar for Easy Search",
    "Live Feeds of Social Networks integration (Optional)",
    "Search Engine Submission",
    "Module-wise Architecture",
    "Extensive Admin Panel",
    "Award Winning Team of Expert Designers and Developers",
    "Complete Deployment",
    "– Value Added Services",
    "Dedicated Account Manager",
    "100% Satisfaction Guarantee",
    "100% Money Back Guarantee",
    "*NO MONTHLY OR ANY HIDDEN FEE*",
  ];
  const standard = [
    "Virtual Private Server (VPS) Package:",
    "150 GB Storage",
    "8 GB Ram",
    "Disk Space",
    "Unmetered Traffic",
    "Standard SSL Certificate",
    "Automated Malware Scans",
    "1 Domain Name Included",
    "1 Free @Yourdomain.Com Email Accounts",
    "General Features 2 Hours/Month",
    "Text Updating (Client Supplied)",
    "Fixing Broken Links – 2 Hours/Month",
    "Optimization Of Client Supplied Images",
    "24/7 Server And Network Monitoring",
    "Telephone Support",
    "Email Support",
  ];
  const business = [
    "Dedicated Hosting Server Package:",
    "200 GB Storage",
    "12 GB Ram",
    "Unmetered Traffic",
    "Unlimited Websites And Databases",
    "Standard SSL Certificate",
    "1 Domain Name Included",
    "3 Free @Yourdomain.Com Email Accounts",
    "General Features 5 Hours / Month",
    "Text Updating (Client Supplied)",
    "Fixing Broken Links – 5/Month",
    "Optimization Of Client Supplied Images",
    "Setting Up Email",
    "24/7 Support Email/Ticket",
    "WEB",
  ];
  const advanced = [
    "Fully Dedicated Hosting Server Package:",
    "250 GB Storage",
    "16 GB Ram",
    "Unmetered Traffic",
    "Unlimited Websites And Databases",
    "Standard SSL Certificate",
    "2 Domain Names Included (Subject To Availability & Not Being Listed As A Premium Domain)",
    "5 Free @Yourdomain.Com Email Accounts",
    "General Features 10 Hours / Month",
    "Text Updating (Client Supplied)",
    "Fixing Broken Links – 5/Month",
    "Optimization Of Client Supplied Images",
    "Setting Up Email",
    "24/7 Support Email/Ticket",
    "Automated Malware Scans",
    "Firewall Management",
    "WEB GRAVITA PREMIUM PACKAGES",
  ];
  const reviewdata = [
    {
      cont: "“FutureAVO is the expert to reach out to for exceptional logo designs that grab attention. I recently got my brand logo designed by them, and it's absolutely flawless. Would definitely recommend their services.”",
      name: " May Johnson",
      designation: "Business Owner",
    },
    {
      cont: "“As a brand that needed a responsive and interactive website, I wasn't sure who to trust. Fortunately, I came across FutureAVO, and they were super professional through every step. Thank you, guys!”",
      name: " Sarah Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“I've been working with their company for the past four months for different services, and I can say one thing for sure—this is the future. They've transformed my company into a brand in every way.”",
      name: "katty Johnson",
      designation: "CEO",
    },
  ];
  return (
    <>
      <InnerBanner
        image="price-2.webp"
        bgColor="__gradientprice"
        subheading="Web Design & Development"
        heading="innovative digital solutions at reasonable prices"
        cont="Future Avo is the hub for a future where you thrive in a digital world with high-quality solutions and prices that leave you shocked."
        showpoints="hide"
      />
      <section>
        <div className="bg-[#fff] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <SubHeading
                  txt="Wide-Ranging Packages "
                  extclass="text-center"
                  color="#0f2847"
                />
                <HeadingMain
                  txt="That Suits Every Client"
                  extclass="text-center"
                />
                <p className="text-base text-[#202020] font-normal text-center mb-10">
                  Not every good thing has to cost a fortune. That’s why our
                  services are available at amazing pricing plans. Learn more.
                </p>
              </div>
            </div>
            <div className="overflow-hidden block">
              <nav>
                <ul
                  role="tablist"
                  className="relative bg-opacity-60 rounded-lg flex-row bg-transparent p-0 flex justify-center gap-3 flex-wrap md:flex-nowrap mb-10"
                >
                  <li
                    role="tab"
                    className={`flex items-center justify-center text-center h-full relative antialiased select-none cursor-pointer border-2 font-sans font-medium text-base rounded-[50px] w-max py-[0.5rem] px-[0.8rem] hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white ${
                      activeTab === 1
                        ? "text-white border-[#0d3163] bg-[#0d3163]  isactive"
                        : "text-gray-600 border-[#707070] bg-transparent"
                    }`}
                    onClick={() => handleTabClick(1)}
                  >
                    <div className="z-20 text-inherit">SEO</div>
                  </li>
                  <li
                    role="tab"
                    className={`flex items-center justify-center text-center h-full relative antialiased select-none cursor-pointer border-2 font-sans font-medium text-base rounded-[50px] w-max py-[0.5rem] px-[0.8rem] hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white ${
                      activeTab === 2
                        ? "text-white border-[#0d3163] bg-[#0d3163]  isactive"
                        : "text-gray-600 border-[#707070] bg-transparent"
                    }`}
                    onClick={() => handleTabClick(2)}
                  >
                    <div className="z-20 text-inherit">Website</div>
                  </li>
                  <li
                    role="tab"
                    className={`flex items-center justify-center text-center h-full relative antialiased select-none cursor-pointer border-2 font-sans font-medium text-base rounded-[50px] w-max py-[0.5rem] px-[0.8rem] hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white ${
                      activeTab === 3
                        ? "text-white border-[#0d3163] bg-[#0d3163]  isactive"
                        : "text-gray-600 border-[#707070] bg-transparent"
                    }`}
                    onClick={() => handleTabClick(3)}
                  >
                    <div className="z-20 text-inherit">Ecommerce</div>
                  </li>
                  <li
                    role="tab"
                    className={`flex items-center justify-center text-center h-full relative antialiased select-none cursor-pointer border-2 font-sans font-medium text-base rounded-[50px] w-max py-[0.5rem] px-[0.8rem] hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white ${
                      activeTab === 4
                        ? "text-white border-[#0d3163] bg-[#0d3163]  isactive"
                        : "text-gray-600 border-[#707070] bg-transparent"
                    }`}
                    onClick={() => handleTabClick(4)}
                  >
                    <div className="z-20 text-inherit">
                      Social Media Marketing
                    </div>
                  </li>
                  <li
                    role="tab"
                    className={`flex items-center justify-center text-center h-full relative antialiased select-none cursor-pointer border-2 font-sans font-medium text-base rounded-[50px] w-max py-[0.5rem] px-[0.8rem] hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white ${
                      activeTab === 5
                        ? "text-white border-[#0d3163] bg-[#0d3163]  isactive"
                        : "text-gray-600 border-[#707070] bg-transparent"
                    }`}
                    onClick={() => handleTabClick(5)}
                  >
                    <div className="z-20 text-inherit">Logo</div>
                  </li>
                  <li
                    role="tab"
                    className={`flex items-center justify-center text-center h-full relative antialiased select-none cursor-pointer border-2 font-sans font-medium text-base rounded-[50px] w-max py-[0.5rem] px-[0.8rem] hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white ${
                      activeTab === 6
                        ? "text-white border-[#0d3163] bg-[#0d3163]  isactive"
                        : "text-gray-600 border-[#707070] bg-transparent"
                    }`}
                    onClick={() => handleTabClick(6)}
                  >
                    <div className="z-20 text-inherit">Illustration Design</div>
                  </li>
                  <li
                    role="tab"
                    className={`flex items-center justify-center text-center h-full relative antialiased select-none cursor-pointer border-2 font-sans font-medium text-base rounded-[50px] w-max py-[0.5rem] px-[0.8rem] hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white ${
                      activeTab === 7
                        ? "text-white border-[#0d3163] bg-[#0d3163]  isactive"
                        : "text-gray-600 border-[#707070] bg-transparent"
                    }`}
                    onClick={() => handleTabClick(7)}
                  >
                    <div className="z-20 text-inherit">Branding</div>
                  </li>
                  <li
                    role="tab"
                    className={`flex items-center justify-center text-center h-full relative antialiased select-none cursor-pointer border-2 font-sans font-medium text-base rounded-[50px] w-max py-[0.5rem] px-[0.8rem] hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white ${
                      activeTab === 8
                        ? "text-white border-[#0d3163] bg-[#0d3163]  isactive"
                        : "text-gray-600 border-[#707070] bg-transparent"
                    }`}
                    onClick={() => handleTabClick(8)}
                  >
                    <div className="z-20 text-inherit">Video</div>
                  </li>
                  <li
                    role="tab"
                    className={`flex items-center justify-center text-center h-full relative antialiased select-none cursor-pointer border-2 font-sans font-medium text-base rounded-[50px] w-max py-[0.5rem] px-[0.8rem] hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white ${
                      activeTab === 9
                        ? "text-white border-[#0d3163] bg-[#0d3163]  isactive"
                        : "text-gray-600 border-[#707070] bg-transparent"
                    }`}
                    onClick={() => handleTabClick(9)}
                  >
                    <div className="z-20 text-inherit">Copy Writing</div>
                  </li>
                  <li
                    role="tab"
                    className={`flex items-center justify-center text-center h-full relative antialiased select-none cursor-pointer border-2 font-sans font-medium text-base rounded-[50px] w-max py-[0.5rem] px-[0.8rem] hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white ${
                      activeTab === 10
                        ? "text-white border-[#0d3163] bg-[#0d3163]  isactive"
                        : "text-gray-600 border-[#707070] bg-transparent"
                    }`}
                    onClick={() => handleTabClick(10)}
                  >
                    <div className="z-20 text-inherit">Combo Packages</div>
                  </li>
                  <li
                    role="tab"
                    className={`flex items-center justify-center text-center h-full relative antialiased select-none cursor-pointer border-2 font-sans font-medium text-base rounded-[50px] w-max py-[0.5rem] px-[0.8rem] hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white ${
                      activeTab === 11
                        ? "text-white border-[#0d3163] bg-[#0d3163]  isactive"
                        : "text-gray-600 border-[#707070] bg-transparent"
                    }`}
                    onClick={() => handleTabClick(11)}
                  >
                    <div className="z-20 text-inherit">Hosting</div>
                  </li>
                </ul>
              </nav>
              <div className="block w-full relative bg-transparent overflow-hidden">
                {activeTab === 1 && (
                  <div
                    role="tabpanel"
                    className={`w-full h-max text-gray-700 antialiased font-sans text-base font-light leading-relaxed p-0 ${
                      activeTab === 1
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      <PackagesBox
                        packagetitle="seo silver"
                        popular={false}
                        packagelist={seosilver}
                        amount="999"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="seo Gold"
                        popular={true}
                        packagelist={seogold}
                        amount="1,599"
                        decimal="00"
                        icon={GiAirplaneDeparture}
                      />

                      <PackagesBox
                        packagetitle="seo Platinum"
                        popular={false}
                        packagelist={seoplatinum}
                        amount="2,599"
                        decimal="00"
                        icon={BsRocketTakeoff}
                      />
                    </div>
                  </div>
                )}
                {activeTab === 2 && (
                  <div
                    role="tabpanel"
                    className={`w-full h-max text-gray-700 antialiased font-sans text-base font-light leading-relaxed p-0 ${
                      activeTab === 2
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      <PackagesBox
                        packagetitle="elementary website"
                        popular={false}
                        packagelist={elementarywebsite}
                        amount="299"
                        decimal="99"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="collateral classic"
                        popular={false}
                        packagelist={collateralclassic}
                        amount="499"
                        decimal="99"
                        icon={GiAirplaneDeparture}
                      />
                      <PackagesBox
                        packagetitle="exclusive website"
                        popular={true}
                        packagelist={exclusivewebsite}
                        amount="999"
                        decimal="99"
                        icon={BsRocketTakeoff}
                      />
                      <PackagesBox
                        packagetitle="deluxe website"
                        popular={false}
                        packagelist={deluxewebsite}
                        amount="1,499"
                        decimal="99"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="noble website"
                        popular={false}
                        packagelist={noblewebsite}
                        amount="3,199"
                        decimal="99"
                        icon={GiAirplaneDeparture}
                      />
                      <PackagesBox
                        packagetitle="custom login website"
                        popular={false}
                        packagelist={customloginwebsite}
                        amount="7,999"
                        decimal="99"
                        icon={BsRocketTakeoff}
                      />
                    </div>
                  </div>
                )}
                {activeTab === 3 && (
                  <div
                    role="tabpanel"
                    className={`w-full h-max text-gray-700 antialiased font-sans text-base font-light leading-relaxed p-0 ${
                      activeTab === 3
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      <PackagesBox
                        packagetitle="elementary e-commerce"
                        popular={false}
                        packagelist={elementaryecommerce}
                        amount="499"
                        decimal="99"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="exclusive e-commerce"
                        popular={false}
                        packagelist={exclusiveecommerce}
                        amount="999"
                        decimal="99"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="deluxe e-commerce"
                        popular={true}
                        packagelist={deluxeecommerce}
                        amount="1,799"
                        decimal="99"
                        icon={BsRocketTakeoff}
                      />
                      <PackagesBox
                        packagetitle="noble e-commerce"
                        popular={false}
                        packagelist={nobleecommerce}
                        amount="3,199"
                        decimal="99"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="custom e-commerce"
                        popular={false}
                        packagelist={customecommerce}
                        amount="5,999"
                        decimal="99"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="automated/interactive"
                        popular={false}
                        packagelist={automatedinteractive}
                        amount="7,999"
                        decimal="99"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="custom crm/erp portal"
                        popular={false}
                        packagelist={customcrmerpportal}
                        amount="11,999"
                        decimal="99"
                        icon={IoIosPaperPlane}
                      />
                    </div>
                  </div>
                )}
                {activeTab === 4 && (
                  <div
                    role="tabpanel"
                    className={`w-full h-max text-gray-700 antialiased font-sans text-base font-light leading-relaxed p-0 ${
                      activeTab === 4
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      <PackagesBox
                        packagetitle="beginner"
                        popular={false}
                        packagelist={beginner}
                        amount="450"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="growth"
                        popular={true}
                        packagelist={growth}
                        amount="750"
                        decimal="00"
                        icon={BsRocketTakeoff}
                      />
                      <PackagesBox
                        packagetitle="pro"
                        popular={false}
                        packagelist={pro}
                        amount="1,250"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                    </div>
                  </div>
                )}
                {activeTab === 5 && (
                  <div
                    role="tabpanel"
                    className={`w-full h-max text-gray-700 antialiased font-sans text-base font-light leading-relaxed p-0 ${
                      activeTab === 5
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      <PackagesBox
                        packagetitle="ultra basic logo"
                        popular={false}
                        packagelist={ultrabasiclogo}
                        amount="49"
                        decimal="99"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="interactive logo"
                        popular={false}
                        packagelist={interactivelogo}
                        amount="99"
                        decimal="99"
                        icon={GiAirplaneDeparture}
                      />
                      <PackagesBox
                        packagetitle="innovative logo"
                        popular={true}
                        packagelist={innovativelogo}
                        amount="149"
                        decimal="99"
                        icon={BsRocketTakeoff}
                      />
                      <PackagesBox
                        packagetitle="subliminal logo"
                        popular={false}
                        packagelist={subliminallogo}
                        amount="249"
                        decimal="99"
                        icon={IoIosPaperPlane}
                      />
                    </div>
                  </div>
                )}
                {activeTab === 6 && (
                  <div
                    role="tabpanel"
                    className={`w-full h-max text-gray-700 antialiased font-sans text-base font-light leading-relaxed p-0 ${
                      activeTab === 6
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      <PackagesBox
                        packagetitle="business logo"
                        popular={true}
                        packagelist={businesslogo}
                        amount="245"
                        decimal="00"
                        icon={BsRocketTakeoff}
                      />
                      <PackagesBox
                        packagetitle="basic illustrative"
                        popular={false}
                        packagelist={basicillustrative}
                        amount="294"
                        decimal="00"
                        icon={GiAirplaneDeparture}
                      />
                      <PackagesBox
                        packagetitle="startup illustrative"
                        popular={false}
                        packagelist={startupillustrative}
                        amount="394"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="gold logo"
                        popular={false}
                        packagelist={goldlogo}
                        amount="425"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="3d logo package"
                        popular={false}
                        packagelist={d3logopackage}
                        amount="544"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="professional illustrative"
                        popular={false}
                        packagelist={professionalillustrative}
                        amount="594"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                    </div>
                  </div>
                )}
                {activeTab === 7 && (
                  <div
                    role="tabpanel"
                    className={`w-full h-max text-gray-700 antialiased font-sans text-base font-light leading-relaxed p-0 ${
                      activeTab === 7
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      <PackagesBox
                        packagetitle="startup collateral"
                        popular={true}
                        packagelist={startupcollateral}
                        amount="136"
                        decimal="00"
                        icon={BsRocketTakeoff}
                      />
                      <PackagesBox
                        packagetitle="collateral classic"
                        popular={false}
                        packagelist={brandingcollateralclassic}
                        amount="480"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="premium collateral"
                        popular={false}
                        packagelist={premiumcollateral}
                        amount="595"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="unlimited collateral"
                        popular={false}
                        packagelist={unlimitedcollateral}
                        amount="650"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                    </div>
                  </div>
                )}
                {activeTab === 8 && (
                  <div
                    role="tabpanel"
                    className={`w-full h-max text-gray-700 antialiased font-sans text-base font-light leading-relaxed p-0 ${
                      activeTab === 8
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      <PackagesBox
                        packagetitle="special video"
                        popular={false}
                        packagelist={specialvideo}
                        amount="149"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="collateral classic"
                        popular={false}
                        packagelist={videocollateralclassic}
                        amount="399"
                        decimal="00"
                        icon={GiAirplaneDeparture}
                      />
                      <PackagesBox
                        packagetitle="classic video"
                        popular={true}
                        packagelist={classicvideo}
                        amount="799"
                        decimal="00"
                        icon={BsRocketTakeoff}
                      />
                    </div>
                  </div>
                )}
                {activeTab === 9 && (
                  <div
                    role="tabpanel"
                    className={`w-full h-max text-gray-700 antialiased font-sans text-base font-light leading-relaxed p-0 ${
                      activeTab === 9
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      <PackagesBox
                        packagetitle="web content basic"
                        popular={false}
                        packagelist={webcontentbasic}
                        amount="129"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="web content starter"
                        popular={true}
                        packagelist={webcontentstarter}
                        amount="499"
                        decimal="00"
                        icon={BsRocketTakeoff}
                      />
                      <PackagesBox
                        packagetitle="web content professional"
                        popular={false}
                        packagelist={webcontentprofessional}
                        amount="849"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="web content identity"
                        popular={false}
                        packagelist={webcontentidentity}
                        amount="1,849"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                    </div>
                  </div>
                )}
                {activeTab === 10 && (
                  <div
                    role="tabpanel"
                    className={`w-full h-max text-gray-700 antialiased font-sans text-base font-light leading-relaxed p-0 ${
                      activeTab === 10
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      <PackagesBox
                        packagetitle="basic"
                        popular={true}
                        packagelist={basic}
                        amount="499"
                        decimal="00"
                        icon={BsRocketTakeoff}
                      />
                      <PackagesBox
                        packagetitle="startup"
                        popular={false}
                        packagelist={startup}
                        amount="994"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="professional"
                        popular={false}
                        packagelist={professional}
                        amount="1299"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="identity"
                        popular={false}
                        packagelist={identity}
                        amount="1899"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="corporate"
                        popular={false}
                        packagelist={corporate}
                        amount="2299"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="elite"
                        popular={false}
                        packagelist={elite}
                        amount="4499"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                    </div>
                  </div>
                )}
                {activeTab === 11 && (
                  <div
                    role="tabpanel"
                    className={`w-full h-max text-gray-700 antialiased font-sans text-base font-light leading-relaxed p-0 ${
                      activeTab === 11
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      <PackagesBox
                        packagetitle="standard"
                        popular={false}
                        packagelist={standard}
                        amount="799"
                        decimal="00"
                        icon={IoIosPaperPlane}
                      />
                      <PackagesBox
                        packagetitle="business"
                        popular={true}
                        packagelist={business}
                        amount="949"
                        decimal="00"
                        icon={GiAirplaneDeparture}
                      />
                      <PackagesBox
                        packagetitle="advanced"
                        popular={false}
                        packagelist={advanced}
                        amount="1249"
                        decimal="00"
                        icon={BsRocketTakeoff}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReviewSec reviewdata={reviewdata} />
      <Deliveries />
      <PreFooter />
      <FloatingIcons btnColor="bg-[#00b67a]" />
    </>
  );
};

export default page;
