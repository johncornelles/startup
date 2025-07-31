import StartupCard from './StartupCard'

export default function StartupList({ startups }) {
  if (!startups?.length) return <p>No startups found.</p>
  return (
    <div className="startup-list">
      {startups.map(startup => (
        <StartupCard key={startup._id} startup={startup} />
      ))}
    </div>
  )
} 