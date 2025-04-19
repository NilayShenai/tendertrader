import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Shield, 
  Search, 
  BarChart4, 
  Users, 
  CheckCircle, 
  ArrowRight,
  ChevronDown,
  Zap,
  Globe,
  Award
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = ({ children, className, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center mt-12 animate-bounce">
      <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
      <ChevronDown className="h-5 w-5 text-primary" />
    </div>
  );
};

const BackgroundCircle = ({ className }) => {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-10 ${className}`}></div>
  );
};

const Index = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  const categoriesRef = useRef(null);

  useEffect(() => {
    // Hero section fade in
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Stats animation
    gsap.fromTo(
      ".stat-item",
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        }
      }
    );

    // Features cards animation
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 75%",
        }
      }
    );

    // CTA section animation
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        }
      }
    );

    // Categories animation
    gsap.fromTo(
      ".category-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: categoriesRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      {/* Background elements */}
      <BackgroundCircle className="w-[500px] h-[500px] bg-primary/20 top-[-100px] right-[-200px]" />
      <BackgroundCircle className="w-[600px] h-[600px] bg-accent/20 bottom-[20%] left-[-300px]" />
      <BackgroundCircle className="w-[400px] h-[400px] bg-business-800/20 bottom-[10%] right-[10%]" />
      
      <Header />
      
      <main className="flex-grow z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 sm:py-32 relative">
          <div className="container mx-auto px-4" ref={heroRef}>
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 px-3 py-1 bg-primary/10 text-primary border-primary/20">
                B2B Raw Materials Marketplace
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Streamlined Procurement for Your Business
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Connect with verified suppliers, manage tenders, and streamline your raw materials procurement process all in one platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/buyer">
                  <Button size="xl" variant="gradient" className="w-full sm:w-auto shadow-lg hover:shadow-xl animate-pulse">
                    I'm a Buyer
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/seller">
                  <Button size="xl" variant="accent" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
                    I'm a Supplier
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" ref={statsRef}>
                <div className="stat-item">
                  <p className="text-3xl font-bold text-primary">2,500+</p>
                  <p className="text-muted-foreground">Active Tenders</p>
                </div>
                <div className="stat-item">
                  <p className="text-3xl font-bold text-primary">850+</p>
                  <p className="text-muted-foreground">Verified Suppliers</p>
                </div>
                <div className="stat-item">
                  <p className="text-3xl font-bold text-primary">$120M+</p>
                  <p className="text-muted-foreground">Monthly Trading Volume</p>
                </div>
                <div className="stat-item">
                  <p className="text-3xl font-bold text-primary">35+</p>
                  <p className="text-muted-foreground">Countries</p>
                </div>
              </div>
            </div>
            
            <ScrollIndicator />
          </div>
          
          {/* Minimal decorative elements */}
          <div className="hidden md:block absolute left-10 top-1/4">
            <div className="w-1 h-16 bg-accent rounded-full"></div>
            <div className="w-1 h-8 bg-accent/50 rounded-full mt-2"></div>
            <div className="w-1 h-4 bg-accent/30 rounded-full mt-2"></div>
          </div>
          
          <div className="hidden md:block absolute right-10 top-1/3">
            <div className="w-1 h-4 bg-primary/30 rounded-full"></div>
            <div className="w-1 h-8 bg-primary/50 rounded-full mt-2"></div>
            <div className="w-1 h-16 bg-primary rounded-full mt-2"></div>
          </div>
        </section>
        
        {/* Trusted By Section */}
        <section className="py-12 bg-gray-50">
          <AnimatedSection className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60">
                <div className="h-6 w-24 bg-gray-400 rounded animate-pulse"></div>
                <div className="h-8 w-28 bg-gray-400 rounded animate-pulse"></div>
                <div className="h-7 w-32 bg-gray-400 rounded animate-pulse"></div>
                <div className="h-6 w-24 bg-gray-400 rounded animate-pulse"></div>
                <div className="h-8 w-28 bg-gray-400 rounded animate-pulse"></div>
              </div>
            </div>
          </AnimatedSection>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-background relative" ref={featuresRef}>
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-3 py-1 bg-accent/10 text-accent border-accent/20">
                Platform Benefits
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Why Choose TenderTrader?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform streamlines the procurement process for raw materials,
                connecting buyers with verified suppliers in a transparent marketplace.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="feature-card bg-card/50 backdrop-blur-sm hover-scale shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Verified Suppliers</h3>
                  <p className="text-muted-foreground">
                    All suppliers undergo thorough verification to ensure reliability and quality standards.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="feature-card bg-card/50 backdrop-blur-sm hover-scale shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Transparent Bidding</h3>
                  <p className="text-muted-foreground">
                    Clear bidding processes with fair competition and comparable offers in one place.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="feature-card bg-card/50 backdrop-blur-sm hover-scale shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality Audits</h3>
                  <p className="text-muted-foreground">
                    Optional third-party quality inspection services to ensure materials meet specifications.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="feature-card bg-card/50 backdrop-blur-sm hover-scale shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart4 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Market Analytics</h3>
                  <p className="text-muted-foreground">
                    Access market trends, price indices, and procurement analytics to make informed decisions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="feature-card bg-card/50 backdrop-blur-sm hover-scale shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                  <p className="text-muted-foreground">
                    Connect with suppliers and buyers from around the world, expanding your business reach.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="feature-card bg-card/50 backdrop-blur-sm hover-scale shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Streamlined Process</h3>
                  <p className="text-muted-foreground">
                    From tender creation to bid acceptance, our platform simplifies the entire procurement process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="hidden md:block absolute right-0 top-1/4 w-40 h-80">
            <div className="w-full h-full border-r-2 border-t-2 border-accent/20 rounded-tl-3xl"></div>
          </div>
          
          <div className="hidden md:block absolute left-0 bottom-1/4 w-40 h-80">
            <div className="w-full h-full border-l-2 border-b-2 border-primary/20 rounded-br-3xl"></div>
          </div>
        </section>
        
        {/* How it Works */}
        <section className="py-16 bg-muted/30">
          <AnimatedSection className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-3 py-1 bg-primary/10 text-primary border-primary/20">
                Simple Process
              </Badge>
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get started in minutes with our intuitive platform
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting line */}
                <div className="hidden md:block absolute top-16 left-[calc(16.67%+8px)] right-[calc(16.67%+8px)] h-0.5 bg-accent/30"></div>
                
                {/* Step 1 */}
                <AnimatedSection delay={100} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Create Your Account</h3>
                  <p className="text-muted-foreground">
                    Register as a buyer or supplier and complete your company profile
                  </p>
                </AnimatedSection>
                
                {/* Step 2 */}
                <AnimatedSection delay={300} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Post or Browse</h3>
                  <p className="text-muted-foreground">
                    Create tenders or browse available materials based on your needs
                  </p>
                </AnimatedSection>
                
                {/* Step 3 */}
                <AnimatedSection delay={500} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Connect & Trade</h3>
                  <p className="text-muted-foreground">
                    Negotiate terms and complete transactions securely through our platform
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-business-800 to-business-900 text-white" ref={ctaRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Procurement?</h2>
              <p className="text-business-100 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already streamlining their raw materials procurement on our platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/buyer">
                  <Button size="lg" variant="accent" className="w-full sm:w-auto">
                    Get Started as Buyer
                  </Button>
                </Link>
                <Link to="/seller">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10">
                    Register as Supplier
                  </Button>
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex flex-col items-center">
                  <Zap className="h-8 w-8 text-accent mb-2" />
                  <h4 className="font-medium">Fast Onboarding</h4>
                  <p className="text-sm text-business-100">Ready in minutes</p>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="h-8 w-8 text-accent mb-2" />
                  <h4 className="font-medium">Global Access</h4>
                  <p className="text-sm text-business-100">Connect worldwide</p>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="h-8 w-8 text-accent mb-2" />
                  <h4 className="font-medium">Industry Leading</h4>
                  <p className="text-sm text-business-100">Top-rated platform</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Preview */}
        <section className="py-20 bg-background" ref={categoriesRef}>
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-3 py-1 bg-accent/10 text-accent border-accent/20">
                Material Categories
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore raw materials across various industry categories
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link to="/categories/metals" className="category-item">
                <Card className="bg-muted/30 hover:bg-accent/10 transition-colors shadow-sm hover-scale">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">M</span>
                    </div>
                    <h3 className="font-medium">Metals & Mining</h3>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/categories/chemicals" className="category-item">
                <Card className="bg-muted/30 hover:bg-accent/10 transition-colors shadow-sm hover-scale">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">C</span>
                    </div>
                    <h3 className="font-medium">Chemicals</h3>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/categories/agriculture" className="category-item">
                <Card className="bg-muted/30 hover:bg-accent/10 transition-colors shadow-sm hover-scale">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">A</span>
                    </div>
                    <h3 className="font-medium">Agricultural</h3>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/categories/energy" className="category-item">
                <Card className="bg-muted/30 hover:bg-accent/10 transition-colors shadow-sm hover-scale">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">E</span>
                    </div>
                    <h3 className="font-medium">Energy</h3>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/categories/textiles" className="category-item">
                <Card className="bg-muted/30 hover:bg-accent/10 transition-colors shadow-sm hover-scale">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">T</span>
                    </div>
                    <h3 className="font-medium">Textiles</h3>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/categories" className="category-item">
                <Card className="bg-muted/30 hover:bg-accent/10 transition-colors shadow-sm hover-scale">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium">View All</h3>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
