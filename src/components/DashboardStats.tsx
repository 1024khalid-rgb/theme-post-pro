import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  Zap,
  ArrowUp,
  ArrowDown
} from "lucide-react";

export const DashboardStats = () => {
  const stats = [
    {
      title: "Total Posts",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: Calendar,
      color: "primary"
    },
    {
      title: "Total Reach",
      value: "89.2K",
      change: "+23%", 
      trend: "up",
      icon: Users,
      color: "accent"
    },
    {
      title: "Engagement Rate",
      value: "7.8%",
      change: "+5%",
      trend: "up", 
      icon: TrendingUp,
      color: "instagram"
    },
    {
      title: "Active Accounts",
      value: "3",
      change: "0",
      trend: "neutral",
      icon: Zap,
      color: "twitter"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="shadow-card border-border/50 hover:shadow-elevated transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`w-8 h-8 rounded-lg bg-${stat.color}/10 flex items-center justify-center`}>
                <IconComponent className={`w-4 h-4 text-${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                {stat.trend !== "neutral" && (
                  <div className={`flex items-center space-x-1 text-sm ${
                    stat.trend === "up" ? "text-accent" : "text-destructive"
                  }`}>
                    {stat.trend === "up" ? (
                      <ArrowUp className="w-3 h-3" />
                    ) : (
                      <ArrowDown className="w-3 h-3" />
                    )}
                    <span className="font-medium">{stat.change}</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.trend === "up" ? "Increased" : stat.trend === "down" ? "Decreased" : "No change"} from last week
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};