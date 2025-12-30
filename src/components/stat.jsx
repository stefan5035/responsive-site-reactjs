import stats1 from '../assets/stats1.png'
import stats2 from '../assets/stats2.png'
import stats3 from '../assets/stats3.png'
import stats4 from '../assets/stats4.png'

const stats = [
  {
    icon: stats1,
    value: '2,245,341',
    label: 'Members',
  },
  {
    icon: stats2,
    value: '46,328',
    label: 'Clubs',
  },
  {
    icon: stats3,
    value: '828,867',
    label: 'Event Bookings',
  },
  {
    icon: stats4,
    value: '1,926,436',
    label: 'Payments',
  },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        <div>
          <h2>
            Helping a local <br />
            <span>business reinvent itself</span>
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>

        <div className="numbers">
          {stats.map((stat) => (
            <Stt key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Stt({ icon, value, label }) {
  return (
    <div className="stat">
      <div className="stat-icon">
        <img src={icon} alt="" />
      </div>
      <div>
        <strong>{value}</strong>
        <br/>
        <span>{label}</span>
      </div>
    </div>
  )
}