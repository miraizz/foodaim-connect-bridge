import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, BarChart3, Users, Bell, Smartphone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Index = () => {
  useDocumentTitle("FoodAim - Smart Food Bank Management System");

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #E9F5DB, #CFE1B9)' }}>
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/34d10014-7924-4265-8769-72a1f10d1e8a.png" 
                alt="FoodAim Logo" 
                className="w-12 h-12"
              />
              <span className="text-xl font-bold text-gray-900">FoodAim</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Food Bank
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800" style={{ backgroundImage: 'linear-gradient(to right, #87986A, #718355)' }}>
                Management System
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionizing food bank operations with IoT integration, real-time inventory tracking, 
              and automated stock management. Reducing food insecurity through smart technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admin-dashboard">
                <Button size="lg" className="bg-green-800 hover:bg-green-900">
                  Admin Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/beneficiary-portal">
                <Button size="lg" variant="outline">
                  Beneficiary Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features & Modules
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive food bank management with IoT integration and real-time monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>User Authentication</CardTitle>
                <CardDescription>
                  Secure login system for administrators and registered beneficiaries with profile management
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>Inventory Management</CardTitle>
                <CardDescription>
                  Complete stock control with add, update, and remove functionalities for food items
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-purple-500 mb-2" />
                <CardTitle>IoT Integration</CardTitle>
                <CardDescription>
                  Arduino Uno and ultrasonic sensor for real-time stock level detection and monitoring
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bell className="h-8 w-8 text-orange-500 mb-2" />
                <CardTitle>Dashboard & Alerts</CardTitle>
                <CardDescription>
                  Live dashboard with visual insights and automated low-stock alerts for administrators
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-indigo-500 mb-2" />
                <CardTitle>Beneficiary Management</CardTitle>
                <CardDescription>
                  Application processing, eligibility verification, and B40 income status tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-teal-500 mb-2" />
                <CardTitle>Application Tracking</CardTitle>
                <CardDescription>
                  Real-time status monitoring for beneficiary applications and approval processes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Abstract */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Project Abstract</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                Food banks are essential in addressing food insecurity, yet many still rely on manual inventory 
                methods prone to inefficiency and error. This project addresses the gap by developing FoodAim, 
                a web-based Food Bank Management System (FBMS) integrated with IoT.
              </p>
              <p className="mb-4">
                The system automates inventory monitoring using an Arduino Uno and ultrasonic sensor to detect 
                stock levels in real time. Administrators receive low-stock alerts via a live dashboard, while 
                beneficiaries can view food availability and apply for assistance online.
              </p>
              <p>
                Key findings show the system effectively reduces manual workload, minimizes stock shortages, 
                and improves user access to food bank services.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#718355' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/lovable-uploads/34d10014-7924-4265-8769-72a1f10d1e8a.png" 
              alt="FoodAim Logo" 
              className="w-12 h-12"
            />
            <span className="text-xl font-bold">FoodAim</span>
          </div>
          <p className="text-gray-200">
            Final Year Project - Smart Food Bank Management System with IoT Integration
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
