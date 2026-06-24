// Mengimpor React dan hooks yang dibutuhkan (useState, useEffect, useMemo, useCallback, useRef) dari 'react' package
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

// =========================================================
// SLIDE 8 & 9: State Hook
// =========================================================

// Membuat Function Component bernama StateHookExample
export const StateHookExample = () => {
  // Mendeklarasikan state 'title' dengan nilai awal string kosong, dan fungsi 'setTitle' untuk memperbaruinya
  const [title, setTitle] = useState("");

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Menampilkan teks yang berisi nilai dari state 'title' */}
      <p>Current Title: {title}</p>
      
      {/* Tombol untuk mengubah state dengan memberikan nilai baru secara langsung */}
      <button onClick={() => setTitle("Hello")}>
        Set to "Hello"
      {/* Menutup tag <button> */}
      </button>
      
      {/* Memberikan jarak antar tombol */}
      <span style={{ margin: '0 10px' }}></span>
      
      {/* Tombol untuk mengubah state menggunakan callback yang menerima nilai 'current' sebelumnya */}
      <button onClick={() => setTitle((current) => current + " World")}>
        Append " World"
      {/* Menutup tag <button> */}
      </button>
    {/* Menutup tag <div> */}
    </div>
  );
  // Menutup blok fungsi StateHookExample
}

// =========================================================
// SLIDE 11 & 12: Effect Hook
// =========================================================

// Membuat Function Component bernama EffectHookExample
export const EffectHookExample = () => {
  // Mendeklarasikan state 'count' dengan nilai awal 0
  const [count, setCount] = useState(0);

  // Menggunakan useEffect untuk menjalankan side effect (seperti console.log) setiap kali state 'count' berubah
  useEffect(() => {
    // Menampilkan pesan ke console browser
    console.log(`The button has been clicked ${count} times.`);
  // Dependencies array berisi 'count', artinya effect ini akan berjalan ulang jika 'count' berubah nilainya
  }, [count]);

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Menampilkan nilai state 'count' */}
      <p>Count is: {count}</p>
      {/* Tombol untuk menambah state 'count' sebanyak 1 ketika diklik */}
      <button onClick={() => setCount(count + 1)}>
        Click here
      {/* Menutup tag <button> */}
      </button>
    {/* Menutup tag <div> */}
    </div>
  );
  // Menutup blok fungsi EffectHookExample
}

// Membuat Function Component bernama EffectCleanupExample untuk mendemonstrasikan cleanup function pada useEffect
export const EffectCleanupExample = () => {
  // Mendeklarasikan state 'seconds' dengan nilai awal 0
  const [seconds, setSeconds] = useState(0);

  // Menggunakan useEffect untuk membuat timer menggunakan setInterval
  useEffect(() => {
    // Menyimpan ID interval ke dalam variabel intervalId agar nanti bisa dibersihkan (cleanup)
    const intervalId = setInterval(() => {
      // Memperbarui state 'seconds' dengan menambahkan 1 dari nilai sebelumnya (current)
      setSeconds((current) => current + 1);
    // Mengatur interval waktu 1000 milidetik (1 detik)
    }, 1000);

    // Mengembalikan fungsi cleanup (akan dieksekusi sebelum komponen dirender ulang, atau ketika komponen dihapus/unmounted)
    return () => {
      // Membersihkan interval menggunakan intervalId yang sudah disimpan sebelumnya, mencegah kebocoran memori (memory leak)
      clearInterval(intervalId);
    // Menutup fungsi cleanup
    };
  // Dependencies array kosong [], artinya effect ini hanya dijalankan sekali ketika komponen pertama kali dimuat (mounted)
  }, []);

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Menampilkan jumlah detik yang telah berjalan */}
      Timer running: {seconds} seconds
    {/* Menutup tag <div> */}
    </div>
  );
  // Menutup blok fungsi EffectCleanupExample
}

