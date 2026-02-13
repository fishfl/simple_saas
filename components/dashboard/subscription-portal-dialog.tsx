"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, CreditCard, Receipt, Settings } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";

export function SubscriptionPortalDialog() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasCustomer, setHasCustomer] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const checkCustomer = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) return;

        const { data: customer } = await supabase
          .from("customers")
          .select("creem_customer_id")
          .eq("user_id", user.id)
          .single();

        // Only show portal if they have a real Creem ID (starts with cust_)
        // Users with 'auto_' IDs are free users who haven't purchased yet
        setHasCustomer(!!customer?.creem_customer_id?.startsWith('cust_'));
      } catch (err) {
        console.error("Error checking customer:", err);
        setHasCustomer(false);
      }
    };

    checkCustomer();
  }, []);

  const handleManageSubscription = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/creem/customer-portal");
      if (!response.ok) {
        throw new Error("Failed to get portal link");
      }

      const { customer_portal_link } = await response.json();
      window.open(customer_portal_link, "_blank");
    } catch (err) {
      console.error("Error getting portal link:", err);
      setError("Failed to access subscription portal. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!hasCustomer) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          Manage Plan
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscription Management</DialogTitle>
          <DialogDescription>
            Access your subscription settings in our secure customer portal.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-6">
            {/* Portal Features */}
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Payment Methods</p>
                  <p className="text-sm text-muted-foreground">
                    Update your billing information
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Receipt className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Billing History</p>
                  <p className="text-sm text-muted-foreground">
                    View past invoices and payments
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Plan Settings</p>
                  <p className="text-sm text-muted-foreground">
                    Change or cancel your subscription
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
            {error}
          </div>
        )}

        <DialogFooter className="flex space-x-2 sm:space-x-0">
          <Button onClick={handleManageSubscription} disabled={isLoading}>
            {isLoading ? "Redirecting..." : "Continue to Portal"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
