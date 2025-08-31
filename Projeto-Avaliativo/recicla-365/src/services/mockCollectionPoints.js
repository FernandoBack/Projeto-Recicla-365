export const collectionPoints = [
    {
        id: 1,
        nome: "Ponto de Coleta Central",
        descricao: "Coleta de papel, vidro e plástico na praça principal.",
        endereco: {
            cep: "89201-000",
            logradouro: "Rua das Palmeiras",
            numero: "55",
            bairro: "Centro",
            cidade: "Joinville",
            uf: "SC"
        },
        coordenadas: {
            latitude: -26.3045,
            longitude: -48.8465
        },
        tiposResiduos: ["Papel", "Vidro", "Plástico"]
    },
    {
        id: 2,
        nome: "EcoPonto Zona Sul",
        descricao: "Ponto de descarte para baterias e eletrônicos.",
        endereco: {
            cep: "89211-000",
            logradouro: "Rua Florianópolis",
            numero: "1234",
            bairro: "Floresta",
            cidade: "Joinville",
            uf: "SC"
        },
        coordenadas: {
            latitude: -26.3358,
            longitude: -48.8488
        },
        tiposResiduos: ["Baterias", "Eletrônicos"]
    },
    {
        id: 3,
        nome: "Recicla Norte",
        descricao: "Grande container para coleta de metais e orgânicos.",
        endereco: {
            cep: "89222-000",
            logradouro: "Rua Tuiuti",
            numero: "5870",
            bairro: "Aventureiro",
            cidade: "Joinville",
            uf: "SC"
        },
        coordenadas: {
            latitude: -26.2483,
            longitude: -48.8260
        },
        tiposResiduos: ["Metal", "Orgânico"]
    },

    {
        id: 4,
        nome: "Coleta Seletiva Iririú",
        descricao: "Posto para descarte de óleo de cozinha e papelão.",
        endereco: {
            cep: "89227-000",
            logradouro: "Rua Iririú",
            numero: "3450",
            bairro: "Iririú",
            cidade: "Joinville",
            uf: "SC"
        },
        coordenadas: {
            latitude: -26.2760,
            longitude: -48.8200
        },
        tiposResiduos: ["Óleo de Cozinha", "Papelão"]
    },

    {
        id: 5,
        nome: "Estação Boa Vista",
        descricao: "Coleta exclusiva de vidro e metal.",
        endereco: {
            cep: "89227-600",
            logradouro: "Rua Albano Schmidt",
            numero: "1200",
            bairro: "Boa Vista",
            cidade: "Joinville",
            uf: "SC"
        },
        coordenadas: {
            latitude: -26.2885,
            longitude: -48.8215
        },
        tiposResiduos: ["Vidro", "Metal"]
    }
];