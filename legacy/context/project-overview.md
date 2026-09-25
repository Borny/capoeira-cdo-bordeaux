# Capoeira CDO Bordeaux

Simple page using HTML, CSS and Javascript to list our capoeira classes and showing info about times, prices and locations. The page will be in french.

## Layout

- Hero section with a nice visual, the name Capoeira CDO Bordeaux
- Classes section: St-Médard-en-Jalles, Bordeaux Bastide, Lormont, Le Porge, Lacanau et Le Pian Médoc. It should show the locations as cards with a photo, title, times, ages and address
- Footer with basic info
- The page should be responsive
- smooth scroll on navigation

## Sections

### Hero

3 parts: 
- banner
- header
- main section

=> **Banner** at the top with the text: "Nouveau site 2026-2027 en construction" (bold text, uppercase) then "Toutes les infos essentielles sont ici" (normal font size and weight).
This banner should be hideable with a simple cross icon on the right. 
Background should be secondary color and text and close icon Ink Black.
Text should be centered

=> **Header**: Capoeira CDO Bordeaux logo on left (use the logo-capoeira-CDo-bordeaux.png file in the public folder) 
- Background color: Cream Primary
- instagram icon: https://www.instagram.com/capoeiracdobordeaux/
- facebook icon: https://www.facebook.com/capoeiraCDObordeaux/directory_contact_info

=> **Main section**:
- Main Text: "Capoeira", black, h1 tag, uppercase, font family 
- Secondary text: "+ de 20 ans à faire vivre la capoeira autour de Bordeaux, entre *mouvement, *culture, *transmission, et *énergie collective." => words with the asteriks should be capoeira gold without the asteriks
- Button "Trouver mon cours" with location icon. background capoeira gold and text black. linked to the "Antennes" section. square with rounded angles

### Antennes

=> Main text: 
"La Capoeira près de chez vous" 
"Nos antennes" 
"Retrouvez les cours de Capoeira CDO Bordeaux dans plusieurs communes de la métropole et du littoral girondin."
Style: keep the same font for all the text of this section's header

=> **Cards**

| Antenne | Contact |  Ages | Jours | Horaires | Address |
| -------- | ------- | --- | -- | -- | -- |
| **Saint-Médard-en-Jalles** |07 83 51 06 43 |||||
|| | Adultes | Lundi, Mercredi | 19h30-21h | Salle Louise Michelle |
| || Adultes | Samedi | 11h30-13h |Salle Léo Lagrange |
|  ||  Enfants 4-6 ans | Mercredi | 16h45-17h30 |Salle Louise Michelle  |
|  ||  Enfants 7-9 ans | Mercredi | 17h30-18h30 |Salle Louise Michelle |
|  ||  Enfants 10-12 ans | Mercredi | 18h30-19h30 | Salle Louise Michelle |
|  ||  Enfants 7-12 ans | Samedi | 10h-11h30 | Salle Léo Lagrange |
| **Bordeaux Bastide** | 06 45 07 96 62 |  | |  ||
|  |  | Adultes | Mardi | 19h30-21h | Centre d'animation Bastide Queyries |
|  |  | Adultes | Jeudi | 20h-21h30 | Centre d'animation Bastide Queyries |
|  |  | Enfants 4-6 ans | Lundi | 17h-17h45 | Le Gymnase rue Jean Sabarots |
|  |  | Enfants 7-10 ans | Lundi | 18h-18h45 | Le Gymnase rue Jean Sabarots |
| **Lormont** | 07 83 51 06 43 |  | |  ||
|  | | Enfants 4-6 ans | Lundi | 17h45-18h30 | Salle LESCALLE |
|  | | Enfants 7-12 ans | Lundi | 18h45-19h30 | Salle LESCALLE |
|  | | Adultes | Lundi | 19h30-21h | Salle LESCALLE |
| **Lacanau** | 06 87 04 77 24 |  | |  |
|  |  | Enfants 4-6 ans | Jeudi | 17h30-18h15 | Dojo du COSEC |
|  |  | Enfants 7-12 ans | Jeudi | 18h15-19h30 | Dojo du COSEC |
|  |  | Adultes | Jeudi | 19h30-21h | Dojo du COSEC |
| **Le Porge** | 07 83 51 06 43 |  | |  | |
|  | | Enfants 4-6 ans | Mardi  | 17h45-18h30 | Dojo |
|  | | Enfants 7-12 ans | Mardi  | 18h45-19h30 | Dojo |
|  | | Ados et Adults | Mardi | 19h30-21h | Dojo |
| **Le Pian Médoc** | 0659308200 |  | | | |
|  |  | Enfants 7-12 ans  | Mardi, jeudi  | 18h-19h | |
|  |  | Adultes  | Mardi, jeudi  | 19h-20h30 | |

=> styles: 
- card: background color black, location icon and age title capoeira gold color.
two columns: left kids and right adults.
Don't duplicate the age, just add the class

### Footer

- Text: "@ Capoeira CDO Bordeaux - Tous droits réservés"
- Text centered, color black, normal font size
- Background color White

## Styles 

- Primary color: 
- Secondary color - "Capoeira Gold": #EAB81E 
- Cream - "Cream primary": #F5F1EE
- Cream Variant - "Cream secondary": #F3ECE9
- Charcoal - : #434146
- Stone gray - : #8C8C8C
- Berimbau orange - : #F39433
- Deap Teal - : #0A333B
- Cordão Sand - : #DAC9B2
- Pale Lilac - : #EDDEF4
- Black - "Ink Black": #000000
- White - "White": #FFFFFF

## Files and folders

- Use the public folder for images and svgs
- Use a src folder for css and javascript
- Use the index.html file as an entry 
- Ignore the php file

Don't read below, this is for a later use
<!-- I have a project in mind. A capoeira webapp with the following features/pages:
A part accessible by any user: 
home page listing the different venues of the capoeira classes 
a page for each class with a description of the professor, the times and prices
a page for describing capoeira and our group in Bordeaux France

A part where users need to authenticate -->