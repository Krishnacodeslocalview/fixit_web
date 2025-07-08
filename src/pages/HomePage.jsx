import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Wrench,
  Shield,
  Clock,
  Users,
  MessageCircle,
  Menu,
  X,
  CheckCircle,
  Star,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import CustomButton from "../components/CustomButton";
import { CustomCard, CustomCardContent } from "../components/CustomCard";
import logo from "../assets/logo.png";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      ".fade-in-up, .fade-in-left, .fade-in-right"
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navigateToPrivacyPolicy = () => {
    navigate("/privacy-policy");
  };

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Home Appliance Repair",
      description:
        "Expert repair services for all your home appliances including refrigerators, washing machines, ACs, and more.",
      features: ["Same Day Service", "Genuine Parts", "1 Year Warranty"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Electronics Repair",
      description:
        "Professional repair services for smartphones, laptops, tablets, and other electronic devices.",
      features: ["Data Recovery", "Screen Replacement", "Quick Turnaround"],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Emergency Service",
      description:
        "24/7 emergency repair services for urgent appliance breakdowns.",
      features: ["24/7 Available", "Quick Response", "Emergency Support"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Technicians",
      description:
        "Certified and experienced technicians providing quality repair services.",
      features: ["Certified Experts", "Background Verified", "Insured Service"],
    },
  ];

  const recentWorks = [
    {
      title: "AC Installation & Repair",
      location: "Belagavi, Banglore",
      description:
        "Complete AC installation and repair service for residential complex",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      rating: 5,
      date: "Dec 2024",
    },
    {
      title: "Washing Machine Repair",
      location: "Belagavi, Banglore",
      description:
        "Front load washing machine repair with genuine parts replacement",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 5,
      date: "Dec 2024",
    },
    {
      title: "Refrigerator Service",
      location: "Belagavi, Banglore",
      description:
        "Double door refrigerator cooling issue resolved with compressor service",
      image:
        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop",
      rating: 5,
      date: "Nov 2024",
    },
    {
      title: "Electrical work",
      location: "Belagavi, Banglore",
      description:
        "Licensed electrical services including wiring, outlet installation, lighting fixtures, and electrical troubleshooting.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/6/314028266/YB/SV/QI/25431077/hotel-electrical-wiring-repairing-service-500x500.jpeg",
      rating: 5,
      date: "Nov 2024",
    },
    {
      title: "Furniture assembly",
      location: "Belagavi, Banglore",
      description:
        "Professional furniture assembly and installation services with precision and care for all types of furniture.",
      image:
        "https://fitmysofany.com/wp-content/uploads/2024/04/Main-furniture-assembly-1.jpg",
      rating: 5,
      date: "Nov 2024",
    },
    {
      title: "Home Improvement",
      location: "Belagavi, Banglore",
      description:
        "Complete home renovation services including kitchen upgrades, bathroom remodeling, and modern design implementations.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      rating: 5,
      date: "Nov 2024",
    },
    {
      title: "Painting Services",
      location: "Belagavi, Banglore",
      description:
        "Professional interior and exterior painting with premium quality paints, color consultation, and expert finishing.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOkRqgqa8S8sY0D4UjjJw3yyJu_5Ax18dDA&s",
      rating: 5,
      date: "Nov 2024",
    },
    {
      title: "Plumbing Solutions",
      location: "Belagavi, Banglore",
      description:
        "Expert plumbing services including leak repairs, pipe installation, fixture replacement, and emergency plumbing.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVcFW8lNjtpqmpycJa7r6kMCwDnlA3ENZixQ&s",
      rating: 5,
      date: "Nov 2024",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Excellent service! My AC was repaired within 2 hours. Very professional team.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "Quick and reliable service. Fixed my washing machine at a very reasonable price.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      location: "Pune",
      text: "Best repair service in the city. Highly recommend Fix It India for all repairs.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full blur-lg"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/3 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-20 right-10 w-28 h-28 bg-primary/8 rounded-full blur-xl"
        />

        {/* Mouse follower */}
        <motion.div
          className="absolute w-6 h-6 bg-primary/20 rounded-full blur-sm pointer-events-none"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50"
      >
        <div className="container mx-auto px-2 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <img
                src={logo}
                alt="Fixit Logo"
                className="w-20 h-20 rounded-lg object-cover"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "work", label: "Our Work" },
                { id: "privacy", label: "Privacy Policy", isLink: true },
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.isLink ? (
                    <button
                      onClick={navigateToPrivacyPolicy}
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-[#E23830] transition-colors"
                    >
                      {item.label}
                    </button>
                  )}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.div
                className="flex items-center space-x-2 text-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Phone className="w-4 h-4 text-[#E23830]" />
                <span>+91 9876543210</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <CustomButton
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                >
                  Contact Us
                </CustomButton>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4 overflow-hidden"
              >
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-left hover:text-[#E23830]"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-left hover:text-[#E23830]"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("work")}
                    className="text-left hover:text-[#E23830]"
                  >
                    Our Work
                  </button>
                  <button
                    onClick={navigateToPrivacyPolicy}
                    className="text-left hover:text-[#E23830]"
                  >
                    Privacy Policy
                  </button>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-[#E23830]" />
                    <span>+91 9876543210</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="text-[#E23830]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                FIX IT
              </motion.span>{" "}
              <motion.span
                className="text-[#E23830]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                INDIA
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Your Trusted Partner for All Repair Services - From Home
              Appliances to Electronics
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <CustomButton
                onClick={() => scrollToSection("services")}
                size="lg"
                className="shadow-lg"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </CustomButton>
              <CustomButton
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="shadow-lg"
              >
                Get Quote
              </CustomButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive repair services for all your needs with
              expert technicians and genuine parts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <CustomCard className="bg-white border-gray-200 hover:border-primary/50 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                  <CustomCardContent className="text-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-primary">{service.icon}</div>
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center space-x-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CustomCardContent>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Works Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recent <span className="text-primary">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Check out our latest completed projects and satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <CustomCard className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 overflow-hidden backdrop-blur-sm">
                  <div className="aspect-video bg-gray-700 relative overflow-hidden">
                    <img
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded text-xs">
                      {work.date}
                    </div>
                  </div>
                  <CustomCardContent>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                        {work.title}
                      </h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(work.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">
                      {work.location}
                    </p>
                    <p className="text-gray-300 text-sm">{work.description}</p>
                  </CustomCardContent>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-primary">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality repairs with guaranteed satisfaction - see our expertise
              in action
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="fade-in-left">
              <div className="space-y-6">
                {[
                  "Expert technicians with 10+ years of experience",
                  "Genuine parts and quality service guarantee",
                  "Quick response time and same-day service",
                  "Affordable pricing with transparent quotes",
                  "24/7 customer support and assistance",
                  "Insured service with complete safety",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-6 h-6 text-[#E23830] flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="fade-in-right">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-[#E23830]  mb-2">
                    5000+
                  </div>
                  <div className="text-gray-600">Happy Customers</div>
                </motion.div>
                <motion.div
                  className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-3xl font-bold text-[#E23830]  mb-2">
                    10+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </motion.div>
                <motion.div
                  className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-3xl font-bold text-[#E23830]  mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">Support</div>
                </motion.div>
                <motion.div
                  className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#E23830]  mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Satisfaction</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our <span className="text-[#E23830]">Customers Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <CustomCard className="bg-white border-gray-200 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CustomCardContent>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.location}
                      </div>
                    </div>
                  </CustomCardContent>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Get In <span className="text-[#E23830]">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to fix your appliances? Contact us now for quick and
              reliable service
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in-left space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-start space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#E23830]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Call Us
                      </h4>
                      <p className="text-red-500 font-medium">+91 9876543210</p>
                      <p className="text-gray-600 text-sm">
                        Available 24/7 for emergency repairs
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#E23830]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Email Us
                      </h4>
                      <p className="text-[#E23830] font-medium">
                        info@fixitindia.com
                      </p>
                      <p className="text-gray-600 text-sm">
                        Get a quote within 2 hours
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#E23830]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Service Areas
                      </h4>
                      <p className="text-[#E23830] font-medium">
                        Mumbai, Delhi, Pune, Bangalore
                      </p>
                      <p className="text-gray-600 text-sm">
                        Expanding to more cities soon
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Linkedin, href: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5 text-red-600" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-right">
              <CustomCard className="bg-white border-gray-200 shadow-lg">
                <CustomCardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                    Send us a Message
                  </h3>
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert(
                        "Thank you for your message! We will get back to you within 2 hours."
                      );
                      e.target.reset();
                    }}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-gray-900"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-gray-900"
                          placeholder="Your Phone"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-gray-900"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required
                      </label>
                      <select
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-gray-900"
                        required
                      >
                        <option value="">Select Service</option>
                        <option value="ac">AC Repair</option>
                        <option value="washing">Washing Machine Repair</option>
                        <option value="refrigerator">
                          Refrigerator Repair
                        </option>
                        <option value="mobile">Mobile/Laptop Repair</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-gray-900 resize-none"
                        placeholder="Describe your issue..."
                        required
                      ></textarea>
                    </div>
                    <CustomButton type="submit" className="w-full py-3 text-lg">
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </CustomButton>
                  </form>
                </CustomCardContent>
              </CustomCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-700 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="fade-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Fixit logo"
                    className="w-20 h-20 rounded-lg object-contain"
                  />
                </div>
                <span className="text-xl font-semibold">Fix It India</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for all repair services. We fix it right,
                we fix it fast!
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <motion.button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-400 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Home
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Services
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    onClick={() => scrollToSection("work")}
                    className="text-gray-400 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Our Work
                  </motion.button>
                </li>
                <li>
                  <button
                    onClick={navigateToPrivacyPolicy}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <motion.button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Contact
                  </motion.button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="text-lg font-semibold text-white mb-4">
                Our Services
              </h4>
              <ul className="space-y-2">
                {[
                  "AC Repair",
                  "Washing Machine",
                  "Refrigerator",
                  "Mobile Repair",
                  "Laptop Repair",
                ].map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h4 className="text-lg font-semibold text-white mb-4">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-gray-400">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-gray-400">info@fixitindia.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-gray-400">Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center fade-in-up">
            <p className="text-gray-400">
              © 2024 Fix It India. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative"
        >
          <MessageCircle className="w-7 h-7 text-white" />
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HomePage;
