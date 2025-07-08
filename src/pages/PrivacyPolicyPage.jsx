"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Shield, Lock, Eye, FileText, Users, Phone, Mail, MapPin, Wrench } from "lucide-react"
import CustomButton from "../components/CustomButton"

const PrivacyPolicyPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const fadeElements = document.querySelectorAll(".fade-in-up")
    fadeElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const navigateHome = () => {
    navigate("/")
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
        "Service Information: Details about the services you request, including appliance types, repair descriptions, and service history.",
        "Location Information: With your explicit permission, we collect your location to match you with nearby technicians and provide accurate service delivery.",
        "Payment Information: We collect payment details through secure third-party processors but do not store complete credit card information on our servers.",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "Service Delivery: To connect you with qualified technicians, schedule appointments, and facilitate repair services.",
        "Communication: To send service updates, appointment confirmations, and important notifications about your repairs.",
        "Customer Support: To respond to your queries, resolve issues, and provide technical assistance.",
        "Service Improvement: To analyze usage patterns and improve our platform's functionality and user experience.",
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security & Your Rights",
      content: [
        "Security Measures: We implement industry-standard security practices including encryption, secure servers, and access controls to protect your personal information.",
        "Data Retention: We retain your personal data only as long as necessary to provide our services and comply with legal obligations.",
        "Your Rights: You have the right to access, correct, or delete your personal information. You can also withdraw consent for data processing at any time.",
        "Contact Us: For any privacy-related concerns, please contact our privacy team at privacy@fixitindia.com.",
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
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Fix It India</span>
                </motion.div>
              </button>
            </div>

            <CustomButton variant="outline" className="flex items-center space-x-2" onClick={navigateHome}>
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </CustomButton>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              FixitIndia Platform <span className="text-primary">Privacy Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information when you use our platform and services.
            </p>
            <div className="text-sm text-gray-400">Last updated: January 8, 2025</div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <div className="mb-16 fade-in-up">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                At Fix It India, we are committed to protecting your privacy and ensuring the security of your personal
                information. This privacy policy outlines how we collect, use, store, and protect your data when you use
                our repair services. We believe in transparency and want you to understand exactly how your information
                is handled.
              </p>
            </div>
          </div>

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
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="text-primary">{section.icon}</div>
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
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 leading-relaxed">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Information</h3>
              <p className="text-gray-600 text-center mb-8">
                If you have any questions about this privacy policy or how we handle your personal information, please
                contact us.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div className="text-center" whileHover={{ y: -5 }}>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-primary font-medium">+91 9876543210</p>
                  <p className="text-gray-600 text-sm">Available 24/7</p>
                </motion.div>

                <motion.div className="text-center" whileHover={{ y: -5 }}>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-primary font-medium">privacy@fixitindia.com</p>
                  <p className="text-gray-600 text-sm">Response within 24 hours</p>
                </motion.div>

                <motion.div className="text-center" whileHover={{ y: -5 }}>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-primary font-medium">Mumbai, Maharashtra</p>
                  <p className="text-gray-600 text-sm">India</p>
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
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
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

export default PrivacyPolicyPage
