export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        <div>
          <h2>Helping a local<br /><span>business reinvent itself</span></h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="numbers">
          <Stt label="Members" value="2,245,341" />
          <Stt label="Clubs" value="46,328" />
          <Stt label="Event Bookings" value="828,867" />
          <Stt label="Payments" value="1,926,436" />
        </div>
      </div>
    </section>
  )
}
function Stt({ label, value }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <br/>
      <span>{label}</span>
    </div>
  )
}