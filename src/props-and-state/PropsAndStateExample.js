// Mengimpor React dan hook useState dari 'react' package
import React, { useState } from 'react';

// =========================================================
// SLIDE 4 & 5: Props & Props are read-only
// =========================================================

// Membuat sebuah Function Component bernama Welcome yang menerima 'props'
export const Welcome = (props) => {
  // Mendeklarasikan variabel username yang nilainya dari props.name ditambah string "님" (menghindari modifikasi props langsung)
  const username = props.name + "님";
  
  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <h1> untuk menampilkan teks
    <h1>
      {/* Menampilkan teks literal "Hello, " */}
      Hello, 
      {/* Mengeksekusi dan menampilkan variabel username di dalam kurung kurawal */}
      {username}
    {/* Menutup tag <h1> */}
    </h1>
  );
// Menutup blok fungsi Welcome
}

// =========================================================
// SLIDE 6 & 7: DOM Element Attributes & checked attribute
// =========================================================

// Membuat Function Component bernama DomAttributes
export const DomAttributes = () => {
  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Menggunakan className bukan class untuk penamaan class CSS */}
      <div className="example-class" tabIndex="0">
        {/* Menampilkan teks penjelasan */}
        DOM Attributes Example (className, tabIndex)
      {/* Menutup tag <div> dalam */}
      </div>

      {/* Menggunakan defaultChecked untuk memberikan nilai awal tanpa mengunci state dari checkbox */}
      <input type="checkbox" defaultChecked={false} />
      {/* Menampilkan teks label di samping checkbox */}
      Uncontrolled Checkbox (defaultChecked)
    {/* Menutup tag <div> luar */}
    </div>
  );
// Menutup blok fungsi DomAttributes
}

// =========================================================
// SLIDE 8: The key Attribute in React
// =========================================================

// Membuat Function Component bernama NamesList
export const NamesList = () => {
  // Mendeklarasikan array of objects bernama 'names'
  const names = [
    // Elemen pertama dengan key '1' (dalam praktik nyata key harus unik, misal id) dan value 'Minsu'
    {key: '1', value: 'Minsu'},
    // Elemen kedua dengan key '2' dan value 'Younghee'
    {key: '2', value: 'Younghee'},
    // Elemen ketiga dengan key '3' dan value 'Gil-dong'
    {key: '3', value: 'Gil-dong'},
  // Menutup array 'names'
  ];

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Menggunakan metode map untuk melakukan iterasi pada array 'names' */}
      {names.map((item) => (
        // Menggunakan tag <li> untuk setiap item, WAJIB memberikan prop 'key' dengan nilai unik
        <li key={item.key}>
          {/* Menampilkan nilai (value) dari item */}
          {item.value}
        {/* Menutup tag <li> */}
        </li>
      // Menutup fungsi map dan kurung JSX
      ))}
    {/* Menutup tag <div> */}
    </div>
  );
// Menutup blok fungsi NamesList
}

// =========================================================
// SLIDE 10, 11, 12: State, Do Not Modify Directly, Two Ways to Update
// =========================================================

// Membuat Function Component bernama StateCounter
export const StateCounter = () => {
  // Menggunakan hook useState untuk membuat state 'count' dengan nilai awal 0, dan fungsi 'setCount' untuk mengubahnya
  const [count, setCount] = useState(0);

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Menampilkan teks berapa kali tombol ditekan dengan nilai state 'count' */}
      <p>The button has been pressed {count} times.</p>
      
      {/* Membuat tombol yang ketika di-klik akan menjalankan fungsi setCount */}
      {/* Menggunakan updater function (current => current + 1) direkomendasikan jika nilai baru bergantung pada state sebelumnya */}
      <button onClick={() => setCount((current) => current + 1)}>
        {/* Teks pada tombol */}
        Click
      {/* Menutup tag <button> */}
      </button>
    {/* Menutup tag <div> */}
    </div>
  );
// Menutup blok fungsi StateCounter
}

// =========================================================
// SLIDE 13, 14, 15: Object State & How to Properly Update
// =========================================================

// Membuat Function Component bernama ObjectStateExample
export const ObjectStateExample = () => {
  // Menggunakan hook useState untuk membuat state 'user' bertipe objek, dan fungsi 'setUser'
  const [user, setUser] = useState({name: 'Minsu', grade: 1});

  // Membuat fungsi untuk menangani pembaruan grade
  const handleUpdateGrade = () => {
    // Memanggil fungsi setUser untuk memperbarui state 'user'
    setUser((current) => {
      // Membuat salinan objek 'current' menggunakan spread operator (...) ke dalam variabel 'newUser'
      const newUser = { ...current };
      // Mengubah nilai properti 'grade' pada objek salinan 'newUser' menjadi 2
      newUser.grade = 2;
      // Mengembalikan objek baru 'newUser' sebagai state yang baru
      return newUser;
    // Menutup callback setUser
    });
  // Menutup fungsi handleUpdateGrade
  }

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Menampilkan teks nama dari state user.name */}
      <p>Name: {user.name}</p>
      {/* Menampilkan teks grade dari state user.grade */}
      <p>Grade: {user.grade}</p>
      
      {/* Membuat tombol yang ketika di-klik akan memanggil fungsi handleUpdateGrade */}
      <button onClick={handleUpdateGrade}>
        {/* Teks pada tombol */}
        Update Grade to 2
      {/* Menutup tag <button> */}
      </button>
    {/* Menutup tag <div> */}
    </div>
  );
// Menutup blok fungsi ObjectStateExample
}

// =========================================================
// KOMPONEN UTAMA (PLAYGROUND)
// =========================================================

// Mengekspor PropsAndStatePlayground sebagai komponen default
export default function PropsAndStatePlayground() {
  // Mengembalikan elemen JSX
  return (
    // Membuat container <div> dengan styling inline
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      {/* Menampilkan judul utama */}
      <h2>Props and State Examples</h2>

      {/* Menampilkan subjudul */}
      <h3>1. Props Example</h3>
      {/* Memanggil komponen Welcome dengan mengirimkan prop 'name' */}
      <Welcome name="Suyeong" />
      {/* Memanggil komponen Welcome dengan mengirimkan prop 'name' yang berbeda */}
      <Welcome name="Younghee" />

      {/* Menampilkan subjudul */}
      <h3>2. DOM Attributes & Checked</h3>
      {/* Memanggil komponen DomAttributes */}
      <DomAttributes />

      {/* Menampilkan subjudul */}
      <h3>3. The key Attribute (List)</h3>
      {/* Memanggil komponen NamesList */}
      <NamesList />

      {/* Menampilkan subjudul */}
      <h3>4. State (Counter)</h3>
      {/* Memanggil komponen StateCounter */}
      <StateCounter />

      {/* Menampilkan subjudul */}
      <h3>5. Object State</h3>
      {/* Memanggil komponen ObjectStateExample */}
      <ObjectStateExample />

    {/* Menutup container <div> */}
    </div>
  );
// Menutup blok fungsi PropsAndStatePlayground
}
