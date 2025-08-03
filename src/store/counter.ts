

const defineStore = (window as any).defineStore;


export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      // @ts-ignore
      this.count++
    }
  }
})
