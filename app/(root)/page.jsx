"use client"

import { Search, Sparkles, Building2, TrendingUp, Globe, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useStore } from "@/store/use-store"
import StartupCard from "@/components/StartupCard"
import startupsjson from "@/data.json"

export default function HomePage() {

  const { startups, setStartups } = useStore();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-slate-50" />
        <div
          className="absolute inset-0 opacity-40"
        />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Discover the Future
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Explore Y Combinator
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text block">
              Startups
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover innovative companies that are reshaping industries. From early-stage startups to billion-dollar
            unicorns.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search startups, categories, or technologies..."

                className="pl-12 pr-4 py-4 text-lg border-slate-200 bg-white/80 backdrop-blur-sm shadow-lg focus:shadow-xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">6</div>
              <div className="text-sm text-slate-600">Total Startups</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">2</div>
              <div className="text-sm text-slate-600">Active Companies</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">5</div>
              <div className="text-sm text-slate-600">Categories</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">4,167</div>
              <div className="text-sm text-slate-600">Avg Team Size</div>
            </div>
          </div>
        </div>
      </section>
       
       <section className="py-16 px-4 sm:px-6 lg:px-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-15">
        {/* Startup Cards will be rendered here */}
        {startups.map((startup, i) => (
          <StartupCard key={i} startup={startup} />
        ))}
      </div>
       </section>
    </div>
  )
}
