import { Button } from "./ui/button";

export function HeroSection() {
  const handleSignUp = () => {
    // Scroll to the sign up section or open sign up modal
    const signUpButton = document.querySelector('[data-tab="signup"]');
    if (signUpButton) {
      signUpButton.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Sign up functionality - redirect to sign up page');
    }
  };

  const handleContactSales = () => {
    // Open contact sales modal or redirect
    alert('Contact Sales - redirect to contact page');
  };

  return (
    <section className="text-center py-16 px-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto">
        The most realistic voice AI platform
      </h1>
      
      <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
        AI voice models and products powering millions of developers, creators, and enterprises. From 
        low-latency conversational agents to the leading AI voice generator for voiceovers and audiobooks.
      </p>

      <div className="flex items-center justify-center gap-4">
        <Button 
          size="lg" 
          className="bg-black text-white hover:bg-gray-800 px-8"
          onClick={handleSignUp}
        >
          SIGN UP
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="px-8"
          onClick={handleContactSales}
        >
          CONTACT SALES
        </Button>
      </div>
    </section>
  );
}