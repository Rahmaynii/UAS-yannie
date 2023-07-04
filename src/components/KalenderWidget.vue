<template>
    <div class="kalender-widget">
      <h2>Kalender</h2>
      <div class="kalender">
        <div class="bulan">{{ namaBulan }}</div>
        <div class="tahun">{{ tahun }}</div>
        <table>
          <thead>
            <tr>
              <th v-for="hari in namaHari" :key="hari">{{ hari }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in kalender" :key="row">
              <td v-for="hari in row" :key="hari" :class="{'hari-ini': isHariIni(hari)}">{{ hari }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        namaHari: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
        namaBulan: '',
        tahun: 0,
        kalender: []
      };
    },
    mounted() {
      const tanggalSekarang = new Date();
      this.namaBulan = this.getNamaBulan(tanggalSekarang.getMonth());
      this.tahun = tanggalSekarang.getFullYear();
      this.kalender = this.generateKalender(tanggalSekarang.getMonth(), tanggalSekarang.getFullYear());
    },
    methods: {
      getNamaBulan(bulan) {
        const namaBulan = [
          'Januari',
          'Februari',
          'Maret',
          'April',
          'Mei',
          'Juni',
          'Juli',
          'Agustus',
          'September',
          'Oktober',
          'November',
          'Desember'
        ];
        return namaBulan[bulan];
      },
      generateKalender(bulan, tahun) {
        const tanggalPertama = new Date(tahun, bulan, 1);
        const hariAwal = tanggalPertama.getDay();
        const jumlahHari = new Date(tahun, bulan + 1, 0).getDate();
  
        let kalender = [[]];
        let baris = 0;
        for (let i = 0; i < hariAwal; i++) {
          kalender[baris].push('');
        }
  
        for (let hari = 1; hari <= jumlahHari; hari++) {
          if (kalender[baris].length === 7) {
            kalender.push([]);
            baris++;
          }
          kalender[baris].push(hari);
        }
  
        return kalender;
      },
      isHariIni(hari) {
        const tanggalSekarang = new Date();
        const bulanSekarang = tanggalSekarang.getMonth();
        const tahunSekarang = tanggalSekarang.getFullYear();
        const hariSekarang = tanggalSekarang.getDate();
  
        return bulanSekarang === this.getIndeksBulan(this.namaBulan) && tahunSekarang === this.tahun && hari === hariSekarang;
      },
      getIndeksBulan(namaBulan) {
        const namaBulanArr = [
          'Januari',
          'Februari',
          'Maret',
          'April',
          'Mei',
          'Juni',
          'Juli',
          'Agustus',
          'September',
          'Oktober',
          'November',
          'Desember'
        ];
        return namaBulanArr.indexOf(namaBulan);
      }
    }
  };
  </script>
  
  <style scoped>
  .kalender-widget {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .kalender-widget h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .kalender {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 10px;
  }
  
  .bulan {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .tahun {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 8px;
    border: 1px solid #ccc;
  }
  
  .hari-ini {
    background-color: #f5f5f5;
    font-weight: bold;
  }
  
  tr:nth-child(odd) {
    background-color: #fff;
  }
  
  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
  </style>
  