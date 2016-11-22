var express = require('express');
var router = express.Router();
var catalogue = require("../model/catalogue/catalogue.js");

/** GET workshops listing. **/
router.get('/', function(req, res, next) {
    catalogue.getWorkshops().then(function (data) {
        res.json({
            state: "success",
            data: data
        });
    });
});

// POST
/*
 {
 "title": "Paper Plane Factory",
 "author": "Sébastien Mosser",
 "time_max": 60,
 "content" : {
 "steps": [
 {
 "title": "Intro",
 "description": "Présenter le folklore de l’atelier, les notions travaillées, pourquoi c’est important dans leur projet. Parler du fait que l’atelier est une métaphore, qu’ils retireront de cet atelier ce qu’ils auront investi dedans.",
 "timing": 0,
 "duration": 5
 },
 {
 "title": "Essai",
 "description": "“Fabrique moi un avion”. Chaque constructeur a 2 minutes pour construire un avion. Éluder les questions posées par les équipes, en insistant sur le fait que c’est eux les constructeurs d’avion.",
 "timing": 5,
 "duration": 2
 },
 {
 "title": "Debrief",
 "description": ["Regarder les avions fabriqués. Rejeter les avions pour des raisons de plus ou moins bonne fois:", "- Est-ce qu’il vole ?", "- Est-ce qu’il a un cockpit pour mettre le pilote ?", "- Est-ce qu’il y a une porte pour faire rentrer les gens ?", "- Est-ce qu’il y a des hublots pour voir dehors ?", "- Est-ce qu’on peut peindre mon logo sur les ailes ?", "- ..."],
 "timing": 7,
 "duration": 5
 },
 {
 "title": "Prototype",
 "description": ["1. Distribuer la spécification de l’avion commandé par l’armée.", "2. Laisser 2 minutes pour  fabriquer un avion.", "3. Une fois fini, laisser une minute pour donner une estimation de combien d’avion pourront être construit en deux minutes.", "4. Noter l’estimé dans l’excel de suivi"],
 "timing": 13,
 "duration": 5
 },
 {
 "title": "Itération 1",
 "description": ["Annoncer un jeu de contraintes imprévues:", "- Pas le droit de stocker des matières premières sur le site;", "- Une chaîne de production (pas de construction en parallèle)", "- 12 hublots (6 de chaque côté)", "- Un cockpit et au moins une porte", "- Logo de la compagnie sur les ailes", "- L’avion doit supporter un vol d’essai sur la piste", "- On peut garder un avion “incomplet” sur la chaîne d’une itération à l’autre", "Revoir les estimations. Lancer la phase de construction (2 minutes). Récupérer les nombres d’avion livrés, les noter dans le excel.", "Laisser 2 minutes de débriefing interne aux équipes. Ils doivent donner à la fin une nouvelle estimation pour l’itération suivante. Rappeler que le contrat sera remporté par le constructeur qui construit le plus d’avion, mais aussi de la manière la plus prévisible (donc avec les meilleurs estimations). Jeter les avions construits pendant le débriefing (ménage en cours de route).", "Les pousser à s’améliorer en donnant le record obtenu (44 avions construits en 5 itérations)"],
 "timing": 18,
 "duration": 8
 },
 {
 "title": "Itération 2",
 "description": ["1. Phase de construction (2 minutes)", "2. Noter le nb de produits livrés", "3. Phase de débrief (2 minutes)", "4. Noter les estimations"],
 "timing": 26,
 "duration": 5
 },
 {
 "title": "Itération 3",
 "description": ["1. Phase de construction (2 minutes)", "2. Noter le nb de produits livrés", "3. Phase de débrief (2 minutes)", "4. Noter les estimations", "Ajouter pendant le débrief quelques feuilles de couleur différentes"],
 "timing": 31,
 "duration": 5
 },
 {
 "title": "Itération 4",
 "description": ["1. Phase de construction (2 minutes)", "2. Noter le nb de produits livrés. Annoncer au choix :", "a. “Les avions de couleurs ≠ ne sont pas conforme”", "b. ou “Les avions de couleurs ≠ compte double”", "3. Phase de débrief (2 minutes)", "4. Noter les estimations"],
 "timing": 36,
 "duration": 5
 },
 {
 "title": "Itération 5",
 "description": ["1. Phase de construction (2 minutes)", "2. Noter le nb de produits livrés", "3. Phase de débrief (2 minutes)", "4. Noter les estimations", "Ajouter pendant le débrief quelques feuilles de couleur différentes"],
 "timing": 41,
 "duration": 5
 },
 {
 "title": "Debrief",
 "description": ["Mettre tous les participants debout en rond dans la salle (où dehors s’il fait beau). Utiliser une balle de parole pour  faire circuler la parole dans le groupe. Questions potentielle pour alimenter le débat:", "- Est-ce que la création du prototype a aidée ?", "- Comment ont évolués les estimations des prototypes ?", "- Rôle des rétrospective dans le processus ?", "- Comment avoir vécu les contraintes qui apparaissent ?", "- Sentiment vis à vis des différents cycles ?", "- Rôle dans l’équipe ? Évolution avec les rétrospectives ?", "Lien avec"],
 "timing": 46,
 "duration": 10
 },
 {
 "title": "Fin de l’atelier",
 "timing": 56,
 "duration": 0
 }
 ],
 "source": "http://agileway.com.br/2009/11/16/the-airplane-factory-game/ ",
 "folklore": "L’armée de l’air norvégienne cherche à remplacer un sous-ensemble de sa flotte. Chaque équipe (de 3-4 participants) représente un constructeur aérien, dont l’objectif est de remporter le marché. L’armée achètera auprès du constructeur capable de fabriquer le plus d’avion possible, de la manière la plus prévisible possible.",
 "educational_aims" : ["Travail itératif", "Amélioration continue", "Prévisions", "Rétrospective"],
 "equipment": ["Autant d’îlots de tables (2 tables == un site de prod) que d’équipes (6 ou 7 max)", "Une “piste d’essai” au fond de la salle (tables en long)", "Un stock de matières premières (brouillons d’examen) sur le devant de la salle", "Une feuille “plan d’avion” par équipe", "Un ordi + vidéoprojecteur pour remplir l’excel de suivi et afficher le chrono", "Quelques feuilles de couleur différentes pour les dernières itérations", "Balle de parole pour le débrief final", "Grosses poubelles pour jeter les avions construits"]
 }
 }
 */
router.post('/', function(req, res, next) {
    catalogue.saveWorkshop(req.body)
        .then(function (result) {
            return res.json({
                state: "success",
                data: result
            });
        })
        .then(function (error) {
            console.log(error);
            res.json({
                state: "error",
                data: error
            })
    });
});

/** GET workshop **/
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    catalogue.getWorkshop(id).then(function (data) {
        if (data) {
            res.json({
                state: "success",
                data: data
            });
        } else {
            res.json({
                state: "error",
                data: "NOT_FOUND"
            })
        }
    });

});
module.exports = router;