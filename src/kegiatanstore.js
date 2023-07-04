import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();

export const useKegiatanStore = defineStore('kegiatan', {
  state: () => ({
    kegiatan: [
      { id: 0, text: 'Sholat Tahajud dan Subuh', done: true },
      { id: 1, text: 'Memasak dan menyapu kamar', done: true },
      { id: 2, text: 'Mandi dan bersiap ke kampus', done: false }
    ]
  }),
  actions: {
    addKegiatan(kegiatan) {
      this.kegiatan.push(kegiatan);
    },
    removeKegiatan(kegiatan) {
      this.kegiatan = this.kegiatan.filter(item => item !== kegiatan);
    },
    clearKegiatan() {
      this.kegiatan = [];
    }
  },
  getters: {
    getKegiatanCount() {
      return this.kegiatan.length;
    },
    getCompletedKegiatan() {
      return this.kegiatan.filter(item => item.done);
    }
  }
});