// =========================================================
// SLIDE 15: useMemo
// =========================================================

// Membuat Function Component bernama UseMemoExample
export const UseMemoExample = () => {
  // Membuat state 'firstName' dengan nilai awal 'Cheolsu'
  const [firstName, setFirstName] = useState('Cheolsu');
  // Membuat state 'lastName' dengan nilai awal 'Kim'
  const [lastName, setLastName] = useState('Kim');

  // Menggunakan useMemo untuk mengingat (memoize) hasil perhitungan string. 
  // Perhitungan ini hanya dilakukan kembali JIKA firstName atau lastName mengalami perubahan.
  const fullName = useMemo(() => {
    // Menampilkan log di console untuk membuktikan kapan proses ini dihitung ulang
    console.log("Calculating fullName...");
    // Mengembalikan string gabungan dari firstName dan lastName
    return `${firstName} ${lastName}`;
  // Dependencies array berisi 'firstName' dan 'lastName'
  }, [firstName, lastName]);

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Menampilkan fullName hasil memoization */}
      <p>Full Name: {fullName}</p>
      
      {/* Tombol untuk mengubah firstName yang akan memicu perhitungan ulang pada useMemo */}
      <button onClick={() => setFirstName('Minsu')}>Change First Name</button>
      
      {/* Memberikan jarak antar tombol */}
      <span style={{ margin: '0 10px' }}></span>
      
      {/* Tombol untuk mengubah lastName yang akan memicu perhitungan ulang pada useMemo */}
      <button onClick={() => setLastName('Lee')}>Change Last Name</button>
    {/* Menutup tag <div> */}
    </div>
  );
  // Menutup blok fungsi UseMemoExample
}

// =========================================================
// SLIDE 16: useCallback
// =========================================================

// Membuat Function Component bernama UseCallbackExample
export const UseCallbackExample = () => {
  // Membuat state 'firstName' dengan nilai awal 'Cheolsu'
  const [firstName, setFirstName] = useState('Cheolsu');
  // Membuat state 'lastName' dengan nilai awal 'Kim'
  const [lastName, setLastName] = useState('Kim');

  // Menggunakan useCallback untuk mengingat (memoize) sebuah fungsi (function definition). 
  // Fungsi ini tidak akan dibuat ulang saat komponen re-render, KECUALI firstName atau lastName berubah nilainya.
  const getFullName = useCallback(() => {
    // Mengembalikan string gabungan dari firstName dan lastName
    return `${firstName} ${lastName}`;
  // Dependencies array berisi 'firstName' dan 'lastName'
  }, [firstName, lastName]);

  // Mengembalikan elemen JSX
  return (
    // Menggunakan React Fragment <> </> untuk pembungkus (top-level element)
    <>
      {/* Memanggil fungsi getFullName() dan menampilkannya */}
      <div>Result from getFullName(): {getFullName()}</div>
      
      {/* Tombol untuk mengubah firstName */}
      <button onClick={() => setFirstName('Minsu')}>Change First Name</button>
    {/* Menutup React Fragment */}
    </>
  );
  // Menutup blok fungsi UseCallbackExample
}

// =========================================================
// SLIDE 17: useRef
// =========================================================

// Membuat Function Component bernama UseRefExample
export const UseRefExample = () => {
  // Menggunakan useRef untuk membuat referensi yang bisa ditempel ke DOM element, nilai awalnya null
  const inputRef = useRef(null);

  // Mendeklarasikan fungsi onButtonClick
  const onButtonClick = () => {
    // Mengakses elemen DOM input secara langsung menggunakan inputRef.current, lalu memanggil fungsi focus() agar kursor berpindah ke input tersebut
    inputRef.current.focus();
  // Menutup fungsi onButtonClick
  }

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Input bertipe text dan menempelkan 'inputRef' ke atribut 'ref' agar bisa diakses langsung oleh React */}
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      
      {/* Tombol yang jika diklik akan memanggil onButtonClick yang kemudian memfokuskan kursor ke input */}
      <button onClick={onButtonClick}>
        Input as focus
      {/* Menutup tag <button> */}
      </button>
    {/* Menutup tag <div> */}
    </div>
  );
  // Menutup blok fungsi UseRefExample
}

