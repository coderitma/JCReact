import Karyawan from "./Karyawan"

function Office() {
  return <>
    <h1>PT. Cumi Cumi</h1>
    <p><Karyawan nama="Budi Uhuy" umur={20} /> bekerja di pt ini.</p>
  </>
}

export default Office