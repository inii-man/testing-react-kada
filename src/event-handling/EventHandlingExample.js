// Mengimpor React dan hook useState dari 'react' package
import React, { useState } from 'react';

// =========================================================
// SLIDE 5 & 9: Event handling method & DOM button click
// =========================================================

// Membuat Function Component bernama ButtonClickEvent
export const ButtonClickEvent = () => {
  // Mendeklarasikan fungsi handleClick untuk menangani event klik
  const handleClick = () => {
    // Menampilkan alert dengan pesan "clicked."
    alert("clicked.");
  // Menutup fungsi handleClick
  }

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Tombol dengan event handler onClick yang memanggil fungsi handleClick */}
      <button onClick={handleClick}>Click here (Function Declaration)</button>
      
      {/* Memberikan jarak antar tombol */}
      <span style={{ margin: '0 10px' }}></span>
      
      {/* Tombol dengan event handler onClick menggunakan Anonymous Function */}
      <button onClick={() => { alert('You clicked.'); }}>Click here (Anonymous Function)</button>
    {/* Menutup tag <div> */}
    </div>
  );
// Menutup blok fungsi ButtonClickEvent
}

// =========================================================
// SLIDE 6 & 10: Event Object & DOM Input value State to store
// =========================================================

// Membuat Function Component bernama InputValueState
export const InputValueState = () => {
  // Membuat state inputValue dengan nilai awal "defaultValue"
  const [inputValue, setInputValue] = useState("defaultValue");

  // Mendeklarasikan fungsi handleChange yang menerima parameter event
  const handleChange = (event) => {
    // Memperbarui state inputValue dengan nilai yang dimasukkan ke input (event.target.value)
    setInputValue(event.target.value);
  // Menutup fungsi handleChange
  }

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Input field dengan event onChange yang memanggil handleChange */}
      <input onChange={handleChange} defaultValue={inputValue} />
      
      {/* Pindah baris */}
      <br />
      
      {/* Menampilkan nilai yang telah diinputkan */}
      The entered value is: {inputValue}
    {/* Menutup tag <div> */}
    </div>
  );
// Menutup blok fungsi InputValueState
}

// =========================================================
// SLIDE 11: Multiple Input processing simultaneously
// =========================================================

// Membuat Function Component bernama MultipleInputProcessing
export const MultipleInputProcessing = () => {
  // Membuat state user berupa object dengan properti name dan school
  const [user, setUser] = useState({ name: "Minsu", school: "Elice" });

  // Mendeklarasikan fungsi handleChange untuk menangani perubahan pada semua input
  const handleChange = (event) => {
    // Mengambil name dan value dari event.target (elemen input yang memicu event)
    const { name, value } = event.target;
    // Membuat salinan object state user menggunakan spread operator
    const newUser = { ...user };
    // Memperbarui properti yang sesuai (name atau school) dengan nilai baru
    newUser[name] = value;
    // Menyimpan salinan object yang sudah diperbarui ke dalam state
    setUser(newUser);
  // Menutup fungsi handleChange
  };

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Input untuk nama, harus memiliki atribut name="name" agar cocok dengan properti state */}
      <input name="name" onChange={handleChange} value={user.name} />
      
      {/* Pindah baris */}
      <br />
      
      {/* Input untuk sekolah, harus memiliki atribut name="school" agar cocok dengan properti state */}
      <input name="school" onChange={handleChange} value={user.school} />
      
      {/* Menampilkan hasil inputan */}
      <p>
        {/* Mengambil nilai user.name dan user.school */}
        {user.name} is {user.school} at 
        <br />
        {/* Teks tambahan */}
        Currently enrolled.
      {/* Menutup tag <p> */}
      </p>
    {/* Menutup tag <div> */}
    </div>
  );
// Menutup blok fungsi MultipleInputProcessing
}

// =========================================================
// SLIDE 13: Transmitting events between components
// =========================================================

// Membuat Function Component MyForm yang menerima prop onChange
const MyForm = ({ onChange }) => {
  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Menampilkan teks Label "Name: " */}
      <span>Name: </span>
      {/* Input field dengan event onChange yang akan memanggil fungsi dari props onChange */}
      <input onChange={onChange} />
    {/* Menutup tag <div> */}
    </div>
  )
