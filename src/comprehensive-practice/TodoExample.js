import React, { useState } from 'react';

// =========================================================
// SLIDE 4-22: Comprehensive Practice - Todo List
// Implementasi: Form, List (map), State dinamis, Styling, Fitur tambahan
// =========================================================

export const TodoApp = () => {
  // State untuk menyimpan daftar todo (berupa array of objects)
  const [todos, setTodos] = useState([
    { id: 1, text: "Belajar React Basics", completed: false },
    { id: 2, text: "Latihan Todo List", completed: true }
  ]);
  
  // State untuk menyimpan teks inputan baru
  const [inputValue, setInputValue] = useState("");

  // Fungsi untuk menangani perubahan pada input (Event Handling)
  const handleInputChange = (event) => {
    // Memperbarui state inputValue dengan nilai yang diketik user
    setInputValue(event.target.value);
  };

  // Fungsi untuk menambah todo baru (Dynamic State Change & Form Development)
  const handleAddTodo = (event) => {
    // Mencegah form melakukan refresh halaman (default behavior)
    event.preventDefault();
    
    // Mengecek jika inputan kosong, maka tidak melakukan apa-apa
    if (inputValue.trim() === "") return;

    // Fitur tambahan: Limit Quantity (Maksimal 10 Todo)
    if (todos.length >= 10) {
      alert("Maksimal hanya 10 Todo yang diperbolehkan!");
      return;
    }

    // Membuat object todo baru
    const newTodo = {
      // Membuat ID unik sederhana menggunakan timestamp
      id: Date.now(),
      // Teks todo dari input
      text: inputValue,
      // Default belum selesai
      completed: false
    };

    // Memperbarui state todos dengan menambahkan todo baru ke array (tidak mengubah array asli secara langsung)
    setTodos([...todos, newTodo]);
    
    // Mengosongkan input setelah berhasil ditambah
    setInputValue("");
  };

  // Fungsi untuk menghapus todo berdasarkan id (Dynamic State Change)
  const handleDeleteTodo = (id) => {
    // Menggunakan filter untuk membuat array baru yang tidak berisi todo dengan id tersebut
    const updatedTodos = todos.filter(todo => todo.id !== id);
    // Memperbarui state todos
    setTodos(updatedTodos);
  };

  // Fungsi untuk mengubah status selesai/belum dari todo (Dynamic State Change & Object State Precautions)
  const handleToggleComplete = (id) => {
    // Menggunakan map untuk memodifikasi array: mencari todo dengan id yang cocok, lalu mengubah status completed-nya
    const updatedTodos = todos.map(todo => {
      // Jika id cocok, buat objek baru dengan status completed kebalikannya
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      // Jika tidak cocok, kembalikan objek aslinya
      return todo;
    });
    // Memperbarui state todos
    setTodos(updatedTodos);
  };

  // Mengembalikan elemen JSX
  return (
    // Menggunakan inline styling untuk container utama
    <div style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Form untuk menambah todo */}
      <form onSubmit={handleAddTodo} style={{ display: 'flex', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Tambahkan tugas baru..."
          // Inline styling untuk input
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          type="submit" 
          // Inline styling untuk tombol tambah
          style={{ marginLeft: '10px', padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Tambah
        </button>
      </form>

      {/* Menampilkan pesan jika tidak ada todo */}
      {todos.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>Belum ada tugas.</p>}

      {/* Daftar Todo menggunakan tag <ul> */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* Menggunakan metode array .map() untuk merender setiap item todo ke dalam bentuk <li> */}
        {todos.map(todo => (
          <li 
            // Setiap elemen di dalam list wajib memiliki prop 'key' yang unik
            key={todo.id} 
            // Inline styling dengan logika ternary untuk memberikan efek coret (line-through) jika sudah selesai
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '10px', 
              marginBottom: '8px', 
              backgroundColor: '#f9f9f9', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : '#000'
            }}
          >
            {/* Bagian kiri: Checkbox dan Teks Todo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input 
                type="checkbox" 
                // Status checkbox diambil dari nilai completed pada object todo
                checked={todo.completed} 
                // Ketika diubah, jalankan fungsi toggle
                onChange={() => handleToggleComplete(todo.id)} 
                style={{ marginRight: '10px', cursor: 'pointer' }}
              />
              {/* Menampilkan teks dari todo */}
              <span>{todo.text}</span>
            </div>

            {/* Bagian kanan: Tombol hapus */}
            <button 
              // Ketika tombol diklik, jalankan fungsi delete
              onClick={() => handleDeleteTodo(todo.id)}
              style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
      
      {/* Menampilkan status jumlah Todo */}
      <p style={{ textAlign: 'right', fontSize: '12px', color: '#555' }}>
        Total Tugas: {todos.length} / 10
      </p>

    </div>
  );
}

// Mengekspor komponen utama Playground
export default function ComprehensivePracticePlayground() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      <h2>Comprehensive Practice: Todo List</h2>
      <p>Menggabungkan State, Form, Event Handling, Array Map, dan Styling.</p>
      
      <TodoApp />
    </div>
  );
}
