Ext.define('zonblewou.store.mesStore.Nationalite', {
    extend: 'Ext.data.Store',

    alias: 'store.nationalite',
    //autoLoad: true,
    /*
    Uncomment to use a specific model class
    model: 'User',
    */

    model: 'zonblewou.model.mesModeles.Nationalite',

    //Fields can also be declared without a model class:
    fields: ['nationalite'],

    //Uncomment to specify data inline
    data: [
        { nationalite: 'AFGHANISTAN' },
        { nationalite: 'AFRIQUE DU SUD' },
        { nationalite: 'ALBANIE' },
        { nationalite: 'ALGERIE' },
        { nationalite: 'ALLEMAGNE' },
        { nationalite: 'ANDORRE' },
        { nationalite: 'ANGOLA' },
        { nationalite: 'ANGUILLA' },
        { nationalite: 'ANTIGUA-ET-BARBUDA' },
        { nationalite: 'ANTILLES NEERLANDAISES' },
        { nationalite: 'ARABIE SAOUDITE' },
        { nationalite: 'ARGENTINE' },
        { nationalite: 'ARMENIE' },
        { nationalite: 'ARUBA' },
        { nationalite: 'ASCENSION' },
        { nationalite: 'AUSTRALIE' },
        { nationalite: 'AUTRICHE' },
        { nationalite: 'AZERBAÏDJAN' },
        { nationalite: 'BAHAMAS' },
        { nationalite: 'BAHREÏN' },
        { nationalite: 'BANGLADESH' },
        { nationalite: 'BARBADE' },
        { nationalite: 'BELGIQUE' },
        { nationalite: 'BELIZE' },
        { nationalite: 'BENIN' },
        { nationalite: 'BERMUDES' },
        { nationalite: 'BHOUTAN' },
        { nationalite: 'BIELORUSSIE' },
        { nationalite: 'BIRMANIE' },
        { nationalite: 'BOLIVIE' },
        { nationalite: 'BOSNIE-HERZEGOVINE' },
        { nationalite: 'BOTSWANA' },
        { nationalite: 'BRESIL' },
        { nationalite: 'BRUNEI DARUSSALAM' },
        { nationalite: 'BULGARIE' },
        { nationalite: 'BURKINA-FASO' },
        { nationalite: 'BURUNDI' },
        { nationalite: 'CAMBODGE' },
        { nationalite: 'CAMEROUN' },
        { nationalite: 'CANADA' },
        { nationalite: 'CANADA-QUEBEC' },
        { nationalite: 'CAP-VERT' },
        { nationalite: 'CAYMAN (Iles)' },
        { nationalite: 'CENTRAFRICAINE (République)' },
        { nationalite: 'CHILI' },
        { nationalite: 'CHINE' },
        { nationalite: 'CHYPRE' },
        { nationalite: 'COLOMBIE' },
        { nationalite: 'COMORES' },
        { nationalite: 'CONGO' },
        { nationalite: 'CONGO (Rép. Démocratique)' },
        { nationalite: 'COOK (Iles)' },
        { nationalite: 'CORÉE (Rép. Populaire Démocratique)' },
        { nationalite: 'CORÉE (République de)' },
        { nationalite: 'COSTA RICA' },
        { nationalite: 'COTE D\'IVOIRE' },
        { nationalite: 'CROATIE' },
        { nationalite: 'CUBA' },
        { nationalite: 'DANEMARK' },
        { nationalite: 'DJIBOUTI' },
        { nationalite: 'DOMINICAINE (République)' },
        { nationalite: 'DOMINIQUE' },
        { nationalite: 'EGYPTE' },
        { nationalite: 'EL SALVADOR' },
        { nationalite: 'EMIRATS ARABES UNIS' },
        { nationalite: 'EQUATEUR' },
        { nationalite: 'ERYTHREE' }, ,
        { nationalite: 'ESPAGNE' },
        { nationalite: 'ESTONIE' },
        { nationalite: 'ETATS-UNIS' },
        { nationalite: 'ETHIOPIE' },
        { nationalite: 'FALKLAND (Iles)' },
        { nationalite: 'FEROE (Iles)' },
        { nationalite: 'FIDJI' },
        { nationalite: 'FINLANDE' },
        { nationalite: 'FRANCE' },
        { nationalite: 'GABON' },
        { nationalite: 'GAMBIE' },
        { nationalite: 'GEORGIE' },
        { nationalite: 'GHANA' },
        { nationalite: 'GIBRALTAR' },
        { nationalite: 'GRECE' },
        { nationalite: 'GRENADE' },
        { nationalite: 'GROENLAND' },
        { nationalite: 'GUADELOUPE' },
        { nationalite: 'GUAM' },
        { nationalite: 'GUATEMALA' },
        { nationalite: 'GUINEE' },
        { nationalite: 'GUINEE EQUATORIALE' },
        { nationalite: 'GUINEE-BISSAO' },
        { nationalite: 'GUYANA' },
        { nationalite: 'GUYANE FRANCAISE' },
        { nationalite: 'HAÏTI' },
        { nationalite: 'HONDURAS' },
        { nationalite: 'HONG-KONG' },
        { nationalite: 'HONGRIE' },
        { nationalite: 'ILES VIERGES AMERICAINES' },
        { nationalite: 'ILES VIERGES BRITANNIQUES' },
        { nationalite: 'INDE' },
        { nationalite: 'INDONESIE' },
        { nationalite: 'IRAK' },
        { nationalite: 'IRAN' },
        { nationalite: 'IRLANDE' },
        { nationalite: 'ISLANDE' },
        { nationalite: 'ISRAËL' },
        { nationalite: 'ITALIE' },
        { nationalite: 'JAMAÏQUE' },
        { nationalite: 'JAPON' },
        { nationalite: 'JERUSALEM' },
        { nationalite: 'JORDANIE' },
        { nationalite: 'KAZAKHSTAN' },
        { nationalite: 'KENYA' },
        { nationalite: 'KIRGHIZISTAN' },
        { nationalite: 'KIRIBATI' },
        { nationalite: 'KOSOVO' },
        { nationalite: 'KOWEÏT' },
        { nationalite: 'LAOS' },
        { nationalite: 'LESOTHO' },
        { nationalite: 'LETTONIE' },
        { nationalite: 'LIBAN' },
        { nationalite: 'LIBERIA' },
        { nationalite: 'LIBYE' },
        { nationalite: 'LIECHTENSTEIN' },
        { nationalite: 'LITUANIE' },
        { nationalite: 'LUXEMBOURG' },
        { nationalite: 'MACAO' },
        { nationalite: 'MACEDOINE' },
        { nationalite: 'MADAGASCAR' },
        { nationalite: 'MALAISIE' },
        { nationalite: 'MALAWI' },
        { nationalite: 'MALDIVES (Iles)' },
        { nationalite: 'MALI' },
        { nationalite: 'MALTE' },
        { nationalite: 'MARIANNES (Iles)' }, ,
        { nationalite: 'MAROC' },
        { nationalite: 'MARSHALL (Iles)' },
        { nationalite: 'MARTINIQUE' },
        { nationalite: 'MAURICE' },
        { nationalite: 'MAURITANIE' },
        { nationalite: 'MAYOTTE' },
        { nationalite: 'MEXIQUE' },
        { nationalite: 'MICRONESIE' },
        { nationalite: 'MOLDAVIE' },
        { nationalite: 'MONACO' },
        { nationalite: 'MONGOLIE' },
        { nationalite: 'MONTENEGRO' },
        { nationalite: 'MONTSERRAT' },
        { nationalite: 'MOZAMBIQUE' },
        { nationalite: 'NAMIBIE' },
        { nationalite: 'NAURU' },
        { nationalite: 'NEPAL' },
        { nationalite: 'NICARAGUA' },
        { nationalite: 'NIGER' },
        { nationalite: 'NIGERIA' },
        { nationalite: 'NIUE' },
        { nationalite: 'NORFOLK (Ile)' },
        { nationalite: 'NORVEGE' },
        { nationalite: 'NOUVELLE CALEDONIE' },
        { nationalite: 'NOUVELLE-ZELANDE' },
        { nationalite: 'OMAN' },
        { nationalite: 'OUGANDA' },
        { nationalite: 'OUZBEKISTAN' },
        { nationalite: 'PAKISTAN' },
        { nationalite: 'PALAOS' },
        { nationalite: 'PANAMA' },
        { nationalite: 'PAPOUASIE-NOUVELLE-GUINEE' },
        { nationalite: 'PARAGUAY' },
        { nationalite: 'PAYS-BAS' },
        { nationalite: 'PEROU' },
        { nationalite: 'PHILIPPINES' },
        { nationalite: 'POLOGNE' },
        { nationalite: 'POLYNESIE FRANCAISE' },
        { nationalite: 'PORTO RICO, USA' },
        { nationalite: 'PORTUGAL' },
        { nationalite: 'QATAR' },
        { nationalite: 'REUNION' },
        { nationalite: 'ROUMANIE' },
        { nationalite: 'ROYAUME-UNI' },
        { nationalite: 'RUSSIE' },
        { nationalite: 'RWANDA' },
        { nationalite: 'SAINTE-HELENE' },
        { nationalite: 'SAINTE-LUCIE' },
        { nationalite: 'SAINT-KITTS-ET-NEVIS' },
        { nationalite: 'SAINT-MARIN' },
        { nationalite: 'SAINT-PIERRE-ET-MIQUELON' },
        { nationalite: 'SAINT-VINCENT-ET-LES-GRENADINES' },
        { nationalite: 'SALOMON (Iles)' },
        { nationalite: 'SAMOA AMERICAINES' },
        { nationalite: 'SAMOA OCCIDENTALES' },
        { nationalite: 'SAO TOME ET PRINCIPE' }, ,
        { nationalite: 'SENEGAL' },
        { nationalite: 'SERBIE' },
        { nationalite: 'SERBIE ET MONTENEGRO' },
        { nationalite: 'SEYCHELLES' },
        { nationalite: 'SIERRA LEONE' },
        { nationalite: 'SINGAPOUR' },
        { nationalite: 'SLOVAQUIE' },
        { nationalite: 'SLOVENIE' },
        { nationalite: 'SOMALIE' },
        { nationalite: 'SOUDAN' }, ,
        { nationalite: 'SOUDAN DU SUD' },
        { nationalite: 'SRI LANKA' },
        { nationalite: 'SUEDE' },
        { nationalite: 'SUISSE' },
        { nationalite: 'SURINAME' },
        { nationalite: 'SWAZILAND' },
        { nationalite: 'SYRIE' },
        { nationalite: 'TADJIKISTAN' },
        { nationalite: 'TAIWAN' },
        { nationalite: 'TANZANIE' },
        { nationalite: 'TCHAD' },
        { nationalite: 'TCHEQUE (République)' },
        { nationalite: 'TERRITOIRES PALESTINIENS' },
        { nationalite: 'THAÏLANDE' },
        { nationalite: 'TIMOR ORIENTAL' },
        { nationalite: 'TOGO' },
        { nationalite: 'TOKELAU' },
        { nationalite: 'TONGA (Iles)' },
        { nationalite: 'TRINITE-ET-TOBAGO' },
        { nationalite: 'TUNISIE' },
        { nationalite: 'TURKMENISTAN' },
        { nationalite: 'TURKS ET CAICOS' },
        { nationalite: 'TURQUIE' },
        { nationalite: 'TUVALU' },
        { nationalite: 'UKRAINE' },
        { nationalite: 'URUGUAY' },
        { nationalite: 'VANUATU' },
        { nationalite: 'VENEZUELA' },
        { nationalite: 'VIETNAM' },
        { nationalite: 'WALLIS-ET-FUTUNA' },
        { nationalite: 'YEMEN' },
        { nationalite: 'ZAMBIE' },
        { nationalite: 'ZIMBABWE' }

    ]

});