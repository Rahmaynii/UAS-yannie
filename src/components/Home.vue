<template>
    <div class="home">
      <h1>Selamat Datang di Rahamayani's To Do List!</h1>
      <p>Kami menyediakan layanan terbaik untuk Mencatat Kegiatan Anda.</p>
      <p>Anda bisa mencatat kegiatan Anda agar lebih tertata.</p>
      <p>Catat dan Kerjakan Semua Kegiatan Anda.</p>
      <h2>UAS dan KUIS Praktikum Pemrograman Komponen</h2>
      <p>NAMA  : RAHMAYANI</p>
      <p>NPM   : 213510310</p>
      <p>KELAS : 4A</p>
      
      <br>
      <br>
      <router-link to="/kegiatan" class="button-link">
        <button>Input Kegiatan (Store)</button>
      </router-link>
    </div>
  </template>
  
  <style>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  
  .button-link {
    text-decoration: none;
  }
  
  button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  