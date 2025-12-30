import community1 from '../assets/community1.png'
import community2 from '../assets/community2.png'
import community3 from '../assets/community3.png'

const communityItems = [
  {
    icon: community1,
    title: 'Membership Organisations',
    description:
      'Our membership management software provides full automation of renewals and payments.',
  },
  {
    icon: community2,
    title: 'National Associations',
    description:
      'Our membership management software provides full automation of renewals and payments.',
  },
  {
    icon: community3,
    title: 'Clubs And Groups',
    description:
      'Our membership management software provides full automation of renewals and payments.',
  },
]

export default function Community() {
  return (
    <section className="community">
      <div className="container">
        <h2>
          Manage your entire community <br />
          in a single system
        </h2>

        <div className="cards">
          {communityItems.map((item) => (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ icon, title, description }) {
  return (
    <div className="card">
      <img src={icon} alt="" className="card-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}