import loip1 from '../assets/logoipsum-397.png'
import loip2 from '../assets/logoipsum-399.png'
import loip3 from '../assets/logoipsum-401.png'
import loip4 from '../assets/logoipsum-403.png'
import loip5 from '../assets/logoipsum-405.png'
import loip6 from '../assets/logoipsum-409.png'
const Clients=[loip1,loip2,loip3,loip4,loip5,loip6]

export default function Testimony() {
  return (
    <section className="testimonial">
      <div className="container testimonial-grid">
        <div className="testimonial-img">
          <img src="src/assets/tesla_testimony.png"/>
        </div>
        <div className="testimonial-content">
          <p className="quote">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.          </p>

          <strong className="author">Tim Smith</strong>
          <span className="role">
            British Dragon Boat Racing Association
          </span>

          <div className="testimonial-footer">
            <div className="testimonial-logos">
              {Clients.map((logo, i) => (
                <img key={i} src={logo} alt="" />
              ))}
            </div>

            <a className="testimonial-link">
              Meet all customers →
            </a>
          </div>        
        </div>
      </div>
    </section>
  )
}