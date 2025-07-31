'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SubmitStartupPage() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    batch: '',
    status: '',
    category: '',
    tags: '',
    founded_year: '',
    team_size: '',
    funding_raised: '',
    website_url: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const res = await fetch('/api/startup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
          founded_year: form.founded_year ? Number(form.founded_year) : undefined,
          team_size: form.team_size ? Number(form.team_size) : undefined,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setMessage('Startup submitted!')
        setForm({
          name: '', description: '', batch: '', status: '', category: '', tags: '', founded_year: '', team_size: '', funding_raised: '', website_url: '',
        })
      } else {
        setMessage(data.error || 'Error submitting')
      }
    } catch (err) {
      setMessage('Error submitting')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-slate-50 py-12 px-4">
      <div className="w-full max-w-lg bg-white/90 rounded-2xl shadow-xl p-10 border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-900 mb-6 text-center">Submit a Startup</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <Input as="textarea" name="description" placeholder="Description" value={form.description} onChange={handleChange} required className="h-24 resize-none" />
          <div className="flex gap-3">
            <Input name="batch" placeholder="Batch (e.g. S21)" value={form.batch} onChange={handleChange} />
            <Input name="status" placeholder="Status (e.g. Active)" value={form.status} onChange={handleChange} />
          </div>
          <div className="flex gap-3">
            <Input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
            <Input name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={handleChange} />
          </div>
          <div className="flex gap-3">
            <Input name="founded_year" placeholder="Founded Year" value={form.founded_year} onChange={handleChange} type="number" />
            <Input name="team_size" placeholder="Team Size" value={form.team_size} onChange={handleChange} type="number" />
          </div>
          <div className="flex gap-3">
            <Input name="funding_raised" placeholder="Funding Raised" value={form.funding_raised} onChange={handleChange} />
            <Input name="website_url" placeholder="Website URL" value={form.website_url} onChange={handleChange} />
          </div>
          <Button type="submit" disabled={loading} className="mt-2 text-base h-11">
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
        {message && <p className={`mt-6 text-center text-base font-medium ${message.includes('submitted') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
      </div>
    </main>
  )
} 