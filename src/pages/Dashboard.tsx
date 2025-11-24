import { useState, useEffect } from 'react';
import { fetchUpcomingEvents } from '@/services/dataService';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Hash, Calendar, MapPin, Clock, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DashboardProps {
  user: any;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  category: string;
}

const Dashboard = ({ user }: DashboardProps) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const eventsData = await fetchUpcomingEvents();
        setEvents(eventsData);
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to load events. Please try again later.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, [toast]);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Competition: 'bg-primary/20 text-primary border-primary/30',
      Workshop: 'bg-accent/20 text-accent border-accent/30',
      Hackathon: 'bg-primary-glow/20 text-primary-glow border-primary-glow/30',
      Networking: 'bg-accent-glow/20 text-accent-glow border-accent-glow/30',
      Talk: 'bg-primary/20 text-primary border-primary/30',
    };
    return colors[category] || 'bg-muted/20 text-muted-foreground border-muted/30';
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground">Here's what's happening in E-Cell</p>
        </div>

        {/* Profile Card */}
        <Card className="glass-card p-6 rounded-2xl border border-white/20">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{user.name}</h2>
                <p className="text-sm text-muted-foreground">E-Cell Member</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Hash className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">{user.rollNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Member ID: {user.id}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Upcoming Events */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold gradient-text">Upcoming Events</h2>
            <Badge className="bg-primary/20 text-primary border-primary/30">
              {events.length} Events
            </Badge>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="glass-card p-6 rounded-2xl border border-white/20 animate-pulse">
                  <div className="space-y-4">
                    <div className="h-6 bg-white/10 rounded" />
                    <div className="h-4 bg-white/10 rounded w-2/3" />
                    <div className="h-20 bg-white/10 rounded" />
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card
                  key={event.id}
                  className="glass-card p-6 rounded-2xl border border-white/20 hover:scale-105 transition-transform duration-300 space-y-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-foreground flex-1">{event.title}</h3>
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{event.venue}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
