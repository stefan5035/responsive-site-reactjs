import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'

export default function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <h2>Caring is the new marketing</h2>
        <p>The Nexcent blog is the best place to read about the latest membership insights.</p>

        <div className="blog-grid">
          <BlogCard
            title="Creating Streamlined Safeguarding Processes with OneRen"
            image={blog1}
          />
          <BlogCard
            title="What are your safeguarding responsibilities?"
            image={blog2}
          />
          <BlogCard
            title="Revamping the Membership Model"
            image={blog3}
          />
        </div>
      </div>
    </section>
  )
}

function BlogCard({ title, image }) {
  return (
    <div className="blog-card">
      <img src={image} alt="" className="blog-image" />

      <div className="blog-overlay">
        <h3>{title}</h3>
        <a>Read more →</a>
      </div>
    </div>
  )
}