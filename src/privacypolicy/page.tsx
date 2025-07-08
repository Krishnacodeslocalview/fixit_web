"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowLeft, Shield, Lock, Eye, FileText, Users, Phone, Mail, MapPin, Wrench } from "lucide-react"

// Custom Button Component (same as main page)
const CustomButton = ({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
  type = "button",
  disabled = false,
  ...props
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  [key: string]: any
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    default:
      "bg-gradient-to-r from-[#E23830] to-[#E23830]/80 hover:from-[#E23830]/80 hover:to-[#E23830] text-white focus:ring-[#E23830]/50",
    outline: "border-2 border-[#E23830] text-[#E23830] hover:bg-[#E23830] hover:text-white focus:ring-[#E23830]/50",
    ghost: "text-[#E23830] hover:bg-[#E23830]/10 focus:ring-[#E23830]/50",
  }

  const sizes = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-6 py-3 text-base",
  }

  const navigateHome = () => {
    window.location.href = "/"
  }

  return (
    <motion.button
      type={type}
      onClick={onClick || navigateHome}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default function PrivacyPolicyPage() {
  const navigateHome = () => {
    window.location.href = "/"
  }

  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Introduction and Scope",
      content: [
        'Indiafix solutions pvt. ltd. ("FixitIndia", "We", "Us", "Our") is committed to protecting the privacy of its users. This Privacy Policy ("Policy") describes our practices regarding the collection, use, storage, sharing, and protection of your personal information when you use our website www.fixitindia.com, our mobile applications for Android and iOS (collectively, the "Platform"), and the services offered through them.',
        'This Policy is an electronic record under the Information Technology Act, 2000 and is published in compliance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules"), and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 ("Intermediary Guidelines"). It is also designed to be compliant with the principles of India\'s Digital Personal Data Protection Act, 2023 ("DPDPA").',
        "This Policy is incorporated into and is subject to our General Terms and Conditions. By accessing, downloading, or using the Platform, you signify your agreement to the terms of this Policy. If you do not agree with this Policy, please do not use or access the Platform.",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Your Consent",
      content: [
        'By using our Platform, you expressly consent to our collection, use, storage, disclosure, and sharing of your personal information as described in this Policy. We will process your personal data on the basis of your consent, which must be "free, specific, informed, unconditional, and unambiguous with a clear affirmative action" for each specified purpose of processing.',
        "This means we will not bundle consent requests; for instance, a separate, explicit opt-in will be required for marketing communications. You may choose not to provide certain information, but this may limit your ability to use our Services.",
      ],
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "The Information We Collect",
      content: [
        'As a "Data Fiduciary" under the DPDPA, we determine the purpose and means of processing your data. We collect the following types of information to provide and improve our services.',
        "Account & Contact Information: When you create an account, we collect your full name, email address, mobile phone number, password, and physical address.",
        "Handyman Partner Onboarding Information: In addition to the above, we collect information from our Handyman Partners, including government-issued identification (like Aadhaar Card, PAN Card), profile photograph, bank account details for payouts, and information about your skills and professional experience.",
        "Background Check Information: For Handyman Partners, we may collect information for background checks, such as criminal records, where permitted by law, through authorized third-party verification partners.",
        "User-Generated Content: We collect information you post on our Platform, such as ratings, reviews, photographs, and communications with other users or with our support team.",
        "Location Information: With your explicit permission through your device's operating system, we collect your real-time location to facilitate service delivery, match you with nearby partners, and enhance platform safety.",
        "Transactional and Financial Information: We collect details about the services you book, your order history, and payment information. To process payments, we use secure third-party payment gateways and collect tokenized card information, but we do not store your full credit/debit card numbers.",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "How and Why We Use Your Information",
      content: [
        "To Provide and Improve Our Services: To create and manage your account, match Users with Handyman Partners, facilitate service bookings, process payments, and personalize your experience.",
        "For Safety and Security: To verify the identity of our users and partners, conduct background checks, prevent fraud and abuse, and investigate safety incidents.",
        "To Enable Communication: To facilitate communication between Users and Handyman Partners for service delivery, often using number masking technology to protect privacy.",
        "For Customer Support: To respond to your queries, resolve disputes, and troubleshoot problems.",
        "For Research, Development, and Analytics: To analyze usage trends, improve our Platform's functionality, and develop new features. We often use aggregated and anonymized data for these purposes.",
        "For Marketing and Promotions: To send you information about our services, offers, and promotions, but only if you have given your explicit, opt-in consent.",
        "To Comply with Legal Obligations: To respond to notices, court orders, or requests from law enforcement and government agencies as required by applicable law.",
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "How We Share and Disclose Your Information",
      content: [
        "Between Users and Handyman Partners: To enable the service, we share the User's name, service address, and job details with the assigned Handyman Partner. The User will see the Partner's name, photograph, rating, and real-time location. We may use number masking to facilitate calls without sharing direct phone numbers.",
        "With Third-Party Service Providers: We engage trusted third parties to perform functions on our behalf, such as payment processing, cloud hosting (e.g., Amazon Web Services), background verification, and data analytics. These third parties are contractually obligated to protect your data and are restricted from using it for any other purpose.",
        "For Legal Reasons: We may disclose your information if required by law or in the good faith belief that such disclosure is necessary to comply with a legal process, enforce our terms, or protect the rights, property, or safety of FixitIndia, our users, or the public.",
        "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership or use of your personal information.",
      ],
    },
  ]

  const additionalSections = [
    {
      title: "Data Retention and Security",
      content: [
        "Security Measures: We implement reasonable security practices and procedures, including encryption (like SSL) and access controls, to protect your personal data from unauthorized access, loss, or misuse. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee its absolute security.",
        "Data Retention: We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected and to comply with our legal and regulatory obligations. When your data is no longer needed, it will be securely deleted or anonymized.",
      ],
    },
    {
      title: "Your Rights and Choices (Data Principal Rights)",
      content: [
        "Right to Access: You have the right to know what personal data we hold about you and how it is processed.",
        "Right to Correction and Erasure: You can request correction of inaccurate data or deletion of your personal information.",
        "Right to Withdraw Consent: You can withdraw your consent for data processing at any time.",
        "Marketing Opt-Out: You can opt-out of marketing communications through your account settings or by contacting us.",
        "Right to Grievance Redressal: You can raise concerns about data processing through our grievance mechanism.",
      ],
    },
    {
      title: "Third-Party Links",
      content: [
        "Our Platform may contain links to other websites. This Policy does not apply to those sites, and we are not responsible for their privacy practices. We encourage you to read the privacy policies of any third-party sites you visit.",
      ],
    },
    {
      title: "Children's Privacy",
      content: [
        "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information.",
      ],
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        "We may occasionally update this Policy. When we do, we will post the changes on this page and notify you through the Platform or via email. Your continued use of our Services after such a notice constitutes your consent to the updated Policy.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={navigateHome}>
                <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#E23830] to-[#E23830]/80 rounded-lg flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Fix It India</span>
                </motion.div>
              </button>
            </div>

            <CustomButton variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </CustomButton>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#E23830]/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#E23830]/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="w-20 h-20 bg-[#E23830]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-[#E23830]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              FixitIndia Platform <span className="text-[#E23830]">Privacy Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information when you use our platform and services.
            </p>
            <div className="text-sm text-gray-400">Last updated: June 14, 2025</div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                At Fix It India, we are committed to protecting your privacy and ensuring the security of your personal
                information. This privacy policy outlines how we collect, use, store, and protect your data when you use
                our repair services. We believe in transparency and want you to understand exactly how your information
                is handled.
              </p>
            </div>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-[#E23830]/10 rounded-lg flex items-center justify-center">
                    <div className="text-[#E23830]">{section.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>

                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-[#E23830] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 leading-relaxed">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Policy Sections */}
          {additionalSections.map((section, index) => (
            <motion.div
              key={`additional-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (sections.length + index) * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mt-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (sections.length + index) * 0.1 + itemIndex * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-[#E23830] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-[#E23830]/5 to-[#E23830]/10 rounded-2xl p-8 border border-[#E23830]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Grievance Officer and Contact Information
              </h3>
              <p className="text-gray-600 text-center mb-8">
                If you have any questions about this privacy policy or how we handle your personal information, please
                contact our Grievance Officer. We will acknowledge your complaint within 48 hours and resolve it within
                one month.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div className="text-center" whileHover={{ y: -5 }}>
                  <div className="w-12 h-12 bg-[#E23830]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-[#E23830]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-[#E23830] font-medium">+91 9876543210</p>
                  <p className="text-gray-600 text-sm">Available 24/7</p>
                </motion.div>

                <motion.div className="text-center" whileHover={{ y: -5 }}>
                  <div className="w-12 h-12 bg-[#E23830]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-[#E23830]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Grievance Officer</h4>
                  <p className="text-[#E23830] font-medium">Harshit Reddy Boreddy</p>
                  <p className="text-gray-600 text-sm">privacy@fixitindia.com</p>
                </motion.div>

                <motion.div className="text-center" whileHover={{ y: -5 }}>
                  <div className="w-12 h-12 bg-[#E23830]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-[#E23830]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-[#E23830] font-medium">IRISE CENTER, BIT Campus</p>
                  <p className="text-gray-600 text-sm">Shindoli Road, Belagavi -591124, Karnataka, India</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Updates Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. When we make changes, we will update the "Last updated" date
                at the top of this policy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We encourage you to review this policy periodically to stay informed about how we are protecting your
                information. Your continued use of our services after any changes indicates your acceptance of the
                updated policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#E23830] to-[#E23830]/80 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Fix It India</span>
            </div>
            <p className="text-gray-400 mb-4">Your trusted partner for all repair services</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span>© 2024 Fix It India. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
