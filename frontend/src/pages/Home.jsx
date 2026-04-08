import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Star, Dumbbell, Users, Target, Award, Menu, X, ChevronRight, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const services = [
    {
      icon: Dumbbell,
      title: 'Personal Training',
      description: 'One-on-one customized workout plans with expert trainers dedicated to your fitness goals.'
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Energetic group sessions including yoga, aerobics, and HIIT training for all fitness levels.'
    },
    {
      icon: Target,
      title: 'Weight Training',
      description: 'Professional guidance for strength building with state-of-the-art equipment and proper form.'
    },
    {
      icon: Award,
      title: 'Cardio Zone',
      description: 'Modern cardio equipment including treadmills, ellipticals, and cycling stations.'
    },
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Comprehensive strength programs designed to build muscle and improve overall fitness.'
    },
    {
      icon: Target,
      title: 'Body Transformation',
      description: 'Complete transformation programs with diet plans and intensive training schedules.'
    }
  ];

  const reviews = [
    {
      name: 'Rahul S',
      rating: 5,
      text: 'Best gym in BTM Layout! The trainers are very dedicated and the equipment is top-notch. Been a member for 2 years and never had a bad experience.'
    },
    {
      name: 'Priya K',
      rating: 5,
      text: 'Amazing training experience. The personal trainers are knowledgeable and really help you hit your fitness goals. Highly recommend Sinew Fitness!'
    },
    {
      name: 'Arun M',
      rating: 5,
      text: 'Great environment, clean facilities, and excellent coaching. The membership fees are very reasonable for the quality you get.'
    },
    {
      name: 'Deepika R',
      rating: 5,
      text: 'Sinew Fitness has transformed my fitness journey. 4.9 stars is well deserved. Staff is friendly and always motivating.'
    },
    {
      name: 'Kiran B',
      rating: 5,
      text: 'The best gym I\'ve been to in Bangalore. Excellent equipment, experienced trainers, and a great community of fitness enthusiasts.'
    },
    {
      name: 'Sneha V',
      rating: 5,
      text: 'Love the early morning sessions here. The trainers push you just the right amount. The gym is well-maintained and hygienic.'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1771586791190-97ed536c54af',
    'https://images.unsplash.com/photo-1744551472726-24a3eb12e82a',
    'https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3',
    'https://images.pexels.com/photos/33966785/pexels-photo-33966785.jpeg',
    'https://images.unsplash.com/photo-1674834727206-4bc272bfd8da',
    'https://images.pexels.com/photos/13863730/pexels-photo-13863730.jpeg'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Sinew Fitness</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Gallery
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Contact
              </button>
              <a href="tel:+919742058859">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Services
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Gallery
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Contact
                </button>
                <a href="tel:+919742058859" className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                <span className="text-emerald-900 font-semibold">4.9 Rating • 422+ Reviews</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Body,
                <span className="block text-emerald-600">Transform Your Life</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                BTM Layout's premier fitness center with state-of-the-art equipment, expert trainers, and a community dedicated to helping you achieve your fitness goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919742058859">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91 97420 58859
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6 transition-all duration-300"
                  onClick={() => scrollToSection('services')}
                >
                  Explore Services
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-emerald-600">422+</div>
                  <div className="text-sm text-gray-600 mt-1">Happy Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">10+</div>
                  <div className="text-sm text-gray-600 mt-1">Expert Trainers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">7</div>
                  <div className="text-sm text-gray-600 mt-1">Days Open</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1771586791190-97ed536c54af" 
                  alt="Modern gym facility"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Top Rated</div>
                    <div className="text-sm text-gray-600">in BTM Layout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1744551472726-24a3eb12e82a" 
                alt="Training session"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-4">About Us</Badge>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Your Fitness Journey Starts Here
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Located in the heart of BTM 1st Stage, Sinew Fitness has been transforming lives through fitness for years. We're not just a gym—we're a community of passionate individuals committed to helping you achieve your health and fitness goals.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With our 4.9-star rating and over 422 satisfied members, we've established ourselves as BTM Layout's premier fitness destination. Our experienced trainers, state-of-the-art equipment, and personalized approach ensure that every member gets the support they need to succeed.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Expert Trainers</div>
                    <div className="text-sm text-gray-600">Certified professionals</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Top Equipment</div>
                    <div className="text-sm text-gray-600">State-of-the-art gear</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-4">Our Services</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Fitness Solutions
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From personalized training to group classes, we offer everything you need to reach your fitness goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200 bg-white"
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a href="tel:+919742058859">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call to Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-4">Gallery</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Facility
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at our state-of-the-art equipment and modern training environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img 
                  src={image}
                  alt={`Gym facility ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-4">Testimonials</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Members Say
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it—hear from our satisfied members who've transformed their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border-2 hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-emerald-500 fill-emerald-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{review.text}"
                  </p>
                  <div className="font-semibold text-gray-900">
                    {review.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-4">Contact Us</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Us Today
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your fitness journey? Get in touch with us or visit our gym in BTM Layout.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-2 hover:border-emerald-200 transition-colors duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                      <a href="tel:+919742058859" className="text-emerald-600 hover:text-emerald-700 font-medium">
                        +91 97420 58859
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-emerald-200 transition-colors duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                      <p className="text-gray-600 mb-3">
                        88/26, 1st Floor, Tavarekere Main Rd,<br />
                        BTM 1st Stage, Bengaluru,<br />
                        Karnataka 560029
                      </p>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Sinew+Fitness+BTM+Bangalore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
                      >
                        Get Directions
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-emerald-200 transition-colors duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                      <p className="text-gray-600">
                        Open Daily<br />
                        Morning & Evening Sessions Available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-12 text-white shadow-2xl">
              <h4 className="text-3xl font-bold mb-6">
                Start Your Transformation Today
              </h4>
              <p className="text-emerald-50 text-lg mb-8 leading-relaxed">
                Join over 422 satisfied members who have achieved their fitness goals with us. Call now to schedule your free consultation and facility tour.
              </p>
              <div className="space-y-4">
                <a href="tel:+919742058859" className="block">
                  <Button size="lg" className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91 97420 58859
                  </Button>
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Sinew+Fitness+BTM+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button size="lg" variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10 font-semibold">
                    <MapPin className="w-5 h-5 mr-2" />
                    Visit Our Gym
                  </Button>
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-emerald-500">
                <div className="flex items-center space-x-2 text-emerald-50">
                  <Star className="w-5 h-5 fill-white text-white" />
                  <span className="font-semibold">4.9 Rating on Google Maps (422+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-xl font-bold">Sinew Fitness</h5>
              </div>
              <p className="text-gray-400 leading-relaxed">
                BTM Layout's premier fitness center dedicated to transforming lives through health and wellness.
              </p>
            </div>

            <div>
              <h6 className="font-semibold mb-4 text-lg">Quick Links</h6>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-emerald-400 transition-colors">
                  About Us
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-emerald-400 transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('gallery')} className="block text-gray-400 hover:text-emerald-400 transition-colors">
                  Gallery
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="block text-gray-400 hover:text-emerald-400 transition-colors">
                  Testimonials
                </button>
              </div>
            </div>

            <div>
              <h6 className="font-semibold mb-4 text-lg">Services</h6>
              <div className="space-y-3 text-gray-400">
                <p>Personal Training</p>
                <p>Group Classes</p>
                <p>Weight Training</p>
                <p>Body Transformation</p>
              </div>
            </div>

            <div>
              <h6 className="font-semibold mb-4 text-lg">Contact</h6>
              <div className="space-y-3 text-gray-400">
                <a href="tel:+919742058859" className="flex items-center space-x-2 hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 97420 58859</span>
                </a>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>88/26, 1st Floor, Tavarekere Main Rd, BTM 1st Stage</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Sinew Fitness. All rights reserved. Built with dedication to your health and fitness.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;