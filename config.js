var config = {
    
    style: 'mapbox://styles/annapm03/clg4sv58k002t01qpihyp1tbk',
    accessToken: 'pk.eyJ1IjoiYW5uYXBtMDMiLCJhIjoiY2xjejFuNWZtMGVhNTN0bzFwNHd6Y29uMiJ9.0WzyF7NCuHj7m7Kw_N8dyA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Jaciments arqueològics',
    subtitle: 'Jaciments de Catalunya i del País Valencià',
    byline: 'Anna Peiró',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'Jaciment1',
            alignment: 'left',
            hidden: false,
            title: 'Empúries, Catalunya',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Empuries_statue.jpg/640px-Empuries_statue.jpg',
            description: "Empúries (en grec antic: Ἐμπόριον, Empórion 'mercat'; en llatí: Emporiae) fou una antiga colònia grega fundada pels foceus i posteriorment romana ubicada a l'extrem sud del golf de Roses, al nord-est de l'actual municipi de l'Escala, al sud de Sant Martí d'Empúries, que en conserva el nom.",
            location: {
                center:[
                    3.1203402360994232,
                    42.135167322632526
                    ],
                zoom: 16,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'Jaciment2',
            alignment: 'right',
            hidden: false,
            title: 'Puntal dels Llops, País Valencià',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Puntal_dels_Llops.jpg/640px-Puntal_dels_Llops.jpg',
            description: "El poblat ibèric del Puntal dels Llops és un assentament del segle V aC ubicat en un dels estreps meridionals de la serra Calderona. Està situat al terme municipal d'Olocau (Camp de Túria, País Valencià), al cim d'un promontori a 427 m sobre el nivell del mar i a més de 150 m sobre el pla, amb àmplia visibilitat sobre el territori del Camp de Túria i el corredor del barranc de Carraixet que dona pas al nord.",
            location: {
                center: [-0.5418779195284742,39.701904630036324],                
                zoom: 16,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        ,{
            id: 'Jaciment3',
            alignment: 'left',
            hidden: false,
            title: 'Abric Romaní, Catalunya',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Interior_del_jaciment_de_l%27Abric_Roman%C3%AD_de_Capellades_%28restored%29.jpg/640px-Interior_del_jaciment_de_l%27Abric_Roman%C3%AD_de_Capellades_%28restored%29.jpg',
            description: "L'Abric Romaní és un jaciment arqueològic localitzat als Cingles del Capelló, en un massís de travertí que travessa la Serralada Prelitoral Catalana, sobre el qual s'assenta el nucli de Capellades. El jaciment es troba a uns 350 metres sobre el nivell del mar i uns 60 metres per sobre del llit del riu Anoia. El jaciment arqueològic se situa cronològicament en el paleolític mitjà i s'ha datat mitjançant els sistemes de C14 i urani/teli, i comprèn una forquilla cronològica que abraça des des de fa 70.000 anys, al llit geològic del jaciment, fins a uns 39.000 abans del present, i és ocupat genuïnament per part d'Homo neanderthalensis.",
            location: {
                center: [1.6884004203326413,41.53284490851837],
                zoom: 16,
                pitch: 10,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Jaciment4',
            alignment: 'right',
            hidden: false,
            title: 'Termes romanes de Valentia, País Valencià',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Valencia_-_Termas_Romanas_Almoina_01.jpg/640px-Valencia_-_Termas_Romanas_Almoina_01.jpg',
            description: "Les termes romanes de la ciutat romana de Valentia es troben en l'actual Museu de l'Almoina, València. Eren uns banys públics construïts poc de temps després de la fundació de la ciutat l'any 138 ae. Les primeres restes n'aparegueren l'any 1976, i les identificà com a termes el 1990 la SIAM.",
            location: {
                center: [-0.3743282912844563,39.47613561818204],
                zoom: 18,
                pitch: 10,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
