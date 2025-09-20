import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Calendar, 
  TrendingUp, 
  Zap, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin,
  Settings,
  BarChart3,
  Clock,
  Sparkles
} from "lucide-react";
import { AccountCard } from "@/components/AccountCard";
import { ContentPreview } from "@/components/ContentPreview";
import { ScheduleView } from "@/components/ScheduleView";
import { DashboardStats } from "@/components/DashboardStats";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const mockAccounts = [
    {
      id: "1",
      platform: "instagram",
      username: "@fitnessjourney",
      genre: "Fitness & Health",
      followers: "12.5K",
      isActive: true,
      nextPost: "2 hours",
      icon: Instagram,
      color: "instagram"
    },
    {
      id: "2", 
      platform: "twitter",
      username: "@techinsights",
      genre: "Technology",
      followers: "8.2K",
      isActive: true,
      nextPost: "45 mins",
      icon: Twitter,
      color: "twitter"
    },
    {
      id: "3",
      platform: "linkedin",
      username: "Business Growth",
      genre: "Business",
      followers: "5.8K", 
      isActive: false,
      nextPost: "Paused",
      icon: Linkedin,
      color: "linkedin"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SocialAI</h1>
                <p className="text-sm text-muted-foreground">Content Automation</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-border/50 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: "dashboard", label: "Dashboard", icon: BarChart3 },
              { id: "accounts", label: "Accounts", icon: Plus },
              { id: "content", label: "Content", icon: Sparkles },
              { id: "schedule", label: "Schedule", icon: Calendar }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            <DashboardStats />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { platform: "Instagram", action: "Posted workout routine", time: "2 hours ago", engagement: "+127 likes" },
                      { platform: "Twitter", action: "Shared tech article", time: "4 hours ago", engagement: "+43 retweets" },
                      { platform: "LinkedIn", action: "Business tip posted", time: "6 hours ago", engagement: "+89 views" }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <div>
                          <p className="font-medium text-foreground">{activity.platform}</p>
                          <p className="text-sm text-muted-foreground">{activity.action}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-accent font-medium">{activity.engagement}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="h-20 flex-col space-y-2 bg-gradient-primary hover:opacity-90 transition-opacity">
                      <Plus className="w-6 h-6" />
                      <span>Add Account</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col space-y-2 border-accent/50 hover:bg-accent/10">
                      <Sparkles className="w-6 h-6 text-accent" />
                      <span>Generate Content</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col space-y-2 border-primary/50 hover:bg-primary/10">
                      <Calendar className="w-6 h-6 text-primary" />
                      <span>Schedule Post</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex-col space-y-2 border-muted-foreground/50 hover:bg-muted/20">
                      <BarChart3 className="w-6 h-6 text-foreground" />
                      <span>View Analytics</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "accounts" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Connected Accounts</h2>
                <p className="text-muted-foreground">Manage your social media accounts and automation settings</p>
              </div>
              <Button className="bg-gradient-primary hover:opacity-90 gap-2">
                <Plus className="w-4 h-4" />
                Add Account
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockAccounts.map((account) => (
                <AccountCard key={account.id} account={account} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "content" && <ContentPreview />}
        {activeTab === "schedule" && <ScheduleView />}
      </main>

      {/* Backend Notice */}
      <div className="fixed bottom-4 right-4 max-w-sm">
        <Card className="bg-gradient-secondary shadow-elevated border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Backend Features Coming</h4>
                <p className="text-white/80 text-xs mt-1">
                  Connect to Supabase to enable content generation, social media posting, and scheduled automation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;