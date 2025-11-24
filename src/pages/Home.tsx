import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Rocket, Users, Award } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/20 mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Official E-Cell Member Portal</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Igniting Ideas,</span>
            <br />
            <span className="gradient-text">Nurturing Ventures</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Fostering a spirit of entrepreneurship, innovation, and leadership among students. 
            Join us in building the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              onClick={() => navigate('/register')}
              className="glass-button text-lg px-8 py-6"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button 
              onClick={() => navigate('/login')}
              variant="outline"
              className="text-lg px-8 py-6 border-white/20 hover:bg-white/10"
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Our Mission
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-muted-foreground">
                Cultivating creative thinking and breakthrough ideas that challenge the status quo.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-muted-foreground">
                Building a community where entrepreneurs learn, grow, and succeed together.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl space-y-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-muted-foreground">
                Empowering students to transform ideas into impactful ventures through mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-12 text-center space-y-6 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our community of innovators, attend exclusive events, and turn your entrepreneurial dreams into reality.
          </p>
          <Button 
            onClick={() => navigate('/register')}
            className="glass-button text-lg px-8 py-6"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Join E-Cell Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
