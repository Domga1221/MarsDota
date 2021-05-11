
Mein frontend wurde auf gitlab-pages deployed: 
https://domga1221.gitlab.io/webprog/#/

Die Anwendung wurde mit Bootstrap designed. Im Code sind Links auf die verwendeten Vue-Komponenten enthalten.
Dank Bootstrap ist die Anwendung auch responsive und kann somit auf mobile verwendet werden.

Beschreibung der Architektur:
Die main.js enthält natürlich alle benötigten Imports, das Vue-Objekt und den Vue-Router.
Die Routen selber habe Ich in eine eigene Datei, Routes.js ausgelagert, da Ich zu beginn noch nicht wusste, wie viele Routen ich benötigte.
Dies macht das hinzufügen von Routen einfacher und die main.js wird übersichtlicher.
Die App.vue Komponente rendert die Navbar und die Routerview.
Die Navbar ist eine eigenständige Komponente, was zugleich den Code lesbarer macht, als auch Änderungen an der Navbar erleichtert,
weil Ich mit bootstrap erst ein wenig experimentieren musste.
Die Landing-Page der Anwendung ist die Heroes Komponente. Hier befindet sich eine Bootstrap Card-group, die wiederum die kleinere Komponente
heroCard in der genannten card-group rendert. Die Heroes Komponente macht hier die benötigten http-requests an die Endpunkte von openDota.
Die Daten werden dann mittels props an die heroCard Komponenten weitergegeben.
Die letzte Komponente ist die Hero.vue. Sobald man auf einer Card auf den Button "Hero Details" klickt wird main zu dieser
Seite weitergeleitet. Hier werden heldenspezifische Daten dargestellt.

Starten der Anwendung:
- falls nötig in den richtigen Ordner navigieren
- node module installieren: npm install
- ausführen mit npm run serve
