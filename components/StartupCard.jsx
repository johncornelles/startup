"use client";

import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Building2, 
  Users, 
  Calendar,
  TrendingUp,
  ArrowRight 
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function StartupCard({ startup }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800 border-green-200";
      case "Acquired": return "bg-blue-100 text-blue-800 border-blue-200";
      case "IPO": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      "B2B": "bg-indigo-100 text-indigo-800",
      "B2C": "bg-pink-100 text-pink-800",
      "SaaS": "bg-blue-100 text-blue-800",
      "E-commerce": "bg-green-100 text-green-800",
      "Fintech": "bg-yellow-100 text-yellow-800",
      "Healthcare": "bg-red-100 text-red-800",
      "AI/ML": "bg-purple-100 text-purple-800",
      "EdTech": "bg-orange-100 text-orange-800",
      "PropTech": "bg-teal-100 text-teal-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const LogoIcon = LucideIcons[startup.logo] || Building2;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200/60 hover:border-orange-200 overflow-hidden bg-white/80 backdrop-blur-sm m-2">
      <CardHeader className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center group-hover:from-orange-50 group-hover:to-orange-100 transition-all duration-300">
              <LogoIcon className="w-6 h-6 text-slate-500 group-hover:text-orange-600 transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                {startup.name}
              </h3>
              {startup.batch && (
                <Badge variant="outline" className="text-xs mt-1">
                  {startup.batch}
                </Badge>
              )}
            </div>
          </div>

          {startup.status && (
            <Badge className={`text-xs ${getStatusColor(startup.status)}`}>
              {startup.status}
            </Badge>
          )}
        </div>

        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {startup.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {startup.category && (
            <Badge className={`text-xs ${getCategoryColor(startup.category)}`}>
              {startup.category}
            </Badge>
          )}
          {startup.tags?.slice(0, 2).map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-slate-100 text-slate-700"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <div className="flex items-center justify-between text-sm text-slate-500 mb-4 flex-wrap gap-2">
          {startup.founded_year && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{startup.founded_year}</span>
            </div>
          )}
          {startup.team_size && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{startup.team_size}+ people</span>
            </div>
          )}
          {startup.funding_raised && (
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>{startup.funding_raised}</span>
            </div>
          )}
        </div>    
        <div className="flex flex-1 items-center justify-center">
             {startup.website_url && (
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-orange-50 hover:text-orange-600 transition-colors"
            >
                
              <a
                href={startup.website_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                >
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
