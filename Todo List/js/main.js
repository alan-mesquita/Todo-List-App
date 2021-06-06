const databaseService = DatabaseService('lista');

document.addEventListener('keydown',function (evt)
{
    const input = document.getElementById('input-novo');
    if(evt.keyCode == 13 && (input.value.trim() != '')) {
        let item = {
            id: new Date().getTime(),
            nome: input.value,
        };

        addItem(item);
        createLi(item);
        input.value = null;
    }
});

function addItem(item)
{
    databaseService.save(item);
}

function createLi(item)
{
    let ul = document.getElementById('tarefas');
    let li = document.createElement('li');
    li.className = 'collection-item';
    li.innerHTML = `
        ${item.nome}
             <div class="secondary-content">
                <i class="material-icons red-text">do_not_disturb_on</i>
                <i class="material-icons blue-text">create</i>
             </div>
    `;

    ul.appendChild(li);
}

function createElements()
{
    let lista = databaseService.get();
    lista.forEach(valor => 
    {
        createLi(valor);
    });
}

createElements();