// =========================================================
// SLIDE 19: Custom Hook
// =========================================================

// Membuat sebuah fungsi (Custom Hook) yang namanya DIAWALI dengan "use"
function useMyStatus() {
  // Mendeklarasikan state 'status' dengan nilai awal 'Offline' di dalam Custom Hook
  const [status, setStatus] = useState('Offline');

  // Menggunakan useEffect untuk mensimulasikan perubahan status (misal seperti mengambil data dari internet)
  useEffect(() => {
    // Mengatur timer menggunakan setTimeout
    const timeout = setTimeout(() => {
      // Mengubah status menjadi 'Online' setelah 2 detik
      setStatus('Online');
    // Waktu tunggu 2000 milidetik (2 detik)
    }, 2000);

    // Fungsi cleanup untuk membatalkan timer jika komponen dihapus sebelum 2 detik berlalu
    return () => clearTimeout(timeout);
  // Dependencies array kosong [], berjalan sekali saat komponen dimuat
  }, []);

  // Custom Hook harus mengembalikan nilai (dalam hal ini mengembalikan state status)
  return status;
// Menutup fungsi useMyStatus
}

// Membuat Function Component bernama CustomHookExample untuk memakai Custom Hook yang sudah dibuat
export const CustomHookExample = () => {
  // Memanggil Custom Hook 'useMyStatus' dan menyimpan nilai kembaliannya ke dalam variabel 'currentStatus'
  const currentStatus = useMyStatus();

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Menampilkan status yang didapat dari Custom Hook */}
      <p>Current Status (changes to Online in 2s): {currentStatus}</p>
    {/* Menutup tag <div> */}
    </div>
  );
  // Menutup blok fungsi CustomHookExample
}

// =========================================================
// KOMPONEN UTAMA (PLAYGROUND)
// =========================================================

// Mengekspor HooksPlayground sebagai komponen default
export default function HooksPlayground() {
  // Mengembalikan elemen JSX
  return (
    // Membuat container <div> dengan styling inline
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      {/* Menampilkan judul utama */}
      <h2>Hooks Examples</h2>

      {/* Menampilkan subjudul */}
      <h3>1. State Hook (useState)</h3>
      {/* Memanggil komponen StateHookExample */}
      <StateHookExample />

      {/* Menampilkan subjudul */}
      <h3>2. Effect Hook (useEffect)</h3>
      {/* Memanggil komponen EffectHookExample */}
      <EffectHookExample />
      
      {/* Menampilkan subjudul untuk Effect Hook dengan Cleanup */}
      <h4>Effect Hook with Cleanup (Timer)</h4>
      {/* Memanggil komponen EffectCleanupExample */}
      <EffectCleanupExample />

      {/* Menampilkan subjudul */}
      <h3>3. Other Hooks: useMemo</h3>
      {/* Memanggil komponen UseMemoExample */}
      <UseMemoExample />

      {/* Menampilkan subjudul */}
      <h3>4. Other Hooks: useCallback</h3>
      {/* Memanggil komponen UseCallbackExample */}
      <UseCallbackExample />

      {/* Menampilkan subjudul */}
      <h3>5. Other Hooks: useRef</h3>
      {/* Memanggil komponen UseRefExample */}
      <UseRefExample />

      {/* Menampilkan subjudul */}
      <h3>6. Creating Your Own Hook</h3>
      {/* Memanggil komponen CustomHookExample */}
      <CustomHookExample />

    {/* Menutup container <div> */}
    </div>
  );
  // Menutup blok fungsi HooksPlayground
}
