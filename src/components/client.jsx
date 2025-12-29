import loip1 from '../assets/logoipsum-397.png'
import loip2 from '../assets/logoipsum-399.png'
import loip3 from '../assets/logoipsum-401.png'
import loip4 from '../assets/logoipsum-403.png'
import loip5 from '../assets/logoipsum-405.png'
import loip6 from '../assets/logoipsum-409.png'
import loip7 from '../assets/logoipsum-411.png'

const Clients=[loip1,loip2,loip3,loip4,loip5,loip6,loip7]
export default function Client() {
  return (
    <section className="clients">
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="client-logos">
          {Clients.map((loip, index) => (
            <img
              key={index}
              src={loip}
              alt={`Client logo ${index + 1}`}
              className="client-logo"
            />
          ))}
        </div>
    </section>
  )
}