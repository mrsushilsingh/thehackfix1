import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, PlayCircle } from 'lucide-react';
import { Headphones } from 'lucide-react';
import Head from 'next/head';
export default function HomePage() {
  return (
    <>
    <Head>
    <title>The Hack Fix | Cybersecurity Solutions & Threat Intelligence</title>
    <meta name="description" content="Professional cybersecurity services with integrated threat detection and YouTube tutorials." />
  </Head>

    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Stay Secure 
                <span className="block text-orange-500">with AI-Powered Cybersecurity Solutions</span>
              </h1>
              <p className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Protect your data with encryption ,
                <br></br> AI threat detection & Expert Support.. 🚀 
              </p>

              {/* YouTube Channel Embed */}
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a href="/contact" rel="noopener noreferrer">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 inline-flex items-center justify-center">
                    Get Protected
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-6 lg:col-span-6 flex justify-center lg:justify-end w-full">
              <div className="w-full max-w-lg" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/dEeBl6feETU?si=Uy8zdp8B5TRE_rWe"
                  title="TheHackFix YouTube Channel"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <FeatureCard 
              icon={<Shield className="h-6 w-6" />} 
              title="Advanced Threat Protection" 
              description="AI-driven security solutions to protect your systems from cyber threats." 
            />
            <FeatureCard 
              icon={<Lock className="h-6 w-6" />} 
              title="Data Encryption" 
              description="Industry-leading encryption technologies to keep your data secure." 
            />
            <FeatureCard 
              icon={<PlayCircle className="h-6 w-6" />} 
              title="Cybersecurity Education" 
              description="Stay updated with the latest cybersecurity insights on our YouTube channel." 
            />
            <FeatureCard 
              icon={<Headphones className="h-6 w-6" />} 
              title="24/7 Support" 
              description="Our team is available round the clock to assist with your security needs." 
            />
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Popular Videos</h2>
          <p className="mt-2 text-lg text-gray-600">Discover key insights on cybersecurity through our videos.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <YouTubeVideo videoId="dEeBl6feETU" />
            <YouTubeVideo videoId="m6B84WTEUd4" />
            <YouTubeVideo videoId="q174a4zscwk" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 TheHackFix - All Rights Reserved</p>
        </div>
      </footer>
    </main>
    </>
  );
 
}

const FeatureCard = ({ icon, title, description }) => (
  <div className="mt-10 lg:mt-0 text-center">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mx-auto">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-gray-900 mt-4">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const YouTubeVideo = ({videoId}) => (
  <iframe
    width="100%"
    height="200"
    src={`https://www.youtube.com/embed/${videoId}`}
    title="YouTube video"
    frameBorder="0"
    allowFullScreen
  ></iframe>
);
