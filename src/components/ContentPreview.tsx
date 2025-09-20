import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Calendar, 
  Heart, 
  MessageCircle, 
  Share, 
  MoreHorizontal,
  Instagram,
  Twitter,
  Linkedin,
  RefreshCw
} from "lucide-react";

export const ContentPreview = () => {
  const [generating, setGenerating] = useState(false);

  const mockContent = [
    {
      id: 1,
      platform: "instagram",
      genre: "Fitness",
      content: "💪 Transform your morning routine with these 5 simple exercises! Start your day with energy and positivity. #MorningWorkout #FitnessMotivation",
      image: "/api/placeholder/300/300",
      scheduledFor: "Today, 9:00 AM",
      icon: Instagram,
      likes: "127",
      comments: "23",
      shares: "8"
    },
    {
      id: 2,
      platform: "twitter", 
      genre: "Technology",
      content: "🚀 The future of AI is here! New breakthrough in machine learning algorithms shows 40% improvement in processing speed. What are your thoughts? #AI #Tech",
      scheduledFor: "Today, 2:00 PM",
      icon: Twitter,
      likes: "89",
      comments: "12",
      shares: "34"
    },
    {
      id: 3,
      platform: "linkedin",
      genre: "Business",
      content: "📈 5 key strategies that helped me increase team productivity by 60% this quarter. Leadership isn't about managing people, it's about inspiring them to achieve their best.",
      scheduledFor: "Tomorrow, 10:00 AM", 
      icon: Linkedin,
      likes: "156",
      comments: "28",
      shares: "19"
    }
  ];

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Content Preview</h2>
          <p className="text-muted-foreground">AI-generated content ready for posting</p>
        </div>
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            onClick={handleGenerate} 
            disabled={generating}
            className="gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${generating ? 'animate-spin' : ''}`} />
            {generating ? 'Generating...' : 'Generate New'}
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 gap-2">
            <Sparkles className="w-4 h-4" />
            Bulk Generate
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockContent.map((post) => {
          const IconComponent = post.icon;
          return (
            <Card key={post.id} className="shadow-card border-border/50 hover:shadow-elevated transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-lg bg-${post.platform}/10 flex items-center justify-center`}>
                      <IconComponent className={`w-4 h-4 text-${post.platform}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {post.genre}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Post Content */}
                <div className="p-4 rounded-lg bg-muted/20 border border-border/30">
                  <p className="text-sm text-foreground leading-relaxed">
                    {post.content}
                  </p>
                  {post.image && (
                    <div className="mt-3 rounded-lg overflow-hidden">
                      <div className="w-full h-32 bg-gradient-secondary rounded-lg flex items-center justify-center">
                        <span className="text-white/80 text-sm">Generated Image</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Engagement Preview */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share className="w-4 h-4" />
                      <span>{post.shares}</span>
                    </div>
                  </div>
                </div>

                {/* Schedule Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{post.scheduledFor}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      Schedule
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Generate More */}
      <Card className="shadow-card border-border/50 border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 rounded-full bg-gradient-primary/10 flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Need more content?</h3>
          <p className="text-muted-foreground text-center mb-4 max-w-md">
            AI will automatically generate fresh content based on your account themes and trending topics
          </p>
          <Button 
            onClick={handleGenerate} 
            disabled={generating}
            className="bg-gradient-primary hover:opacity-90"
          >
            {generating ? 'Generating...' : 'Generate Content'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};