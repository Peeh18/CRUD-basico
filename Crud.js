console.log('Olá!');
console.log('#ConstruindoCRUD');

// [CRUD] JavaScript BÁSICO 
const miniWeb = {
    usuarios: [
        {
            username: 'ph',
        }
    ],
    // lista que contem as informações dos usuarios
    posts: [
        {
            id: 1,
            owner: 'ph',
            content: 'Primeira publicação'
        }
    ],
};
// CREATE
function criaPost(dados) {
    miniWeb.posts.push({
        id: miniWeb.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost({ owner: 'ph', content: 'Segunda publicação' }); 
criaPost({ owner: 'ph', content: 'Terceira publicação' }); 
criaPost({ owner: 'ph', content: 'Publicação teste' }); 
// console.log(miniWeb.posts)

// READ
function pegaPosts() {
    return miniWeb.posts;
}
console.log(pegaPosts())

// UPDATE
function atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}
atualizaContentDoPost(3, 'Novo conteúdo da publicação')
console.log(pegaPosts())

// DELETE
function apagaPost(id) {
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniWeb.posts = listaDePostsAtualizada;
}
apagaPost(1);
console.log(pegaPosts());
