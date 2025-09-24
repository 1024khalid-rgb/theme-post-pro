import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InstagramConnect = () => {
  const [connecting, setConnecting] = useState(false);
  const { toast } = useToast();

  const handleInstagramConnect = async () => {
    setConnecting(true);
    
    try {
      // For now, show instructions to set up Instagram OAuth
      toast({
        title: "Instagram Setup Required",
        description: "Instagram OAuth needs to be configured in Supabase. Check the console for setup instructions.",
        variant: "default"
      });
      
      console.log(`
🔧 INSTAGRAM OAUTH SETUP REQUIRED

To connect Instagram accounts, you need to:

1. Go to Meta Developers: https://developers.facebook.com/
2. Create a new Instagram Basic Display app
3. Get your App ID and App Secret
4. In Supabase Dashboard → Authentication → Providers:
   - Enable Instagram provider
   - Add your App ID and App Secret
   - Set redirect URL to: ${window.location.origin}/auth/callback

5. Add these domains to your Instagram app settings:
   - ${window.location.origin}
   - *.supabase.co

Once configured, users can connect their Instagram accounts through OAuth.
      `);
      
    } catch (error) {
      console.error('Error connecting Instagram:', error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to Instagram. Please try again.",
        variant: "destructive"
      });
    } finally {
      setConnecting(false);
    }
  };

  return (
    <Card className="shadow-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Instagram className="w-5 h-5 text-white" />
          </div>
          Connect Instagram
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">Setup Required</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Instagram OAuth needs to be configured in your Supabase project before you can connect accounts.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Once configured, you'll be able to:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• Connect multiple Instagram accounts</li>
              <li>• Schedule and publish posts</li>
              <li>• View account analytics</li>
              <li>• Manage content automatically</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={handleInstagramConnect}
              disabled={connecting}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
            >
              {connecting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Connecting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  Connect Instagram
                </div>
              )}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://developers.facebook.com/', '_blank')}
              className="gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Meta Developers
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstagramConnect;