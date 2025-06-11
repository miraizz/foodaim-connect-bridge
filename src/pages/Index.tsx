
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, BarChart3, Users, Bell, Smartphone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      {/* Navigation */}
      <nav className="bg-primary shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/3b952623-dc7b-4996-b56e-e4987b5758ef.png" 
                alt="FoodAim Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-secondary">FoodAim</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Smart Food Bank</span>
              <span className="block text-primary">
                Management System
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Revolutionizing food bank operations with IoT integration, real-time inventory tracking, 
              and automated stock management. Reducing food insecurity through smart technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admin-dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground">
                  Admin Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/beneficiary-portal">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Beneficiary Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Features & Modules
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive food bank management with IoT integration and real-time monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-border bg-gradient-to-br from-card to-muted/30">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-secondary">User Authentication</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Secure login system for administrators and registered beneficiaries with profile management
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border bg-gradient-to-br from-card to-accent/20">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-secondary">Inventory Management</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Complete stock control with add, update, and remove functionalities for food items
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border bg-gradient-to-br from-card to-secondary/30">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-secondary">IoT Integration</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Arduino Uno and ultrasonic sensor for real-time stock level detection and monitoring
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border bg-gradient-to-br from-card to-accent/20">
              <CardHeader>
                <Bell className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-secondary">Dashboard & Alerts</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Live dashboard with visual insights and automated low-stock alerts for administrators
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border bg-gradient-to-br from-card to-muted/30">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-secondary">Beneficiary Management</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Application processing, eligibility verification, and B40 income status tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border bg-gradient-to-br from-card to-secondary/30">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-secondary">Application Tracking</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Real-time status monitoring for beneficiary applications and approval processes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Abstract */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">Project Abstract</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
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
      <footer className="bg-primary/20 backdrop-blur-sm text-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/3b952623-dc7b-4996-b56e-e4987b5758ef.png" 
              alt="FoodAim Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-secondary">FoodAim</span>
          </div>
          <p className="text-muted-foreground">
            Final Year Project - Smart Food Bank Management System with IoT Integration
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
