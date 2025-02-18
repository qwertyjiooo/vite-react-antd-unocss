import { create } from 'zustand'

const useBearStore = create((set) => ({
    bears: 'default', // 默认主题
    increasePopulation: () => {
        return set(state => ({
            // 黑色主题
            bears: state.bears === 'default' ? 'black' : 'default'
        }))
    },
}))

export default useBearStore