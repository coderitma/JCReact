import { useParams } from "react-router-dom"

function About() {
  const params = useParams()
  
  return (
    <>
      <h1>Tentang {params.nama}</h1>
      <p>Saya adalah orang!!!! umur {params.umur}</p>
    </>
  )
}

export default About

