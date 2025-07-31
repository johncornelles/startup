// components/Navbar.jsx
"use client";

import Link from "next/link";
import { UserCircle } from "lucide-react";

import { 
  Search, 
  Filter, 
  ExternalLink, 
  Building2, 
  Users, 
  Calendar,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import "@/app/globals.css";
import { useStore } from "@/store/use-store";


export default function Navbar() {

  return (
    <>

    <nav className="flex justify-between items-center py-4 px-6 shadow-sm bg-white">

      <div className="flex items-center gap-3">
        <span className="text-orange-500 text-2xl font-bold">⚡</span>
        <span className="font-semibold text-lg">YC Directory</span>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <Link href="/" className="font-medium text-orange-600">
          Directory
        </Link>
        <Link href="/submit" className="hover:text-orange-500">
          + Submit Startup
        </Link>
        <div className="flex items-center gap-2">
          <UserCircle className="w-5 h-5 text-orange-500" />
          <span className="font-medium">John Cornellews</span>
        </div>
      </div>
    </nav>
    </>
  );
}
