function criarPost(){
    const titulo = document.getElementById("titulo-post").value
    const autor = document.getElementById("autor-post").value
    const conteudo = document.getElementById("conteudo-post").value
    const imagem = document.getElementById("imagem-post").value
    document.getElementById("container-de-posts").innerHTML += `<p>Titulo do Post: ${titulo} <br/> Autor do Post: ${autor} <br/>${conteudo}</p><br/><img src="${imagem}"<br/>`


    const blog = [{
        titulo: titulo ,
        autor: autor,
        conteudo: conteudo,
        imagem: imagem
    }]


console.log(blog)
}


