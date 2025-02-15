import { Shield, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  isPopular,
  priceId 
}) => (
  <div className={`relative flex flex-col p-8 bg-white rounded-2xl shadow-lg ${isPopular ? 'border-2 border-orange-500 scale-105' : ''}`}>
    {isPopular && (
      <div className="absolute top-0 right-0 -mr-1 -mt-1 px-4 py-1 bg-orange-500 text-white text-sm font-medium rounded-bl-xl rounded-tr-xl">
        Most Popular
      </div>
    )}
    
    <div className="flex items-center mb-4">
      <Shield className={`h-8 w-8 ${isPopular ? 'text-orange-500' : 'text-gray-400'}`} />
      <h3 className="ml-2 text-2xl font-bold text-gray-900">{name}</h3>
    </div>
    
    <p className="text-gray-600 mb-6">{description}</p>
    
    <div className="mb-8">
      <p className="text-4xl font-bold text-gray-900">${price}</p>
      <p className="text-gray-600">per user / month</p>
    </div>
    
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className={`h-5 w-5 ${isPopular ? 'text-orange-500' : 'text-gray-400'} mr-2 mt-0.5`} />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    
    <Button 
      className={`w-full ${
        isPopular 
          ? 'bg-orange-500 hover:bg-orange-600' 
          : 'bg-gray-900 hover:bg-gray-800'
      } text-white`}
    >
      Get Started
    </Button>
  </div>
);

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic threat detection",
        "Email support",
        "Security assessment",
        "Up to 2 team members",
        "Basic Data Management",
        "Weekly reports"
      ]
    },
    {
      name: "Professional",
      price: "99",
      description: "Ideal for growing companies",
      isPopular: true,
      features: [
        "Advanced threat detection",
        "24/7 priority support",
        "Detailed security audit",
        "Up to 5 team members",
        "Advanced Data Management",
        "Weekly reports",
        "Cloud security",
        "Incident response"
      ]
    },
    {
      name: "Enterprise",
      price: "199",
      description: "For large organizations requiring maximum security",
      features: [
        "AI-powered threat detection",
        "Dedicated support team",
        "Custom security solutions",
        "Unlimited team members",
        "Military-grade Data Management",
        "Real-time monitoring",
        "Advanced cloud security",
        "Emergency response team",
        "Custom integrations",
        "Daily reports"
      ]
    }
  ];

  return (
    <main className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your security needs. All plans include a 7-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingTier key={index} {...plan} />
          ))}
        </div>
      </div>
    </main>
  );
}