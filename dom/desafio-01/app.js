// Desafio 1 - alterar nome e idade
new Vue({
    el:'#desafio',
    data: {
        nome: 'Ivan Cichinato',
        idade: 30,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadeX3(){
            return this.idade * 3
        },
        random(){
            return Math.random();
        }
    }
})