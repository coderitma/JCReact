import { useSearchParams, useNavigate } from "react-router-dom"

function Beranda() {
  const [qParams, setQParams] = useSearchParams()
  const navigator = useNavigate();

  const redirect = (e) => {
    navigator(`/about/${qParams.get('nama')}/${qParams.get('umur')}`)
  }

  // https://www.tokopedia.com/berrybenka/berrybenka-atasan-blouse-wanita-sophie-muafa-pleats-blouse-navy-one-size?extParam=src%3Dmultiloc%26whid%3D27627
  let nama = qParams.get("nama")
  return <>
    <h1
      onClick={redirect}
    >Selamat datang di website saya!</h1>
    <p>Nama: {qParams.get("nama")}</p>
    <p
      onClick={(e) => setQParams({umur: 19, nama: nama})}
    >Umur: {qParams.get("umur")}</p>


  </>
}

export default Beranda