import { ToolCard } from '@/components/tool-card';
import { FileJson, Hash, Zap, ShieldCheck, Search, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-12 px-6">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
          <Rocket size={16} />
          <span>The All-in-One Developer Utility Suite</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-gray-900 max-w-3xl">
          Build faster with professional <span className="text-blue-600">developer tools</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-xl">
          DevToolkit provides a modern, fast, and secure suite of utilities for JSON, XML, CSS, hashing, and more. All executed in your browser.
        </p>
        <div className="flex gap-4">
          <Link href="#tools" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Explore Tools
          </Link>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="grid md:grid-cols-3 gap-8">
        <BenefitCard 
          icon={Zap} 
          title="Lightning Fast" 
          description="Instant results with zero server latency using browser-side execution." 
        />
        <BenefitCard 
          icon={ShieldCheck} 
          title="Privacy First" 
          description="All data stays securely on your machine. We never store or transmit your sensitive data." 
        />
        <BenefitCard 
          icon={Search} 
          title="Highly Functional" 
          description="Advanced editors, syntax highlighting, and intelligent validation for all your developer needs." 
        />
      </section>

      {/* Tools Section */}
      <section id="tools" className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Popular Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ToolCard
          title="JSON Formatter"
          description="Format, validate, and beautify your JSON data."
          icon={FileJson}
          href="/json-formatter"
        />
        <ToolCard
          title="XML Formatter"
          description="Format and prettify your XML data."
          icon={FileJson}
          href="/xml-formatter"
        />
        <ToolCard
          title="HTML Formatter"
          description="Format and prettify your HTML code."
          icon={FileJson}
          href="/html-formatter"
        />
        <ToolCard
          title="SQL Formatter"
          description="Format and prettify your SQL queries."
          icon={FileJson}
          href="/sql-formatter"
        />
        <ToolCard
          title="CSS Formatter"
          description="Format and prettify your CSS code."
          icon={FileJson}
          href="/css-formatter"
        />
        <ToolCard
          title="Base64 Encoder/Decoder"
          description="Easily encode and decode Base64 strings."
          icon={Hash}
          href="/base64"
        />
        </div>
      </section>
    </div>
  );
}

function BenefitCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-3 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 bg-blue-50 w-fit rounded-lg text-blue-600">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
