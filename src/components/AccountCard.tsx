import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  MoreVertical, 
  Users, 
  Clock, 
  TrendingUp,
  Settings,
  Pause,
  Play
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Account {
  id: string;
  platform: string;
  username: string;
  genre: string;
  followers: string;
  isActive: boolean;
  nextPost: string;
  icon: LucideIcon;
  color: string;
}

interface AccountCardProps {
  account: Account;
}

export const AccountCard = ({ account }: AccountCardProps) => {
  const IconComponent = account.icon;
  
  return (
    <Card className="shadow-card border-border/50 hover:shadow-elevated transition-all duration-300 group">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-xl bg-${account.color}/10 flex items-center justify-center border border-${account.color}/20`}>
              <IconComponent className={`w-6 h-6 text-${account.color}`} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{account.username}</h3>
              <Badge variant="secondary" className="text-xs">
                {account.genre}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">{account.followers}</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">+12%</span>
          </div>
        </div>

        {/* Next Post */}
        <div className="flex items-center space-x-2 mb-4 p-3 rounded-lg bg-muted/30">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Next post:</span>
          <span className="text-sm font-medium text-foreground">{account.nextPost}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {account.isActive ? <Play className="w-4 h-4 text-accent" /> : <Pause className="w-4 h-4 text-muted-foreground" />}
            <span className="text-sm font-medium text-foreground">
              {account.isActive ? "Active" : "Paused"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Switch checked={account.isActive} />
            <Button variant="outline" size="sm" className="gap-1">
              <Settings className="w-3 h-3" />
              Settings
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};