// Menutup blok fungsi MyForm
}

// Membuat Function Component EventTransmission
export const EventTransmission = () => {
  // Membuat state username dengan nilai awal string kosong
  const [username, setUsername] = useState('')

  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Menampilkan sapaan menggunakan nilai dari state username */}
      <h1>{username}Welcome, .</h1>
      
      {/* Memanggil komponen MyForm dan mengirimkan fungsi ke prop onChange */}
      <MyForm 
        // Definisi fungsi anonim untuk prop onChange
        onChange={(event) => {
          // Memperbarui state username dengan nilai input dari MyForm
          setUsername(event.target.value)
        // Menutup definisi fungsi
        }}
      // Menutup tag <MyForm>
      />
    {/* Menutup tag <div> */}
    </div>
  )
// Menutup blok fungsi EventTransmission
}

// =========================================================
// SLIDE 14: Custom Event
// =========================================================

// Membuat Function Component SOS yang menerima prop onSOS
const SOS = ({ onSOS }) => {
  // Membuat state count untuk menghitung berapa kali tombol ditekan
  const [count, setCount] = useState(0);

  // Mendeklarasikan fungsi handleClick
  const handleClick = () => {
    // Jika count sudah mencapai 2 (berarti ini tekanan ke-3)
    if(count >= 2) {
      // Memanggil fungsi custom event onSOS dari props
      onSOS();
    // Menutup blok if
    }
    // Menambah nilai state count dengan 1
    setCount(count + 1);
  // Menutup fungsi handleClick
  }

  // Mengembalikan elemen JSX berupa tombol dengan event onClick
  return (
    <button onClick={handleClick}>
      {/* Menampilkan teks penjelasan beserta nilai count saat ini */}
      Pressing three times will trigger an emergency call({count})
    {/* Menutup tag <button> */}
    </button>
  );
// Menutup blok fungsi SOS
}

// Membuat Function Component CustomEventExample
export const CustomEventExample = () => {
  // Mengembalikan elemen JSX
  return (
    // Menggunakan tag <div> sebagai pembungkus
    <div>
      {/* Memanggil komponen SOS dan mengirimkan fungsi ke prop onSOS */}
      <SOS
        // Fungsi ini akan dijalankan ketika custom event onSOS dipicu
        onSOS={() => {
          // Menampilkan alert darurat
          alert("Emergency!");
        // Menutup definisi fungsi onSOS
        }}
      // Menutup tag <SOS>
      />
    {/* Menutup tag <div> */}
    </div>
  );
// Menutup blok fungsi CustomEventExample
}

// =========================================================
// KOMPONEN UTAMA (PLAYGROUND)
// =========================================================

// Mengekspor EventHandlingPlayground sebagai komponen default
export default function EventHandlingPlayground() {
  // Mengembalikan elemen JSX
  return (
    // Membuat container <div> dengan styling inline
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      {/* Menampilkan judul utama */}
      <h2>Event Handling Examples</h2>

      {/* Menampilkan subjudul */}
      <h3>1. DOM Button Click</h3>
      {/* Memanggil komponen ButtonClickEvent */}
      <ButtonClickEvent />

      {/* Menampilkan subjudul */}
      <h3>2. DOM Input Value State</h3>
      {/* Memanggil komponen InputValueState */}
      <InputValueState />

      {/* Menampilkan subjudul */}
      <h3>3. Multiple Input Processing</h3>
      {/* Memanggil komponen MultipleInputProcessing */}
      <MultipleInputProcessing />

      {/* Menampilkan subjudul */}
      <h3>4. Transmitting Events Between Components</h3>
      {/* Memanggil komponen EventTransmission */}
      <EventTransmission />

      {/* Menampilkan subjudul */}
      <h3>5. Custom Event</h3>
      {/* Memanggil komponen CustomEventExample */}
      <CustomEventExample />

    {/* Menutup container <div> */}
    </div>
  );
// Menutup blok fungsi EventHandlingPlayground
}
