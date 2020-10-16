const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-24.185861",
        lng: "-46.789703",
        name: "Lar das Meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilitdade social.",
        whatsapp: "998093284",
        images: [
            "https://images.unsplash.com/photo-1573261524302-6f1dc1458378?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1574350518720-d92affb18bee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h às 18h",
        open_on_weekends: "0"
    })

    // Consultar dados da tabela
    const selectedData = await db.all("SELECT * FROM orphanages");
    console.log(selectedData);

    // Consultar somente um orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)

    // Deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages"))
});