"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck, Globe } from "lucide-react";

export default function PrivacyPage() {
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
              <h1 className="text-xl font-bold">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground">
                How we protect and handle your data
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
              <Shield className="mr-2 h-4 w-4" />
              Your Privacy Matters
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Privacy Policy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are committed to protecting your privacy and being transparent about how we collect, 
              use, and protect your personal information when you use our Chinese name generation service.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Last updated:</strong> January 31, 2025
            </p>
          </motion.div>

          {/* Privacy Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6 md:grid-cols-3"
          >
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We clearly explain what data we collect and how we use it to provide you with the best Chinese name generation experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Your personal information is protected with industry-standard security measures and encryption protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  You have full control over your data, including the ability to access, update, or delete your information.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Database className="h-6 w-6 text-primary" />
                Information We Collect
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Information You Provide</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Personal Details:</strong> English name, gender, birth year (optional)</li>
                    <li>• <strong>Preferences:</strong> Personality traits and name preferences you share</li>
                    <li>• <strong>Account Information:</strong> Email address when you create an account</li>
                    <li>• <strong>Generated Names:</strong> Chinese names you generate and save to your profile</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Information We Collect Automatically</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Usage Data:</strong> How you interact with our service</li>
                    <li>• <strong>Device Information:</strong> Browser type, operating system, IP address</li>
                    <li>• <strong>Cookies:</strong> To improve your experience and remember your preferences</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How We Use Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">How We Use Your Information</h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-3">Service Provision</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Generate personalized Chinese names</li>
                    <li>• Save your generated names and preferences</li>
                    <li>• Provide customer support</li>
                    <li>• Process payments for premium features</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Service Improvement</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Analyze service usage to improve functionality</li>
                    <li>• Develop new features and capabilities</li>
                    <li>• Ensure service security and prevent fraud</li>
                    <li>• Send service-related communications</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Sharing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                Information Sharing
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>We do not sell your personal information.</strong> We may share your information only in these limited circumstances:
                </p>
                
                <ul className="space-y-2">
                  <li>• <strong>Service Providers:</strong> Trusted third parties who help us operate our service (payment processing, hosting, analytics)</li>
                  <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li>• <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  <li>• <strong>With Your Consent:</strong> When you explicitly agree to share information</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Your Rights and Choices</h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-3">Access and Control</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Access your personal information</li>
                    <li>• Update or correct your data</li>
                    <li>• Delete your account and data</li>
                    <li>• Download your data</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Communication Preferences</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Opt out of marketing communications</li>
                    <li>• Manage cookie preferences</li>
                    <li>• Control data processing</li>
                    <li>• Request data portability</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="space-y-8"
          >
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Data Security and Retention</h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Security Measures</h4>
                    <ul className="space-y-1">
                      <li>• Encryption in transit and at rest</li>
                      <li>• Regular security audits</li>
                      <li>• Access controls and monitoring</li>
                      <li>• Secure data centers</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Data Retention</h4>
                    <ul className="space-y-1">
                      <li>• Account data: Until account deletion</li>
                      <li>• Generated names: Until you delete them</li>
                      <li>• Usage logs: Up to 2 years</li>
                      <li>• Marketing data: Until opt-out</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us. We're here to help and ensure your privacy is protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}