import axios from "@/utils/axios"

export const calcSum = data => axios.post('/calcSum', data)