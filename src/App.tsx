import React from 'react';
import { Clock, Download, Calendar } from 'lucide-react';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { FeatureCard } from './components/FeatureCard';
import { InstallGuide } from './components/InstallGuide/InstallGuide';
import { ImageFrames } from './components/ImageFrames';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Exact Dates on Instagram
          </h1>
          
          <Description />

          <ImageFrames />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={<Clock className="h-6 w-6 text-purple-600" />}
              title="Instant Conversion"
              description="Timestamps update automatically as you browse"
            />
            <FeatureCard
              icon={<Download className="h-6 w-6 text-purple-600" />}
              title="Easy Installation"
              description="Simple setup process with clear instructions"
            />
            <FeatureCard
              icon={<Calendar className="h-6 w-6 text-purple-600" />}
              title="Works Everywhere"
              description="Converts dates on posts, comments, and stories"
            />
          </div>

          <div id="download">
            <InstallGuide />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}