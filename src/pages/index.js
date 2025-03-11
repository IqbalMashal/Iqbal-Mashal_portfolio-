import Hero from "../components/sections/Hero"
import Overview from "@/components/sections/Overview"
import Project from "./projects"
import About from "./about"
import Contact from "./contact"

function HomePage() {
    return (
        <div>
            <Hero />
            <Overview />
            <section id="projects" className="mt-5 pb-5">
                <Project />
            </section>
            <section id="about" className="mt-5 pb-5">
                <About />
            </section>
            <section id="contact" className="mt-5 pb-5">
                <Contact />
            </section>
        </div>
    )
}

export default HomePage;