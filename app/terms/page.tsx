"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, XCircle, Users } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-bold">Terms of Service</h1>
              <p className="text-sm text-muted-foreground">
                Terms and conditions for using our service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
              <Scale className="mr-2 h-4 w-4" />
              Legal Terms
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Terms of Service
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These terms govern your use of our Chinese name generation service. 
              By using our service, you agree to these terms and conditions.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Last updated:</strong> January 31, 2025
            </p>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-3"
          >
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">What You Can Do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Use our service to generate Chinese names, save your favorites, and share your generated names with others.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">What You Cannot Do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Misuse our service, violate others' rights, or use generated names for illegal or harmful purposes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Provide reliable service, protect your privacy, and maintain the quality of our name generation.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                Our Service
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Chinese Name Generator is an AI-powered platform that creates personalized Chinese names based on 
                  your preferences, personality traits, and cultural considerations. Our service includes:
                </p>
                
                <ul className="space-y-2">
                  <li>• <strong>Free Generation:</strong> Limited daily name generation for non-registered users</li>
                  <li>• <strong>Premium Features:</strong> Unlimited generation, personalized matching, and name saving for registered users</li>
                  <li>• <strong>Cultural Education:</strong> Detailed meanings, pronunciations, and cultural context for generated names</li>
                  <li>• <strong>Personal Collections:</strong> Save and manage your favorite generated names</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* User Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Your Responsibilities</h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">Acceptable Use</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Use the service for personal, educational, or cultural purposes</li>
                    <li>• Provide accurate information when creating an account</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Keep your account credentials secure</li>
                    <li>• Report any technical issues or misuse</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-red-700">Prohibited Activities</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Using generated names for fraudulent purposes</li>
                    <li>• Attempting to reverse-engineer our algorithms</li>
                    <li>• Sharing account credentials with others</li>
                    <li>• Using automated tools to bulk-generate names</li>
                    <li>• Violating any applicable laws or regulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Intellectual Property and Generated Names</h3>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Your Rights to Generated Names</h4>
                  <p>
                    You have the right to use any Chinese names generated through our service for personal purposes. 
                    However, please note that traditional Chinese names are part of cultural heritage and cannot be 
                    exclusively owned by any individual.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Our Intellectual Property</h4>
                  <p>
                    The Chinese Name Generator platform, including our AI algorithms, website design, brand elements, 
                    and proprietary technology, remains our intellectual property. You may not copy, modify, or 
                    redistribute our platform or technology.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Cultural Respect</h4>
                  <p>
                    We encourage respectful use of Chinese names and understanding of their cultural significance. 
                    Generated names should be used with appreciation for Chinese culture and traditions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
                Service Availability and Disclaimers
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Service Availability</h4>
                  <p>
                    While we strive to maintain 24/7 service availability, we cannot guarantee uninterrupted access. 
                    We may temporarily suspend service for maintenance, updates, or due to circumstances beyond our control.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">AI-Generated Content</h4>
                  <p>
                    Our Chinese names are generated by AI technology. While we strive for cultural accuracy and appropriateness, 
                    we recommend consulting with native speakers or cultural experts for important use cases.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">No Warranties</h4>
                  <p>
                    Our service is provided "as is" without warranties of any kind. We do not guarantee the suitability 
                    of generated names for any specific purpose or their acceptance in all cultural contexts.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Payment and Subscription Terms</h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-3">Premium Subscriptions</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Monthly and annual subscription options available</li>
                    <li>• Automatic renewal unless cancelled</li>
                    <li>• Access to unlimited name generation</li>
                    <li>• Premium features and personalization</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Cancellation and Refunds</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cancel anytime through your account settings</li>
                    <li>• Refunds processed according to our refund policy</li>
                    <li>• No refunds for partially used subscription periods</li>
                    <li>• Free trial cancellations take effect immediately</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Changes to These Terms</h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update these Terms of Service from time to time to reflect changes in our service, 
                  legal requirements, or business practices. When we make changes:
                </p>
                
                <ul className="space-y-2">
                  <li>• We will update the "Last updated" date at the top of this page</li>
                  <li>• For significant changes, we will notify users via email or service notifications</li>
                  <li>• Continued use of our service after changes constitutes acceptance of new terms</li>
                  <li>• You can always find the current version of our terms on this page</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service or need clarification about your rights and responsibilities, 
              please contact us. We're here to help ensure you understand and can comply with these terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/">
                  Start Using Service
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}