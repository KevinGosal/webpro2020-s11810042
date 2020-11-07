import {Year, Day} from '../Utils/Waktu';

const Hello = () =>{
    return(
      <>
      <p>Test exercise web pro</p>
      <p>Tahun sekarang adalah {Year()}</p>
      <p>Tanggal sekarang adalah {Day()}</p>
      </>
    );
  };

export default Hello;