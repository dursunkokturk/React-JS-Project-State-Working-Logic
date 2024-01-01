import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';
import './Course.css';

// Fotograglari Yazdirmak Icin
// Obje Kullaniyoruz
const courseMap = {

  // Javascript te Karsilastirilan Degerlerin Key ve Value Degerleri
  // Birbirine Esit Ise Tek Seferde Yazilabilir
  Angular,
  Bootstrap,
  Ccsharp,
  KompleWeb,
};

// Props Adini Parametre Olarak Veriyoruz
function Course({ courseName }) {
  // console.log(Angular);
  // console.log(courseName);
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;