const NO_IMAGE = 'https://www.recia.fr/wp-content/uploads/2019/09/no_image.png';
enum TYPE_RECIPE {
    TRADITIONNEL = 'Plat Traditionnel',
    CLASSIQUE = 'Plat Classique',
    ACCOMPAGNEMENT = 'Plat Accompagnement',
    SAUCE = 'Sauce d\'Accompagnement',
    NO = 'NO'
}

const BAD_URL_PLUGIN_LIKE = 'https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Flocalhost%3A4200%2Frecipe%2F1%2FLe%2520SANGA&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943';
const recipes = [
    {
        id : 12,
        title : 'SAUCE D\'OIGNON SANS PIMENT',
        time_preparation : '20 min',
        time_cuisson : '25 min',
        description : 'Une sauce simple facile à cuisiner et riche en saveur.',
        img : [
            'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/P1000415.JPG?raw=true',
            'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/P1000397.JPG?raw=true'
        ],
        ingredients : [
            {name : 'Gros oignons', amount : '6', img: 'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/P1000398.JPG?raw=true'},
            {name : 'Tomates', amount : '6'},
            {name : 'Branche de basilic', amount : '1', img : 'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/P1000401.JPG?raw=true'},
            {name : 'Citron vert', amount : '1', img : 'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/P1000404.JPG?raw=true'},
            {name : 'Gousses d\'ail', amount : '2'},
            {name : 'Huile d\'olive', amount : '5 cs'},
            {name : 'Cube maggi végétal', amount : '1'},
            {name : 'Eau', amount : '2 cs'},
            {name : 'Sel'}
        ],
        steps : [
            'Faites bouillir de l\'eau dans une casserole.',
            'Lavez les tomates, ôtez les tiges puis retirez le pédoncule avec la pointe d\'un couteau, Plongez 4 tomates dans cette eau bouillante pendant 6 secondes, elles ne doivent pas cuire.',
            'Retirez-les, plongez-les immédiatement dans de l\'eau très froide, et enlevez la peau à l\'aide d\'un couteau.',
            'Epépinez-les, découpez-les en morceaux, réservez.',
            'Ecrasez ou mixez les 2 autres tomates, réservez.',
            'Lavez et pressez le citron, lavez et ciselez le basilic, épluchez et coupez l\'ail en petits morceaux, réservez.',
            'Epluchez les oignons et coupez-les en quartiers.',
            'Faites chauffer l\'huile dans une cocotte, ajoutez les oignons et faites-les dorer sur toutes les faces pendant 10 min, ajoutez le cube maggi, remuez sans couvrir.',
            'Baissez le feu, ajoutez de l\'ail, mélangez, ajoutez la purée de tomate, de l\'eau, laissez mijoter 10 min.',
            'Ajoutez ensuite du basilic, le jus de citron, et les morceaux tomates, remuez, goûtez, ajoutez encore de l\'eau et du sel si besoin, laissez mijoter 5 min.',
        ],
        advices: [
            'Cette sauce sans piment peut être servie avec du poulet braisé/grillé, le poisson braisé, ou comme accompagnement d\'autres plats.',
            'Je vous conseille les oignons jaunes.'
        ],
        difficult : 1,
        type : TYPE_RECIPE.SAUCE,
        plugin_like : 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fmamie-cameroun.fr%2Frecipe%2F11%2FSAUCE%2520D\'OIGNON%2520SANS%2520PIMENT&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943'
    },
    {
        id : 11,
        title : 'PUREE DE PIMENT',
        time_preparation : '20 min',
        time_cuisson : '20 min',
        description : 'Très facile à réaliser, la purée de piment est une sauce très piquante utilisée pour épicer les plats de viandes, de poissons, de légumes, ect...',
        img : [
            'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/P1000411.jpg?raw=true',
            'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/P1000383.JPG?raw=true'
        ],
        ingredients : [
            {name : 'Gros piments rouges', amount : '6', img : 'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/P1000395.JPG?raw=true'},
            {name : 'Tomates', amount : '6', img: 'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/P1000391.JPG?raw=true'},
            {name : 'Gousses d\'ail', amount : '3'},
            {name : 'Morceau de gingembre', amount : '1'},
            {name : 'Oignon', amount : '1', img : 'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/P1000385.JPG?raw=true'},
            {or_name : 'Pébè', name : 'Clous de girofle', amount : '6', img: 'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/P1000389.JPG?raw=true'},
            {name : 'Huile végétale', amount : '5 cs'},
            {name : 'Cube maggi végétal', amount : '1'},
            {name : '[Sel]'}
        ],
        steps : [
            'Ecrasez les clous de girofle, réservez.',
            'Nettoyez, épluchez, et lavez les légumes, coupez-les en petits morceaux.',
            'Mixez en premier les oignons et les tomates, versez dans une casserole.',
            'Mixez ensuite tout le reste des ingrédients avec un peu d\'eau, versez dans la même casserole, ajoutez les clous de girofle écrasés, de l\'huile, et le cube maggi, bien mélanger à l\'aide d\'une cuillère et faire mijoter à feu doux pendant 15 min environ pour cuire et éliminer l\'eau du mixage.',
            'Assaisonnez à votre goût, ajoutez du sel et de l\'huile si besoin, remuez, laissez encore au feu 5 min environ.'
        ],
        advices: [
            'Ouvrez les fenêtres pendant la cuisson, elle se conserve longtemps au frigo en ajoutant de temps en temps de l\'huile.'
        ],
        difficult : 2,
        type : TYPE_RECIPE.SAUCE,
        plugin_like : 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fmamie-cameroun.fr%2Frecipe%2F11%2FPUREE%2520DE%2520PIMENT&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943'
    }, {
        id : 10,
        title : 'SAFOU BOUILLI/GRILLE',
        member : '3 personnes',
        time_preparation : '10 min',
        time_cuisson : '20 min',
        description : 'Le safou ou (prune Africaine) est préparé comme un légume, mais c\'est un fruit d\'Afrique, il a un noyau et on ne mange que sa chair.',
        img : [
            'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1614541536120.jpg?raw=true'
        ],
        ingredients : [
            {name : 'Safous', amount : '6', img: 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1614541536105.jpg?raw=true'},
            {name : 'Huile végétale', amount : '1 cs'},
            {name : 'Eau', amount : '1 cs'},
            {name : '[Sel]'}
        ],
        steps : [
            'Lavez les safous, mettez-les dans une casserole assez grande pour remplir le fond, ajoutez de l\'eau, mélangez les safous avec de l\'eau, mettez le couvercle et laissez cuire à feu très doux pendant 10 min environ.',
            'Dès qu\'ils sont tendres, enlevez l\'eau de cuisson à l\'aide du couvercle sans touchez les safous, ajoutez de l\'huile remettez le couvercle, et laissez griller 5 min à feu doux.',
            'Retournez-les en faisant attention de ne pas se brûler, remettez le couvercle et laissez encore griller les autres côtés 5 min.',
            'Vérifier la cuisson, à vue d\'oeil les peaux des safous doivent être fendues.',
            'Retirez les safous dans la casserole, jetez l\'huile de cuisson, ajoutez du sel si besoin et servez chaud.'
        ],
        advices: [
            'Cuisson du safou au choix: bouilli/grillé à la casserole en entier, ou par cuisson sur des braises de votre barbecue par exemple.',
            'Servez chaud accompagné du manioc frais, du bâton de manioc, ou avec du plantin grillé, ect...'
        ],
        difficult : 1,
        type : TYPE_RECIPE.TRADITIONNEL,
        plugin_like : 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fmamie-cameroun.fr%2Frecipe%2F10%2FSAFOU%2520BOUILLI%252FGRILLE&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943'
    }, {
        id : 9,
        title : 'BANANES PLANTAINS PILES',
        member : '3 à 4 personnes',
        time_preparation : '40 min',
        time_cuisson : '30 min',
        description : 'Le plantain pilé est un accompagnement de sauce, c\'est une pâte épaisse simple à réaliser, il suffit d\'avoir un mortier et un pilon.',
        img : [
            'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000356.JPG?raw=true'
        ],
        ingredients : [
            {name : 'Bananes plantains verts', amount : '3', img: 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000337.JPG?raw=true'},
            {name : 'Bananes plantains jaunes', amount : '2', img: 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000337.JPG?raw=true'}
        ],
        steps : [
            'Lavez les plantains, mettez-les dans une bassine d\'eau froide, coupez les extrémités, et coupez chaque banane en deux, épluchez-les dans de l\'eau à l\'aide d\'un couteau, raclez le dessus pour enlever leur couche supérieure contenant les fibres, rincez.',
            'Dans une casserole, mettez les plantains verts au fond et les jaunes au dessus, ajoutez de l\'eau, mettez au feu et faites bouillir pendant 30 min environ à feu moyen.',
            'Préparez le mortier, le pilon, un récipient d\'eau froide, et lavez vous les mains.',
            'Vérifiez la cuisson, dès que vos plantains sont cuits, enlevez l\'eau de cuisson, et attendez  3 min avant de commencer à piler, les plantains doivent être tièdes.',
            'Pilez d\'abord les verts et ajoutez ensuite les jaunes, vous pouvez piler en deux fois suivant la grosseur de votre mortier, de temps en temps mouillez votre main gauche si vous êtes droitier dans le récipient d\'eau, pour tourner la pâte de plantain pour qu\'elle ne colle pas au mortier, en même temps mouillez aussi le bout du pilon dans cette eau.',
            'Continuez à piler énergiquement jusqu\'à obtenir une pâte homogène.',
            'Mouillez vos mains, faites les boules allongées, découpez-les en tranches à l\'aide d\'un couteau et présentez-les dans un plat.'
        ],
        advices: [
            'Vous pouvez piler que des plantains verts, que les plantains jaunes ou mûrs.'
        ],
        difficult : 1,
        type : TYPE_RECIPE.ACCOMPAGNEMENT,
        plugin_like : 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fmamie-cameroun.fr%2Frecipe%2F9%2FBANANES%2520PLANTAINS%2520PILES&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943'
    },
    {
        id : 8,
        title : 'POULET SAUCE D\'ARACHIDE',
        member : '4 à 6 personnes',
        time_preparation : '30 min',
        time_cuisson : '1h30',
        description : 'C\'est un plat délicieux, une sauce onctueuse à base des arachides grillées et écrasées.',
        img : [
            'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000365.JPG?raw=true',
            'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000316.JPG?raw=true'
        ],
        ingredients : [
            {name : 'Poulet fermier', amount : '1,5 kg', img: 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000334.JPG?raw=true'},
            {name : 'Pâte d\'arachide', amount : '5 cs', img: 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000329.JPG?raw=true'},
            {name : 'Tomates', amount : '6', img: 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000325.jpg?raw=true'},
            {name : 'Oignons', amount : '2'},
            {name : 'Gousses d\'ail', amount : '2'},
            {name : 'Petit morceaux de gingembre', amount : '1', img: 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000331.JPG?raw=true'},
            {name : 'Huile végétale', amount : '5 cs'},
            {name : '[Cube maggi]', amount : '1'},
            {name : 'Sel'},
            {name : 'Poivre noir'}
        ],
        steps : [
            'Lavez et épluchez les légumes, coupez un oignon en petits morceaux, mixez les tomates et un oignon, écrasez de l\'ail et le gingembre, réservez.',
            'Coupez le poulet en morceaux, lavez, essuyez.',
            'Faites dorer dans une casserole, ou une cocotte, les morceaux de poulet, des deux côtés avec de l\'huile, réservez.',
            'Dans la même casserole, vérifiez d\'huile qui reste, diminuez-en s\'il y en a de trop, faites revenir l\'oignon coupé en petits morceaux, ajoutez les légumes mixés, l\'ail et le gingembre écrasés, ajoutez 3 verres d\'eau et laissez cuire 10 min à feu moyen.',
            'Rajoutez le poulet, salez, poivrez, assaisonnez à votre goût, laissez mijoter 30 min environ à feu doux.',
            'Pendant la cuisson, prélevez 5 cuillères à soupe de sauce, versez-la dans un saladier, ajoutez la pâte d\'arachide, mélangez de façon à obtenir une crème onctueuse, lisse et sans grumeaux.',
            'Versez doucement cette crème dans la casserole contenant le poulet, mélangez, et laissez cuire 20 min à feu doux, gouttez, rajoutez de l\'eau si vous trouvez la sauce trop épaisse, et servez.'
            ],
        advices: [
            'La sauce d\'arachide peut aussi bien être préparée avec du poisson frais, ou avec du poisson fumé, ou du poulet fumé, ou avec du boeuf, ect...',
            'Servez accompagnée  de foufou, du plantin vert/mur/pilé, ou avec du riz, ect...'
        ],
        difficult : 3,
        type : TYPE_RECIPE.CLASSIQUE,
        plugin_like : 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fmamie-cameroun.fr%2Frecipe%2F8%2FPOULET%2520SAUCE%2520D\'ARACHIDE&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943'
    },
    {
        id : 7,
        title : 'FOUFOU DE MAÏS/MANIOC',
        member : '2 à 3 personnes',
        time_preparation : '10 min',
        time_cuisson : '20 min',
        description : 'C\'est une pâte solide, réalisée à partir de deux farines: farine de maïs et farine de manioc, elle se mange avec une sauce en accompagnement.',
        img : ['https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000299.JPG?raw=true'],
        ingredients : [
            {name : 'Farine de maïs', amount : '200g', img: 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000296.JPG?raw=true'},
            {name : 'Farine de manioc', amount : '100g', img: 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000293.JPG?raw=true'},
            {name : 'Eau chaude'}
        ],
        steps : [
            'Faites bouillir de l\'eau dans une marmite, dès que l\'eau boue, divisez-la en deux parties en conservant le moins d\'eau possible dans la marmite et transférez l\'autre partie de l\'eau bouillante dans un récipient.',
            'Baissez le feu, versez la farine de maïs en pluie dans l\'eau qui se trouve dans la marmite, remuez avec une spatule en bois ou bien avec un pilon, il faut de la force et de l\'énergie pour bien mélanger, ajoutez la farine de manioc, rajoutez l\'eau chaude de réserve petit à petit tout en remuant entre chaque ajout jusqu\'à l\'obtention d\'une pâte homogène, solide.',
            'Coupez la source de chaleur, bloquez votre marmite et mélangez vigoureusement à l\'aide de votre spatule ou pilon en raclant les bords.',
            'La pâte doit être sans grumeaux.',
            'Prenez un grand bol d\'eau froide et une grosse cuillère à soupe ou bien une petite louche, formez les boules de foufou en trempant la cuillère dans le bol d\'eau froide, et puis dans la pâte pour prélever la quantité souhaitée et formez les boules avec l\'aide de vos mains en les trempant dans de l\'eau froide, faire attention de ne pas se brûler, présentez-les dans un plat.',
        ],
        advices: [
            'L\'eau doit rester bien chaude pendant la cuisson.'
        ],
        difficult : 2,
        type : TYPE_RECIPE.ACCOMPAGNEMENT,
        plugin_like : 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fmamie-cameroun.fr%2Frecipe%2F7%2FFOUFOU%2520DE%2520MA%25C3%258FS%252FMANIOC&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943',
    },
    {
        id : 6,
        title : 'MANIOC DOUX CUISSON A L\'EAU',
        member : '4 à 5 personnes',
        time_preparation : '20 min',
        time_cuisson : '25 min',
        description : 'Le manioc frais est un légume, un tubercule farineux apprécié et consommé généralement bouilli, c\'est un aliment très nourrissant.',
        img : [ 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1614201716299.jpg?raw=true'],
        ingredients : [
            {name : 'Manioc frais', amount : '1 kg', img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1614201716342.jpg?raw=true'},
            {name : '[sel]'}
        ],
        steps : [
            'Lavez les maniocs.',
            'A l\'aide d\'un couteau coupez les maniocs en deux, épluchez-les en profondeur ou raclez-les légèrement afin d\'éviter toute amertume. Fendez, enlevez les racines au milieu, coupez en morceaux de taille moyenne, rincez.',
            'Mettez-les dans une casserole, ajoutez de l\'eau à mi-hauteur des morceaux de manioc et salez si besoin, mettez la casserole au feu, dès ébullition, laissez cuire pendant 25 min environ, si l\'eau de cuisson déborde, mettez votre couvercle entrouvert, surveillez la cuisson.',
            'Piquez les maniocs avec le bout d\'un couteau, si le couteau s\'enfonce, votre manioc est cuit, arrêtez la cuisson quand le manioc est tendre, enlevez l\'eau de cuisson et dégustez.'
        ],
        advices: [
            'Choisissez le manioc frais bien ferme. Il accompagne vos plats de poissons, de viandes, vos feuilles de manioc, les safous, ect…'
        ],
        difficult : 1,
        type : TYPE_RECIPE.ACCOMPAGNEMENT,
        plugin_like : 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fmamie-cameroun.fr%2Frecipe%2F6%2FMANIOC%2520DOUX%2520CUISSON%2520A%2520L\'EAU&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943',
    },
    {
        id : 5,
        title : 'FEUILLES DE MANIOC sans sel',
        subtitle : 'Kwem ou Kpwem',
        member : '4 à 5 personnes',
        time_preparation : '30 min',
        time_cuisson : '2h',
        description : 'Les feuilles de manioc, ou purée de feuilles de manioc ou (pkwem) chez les bétis au Cameroun, est un plat très nourrissant. On peut  le préparer sans ou avec sel en ajoutant la viande le poisson ou de la pâte d\'arachide, ect...',
        img : ['https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1614201716313.jpg?raw=true'],
        ingredients : [
            // tslint:disable-next-line:max-line-length
            {name : 'Paquets de feuilles de manioc frais', amount : '3', or_name : 'Sachets de feuilles de manioc surgelés', or_amount : '2'},
            {name : 'Boîte de 500g de jus de noix de palme (sauce graine)', amount : '1'},
            {name : 'Maïs', amount : '1'},
            {name : '[Macabos]', amount : '2'}
        ],
        steps : [
            'Mettez les feuilles de manioc dans une casserole,  ajoutez de l\'eau à hauteur des feuilles, mélangez, couvrez et faites cuire  à feu doux 1h environ, en remuant de temps en temps',
            'Epluchez, lavez les macabos et le maïs, coupez-les en deux si nécessaire, réservez.',
            'Au bout d\'une heure de cuisson, ajoutez dans la préparation les macabos, fermez la casserole et laissez cuire 15 min',
            'Rincez et ouvrez la boîte de jus de noix de palme (sauce graine), enlevez à l\'aide d\'une cuillère l\'huile rouge qui est au dessus, vous pouvez la jeter, versez toujours à l\'aide d\'une cuillère le jus de la boîte dans la casserole, ajoutez en même temps le maïs, remuez, le mélange ne doit pas être épais ni liquide, ajoutez de l\'eau si besoin et faites  cuire encore 30 min environ, gouttez, les feuilles de manioc doivent être tendres et servez chaud.'
        ],

        advices : [
            'Les feuilles de manioc s\'accompagnent avec le manioc frais bouilli, le macabo, le maïs, ou le bâton de manioc, ect...',
            'A la place de la boîte de 500g de jus de noix de palme, vous pouvez mettre la boîte de 800g selon votre goût.'
        ],
        difficult : 2,
        type : TYPE_RECIPE.TRADITIONNEL,
        plugin_like : 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fmamie-cameroun.fr%2Frecipe%2F5%2FFEUILLES%2520DE%2520MANIOC%2520sans%2520sel&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943'
    },
    {
        id : 3,
        title : 'BOEUF SAUCE GOMBO',
        member : '4 à 5 personnes',
        time_preparation : '20 min',
        time_cuisson : '2h30',
        description : 'La sauce gombo est une sauce gluante, à base de gombos frais. Elle accompagne souvent  les plats de viandes,  de crabes, de crevettes, de poissons fumés, ect... Elle est l\'une des sauces les plus célèbres d\'Afrique.',
        img : [
            'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000289.JPG?raw=true',
            'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000306.JPG?raw=true'
        ],
        ingredients : [
            {name : 'Queue de boeuf', amount : '1kg', img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000272.JPG?raw=true'},
            {name : 'Gombos frais', amount : '200g', img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000271.JPG?raw=true'},
            {name : 'Oignons', amount : '2', img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000267.JPG?raw=true'},
            {name : 'Gousses d\'ail', amount : '4', img: 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000265.jpg?raw=true'},
            {name : 'Tomates', amount : '2', img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000268.jpg?raw=true'},
            {name : 'Huile végétale', amount : '3 cs'},
            // tslint:disable-next-line:max-line-length
            {name : '[Cube maggi]', amount : '1', img : 'https://github.com/NinaNekonoran/recette/blob/dev/src/assets/P1000275.jpg?raw=true'},
            {name : 'Sel'},
            {name : 'Poivre'},
        ],
        steps : [
            'Epluchez et lavez les oignons, les gousses d\'ail, et les tomates, coupez-les en petits morceaux.',
            'Apprêtez votre viande, coupez-la en morceaux, rincez et égouttez.',
            'Chauffez de l\'huile dans une casserole, faîtes rissoler la viande en remuant de temps en temps pendant 10 min, ajoutez les légumes coupés en morceaux, assaisonnez à votre goût (cube maggi), salez, poivrez, remuez, couvrez et laissez mijoter à feu doux pendant 20 min en remuant de temps en temps.',
            'Ajoutez ensuite de l\'eau à hauteur de la viande, couvrez et laissez cuire durant 2 h environ',
            'Lavez les gombos, coupez chaque gombo en 4 ou 5 morceaux, réservez.',
            'Faîtes bouillir de l\'eau dans une casserole sans couvercle, ajoutez les gombos, et laissez cuire 20 min environ à feu doux en remuant de temps en temps, faîtes attention que l\'eau de cuisson ne déborde pas.',
            'Dès que les gombos sont cuits, enlevez l\'eau de cuisson, et versez les gombos dans la casserole de viande tendre, remuez, gouttez, assaisonnez encore à votre convenance si besoin, laissez encore mijoter 10 min, et servez avec le foufou de votre choix, ect…',
        ],
        advices : [
            'Vous pouvez utiliser d\'autres morceaux de viande de boeuf : queue de boeuf, boeuf bourguignon ou autres. La sauce gombo s\'accompagne de foufou de manioc, de foufou de maïs, de plantin pilé, vous pouvez  aussi mélanger la farine de maïs avec la farine de manioc, ect...'
        ],
        difficult : 3,
        type : TYPE_RECIPE.TRADITIONNEL,
        plugin_like : 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fmamie-cameroun.fr%2Frecipe%2F3%2FBOEUF%2520SAUCE%2520GOMBO&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943',
    }, {
        id : 2,
        title : 'BOUILLON DE POISSON',
        member : '4 à 6 personnes',
        time_preparation : '20 min',
        time_cuisson : '25 min',
        description : 'Le bouillon de poisson appelé au Cameroun Pèpè Soupe est une recette simple, pimentée, très épicée, elle est délicieuse. Choisissez le poisson à chair ferme: Le bar, le capitaine, le mâchoiron, la carpe, ou le maquereau, évitez les poissons avec beaucoup d\'arrêtes. Vous pouvez remplacer le piment avec du poivre selon votre goût. ',
        img : ['https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1613750628687.jpg?raw=true'],
        ingredients : [
            {name : 'Maquereaux', amount : '2'},
            {name : 'Tomates', amount : '3'},
            {name : 'Gingembre frais', amount : '10g', img : 'https://image.freepik.com/photos-gratuite/gingembre-doux-amer_144627-12044.jpg'},
            {name : 'Oignon', amount : '1'},
            {name : 'Gousse d\'ail', amount : '1'},
            {name : 'Branche de basilic', amount : '1', img: 'https://image.freepik.com/photos-gratuite/gros-plan-basilic-savoureux-mise-au-point-selective_1220-1501.jpg'},
            {name : 'Branche de blanc de poireau', amount : '1', img: 'https://image.freepik.com/photos-gratuite/poireau-surface-blanche_144627-45166.jpg'},
            {name : 'Citron', amount : '1'},
            {name : '[Piment frais]', amount : '1'},
            {name : 'Cuillère d\'huile d\'olive', amount : '2'},
            {name : '[Njansang]', amount : '20g', img: 'https://i.pinimg.com/originals/1b/6f/7b/1b6f7be5b247f2f54b367d4da38f83f5.jpg'},
            {name : '[Pèbé]', amount : '10g', img: 'https://afritibi.com/wp-content/uploads/2017/02/noix-de-pebe.png'},
            {name : 'Sel'},
            {name : 'Poivre'},
        ],
        steps : [
            'Nettoyez, lavez les <b>poissons</b>, coupez-les en 3 ou 4 morceaux, réservez dans un grand saladier rempli d\'eau salée.',
            'Lavez, coupez les légumes en morceaux, mixez les tomates, l\'<b>oignon</b>, le <b>gingembre</b>, le <b>basilic</b>, le <b>poireau</b>, l\'<b>ail</b>, et un petit morceau de <b>piment</b> si besoin, réservez.',
            'Ecrasez le <b>pèbè</b> et le <b>djansang</b> si besoin, réservez.',
            'Videz l\'eau des poissons, ajoutez les ingrédients mixés, écrasés, sans oublier le <b>jus de citron</b> dans le saladier à poissons, <b>poivrez</b>, <b>salez</b>, mélangez bien, et versez le contenu dans une grande casserole à fond épais.',
            'Posez votre casserole sur un feu doux, laissez frémir <b>10 min</b>, ensuite ajoutez de l\'eau, de l\'huile, assaisonnez à votre gout, remuez, et laissez cuire <b>20 min</b> environ.',
            'Gouttez, rectifiez, ajoutez de l\'eau si nécessaire, surtout veillez à ce que les morceaux de poissons restent entiers, laissez encore <b>5 min</b> au feu.'
        ],
        advices : [
            'Le bouillon de poisson se sert chaud accompagné du plantin vert, du manioc, de l\'igname, du macabo, ect...'
        ],
        areImg : true,
        difficult : 2,
        type : TYPE_RECIPE.CLASSIQUE,
        plugin_like : 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fmamie-cameroun.fr%2Frecipe%2F2%2FBOUILLON%2520DE%2520POISSON&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943',
    },
    {
        id : 1,
        title : 'Le SANGA',
        member : '5 à 6 personnes',
        time_preparation : '40 min',
        time_cuisson : '1 h 30 min',
        description : 'Le Sanga est un met composé de légumes (les feuilles de folon, de zom, d\'aubergines, ou les épinards), de maïs en grain doux frais cuits avec du jus de noix de palme et mangé avec ou sans sucre, il est apprécié dans le sud  et presque partout au Cameroun, on peut le consommer en entrée, ou en plat principal.',
        img : ['https://github.com/NinaNekonoran/recette/blob/dev/src/assets/1613750628714.jpg?raw=true'],
        ingredients : [
            {name : 'Folon frais', amount : '1kg ', img: 'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/1616320439297.jpg?raw=true'},
            {name : 'Epis de maïs doux frais', amount : '8-10', img : 'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/1616320439306.jpg?raw=true'},
            {name : 'Boîte de 500g de jus de noix de palme(sauce graine)', amount : '1', img : 'https://github.com/NinaNekonoran/mamie-cameroun/blob/dev/src/assets/1616320439289.jpg?raw=true'}
        ],
        steps : [
            'Triez, lavez, égouttez, coupez le <b>folon</b> en deux',
            'Faites bouillir de l\'eau dans une grande casserole, <b>versez</b> les feuilles de folon dans cet eau bouillante, et laissez cuire pendant <b>15 min</b> sans couvercle, <b>remuez de temps en temps</b> avec une spatule en bois, il faut que les feuilles soient tendres, égouttez, laissez tiédir, ensuite <b>pressez-les</b> avec vos mains pour enlever l\'eau, et <b>hacher-les</b> finement avec un couteau sur une planche en bois',
            '<i>Ou bien hachez le folon frais finement à la main avec un couteau, réservez.</i>',
            'A l\'aide d\'un couteau bien aiguisé, égrenez le <b>maïs</b> par le sens de la longueur en deux étapes, et grattez les épis, réservez.',
            'Mettez les feuilles de folon dans une grande casserole, ajoutez assez d\'eau, mélangez, couvrez et portez à ébullition à feu moyen pendant <b>15 min</b>',
            'Versez ensuite les grains de maïs dans la casserole de folon, mélangez, portez de nouveau à ébullition pendant <b>30 min</b>, remuez de temps en temps',
            'Ajoutez le <b>jus de noix de palme(sauce graine)</b> à la préparation, remuez, laissez encore cuire <b>20 min</b> environ en remuant souvent pour éviter que le mélange colle au fond de la casserole, laissez épaissir, ou ajoutez de l\'eau si besoin, goutez, servez.'
        ],
        advices : [
            '<i>Vous pouvez aussi faire le sanga avec les feuilles d\'épinards, ou les feuilles de zom, ou  les feuilles d\'aubergines.</i>'
        ],
        difficult : 2,
        type : TYPE_RECIPE.TRADITIONNEL,
        plugin_like : 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fmamie-cameroun.fr%2Frecipe%2F1%2FLe%2520SANGA&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId=191725056082943'
    }
];

const presentation = 'Bonjour tout le monde, j\'aime cuisiner de bons plats d\'ici, d\'ailleurs, et de mon enfance.\n' +
    'Depuis l\'âge de 8 ans, ma mère m\'a appris à cuisiner.\n' +
    'La cuisine camerounaise est délicieuse, et très variée. Elle est riche en saveur. On y trouve des épices, des produits végétaux, des poissons, des viandes, sans oublier des fruits tropicaux.\n' +
    'Je vous laisse le temps de découvrir mes quelques recettes simples, familiales, classiques, et traditionnelles.\n' +
    'Je vous souhaite un bon appétit.';

const title = 'Mamie Cameroun';
const mail = 'mamie.cameroun.recettes@gmail.com';
const difficultImage = 'https://raw.githubusercontent.com/NinaNekonoran/recette/6012d758f24b735beb30772383e60ac954a35523/src/assets/diff.svg';

export {recipes, presentation, title, difficultImage, TYPE_RECIPE, mail, NO_IMAGE} ;
