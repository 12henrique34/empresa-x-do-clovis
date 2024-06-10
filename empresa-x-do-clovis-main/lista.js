document.querySelectorAll('#lista-itens li'). forEach(function(item) {
item.addEventListener('click', function(){
document.getElementById('mensagem-item'). textContent = this.getAttribute
('data-mensagem');
    });0
});

document.querySelectorAll('#lista-itens li').forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById('mensagem-item').textContent = this.getAttribute
        ('data-mensagem');
        document.getElementById('imagem-item').src = this.getElementById('data-imagem');
        document.getElementById('imagem-item').style.display = 'block';
        document.getElementById('descrcao-item').textContent = this.getAttribute
        ('data-descricao')

    });

});