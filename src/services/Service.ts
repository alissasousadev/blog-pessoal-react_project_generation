import axios from "axios";

const api = axios.create({
    baseURL: 'https://blogpessoal-zypu.onrender.com'
})

export const cadastroUsuario = async (url:string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}  