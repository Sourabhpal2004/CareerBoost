import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">

        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-white">
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-purple-500 rounded-xl bg-background transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-md hover:shadow-[0_0_20px_rgba(147,51,234,0.6)]"
              >
                {/* Animated corner lights */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <span className="absolute w-1/3 h-1 bg-pink-400 animate-pulse top-0 left-0 blur-md rounded-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <span className="absolute w-1 h-1/3 bg-purple-400 animate-pulse bottom-0 right-0 blur-md rounded-full group-hover:-translate-y-full transition-transform duration-1000 ease-in-out" />
                </div>

                {/* Card Content */}
                <CardContent className="relative z-10 pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2 text-purple-600">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-black text-white">
  <div className="container mx-auto px-4 md:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
      Powerful Features for Your Career Growth
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="bg-black border border-purple-500 rounded-2xl p-6 text-center shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition hover:scale-105">
        <h3 className="text-xl font-semibold text-pink-400">Industry-Specific Questions</h3>
        <p className="mt-2 text-gray-300 text-sm">
          Get curated questions for 50+ industries to prepare smartly.
        </p>
      </div>
      <div className="bg-black border border-purple-500 rounded-2xl p-6 text-center shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition hover:scale-105">
        <h3 className="text-xl font-semibold text-pink-400">AI-Powered Guidance</h3>
        <p className="mt-2 text-gray-300 text-sm">
          Instant feedback and tips from 24/7 AI interview assistant.
        </p>
      </div>
      <div className="bg-black border border-purple-500 rounded-2xl p-6 text-center shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition hover:scale-105">
        <h3 className="text-xl font-semibold text-pink-400">High Success Rate</h3>
        <p className="mt-2 text-gray-300 text-sm">
          95% of our users crack interviews with our structured support.
        </p>
      </div>
    </div>
  </div>
</section>




      {/* <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-muted-foreground">Industries Covered</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-muted-foreground">Interview Questions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <div className="h-1 w-3/4 mx-auto my-12 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]" /> */}

      <div className="h-1 w-3/4 mx-auto my-12 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)] bg-[length:200%_200%] animate-gradient-move" />


      {/* How It Works Section */}
      <section className="w-full py-16 bg-black text-white">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">How It Works</h2>
      <p className="text-gray-400">Four simple steps to accelerate your career growth</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {howItWorks.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center space-y-4 bg-black border border-purple-500 rounded-2xl p-6 shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition hover:scale-105"
        >
          <div className="w-16 h-16 rounded-full bg-purple-700/20 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.5)]">
            {item.icon}
          </div>
          <h3 className="font-semibold text-xl text-pink-400">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}



{/* Glowing Divider (before section) */}
<div className="h-1 w-3/4 mx-auto my-12 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]" />

<section className="w-full py-12 md:py-24 bg-black">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold text-center text-white mb-12">
      What Our Users Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {testimonial.map((testimonial, index) => (
        <Card
          key={index}
          className="bg-background transform transition-all duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(147,51,234,0.7)] border border-purple-500 hover:border-pink-500 hover:brightness-110"
        >
          <CardContent className="pt-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative h-12 w-12 flex-shrink-0">
                  <Image
                    width={40}
                    height={40}
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="rounded-full object-cover border-2 border-purple-300 hover:border-pink-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="font-semibold text-purple-400">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-muted-foreground italic relative">
                  <span className="text-3xl text-purple-500 absolute -top-4 -left-2">
                    &quot;
                  </span>
                  {testimonial.quote}
                  <span className="text-3xl text-purple-500 absolute -bottom-4">
                    &quot;
                  </span>
                </p>
              </blockquote>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-background transform transition-all duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(147,51,234,0.7)] border border-purple-500 hover:border-pink-500 hover:brightness-110"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-purple-300 hover:border-pink-400 transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-purple-600">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-purple-500 absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-purple-500 absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* Glowing Divider (before FAQ section) */}
{/* Glowing Divider (before FAQ section) */}
<div className="h-1 w-3/4 mx-auto my-12 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]" />

<section className="w-full py-12 md:py-24 bg-black">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl font-bold mb-4 text-white">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground">
        Find answers to common questions about our platform
      </p>
    </div>

    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="transition-transform duration-300 transform hover:scale-105 cursor-pointer rounded-lg"
          >
            <AccordionTrigger className="text-left text-white">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>


      {/* <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* Glowing Divider (before this section) */}
{/* Glowing Divider (before this section) */}
<div className="h-1 w-3/4 mx-auto my-12 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]" />

<section className="w-full bg-black">
  <div className="mx-auto py-24 gradient rounded-lg">
    <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
        Ready to Accelerate Your Career?
      </h2>
      <p className="mx-auto max-w-[600px] text-white/80 md:text-xl">
        Join thousands of professionals who are advancing their careers
        with AI-powered guidance.
      </p>
      <Link href="/dashboard" passHref>
        {/* <Button
          size="lg"
          variant="secondary"
          className="h-11 mt-5 animate-bounce bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 hover:brightness-110 transition-all duration-500 text-white"
        >
          Start Your Journey Today
          <ArrowRight className="ml-2 h-4 w-4 text-gradient" />
        </Button> */}
        <Button
  size="lg"
  className="h-11 mt-5 px-8 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-semibold shadow-lg hover:brightness-110 transition-all duration-300 rounded-lg animate-bounce"
>
  Start Your Journey Today
  <ArrowRight className="ml-2 h-4 w-4 text-white" />
</Button>

      </Link>
    </div>
  </div>
</section>


      {/* <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:brightness-110 transition-all duration-500"
              >
                Start Your Journey Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </>
  );
}





// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   ArrowRight,
//   Trophy,
//   Target,
//   Sparkles,
//   CheckCircle2,
// } from "lucide-react";
// import HeroSection from "@/components/hero";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import Image from "next/image";
// import { features } from "@/data/features";
// import { testimonial } from "@/data/testimonial";
// import { faqs } from "@/data/faqs";
// import { howItWorks } from "@/data/howItWorks";

// export default function LandingPage() {
//   return (
//     <>
//       <div className="grid-background"></div>

//       {/* Hero Section */}
//       <HeroSection />

//       {/* Features Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
//             Powerful Features for Your Career Growth
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {features.map((feature, index) => (
//             //   <Card
//             //   key={index}
//             //   className="relative group rounded-xl overflow-hidden border-2 border-transparent bg-background hover:scale-105 transition-all duration-500 shadow-lg"
//             // >
//             //   {/* Animated gradient border */}
//             //   <span className="absolute inset-0 z-0 rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:400%_400%] animate-border-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
//             //   {/* Inner content box to prevent border overlay */}
//             //   <div className="relative z-10 bg-background rounded-[10px] p-6 text-center flex flex-col items-center">
//             //     {feature.icon}
//             //     <h3 className="text-xl font-bold mb-2 text-purple-600">
//             //       {feature.title}
//             //     </h3>
//             //     <p className="text-muted-foreground">{feature.description}</p>
//             //   </div>
//             // </Card>
            
//               <Card
//               key={index}
//               className="group relative overflow-hidden border-2 border-purple-500 rounded-xl bg-background transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-md hover:shadow-[0_0_20px_rgba(147,51,234,0.6)]"
//             >
//               {/* Animated corner lights */}
//               <div className="absolute inset-0 z-0 pointer-events-none">
//                 <span className="absolute w-1/3 h-1 bg-pink-400 animate-pulse top-0 left-0 blur-md rounded-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
//                 <span className="absolute w-1 h-1/3 bg-purple-400 animate-pulse bottom-0 right-0 blur-md rounded-full group-hover:-translate-y-full transition-transform duration-1000 ease-in-out" />
//               </div>
            
//               {/* Card Content */}
//               <CardContent className="relative z-10 pt-6 text-center flex flex-col items-center">
//                 <div className="flex flex-col items-center justify-center">
//                   {feature.icon}
//                   <h3 className="text-xl font-bold mb-2 text-purple-600">
//                     {feature.title}
//                   </h3>
//                   <p className="text-muted-foreground">{feature.description}</p>
//                 </div>
//               </CardContent>
//             </Card>
            
//               // <Card
//               //   key={index}
//               //   className="border-2 hover:border-primary transition-colors duration-300"
//               // >
//               //   <CardContent className="pt-6 text-center flex flex-col items-center">
//               //     <div className="flex flex-col items-center justify-center">
//               //       {feature.icon}
//               //       <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//               //       <p className="text-muted-foreground">
//               //         {feature.description}
//               //       </p>
//               //     </div>
//               //   </CardContent>
//               // </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="w-full py-12 md:py-24 bg-muted/50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">50+</h3>
//               <p className="text-muted-foreground">Industries Covered</p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">1000+</h3>
//               <p className="text-muted-foreground">Interview Questions</p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">95%</h3>
//               <p className="text-muted-foreground">Success Rate</p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">24/7</h3>
//               <p className="text-muted-foreground">AI Support</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="w-full py-12 md:py-24 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">How It Works</h2>
//             <p className="text-muted-foreground">
//               Four simple steps to accelerate your career growth
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//             {howItWorks.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center space-y-4"
//               >
//                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-semibold text-xl">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-12 md:py-24 bg-muted/50">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             What Our Users Say
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {testimonial.map((testimonial, index) => (
//               // <Card key={index} className="bg-background">
//               // <Card key={index} className="bg-background transform transition-transform duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-xl"
//               //   <Card key={index} className="bg-background transform transition-transform duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-xl">
//               //   <CardContent className="pt-6">
//               //     <div className="flex flex-col space-y-4">
//               //       <div className="flex items-center space-x-4 mb-4">
//               //         <div className="relative h-12 w-12 flex-shrink-0">
//               //           <Image
//               //             width={40}
//               //             height={40}
//               //             src={testimonial.image}
//               //             alt={testimonial.author}
//               //             className="rounded-full object-cover border-2 border-primary/20"
//               //           />
//               //         </div>
//               //         <div>
//               //           <p className="font-semibold">{testimonial.author}</p>
//               //           <p className="text-sm text-muted-foreground">
//               //             {testimonial.role}
//               //           </p>
//               //           <p className="text-sm text-primary">
//               //             {testimonial.company}
//               //           </p>
//               //         </div>
//               //       </div>
//               //       <blockquote>
//               //         <p className="text-muted-foreground italic relative">
//               //           <span className="text-3xl text-primary absolute -top-4 -left-2">
//               //             &quot;
//               //           </span>
//               //           {testimonial.quote}
//               //           <span className="text-3xl text-primary absolute -bottom-4">
//               //             &quot;
//               //           </span>
//               //         </p>
//               //       </blockquote>
//               //     </div>
//               //   </CardContent>
//               // </Card>
//               <Card
//   key={index}
//   className="bg-background transform transition-all duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(147,51,234,0.7)] border border-purple-500 hover:border-pink-500 hover:brightness-110"
// >
//   <CardContent className="pt-6">
//     <div className="flex flex-col space-y-4">
//       <div className="flex items-center space-x-4 mb-4">
//         <div className="relative h-12 w-12 flex-shrink-0">
//           <Image
//             width={40}
//             height={40}
//             src={testimonial.image}
//             alt={testimonial.author}
//             className="rounded-full object-cover border-2 border-purple-300 hover:border-pink-400 transition-colors duration-300"
//           />
//         </div>
//         <div>
//           <p className="font-semibold text-purple-600">{testimonial.author}</p>
//           <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//           <p className="text-sm text-primary">{testimonial.company}</p>
//         </div>
//       </div>
//       <blockquote>
//         <p className="text-muted-foreground italic relative">
//           <span className="text-3xl text-purple-500 absolute -top-4 -left-2">
//             &quot;
//           </span>
//           {testimonial.quote}
//           <span className="text-3xl text-purple-500 absolute -bottom-4">
//             &quot;
//           </span>
//         </p>
//       </blockquote>
//     </div>
//   </CardContent>
// </Card>




//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="w-full py-12 md:py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-muted-foreground">
//               Find answers to common questions about our platform
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             <Accordion type="single" collapsible className="w-full">
//               {faqs.map((faq, index) => (
//                 <AccordionItem key={index} value={`item-${index}`} className="transition-transform duration-300 transform hover:scale-105 cursor-pointer">
//                   <AccordionTrigger className="text-left">
//                     {faq.question}
//                   </AccordionTrigger>
//                   <AccordionContent>{faq.answer}</AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="w-full">
//         <div className="mx-auto py-24 gradient rounded-lg">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
//               Ready to Accelerate Your Career?
//             </h2>
//             <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
//               Join thousands of professionals who are advancing their careers
//               with AI-powered guidance.
//             </p>
//             <Link href="/dashboard" passHref>
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 className="h-11 mt-5 animate-bounce"
//               >
//                 Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
