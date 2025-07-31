import { getImageUrl } from '../lib/imageUrl'

export default function StartupCard({ startup }) {
  return (
    <div className="startup-card">
      {startup.image && (
        <img
          src={getImageUrl(startup.image).width(200).url()}
          alt={startup.name}
          className="startup-image"
        />
      )}
      <h2>{startup.name}</h2>
      <p>{startup.description}</p>
      <div className="startup-meta">
        <span><b>Batch:</b> {startup.batch}</span>{' '}
        <span><b>Status:</b> {startup.status}</span>{' '}
        <span><b>Category:</b> {startup.category}</span>
      </div>
      <div className="startup-tags">
        {startup.tags?.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="startup-links">
        <a href={startup.website_url} target="_blank" rel="noopener noreferrer">Website</a>
      </div>
    </div>
  )
} 