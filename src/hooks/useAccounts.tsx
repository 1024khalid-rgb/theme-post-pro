import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

export interface Account {
  id: string;
  platform: string;
  platform_user_id: string;
  username: string;
  display_name?: string;
  avatar_url?: string;
  follower_count: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchAccounts = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('accounts')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching accounts:', error);
        toast({
          title: "Error",
          description: "Failed to load connected accounts",
          variant: "destructive"
        });
        return;
      }

      setAccounts(data || []);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAccount = async (accountId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('accounts')
        .delete()
        .eq('id', accountId)
        .eq('user_id', user.id);

      if (error) {
        console.error('Error deleting account:', error);
        toast({
          title: "Error",
          description: "Failed to disconnect account",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Account Disconnected",
        description: "Account has been successfully disconnected"
      });

      // Refresh accounts list
      await fetchAccounts();
    } catch (error) {
      console.error('Error deleting account:', error);
      toast({
        title: "Error",
        description: "Failed to disconnect account",
        variant: "destructive"
      });
    }
  };

  const toggleAccountStatus = async (accountId: string, isActive: boolean) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('accounts')
        .update({ is_active: isActive })
        .eq('id', accountId)
        .eq('user_id', user.id);

      if (error) {
        console.error('Error updating account status:', error);
        toast({
          title: "Error",
          description: "Failed to update account status",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: isActive ? "Account Activated" : "Account Paused",
        description: `Account has been ${isActive ? 'activated' : 'paused'}`
      });

      // Refresh accounts list
      await fetchAccounts();
    } catch (error) {
      console.error('Error updating account status:', error);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, [user]);

  return {
    accounts,
    loading,
    fetchAccounts,
    deleteAccount,
    toggleAccountStatus
  };
};