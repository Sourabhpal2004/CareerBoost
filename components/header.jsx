import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();

  return (
    // <header className="fixed top-0 w-full border-b border-purple-500 bg-[#0f0f1b]/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-[#0f0f1b]/60 shadow-[0_0_10px_#9333ea]">
  <header className="fixed top-0 w-full border-b border-slate-700 bg-[#0f0f1b]/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-[#0f0f1b]/60 shadow-[0_0_8px_#1e293b]">
  <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
    <Link href="/">
      <Image
        src={"/cboost.png"}
        alt="CareerBoost-AI Logo"
        width={200}
        height={60}
        className="h-12 py-1 w-auto object-contain"
      />
    </Link>
  

      {/* Add your nav content here */}


    {/* Action Buttons */}
    <div className="flex items-center space-x-2 md:space-x-4">
  <SignedIn>
    <Link href="/dashboard">
      <Button
        variant="outline"
        className="hidden md:inline-flex items-center gap-2 text-white border-slate-600 hover:bg-slate-800/30 hover:shadow-[0_0_10px_#1e293b] transition-all duration-300"
      >
        <LayoutDashboard className="h-4 w-4 text-slate-300" />
        Industry Insights
      </Button>
      <Button
        variant="ghost"
        className="md:hidden w-10 h-10 p-0 text-slate-300 hover:bg-slate-700/20"
      >
        <LayoutDashboard className="h-4 w-4" />
      </Button>
    </Link>
    {/* <div className="flex items-center space-x-2 md:space-x-4">
      <SignedIn>
        <Link href="/dashboard">
          <Button
            variant="outline"
            className="hidden md:inline-flex items-center gap-2 text-white border-purple-500 hover:bg-purple-500/10 hover:shadow-[0_0_10px_#9333ea] transition-all duration-300"
          >
            <LayoutDashboard className="h-4 w-4 text-purple-400" />
            Industry Insights
          </Button>
          <Button
            variant="ghost"
            className="md:hidden w-10 h-10 p-0 text-purple-400 hover:bg-purple-600/20"
          >
            <LayoutDashboard className="h-4 w-4" />
          </Button>
        </Link> */}

        {/* Growth Tools Dropdown */}
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-semibold shadow-md hover:brightness-110 transition-all duration-300">
  <StarsIcon className="h-4 w-4 text-white" />
  <span className="hidden md:block">Growth Tools</span>
  <ChevronDown className="h-4 w-4 text-white" />
</Button>

        {/* <Button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 shadow-[0_0_10px_#4f46e5] transition-all duration-300">
          <StarsIcon className="h-4 w-4 text-white" />
          <span className="hidden md:block">Growth Tools</span>
          <ChevronDown className="h-4 w-4 text-white" />
        </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 bg-[#1a1a2e] border border-slate-700 text-white shadow-[0_0_12px_#1e293b]"
      >
        <DropdownMenuItem asChild>
          <Link href="/resume" className="flex items-center gap-2 hover:text-indigo-400">
            <FileText className="h-4 w-4" />
            Build Resume
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/ai-cover-letter" className="flex items-center gap-2 hover:text-indigo-400">
            <PenBox className="h-4 w-4" />
            Cover Letter
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/interview" className="flex items-center gap-2 hover:text-indigo-400">
            <GraduationCap className="h-4 w-4" />
            Interview Prep
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </SignedIn>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-[0_0_10px_#9333ea] transition-all duration-300">
              <StarsIcon className="h-4 w-4 text-white" />
              <span className="hidden md:block">Growth Tools</span>
              <ChevronDown className="h-4 w-4 text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-[#1a1a2e] border border-purple-500 text-white shadow-[0_0_12px_#9333ea]"
          >
            <DropdownMenuItem asChild>
              <Link href="/resume" className="flex items-center gap-2 hover:text-purple-400">
                <FileText className="h-4 w-4" />
                Build Resume
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/ai-cover-letter" className="flex items-center gap-2 hover:text-purple-400">
                <PenBox className="h-4 w-4" />
                Cover Letter
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/interview" className="flex items-center gap-2 hover:text-purple-400">
                <GraduationCap className="h-4 w-4" />
                Interview Prep
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SignedIn> */}

      <SignedOut>
        <SignInButton>
          <Button className="border border-purple-500 text-purple-300 hover:bg-purple-700/20 hover:shadow-[0_0_10px_#9333ea] transition-all duration-300">
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10 border border-purple-500 shadow-[0_0_6px_#9333ea]",
              userButtonPopoverCard: "shadow-xl bg-[#1a1a2e] border border-purple-500 text-white",
              userPreviewMainIdentifier: "font-semibold text-purple-300",
            },
          }}
          afterSignOutUrl="/"
        />
      </SignedIn>
    </div>
  </nav>
</header>

//     <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
//       <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <Link href="/">
//           <Image
//             src={"/logoo.jpg"}
//             alt="CareerBoost-AI Logo"
//             width={200}
//             height={60}
//             className="h-12 py-1 w-auto object-contain"
//           />
//         </Link>

//         {/* Action Buttons */}
//         <div className="flex items-center space-x-2 md:space-x-4">
//           <SignedIn>
//             <Link href="/dashboard">
//               <Button
//                 variant="outline"
//                 className="hidden md:inline-flex items-center gap-2"
//               >
//                 <LayoutDashboard className="h-4 w-4" />
//                 Industry Insights
//               </Button>
//               <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
//                 <LayoutDashboard className="h-4 w-4" />
//               </Button>
//             </Link>

//             {/* Growth Tools Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button className="flex items-center gap-2">
//                   <StarsIcon className="h-4 w-4" />
//                   <span className="hidden md:block">Growth Tools</span>
//                   <ChevronDown className="h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem asChild>
//                   <Link href="/resume" className="flex items-center gap-2">
//                     <FileText className="h-4 w-4" />
//                     Build Resume
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/ai-cover-letter"
//                     className="flex items-center gap-2"
//                   >
//                     <PenBox className="h-4 w-4" />
//                     Cover Letter
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link href="/interview" className="flex items-center gap-2">
//                     <GraduationCap className="h-4 w-4" />
//                     Interview Prep
//                   </Link>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </SignedIn>

//           <SignedOut>
//             <SignInButton>
//               <Button variant="outline">Sign In</Button>
//             </SignInButton>
//           </SignedOut>

//           <SignedIn>
//             <UserButton
//               appearance={{
//                 elements: {
//                   avatarBox: "w-10 h-10",
//                   userButtonPopoverCard: "shadow-xl",
//                   userPreviewMainIdentifier: "font-semibold",
//                 },
//               }}
//               afterSignOutUrl="/"
//             />
//           </SignedIn>
//         </div>
//       </nav>
//     </header>
  );
}