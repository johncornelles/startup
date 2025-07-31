"use client"

import { useState, useEffect } from "react"
import { Search, Sparkles, Building2, TrendingUp, Globe, Users, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useStore } from "@/store/use-store"
import StartupCard from "@/components/StartupCard"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function HomePage() {
  const { startups } = useStore()
  const [filteredStartups, setFilteredStartups] = useState(startups)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBatch, setSelectedBatch] = useState("all")

  // Unique categories and batches
  const categories = [...new Set(startups.map(s => s.category))].filter(Boolean)
  const batches = [...new Set(startups.map(s => s.batch))].filter(Boolean).sort().reverse()

  // Filtering logic
  useEffect(() => {
    let filtered = startups

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(startup =>
        startup.name.toLowerCase().includes(q) ||
        startup.description.toLowerCase().includes(q) ||
        startup.tags?.some(tag => tag.toLowerCase().includes(q))
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(startup => startup.category === selectedCategory)
    }

    if (selectedBatch !== "all") {
      filtered = filtered.filter(startup => startup.batch === selectedBatch)
    }

    setFilteredStartups(filtered)
  }, [startups, searchQuery, selectedCategory, selectedBatch])

  // Statistics
  const totalStartups = startups.length
  const activeCompanies = startups.filter(s => s.active).length
  const totalCategories = categories.length
  const avgTeamSize = Math.round(
    startups.reduce((sum, s) => sum + (s.teamSize || 0), 0) / (startups.length || 1)
  )

  // Clear filters
  const clearFilters = () => {
    setSelectedCategory("all")
    setSelectedBatch("all")
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-slate-50" />
        <div className="absolute inset-0 opacity-40" />
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
            Discover innovative companies that are reshaping industries. From early-stage startups to billion-dollar unicorns.
          </p>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search startups, categories, or technologies..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
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
            <StatCard icon={<Building2 className="w-6 h-6 text-blue-600" />} value={totalStartups} label="Total Startups" bg="bg-blue-100" />
            <StatCard icon={<TrendingUp className="w-6 h-6 text-green-600" />} value={activeCompanies} label="Active Companies" bg="bg-green-100" />
            <StatCard icon={<Globe className="w-6 h-6 text-purple-600" />} value={totalCategories} label="Categories" bg="bg-purple-100" />
            <StatCard icon={<Users className="w-6 h-6 text-orange-600" />} value={avgTeamSize} label="Avg Team Size" bg="bg-orange-100" />
          </div>
        </div>
      </section>

      {/* Filters & Startup Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500" />
            <span className="text-sm font-medium text-slate-700">Filters:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedBatch} onValueChange={setSelectedBatch}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Batch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Batches</SelectItem>
                {batches.map(batch => (
                  <SelectItem key={batch} value={batch}>{batch}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {(selectedCategory !== "all" || selectedBatch !== "all" || searchQuery) && (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="text-slate-600 hover:text-slate-900"
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-15">
          {filteredStartups.map((startup, i) => (
            <StartupCard key={i} startup={startup} />
          ))}
        </div>
      </section>
    </div>
  )
}

// Statistic Card Component
function StatCard({ icon, value, label, bg }) {
  return (
    <div className="text-center">
      <div className={`inline-flex items-center justify-center w-12 h-12 ${bg} rounded-lg mb-4`}>
        {icon}
      </div>
      <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  )
}
