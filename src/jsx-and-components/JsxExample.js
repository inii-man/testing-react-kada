// Mengimpor React library dari 'react' package
import React from 'react';

// =========================================================
// SLIDE 8: HTML within the tag JavaScript operation
// =========================================================

// Membuat sebuah Function Component bernama JsxOperation
export const JsxOperation = () => {
  // Mendeklarasikan variabel konstan 'a' dengan nilai 3
  const a = 3;
  // Mendeklarasikan variabel konstan 'b' dengan nilai 6
  const b = 6;
  
  // Mengembalikan elemen JSX (HTML-like syntax di dalam JavaScript)
  return (
    // Menggunakan tag <div> sebagai pembungkus (wrapper)
    <div>
      {/* Menggunakan kurung kurawal {} untuk mengeksekusi variabel 'a' (akan tampil 3) */}
      {a} 
      {/* Menampilkan teks literal " + " */}
      {' + '} 
      {/* Menggunakan kurung kurawal {} untuk mengeksekusi variabel 'b' (akan tampil 6) */}
      {b} 
      {/* Menampilkan teks literal " = " */}
      {' = '} 
      {/* Menggunakan kurung kurawal {} untuk mengeksekusi operasi matematika 'a+b' (akan tampil 9) */}
      {a + b}
    {/* Menutup tag <div> */}
    </div>
  );
// Menutup blok fungsi JsxOperation
}

// =========================================================
// SLIDE 9 & 10: class -> className & style is object
// =========================================================

// Membuat Function Component bernama JsxStyleAndClass dengan props 'name' (default "User")
export const JsxStyleAndClass = ({ name = "User" }) => {
  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div>. Di JSX, atribut 'class' HTML diubah menjadi 'className'
    // Atribut 'style' menerima sebuah object JavaScript, jadi menggunakan kurung kurawal ganda {{}}
    // 'padding' bernilai angka 10 (otomatis jadi '10px'), dan 'color' diisi string 'red'
    <div className="greeting" style={{ padding: 10, color: 'red' }}>
      {/* Mengeksekusi variabel 'name' dari props di dalam kurung kurawal {} */}
      {name}
      {/* Menampilkan teks literal "Hello, ." */}
      Hello, . 
      {/* Menggunakan tag <br /> untuk ganti baris. Di JSX, tag kosong HARUS ditutup (self-closing tag) */}
      <br />
      {/* Menampilkan teks literal "It is a pleasure to meet you." */}
      It is a pleasure to meet you.
    {/* Menutup tag <div> */}
    </div>
  );
// Menutup blok fungsi JsxStyleAndClass
}

// =========================================================
// SLIDE 11 & 12: Closing tag is required & Single top-level element
// =========================================================

// Membuat Function Component bernama JsxTopLevelElement
export const JsxTopLevelElement = () => {
  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag kosong <> (React.Fragment) karena JSX HANYA BOLEH mengembalikan 1 elemen utama (Single top-level element)
    <> 
      {/* Menuliskan komentar di dalam JSX harus dibungkus dengan kurung kurawal dan slash bintang */}
      {/* Menggunakan tag <div> untuk menampilkan teks "Hello" */}
      <div>Hello</div>
      {/* Menggunakan tag <div> untuk menampilkan teks "World" */}
      <div>World</div>
      
      {/* Menggunakan tag <input>. Ini adalah contoh tag yang tidak memiliki isian (empty tag) */}
      {/* Di HTML biasa, kita bisa menulis <input>. Tapi di JSX, tag ini WAJIB ditutup dengan karakter slash '/' di akhir */}
      <input type="text" readOnly value="Example input" />
      
      {/* Menggunakan tag <br /> untuk enter/baris baru. WAJIB ditutup karena tidak memiliki tag penutup terpisah */}
      <br />
    {/* Menutup tag React.Fragment </> */}
    </>
  );
// Menutup blok fungsi JsxTopLevelElement
}

// =========================================================
// KOMPONEN UTAMA (PLAYGROUND)
// =========================================================

// Mengekspor JsxPlayground sebagai komponen default
export default function JsxPlayground() {
  // Mengembalikan elemen JSX
  return (
    // Membuat container <div> dengan styling inline
    // Border 1px abu-abu, padding 16px, margin bawah 16px
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      {/* Menampilkan judul menggunakan tag <h2> */}
      <h2>JSX Examples</h2>
      
      {/* Memanggil komponen JsxOperation untuk dirender (Self-closing) */}
      <JsxOperation />
      
      {/* Memanggil komponen JsxStyleAndClass dengan mengirimkan props 'name' bernilai "John " */}
      <JsxStyleAndClass name="John " />
      
      {/* Memanggil komponen JsxTopLevelElement untuk dirender (Self-closing) */}
      <JsxTopLevelElement />
      
    {/* Menutup container <div> */}
    </div>
  );
// Menutup blok fungsi JsxPlayground
}
