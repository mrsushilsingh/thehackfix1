import { Shield, Lock, Bot, Cloud, Terminal, Users, Database, Phone, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Head from 'next/head';

const ServiceCard = ({ icon: Icon, title, description, price }) => (
  <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 flex-grow mb-4">{description}</p>
    <div className="mt-auto">
      <p className="text-lg font-semibold text-orange-600 mb-4">Starting at ${price}</p>
      <Button className="w-full bg-gray-900 hover:bg-gray-800">
        Learn More
      </Button>
    </div>
  </div>
);

const TestimonialCard = ({ name, company, content, rating }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-4 italic">&quot;{content}&quot;</p>
    <div className="font-semibold text-gray-900">{name}</div>
    <div className="text-sm text-gray-500">{company}</div>
  </div>
);

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Comprehensive security assessment to identify vulnerabilities in your systems and applications.",
      price: "1,999"
    },
    {
      icon: Bot,
      title: "AI Threat Detection",
      description: "Advanced AI-powered system for real-time threat detection and response.",
      price: "799/month"
    },
    {
      icon: Lock,
      title: "Security Auditing",
      description: "Detailed analysis of your security posture with actionable recommendations.",
      price: "1,499"
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Secure your cloud infrastructure with our comprehensive protection suite.",
      price: "999/month"
    },
    {
      icon: Terminal,
      title: "Incident Response",
      description: "24/7 emergency response team to handle security incidents and breaches.",
      price: "2,499"
    },
    {
      icon: Database,
      title: "Data Encryption",
      description: "Enterprise-grade encryption solutions to protect your sensitive data.",
      price: "599/month"
    }
  ];

  const benefits = [
    "24/7 Expert Support",
    "AI-Powered Protection",
    "Regular Security Updates",
    "Compliance Management",
    "Threat Intelligence",
    "Incident Response",
    "Security Training",
    "Performance Monitoring"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Solutions Inc.",
      content: "TheHackFix transformed our security infrastructure. Their AI threat detection caught several potential breaches before they could cause damage.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Finance Ltd",
      content: "The team's expertise in cybersecurity is unmatched. Their 24/7 support gives us peace of mind knowing we're always protected.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "E-commerce Plus",
      content: "Implementing their security solutions was seamless. Our systems have never been more secure.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services | TheHackFix - Cybersecurity Solutions</title>
        <meta name="description" content="Comprehensive cybersecurity services including penetration testing, AI threat detection, security auditing, and more." />
      </Head>

      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Enterprise-Grade Security Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your business with our comprehensive cybersecurity services powered by AI and backed by expert support.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
              Schedule a Consultation
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive cybersecurity solutions to protect your business from evolving digital threats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose TheHackFix?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We provide comprehensive security solutions backed by industry experts and cutting-edge technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses worldwide for their cybersecurity needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
            <p className="text-xl text-white mb-8">
              Get started with a free security assessment today.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg">
              Contact Us Now
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}