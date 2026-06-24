# Penjelasan React Basics I: JSX dan Component

File ini berisi penjelasan lengkap per sintaks dari konsep JSX dan Component berdasarkan materi *React Basics I*.

---

## 1. Apa itu JSX?

JSX adalah ekstensi sintaks dari JavaScript yang digunakan oleh React. JSX memungkinkan kita untuk menulis kode yang menyerupai HTML langsung di dalam file JavaScript. JSX nantinya akan di-*transcompile* (diterjemahkan) oleh Babel menjadi bentuk `React.createElement()` yang dipahami oleh browser.

### Karakteristik dan Aturan JSX:

#### A. Memasukkan JavaScript ke dalam HTML (Tag JavaScript Operation)
Di dalam JSX, kita bisa mengeksekusi variabel atau operasi matematika JavaScript dengan menggunakan kurung kurawal `{}`.

```jsx
const a = 3;
const b = 6;
// Menghasilkan: <div>3 + 6 = 9</div>
return <div>{a} + {b} = {a+b}</div> 
```
- `{a}`: Mencetak nilai dari variabel `a`.
- `{a+b}`: Mengeksekusi penjumlahan variabel `a` dan `b`, lalu mencetak hasilnya.

#### B. `class` menjadi `className`
Dalam HTML biasa, kita menggunakan atribut `class` untuk CSS. Namun di JSX, `class` adalah kata kunci bawaan JavaScript (untuk membuat OOP Class). Oleh karena itu, kita harus menggunakan `className`.

```jsx
// Salah (HTML biasa): <div class="greeting">
// Benar (JSX):
<div className="greeting">
```

#### C. Atribut `style` menerima Object (Inline Style)
Jika di HTML styling ditulis dalam bentuk string: `style="color: red; padding: 10px"`, maka di JSX `style` menerima **Object JavaScript**. Penamaan propertinya harus menggunakan format **camelCase** (misal: `font-size` menjadi `fontSize`).

```jsx
// Perhatikan dua kurung kurawal {{}}
// Kurung kurawal pertama menandakan kita memasukkan JavaScript expression
// Kurung kurawal kedua adalah bentuk deklarasi Object literal di JavaScript
<div style={{ padding: 10, color: 'red', fontSize: '16px' }}>
```

#### D. Tag Kosong (Self-Closing Tag) WAJIB Ditutup
Di HTML, tag seperti `<br>` atau `<input>` tidak butuh penutup. Di JSX, semua tag **wajib** ditutup. Jika tidak ada isinya, wajib menggunakan *self-closing tag* `/`.

```jsx
// Salah: <br> atau <input type="text">
// Benar: 
<br />
<input type="text" />
```

#### E. Single Top-Level Element
Sebuah komponen React hanya boleh mengembalikan (return) **satu elemen induk/pembungkus**. Jika Anda memiliki banyak elemen sejajar, bungkus semuanya menggunakan `<div>` atau tag kosong `<>` yang disebut `React.Fragment`.

```jsx
// SALAH (Akan Error karena mengembalikan 2 div sejajar):
return (
  <div>Hello</div>
  <div>World</div>
)

// BENAR (Dibungkus React.Fragment):
return (
  <>
    <div>Hello</div>
    <div>World</div>
  </>
)
```

---

## 2. Apa itu Component?

Component adalah unit terkecil yang digunakan untuk menyusun sebuah halaman (UI) pada React. Setiap Component seperti kepingan puzzle lego yang dapat digunakan ulang (reusable).
Aturan paling penting: **Nama Component harus diawali dengan Huruf Kapital**.

### Jenis-jenis Component

#### A. Class Component (Komponen Klasik)
Merupakan format lawas pembuatan komponen di React. Menggunakan fitur Class (OOP) dari JavaScript. Komponen ini wajib mewarisi `React.Component` dan memiliki metode `render()`.

```jsx
import React, { Component } from 'react';

export class HelloClass extends Component {
  render() {
    // Props diambil dari this.props
    const { name } = this.props; 
    return <div>Hello {name}</div>;
  }
}
```

#### B. Function Component (Komponen Modern)
Merupakan standar terbaru dalam React modern (sejak React v16.8 / diperkenalkannya *Hooks*). Ditulis dalam bentuk fungsi JavaScript biasa (seringkali berupa Arrow Function).

```jsx
export const HelloFunction = (props) => {
  const { name } = props;
  return <div>Hello {name}</div>;
}
```

### Konsep Props dan Children

#### A. Props (Properties)
Props adalah data yang dikirimkan dari komponen induk (Parent) ke komponen anak (Child). Props sifatnya hanya bisa dibaca (read-only) oleh si penerima. Pengiriman props mirip dengan menyisipkan atribut pada tag HTML.

```jsx
// Mengirim props bernama 'user' (berupa object) dan 'color' (berupa string)
<MyComponent user={{name: "Minsu"}} color="blue" />
```

Pada komponen penerima, props ditangkap sebagai sebuah parameter berwujud Object:
```jsx
export const MyComponent = (props) => {
  // Destructuring object props
  const { user, color } = props; 
  return <div style={{ color: color }}>Hello {user.name}</div>;
}
```

#### B. Children (Anak Elemen)
`children` adalah prop khusus. Prop ini menangkap apapun (teks, HTML, atau komponen lain) yang diletakkan **di antara tag pembuka dan tag penutup** saat komponen dipanggil.

```jsx
// Memanggil komponen dan menyelipkan teks/elemen di tengahnya
<MyComponent>
  <p>Teks ini akan dikirim sebagai 'children' ke dalam MyComponent</p>
</MyComponent>
```

Pada komponen penerima:
```jsx
export const MyComponent = (props) => {
  return (
    <div>
      {/* Menampilkan apa saja yang diselipkan di antara tag MyComponent */}
      {props.children} 
    </div>
  );
}
```

---
**Catatan Tambahan untuk Pembuatan Playground:**
Semua kode playground (`JsxExample.js` dan `ComponentExample.js`) sudah dipenuhi dengan penjelasan di setiap barisnya menggunakan blok komentar `//` dan `{/* */}` agar lebih mudah dipahami secara baris per baris (*line-by-line*).
