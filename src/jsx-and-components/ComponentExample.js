// Mengimpor React library dan class 'Component' dari 'react' package
import React, { Component } from 'react';

// =========================================================
// SLIDE 15: Components
// =========================================================

// Membuat sebuah Function Component bernama MyComponent
// Menerima parameter destructuring 'children' dari props
export const MyComponent = ({ children }) => {
  // Mengembalikan elemen JSX
  return (
    // Membuat <div> dengan styling inline menggunakan object
    <div style={{
      // Memberikan padding sebesar 20px
      padding: 20,
      // Memberikan warna teks biru ("blue")
      color: "blue"
    // Menutup kurung kurawal styling dan bracket pembuka tag <div>
    }}>
      {/* Menampilkan isi dari prop 'children' (apapun yang diapit oleh tag pembuka & penutup komponen ini nantinya) */}
      {children}
    {/* Menutup tag <div> */}
    </div>
  );
// Menutup blok fungsi MyComponent
}

// Membuat sebuah Function Component bernama AppComponent
export const AppComponent = () => {
  // Mengembalikan elemen JSX
  return (
    // Membuat <div> sebagai elemen pembungkus (Single top-level element)
    <div>
      {/* Menampilkan paragraf "Hello" */}
      <p>Hello</p>
      
      {/* Menggunakan (memanggil) MyComponent yang sudah kita buat sebelumnya */}
      {/* Teks "Nice to meet you" di antara tag pembuka & penutup ini akan dikirim sebagai prop 'children' ke dalam MyComponent */}
      <MyComponent>Nice to meet you</MyComponent>
      
      {/* Menampilkan <div> berisi teks "Goodbye" */}
      <div>Goodbye</div>
    {/* Menutup tag <div> pembungkus utama */}
    </div>
  );
// Menutup blok fungsi AppComponent
}

// =========================================================
// SLIDE 16: Class Components and Function Components
// =========================================================

// Membuat Class Component bernama HelloClass yang merupakan turunan dari React.Component
export class HelloClass extends Component {
  // Class Component WAJIB memiliki method render() untuk mengembalikan JSX
  render() {
    // Mengambil nilai variabel 'name' dengan melakukan destructuring dari object 'this.props'
    const { name } = this.props;
    // Mengembalikan JSX berisi <div> yang menampilkan teks dari variabel 'name' dan teks "Hello (Class)."
    return <div>{name} Hello (Class).</div>;
  // Menutup blok method render
  }
// Menutup blok class HelloClass
}

// Membuat Function Component bernama HelloFunction menggunakan Arrow Function
// Menerima parameter 'props'
export const HelloFunction = (props) => {
  // Mengambil nilai variabel 'name' dengan melakukan destructuring dari object 'props'
  const { name } = props;
  // Mengembalikan JSX berisi <div> yang menampilkan teks dari variabel 'name' dan teks "Hello (Function)."
  return <div>{name} Hello (Function).</div>;
// Menutup blok fungsi HelloFunction
}

// =========================================================
// SLIDE 19 & 20: Component characteristics (Props & Children)
// =========================================================

// Membuat Function Component bernama MyComponentWithProps yang menerima parameter 'props'
export const MyComponentWithProps = (props) => {
  // Melakukan destructuring untuk mengambil 3 nilai dari object 'props': 'user', 'color', dan 'children'
  const { user, color, children } = props;
  
  // Mengembalikan elemen JSX
  return (
    // Membuat <div> dengan styling inline, menggunakan object literal { color: color } (disingkat menjadi { color })
    <div style={{ color }}>
      {/* Menampilkan paragraf yang mengambil property 'name' dari object 'user' */}
      {/* Menggunakan tanda tanya (?) yaitu Optional Chaining untuk mencegah error jika 'user' bernilai undefined/null */}
      <p>{user?.name}'s sub element is!</p>
      
      {/* Menampilkan 'children' yaitu elemen apapun yang berada di dalam tag komponen ini saat dipanggil */}
      {children}
    {/* Menutup tag <div> */}
    </div>
  );
// Menutup blok fungsi MyComponentWithProps
}

// Membuat Function Component bernama ComponentCharacteristics untuk mendemonstrasikan cara pemakaian komponen
export const ComponentCharacteristics = () => {
  // Mengembalikan elemen JSX
  return (
    // Memanggil MyComponentWithProps dengan memberikan 2 props kustom: 'user' (berupa object) dan 'color' (berupa string)
    <MyComponentWithProps user={{name: "Minsu"}} color="blue">
      {/* Elemen <div> di bawah ini akan secara otomatis dikirim sebagai prop 'children' ke MyComponentWithProps */}
      <div>Hello inside characteristics.</div>
    {/* Menutup tag MyComponentWithProps */}
    </MyComponentWithProps>
  );
// Menutup blok fungsi ComponentCharacteristics
}

// =========================================================
// KOMPONEN UTAMA (PLAYGROUND)
// =========================================================

// Mengekspor ComponentPlayground sebagai komponen default
export default function ComponentPlayground() {
  // Mengembalikan elemen JSX
  return (
    // Membuat container utama dengan border dan padding
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      {/* Menampilkan judul */}
      <h2>Component Examples</h2>
      
      {/* Merender AppComponent yang mendemonstrasikan cara memanggil komponen di dalam komponen lain */}
      <AppComponent />
      
      {/* Merender HelloClass (Class Component) dengan mengirim prop 'name' bernilai "Minsu" */}
      <HelloClass name="Minsu" />
      
      {/* Merender HelloFunction (Function Component) dengan mengirim prop 'name' bernilai "Younghee" */}
      <HelloFunction name="Younghee" />
      
      {/* Merender ComponentCharacteristics yang mendemonstrasikan pengiriman props complex (object) dan children */}
      <ComponentCharacteristics />
      
    {/* Menutup container */}
    </div>
  );
// Menutup blok fungsi ComponentPlayground
}
