import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Instagram, 
  Twitter, 
  Linkedin,
  Plus,
  Filter,
  MoreVertical,
  CheckCircle,
  AlertCircle,
  Pause,
  Play
} from "lucide-react";

export const ScheduleView = () => {
  const scheduledPosts = [
    {
      id: 1,
      platform: "instagram",
      title: "Morning Workout Routine",
      time: "09:00 AM",
      date: "Today",
      status: "scheduled",
      genre: "Fitness",
      icon: Instagram
    },
    {
      id: 2,
      platform: "twitter", 
      title: "AI Technology Update",
      time: "02:00 PM",
      date: "Today",
      status: "scheduled",
      genre: "Technology",
      icon: Twitter
    },
    {
      id: 3,
      platform: "linkedin",
      title: "Team Productivity Tips",
      time: "10:00 AM",
      date: "Tomorrow",
      status: "scheduled", 
      genre: "Business",
      icon: Linkedin
    },
    {
      id: 4,
      platform: "instagram",
      title: "Healthy Recipe Share",
      time: "06:00 PM",
      date: "Tomorrow",
      status: "paused",
      genre: "Fitness",
      icon: Instagram
    },
    {
      id: 5,
      platform: "twitter",
      title: "Weekly Tech Roundup",
      time: "11:00 AM", 
      date: "Saturday",
      status: "scheduled",
      genre: "Technology",
      icon: Twitter
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Clock className="w-4 h-4 text-primary" />;
      case "posted":
        return <CheckCircle className="w-4 h-4 text-accent" />;
      case "failed":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      case "paused":
        return <Pause className="w-4 h-4 text-muted-foreground" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "primary";
      case "posted":
        return "accent";
      case "failed":
        return "destructive";
      case "paused":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Schedule</h2>
          <p className="text-muted-foreground">Manage your automated posting schedule</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 gap-2">
            <Plus className="w-4 h-4" />
            Schedule Post
          </Button>
        </div>
      </div>

      {/* Timeline View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today */}
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="w-5 h-5 text-primary" />
              Today
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {scheduledPosts
              .filter(post => post.date === "Today")
              .map((post) => {
                const IconComponent = post.icon;
                return (
                  <div key={post.id} className="p-4 rounded-lg border border-border/50 hover:bg-muted/20 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-${post.platform}/10 flex items-center justify-center`}>
                          <IconComponent className={`w-4 h-4 text-${post.platform}`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{post.title}</p>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {post.genre}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(post.status)}
                        <span className="text-sm text-muted-foreground">{post.time}</span>
                      </div>
                      <Badge variant={getStatusColor(post.status) as any} className="text-xs">
                        {post.status}
                      </Badge>
                    </div>
                  </div>
                );
              })}
          </CardContent>
        </Card>

        {/* Tomorrow */}
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="w-5 h-5 text-accent" />
              Tomorrow
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {scheduledPosts
              .filter(post => post.date === "Tomorrow")
              .map((post) => {
                const IconComponent = post.icon;
                return (
                  <div key={post.id} className="p-4 rounded-lg border border-border/50 hover:bg-muted/20 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-${post.platform}/10 flex items-center justify-center`}>
                          <IconComponent className={`w-4 h-4 text-${post.platform}`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{post.title}</p>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {post.genre}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(post.status)}
                        <span className="text-sm text-muted-foreground">{post.time}</span>
                      </div>
                      <Badge variant={getStatusColor(post.status) as any} className="text-xs">
                        {post.status}
                      </Badge>
                    </div>
                  </div>
                );
              })}
          </CardContent>
        </Card>

        {/* This Week */}
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              This Week
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {scheduledPosts
              .filter(post => !["Today", "Tomorrow"].includes(post.date))
              .map((post) => {
                const IconComponent = post.icon;
                return (
                  <div key={post.id} className="p-4 rounded-lg border border-border/50 hover:bg-muted/20 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-${post.platform}/10 flex items-center justify-center`}>
                          <IconComponent className={`w-4 h-4 text-${post.platform}`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{post.title}</p>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {post.genre}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button> 
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(post.status)}
                        <span className="text-sm text-muted-foreground">{post.date}, {post.time}</span>
                      </div>
                      <Badge variant={getStatusColor(post.status) as any} className="text-xs">
                        {post.status}
                      </Badge>
                    </div>
                  </div>
                );
              })}
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card border-border/50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Scheduled</div>
          </CardContent>
        </Card>
        <Card className="shadow-card border-border/50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-accent">8</div>
            <div className="text-sm text-muted-foreground">Posted Today</div>
          </CardContent>
        </Card>
        <Card className="shadow-card border-border/50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-muted-foreground">1</div>
            <div className="text-sm text-muted-foreground">Paused</div>
          </CardContent>
        </Card>
        <Card className="shadow-card border-border/50">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-destructive">0</div>
            <div className="text-sm text-muted-foreground">Failed</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};