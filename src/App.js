import Course from './Course';
import './App.css';
import { useState } from 'react';

// Rasgele Ekrana Gelecek Degerleri Belirlemek Icin
// getRandomCourse Fonksiyonu Icinde Yapilacak Islemi Tanimliyoruz
function getRandomCourse() {
  
  // Ekrana Rasgele Gelecek Olan Degerler
  const courseArray = ['Angular', 'Bootstrap', 'Ccsharp', 'KompleWeb'];

  // Ekrana Rasgele Gelen Degerlerin indis Numarasina Gore 0 - 3 Arasinda
  // Degiserek Gelmesini Sagliyoruz
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {

  // Ilk Degisken Normalde Var Olan Degerin Bulundugu Degiskendir
  // Ikinci Degisken Guncelleme Isleminden Sonra Gelecek Olan Degerin Bulundugu Degiskendir
  // useState ten Sonra Parantez Icinde Yazilan Deger UseState in Baslangic Degeridir 
  const [courses, setCourses] = useState([]);

  // Fonksiyon Icinde Yapilacak Islemi Tanimliyoruz
  const handleClick = () => {

    // Ilk Deger Array Olarak Gelecegi Icin Bunu 
    // ... (Spread Operatorunu Kullanarak)
    // Belirtmek Gerekiyor
    setCourses([...courses, getRandomCourse()]);
  };

  // courses Degiskeni Uzerinden Gelen Array Tipi Degerleri 
  // map Metodu Ile Geziyoruz
  // Degerleri Ve indis Numaralarini Aliyoruz
  const courseList = courses.map((course, index) => {

    // courses Degiskeni Uzerinden Alinan Degerleri
    // indis Numarasina Gore Yazdiriyoruz
    return <Course key={index} courseName={course} />;
  });
  return (
    <div className="App">

      {/* Butona Tiklandiginda 
          handleClick Fonksiyonunu Cagiriyoruz */}
      <button className="appButton" onClick={handleClick}>
        Kurs Ekle
      </button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;