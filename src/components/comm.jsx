export default function Community() {
  return (
    <section className="community">
      <h2>Manage your entire community<br />in a single system</h2>
      <div className="cards">
        <Card title="Membership Organisations" />
        <Card title="National Associations" />
        <Card title="Clubs And Groups" />
      </div>
    </section>
  )
}

function Card({ title }) {
  return (
    <div className="card">
      <div className="icon" />
      <h3>{title}</h3>
      <p>Our membership management software provides full automation of renewals and payments.</p>
    </div>
  )
}