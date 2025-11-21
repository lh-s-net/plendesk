# Apps Setup für PlenDesk Carousel

## Übersicht
Die Hauptseite (page.tsx) zeigt jetzt ein Carousel mit Apps aus der Convex-Datenbank.

## Struktur

### Schema (src/convex/schema.ts)
Die Apps-Tabelle enthält folgende Felder:
- `appId` (string): Eindeutige ID der App (z.B. "pd_planner")
- `title` (string): Anzeigename der App (z.B. "Planner")
- `description` (string): Beschreibung der App
- `isActive` (boolean): Ob die App aktiv ist und angezeigt werden soll

### Queries & Mutations (src/convex/apps.ts)
- `getActiveApps`: Ruft alle aktiven Apps ab
- `getAllApps`: Ruft alle Apps ab
- `addApp`: Fügt eine neue App hinzu
- `seedApps`: Fügt die drei Standard-Apps hinzu (pd_planner, pd_calc, pd_mypd)

## Erste Schritte

### 1. Convex starten
```bash
npm run convex:dev
```

### 2. Apps in die Datenbank einfügen

#### Option A: Über Convex Dashboard
1. Öffne das Convex Dashboard (Link wird im Terminal angezeigt)
2. Gehe zu "Functions"
3. Führe die Mutation `apps:seedApps` aus
4. Dies fügt automatisch die drei Standard-Apps ein

#### Option B: Manuell über das Dashboard
1. Öffne das Convex Dashboard
2. Gehe zu "Data" → "apps"
3. Füge manuell Apps hinzu mit den Feldern:
   - appId: "pd_planner"
   - title: "Planner"
   - description: "Planne deine Termine und noch viel mehr..."
   - isActive: true

Wiederhole dies für:
- pd_calc (Calculator)
- pd_mypd (MyPD)

### 3. App starten
```bash
npm run dev
```

Die Hauptseite zeigt jetzt das Carousel mit den aktiven Apps.

## Neue Apps hinzufügen

Um neue Apps hinzuzufügen, kannst du:
1. Die Mutation `addApp` im Convex Dashboard aufrufen
2. Manuell über das Convex Dashboard Daten hinzufügen
3. Eine eigene Admin-Oberfläche erstellen

## Dynamisches System

Das System ist vollständig dynamisch - du kannst beliebig viele Apps in der Convex-Datenbank hinzufügen, und sie werden automatisch im Carousel angezeigt (sofern `isActive: true`).
